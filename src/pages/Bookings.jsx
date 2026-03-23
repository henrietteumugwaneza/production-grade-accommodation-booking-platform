import MainLayout from "../layouts/MainLayout";

function Bookings() {
  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-6">Your Bookings 📅</h1>

      <p className="text-gray-500">
        You have no bookings yet.
      </p>
    </MainLayout>
  );
}

export default Bookings;