import { categories } from "@Constants/index";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { DownArrow } from "@assets/icons/svg/index";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { resetPriceRange, setPriceRange } from "@store/SidebarFilters/PriceFilterslice";

type sidebarPropsType = {
  category? : string;
  showFilter?: boolean;
  showCategory?: boolean;
  className?: string;
}

export default function SideBar({category , showFilter = true , showCategory = true , className = ""} : sidebarPropsType ) {

  //local state to manage the dropdown for each category & filters
  // to track which sections are open
  const [openCategory , setOpenCategory] = useState(true);

  const [openFilter , setOpenFilter] = useState(false);


  const dispatch = useAppDispatch();

  // slider for price range
  function handlePriceRange(min: string , max: string){
    dispatch(setPriceRange({min: Number(min) , max:Number(max)}));
  }

  function handleResetPriceRange(){
    dispatch(resetPriceRange());
    setMinPrice("0");
    setMaxPrice("1000");
  }

  //select 
  const {priceRange} = useAppSelector((state)=> state.priceFilter);

  const [minPrice , setMinPrice] = useState(priceRange.min.toString());
  const [maxPrice, setMaxPrice] = useState(priceRange.max.toString());

  return (
    <div className={`h-full ${className} ${className.includes("mobile") ? "w-full": "w-[200px]" }`}>
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
                <NavLink key={path} to={path} onClick={()=> className.includes("mobile") ? "":  setOpenCategory(!openCategory)} className="px-2 py-1.5 sm:text-sm bg-categories">
                  {label}
                </NavLink>
              ))}
            </div>
          )} 
        </div>

      {/* Filters */}
        <div className="w-full h-full bg-gray-100 mt-5 ">
          <button onClick={()=> setOpenFilter(!openFilter)} className="flex justify-between cursor-pointer items-center w-full h-11">
            <span className="text-kurale pl-2">Filters</span>
            <DownArrow className={`w-4 mr-3 transition-transform duration-400 ${openFilter ? 'rotate-180' : ''}` }/>
          </button>

          {/* drop down content */}
          {openFilter && (
            <div className=" flex flex-col gap-1 bg-white px-2 py-1">
              {/* input field for min price */}
              <label htmlFor="minPrice" className="text-sm">Min Price</label>
              <input id="minPrice" type="number" value={minPrice} placeholder="0" onChange={(e)=> setMinPrice(e.target.value)} className="outline-0 input bg-bague text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"/>
              {/* input field for max price */}
              <label htmlFor="maxPrice" className="text-sm">Max Price</label>
              <input type="number" id="maxPrice" value={maxPrice} placeholder="1000" onChange={(e)=> setMaxPrice(e.target.value)} className="outline-0 input bg-bague text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"/> 
              {/* button to apply changes */}
              <div className="w-full flex justify-end mt-2 gap-2">
                <button className="cursor-pointer border-0 outline-0 rounded-full py-2 px-4 text-black bg-yellow reset-btn" onClick={()=>handleResetPriceRange()}>Reset</button>
                <button onClick={()=> handlePriceRange(minPrice , maxPrice)} className="cursor-pointer border-0 outline-0 rounded-full py-2 px-4 text-bague bg-blacke apply-btn">Apply</button>
                
              </div>
            </div>
          )} 
        </div>
      </div>
    </div>
  )
}
