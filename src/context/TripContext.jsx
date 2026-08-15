import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

import { AuthContext } from "./AuthContext";

export const TripContext = createContext();

export function TripProvider({ children }) {

  const { currentUser } = useContext(AuthContext);


  // ==========================================
  // Current user's trips
  // ==========================================

  const [trips, setTrips] = useState([]);


  // ==========================================
  // All bookings
  // Used for double-booking protection
  // ==========================================

  const [allBookings, setAllBookings] = useState(() => {

    const savedBookings =
      localStorage.getItem("bookings");

    return savedBookings
      ? JSON.parse(savedBookings)
      : [];

  });


  // ==========================================
  // Load trips whenever logged-in user changes
  // ==========================================

  useEffect(() => {

    if (!currentUser) {

      setTrips([]);

      return;

    }


    const tripsByUser =
      JSON.parse(
        localStorage.getItem("tripsByUser")
      ) || {};


    const userTrips =
      tripsByUser[currentUser.email] || [];


    setTrips(userTrips);

  }, [currentUser]);


  // ==========================================
  // Add reservation
  // ==========================================

  const addTrip = (property) => {

    let result = {
      success: true,
      message: ""
    };


    // ------------------------------------------
    // User must be logged in
    // ------------------------------------------

    if (!currentUser) {

      return {
        success: false,
        message:
          "Please log in to reserve a stay."
      };

    }


    // ------------------------------------------
    // Check overlapping reservation
    // Globally across ALL users
    // ------------------------------------------

    const alreadyBooked =
      allBookings.some((trip) => {

        // Different property = no conflict
        if (trip.id !== property.id) {
          return false;
        }


        const existingCheckIn =
          new Date(trip.checkIn);

        const existingCheckOut =
          new Date(trip.checkOut);


        const newCheckIn =
          new Date(property.checkIn);

        const newCheckOut =
          new Date(property.checkOut);


        return (
          newCheckIn < existingCheckOut &&
          newCheckOut > existingCheckIn
        );

      });


    // ------------------------------------------
    // Booking conflict
    // ------------------------------------------

    if (alreadyBooked) {

      return {
        success: false,
        message:
          "This property is already booked for the selected dates."
      };

    }


    // ------------------------------------------
    // Create booking
    // ------------------------------------------

    const newTrip = {

      ...property,

      bookingId:
        Date.now().toString() +
        Math.random()
          .toString(36)
          .slice(2),

      // Store who made the booking
      guestEmail: currentUser.email,

      guestName:
  property.bookingFor === "self"
    ? currentUser.name || ""
    : property.guestName || ""

    };


    // ==========================================
    // Save to global bookings
    // ==========================================

    const updatedBookings = [
      ...allBookings,
      newTrip
    ];


    setAllBookings(updatedBookings);


    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedBookings)
    );


    // ==========================================
    // Save to current user's trips
    // ==========================================

    const tripsByUser =
      JSON.parse(
        localStorage.getItem("tripsByUser")
      ) || {};


    const currentUserTrips =
      tripsByUser[currentUser.email] || [];


    const updatedUserTrips = [
      ...currentUserTrips,
      newTrip
    ];


    tripsByUser[currentUser.email] =
      updatedUserTrips;


    localStorage.setItem(
      "tripsByUser",
      JSON.stringify(tripsByUser)
    );


    // Update current user's Trips page
    setTrips(updatedUserTrips);


    return result;

  };


  // ==========================================
  // Cancel reservation
  // ==========================================

  const cancelTrip = (bookingId) => {

    if (!currentUser) {
      return;
    }


    // ------------------------------------------
    // Remove from global bookings
    // ------------------------------------------

    const updatedBookings =
      allBookings.filter(
        trip =>
          trip.bookingId !== bookingId
      );


    setAllBookings(updatedBookings);


    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedBookings)
    );


    // ------------------------------------------
    // Remove from current user's trips
    // ------------------------------------------

    const tripsByUser =
      JSON.parse(
        localStorage.getItem("tripsByUser")
      ) || {};


    const currentUserTrips =
      tripsByUser[currentUser.email] || [];


    const updatedUserTrips =
      currentUserTrips.filter(
        trip =>
          trip.bookingId !== bookingId
      );


    tripsByUser[currentUser.email] =
      updatedUserTrips;


    localStorage.setItem(
      "tripsByUser",
      JSON.stringify(tripsByUser)
    );


    setTrips(updatedUserTrips);

  };


  return (

    <TripContext.Provider
      value={{
        trips,
        addTrip,
        cancelTrip
      }}
    >

      {children}

    </TripContext.Provider>

  );

}