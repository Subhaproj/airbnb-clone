import { useContext } from "react";

import { FavoriteContext } from "../context/FavoriteContext";
import { SearchContext } from "../context/SearchContext";

import PropertyCard from "../components/PropertyCard";


function Favorites() {

  const {
    favorites
  } = useContext(FavoriteContext);


  const {
    searchTerm
  } = useContext(SearchContext);


  // =========================================
  // SEARCH FAVORITES ONLY
  // =========================================

  const search =
    searchTerm.trim().toLowerCase();


  const filteredFavorites =
    favorites.filter((property) => {

      // No search → show all favorites
      if (!search) {
        return true;
      }


      return (

        property.title
          ?.toLowerCase()
          .includes(search)

        ||

        property.location
          ?.toLowerCase()
          .includes(search)

        ||

        property.host
          ?.toLowerCase()
          .includes(search)

        ||

        property.categories?.some(
          (category) =>
            category
              .toLowerCase()
              .includes(search)
        )

      );

    });


  return (

    <div
      className="
        px-6
        py-8
      "
    >

      <h1
        className="
          text-3xl
          font-bold
          mb-8
        "
      >
        Your Favorites
      </h1>


      {/* =================================
          NO FAVORITES AT ALL
      ================================= */}

      {favorites.length === 0 ? (

        <p
          className="
            text-gray-500
            text-lg
          "
        >
          No favorites yet.
        </p>

      ) : filteredFavorites.length === 0 ? (

        /* =================================
           NO SEARCH RESULTS
        ================================= */

        <div
          className="
            text-center
            py-16
          "
        >

          <h2
            className="
              text-xl
              font-semibold
            "
          >
            No matching favorites
          </h2>


          <p
            className="
              text-gray-500
              mt-2
            "
          >
            No favorite stays match
            "{searchTerm}".
          </p>

        </div>

      ) : (

        /* =================================
           FAVORITES GRID
        ================================= */

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

          {filteredFavorites.map(
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

  );

}


export default Favorites;