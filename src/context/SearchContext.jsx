import { createContext, useState } from "react";


export const SearchContext = createContext();


export function SearchProvider({children}){

  const [searchTerm,setSearchTerm] = useState("");

  // Number of guests selected in the search bar 
   const [guestCount, setGuestCount] = useState(1);


  return (

    <SearchContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        guestCount, setGuestCount,
      }}
    >

      {children}

    </SearchContext.Provider>

  );

}