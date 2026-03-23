import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

function ListingCard({ item, onFavoriteToggle }) {
  const { isFavorite } = useFavorites();
  
  return (
    <div className="w-60 bg-white rounded-xl shadow-md overflow-hidden relative">
      <Link to={`/listing/${item.id}`}>
        <img
          src={item.images?.[0] || "https://via.placeholder.com/300x200?text=No+Image"}
          alt={item.name}
          className="w-full h-40 object-cover hover:opacity-90 transition"
        />
      </Link>

      {/* Favorite Heart */}
      <button
        onClick={() => onFavoriteToggle(item)}
        className="absolute top-2 right-2 bg-white p-1 rounded-full shadow hover:bg-gray-100 transition"
      >
        {isFavorite(item.id) ? "❤️" : "🤍"}
      </button>

      <div className="p-3">
        <Link to={`/listing/${item.id}`} className="hover:text-[color:var(--color-primary)]">
          <h2 className="text-sm font-semibold truncate">{item.name}</h2>
        </Link>
        <p className="text-xs text-gray-500">{item.location}</p>
        <p className="text-sm font-bold text-blue-600">${item.price} / night</p>
        <p className="text-xs text-gray-400">⭐ {item.rating}</p>
      </div>
    </div>
  );
}

export default ListingCard;