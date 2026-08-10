import { createContext, useState, useEffect } from "react";

export const BookingContext = createContext();

export function BookingProvider({ children }) {

  const [bookings, setBookings] = useState(() => {
    return JSON.parse(localStorage.getItem("bookings")) || [];
  });

  useEffect(() => {
    localStorage.setItem(
      "bookings",
      JSON.stringify(bookings)
    );
  }, [bookings]);

  function addBooking(booking) {
    setBookings(prev => [...prev, booking]);
  }

  function cancelBooking(id) {
    setBookings(prev =>
      prev.filter(item => item.id !== id)
    );
  }

  return (
    <BookingContext.Provider
      value={{
        bookings,
        addBooking,
        cancelBooking
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}