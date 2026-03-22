function ListingCard({ item }) {
  return (
    <div className="group bg-white rounded-[var(--radius-xl2)] shadow-[var(--shadow-card)] overflow-hidden cursor-pointer">

      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={item?.images?.[0] || "https://images.unsplash.com/photo-1505691938895-1758d7feb511"}
          alt="listing"
          className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-4">

        <h2 className="font-semibold text-lg truncate">
          {item?.name || "Beautiful Stay"}
        </h2>

        <p className="text-gray-500 text-sm">
          {item?.location || "Kigali"}
        </p>

        <div className="flex justify-between items-center mt-3">
          <span className="font-bold text-[color:var(--color-dark)]">
            ${item?.price || 120}
            <span className="text-gray-500 text-sm"> / night</span>
          </span>

          <span className="text-sm font-medium">
            ⭐ {item?.rating || 4.8}
          </span>
        </div>

      </div>
    </div>
  );
}

export default ListingCard;