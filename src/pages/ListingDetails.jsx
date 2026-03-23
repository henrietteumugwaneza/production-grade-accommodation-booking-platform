import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

function ListingDetails() {
  const { id } = useParams();

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto">

        {/* Image */}
        <img
          src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
          alt="listing"
          className="w-full h-80 object-cover rounded-2xl"
        />

        {/* Info */}
        <div className="mt-6">
          <h1 className="text-3xl font-bold mb-2">
            Beautiful Apartment #{id}
          </h1>

          <p className="text-gray-500 mb-4">
            Kigali, Rwanda
          </p>

          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-bold">$120 / night</span>
            <span>⭐ 4.8</span>
          </div>

          <p className="text-gray-600 leading-relaxed">
            This is a beautiful and comfortable place to stay.
            Perfect for vacation, business trips, or relaxation.
          </p>

          <button className="mt-6 bg-[color:var(--color-primary)] text-white px-6 py-3 rounded-full">
            Book Now
          </button>
        </div>

      </div>
    </MainLayout>
  );
}

export default ListingDetails;