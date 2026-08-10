
import { useState } from "react";
import {
  Search,
  Home,
  Heart,
  Star,
  CalendarDays,
  User,
  Mail
} from "lucide-react";

function HelpCenter() {

  const [searchTerm, setSearchTerm] =
    useState("");


  const helpTopics = [
    {
      icon: Home,
      title: "Getting Started",
      description:
        "Learn how to explore stays and find the right property."
    },
    {
      icon: CalendarDays,
      title: "Bookings & Trips",
      description:
        "Learn about bookings, reservations, cancellations and trips."
    },
    {
      icon: Heart,
      title: "Favorites & Wishlists",
      description:
        "Save properties to Favorites and organize them into Wishlists."
    },
    {
      icon: User,
      title: "Account",
      description:
        "Get help with your account, login and signup."
    }
  ];


  const commonQuestions = [
    "How do I book a stay?",
    "How do I add a property to Favorites?",
    "How do I create a Wishlist?",
    "How can I view my trips?",
    "How do I cancel a booking?",
    "How do I remove a property from Favorites?"
  ];


  const filteredQuestions =
    commonQuestions.filter(
      (question) =>
        question
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          )
    );


  return (

    <div className="min-h-screen bg-gray-50">

      {/* Header */}

      <section className="bg-white border-b">

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


          {/* Search */}

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
                setSearchTerm(
                  e.target.value
                )
              }
              placeholder="Search for help..."
              className="
                flex-1
                outline-none
                text-sm
              "
              aria-label="Search help"
            />

          </div>

        </div>

      </section>


      {/* Main Content */}

      <main
        className="
          max-w-6xl
          mx-auto
          px-4
          md:px-8
          py-10
        "
      >

        {/* Help Topics */}

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

          {helpTopics.map(
            (topic) => {

              const Icon =
                topic.icon;

              return (

                <div
                  key={topic.title}
                  className="
                    bg-white
                    border
                    rounded-xl
                    p-6
                    hover:shadow-md
                    transition
                    cursor-pointer
                  "
                >

                  <Icon
                    size={28}
                    className="mb-4"
                  />

                  <h3
                    className="
                      font-semibold
                      text-lg
                    "
                  >
                    {topic.title}
                  </h3>

                  <p
                    className="
                      text-sm
                      text-gray-500
                      mt-2
                    "
                  >
                    {topic.description}
                  </p>

                </div>

              );

            }
          )}

        </div>


        {/* Common Questions */}

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
              divide-y
            "
          >

            {filteredQuestions.length >
            0 ? (

              filteredQuestions.map(
                (question) => (

                  <button
                    key={question}
                    type="button"
                    className="
                      w-full
                      text-left
                      px-5
                      py-4
                      hover:bg-gray-50
                      transition
                      text-sm
                      font-medium
                    "
                  >
                    {question}
                  </button>

                )
              )

            ) : (

              <p
                className="
                  px-5
                  py-6
                  text-gray-500
                "
              >
                No help articles found.
              </p>

            )}

          </div>

        </section>


        {/* Contact Support */}

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
              text-gray-500
              mt-2
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

    </div>

  );
}

export default HelpCenter;
