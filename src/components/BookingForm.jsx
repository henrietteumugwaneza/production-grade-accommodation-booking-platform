import { useState } from "react";
import { useBookingStore } from "../stores/bookingStore";

function BookingForm({ listing, onSuccess }) {
  const addBooking = useBookingStore((state) => state.addBooking);
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    guests: 1
  });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!formData.checkIn || !formData.checkOut) {
      setError("Please select check-in and check-out dates");
      return;
    }

    const checkIn = new Date(formData.checkIn);
    const checkOut = new Date(formData.checkOut);

    if (checkOut <= checkIn) {
      setError("Check-out date must be after check-in date");
      return;
    }

    // Calculate nights and total
    const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
    const total = nights * listing.price;

    // Create booking
    const booking = {
      listingId: listing.id,
      listingName: listing.name,
      listingImage: listing.images?.[0],
      checkIn: formData.checkIn,
      checkOut: formData.checkOut,
      guests: formData.guests,
      nights,
      pricePerNight: listing.price,
      total
    };

    addBooking(booking);
    onSuccess?.();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg border">
      <h3 className="text-xl font-semibold mb-4">
        ${listing.price} <span className="text-sm font-normal text-gray-600">/ night</span>
      </h3>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
          {error}
        </div>
      )}

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Check-in</label>
        <input
          type="date"
          value={formData.checkIn}
          onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
          min={new Date().toISOString().split('T')[0]}
          className="w-full border rounded-lg px-3 py-2"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Check-out</label>
        <input
          type="date"
          value={formData.checkOut}
          onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
          min={formData.checkIn || new Date().toISOString().split('T')[0]}
          className="w-full border rounded-lg px-3 py-2"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Guests</label>
        <input
          type="number"
          value={formData.guests}
          onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
          min={1}
          max={10}
          className="w-full border rounded-lg px-3 py-2"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[color:var(--color-primary)] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
      >
        Reserve
      </button>
    </form>
  );
}

export default BookingForm;
