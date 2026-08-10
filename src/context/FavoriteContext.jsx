import {
  createContext,
  useState,
  useEffect,
  useContext
} from "react";

import { AuthContext } from "./AuthContext";

export const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {

  const { currentUser } = useContext(AuthContext);

  const [favorites, setFavorites] = useState([]);


  // Load favorites whenever the logged-in user changes
  useEffect(() => {

    if (!currentUser) {
      setFavorites([]);
      return;
    }

    const allFavorites =
      JSON.parse(localStorage.getItem("favorites")) || {};

    const userFavorites =
      allFavorites[currentUser.email] || [];

    setFavorites(userFavorites);

  }, [currentUser]);


  const toggleFavorite = (property) => {

    // Don't allow favorites when logged out
    if (!currentUser) {
      return false;
    }


    setFavorites((prev) => {

      


      const exists = prev.some(
        item => item.id === property.id
      );

      let updatedFavorites;


      if (exists) {

        updatedFavorites = prev.filter(
          item => item.id !== property.id
        );

      } else {

        updatedFavorites = [
          ...prev,
          property
        ];

      }


      // Get all users' favorites
      const allFavorites =
        JSON.parse(localStorage.getItem("favorites")) || {};


      // Update ONLY the current user's favorites
      allFavorites[currentUser.email] =
        updatedFavorites;


      localStorage.setItem(
        "favorites",
        JSON.stringify(allFavorites)
      );


      return updatedFavorites;

    });

    return true;

  };


  return (

    <FavoriteContext.Provider
      value={{
        favorites,
        toggleFavorite
      }}
    >

      {children}

    </FavoriteContext.Provider>

  );

}