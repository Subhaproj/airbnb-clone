import {
  Routes,
  Route
} from "react-router-dom";

import {
  lazy,
  Suspense
} from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const Explore = lazy(() => import("./pages/Explore"));
const ListingDetails = lazy(() => import("./pages/ListingDetails"));
const Favorites = lazy(() => import("./pages/Favorites"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Trips = lazy(() => import("./pages/Trips"));
const Wishlists = lazy(() => import("./pages/Wishlists"));
const HelpCenter = lazy(() => import("./pages/HelpCenter"));

function App() {
  return (
    <>
      <Navbar />

      <Suspense
        fallback={
          <div className="min-h-[60vh] flex items-center justify-center">
            <p className="text-gray-500">
              Loading...
            </p>
          </div>
        }
      >
        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/explore"
            element={<Explore />}
          />

          <Route
            path="/listing/:id"
            element={<ListingDetails />}
          />

          <Route
            path="/favorites"
            element={<Favorites />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/signup"
            element={<Signup />}
          />

          <Route
            path="/trips"
            element={<Trips />}
          />

          <Route
            path="/wishlists"
            element={<Wishlists />}
          />

          <Route
            path="/help"
            element={<HelpCenter />}
          />

        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}

export default App;