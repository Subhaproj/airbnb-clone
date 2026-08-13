
import {
  Search,
  Menu,
  Globe
} from "lucide-react";

import {
  useContext,
  useState,
  useRef,
  useEffect
} from "react";

import {
  SearchContext
} from "../context/SearchContext";

import {
  Link,
  useNavigate
} from "react-router-dom";

import {
  AuthContext
} from "../context/AuthContext";

import AnimatedLogo from "./AnimatedLogo";

import {
  CategoryContext
} from "../context/CategoryContext";

import GuestSelector from "./GuestSelector";
import { useLocation } from "react-router-dom";

;


// ==========================
// Avatar colors
// ==========================

const avatarColors = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-purple-500",
  "bg-orange-500",
  "bg-pink-500",
  "bg-teal-500",
  "bg-indigo-500",
];




// ==========================
// Generate avatar color
// ==========================

function getAvatarColor(user) {

  if (!user) {
    return "bg-gray-500";
  }

  const value =
    user.displayName ||
    user.email ||
    "user";

  let hash = 0;

  for (let i = 0; i < value.length; i++) {

    hash =
      value.charCodeAt(i) +
      ((hash << 5) - hash);

  }

  return avatarColors[
    Math.abs(hash) %
    avatarColors.length
  ];
}


// ==========================
// Generate avatar initial
// ==========================

function getInitial(user) {

  if (!user) {
    return "U";
  }

  const name =
    user.displayName ||
    user.email ||
    "User";

  return name
    .charAt(0)
    .toUpperCase();
}


// ==========================
// Navbar
// ==========================

function Navbar() {

  const location = useLocation();

const isHelpPage = location.pathname === "/help";

  // ==========================
  // Search Context
  // ==========================

  const {
    searchTerm,
    setSearchTerm,
    guestCount,
    setGuestCount
  } = useContext(SearchContext);


  // ==========================
  // Auth Context
  // ==========================

  const {
    currentUser,
    logout
  } = useContext(AuthContext);


  // ==========================
  // Category Context
  // ==========================

  const {
    setSelectedCategory
  } = useContext(CategoryContext);


  const navigate = useNavigate();


  // ==========================
  // Avatar
  // ==========================

  const avatarColor =
    getAvatarColor(currentUser);

  const avatarInitial =
    getInitial(currentUser);


  // ==========================
  // Dropdown states
  // ==========================

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [globeOpen, setGlobeOpen] =
    useState(false);

  const [guestOpen, setGuestOpen] =
    useState(false);


  // ==========================
  // Refs
  // ==========================

  const menuRef =
    useRef(null);

  const globeRef =
    useRef(null);

  const guestRef =
    useRef(null);


  // ==========================
  // Search
  // ==========================

 const handleSearch = () => {

  setSelectedCategory("");

  const path = location.pathname;

  // Home → Explore
  if (path === "/") {
    navigate("/explore");
    return;
  }

  // Explore → stay on Explore
  if (path === "/explore") {
    return;
  }

  // Favorites → stay on Favorites
  if (path === "/favorites") {
    return;
  }

  // Wishlists → stay on Wishlists
  if (path === "/wishlists") {
    return;
  }

  // Other pages → Explore
  navigate("/explore");

};


  // ==========================
  // Close dropdowns
  // when clicking outside
  // ==========================

  useEffect(() => {
    

    function handleClickOutside(event) {

      if (
        menuRef.current &&
        !menuRef.current.contains(
          event.target
        )
      ) {

        setMenuOpen(false);

      }


      if (
        globeRef.current &&
        !globeRef.current.contains(
          event.target
        )
      ) {

        setGlobeOpen(false);

      }


      if (
        guestRef.current &&
        !guestRef.current.contains(
          event.target
        )
      ) {

        setGuestOpen(false);

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
  // Reset guest selection when navigating to another page
useEffect(() => {
  setGuestCount(1);
  setGuestOpen(false);
}, [location.pathname]);


  return (

    <header
      className="
        w-full
        border-b
        bg-white
        sticky
        top-0
        z-50
      "
    >

      <nav
        className="
          flex
          items-center
          justify-between
          gap-4
          px-4
          md:px-8
          py-4
        "
      >


        {/* ==========================
            Logo
        ========================== */}

        <div
          className="
            flex
            items-center
            shrink-0
            cursor-pointer
          "
          onClick={() => {

            setSelectedCategory("");

            setSearchTerm("");

            navigate("/");

          }}
        >

          <AnimatedLogo />

        </div>


        {/* ==========================
            Desktop Search
        ========================== */}
      
        {!isHelpPage && (

  <div
    className="
      hidden
      md:flex
      items-center
      border
      rounded-full
      shadow-sm
      hover:shadow-md
      transition
      px-4
      py-2
      flex-1
      max-w-2xl
    "
  >

    {/* Search places */}

    <input
      type="text"
      value={searchTerm}
      onChange={(e) =>
        setSearchTerm(e.target.value)
      }
      onKeyDown={(e) => {

        if (e.key === "Enter") {
          handleSearch();
        }

      }}
      placeholder="Search places"
      className="
        outline-none
        text-sm
        font-semibold
        w-full
        min-w-0
      "
      aria-label="Search places"
    />


    {/* Guests */}

    <div
      ref={guestRef}
      className="
        relative
        border-l
        px-4
      "
    >

      <button
        type="button"
        onClick={() => {

          setGuestOpen(
            (prev) => !prev
          );

          setGlobeOpen(false);
          setMenuOpen(false);

        }}
        className="
          text-sm
          font-semibold
          whitespace-nowrap
        "
      >

        {guestCount === 1
          ? "Add guests"
          : `${guestCount} guests`
        }

      </button>


      {guestOpen && (
  <GuestSelector
    guestCount={guestCount}
    setGuestCount={setGuestCount}
  />
)}

    </div>


    {/* Search button */}

    <button
      type="button"
      onClick={handleSearch}
      aria-label="Search"
      className="
        bg-red-500
        text-white
        rounded-full
        p-3
        ml-2
        flex
        items-center
        justify-center
        shrink-0
        hover:scale-105
        active:scale-95
        transition-transform
      "
    >

      <Search size={18} />

    </button>

  </div>

)}


        {/* ==========================
            Mobile / Tablet Search
        ========================== */}
      {!isHelpPage &&(
        <div
          className="
            flex
            md:hidden
            items-center
            flex-1
            border
            rounded-full
            px-3
            py-2
          "
        >

          <Search
            size={18}
            className="text-gray-500"
          />

          <input
            type="text"
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(
                e.target.value
              )
            }
            onKeyDown={(e) => {

              if (e.key === "Enter") {

                handleSearch();

              }

            }}
            placeholder="Search places"
            className="
              ml-2
              w-full
              min-w-0
              outline-none
              text-sm
            "
            aria-label="Search places"
          />

        </div>
        )}


        {/* ==========================
            Right Side
        ========================== */}

        <div
          className="
            flex
            items-center
            gap-2
            shrink-0
          "
        >


          {/* Favorites */}

          <Link
            to="/favorites"
            className="
              hidden
              md:block
              text-sm
              font-medium
              hover:underline
            "
          >
            Favorites ⭐
          </Link>


          {/* ==========================
              Globe
          ========================== */}

          <div
            ref={globeRef}
            className="
              relative
              hidden
              md:block
            "
          >

            <button
              type="button"
              onClick={() => {

                setGlobeOpen(
                  (prev) => !prev
                );

                setMenuOpen(false);

                setGuestOpen(false);

              }}
              className="
                p-2
                rounded-full
                hover:bg-gray-100
                transition
              "
              aria-label="Choose language and currency"
            >

              <Globe size={21} />

            </button>


            {/* Globe menu */}

            {globeOpen && (

              <div
                className="
                  absolute
                  right-0
                  top-12
                  w-64
                  bg-white
                  border
                  rounded-xl
                  shadow-lg
                  p-4
                  z-50
                "
              >

                <h3
                  className="
                    font-semibold
                    mb-3
                  "
                >
                  Language & Currency
                </h3>


                <button
                  type="button"
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    py-3
                    text-sm
                    hover:bg-gray-100
                    rounded-lg
                    px-2
                  "
                >

                  <span>
                    Language
                  </span>

                  <span
                    className="
                      font-medium
                    "
                  >
                    English
                  </span>

                </button>


                <button
                  type="button"
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    py-3
                    text-sm
                    hover:bg-gray-100
                    rounded-lg
                    px-2
                  "
                >

                  <span>
                    Currency
                  </span>

                  <span
                    className="
                      font-medium
                    "
                  >
                    ₹ INR
                  </span>

                </button>

              </div>

            )}

          </div>


          {/* ==========================
              Profile Menu
          ========================== */}

          <div
            ref={menuRef}
            className="relative"
          >

            <button
              type="button"
              onClick={() => {

                setMenuOpen(
                  (prev) => !prev
                );

                setGlobeOpen(false);

                setGuestOpen(false);

              }}
              className="
                flex
                items-center
                gap-2
                border
                rounded-full
                px-3
                py-2
                hover:shadow-md
                transition
              "
              aria-label="Open profile menu"
            >

              <Menu size={20} />


              <div
                className={`
                  ${avatarColor}
                  w-8
                  h-8
                  rounded-full
                  flex
                  items-center
                  justify-center
                  text-white
                  text-sm
                  font-semibold
                `}
              >

                {avatarInitial}

              </div>

            </button>


            {/* ==========================
                Menu Dropdown
            ========================== */}

            {menuOpen && (

              <div
                className="
                  absolute
                  right-0
                  top-14
                  w-64
                  bg-white
                  border
                  rounded-xl
                  shadow-lg
                  py-2
                  z-50
                "
              >

                {/* Logged-in options */}

                {currentUser && (

                  <>

                    {/* Favorites */}

    <button
      type="button"
      onClick={() => {

        setMenuOpen(false);

        navigate("/favorites");

      }}
      className="
      md:hidden
        w-full
        text-left
        px-5
        py-3
        hover:bg-gray-100
      "
    >

      Favorites ⭐

    </button>

                    {/* Wishlists */}

                    <button
                      type="button"
                      onClick={() => {

                        setMenuOpen(false);

                        navigate(
                          "/wishlists"
                        );

                      }}
                      className="
                        w-full
                        text-left
                        px-5
                        py-3
                        hover:bg-gray-100
                      "
                    >

                      Wishlists ❤️

                    </button>


                    {/* Trips */}

                    <button
                      type="button"
                      onClick={() => {

                        setMenuOpen(false);

                        navigate(
                          "/trips"
                        );

                      }}
                      className="
                        w-full
                        text-left
                        px-5
                        py-3
                        hover:bg-gray-100
                      "
                    >

                      Trips 🚗

                    </button>

                  </>

                )}


                {/* Help Center */}

                <button
                  type="button"
                  onClick={() => {

                    setMenuOpen(false);

                    navigate(
                      "/help"
                    );

                  }}
                  className="
                    w-full
                    text-left
                    px-5
                    py-3
                    hover:bg-gray-100
                  "
                >

                  Help Center 📞

                </button>


               
{/* Login / Signup / Logout */}

{currentUser ? (

  /* ==========================
     Logged-in user
  ========================== */

  <button
    type="button"
    onClick={() => {

      logout();

      setMenuOpen(false);

      navigate("/");

    }}
    className="
      w-full
      text-left
      px-5
      py-3
      text-red-500
      font-semibold
      hover:bg-red-50
    "
  >

    Logout 

  </button>

) : (

  /* ==========================
     Logged-out user
  ========================== */

  <>

    {/* Log in */}

    <button
      type="button"
      onClick={() => {

        setMenuOpen(false);

        navigate("/login");

      }}
      className="
        w-full
        text-left
        px-5
        py-3
        text-red-500
        font-semibold
        hover:bg-gray-100
      "
    >

      Log in

    </button>


    {/* Sign up */}

    <button
      type="button"
      onClick={() => {

        setMenuOpen(false);

        navigate("/signup");

      }}
      className="
        w-full
        text-left
        px-5
        py-3
        font-semibold
        hover:bg-gray-100
      "
    >

      Sign up

    </button>

  </>

)}



              </div>

            )}

          </div>

        </div>

      </nav>

    </header>

  );

}

export default Navbar;

