import { useFavorites } from "../context/FavoritesContext";
import ListingCard from "../components/ListingCard";
import MainLayout from "../layouts/MainLayout";

function Favorites() {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Favorites ❤️</h1>

        {favorites.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🤍</div>
            <p className="text-gray-500 text-lg mb-4">No favorites yet</p>
            <p className="text-gray-400 mb-6">Start adding properties you love!</p>
            <a 
              href="/"
              className="inline-block bg-[color:var(--color-primary)] text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
            >
              Browse Listings
            </a>
          </div>
        ) : (
          <>
            <p className="text-gray-600 mb-6">{favorites.length} {favorites.length === 1 ? 'property' : 'properties'} saved</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {favorites.map((item) => (
                <ListingCard 
                  key={item.id} 
                  item={item} 
                  onFavoriteToggle={toggleFavorite}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </MainLayout>
  );
}

export default Favorites;