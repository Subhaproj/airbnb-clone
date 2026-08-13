import properties from "../data/properties";
import PropertyCard from "./PropertyCard";

import { useContext } from "react";

import { SearchContext } from "../context/SearchContext";
import { CategoryContext } from "../context/CategoryContext";


function PropertyGrid() {

  const {
    searchTerm,
    guestCount
  } = useContext(SearchContext);


  const {
    selectedCategory
  } = useContext(CategoryContext);


  const filteredProperties = properties.filter((property) => {

    // ==========================
    // SEARCH FILTER
    // ==========================

    const search = searchTerm
      .trim()
      .toLowerCase();


    const searchMatch =
      search === "" ||
      property.location
        .toLowerCase()
        .includes(search) ||
      property.title
        .toLowerCase()
        .includes(search);


    // ==========================
    // CATEGORY FILTER
    // ==========================

    const categoryMatch =
      selectedCategory === "" ||
      (
        Array.isArray(property.categories) &&
        property.categories.includes(
          selectedCategory
        )
      );


    // ==========================
    // GUEST FILTER
    // ==========================

    const propertyGuestCapacity =
      Number(property.guests);


    const guestMatch =
      propertyGuestCapacity >= Number(guestCount);


    // ==========================
    // FINAL FILTER
    // ==========================

    return (
      searchMatch &&
      categoryMatch &&
      guestMatch
    );

  });


  return (
    <div>

      {/* ==========================
          Search Result Message
      ========================== */}

      {(searchTerm.trim() !== "" || guestCount > 1) && (

        <div className="px-4 md:px-8 pt-6">

          {filteredProperties.length > 0 ? (

            <p className="text-lg font-semibold">

              {filteredProperties.length}{" "}

              {filteredProperties.length === 1
                ? "stay"
                : "stays"
              }{" "}

              found

              {searchTerm.trim() !== "" && (
                <>
                  {" "}for{" "}
                  <span className="text-gray-500">
                    "{searchTerm}"
                  </span>
                </>
              )}

              {guestCount > 1 && (
                <>
                  {" "}for{" "}
                  {guestCount} guests
                </>
              )}

            </p>

          ) : (

            <div className="py-6">

              <h2 className="text-xl font-semibold">
                No stays found
              </h2>

              <p className="text-gray-500 mt-1">

                No stays are available for{" "}

                <span className="font-medium">
                  {guestCount} guests
                </span>.

              </p>

            </div>

          )}

        </div>

      )}


      {/* ==========================
          PROPERTY GRID
      ========================== */}

      <div
        id="property-results"
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-6
          px-4
          md:px-8
          py-8
        "
      >

        {filteredProperties.map((property) => (

          <PropertyCard
            key={property.id}
            property={property}
          />

        ))}

      </div>

    </div>
  );
}


export default PropertyGrid;