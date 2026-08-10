import { useContext } from "react";
import { Link } from "react-router-dom";
import { TripContext } from "../context/TripContext";


function Trips() {

  const { trips, cancelTrip } = useContext(TripContext);

 


  return (

    <div className="min-h-screen px-6 md:px-10 py-10">

      {/* Page title */}

      <h1 className="text-3xl font-bold">
        Trips
      </h1>

      <p className="mt-2 text-gray-500">
        Your upcoming and past trips will appear here.
      </p>


      {/* No trips */}

      {trips.length === 0 ? (

        <div className="
          mt-10
          mx-auto
          border
          rounded-2xl
          p-10
          text-center
          w-[90%]
          max-w-2xl
        ">

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

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
          mt-10
        ">

          {trips.map((trip, index) => (

            <div
              key={`${trip.id}-${index}`}
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

                  <span className="
                    text-sm
                    bg-green-100
                    text-green-700
                    px-3
                    py-1
                    rounded-full
                  ">
                    Reserved
                  </span>

                </div>


                {/* Booking details */}

                <div className="
                  mt-5
                  border-t
                  pt-4
                  space-y-3
                  text-sm
                ">

                  <div className="flex justify-between">

                    <span className="text-gray-500">
                      Check-in
                    </span>

                    <span className="font-medium">
                      {trip.checkIn}
                    </span>

                  </div>


                  <div className="flex justify-between">

                    <span className="text-gray-500">
                      Check-out
                    </span>

                    <span className="font-medium">
                      {trip.checkOut}
                    </span>

                  </div>


                  <div className="flex justify-between">

  <span className="text-gray-500">
    Guests
  </span>

  <span className="font-medium text-right">

    {trip.totalGuests}{" "}
    {trip.totalGuests === 1 ? "Guest" : "Guests"}

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

                </div>


                {/* Price */}

                <div className="mt-4 space-y-2">

  <p>
    <span className="font-medium">Check-in:</span>{" "}
    {trip.checkIn}
  </p>

  <p>
    <span className="font-medium">Check-out:</span>{" "}
    {trip.checkOut}
  </p>

  <p>
    <span className="font-medium">Guests:</span>{" "}
    {trip.totalGuests} Guests
  </p>

  <p>
    <span className="font-medium">Nights:</span>{" "}
    {trip.nights}
  </p>

</div>

<div className="mt-4 border-t pt-4">

  <p className="text-sm text-gray-500">
    ₹{trip.price} × {trip.nights} nights
  </p>

  <p className="text-xl font-bold mt-1">
    Total: ₹{trip.totalPrice.toLocaleString("en-IN")}
  </p>

</div>


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

                <button
  onClick={() => {

    const confirmed = window.confirm(
      "Are you sure you want to cancel this reservation?"
    );

    if (!confirmed) {
      return;
    }

    cancelTrip(
      trip.bookingId
    );

  }}
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