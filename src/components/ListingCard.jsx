import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

function ListingCard({ item, onFavoriteToggle }) {
  const { isFavorite } = useFavorites();
  
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden relative group">
      <Link to={`/listing/${item.id}`} className="block">
        <div className="relative overflow-hidden">
          <img
            src={item.images?.[0] || "https://via.placeholder.com/400x300?text=No+Image"}
            alt={item.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Favorite Heart */}
          <button
            onClick={(e) => {
              e.preventDefault();
              onFavoriteToggle(item);
            }}
            className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white hover:scale-110 transition-all z-10"
          >
            {isFavorite(item.id) ? (
              <span className="text-xl">❤️</span>
            ) : (
              <span className="text-xl">🤍</span>
            )}
          </button>
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/listing/${item.id}`} className="hover:text-[color:var(--color-primary)] transition">
          <h3 className="font-semibold text-lg mb-1 truncate">{item.name}</h3>
        </Link>
        <p className="text-sm text-gray-600 mb-2">{item.location}</p>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg font-bold text-[color:var(--color-primary)]">
              ${item.price}
              <span className="text-sm font-normal text-gray-600"> / night</span>
            </p>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">⭐</span>
            <span className="text-sm font-semibold">{item.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListingCard;