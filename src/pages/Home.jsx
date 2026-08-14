import {
  Search,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Heart,
  MapPin
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import properties from "../data/properties";

import PropertyCard from "../components/PropertyCard";


function Home() {

  const navigate = useNavigate();


  // =========================================
  // EXPLORE
  // =========================================

  const handleExplore = () => {

    navigate("/explore");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  };


  // =========================================
  // FEATURED PROPERTIES
  // =========================================

  const featuredProperties =
    properties.slice(0, 4);


  // =========================================
  // HOME
  // =========================================

  return (

    <div className="bg-white">


      {/* =====================================
          HERO SECTION
      ====================================== */}

      <section
        className="
          relative
          min-h-[600px]
          md:min-h-[680px]
          flex
          items-center
          justify-center
          overflow-hidden
          px-4
          md:px-8
    
        "
      >

        {/* Background image */}

        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="Beautiful holiday home"
          loading="lazy"
          className="
            absolute
      inset-x-4
      md:inset-x-10
      lg:inset-x-16
      top-6
      bottom-6
      w-[calc(100%-2rem)]
      md:w-[calc(100%-5rem)]
      lg:w-[calc(100%-8rem)]
      h-[calc(100%-3rem)]
      object-cover
      rounded-3xl
            
          "
        />


        {/* Dark overlay */}

        <div
          className="
      absolute
      inset-x-4
      md:inset-x-10
      lg:inset-x-16
      top-6
      bottom-6
      bg-black/40
      rounded-3xl
          "
        />


        {/* Hero content */}

        <div
          className="
            relative
            z-10
            text-center
            text-white
            px-6
            max-w-4xl
            mx-auto
          "
        >

          <div
            className="
        inline-flex
        items-center
        gap-2
        bg-white/20
        backdrop-blur-md
        px-4
        py-2
        rounded-full
        text-sm
        mb-6
            "
          >

            <Sparkles size={16} />

            Discover your next getaway

          </div>


          <h1
            className="
              text-4xl
              sm:text-5xl
              md:text-7xl
              font-bold
              leading-tight
            "
          >

            Find a place
            <br />

            <span className="text-blue-200">
              you'll love
            </span>

          </h1>


          <p
            className="
              mt-6
              text-base
              md:text-xl
              text-white/90
              max-w-2xl
              mx-auto
            "
          >

            Discover beautiful homes, peaceful cabins,
            beach houses and unique stays across India.

          </p>


          {/* Explore button */}

          <button
            type="button"
            onClick={handleExplore}
            className="
              mt-8
              inline-flex
              items-center
              gap-3
              bg-white
              text-gray-900
              px-7
              py-4
              rounded-full
              font-semibold
              shadow-lg
              hover:shadow-xl
              hover:scale-105
              active:scale-95
              transition-all
            "
          >

            Explore stays

            <ArrowRight size={19} />

          </button>

        </div>

      </section>


      {/* =====================================
          INTRODUCTION
      ====================================== */}

      <section
        className="
          max-w-7xl
          mx-auto
          px-6
          md:px-8
          py-16
        "
      >

        <div
          className="
            max-w-3xl
          "
        >

          <p
            className="
              text-sm
              font-semibold
              text-blue-500
              uppercase
              tracking-wide
            "
          >
            Welcome
          </p>


          <h2
            className="
              mt-2
              text-3xl
              md:text-4xl
              font-bold
            "
          >

            Your next adventure starts here.

          </h2>


          <p
            className="
              mt-4
              text-gray-600
              leading-7
            "
          >

            Whether you're looking for a relaxing beach
            escape, a peaceful cabin in the hills, or a
            comfortable city home, discover stays that
            match the way you want to travel.

          </p>

        </div>

      </section>


      {/* =====================================
          FEATURED / NEW ARRIVALS
      ====================================== */}

      <section
        className="
          bg-gray-50
          py-16
        "
      >

        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            md:px-8
          "
        >

          <div
            className="
              flex
              flex-col
              sm:flex-row
              sm:items-end
              justify-between
              gap-4
              mb-8
            "
          >

            <div>

              <p
                className="
                  text-sm
                  font-semibold
                  text-blue-500
                  uppercase
                  tracking-wide
                "
              >
                New arrivals
              </p>


              <h2
                className="
                  mt-1
                  text-3xl
                  font-bold
                "
              >
                Discover popular stays
              </h2>


              <p
                className="
                  mt-2
                  text-gray-500
                "
              >
                Take a look at some of our featured homes.
              </p>

            </div>


            <button
              type="button"
              onClick={handleExplore}
              className="
                inline-flex
                items-center
                gap-2
                font-semibold
                hover:text-blue-500
                transition
              "
            >

              View all

              <ArrowRight size={17} />

            </button>

          </div>


          {/* Property cards */}

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

            {featuredProperties.map(
              (property) => (

                <PropertyCard
                  key={property.id}
                  property={property}
                />

              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================
          WHY CHOOSE US
      ====================================== */}

      <section
        className="
          max-w-7xl
          mx-auto
          px-6
          md:px-8
          py-16
        "
      >

        <div className="text-center mb-12">

          <p
            className="
              text-sm
              font-semibold
              text-blue-500
              uppercase
              tracking-wide
            "
          >
            Why choose us
          </p>


          <h2
            className="
              mt-2
              text-3xl
              md:text-4xl
              font-bold
            "
          >
            Stay your way
          </h2>

        </div>


        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-8
          "
        >


          {/* Card 1 */}

          <div
            className="
              border
              rounded-2xl
              p-7
              hover:shadow-md
              transition
            "
          >

            <div
              className="
                w-12
                h-12
                rounded-full
                bg-blue-50
                flex
                items-center
                justify-center
                text-blue-500
              "
            >

              <MapPin size={23} />

            </div>


            <h3
              className="
                mt-5
                text-lg
                font-semibold
              "
            >
              Great locations
            </h3>


            <p
              className="
                mt-2
                text-sm
                text-gray-500
                leading-6
              "
            >
              Find stays in cities, beaches, mountains
              and peaceful countryside locations.
            </p>

          </div>


          {/* Card 2 */}

          <div
            className="
              border
              rounded-2xl
              p-7
              hover:shadow-md
              transition
            "
          >

            <div
              className="
                w-12
                h-12
                rounded-full
                bg-green-50
                flex
                items-center
                justify-center
                text-green-600
              "
            >

              <ShieldCheck size={23} />

            </div>


            <h3
              className="
                mt-5
                text-lg
                font-semibold
              "
            >
              Comfortable stays
            </h3>


            <p
              className="
                mt-2
                text-sm
                text-gray-500
                leading-6
              "
            >
              Browse carefully presented properties with
              useful information before you book.
            </p>

          </div>


          {/* Card 3 */}

          <div
            className="
              border
              rounded-2xl
              p-7
              hover:shadow-md
              transition
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
                text-red-500
              "
            >

              <Heart size={23} />

            </div>


            <h3
              className="
                mt-5
                text-lg
                font-semibold
              "
            >
              Find your favorites
            </h3>


            <p
              className="
                mt-2
                text-sm
                text-gray-500
                leading-6
              "
            >
              Save the places you love and come back
              whenever you're ready to plan your trip.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================
          ABOUT SECTION
      ====================================== */}

      <section
        className="
          bg-gray-900
          text-white
          py-16
        "
      >

        <div
          className="
            max-w-5xl
            mx-auto
            px-6
            text-center
          "
        >

          <h2
            className="
              text-3xl
              md:text-4xl
              font-bold
            "
          >
            Travel differently.
          </h2>


          <p
            className="
              mt-5
              text-gray-300
              leading-7
              max-w-2xl
              mx-auto
            "
          >

            From peaceful countryside escapes to
            beautiful city homes, we're building a
            simple way to discover stays that feel
            special.

          </p>


          <button
            type="button"
            onClick={handleExplore}
            className="
              mt-8
              inline-flex
              items-center
              gap-2
              bg-white
              text-gray-900
              px-6
              py-3
              rounded-full
              font-semibold
              hover:scale-105
              transition
            "
          >

            Start exploring

            <ArrowRight size={18} />

          </button>

        </div>

      </section>


    </div>

  );

}


export default Home;