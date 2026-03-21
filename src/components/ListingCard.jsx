function ListingCard() {
  return (
    <div className="bg-white rounded-xl2 shadow-card overflow-hidden hover:scale-[1.02] transition">
      
      <img
        src="https://via.placeholder.com/300"
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