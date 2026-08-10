import {
  Waves,
  Home,
  TreePalm,
  Mountain,
  Castle,
  TentTree,
  Building2,
  Flame
} from "lucide-react";

import { useContext } from "react";
import { CategoryContext } from "../context/CategoryContext";


const categories = [
  {
    name: "All",
    icon: Home
  },
  {
    name: "Beach",
    icon: Waves
  },
  {
    name: "Amazing Views",
    icon: Mountain
  },
  {
    name: "Cabins",
    icon: TentTree
  },
  {
    name: "Trending",
    icon: Flame
  },
  {
    name: "Countryside",
    icon: TreePalm
  },
  {
    name: "Castles",
    icon: Castle
  },
  {
    name: "Homes",
    icon: Home
  },
  {
    name: "City",
    icon: Building2
  }
];

function CategoryBar() {

  const {
    selectedCategory,
    setSelectedCategory
  } = useContext(CategoryContext);


  return (




    <div
      className="
        flex
        gap-8
        overflow-x-auto
        px-4
        py-3
        md:justify-center
        md:overflow-visible
      "
    >

      {categories.map((category, index) => {

        const Icon = category.icon;


        // Check which category is currently selected

        const isSelected =
          category.name === "All"
            ? selectedCategory === ""
            : selectedCategory === category.name;


        return (

          <button
            key={index}
            type="button"

            onClick={() => {

              if (category.name === "All") {

                setSelectedCategory("");

              } else {

                setSelectedCategory(category.name);

              }

            }}

            className={`
              group
              flex
              flex-col
              items-center
              gap-2
              min-w-fit
              cursor-pointer
              pb-3
              border-b-2
              transition-all
              duration-200

              ${
                isSelected
                  ? "text-blue-500 border-blue-500"
                  : "text-gray-600 border-transparent hover:text-black hover:border-black hover:-translate-y-1"
              }
            `}
          >

            <Icon
              size={24}
              className="
                transition-transform
                duration-200
                group-hover:scale-110
              "
            />

            <span className="text-sm font-medium">
              {category.name}
            </span>

          </button>

        );

      })}

    </div>

  );

}

export default CategoryBar;