import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import MainLayout from "../layouts/MainLayout";
import { getListingById } from "../services/listings";
import Loader from "../components/Loader";
import ErrorState from "../components/ErrorState";
import BookingForm from "../components/BookingForm";
import { useFavorites } from "../context/FavoritesContext";

function ListingDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toggleFavorite, isFavorite } = useFavorites();
  
  const { data: listing, isLoading, error } = useQuery({
    queryKey: ["listing", id],
    queryFn: () => getListingById(id),
    staleTime: 1000 * 60 * 5
  });

  const handleBookingSuccess = () => {
    alert("Booking confirmed! Check your bookings page.");
    navigate("/bookings");
  };

  if (isLoading) return <MainLayout><Loader /></MainLayout>;
  if (error) return <MainLayout><ErrorState error={error} /></MainLayout>;
  if (!listing) return <MainLayout><ErrorState error={{ message: "Listing not found" }} /></MainLayout>;

  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto">

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
          <img
            src={listing.images?.[0] || "https://via.placeholder.com/800x600?text=No+Image"}
            alt={listing.name}
            className="w-full h-96 object-cover rounded-2xl"
          />
          <div className="grid grid-cols-2 gap-2">
            {listing.images?.slice(1, 5).map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${listing.name} ${idx + 2}`}
                className="w-full h-[11.5rem] object-cover rounded-xl"
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Info */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-3xl font-bold mb-2">{listing.name}</h1>
                <p className="text-gray-500">{listing.location}</p>
              </div>
              
              <button
                onClick={() => toggleFavorite(listing)}
                className="text-3xl hover:scale-110 transition"
              >
                {isFavorite(listing.id) ? "❤️" : "🤍"}
              </button>
            </div>

            <div className="flex items-center gap-4 mb-6 pb-6 border-b">
              <span className="text-lg">⭐ {listing.rating}</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-600">{listing.location}</span>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">About this place</h2>
              <p className="text-gray-600 leading-relaxed">
                {listing.description || "This is a beautiful and comfortable place to stay. Perfect for vacation, business trips, or relaxation."}
              </p>
            </div>

            {listing.amenities?.length > 0 && (
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">Amenities</h2>
                <div className="grid grid-cols-2 gap-3">
                  {listing.amenities.slice(0, 8).map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span>✓</span>
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: Booking Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <BookingForm listing={listing} onSuccess={handleBookingSuccess} />
            </div>
          </div>
        </div>

      </div>
    </MainLayout>
  );
}

export default ListingDetails;