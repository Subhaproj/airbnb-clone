import {
  Globe,
  Heart,
  Home,
  HelpCircle
} from "lucide-react";

import {
  Link,
  useNavigate
} from "react-router-dom";

import { toast } from "sonner";

import { useContext } from "react";

import {
  CategoryContext
} from "../context/CategoryContext";


function Footer() {

  const navigate = useNavigate();

  const {
    setSelectedCategory
  } = useContext(CategoryContext);


  // =========================================
  // EXPLORE CATEGORY
  // =========================================

  const handleExplore = (category) => {

    setSelectedCategory(category);

    navigate("/explore");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  };


  // =========================================
  // COMING SOON
  // =========================================

  const handleComingSoon = (name) => {

    toast.info(`${name} is coming soon.`);

  };


  return (

    <footer
      className="
        border-t
        bg-gray-50
        mt-12
      "
    >

      {/* =====================================
          MAIN FOOTER
      ====================================== */}

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          md:px-8
          py-12
        "
      >

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-4
            gap-10
          "
        >

          {/* =================================
              SUPPORT
          ================================== */}

          <div>

            <h3 className="font-semibold mb-4">
              Support
            </h3>

            <ul
              className="
                space-y-3
                text-sm
                text-gray-600
              "
            >

              <li>

                <Link
                  to="/help"
                  className="
                    hover:text-black
                    transition
                  "
                >
                  Help Center
                </Link>

              </li>


              <li>

                <button
                  type="button"
                  onClick={() =>
                    handleComingSoon("AirCover")
                  }
                  className="
                    hover:text-black
                    transition
                    text-left
                  "
                >
                  AirCover
                </button>

              </li>


              <li>

                <button
                  type="button"
                  onClick={() =>
                    handleComingSoon(
                      "Anti-discrimination"
                    )
                  }
                  className="
                    hover:text-black
                    transition
                    text-left
                  "
                >
                  Anti-discrimination
                </button>

              </li>


              <li>

                <button
                  type="button"
                  onClick={() =>
                    handleComingSoon(
                      "Disability support"
                    )
                  }
                  className="
                    hover:text-black
                    transition
                    text-left
                  "
                >
                  Disability support
                </button>

              </li>


              <li>

                <button
                  type="button"
                  onClick={() =>
                    handleComingSoon(
                      "Cancellation options"
                    )
                  }
                  className="
                    hover:text-black
                    transition
                    text-left
                  "
                >
                  Cancellation options
                </button>

              </li>

            </ul>

          </div>


          {/* =================================
              HOSTING
          ================================== */}

          <div>

            <h3 className="font-semibold mb-4">
              Hosting
            </h3>

            <ul
              className="
                space-y-3
                text-sm
                text-gray-600
              "
            >

              <li>

                <button
                  type="button"
                  onClick={() =>
                    handleComingSoon(
                      "Airbnb your home"
                    )
                  }
                  className="
                    hover:text-black
                    transition
                  "
                >
                  Airbnb your home
                </button>

              </li>


              <li>

                <button
                  type="button"
                  onClick={() =>
                    handleComingSoon(
                      "AirCover for Hosts"
                    )
                  }
                  className="
                    hover:text-black
                    transition
                  "
                >
                  AirCover for Hosts
                </button>

              </li>


              <li>

                <button
                  type="button"
                  onClick={() =>
                    handleComingSoon(
                      "Hosting resources"
                    )
                  }
                  className="
                    hover:text-black
                    transition
                  "
                >
                  Hosting resources
                </button>

              </li>


              <li>

                <button
                  type="button"
                  onClick={() =>
                    handleComingSoon(
                      "Community forum"
                    )
                  }
                  className="
                    hover:text-black
                    transition
                  "
                >
                  Community forum
                </button>

              </li>


              <li>

                <button
                  type="button"
                  onClick={() =>
                    handleComingSoon(
                      "Hosting responsibly"
                    )
                  }
                  className="
                    hover:text-black
                    transition
                  "
                >
                  Hosting responsibly
                </button>

              </li>

            </ul>

          </div>


          {/* =================================
              COMPANY
          ================================== */}

          <div>

            <h3 className="font-semibold mb-4">
              Company
            </h3>

            <ul
              className="
                space-y-3
                text-sm
                text-gray-600
              "
            >

              <li>

                <button
                  type="button"
                  onClick={() =>
                    handleComingSoon("About")
                  }
                  className="
                    hover:text-black
                    transition
                  "
                >
                  About
                </button>

              </li>


              <li>

                <button
                  type="button"
                  onClick={() =>
                    handleComingSoon("Newsroom")
                  }
                  className="
                    hover:text-black
                    transition
                  "
                >
                  Newsroom
                </button>

              </li>


              <li>

                <button
                  type="button"
                  onClick={() =>
                    handleComingSoon("Careers")
                  }
                  className="
                    hover:text-black
                    transition
                  "
                >
                  Careers
                </button>

              </li>


              <li>

                <button
                  type="button"
                  onClick={() =>
                    handleComingSoon("Investors")
                  }
                  className="
                    hover:text-black
                    transition
                  "
                >
                  Investors
                </button>

              </li>


              <li>

                <button
                  type="button"
                  onClick={() =>
                    handleComingSoon("Gift cards")
                  }
                  className="
                    hover:text-black
                    transition
                  "
                >
                  Gift cards
                </button>

              </li>

            </ul>

          </div>


          {/* =================================
              EXPLORE
          ================================== */}

          <div>

            <h3 className="font-semibold mb-4">
              Explore
            </h3>

            <ul
              className="
                space-y-3
                text-sm
                text-gray-600
              "
            >

              {/* Popular destinations */}

              <li>

                <button
                  type="button"
                  onClick={() =>
                    handleExplore("")
                  }
                  className="
                    flex
                    items-center
                    gap-2
                    hover:text-black
                    transition
                  "
                >

                  <Home size={16} />

                  Popular destinations

                </button>

              </li>


              {/* Amazing stays */}

              <li>

                <button
                  type="button"
                  onClick={() =>
                    handleExplore("")
                  }
                  className="
                    hover:text-black
                    transition
                  "
                >
                  Amazing stays
                </button>

              </li>


              {/* Beach houses */}

              <li>

                <button
                  type="button"
                  onClick={() =>
                    handleExplore("Beach")
                  }
                  className="
                    hover:text-black
                    transition
                  "
                >
                  Beach houses
                </button>

              </li>


              {/* Cabins */}

              <li>

                <button
                  type="button"
                  onClick={() =>
                    handleExplore("Cabins")
                  }
                  className="
                    hover:text-black
                    transition
                  "
                >
                  Cabins
                </button>

              </li>


              {/* Unique homes */}

              <li>

                <button
                  type="button"
                  onClick={() =>
                    handleExplore("Homes")
                  }
                  className="
                    hover:text-black
                    transition
                  "
                >
                  Unique homes
                </button>

              </li>

            </ul>

          </div>

        </div>

      </div>


      {/* =====================================
          BOTTOM FOOTER
      ====================================== */}

      <div className="border-t">

        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            md:px-8
            py-5
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-4
          "
        >

          {/* =================================
              COPYRIGHT
          ================================== */}

          <div
            className="
              text-sm
              text-gray-600
              text-center
              md:text-left
            "
          >

            © 2026 Airbnb ·

            <button
              type="button"
              onClick={() =>
                handleComingSoon("Privacy")
              }
              className="
                ml-1
                hover:text-black
              "
            >
              Privacy
            </button>

            {" · "}

            <button
              type="button"
              onClick={() =>
                handleComingSoon("Terms")
              }
              className="
                hover:text-black
              "
            >
              Terms
            </button>

            {" · "}

            <button
              type="button"
              onClick={() =>
                handleComingSoon("Sitemap")
              }
              className="
                hover:text-black
              "
            >
              Sitemap
            </button>

          </div>


          {/* =================================
              RIGHT SIDE
          ================================== */}

          <div
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-5
              text-sm
              text-gray-700
            "
          >

            {/* Language */}

            <button
              type="button"
              onClick={() =>
                handleComingSoon(
                  "Language selection"
                )
              }
              className="
                flex
                items-center
                gap-2
                hover:text-black
                transition
              "
            >

              <Globe size={17} />

              <span>
                English (IN)
              </span>

            </button>


            {/* Currency */}

            <button
              type="button"
              onClick={() =>
                handleComingSoon(
                  "Currency selection"
                )
              }
              className="
                hover:text-black
                transition
              "
            >
              ₹ INR
            </button>


            {/* Help */}

            <Link
              to="/help"
              aria-label="Help"
              className="
                flex
                items-center
                gap-2
                hover:text-black
                transition
              "
            >

              <HelpCircle size={17} />

              Help

            </Link>


            {/* Favorites */}

            <button
              type="button"
              onClick={() =>
                navigate("/favorites")
              }
              aria-label="Favorites"
              className="
                hover:scale-110
                hover:text-red-500
                transition
              "
            >

              <Heart size={18} />

            </button>

          </div>

        </div>

      </div>

    </footer>

  );

}

export default Footer;