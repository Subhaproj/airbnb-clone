
import { useState } from "react";

function GuestSelector({ setGuestCount }) {
  const [guests, setGuests] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const updateGuest = (type, amount) => {
    const currentValue = guests[type];

    const newValue = Math.max(
      type === "adults" ? 1 : 0,
      currentValue + amount
    );

    const updatedGuests = {
      ...guests,
      [type]: newValue,
    };

    setGuests(updatedGuests);

    // Adults + children are counted as guests
    const totalGuests =
      updatedGuests.adults +
      updatedGuests.children;

    setGuestCount(totalGuests);
  };

  return (
    <div
      className="
        absolute
        right-0
        top-12
        w-80
        max-w-[calc(100vw-2rem)]
        bg-white
        border
        rounded-2xl
        shadow-lg
        p-5
        z-50
      "
    >

      <h3 className="text-base font-semibold mb-4">
        Guests
      </h3>

      <GuestRow
        title="Adults"
        description="Ages 13 or above"
        count={guests.adults}
        onDecrease={() =>
          updateGuest("adults", -1)
        }
        onIncrease={() =>
          updateGuest("adults", 1)
        }
      />

      <GuestRow
        title="Children"
        description="Ages 2–12"
        count={guests.children}
        onDecrease={() =>
          updateGuest("children", -1)
        }
        onIncrease={() =>
          updateGuest("children", 1)
        }
      />

      <GuestRow
        title="Infants"
        description="Under 2"
        count={guests.infants}
        onDecrease={() =>
          updateGuest("infants", -1)
        }
        onIncrease={() =>
          updateGuest("infants", 1)
        }
      />

      <GuestRow
        title="Pets"
        description="Bringing a service animal?"
        count={guests.pets}
        onDecrease={() =>
          updateGuest("pets", -1)
        }
        onIncrease={() =>
          updateGuest("pets", 1)
        }
      />

    </div>
  );
}


function GuestRow({
  title,
  description,
  count,
  onDecrease,
  onIncrease,
}) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        py-4
        border-b
        last:border-b-0
      "
    >

      <div>
        <p className="text-sm font-semibold">
          {title}
        </p>

        <p className="text-xs text-gray-500">
          {description}
        </p>
      </div>

      <div className="flex items-center gap-3">

        <button
          type="button"
          onClick={onDecrease}
          disabled={
            count === 0 ||
            (title === "Adults" && count === 1)
          }
          className="
            w-8
            h-8
            rounded-full
            border
            flex
            items-center
            justify-center
            text-lg
            hover:border-black
            disabled:opacity-30
            disabled:cursor-not-allowed
          "
        >
          −
        </button>

        <span className="w-5 text-center text-sm">
          {count}
        </span>

        <button
          type="button"
          onClick={onIncrease}
          className="
            w-8
            h-8
            rounded-full
            border
            flex
            items-center
            justify-center
            text-lg
            hover:border-black
          "
        >
          +
        </button>

      </div>

    </div>
  );
}

export default GuestSelector;

