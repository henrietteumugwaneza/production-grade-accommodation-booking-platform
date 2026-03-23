import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useBookingStore = create(
  persist(
    (set, get) => ({
      bookings: [],
      
      addBooking: (booking) => {
        const newBooking = {
          ...booking,
          id: Date.now(),
          createdAt: new Date().toISOString(),
          status: 'confirmed'
        };
        set((state) => ({
          bookings: [...state.bookings, newBooking]
        }));
      },
      
      cancelBooking: (bookingId) => {
        set((state) => ({
          bookings: state.bookings.map(booking =>
            booking.id === bookingId
              ? { ...booking, status: 'cancelled' }
              : booking
          )
        }));
      },
      
      removeBooking: (bookingId) => {
        set((state) => ({
          bookings: state.bookings.filter(booking => booking.id !== bookingId)
        }));
      },
      
      getBookingsByListing: (listingId) => {
        return get().bookings.filter(booking => booking.listingId === listingId);
      },
      
      clearBookings: () => set({ bookings: [] })
    }),
    {
      name: 'booking-storage'
    }
  )
);
