import { toast } from "sonner";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  Plus,
  Trash2,
  ChevronDown,
  ChevronUp
} from "lucide-react";

import { WishlistContext } from "../context/WishlistContext";
import { AuthContext } from "../context/AuthContext";
import PropertyCard from "../components/PropertyCard";


function Wishlists() {

  const {
    wishlists,
    createWishlist,
    deleteWishlist
  } = useContext(WishlistContext);


  const {
    currentUser
  } = useContext(AuthContext);


  const [
    wishlistName,
    setWishlistName
  ] = useState("");


  // Stores the currently opened wishlist
  const [
    openWishlist,
    setOpenWishlist
  ] = useState(null);


  // ==========================
  // Create wishlist
  // ==========================

  const handleCreateWishlist = () => {

    if (!currentUser) {

      toast.error(
        "Please log in to create a wishlist."
      );

      return;

    }


    if (!wishlistName.trim()) {

      toast.error(
        "Please enter a wishlist name."
      );

      return;

    }


    const success =
      createWishlist(
        wishlistName
      );


    if (success) {

      setWishlistName("");

    }

  };


// ==========================
// Delete wishlist
// ==========================

const handleDelete = (wishlistId) => {

  toast(
    "Delete this wishlist?",
    {
      description:
        "All saved stays in this wishlist will be removed.",

      action: {
        label: "Delete",

        onClick: () => {

          deleteWishlist(wishlistId);

          // Close it if currently open
          if (openWishlist === wishlistId) {
            setOpenWishlist(null);
          }

          toast.success(
            "Wishlist deleted successfully."
          );

        }
      },

      cancel: {
        label: "Cancel"
      }
    }
  );

};




  // ==========================
  // Open / close wishlist
  // ==========================

  const handleToggleWishlist = (
    wishlistId
  ) => {

    setOpenWishlist(
      (prev) =>
        prev === wishlistId
          ? null
          : wishlistId
    );

  };


  return (

    <div
      className="
        min-h-[70vh]
        px-6
        md:px-8
        py-10
      "
    >


      {/* ==========================
          Header
      ========================== */}

      <div
        className="
          max-w-7xl
          mx-auto
          flex
          flex-col
          sm:flex-row
          sm:items-center
          sm:justify-between
          gap-4
          mb-8
        "
      >

        <div>

          <h1
            className="
              text-3xl
              font-bold
            "
          >
            Your Wishlists
          </h1>


          <p
            className="
              text-gray-500
              mt-2
            "
          >
            Save your favorite stays
            into collections.
          </p>

        </div>


        {/* ==========================
            Create Wishlist
        ========================== */}

        {currentUser && (

          <div
            className="
              flex
              gap-2
            "
          >

            <input
              type="text"
              value={wishlistName}
              onChange={(e) =>
                setWishlistName(
                  e.target.value
                )
              }
              onKeyDown={(e) => {

                if (
                  e.key === "Enter"
                ) {

                  handleCreateWishlist();

                }

              }}
              placeholder="Wishlist name"
              className="
                border
                rounded-lg
                px-4
                py-2
                outline-none
                focus:ring-2
                focus:ring-red-400
                w-48
                sm:w-56
              "
            />


            <button
              type="button"
              onClick={
                handleCreateWishlist
              }
              className="
                bg-red-500
                text-white
                px-4
                py-2
                rounded-lg
                flex
                items-center
                gap-2
                font-semibold
                hover:bg-red-600
                transition
              "
            >

              <Plus size={18} />

              Create

            </button>

          </div>

        )}

      </div>


      {/* ==========================
          Not logged in
      ========================== */}

      {!currentUser ? (

        <div
          className="
            max-w-2xl
            mx-auto
            mt-12
            border
            rounded-2xl
            p-10
            text-center
          "
        >

          <Heart
            size={42}
            className="
              mx-auto
              text-gray-400
              mb-4
            "
          />


          <h2
            className="
              text-xl
              font-semibold
            "
          >
            Log in to see your wishlists
          </h2>


          <p
            className="
              text-gray-500
              mt-2
            "
          >
            Create and save collections
            of stays.
          </p>


          <Link
            to="/login"
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
            Log in
          </Link>

        </div>

      ) : wishlists.length === 0 ? (

        /* ==========================
           Empty Wishlist
        ========================== */

        <div
          className="
            max-w-2xl
            mx-auto
            mt-12
            border
            rounded-2xl
            p-10
            text-center
          "
        >

          <Heart
            size={42}
            className="
              mx-auto
              text-gray-400
              mb-4
            "
          />


          <h2
            className="
              text-xl
              font-semibold
            "
          >
            No wishlists yet
          </h2>


          <p
            className="
              text-gray-500
              mt-2
            "
          >
            Create a wishlist to start
            organizing your stays.
          </p>

        </div>

      ) : (

        /* ==========================
           Wishlist List
        ========================== */

        <div
          className="
            max-w-7xl
            mx-auto
            space-y-6
          "
        >

          {wishlists.map(
            (wishlist) => {

              const isOpen =
                openWishlist ===
                wishlist.id;


              return (

                <div
                  key={wishlist.id}
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
                    onClick={() =>
                      handleToggleWishlist(
                        wishlist.id
                      )
                    }
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
                          className="
                            text-red-500
                          "
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

                          handleDelete(
                            wishlist.id
                          );

                        }}
                        aria-label={
                          `Delete ${wishlist.name}`
                        }
                        className="
                          text-gray-400
                          hover:text-red-500
                          transition
                        "
                      >

                        <Trash2
                          size={19}
                        />

                      </button>


                      {isOpen ? (

                        <ChevronUp
                          size={22}
                        />

                      ) : (

                        <ChevronDown
                          size={22}
                        />

                      )}

                    </div>

                  </div>


                  {/* ==========================
                      Properties
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


                          <Link
                            to="/"
                            className="
                              inline-block
                              mt-4
                              bg-red-500
                              text-white
                              px-5
                              py-2
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
                                key={
                                  property.id
                                }
                                property={
                                  property
                                }
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
          )}

        </div>

      )}

    </div>

  );

}


export default Wishlists;

