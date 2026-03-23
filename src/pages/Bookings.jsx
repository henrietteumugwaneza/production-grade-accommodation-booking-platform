import MainLayout from "../layouts/MainLayout";
import { useBookingStore } from "../stores/bookingStore";
import { Link } from "react-router-dom";

function Bookings() {
  const { bookings, cancelBooking, removeBooking } = useBookingStore();
  
  const activeBookings = bookings.filter(b => b.status === 'confirmed');
  const cancelledBookings = bookings.filter(b => b.status === 'cancelled');

  const handleCancel = (bookingId) => {
    if (window.confirm("Are you sure you want to cancel this booking?")) {
      cancelBooking(bookingId);
    }
  };

  const handleRemove = (bookingId) => {
    if (window.confirm("Are you sure you want to remove this booking?")) {
      removeBooking(bookingId);
    }
  };

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">My Bookings</h1>

      {bookings.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg mb-4">No bookings yet</p>
          <Link 
            to="/"
            className="inline-block bg-[color:var(--color-primary)] text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
          >
            Browse Listings
          </Link>
        </div>
      ) : (
        <>
          {/* Active Bookings */}
          {activeBookings.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Active Bookings ({activeBookings.length})</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeBookings.map((booking) => (
                  <div key={booking.id} className="bg-white rounded-xl shadow-md overflow-hidden border">
                    <img
                      src={booking.listingImage || "https://via.placeholder.com/400x200"}
                      alt={booking.listingName}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2">{booking.listingName}</h3>
                      <div className="text-sm text-gray-600 space-y-1 mb-3">
                        <p>Check-in: {new Date(booking.checkIn).toLocaleDateString()}</p>
                        <p>Check-out: {new Date(booking.checkOut).toLocaleDateString()}</p>
                        <p>Guests: {booking.guests}</p>
                        <p>Nights: {booking.nights}</p>
                      </div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-lg font-bold text-[color:var(--color-primary)]">
                          ${booking.total}
                        </span>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                          Confirmed
                        </span>
                      </div>
                      <button
                        onClick={() => handleCancel(booking.id)}
                        className="w-full border border-red-500 text-red-500 py-2 rounded-lg hover:bg-red-50 transition"
                      >
                        Cancel Booking
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Cancelled Bookings */}
          {cancelledBookings.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Cancelled Bookings ({cancelledBookings.length})</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cancelledBookings.map((booking) => (
                  <div key={booking.id} className="bg-gray-50 rounded-xl shadow-md overflow-hidden border opacity-75">
                    <img
                      src={booking.listingImage || "https://via.placeholder.com/400x200"}
                      alt={booking.listingName}
                      className="w-full h-40 object-cover grayscale"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2">{booking.listingName}</h3>
                      <div className="text-sm text-gray-600 space-y-1 mb-3">
                        <p>Check-in: {new Date(booking.checkIn).toLocaleDateString()}</p>
                        <p>Check-out: {new Date(booking.checkOut).toLocaleDateString()}</p>
                      </div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-lg font-bold text-gray-500">
                          ${booking.total}
                        </span>
                        <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">
                          Cancelled
                        </span>
                      </div>
                      <button
                        onClick={() => handleRemove(booking.id)}
                        className="w-full border border-gray-400 text-gray-600 py-2 rounded-lg hover:bg-gray-100 transition"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </MainLayout>
  );
}

export default Bookings;