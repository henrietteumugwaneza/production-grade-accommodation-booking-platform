import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ListingSection from "../components/ListingSection";
import { useFavorites } from "../context/FavoritesContext";
import { getListings } from "../services/listings";
import Loader from "../components/Loader";
import ErrorState from "../components/ErrorState";
import FilterPanel from "../components/FilterPanel";

function Home() {
  const { toggleFavorite } = useFavorites();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q") || "";
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 500,
    minRating: 0,
    location: ""
  });
  
  const { data: listings, isLoading, error, refetch } = useQuery({
    queryKey: ["listings"],
    queryFn: getListings,
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 10 // 10 minutes
  });

  // Apply filters and search
  const filteredListings = useMemo(() => {
    if (!listings) return [];
    
    return listings.filter(listing => {
      const matchesPrice = listing.price >= filters.minPrice && listing.price <= filters.maxPrice;
      const matchesRating = listing.rating >= filters.minRating;
      const matchesLocation = !filters.location || 
        listing.location.toLowerCase().includes(filters.location.toLowerCase());
      const matchesSearch = !searchQuery || 
        listing.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.location.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesPrice && matchesRating && matchesLocation && matchesSearch;
    });
  }, [listings, filters, searchQuery]);

  const handleFavoriteToggle = (item) => {
    toggleFavorite(item);
  };

  if (isLoading) return <MainLayout><Loader /></MainLayout>;
  if (error) return <MainLayout><ErrorState error={error} onRetry={refetch} /></MainLayout>;

  return (
    <MainLayout>
      <div className="flex gap-6">
        {/* Sidebar Filters */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <FilterPanel onFilterChange={setFilters} />
        </aside>
        
        {/* Main Content */}
        <div className="flex-1">
          {searchQuery && (
            <p className="mb-4 text-gray-600">
              Showing results for: <span className="font-semibold">{searchQuery}</span>
            </p>
          )}
          
          <ListingSection
            title={`Available Listings (${filteredListings.length})`}
            listings={filteredListings}
            onFavoriteToggle={handleFavoriteToggle}
          />
          
          {filteredListings.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No listings match your criteria</p>
              <button 
                onClick={() => setFilters({ minPrice: 0, maxPrice: 500, minRating: 0, location: "" })}
                className="mt-4 text-blue-600 hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}

export default Home;