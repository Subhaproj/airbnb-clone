import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { SearchProvider } from "./context/SearchContext";
import { CategoryProvider } from "./context/CategoryContext";
import { FavoriteProvider } from "./context/FavoriteContext";
import { AuthProvider } from "./context/AuthContext";
import { BookingProvider } from "./context/BookingContext";
import { TripProvider } from "./context/TripContext";
import { WishlistProvider } from "./context/WishlistContext";


ReactDOM.createRoot(
  document.getElementById("root")
).render(

<AuthProvider>
  <SearchProvider>
    <CategoryProvider>
      <FavoriteProvider>
        <TripProvider>
          <WishlistProvider>
            <BrowserRouter basename="/airbnb-clone">
              <App />
            </BrowserRouter>
            
          </WishlistProvider>
        </TripProvider>
      </FavoriteProvider>
    </CategoryProvider>
  </SearchProvider>
</AuthProvider>

);
