import {
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import ListingDetails from "./pages/ListingDetails";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Trips from "./pages/Trips";
import Wishlists from "./pages/Wishlists";
import HelpCenter from "./pages/HelpCenter";

function App() {
  return (
    <>
      <Navbar />

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

      <Footer />
    </>
  );
}

export default App;
