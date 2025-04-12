import { categories } from "@Constants/index";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { DownArrow } from "@assets/icons/svg/index";

type sidebarPropsType = {
  category? : string;
}


export default function SideBar({category} : sidebarPropsType ) {

  //local state to manage the dropdown for each category & filters
  // to track which sections are open
  const [openCategory , setOpenCategory] = useState(true);

  const [openFilter , setOpenFilter] = useState(false);


  return (
    <div className="w-[200px] h-full  max-md:ml-3 ">
      <div>
        {/* Categories */}
        <div className="w-full h-full bg-gray-100">
          <button onClick={()=> setOpenCategory(!openCategory)} className="flex justify-between cursor-pointer items-center w-full h-11">
            <span className="text-kurale pl-2">Categories</span>
            <DownArrow className={`w-4 mr-3 transition-transform duration-400 ${openCategory ? 'rotate-180' : ''}` }/>
          </button>

          {/* drop down content */}
          {openCategory && (
            <div className=" flex flex-col gap-1 bg-white">
              {categories.map(({path , label}) => (
                <NavLink key={path} to={path} onClick={()=> setOpenCategory(!openCategory)} className="px-2 py-1">
                  {label}
                </NavLink>
              ))}
            </div>
          )} 
        </div>

      {/* Filters */}
        <div className="w-full h-full  bg-gray-100 mt-5 ">
          <button onClick={()=> setOpenFilter(!openFilter)} className="flex justify-between cursor-pointer items-center w-full h-11">
            <span className="text-kurale pl-2">Filters</span>
            <DownArrow className={`w-4 mr-3 transition-transform duration-400 ${openFilter ? 'rotate-180' : ''}` }/>
          </button>

          {/* drop down content */}
          {openFilter && (
            <div className=" flex flex-col gap-1 bg-white">
              {categories.map(({path , label}) => (
                <NavLink key={path} to={path} className="px-2 py-1">
                  {label}
                </NavLink>
              ))}
            </div>
          )} 
        </div>
      </div>
    </div>
  )
}
