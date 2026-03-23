import ListingCard from "./ListingCard";

function ListingSection({ title, listings, onFavoriteToggle }) {
  return (
    <div className="my-6">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <div className="flex gap-4 overflow-x-auto py-2">
        {listings.map((item) => (
          <ListingCard
            key={item.id}
            item={item}
            onFavoriteToggle={onFavoriteToggle}
          />
        ))}
      </div>
    </div>
  );
}

export default ListingSection;