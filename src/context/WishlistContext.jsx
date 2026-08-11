
import {
  createContext,
  useState,
  useEffect,
  useContext
} from "react";

import { AuthContext } from "./AuthContext";

export const WishlistContext = createContext();

export function WishlistProvider({ children }) {

  const { currentUser } = useContext(AuthContext);

  const [wishlists, setWishlists] = useState([]);


  // Load wishlists whenever the logged-in user changes

  useEffect(() => {

    if (!currentUser) {

      setWishlists([]);

      return;
    }

    const allWishlists =
      JSON.parse(
        localStorage.getItem("wishlists")
      ) || {};

    const userWishlists =
      allWishlists[currentUser.email] || [];

    setWishlists(userWishlists);

  }, [currentUser]);


  // Save wishlists to localStorage

  const saveWishlists = (updatedWishlists) => {

    if (!currentUser) {
      return;
    }

    const allWishlists =
      JSON.parse(
        localStorage.getItem("wishlists")
      ) || {};

    allWishlists[currentUser.email] =
      updatedWishlists;

    localStorage.setItem(
      "wishlists",
      JSON.stringify(allWishlists)
    );
  };


  // Create a new wishlist

  const createWishlist = (name) => {

    if (!currentUser) {
      return false;
    }

    const trimmedName = name.trim();

    if (!trimmedName) {
      return false;
    }

    const newWishlist = {

      id: Date.now(),

      name: trimmedName,

      properties: []

    };


    setWishlists((prev) => {

      const updatedWishlists = [
        ...prev,
        newWishlist
      ];

      saveWishlists(updatedWishlists);

      return updatedWishlists;

    });

    return true;
  };


  // Delete wishlist

  const deleteWishlist = (wishlistId) => {

    if (!currentUser) {
      return false;
    }

    setWishlists((prev) => {

      const updatedWishlists =
        prev.filter(
          wishlist =>
            wishlist.id !== wishlistId
        );

      saveWishlists(updatedWishlists);

      return updatedWishlists;

    });

    return true;
  };


  // Add property to a wishlist

  const addToWishlist = (
    wishlistId,
    property
  ) => {

    if (!currentUser) {
      return false;
    }

    setWishlists((prev) => {

      const updatedWishlists =
        prev.map((wishlist) => {

          if (wishlist.id !== wishlistId) {
            return wishlist;
          }


          // Check whether property already exists

          const alreadyExists =
            wishlist.properties.some(
              item =>
                item.id === property.id
            );


          if (alreadyExists) {
            return wishlist;
          }


          return {

            ...wishlist,

            properties: [
              ...wishlist.properties,
              property
            ]

          };

        });


      saveWishlists(updatedWishlists);

      return updatedWishlists;

    });

    return true;
  };


  // Remove property from a wishlist

  const removeFromWishlist = (
    wishlistId,
    propertyId
  ) => {

    if (!currentUser) {
      return false;
    }

    setWishlists((prev) => {

      const updatedWishlists =
        prev.map((wishlist) => {

          if (wishlist.id !== wishlistId) {
            return wishlist;
          }


          return {

            ...wishlist,

            properties:
              wishlist.properties.filter(
                property =>
                  property.id !== propertyId
              )

          };

        });


      saveWishlists(updatedWishlists);

      return updatedWishlists;

    });

    return true;
  };


  return (

    <WishlistContext.Provider
      value={{

        wishlists,

        createWishlist,

        deleteWishlist,

        addToWishlist,

        removeFromWishlist

      }}
    >

      {children}

    </WishlistContext.Provider>

  );
}

