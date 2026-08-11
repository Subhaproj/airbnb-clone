
import { useParams, useNavigate } from "react-router-dom";
import properties from "../data/properties";
import { Star, Heart } from "lucide-react";
import { toast } from "sonner";
import { useContext, useState } from "react";
import { FavoriteContext } from "../context/FavoriteContext";
import { TripContext } from "../context/TripContext";
import { AuthContext } from "@/context/AuthContext";

function ListingDetails() {
  const { id } = useParams();

  const {
    favorites,
    toggleFavorite
  } = useContext(FavoriteContext);

  const property = properties.find(
    item => item.id === Number(id)
  );

  const isFavorite = favorites.some(
    item => item.id === property?.id
  );

  const { addTrip } = useContext(TripContext);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const [guests, setGuests] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    pets: 0
  });

  const [showGuestSelector, setShowGuestSelector] = useState(false);

  // Guest message
  const [message, setMessage] = useState("");

  const [guestName, setGuestName] = useState("");
const [guestPhone, setGuestPhone] = useState("");
const [bookingFor, setBookingFor] = useState("self");

  const totalGuests =
    guests.adults + guests.children;

  // Maximum 2 extra guests
  const propertyGuestCapacity = Number(property?.guests) || 0;

const extraGuests = Math.max(
  0,
  totalGuests - propertyGuestCapacity
);

const maximumGuests =
  propertyGuestCapacity + 2;

  const nights =
    checkIn && checkOut
      ? Math.ceil(
          (new Date(checkOut) - new Date(checkIn)) /
          (1000 * 60 * 60 * 24)
        )
      : 0;

  const pricePerNight = Number(
    property?.price?.toString().replace(/[^0-9]/g, "")
  ) || 0;

  // -----------------------------
  // PRICE CALCULATIONS
  // -----------------------------

  // Normal property price
  const roomTotal = pricePerNight * nights;

  // ₹700 per extra guest per night
  const extraGuestFee =
    extraGuests * 700 * nights;

  // Stay subtotal before service fee and tax
  const staySubtotal =
    roomTotal + extraGuestFee;

  // Service fee = 10%
  const serviceFee =
    staySubtotal * 0.10;

  // Tax = 5%
  const tax =
    staySubtotal * 0.05;

  // Final total
  const totalPrice =
    staySubtotal + serviceFee + tax;


  // -----------------------------
  // UPDATE GUEST COUNT
  // -----------------------------

 const updateGuestCount = (type, amount) => {
  setGuests((prev) => {
    const newValue = prev[type] + amount;

    // Cannot go below zero
    if (newValue < 0) {
      return prev;
    }

    // At least 1 adult
    if (type === "adults" && newValue < 1) {
      return prev;
    }

    // Calculate the new total adults + children
    const newTotalGuests =
      type === "adults" || type === "children"
        ? prev.adults +
          prev.children +
          amount
        : prev.adults + prev.children;

    // Maximum = property's capacity + 2 extra guests
    if (
      (type === "adults" || type === "children") &&
      newTotalGuests > maximumGuests
    ) {
      return prev;
    }

    return {
      ...prev,
      [type]: newValue
    };
  });
};


  // -----------------------------
  // RESERVE
  // -----------------------------

  const handleReserve = () => {

    // Check authentication first
    if (!currentUser) {
      toast.error("Please log in to reserve a stay.");
      navigate("/login");
      return;
    }

    // Check dates
    if (!checkIn || !checkOut) {
      toast.error("Please select check-in and check-out dates.");
      return;
    }

    // Check date order
    if (checkOut <= checkIn) {
      toast.error("Check-out must be after check-in.");
      return;
    }

    if (!guestName.trim()) {
  toast.error("Please enter the guest name.");
  return;
}

if (!guestPhone.trim()) {
  toast.error("Please enter the guest phone number.");
  return;
}

if (!/^[0-9]{10}$/.test(guestPhone)) {
  toast.error("Please enter a valid 10-digit phone number.");
  return;
}

    // Add booking to trips
    const result = addTrip({
      ...property,

      checkIn,
      checkOut,

      guests,
      totalGuests,
      extraGuests,

      nights,

      // Price details
      pricePerNight,
      roomTotal,
      extraGuestFee,
      staySubtotal,
      serviceFee,
      tax,
      totalPrice,
      
      bookingFor,

      guestName,
      guestPhone,

      // Guest message
      message
    });

    // Booking failed
    if (!result.success) {
      toast.error(result.message);
      return;
    }

    // Booking successful
    navigate("/trips");
  };


  if (!property) {
    return (
      <h1 className="p-10 text-3xl">
        Property not found
      </h1>
    );
  }


  return (
    <div className="p-6 md:p-10">

      {/* Title */}

      <div className="flex justify-between items-center">

        <h1 className="text-3xl font-bold">
          {property.title}
        </h1>

        <button
          onClick={() => toggleFavorite(property)}
          className="
            border
            rounded-full
            p-3
          "
        >
          <Heart
            size={28}
            fill={
              isFavorite
                ? "red"
                : "none"
            }
            color={
              isFavorite
                ? "red"
                : "black"
            }
          />
        </button>

      </div>


      <div className="flex gap-4 mt-3 text-sm">

        <span className="flex items-center gap-1">

          <Star
            size={16}
            fill="black"
          />

          {property.rating}

        </span>

        <span>
          {property.location}
        </span>

      </div>


      {/* Image Gallery */}

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-3
          mt-8
        "
      >

        {property.images.map((img, index) => (

          <img
            key={index}
            src={img}
            alt={property.title}
            className="
              h-64
              w-full
              object-cover
              rounded-xl
            "
          />

        ))}

      </div>


      <div
        className="
          grid
          md:grid-cols-3
          gap-10
          mt-10
        "
      >

        {/* Left Details */}

        <div className="md:col-span-2">

          <h2 className="text-2xl font-semibold">
            Stay Owner {property.host}
          </h2>

          <p className="mt-4 text-gray-600">
            {property.guests} ·
            {property.bedrooms} ·
            {property.beds}
          </p>

          <p className="mt-6 text-gray-700">
            Enjoy a beautiful stay with amazing
            views and comfortable facilities.
          </p>

        </div>


        {/* Booking Card */}

        <div
          className="
            border
            rounded-2xl
            shadow-lg
            p-6
            h-fit
            bg-white
          "
        >

          <h2 className="text-2xl font-bold">

            {property.price}

            <span className="text-sm font-normal">
              / night
            </span>

          </h2>


          {/* Dates */}

          <div
            className="
              border
              rounded-xl
              mt-6
              overflow-hidden
            "
          >

            <div className="grid grid-cols-2">

              {/* Check-in */}

              <div className="p-3 border-r">

                <label
                  className="
                    block
                    text-xs
                    font-semibold
                    uppercase
                  "
                >
                  Check-in
                </label>

                <input
                  type="date"
                  min={
                    new Date()
                      .toISOString()
                      .split("T")[0]
                  }
                  value={checkIn}
                  onChange={(e) =>
                    setCheckIn(e.target.value)
                  }
                  className="
                    mt-1
                    w-full
                    outline-none
                    text-sm
                  "
                />

              </div>


              {/* Check-out */}

              <div className="p-3">

                <label
                  className="
                    block
                    text-xs
                    font-semibold
                    uppercase
                  "
                >
                  Check-out
                </label>

                <input
                  type="date"
                  min={
                    checkIn ||
                    new Date()
                      .toISOString()
                      .split("T")[0]
                  }
                  value={checkOut}
                  onChange={(e) =>
                    setCheckOut(e.target.value)
                  }
                  className="
                    mt-1
                    w-full
                    outline-none
                    text-sm
                  "
                />

              </div>

            </div>


            {/* Guests */}

            <div className="border-t p-3">

              <button
                type="button"
                onClick={() =>
                  setShowGuestSelector(
                    (prev) => !prev
                  )
                }
                className="w-full text-left"
              >

                <span className="block text-xs font-semibold uppercase">
                  Guests
                </span>

                <span className="text-sm">

                  {totalGuests}{" "}
                  {totalGuests === 1
                    ? "guest"
                    : "guests"}

                  {guests.infants > 0 &&
                    `, ${guests.infants} infant${
                      guests.infants > 1
                        ? "s"
                        : ""
                    }`}

                  {guests.pets > 0 &&
                    `, ${guests.pets} pet${
                      guests.pets > 1
                        ? "s"
                        : ""
                    }`}

                </span>

              </button>


              {showGuestSelector && (

                <div
                  className="
                    mt-3
                    bg-white
                    border
                    rounded-xl
                    shadow-lg
                    p-5
                  "
                >

                  <h3 className="font-bold mb-4">
                    Select guests
                  </h3>


                  {/* Adults */}

                  <div
                    className="
                      flex
                      justify-between
                      items-center
                      mb-4
                    "
                  >

                    <div>

                      <p className="font-semibold">
                        Adults
                      </p>

                      <p className="text-sm text-gray-500">
                        Ages 13 or above
                      </p>

                    </div>


                    <div className="flex items-center gap-3">

                      <button
                        type="button"
                        onClick={() =>
                          updateGuestCount(
                            "adults",
                            -1
                          )
                        }
                        disabled={
                          guests.adults <= 1
                        }
                        className="
                          w-8
                          h-8
                          rounded-full
                          border
                          disabled:opacity-40
                        "
                      >
                        −
                      </button>

                      <span>
                        {guests.adults}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          updateGuestCount(
                            "adults",
                            1
                          )
                        }
                        disabled={
                          totalGuests >= maximumGuests
                        }
                        className="
                          w-8
                          h-8
                          rounded-full
                          border
                          disabled:opacity-40
                        "
                      >
                        +
                      </button>

                    </div>

                  </div>


                  {/* Children */}

                  <div
                    className="
                      flex
                      justify-between
                      items-center
                      mb-4
                    "
                  >

                    <div>

                      <p className="font-semibold">
                        Children
                      </p>

                      <p className="text-sm text-gray-500">
                        Ages 2–12
                      </p>

                    </div>


                    <div className="flex items-center gap-3">

                      <button
                        type="button"
                        onClick={() =>
                          updateGuestCount(
                            "children",
                            -1
                          )
                        }
                        disabled={
                          guests.children === 0
                        }
                        className="
                          w-8
                          h-8
                          rounded-full
                          border
                          disabled:opacity-40
                        "
                      >
                        −
                      </button>

                      <span>
                        {guests.children}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          updateGuestCount(
                            "children",
                            1
                          )
                        }
                        disabled={
                          totalGuests >= maximumGuests
                        }
                        className="
                          w-8
                          h-8
                          rounded-full
                          border
                          disabled:opacity-40
                        "
                      >
                        +
                      </button>

                    </div>

                  </div>


                  {/* Infants */}

                  <div
                    className="
                      flex
                      justify-between
                      items-center
                      mb-4
                    "
                  >

                    <div>

                      <p className="font-semibold">
                        Infants
                      </p>

                      <p className="text-sm text-gray-500">
                        Under 2
                      </p>

                    </div>


                    <div className="flex items-center gap-3">

                      <button
                        type="button"
                        onClick={() =>
                          updateGuestCount(
                            "infants",
                            -1
                          )
                        }
                        disabled={
                          guests.infants === 0
                        }
                        className="
                          w-8
                          h-8
                          rounded-full
                          border
                          disabled:opacity-40
                        "
                      >
                        −
                      </button>

                      <span>
                        {guests.infants}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          updateGuestCount(
                            "infants",
                            1
                          )
                        }
                        className="
                          w-8
                          h-8
                          rounded-full
                          border
                        "
                      >
                        +
                      </button>

                    </div>

                  </div>


                  {/* Pets */}

                  <div
                    className="
                      flex
                      justify-between
                      items-center
                    "
                  >

                    <div>

                      <p className="font-semibold">
                        Pets
                      </p>

                      <p className="text-sm text-gray-500">
                        Pets staying with you
                      </p>

                    </div>


                    <div className="flex items-center gap-3">

                      <button
                        type="button"
                        onClick={() =>
                          updateGuestCount(
                            "pets",
                            -1
                          )
                        }
                        disabled={
                          guests.pets === 0
                        }
                        className="
                          w-8
                          h-8
                          rounded-full
                          border
                          disabled:opacity-40
                        "
                      >
                        −
                      </button>

                      <span>
                        {guests.pets}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          updateGuestCount(
                            "pets",
                            1
                          )
                        }
                        className="
                          w-8
                          h-8
                          rounded-full
                          border
                        "
                      >
                        +
                      </button>

                    </div>

                  </div>


                  <p className="text-xs text-gray-500 mt-4">
  This property accommodates {propertyGuestCapacity} guests.
  You can add up to 2 extra guests.
</p>


                  <button
                    type="button"
                    onClick={() =>
                      setShowGuestSelector(false)
                    }
                    className="
                      mt-5
                      font-semibold
                      underline
                    "
                  >
                    Done
                  </button>

                </div>

              )}

            </div>

          </div>
          {/* Who is staying? */}

<div className="mt-5">

  <h3 className="text-sm font-semibold mb-3">
    Who is staying?
  </h3>

  <div className="space-y-3">

    {/* I'm staying */}

    <label
      className="
        flex
        items-center
        gap-3
        border
        rounded-xl
        p-3
        cursor-pointer
      "
    >

      <input
        type="radio"
        name="bookingFor"
        value="self"
        checked={bookingFor === "self"}
        onChange={() => {
          setBookingFor("self");
          setGuestName(currentUser?.name || "");
        }}
      />

      <div>
        <p className="text-sm font-medium">
          I'm staying
        </p>

        <p className="text-xs text-gray-500">
          Booking for myself
        </p>
      </div>

    </label>


    {/* Someone else */}

    <label
      className="
        flex
        items-center
        gap-3
        border
        rounded-xl
        p-3
        cursor-pointer
      "
    >

      <input
        type="radio"
        name="bookingFor"
        value="other"
        checked={bookingFor === "other"}
        onChange={() => {
          setBookingFor("other");
          setGuestName("");
        }}
      />

      <div>
        <p className="text-sm font-medium">
          I'm booking for someone else
        </p>

        <p className="text-xs text-gray-500">
          The guest will be someone else
        </p>
      </div>

    </label>

  </div>

</div>


{/* Guest Details */}

<div className="mt-5">

  <label
    htmlFor="guest-name"
    className="block text-sm font-semibold mb-2"
  >
    Guest name
  </label>

  <input
    id="guest-name"
    type="text"
    value={guestName}
    onChange={(e) => setGuestName(e.target.value)}
    placeholder={
      bookingFor === "self"
        ? "Your name"
        : "Enter the guest's name"
    }
    className="
      w-full
      border
      rounded-xl
      p-3
      text-sm
      outline-none
      focus:ring-2
      focus:ring-gray-300
    "
  />

</div>


<div className="mt-4">

  <label
    htmlFor="guest-phone"
    className="block text-sm font-semibold mb-2"
  >
    Guest phone number
  </label>

  <input
    id="guest-phone"
    type="tel"
    value={guestPhone}
    onChange={(e) =>
      setGuestPhone(
        e.target.value.replace(/\D/g, "")
      )
    }
    placeholder="Enter guest phone number"
    maxLength={10}
    className="
      w-full
      border
      rounded-xl
      p-3
      text-sm
      outline-none
      focus:ring-2
      focus:ring-gray-300
    "
  />

</div>






          {/* Guest Message */}

          <div className="mt-5">

            <label
              htmlFor="guest-message"
              className="
                block
                text-sm
                font-semibold
                mb-2
              "
            >
              Message to the host
            </label>

            <textarea
              id="guest-message"
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              placeholder="Tell the host anything they should know..."
              rows={4}
              maxLength={500}
              className="
                w-full
                border
                rounded-xl
                p-3
                text-sm
                outline-none
                resize-none
                focus:ring-2
                focus:ring-gray-300
              "
            />

            <p className="text-xs text-gray-500 mt-1 text-right">
              {message.length}/500
            </p>

          </div>


          {/* Price Breakdown */}

          {nights > 0 && (

            <div className="border-t mt-5 pt-4">

              {/* Room price */}

              <div className="flex justify-between text-sm">

                <span>
                  ₹{pricePerNight.toLocaleString("en-IN")}
                  {" × "}
                  {nights}{" "}
                  {nights === 1
                    ? "night"
                    : "nights"}
                </span>

                <span>
                  ₹{roomTotal.toLocaleString("en-IN")}
                </span>

              </div>


              {/* Extra guest fee */}

              {extraGuestFee > 0 && (

                <div
                  className="
                    flex
                    justify-between
                    text-sm
                    mt-3
                  "
                >

                  <span>
                    Extra guest fee
                    {" "}
                    ({extraGuests}{" "}
                    {extraGuests === 1
                      ? "guest"
                      : "guests"}
                    {" × ₹700 × "}
                    {nights}
                    {" "}
                    {nights === 1
                      ? "night"
                      : "nights"}
                    )
                  </span>

                  <span>
                    ₹{extraGuestFee.toLocaleString("en-IN")}
                  </span>

                </div>

              )}


              {/* Stay subtotal */}

              <div
                className="
                  flex
                  justify-between
                  text-sm
                  mt-3
                "
              >

                <span>
                  Stay subtotal
                </span>

                <span>
                  ₹{staySubtotal.toLocaleString("en-IN")}
                </span>

              </div>


              {/* Service fee */}

              <div
                className="
                  flex
                  justify-between
                  text-sm
                  mt-3
                "
              >

                <span>
                  Service fee (10%)
                </span>

                <span>
                  ₹{serviceFee.toLocaleString("en-IN")}
                </span>

              </div>


              {/* Tax */}

              <div
                className="
                  flex
                  justify-between
                  text-sm
                  mt-3
                "
              >

                <span>
                  Tax (5%)
                </span>

                <span>
                  ₹{tax.toLocaleString("en-IN")}
                </span>

              </div>


              {/* Total */}

              <div
                className="
                  flex
                  justify-between
                  mt-4
                  pt-4
                  border-t
                  font-bold
                  text-lg
                "
              >

                <span>
                  Total
                </span>

                <span>
                  ₹{totalPrice.toLocaleString("en-IN")}
                </span>

              </div>

            </div>

          )}


          {/* Reserve */}

          <button
            onClick={handleReserve}
            className="
              mt-6
              w-full
              bg-red-500
              text-white
              py-3
              rounded-lg
              font-semibold
              hover:bg-red-600
              transition
            "
          >
            Reserve
          </button>

        </div>

      </div>

    </div>
  );
}

export default ListingDetails;

