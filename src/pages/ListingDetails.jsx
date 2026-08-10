import { useParams, useNavigate } from "react-router-dom";
import properties from "../data/properties";
import { Star, Heart, Plus, Minus } from "lucide-react";

import { useContext, useState } from "react";
import { FavoriteContext } from "../context/FavoriteContext";
import { TripContext } from "../context/TripContext";
import { AuthContext } from "@/context/AuthContext";

function ListingDetails(){

  const {id}=useParams();

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
const totalGuests =
  guests.adults + guests.children;

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

const totalPrice = pricePerNight * nights;

const updateGuestCount = (type, amount) => {

  setGuests((prev) => {

    const newValue = prev[type] + amount;

    if (newValue < 0) {
      return prev;
    }

    if (type === "adults" && newValue < 1) {
      return prev;
    }

    return {
      ...prev,
      [type]: newValue
    };

  });

};

const handleReserve = () => {

  // Check authentication first
  if (!currentUser) {
    alert("Please log in to reserve a stay.");
    navigate("/login");
    return;
  }

  // Check dates
  if (!checkIn || !checkOut) {
    alert("Please select check-in and check-out dates.");
    return;
  }

  // Check date order
  if (checkOut <= checkIn) {
    alert("Check-out must be after check-in.");
    return;
  }

  // Add booking to trips
  const result = addTrip({
    ...property,
    checkIn,
    checkOut,
    guests,
    totalGuests,
    nights,
    totalPrice
  });

  // Booking failed
  if (!result.success) {
    alert(result.message);
    return;
  }

  // Booking successful
  navigate("/trips");
};


  if(!property){

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
        ?
        "red"
        :
        "none"
      }

      color={
        isFavorite
        ?
        "red"
        :
        "black"
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

      <div className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-3
        mt-8
      ">


        {
          property.images.map((img,index)=>(

            <img

              key={index}

              src={img}

              className="
                h-64
                w-full
                object-cover
                rounded-xl
              "

            />

          ))
        }


      </div>




      <div className="
        grid
        md:grid-cols-3
        gap-10
        mt-10
      ">


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



{/*Booking Card*/}

<div className="
  border
  rounded-2xl
  shadow-lg
  p-6
  h-fit
  bg-white
">

  <h2 className="text-2xl font-bold">

    {property.price}

    <span className="text-sm font-normal">
      / night
    </span>

  </h2>


  {/* Dates */}

  <div className="
    border
    rounded-xl
    mt-6
    overflow-hidden
  ">

    <div className="grid grid-cols-2">

      <div className="p-3 border-r">

        <label className="
          block
          text-xs
          font-semibold
          uppercase
        ">
          Check-in
        </label>

        <input
          type="date"
          min={new Date().toISOString().split("T")[0]}
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


      <div className="p-3">

        <label className="
          block
          text-xs
          font-semibold
          uppercase
        ">
          Check-out
        </label>

        <input
          type="date"
          min={checkIn || new Date().toISOString().split("T")[0]}
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
    onClick={() => {
      console.log("Guests clicked");
      setShowGuestSelector((prev) => !prev);
    }}
    className="w-full text-left"
  >

    <span className="block text-xs font-semibold uppercase">
      Guests
    </span>

    <span className="text-sm">
       click here to add more Guests
    </span>

  </button>


  {showGuestSelector && (
    <div className="mt-3 bg-white border rounded-xl shadow-lg p-5">

      <h3 className="font-bold mb-4">
        Select guests
      </h3>

      {/* Adults */}

      <div className="flex justify-between items-center mb-4">

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
              updateGuestCount("adults", -1)
            }
            disabled={guests.adults <= 1}
            className="w-8 h-8 rounded-full border"
          >
            −
          </button>

          <span>
            {guests.adults}
          </span>

          <button
            type="button"
            onClick={() =>
              updateGuestCount("adults", 1)
            }
            className="w-8 h-8 rounded-full border"
          >
            +
          </button>

        </div>

      </div>


      {/* Children */}

      <div className="flex justify-between items-center mb-4">

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
              updateGuestCount("children", -1)
            }
            disabled={guests.children === 0}
            className="w-8 h-8 rounded-full border"
          >
            −
          </button>

          <span>
            {guests.children}
          </span>

          <button
            type="button"
            onClick={() =>
              updateGuestCount("children", 1)
            }
            className="w-8 h-8 rounded-full border"
          >
            +
          </button>

        </div>

      </div>


      {/* Infants */}

      <div className="flex justify-between items-center mb-4">

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
              updateGuestCount("infants", -1)
            }
            disabled={guests.infants === 0}
            className="w-8 h-8 rounded-full border"
          >
            −
          </button>

          <span>
            {guests.infants}
          </span>

          <button
            type="button"
            onClick={() =>
              updateGuestCount("infants", 1)
            }
            className="w-8 h-8 rounded-full border"
          >
            +
          </button>

        </div>

      </div>


      {/* Pets */}

      <div className="flex justify-between items-center">

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
              updateGuestCount("pets", -1)
            }
            disabled={guests.pets === 0}
            className="w-8 h-8 rounded-full border"
          >
            −
          </button>

          <span>
            {guests.pets}
          </span>

          <button
            type="button"
            onClick={() =>
              updateGuestCount("pets", 1)
            }
            className="w-8 h-8 rounded-full border"
          >
            +
          </button>

        </div>

      </div>


      <button
        type="button"
        onClick={() => setShowGuestSelector(false)}
        className="mt-5 font-semibold underline"
      >
        Done
      </button>

    </div>
  )}

</div>

  </div>
  {/* Price Breakdown */}

{nights > 0 && (

  <div className="border-t mt-2 pt-4">

    <div className="flex justify-between text-sm">

      <span>
        {property.price} × {nights}{" "}
        {nights === 1 ? "night" : "nights"}
      </span>

      <span>
        ₹{totalPrice.toLocaleString("en-IN")}
      </span>

    </div>


    <div className="
      flex
      justify-between
      mt-4
      pt-4
      border-t
      font-bold
      text-lg
    ">

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