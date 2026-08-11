import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TripContext } from "../context/TripContext";

function Trips() {
  const { trips, cancelTrip } = useContext(TripContext);
  const [tripToCancel, setTripToCancel] = useState(null);

  return (
    <div className="min-h-screen px-6 md:px-10 py-10">

      {/* Page title */}

      <h1 className="text-3xl font-bold">
        Trips
      </h1>

      <p className="mt-2 text-gray-500">
        Your upcoming and past trips will appear here.
      </p>
      <Dialog
  open={!!tripToCancel}
  onOpenChange={(open) => {
    if (!open) {
      setTripToCancel(null);
    }
  }}
>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>
        Cancel reservation?
      </DialogTitle>

      <DialogDescription>
        Are you sure you want to cancel your
        reservation at{" "}
        <span className="font-semibold">
          {tripToCancel?.title}
        </span>
        ?
      </DialogDescription>
    </DialogHeader>

    <DialogFooter>
      <button
        onClick={() => setTripToCancel(null)}
        className="
          border
          px-4
          py-2
          rounded-lg
          font-medium
          hover:bg-gray-100
        "
      >
        Keep reservation
      </button>

      <button
        onClick={() => {
  if (!tripToCancel) return;

  cancelTrip(tripToCancel.bookingId);

  toast.success("Reservation cancelled successfully.");

  setTripToCancel(null);
}}
        className="
          bg-red-500
          text-white
          px-4
          py-2
          rounded-lg
          font-medium
          hover:bg-red-600
        "
      >
        Cancel reservation
      </button>
    </DialogFooter>
  </DialogContent>
</Dialog>


      {/* No trips */}

      {trips.length === 0 ? (

        <div
          className="
            mt-10
            mx-auto
            border
            rounded-2xl
            p-10
            text-center
            w-[90%]
            max-w-2xl
          "
        >

          <h2 className="text-xl font-semibold">
            No trips yet
          </h2>

          <p className="mt-2 text-gray-500">
            Start exploring places and book your first stay.
          </p>

          <Link
            to="/"
            className="
              inline-block
              mt-6
              bg-red-500
              text-white
              px-6
              py-3
              rounded-lg
              font-semibold
              hover:bg-red-600
              transition
            "
          >
            Explore stays
          </Link>

        </div>

      ) : (

        /* Trips */

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
            mt-10
          "
        >

          {trips.map((trip, index) => (

            <div
              key={`${trip.id}-${trip.bookingId || index}`}
              className="
                border
                rounded-2xl
                overflow-hidden
                shadow-sm
                hover:shadow-md
                transition
                bg-white
              "
            >

              {/* Property image */}

              <img
                src={trip.image}
                alt={trip.title}
                className="
                  w-full
                  h-56
                  object-cover
                "
              />


              <div className="p-5">

                {/* Property */}

                <h2 className="text-lg font-semibold">
                  {trip.title}
                </h2>

                <p className="text-gray-500 mt-1">
                  {trip.location}
                </p>


                {/* Booking status */}

                <div className="mt-4">

                  <span
                    className="
                      text-sm
                      bg-green-100
                      text-green-700
                      px-3
                      py-1
                      rounded-full
                    "
                  >
                    Reserved
                  </span>

                </div>


                {/* Booking details */}

                <div
                  className="
                    mt-5
                    border-t
                    pt-4
                    space-y-3
                    text-sm
                  "
                >

                  {/* Check-in */}

                  <div className="flex justify-between">

                    <span className="text-gray-500">
                      Check-in
                    </span>

                    <span className="font-medium">
                      {trip.checkIn}
                    </span>

                  </div>


                  {/* Check-out */}

                  <div className="flex justify-between">

                    <span className="text-gray-500">
                      Check-out
                    </span>

                    <span className="font-medium">
                      {trip.checkOut}
                    </span>

                  </div>


                  {/* Guests */}

                  <div className="flex justify-between">

                    <span className="text-gray-500">
                      Guests
                    </span>

                    <span className="font-medium text-right">

                      {trip.totalGuests}{" "}
                      {trip.totalGuests === 1
                        ? "Guest"
                        : "Guests"}

                      {trip.guests?.infants > 0 && (
                        <>
                          {" · "}
                          {trip.guests.infants}{" "}
                          {trip.guests.infants === 1
                            ? "Infant"
                            : "Infants"}
                        </>
                      )}

                      {trip.guests?.pets > 0 && (
                        <>
                          {" · "}
                          {trip.guests.pets}{" "}
                          {trip.guests.pets === 1
                            ? "Pet"
                            : "Pets"}
                        </>
                      )}

                    </span>

                  </div>


                  {/* Nights */}

                  <div className="flex justify-between">

                    <span className="text-gray-500">
                      Nights
                    </span>

                    <span className="font-medium">
                      {trip.nights}
                    </span>

                  </div>

                </div>


                {/* Guest details */}

                <div
                  className="
                    mt-5
                    border-t
                    pt-4
                    space-y-3
                    text-sm
                  "
                >

                  <h3 className="font-semibold text-base">
                    Guest details
                  </h3>


                  {/* Booking for */}

                  <div className="flex justify-between">

                    <span className="text-gray-500">
                      Booking for
                    </span>

                    <span className="font-medium">
                      {trip.bookingFor === "self"
                        ? "Myself"
                        : "Someone else"}
                    </span>

                  </div>


                  {/* Guest name */}

                  <div className="flex justify-between gap-4">

                    <span className="text-gray-500">
                      Guest name
                    </span>

                    <span className="font-medium text-right">
                      {trip.guestName || "Not provided"}
                    </span>

                  </div>


                  {/* Guest phone */}

                  <div className="flex justify-between gap-4">

                    <span className="text-gray-500">
                      Phone
                    </span>

                    <span className="font-medium text-right">
                      {trip.guestPhone || "Not provided"}
                    </span>

                  </div>

                </div>


                {/* Price breakdown */}

                <div
                  className="
                    mt-5
                    border-t
                    pt-4
                    space-y-3
                    text-sm
                  "
                >

                  {/* Room price */}

                  <div className="flex justify-between">

                    <span>
                      ₹{trip.pricePerNight?.toLocaleString("en-IN")}
                      {" × "}
                      {trip.nights}{" "}
                      {trip.nights === 1
                        ? "night"
                        : "nights"}
                    </span>

                    <span>
                      ₹{trip.roomTotal?.toLocaleString("en-IN")}
                    </span>

                  </div>


                  {/* Extra guest fee */}

                  {trip.extraGuestFee > 0 && (

                    <div className="flex justify-between">

                      <span>
                        Extra guest fee
                      </span>

                      <span>
                        ₹{trip.extraGuestFee.toLocaleString("en-IN")}
                      </span>

                    </div>

                  )}


                  {/* Stay subtotal */}

                  <div className="flex justify-between">

                    <span>
                      Stay subtotal
                    </span>

                    <span>
                      ₹{trip.staySubtotal?.toLocaleString("en-IN")}
                    </span>

                  </div>


                  {/* Service fee */}

                  <div className="flex justify-between">

                    <span>
                      Service fee (10%)
                    </span>

                    <span>
                      ₹{trip.serviceFee?.toLocaleString("en-IN")}
                    </span>

                  </div>


                  {/* Tax */}

                  <div className="flex justify-between">

                    <span>
                      Tax (5%)
                    </span>

                    <span>
                      ₹{trip.tax?.toLocaleString("en-IN")}
                    </span>

                  </div>


                  {/* Total */}

                  <div
                    className="
                      flex
                      justify-between
                      border-t
                      pt-4
                      mt-4
                      text-lg
                      font-bold
                    "
                  >

                    <span>
                      Total
                    </span>

                    <span>
                      ₹{trip.totalPrice?.toLocaleString("en-IN")}
                    </span>

                  </div>

                </div>


                {/* Guest message */}

                {trip.message?.trim() && (

                  <div
                    className="
                      mt-5
                      bg-gray-50
                      rounded-xl
                      p-4
                    "
                  >

                    <p className="text-sm font-semibold">
                      Message to host
                    </p>

                    <p className="text-sm text-gray-600 mt-2">
                      "{trip.message}"
                    </p>

                  </div>

                )}


                {/* View property */}

                <Link
                  to={`/listing/${trip.id}`}
                  className="
                    block
                    text-center
                    mt-5
                    border
                    py-2
                    rounded-lg
                    font-medium
                    hover:bg-gray-100
                    transition
                  "
                >
                  View property
                </Link>


                {/* Cancel reservation */}

                <button
                onClick={() => setTripToCancel(trip)}
                  
                  className="
                    block
                    w-full
                    mt-3
                    border
                    border-red-500
                    text-red-500
                    py-2
                    rounded-lg
                    font-medium
                    hover:bg-red-50
                    transition
                  "
                >
                  Cancel reservation
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Trips;

