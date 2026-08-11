import {
  Heart,
  Trash2,
  ChevronDown,
  ChevronUp
} from "lucide-react";

import PropertyCard from "./PropertyCard";

function WishlistCard({
  wishlist,
  isOpen,
  onToggle,
  onDelete
}) {

  return (

    <div
      className="
        border
        rounded-2xl
        bg-white
        overflow-hidden
        shadow-sm
      "
    >

      {/* ==========================
          Wishlist Header
      ========================== */}

      <div
        className="
          flex
          items-center
          justify-between
          p-6
          cursor-pointer
          hover:bg-gray-50
          transition
        "
        onClick={onToggle}
      >

        <div
          className="
            flex
            items-center
            gap-4
          "
        >

          <div
            className="
              w-12
              h-12
              rounded-full
              bg-red-50
              flex
              items-center
              justify-center
            "
          >

            <Heart
              size={25}
              className="text-red-500"
              fill="none"
            />

          </div>


          <div>

            <h2
              className="
                text-xl
                font-semibold
              "
            >
              {wishlist.name}
            </h2>


            <p
              className="
                text-gray-500
                mt-1
              "
            >
              {wishlist.properties.length}{" "}
              {wishlist.properties.length === 1
                ? "stay"
                : "stays"
              }
            </p>

          </div>

        </div>


        {/* ==========================
            Actions
        ========================== */}

        <div
          className="
            flex
            items-center
            gap-4
          "
        >

          <button
            type="button"
            onClick={(e) => {

              e.stopPropagation();

              onDelete();

            }}
            aria-label={`Delete ${wishlist.name}`}
            className="
              text-gray-400
              hover:text-red-500
              transition
            "
          >

            <Trash2 size={19} />

          </button>


          {isOpen ? (

            <ChevronUp size={22} />

          ) : (

            <ChevronDown size={22} />

          )}

        </div>

      </div>


      {/* ==========================
          Wishlist Properties
      ========================== */}

      {isOpen && (

        <div
          className="
            border-t
            px-6
            py-6
          "
        >

          {wishlist.properties.length === 0 ? (

            <div
              className="
                text-center
                py-10
              "
            >

              <Heart
                size={35}
                className="
                  mx-auto
                  text-gray-300
                  mb-3
                "
              />


              <p
                className="
                  text-gray-500
                "
              >
                No stays saved
                in this wishlist yet.
              </p>

            </div>

          ) : (

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-4
                gap-6
              "
            >

              {wishlist.properties.map(
                (property) => (

                  <PropertyCard
                    key={property.id}
                    property={property}
                  />

                )
              )}

            </div>

          )}

        </div>

      )}

    </div>

  );

}

export default WishlistCard;