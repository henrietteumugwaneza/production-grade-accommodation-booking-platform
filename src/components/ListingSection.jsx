import ListingCard from "./ListingCard";

function ListingSection({ title, listings, onFavoriteToggle }) {
  return (
    <div className="my-6">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      
      {listings.length === 0 ? (
        <p className="text-gray-500 text-center py-12">No listings found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {listings.map((item) => (
            <ListingCard
              key={item.id}
              item={item}
              onFavoriteToggle={onFavoriteToggle}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ListingSection;