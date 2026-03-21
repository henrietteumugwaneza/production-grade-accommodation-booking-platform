function ListingCard() {
  return (
    <div className="bg-white rounded-[var(--radius-xl2)] shadow-[var(--shadow-card)] overflow-hidden hover:scale-[1.02] transition">
      
      <img
  src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
  alt="listing"
  className="w-full h-48 object-cover"
   />

      <div className="p-4">
        <h2 className="font-semibold text-lg">Beautiful Apartment</h2>
        <p className="text-gray-500 text-sm">Kigali, Rwanda</p>

        <div className="flex justify-between items-center mt-2">
          <span className="font-bold">$120 / night</span>
          <span className="text-sm">⭐ 4.8</span>
        </div>
      </div>

    </div>
  );
}

export default ListingCard;