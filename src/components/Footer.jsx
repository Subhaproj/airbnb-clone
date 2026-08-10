
import {
  Globe,
  Heart,
  Home,
  HelpCircle,
} from "lucide-react";

function Footer() {

  return (

    <footer className="border-t bg-gray-50 mt-12">

      {/* Main Footer */}

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

          {/* Support */}

          <div>

            <h3 className="font-semibold mb-4">
              Support
            </h3>

            <ul className="space-y-3 text-sm text-gray-600">

              <li>
                Help Center
              </li>

              <li>
                AirCover
              </li>

              <li>
                Anti-discrimination
              </li>

              <li>
                Disability support
              </li>

              <li>
                Cancellation options
              </li>

            </ul>

          </div>


          {/* Hosting */}

          <div>

            <h3 className="font-semibold mb-4">
              Hosting
            </h3>

            <ul className="space-y-3 text-sm text-gray-600">

              <li>
                Airbnb your home
              </li>

              <li>
                AirCover for Hosts
              </li>

              <li>
                Hosting resources
              </li>

              <li>
                Community forum
              </li>

              <li>
                Hosting responsibly
              </li>

            </ul>

          </div>


          {/* Company */}

          <div>

            <h3 className="font-semibold mb-4">
              Company
            </h3>

            <ul className="space-y-3 text-sm text-gray-600">

              <li>
                About
              </li>

              <li>
                Newsroom
              </li>

              <li>
                Careers
              </li>

              <li>
                Investors
              </li>

              <li>
                Gift cards
              </li>

            </ul>

          </div>


          {/* Explore */}

          <div>

            <h3 className="font-semibold mb-4">
              Explore
            </h3>

            <ul className="space-y-3 text-sm text-gray-600">

              <li className="flex items-center gap-2">
                <Home size={16} />
                Popular destinations
              </li>

              <li>
                Amazing stays
              </li>

              <li>
                Beach houses
              </li>

              <li>
                Cabins
              </li>

              <li>
                Unique homes
              </li>

            </ul>

          </div>

        </div>

      </div>


      {/* Bottom Footer */}

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

          {/* Copyright */}

          <div className="text-sm text-gray-600">

            © 2026 Airbnb · Privacy · Terms · Sitemap

          </div>


          {/* Right Side */}

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
              className="
                flex
                items-center
                gap-2
                hover:text-black
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
              className="hover:text-black"
            >
              ₹ INR
            </button>


            {/* Help */}

            <button
              type="button"
              aria-label="Help"
              className="
                flex
                items-center
                gap-2
                hover:text-black
              "
            >

              <HelpCircle size={17} />

              Help

            </button>


            {/* Favorite */}

            <button
              type="button"
              aria-label="Favorites"
              className="
                hover:scale-110
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

