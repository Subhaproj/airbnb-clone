import { useContext, useMemo } from "react";

import CategoryBar from "../components/CategoryBar";
import PropertyCard from "../components/PropertyCard";

import { CategoryContext } from "../context/CategoryContext";
import { SearchContext } from "../context/SearchContext";

import properties from "../data/properties";


function Explore() {

  const {
    selectedCategory
  } = useContext(CategoryContext);


  const {
    searchTerm,
    guestCount
  } = useContext(SearchContext);


  // =========================================
  // FILTER PROPERTIES
  // useMemo prevents unnecessary recalculation
  // =========================================

  const filteredProperties = useMemo(() => {

    const search =
      searchTerm
        .trim()
        .toLowerCase();

    const category =
      selectedCategory.toLowerCase();

    const guests =
      Number(guestCount);


    return properties.filter(
      (property) => {

        // -------------------------
        // CATEGORY FILTER
        // -------------------------

        const matchesCategory =
          selectedCategory === "" ||
          property.categories?.some(
            (propertyCategory) =>
              propertyCategory
                .toLowerCase() === category
          );


        // -------------------------
        // SEARCH FILTER
        // -------------------------

        const matchesSearch =
          search === "" ||
          property.location
            ?.toLowerCase()
            .includes(search) ||
          property.title
            ?.toLowerCase()
            .includes(search) ||
          property.host
            ?.toLowerCase()
            .includes(search) ||
          property.categories?.some(
            (propertyCategory) =>
              propertyCategory
                .toLowerCase()
                .includes(search)
          );


        // -------------------------
        // GUEST FILTER
        // -------------------------

        const propertyGuestCapacity =
          Number(property.guests);

        const matchesGuests =
          propertyGuestCapacity >= guests;


        // -------------------------
        // FINAL FILTER
        // -------------------------

        return (
          matchesCategory &&
          matchesSearch &&
          matchesGuests
        );

      }
    );

  }, [
    selectedCategory,
    searchTerm,
    guestCount
  ]);


  return (

    <div
      className="
        min-h-screen
        bg-white
      "
    >

      {/* =====================================
          CATEGORY BAR
      ====================================== */}

      <div
        className="
          border-b
          bg-white
          sticky
          top-0
          z-20
        "
      >

        <CategoryBar />

      </div>


      {/* =====================================
          EXPLORE CONTENT
      ====================================== */}

      <main
        className="
          max-w-7xl
          mx-auto
          px-4
          md:px-8
          py-8
        "
      >

        <div className="mb-6">

          <h1
            className="
              text-2xl
              md:text-3xl
              font-bold
            "
          >

            {searchTerm.trim()
              ? `Search results for "${searchTerm}"`
              : selectedCategory
                ? selectedCategory
                : "Explore stays"
            }

          </h1>


          <p
            className="
              mt-2
              text-sm
              text-gray-500
            "
          >

            {filteredProperties.length > 0
              ? `${filteredProperties.length} stays available`
              : "No stays found"
            }

          </p>

        </div>


        {/* =================================
            PROPERTY GRID
        ================================= */}

        {filteredProperties.length > 0 ? (

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              gap-6
            "
          >

            {filteredProperties.map(
              (property) => (

                <PropertyCard
                  key={property.id}
                  property={property}
                />

              )
            )}

          </div>

        ) : (

          <div
            className="
              min-h-[300px]
              flex
              flex-col
              items-center
              justify-center
              text-center
              border
              rounded-2xl
              bg-gray-50
              px-6
            "
          >

            <h2
              className="
                text-xl
                font-semibold
              "
            >
              No stays found
            </h2>


            <p
              className="
                mt-2
                text-sm
                text-gray-500
              "
            >

              We couldn't find any stays
              matching your search or
              guest requirements.

            </p>

          </div>

        )}

      </main>

    </div>

  );

}


export default Explore;