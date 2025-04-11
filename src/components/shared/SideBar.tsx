import { categories } from "@Constants/index";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";


type sidebarPropsType = {
  category? : string;
}
export default function SideBar({category} : sidebarPropsType ) {

  //local state to manage the dropdown for each category & filters
  // to track which sections are open
  const [openCategory , setOpenCategory] = useState(true);
  const [openFilter , setOpenFilter] = useState(false);
  
  // to track the current URL for active link highlighting
  const location = useLocation();

  //toggle the dropdown for each category & filters
  const toggleCategory = () => {
    setOpenCategory(!openCategory);
  }

  const toggleFilter = () => {
    setOpenFilter(!openFilter);
  }

  return (
    <div className="w-[200px] h-full border-2 max-md:ml-3">
      <div>
        <h2>Browse By</h2>
        <div className="w-full h-full">
          <button onClick={toggleCategory} className="flex justify-between cursor-pointer items-center w-full px-2">
            <span>Categories</span>
            <span></span>
          </button>
          {categories.map(({path , label}) => (
            <Link key={path} to={path} className="block p-2 hover:bg-gray-200">
              {label}
            </Link>
          ))}
        </div>

        <div>
          <button onClick={toggleFilter}>
            <span>Filters</span>
            <span></span>
          </button>
        </div>
      </div>

    </div>
  );
}
