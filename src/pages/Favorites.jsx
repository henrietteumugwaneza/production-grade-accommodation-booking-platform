import { useFavorites } from "../context/FavoritesContext";
import ListingCard from "../components/ListingCard";
import MainLayout from "../layouts/MainLayout";

function Favorites() {
  const { favorites } = useFavorites();

  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-6">Your Favorites ❤️</h1>

      {favorites.length === 0 ? (
        <p className="text-gray-500">No favorites yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((item) => (
            <ListingCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </MainLayout>
  );
}

export default Favorites;