import { toast } from "sonner";
import {
  Heart,
  Star,
  Plus
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

import {
  useNavigate
} from "react-router-dom";

import {
  useContext,
  useState,
  useEffect,
  useRef
} from "react";

import {
  FavoriteContext
} from "../context/FavoriteContext";

import {
  WishlistContext
} from "../context/WishlistContext";

import {
  AuthContext
} from "../context/AuthContext";


function PropertyCard({ property }) {

  // ==========================
  // Favorites
  // ==========================

  const {
    favorites,
    toggleFavorite
  } = useContext(FavoriteContext);


  // ==========================
  // Wishlists
  // ==========================

  const {
    wishlists,
    addToWishlist,
    removeFromWishlist
  } = useContext(WishlistContext);


  // ==========================
  // Authentication
  // ==========================

  const {
    currentUser
  } = useContext(AuthContext);


  // ==========================
  // State
  // ==========================

  const [
    wishlistOpen,
    setWishlistOpen
  ] = useState(false);

  const [
  showRemoveConfirm,
  setShowRemoveConfirm
] = useState(false);


  const wishlistRef =
    useRef(null);


  const navigate =
    useNavigate();


  // ==========================
  // Favorite
  // ==========================

  const handleFavorite = (e) => {

  e.stopPropagation();

  // Check whether it is already a favorite
  const wasFavorite = favorites.some(
    (item) => item.id === property.id
  );

  const success = toggleFavorite(property);

  // User is not logged in
  if (!success) {

    toast.error(
      "Please log in to save properties to your Favorites."
    );

    return;
  }

  // Logged-in user
  if (wasFavorite) {

    toast.success(
      "Removed from favorites"
    );

  } else {

    toast.success(
      "Added to favorites ⭐"
    );

  }

};



// ==========================
// Check favorite
// ==========================

const isFavorite = favorites.some(
  (item) =>
    item.id === property.id
);


// ==========================
// Check wishlist
// ==========================

const isWishlisted = wishlists.some(
  (wishlist) =>
    wishlist.properties.some(
      (item) =>
        item.id === property.id
    )
);




  // ==========================
  // Open wishlist selector
  // ==========================

const handleWishlistClick = (e) => {

  e.stopPropagation();

  if (!currentUser) {

    toast.error(
      "Please log in to save properties to your wishlist."
    );

    return;
  }

  // If property is already in a wishlist
   if (isWishlisted) {

  setShowRemoveConfirm(true);

  return;
}

  // No wishlist exists
  if (wishlists.length === 0) {

    toast.error(
      "Please create a wishlist first."
    );

    navigate("/wishlists");

    return;
  }

  // Open wishlist selector
  setWishlistOpen(
    (prev) => !prev
  );
};
const handleRemoveFromWishlist = () => {

  wishlists.forEach((wishlist) => {

    const alreadySaved =
      wishlist.properties.some(
        (item) => item.id === property.id
      );

    if (alreadySaved) {

      removeFromWishlist(
        wishlist.id,
        property.id
      );

    }

  });

  setShowRemoveConfirm(false);

  toast.success(
    "Property removed from your wishlist."
  );
};


  // ==========================
  // Add to wishlist
  // ==========================

  const handleAddToWishlist = (
    e,
    wishlistId
  ) => {

    e.stopPropagation();


    const success =
      addToWishlist(
        wishlistId,
        property
      );


    if (success) {

      setWishlistOpen(false);

      toast.success(
        "Property added to wishlist!"
      );

    }

  };


  // ==========================
  // Close wishlist
  // when clicking outside
  // ==========================

  useEffect(() => {

    function handleClickOutside(event) {

      if (
        wishlistRef.current &&
        !wishlistRef.current.contains(
          event.target
        )
      ) {

        setWishlistOpen(false);

      }

    }


    document.addEventListener(
      "mousedown",
      handleClickOutside
    );


    return () => {

      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

    };

  }, []);


  return (
  <>
    <Dialog
      open={showRemoveConfirm}
      onOpenChange={setShowRemoveConfirm}
    >
      <DialogContent>

        <DialogHeader>

          <DialogTitle>
            Remove from wishlist?
          </DialogTitle>

          <DialogDescription>
            This property is already saved to your
            wishlist. Do you want to remove it?
          </DialogDescription>

        </DialogHeader>

        <DialogFooter>

          <button
            type="button"
            onClick={() =>
              setShowRemoveConfirm(false)
            }
            className="
              border
              px-4
              py-2
              rounded-lg
              font-medium
              hover:bg-gray-100
            "
          >
            Keep it
          </button>

          <button
            type="button"
            onClick={handleRemoveFromWishlist}
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
            Remove
          </button>

        </DialogFooter>

      </DialogContent>
    </Dialog>


    <div
      className="
        cursor-pointer
        group
        rounded-xl
        transition-all
        duration-200
        hover:-translate-y-1
      "
      onClick={() =>
        navigate(
          `/listing/${property.id}`
        )
      }
    >


      {/* ==========================
          Image
      ========================== */}

      <div
        className="
          relative
          rounded-xl
          overflow-visible
          shadow-sm
          transition-all
          duration-200
          group-hover:shadow-lg
        "
      >

        <img
          src={property.image}
          alt={property.title}
          className="
            w-full
            h-72
            object-cover
            rounded-xl
            group-hover:scale-105
            transition
          "
        />


        {/* ==========================
            Favorite button
        ========================== */}

        <button
          type="button"
          onClick={handleFavorite}
          aria-label="Add to favorites"
          className="
            absolute
            top-3
            right-14
            transparent
            rounded-full
            p-2
            shadow
            transition-all
            duration-200
            hover:scale-110
            hover:shadow-md
            z-10
          "
        >

          <Star
            size={21}
            fill={
              isFavorite
                ? "gold"
                : "none"
            }
            color="gold"
          />

        </button>


        {/* ==========================
            Wishlist button
        ========================== */}

        <div
          ref={wishlistRef}
          className="
            absolute
            top-3
            right-3
            z-20
          "
        >

          <button
            type="button"
            onClick={
              handleWishlistClick
            }
            aria-label="Add to wishlist"
            className="
              transparent
              rounded-full
              p-2
              shadow
              transition-all
              duration-200
              hover:scale-110
              hover:shadow-md
            "
          >

            
            <Heart
            size={21}
            fill={
              isWishlisted
                ? "red"
                : "none"
            }
            color="red"
          />

          </button>


          {/* ==========================
              Wishlist selector
          ========================== */}

          {wishlistOpen && (

            <div
              className="
                absolute
                right-0
                top-12
                w-64
                bg-white
                border
                rounded-xl
                shadow-xl
                p-3
                z-50
              "
              onClick={(e) =>
                e.stopPropagation()
              }
            >

              <h3
                className="
                  font-semibold
                  px-2
                  py-2
                "
              >
                Save to wishlist
              </h3>


              {/* Existing wishlists */}

              {wishlists.map(
                (wishlist) => {

                  const alreadySaved =
                    wishlist.properties.some(
                      (item) =>
                        item.id ===
                        property.id
                    );


                  return (

                    <button
                      key={
                        wishlist.id
                      }
                      type="button"
                      disabled={
                        alreadySaved
                      }
                      onClick={(e) =>
                        handleAddToWishlist(
                          e,
                          wishlist.id
                        )
                      }
                      className={`
                        w-full
                        text-left
                        px-3
                        py-2
                        rounded-lg
                        transition
                        ${
                          alreadySaved
                            ? "text-gray-400 bg-gray-50 cursor-not-allowed"
                            : "hover:bg-gray-100"
                        }
                      `}
                    >

                      <div
                        className="
                          flex
                          items-center
                          justify-between
                        "
                      >

                        <span>
                          {wishlist.name}
                        </span>


                        {alreadySaved && (

                          <span
                            className="
                              text-xs
                              text-gray-400
                            "
                          >
                            Saved
                          </span>

                        )}

                      </div>

                    </button>

                  );

                }
              )}


              {/* Create wishlist */}

              <button
                type="button"
                onClick={(e) => {

                  e.stopPropagation();

                  setWishlistOpen(
                    false
                  );

                  navigate(
                    "/wishlists"
                  );

                }}
                className="
                  w-full
                  flex
                  items-center
                  gap-2
                  text-left
                  px-3
                  py-2
                  mt-2
                  border-t
                  pt-3
                  font-semibold
                  hover:bg-gray-100
                  rounded-lg
                "
              >

                <Plus size={18} />

                Create wishlist

              </button>

            </div>

          )}

        </div>

      </div>


      {/* ==========================
          Property information
      ========================== */}

      <div className="mt-3">

        <div
          className="
            flex
            justify-between
          "
        >

          <h3
            className="
              font-semibold
            "
          >
            {property.location}
          </h3>


          <div
            className="
              flex
              items-center
              gap-1
            "
          >

            <Star
              size={15}
              fill="black"
            />

            {property.rating}

          </div>

        </div>


        <p
          className="
            text-gray-500
            text-sm
          "
        >
          {property.title}
        </p>


        <p className="mt-1">

          <span
            className="
              font-semibold
            "
          >
            {property.price}
          </span>

          {" "} / night

        </p>

      </div>

    </div>
    </>

  );

}


export default PropertyCard;

