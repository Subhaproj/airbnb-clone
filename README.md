# 🏡 Airbnb Clone


A responsive Airbnb-inspired accommodation booking web application built with **React, Vite, Tailwind CSS, ShadCN UI, and React Router**.


This project recreates a guest-side accommodation booking experience with property discovery, search, categories, guest selection, favorites, wishlists, authentication, booking, pricing calculations, trips, and responsive UI.


---


## 📌 Project Overview


This is a front-end Airbnb-inspired clone developed for **learning, practice, and portfolio purposes**.


Users can:


- Browse available properties
- Search for stays
- Filter properties by category
- Filter properties according to guest capacity
- View detailed property information
- Select guests
- Add properties to Favorites
- Create and manage Wishlists
- Sign up and log in
- Log out
- Book properties
- View booked Trips
- Add a message while booking
- Calculate booking prices
- Use responsive desktop, tablet, and mobile layouts
- Access a Help Center
- Use a language and currency menu


---


# ✨ Features


## 🏠 Home Page


- Airbnb-inspired landing page
- Responsive navigation bar
- Animated custom logo
- Search functionality
- Category navigation
- Property discovery
- Responsive design


---


## 🔎 Search


Users can search properties using:


- Location
- Property title
- Host name
- Category


Search is case-insensitive.


Example searches:


```text
Bangalore
Goa
Villa
Cabins
Beach
Rahul
```

Search results are displayed on the Explore page.

🧭 Categories

The application supports property categories such as:

All
Beach
Amazing Views
Cabins
Trending
Countryside
Castles
Homes
City
Villa

Categories are connected to the property data and filter the Explore page.

👥 Guest Selection

The guest selector supports:

Adults
Children
Infants
Pets

Adults and children are counted as actual guests when filtering properties and making bookings.

The minimum number of adults is 1.

The selected guest count is used by the Explore page to display properties that can accommodate the selected number of guests.

Guest selection is reset when navigating to another page.

⭐ Favorites

Favorites are available only to logged-in users.

If a logged-out user clicks the Favorite button:
```text
Login required
```
is displayed and the property is not added.

Logged-in users can:

Add properties to Favorites
Remove properties from Favorites
View their Favorites page
Receive toast notifications when favorites are added or removed

Favorites are stored separately for users using the user's email.

❤️ Wishlists

Users can create and manage Wishlists.

Features include:

Create a wishlist
Add properties to a wishlist
View saved properties
Remove properties
Delete wishlists
Confirmation before deleting/removing
Login protection for wishlist actions
Toast notifications

🔐 Authentication

The project includes:

Sign up
Login
Logout
User-specific Favorites
User-specific Wishlists
Protected booking
Password show/hide functionality
Form validation
Toast notifications

Authentication is implemented on the front end using localStorage.

Authentication flow
```text
Sign Up
   ↓
Account Created
   ↓
Login
   ↓
Access Protected Features
   ↓
Logout
```
Protected features include:

Favorites
Wishlists
Booking

🏡 Listing Details

Each property has a dedicated listing details page.

The listing page can display:

Property images
Location
Title
Rating
Price per night
Guest capacity
Bedrooms
Beds
Host
Categories
Favorite button
Wishlist button
Booking section

Dynamic listing routes are handled using React Router.

Example:
```text
/listing/1
/listing/2
/listing/3
```
📅 Booking / Trips

Logged-in users can reserve properties.

Booking includes:

Check-in date
Check-out date
Adults
Children
Infants
Pets
Extra guests
Guest message

After a successful booking, the booking information is stored and displayed on the Trips page.

💰 Booking Price Calculation

The booking system calculates:
```text
Room Total
+
Extra Guest Fee
+
Service Fee
+
Tax
=
Total Price
```
Current pricing rules
```text
| Item                 |                  Price |
| -------------------- | ---------------------: |
| Extra guest          | ₹700 per guest / night |
| Service fee          |                    10% |
| Tax                  |                     5% |
| Maximum extra guests |                      2 |

```
Extra guest charges are applied when the number of actual guests exceeds the property's stated guest capacity.

🧮 Booking Calculation Example

Suppose:
```text
Room price = ₹5,000/night
Stay = 2 nights
Property capacity = 8 guests
Selected guests = 10
```
Room total
```text
₹5,000 × 2
= ₹10,000
```
Extra guests
```text
10 - 8
= 2 extra guests
```
Extra guest fee
```text
2 × ₹700 × 2 nights
= ₹2,800
```
Stay subtotal
```text
₹10,000 + ₹2,800
= ₹12,800
```
Service fee
```text
10% of ₹12,800
= ₹1,280
```
Tax
```text
5% of ₹12,800
= ₹640
```
Final total
```text
₹12,800 + ₹1,280 + ₹640
= ₹14,720
```
💬 Guest Message

Guests can leave a message during the booking process.

The message is stored together with the trip information.

Example:
```text
Hi, we will arrive around 6 PM.
```
🆘 Help Center

The application includes a Help Center page for users.

The Help Center is accessible through the profile menu.

🌐 Language & Currency

The navigation bar includes a Language & Currency menu.

Currently displayed:
```text
Language: English
Currency: ₹ INR
```
The interface is prepared for future language and currency functionality.

🛠️ Technologies Used
Frontend
React
JavaScript
HTML
CSS
Styling
Tailwind CSS
ShadCN UI
Routing
React Router DOM
Icons
Lucide React
Notifications
Sonner
Build Tool
Vite
State Management
React Context API
Storage
Browser localStorage
📂 Project Structure
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
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── Trips.jsx
│   │   ├── Wishlists.jsx
│   │   └── HelpCenter.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
├── jsconfig.json
├── index.html
└── README.md
🧩 Context Architecture

The project uses React Context API for shared application state.

SearchContext

Manages:

Search term
Guest count
CategoryContext

Manages:

Selected category
AuthContext

Manages:

Current user
Signup
Login
Logout
FavoriteContext

Manages:

Favorites
Add favorite
Remove favorite
User-specific favorites
WishlistContext

Manages:

Wishlists
Creating wishlists
Adding properties
Removing properties
Deleting wishlists
TripContext

Manages:

Booked trips
Booking information
Trip data
🗃️ Property Data

Property information is currently stored locally in:

src/data/properties.js

A property contains information such as:

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

Sample property locations include:

Bangalore
Goa
Coorg
Kerala
Nilgiri
Kodaikanal
Ooty
Hyderabad
🚀 Installation
1. Clone the repository
git clone <your-github-repository-url>
2. Open the project
cd airbnb-clone
3. Install dependencies
npm install
4. Start the development server
npm run dev

The application normally runs at:

http://localhost:5173/
📦 Production Build

Create a production build:

npm run build

Preview the production build:

npm run preview
🌍 Deployment

The project is configured for GitHub Pages deployment.

The application uses:

BrowserRouter

with:

basename={import.meta.env.BASE_URL}

This allows the application to work correctly when deployed under the repository path.

Live project:

https://subhaproj.github.io/airbnb-clone/
💾 Data Storage

This project currently uses localStorage instead of a backend database.

The browser can store:

User accounts
Logged-in user
Favorites
Wishlists
Trips

This is a front-end learning project.

The project currently does not use:

Node.js backend
Express
MongoDB
MySQL
Firebase Authentication
Real booking API
Payment gateway
🔒 Protected User Actions

The application protects important user actions.

Logged-out user

A logged-out user cannot:

Add Favorites
Manage Wishlists
Make a booking

Instead, the user is prompted to log in.

Logged-in user

A logged-in user can:

Favorite
Wishlist
Book
View Trips
Logout
📱 Responsive Design

The application supports:

Desktop
Laptop
Tablet
Mobile

Responsive features include:

Desktop search
Mobile search
Responsive property grid
Horizontal category scrolling
Responsive navigation
Responsive authentication pages
Responsive listing details
Responsive booking interface
🎨 UI Design

The project uses an Airbnb-inspired modern UI.

Design features include:

Rounded cards
Rounded buttons
Clean layouts
White backgrounds
Red accent buttons
Property image cards
Hover effects
Toast notifications
Dropdown menus
Responsive layouts
Custom animated logo
Modern transparent authentication pages
♿ Accessibility

Accessibility improvements include:

Semantic HTML elements
Form labels and placeholders
aria-label attributes for important icon buttons
Keyboard-friendly forms
Button elements for interactive actions
Proper input types
Focus-friendly navigation

Examples:

aria-label="Search"
aria-label="Open profile menu"
aria-label="Choose language and currency"
⚡ Frontend Best Practices

The project follows several frontend development best practices.

1. Error Handling

The application uses validation and fallback UI for user actions.

Examples include:

Invalid login messages
Signup validation
Booking validation
Empty search results
Protected action messages
2. Small and Focused Components

The UI is divided into reusable components such as:

Navbar
CategoryBar
PropertyCard
GuestSelector
WishlistCard
Footer
AnimatedLogo

Each component has a focused responsibility.

3. State Management

React Context API is used for shared state.

Examples:

AuthContext
SearchContext
CategoryContext
FavoriteContext
WishlistContext
TripContext

Local state is used for component-specific UI such as:

Dropdowns
Menus
Guest selector
Password visibility
4. Performance

The project avoids unnecessary global state and keeps state close to the components that need it.

Filtering is performed from the property dataset based on:

Category
Search
Guest capacity

Future optimization can include:

React.memo
useMemo
useCallback
Lazy loading
Route-level code splitting
5. Consistent Styling

Tailwind CSS is used throughout the application.

The project uses consistent:

Spacing
Rounded corners
Typography
Responsive breakpoints
Button styles
Colors
6. Component Lifecycle

useEffect cleanup is used where event listeners are registered.

For example, the Navbar removes the document click listener when the component is unmounted.

7. Accessibility

The application includes:

Semantic elements
Accessible buttons
ARIA labels
Keyboard-friendly forms
Appropriate input types
8. Routing

React Router is used for SPA navigation.

Current routes include:

/
/explore
/listing/:id
/favorites
/login
/signup
/trips
/wishlists
/help
9. Asset Loading

Property images are loaded from the property data and displayed through reusable property cards.

Future improvements can include:

Lazy loading images
Lazy loading routes
Code splitting
Optimized image formats
10. Testing & Debugging

Development and debugging are performed using:

Browser Developer Tools
VS Code
Vite development server
React error messages
Console debugging
GitHub Actions build checks

Production builds are tested using:

npm run build
🧑‍💻 Development Concepts Demonstrated

This project demonstrates:

React functional components
React Hooks
useState
useEffect
useContext
useRef
React Context API
React Router
Dynamic routes
Conditional rendering
Array filtering
Array mapping
Form handling
Local storage
Reusable components
Responsive Tailwind CSS
Authentication state
Protected actions
Booking calculations
Search functionality
Category filtering
Guest filtering
Toast notifications
🔮 Future Improvements

Possible future improvements include:

Real backend API
Database integration
Secure authentication
Real user accounts
Host dashboard
Host property creation
Real-time availability
Backend double-booking prevention
Payment gateway
Booking cancellation
Reviews and ratings
Advanced filters
Date availability filtering
Map integration
Real language selection
Real currency conversion
Email notifications
Automated testing
React component testing
Route lazy loading
Image lazy loading
Error Boundary implementation
Better loading states
⚠️ Current Limitations

This project is currently a front-end application.

Therefore:

Authentication is not production-secure
User data is stored in localStorage
Booking data is stored locally
There is no real payment processing
There is no real-time booking database
Multiple users cannot share synchronized booking data
Property availability is not controlled by a backend
Images are sample/external images
The language and currency menu is currently UI-only
🔐 Security Note

This project is intended for educational purposes.

Passwords and user information are stored using browser localStorage and should not be considered secure authentication for a production application.

A production version should use:

Backend Authentication
        ↓
Secure Password Hashing
        ↓
Database
        ↓
Session / Token Authentication
🧪 Development Commands

Install dependencies:

npm install

Start development server:

npm run dev

Build production version:

npm run build

Preview production build:

npm run preview
🌐 Live Demo
https://subhaproj.github.io/airbnb-clone/
👩‍💻 Author
Subhashree V

BCA Graduate | Aspiring Software Developer & UI/UX Designer

This project demonstrates practical experience with:

React
JavaScript
HTML
CSS
Tailwind CSS
ShadCN UI
React Router
Context API
Local Storage
Responsive UI/UX
Frontend application architecture
⭐ Project Highlights
React
   +
Vite
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
Authentication
   +
Search
   +
Categories
   +
Guest Filtering
   +
Favorites
   +
Wishlists
   +
Booking
   +
Trips
   +
Pricing Calculation
   +
Toast Notifications

Built as a practical front-end project to demonstrate modern React development, state management, responsive UI/UX implementation, and real-world application workflows.

⚠️ Disclaimer

This is an Airbnb-inspired educational clone created for learning and portfolio purposes.

It is not affiliated with, sponsored by, or officially connected to Airbnb.

Property information and images are used as sample content for demonstration purposes.
