import { useContext } from "react";
import { FavoriteContext } from "../context/FavoriteContext";
import PropertyCard from "../components/PropertyCard";


function Favorites(){
    

  const {
    favorites
  } = useContext(FavoriteContext);

  



  return (

    <div className="px-6 py-8">


      <h1 className="text-3xl font-bold mb-8">
        Your Favorites
      </h1>



      {
        favorites.length === 0 ?

        (

          <p className="text-gray-500 text-lg">
            No favorites yet.
          </p>

        )

        :

        (

          <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-6
          "
          >

          {
            favorites.map((property)=>(

              <PropertyCard

              key={property.id}

              property={property}

              />

            ))
          }

          </div>

        )

      }


    </div>

  );

}


export default Favorites;