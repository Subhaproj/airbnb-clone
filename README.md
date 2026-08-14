# Airbnb Clone

A responsive Airbnb-inspired accommodation booking web application built with **React, Vite, Tailwind CSS, ShadCN UI, and React Router**.

The project recreates the main guest-side Airbnb experience, including property discovery, search, categories, favorites, wishlists, authentication, trip bookings, guest selection, pricing calculations, and listing details.

---

## 📌 Project Overview

This project is a front-end Airbnb clone created for learning and portfolio purposes.

Users can:

- Browse available stays
- Search properties by place, title, host, or category
- Filter properties using categories
- View detailed property information
- Select the number of guests
- Add properties to Favorites
- Create and manage Wishlists
- Log in and create an account
- Book a property
- View booked Trips
- Add a message while booking
- Calculate stay price, extra guest charges, service fee, and tax
- Navigate through a responsive interface
- Use desktop and mobile-friendly search layouts

---

## ✨ Features

### 🏠 Home Page

- Airbnb-inspired landing page
- Animated custom logo
- Responsive navigation bar
- Search interface
- Category navigation
- Property discovery

### 🔎 Search

The search system allows users to search using:

- Location
- Property title
- Host name
- Property category

Search results are displayed on the Explore page.

Example searches:

```text
Bangalore
Goa
Villa
Cabins
Rahul
Beach
```

Search is case-insensitive.

### 🧭 Categories

Available categories include:

- All
- Beach
- Amazing Views
- Cabins
- Trending
- Countryside
- Castles
- Homes
- City
- Villa

Categories are connected to the property data and filter the Explore results.

### 👥 Guest Selection

The guest selector supports:

- Adults
- Children
- Infants
- Pets

Adults and children are counted as actual guests for property searching and booking.

The minimum number of adults is 1.

### ⭐ Favorites

Favorites are available only to logged-in users.

When a logged-out user selects the Favorite button, they receive a login message.

Logged-in users can:

- Add a property to Favorites
- Remove a property from Favorites
- View their Favorites page

Toast messages are displayed when a favorite is added or removed.

### ❤️ Wishlists

Users can create and manage wishlists.

Features include:

- Create a wishlist
- Add properties to a wishlist
- View saved properties
- Remove properties
- Confirmation before removing a property
- Login protection for wishlist actions

### 🔐 Authentication

The project includes:

- Login
- Signup
- Logout
- User-specific Favorites
- User-specific Wishlists
- Password show/hide controls
- Form validation
- Toast notifications

Authentication is implemented on the front end using local storage.

### 🏡 Listing Details

Each property has a dedicated listing details page.

The page can display:

- Property images
- Location
- Title
- Rating
- Price per night
- Number of guests
- Bedrooms
- Beds
- Host
- Categories
- Favorite option
- Wishlist option
- Booking section

### 📅 Booking / Trips

Logged-in users can reserve properties.

Booking includes:

- Check-in date
- Check-out date
- Adults
- Children
- Infants
- Pets
- Extra guests
- Guest message

Successful bookings are saved and displayed in the Trips page.

### 💰 Booking Price Calculation

The booking system calculates:

```text
Room Total
+ Extra Guest Fee
+ Service Fee
+ Tax
= Total Price
```

Current pricing rules:

- Extra guest fee: **₹700 per extra guest per night**
- Service fee: **10%**
- Tax: **5%**

The property has a guest capacity. If the selected number of actual guests exceeds that capacity, the additional guests are charged at ₹700 per guest per night.

The booking system currently allows up to **2 extra guests** above the property's stated capacity.

### 💬 Guest Message

Guests can leave a message while making a booking.

The message is stored with the trip information.

### 🆘 Help Center

A Help Center page is included for user assistance.

### 🌐 Language & Currency Menu

The navigation bar includes a Language & Currency interface.

Current displayed options:

- Language: English
- Currency: ₹ INR

---

## 🛠️ Technologies Used

### Frontend

- React
- JavaScript
- HTML
- CSS
- Tailwind CSS

### UI

- ShadCN UI
- Lucide React
- Sonner Toast

### Routing

- React Router DOM

### Build Tool

- Vite

### Storage

- Browser Local Storage

### Icons

- Lucide React

---

## 📂 Project Structure

```text
airbnb-clone/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── AnimatedLogo.jsx
│   │   ├── CategoryBar.jsx
│   │   ├── Footer.jsx
│   │   ├── GuestSelector.jsx
│   │   ├── Navbar.jsx
│   │   ├── PropertyCard.jsx
│   │   └── WishlistCard.jsx
│   │
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   ├── CategoryContext.jsx
│   │   ├── FavoriteContext.jsx
│   │   ├── SearchContext.jsx
│   │   ├── TripContext.jsx
│   │   └── WishlistContext.jsx
│   │
│   ├── data/
│   │   └── properties.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Explore.jsx
│   │   ├── ListingDetails.jsx
│   │   ├── Favorites.jsx
│   │   ├── Wishlists.jsx
│   │   ├── Trips.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   └── HelpCenter.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── public/
├── package.json
├── vite.config.js
├── jsconfig.json
└── README.md
```

---

## 🧩 Context Architecture

The application uses React Context API to share state across components.

### SearchContext

Manages:

- Search term
- Guest count

### CategoryContext

Manages:

- Selected category

### AuthContext

Manages:

- Current user
- Login
- Signup
- Logout

### FavoriteContext

Manages:

- Favorites
- Add/remove favorite
- User-specific favorites

### WishlistContext

Manages:

- Wishlists
- Creating wishlists
- Adding properties
- Removing properties

### TripContext

Manages:

- Booked trips
- Booking information
- Trip data

---

## 🗃️ Property Data

Property information is currently stored locally in:

```text
src/data/properties.js
```

Each property contains information such as:

```javascript
{
  id,
  image,
  images,
  location,
  title,
  rating,
  price,
  guests,
  bedrooms,
  beds,
  host,
  categories
}
```

The current sample data includes properties from locations such as:

- Bangalore
- Goa
- Coorg
- Kerala
- Nilgiri
- Kodaikanal
- Ooty
- Hyderabad

---

## 🚀 Installation

### 1. Clone the repository

```bash
git clone <your-github-repository-url>
```

### 2. Open the project

```bash
cd airbnb-clone
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite will provide a local development URL, normally similar to:

```text
http://localhost:5173/
```

---

## 📦 Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 🌍 Deployment

The project is configured for deployment using **GitHub Pages**.

The deployed project uses:

```text
BrowserRouter
```

with the project basename configured for the GitHub Pages repository.

Live project:

```text
https://subhaproj.github.io/airbnb-clone/
```

---

## 💾 Data Storage

This project currently uses **localStorage** instead of a backend database.

Data such as authentication information, favorites, wishlists, and trips can therefore persist in the browser.

This is a front-end learning project and does not currently use:

- Node.js backend
- Express
- MongoDB
- MySQL database
- Firebase authentication
- Payment gateway
- Real booking API

---

## 🔒 Authentication Behavior

The current authentication system is intended for demonstration purposes.

Users can:

```text
Sign up
   ↓
Login
   ↓
Use protected features
   ↓
Logout
```

Protected features include:

- Favorites
- Wishlists
- Booking

A logged-out user attempting to use protected functionality receives a notification asking them to log in.

---

## 🧮 Booking Calculation Example

Suppose:

```text
Room price = ₹5,000/night
Stay = 2 nights
Property capacity = 8 guests
Selected guests = 10
```

Then:

```text
Room total
₹5,000 × 2
= ₹10,000
```

Extra guests:

```text
10 - 8 = 2 extra guests
```

Extra guest fee:

```text
2 × ₹700 × 2 nights
= ₹2,800
```

Stay subtotal:

```text
₹10,000 + ₹2,800
= ₹12,800
```

Service fee:

```text
10% of ₹12,800
= ₹1,280
```

Tax:

```text
5% of ₹12,800
= ₹640
```

Final total:

```text
₹12,800 + ₹1,280 + ₹640
= ₹14,720
```

---

## 📱 Responsive Design

The application is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile

Responsive features include:

- Desktop search bar
- Mobile search bar
- Responsive property grid
- Mobile category scrolling
- Responsive navigation
- Responsive authentication pages
- Responsive booking interface

---

## 🎨 UI Design

The project uses an Airbnb-inspired design approach with:

- Rounded cards
- Rounded buttons
- Clean white backgrounds
- Responsive layouts
- Property image cards
- Red accent buttons
- Hover animations
- Toast notifications
- Modal dialogs
- Custom animated logo

---

## 🧑‍💻 Development Concepts Demonstrated

This project demonstrates practical React concepts including:

- Functional components
- React Hooks
- `useState`
- `useEffect`
- `useContext`
- `useRef`
- React Context API
- React Router
- Dynamic routes
- Conditional rendering
- Array filtering
- Array mapping
- Form handling
- Local storage
- Reusable components
- Responsive Tailwind CSS
- UI state management
- Authentication state
- Protected user actions
- Booking calculations

---

## 🔮 Future Improvements

Possible future development areas include:

- Real backend API
- Database integration
- Secure authentication
- Real user accounts
- Host dashboard
- Property listing creation
- Real-time availability
- Double-booking prevention with a backend
- Payment gateway
- Booking cancellation
- Reviews and ratings
- Advanced search filters
- Date availability filtering
- Map integration
- Real language selection
- Real currency conversion
- Email notifications

---

## ⚠️ Disclaimer

This project is an **Airbnb-inspired educational clone** created for learning and portfolio purposes.

It is not affiliated with, sponsored by, or officially connected to Airbnb.

Property images are sourced from external image services and are used as sample content for the project.

---

## 👩‍💻 Author

**Subhashree V**

BCA Graduate | Aspiring Software Developer & UI/UX Designer

### Skills demonstrated in this project

- React
- JavaScript
- HTML
- CSS
- Tailwind CSS
- React Router
- Context API
- Responsive UI Design
- Local Storage
- UI/UX Development

---

## ⭐ Project Highlights

The project currently combines:

```text
React
   +
Tailwind CSS
   +
ShadCN UI
   +
React Router
   +
Context API
   +
Local Storage
   +
Responsive Design
   +
Booking System
   +
Favorites
   +
Wishlists
   +
Authentication
```

Built as a practical front-end project to demonstrate modern React development and UI/UX implementation.
