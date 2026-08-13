import { useState } from "react";

import {
  Search,
  Home,
  Heart,
  CalendarDays,
  User,
  Mail,
  ChevronDown,
  ChevronUp,
  X,
  ArrowLeft
} from "lucide-react";

function HelpCenter() {

  // =========================================
  // SEARCH STATE
  // =========================================

  const [searchTerm, setSearchTerm] = useState("");

  const [searchResult, setSearchResult] =
    useState(null);


  // =========================================
  // COMMON QUESTION STATE
  // =========================================

  const [openQuestion, setOpenQuestion] =
    useState(null);


  // =========================================
  // HELP TOPIC STATE
  // =========================================

  const [selectedTopic, setSelectedTopic] =
    useState(null);


  // =========================================
  // BROWSE HELP TOPICS
  // =========================================

  const helpTopics = [

    {
      icon: Home,

      title: "Getting Started",

      description:
        "Learn how to explore stays and find the right property.",

      answer:
        "Start by browsing properties from the Home or Explore page. Use the search bar to find a location and the category bar to discover different types of stays. Click any property to view its details."
    },

    {
      icon: CalendarDays,

      title: "Bookings & Trips",

      description:
        "Learn about bookings, reservations, cancellations and trips.",

      answer:
        "To book a stay, open a property, choose your check-in and check-out dates, select the number of guests and click Reserve. After booking, you can view your reservations from the Trips page."
    },

    {
      icon: Heart,

      title: "Favorites & Wishlists",

      description:
        "Save properties to Favorites and organize them into Wishlists.",

      answer:
        "Click the star icon on a property to add it to Favorites. You can also create Wishlists to organize properties that you want to save for later."
    },

    {
      icon: User,

      title: "Account",

      description:
        "Get help with your account, login and signup.",

      answer:
        "Use Sign Up to create a new account and Login to access your account. You need to be logged in to make bookings and access your personal Trips, Favorites and Wishlists."
    }

  ];


  // =========================================
  // SEARCH HELP
  // =========================================

  const searchAnswers = [

    {
      question: "How do I book a stay?",

      keywords: [
        "book",
        "booking",
        "reserve",
        "reservation",
        "stay"
      ],

      answer:
        "Open the property you want to book, select your check-in and check-out dates, choose the number of guests and click Reserve. You must be logged in to complete your booking."
    },

    {
      question:
        "How do I add a property to Favorites?",

      keywords: [
        "favorite",
        "favorites",
        "star"
      ],

      answer:
        "Open a property and click the star icon. The property will be added to your Favorites. You can view your saved properties from the Favorites page."
    },

    {
      question:
        "How do I create a Wishlist?",

      keywords: [
        "wishlist",
        "wishlists"
      ],

      answer:
        "Open the Wishlists page and create a new wishlist. You can then add properties to the wishlist from a property card or listing details page."
    },

    {
      question:
        "How can I view my trips?",

      keywords: [
        "trip",
        "trips"
      ],

      answer:
        "Open the Trips page from the navigation menu. You can see your upcoming and previous bookings along with their booking details."
    },

    {
      question:
        "How do I cancel a booking?",

      keywords: [
        "cancel",
        "cancellation"
      ],

      answer:
        "Go to the Trips page, find the booking you want to cancel and use the cancellation option for that booking."
    },

    {
      question:
        "How do I log in?",

      keywords: [
        "login",
        "log in",
        "sign in"
      ],

      answer:
        "Click Login in the navigation bar and enter the email and password associated with your account."
    },

    {
      question:
        "How do I create an account?",

      keywords: [
        "signup",
        "sign up",
        "register",
        "account"
      ],

      answer:
        "Click Sign Up in the navigation bar and enter your name, email and password. After creating your account, you can log in."
    },

    {
      question:
        "How do I find a property?",

      keywords: [
        "property",
        "properties",
        "find",
        "location"
      ],

      answer:
        "Use the search bar to search for a location or property. You can also use the category bar to browse different types of stays."
    }

  ];


  // =========================================
  // COMMON QUESTIONS
  // COMPLETELY SEPARATE FROM SEARCH
  // =========================================

  const commonQuestions = [

    {
      question:
        "How do I book a stay?",

      answer:
        "Open a property, select your check-in and check-out dates, choose the number of guests and click Reserve. You must be logged in to complete the booking."
    },

    {
      question:
        "How do I add a property to Favorites?",

      answer:
        "Open a property and click the star icon. The property will be added to your Favorites."
    },

    {
      question:
        "How do I create a Wishlist?",

      answer:
        "Open the Wishlists page and create a new wishlist. You can then add properties to your wishlist."
    },

    {
      question:
        "How can I view my trips?",

      answer:
        "Open the Trips page from the navigation menu to view your upcoming and previous bookings."
    },

    {
      question:
        "How do I cancel a booking?",

      answer:
        "Go to the Trips page, find the booking and use the cancellation option."
    },

    {
      question:
        "How do I remove a property from Favorites?",

      answer:
        "Open your Favorites page and click the star icon on the property you want to remove."
    }

  ];


  // =========================================
  // SEARCH
  // =========================================

  const handleSearch = () => {

    const search =
      searchTerm.trim().toLowerCase();


    if (!search) {

      setSearchResult(null);

      return;

    }


    // Search question text

    const questionMatch =
      searchAnswers.find((item) =>
        item.question
          .toLowerCase()
          .includes(search)
      );


    if (questionMatch) {

      setSearchResult(questionMatch);

      return;

    }


    // Search keywords

    const keywordMatch =
      searchAnswers.find((item) =>
        item.keywords.some((keyword) =>
          keyword
            .toLowerCase()
            .includes(search) ||
          search.includes(
            keyword.toLowerCase()
          )
        )
      );


    if (keywordMatch) {

      setSearchResult(keywordMatch);

      return;

    }


    // No result

    setSearchResult({
      question: "No answer found",

      answer:
        "We couldn't find an answer for your question. Try searching for booking, favorite, wishlist, trip, login or cancellation."
    });

  };


  // =========================================
  // ENTER KEY SEARCH
  // =========================================

  const handleSearchKeyDown = (e) => {

    if (e.key === "Enter") {

      handleSearch();

    }

  };


  // =========================================
  // COMMON QUESTION CLICK
  // =========================================

  const handleQuestionClick = (question) => {

    if (openQuestion === question) {

      setOpenQuestion(null);

    } else {

      setOpenQuestion(question);

    }

  };


  // =========================================
  // TOPIC OPEN
  // =========================================

  const openTopic = (topic) => {

    setSelectedTopic(topic);

  };


  // =========================================
  // TOPIC CLOSE
  // =========================================

  const closeTopic = () => {

    setSelectedTopic(null);

  };


  // =========================================
  // MAIN PAGE
  // =========================================

  return (

    <div
      className="
        min-h-screen
        bg-gray-50
      "
    >


      {/* =====================================
          HEADER
      ====================================== */}

      <section
        className="
          bg-white
          border-b
        "
      >

        <div
          className="
            max-w-4xl
            mx-auto
            px-4
            py-12
            text-center
          "
        >

          <h1
            className="
              text-3xl
              md:text-4xl
              font-bold
            "
          >
            Help Center
          </h1>


          <p
            className="
              mt-3
              text-gray-500
            "
          >
            How can we help you?
          </p>


          {/* =================================
              SEARCH BAR
          ================================== */}

          <div
            className="
              mt-7
              max-w-2xl
              mx-auto
              flex
              items-center
              gap-3
              border
              rounded-xl
              bg-white
              px-4
              py-3
              shadow-sm
              focus-within:ring-2
              focus-within:ring-red-100
            "
          >

            <Search
              size={21}
              className="text-gray-500"
            />


            <input
              type="text"
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
              onKeyDown={handleSearchKeyDown}
              placeholder="Search for help..."
              className="
                flex-1
                outline-none
                text-sm
              "
            />


            <button
              type="button"
              onClick={handleSearch}
              className="
                bg-red-500
                text-white
                px-4
                py-2
                rounded-lg
                text-sm
                font-semibold
                hover:bg-red-600
                transition
              "
            >
              Search
            </button>

          </div>


          {/* =================================
              SEARCH ANSWER

              THIS IS THE ONLY THING
              CONTROLLED BY SEARCH
          ================================== */}

          {searchResult && (

            <div
              className="
                mt-4
                max-w-2xl
                mx-auto
                bg-white
                border
                rounded-xl
                p-5
                text-left
                shadow-sm
              "
            >

              <div
                className="
                  flex
                  items-start
                  justify-between
                  gap-4
                "
              >

                <div>

                  <h3
                    className="
                      font-semibold
                      text-gray-800
                    "
                  >
                    {searchResult.question}
                  </h3>


                  <p
                    className="
                      mt-2
                      text-sm
                      text-gray-500
                      leading-6
                    "
                  >
                    {searchResult.answer}
                  </p>

                </div>


                <button
                  type="button"
                  onClick={() =>
                    setSearchResult(null)
                  }
                  className="
                    text-gray-400
                    hover:text-gray-700
                  "
                >

                  <X size={18} />

                </button>

              </div>

            </div>

          )}

        </div>

      </section>


      {/* =====================================
          MAIN
      ====================================== */}

      <main
        className="
          max-w-6xl
          mx-auto
          px-4
          md:px-8
          py-10
        "
      >


        {/* =================================
            BROWSE HELP TOPICS
        ================================== */}

        <section>

          <h2
            className="
              text-2xl
              font-bold
              mb-6
            "
          >
            Browse help topics
          </h2>


          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-5
            "
          >

            {helpTopics.map((topic) => {

              const Icon = topic.icon;

              return (

                <button
                  key={topic.title}
                  type="button"
                  onClick={() =>
                    openTopic(topic)
                  }
                  className="
                    text-left
                    bg-white
                    border
                    rounded-xl
                    p-6
                    hover:shadow-md
                    hover:border-gray-300
                    transition
                    cursor-pointer
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
                      mb-4
                    "
                  >

                    <Icon
                      size={25}
                      className="text-red-500"
                    />

                  </div>


                  <h3
                    className="
                      text-lg
                      font-semibold
                    "
                  >
                    {topic.title}
                  </h3>


                  <p
                    className="
                      mt-2
                      text-sm
                      text-gray-500
                      leading-6
                    "
                  >
                    {topic.description}
                  </p>

                </button>

              );

            })}

          </div>

        </section>


        {/* =================================
            COMMON QUESTIONS
            COMPLETELY INDEPENDENT
        ================================== */}

        <section className="mt-12">

          <h2
            className="
              text-2xl
              font-bold
              mb-6
            "
          >
            Common questions
          </h2>


          <div
            className="
              bg-white
              border
              rounded-xl
              overflow-hidden
            "
          >

            {commonQuestions.map((item) => {

              const isOpen =
                openQuestion ===
                item.question;


              return (

                <div
                  key={item.question}
                  className="
                    border-b
                    last:border-b-0
                  "
                >

                  <button
                    type="button"
                    onClick={() =>
                      handleQuestionClick(
                        item.question
                      )
                    }
                    className="
                      w-full
                      flex
                      items-center
                      justify-between
                      gap-4
                      px-5
                      py-5
                      text-left
                      hover:bg-gray-50
                      transition
                    "
                  >

                    <span
                      className="
                        text-sm
                        md:text-base
                        font-medium
                        text-gray-800
                      "
                    >
                      {item.question}
                    </span>


                    {isOpen ? (

                      <ChevronUp
                        size={20}
                        className="
                          text-gray-500
                          flex-shrink-0
                        "
                      />

                    ) : (

                      <ChevronDown
                        size={20}
                        className="
                          text-gray-500
                          flex-shrink-0
                        "
                      />

                    )}

                  </button>


                  {isOpen && (

                    <div
                      className="
                        px-5
                        pb-5
                        pr-12
                      "
                    >

                      <p
                        className="
                          text-sm
                          text-gray-500
                          leading-6
                        "
                      >
                        {item.answer}
                      </p>

                    </div>

                  )}

                </div>

              );

            })}

          </div>

        </section>


        {/* =================================
            CONTACT SUPPORT
        ================================== */}

        <section
          className="
            mt-12
            bg-white
            border
            rounded-2xl
            p-8
            text-center
          "
        >

          <Mail
            size={32}
            className="
              mx-auto
              mb-4
            "
          />


          <h2
            className="
              text-2xl
              font-bold
            "
          >
            Still need help?
          </h2>


          <p
            className="
              mt-2
              text-gray-500
            "
          >
            Our support team is here to help.
          </p>


          <button
            type="button"
            className="
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
            Contact Support
          </button>

        </section>

      </main>


      {/* =====================================
          TOPIC HELP SCREEN
      ====================================== */}

      {selectedTopic && (

        <div
          className="
            fixed
            inset-0
            z-50
            bg-black/40
            flex
            items-center
            justify-center
            px-4
          "
          onClick={closeTopic}
        >

          <div
            className="
              w-full
              max-w-lg
              bg-white
              rounded-2xl
              shadow-xl
              p-6
            "
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            {/* HEADER */}

            <div
              className="
                flex
                items-center
                justify-between
                gap-4
              "
            >

              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >

                <div
                  className="
                    w-11
                    h-11
                    rounded-full
                    bg-red-50
                    flex
                    items-center
                    justify-center
                  "
                >

                  <span
                    className="
                      text-red-500
                      font-bold
                    "
                  >
                    ?
                  </span>

                </div>


                <h2
                  className="
                    text-xl
                    font-bold
                  "
                >
                  {selectedTopic.title}
                </h2>

              </div>


              <button
                type="button"
                onClick={closeTopic}
                className="
                  p-2
                  rounded-full
                  hover:bg-gray-100
                  transition
                "
              >

                <X size={20} />

              </button>

            </div>


            {/* ANSWER */}

            <div
              className="
                mt-6
                bg-gray-50
                rounded-xl
                p-5
              "
            >

              <p
                className="
                  text-sm
                  text-gray-600
                  leading-6
                "
              >
                {selectedTopic.answer}
              </p>

            </div>


            {/* CLOSE */}

            <button
              type="button"
              onClick={closeTopic}
              className="
                mt-5
                w-full
                bg-red-500
                text-white
                py-3
                rounded-lg
                font-semibold
                hover:bg-red-600
                transition
              "
            >
              Got it
            </button>

          </div>

        </div>

      )}

    </div>

  );
}

export default HelpCenter;