import { Category } from "@components/CustomTypes/SharedTypes";
import CategoriesSkeletonLoading from "@components/SkeletonLoading/CategoriesSkeletonLoading";
import { categories as CategoriesLoading } from "@Constants/index"
import { useEffect, useState } from "react"
import { NavLink }  from "react-router-dom"


export default function Categories() {

  // need to simulate loading for categories as its for now its static data and not fetched from api
  const [Categories , setCategories] = useState<Category[]>([]);

  const [loading , setLoading] = useState(true);

  useEffect(()=> {
    const timer = setTimeout(()=> {
      setCategories(CategoriesLoading);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading){
    <CategoriesSkeletonLoading/>
  }

  return (
    <ul className="flex md:gap-4 justify-center items-center gap-1 sm:gap-2 text-kurale ">
      {
        CategoriesLoading.map(({label, path} , index)=> (
          <li key={index} >
            <NavLink to={path} className="bg-yellow main-style min-w-3 h-6 p-1 text-[10px]
            sm:min-w-20 sm:text-[14px] sm:p-3.5
            xs:min-w-13 xs:text-[11px] xs:p-2
            lg:min-w-20 lg:h-8 lg:p-4 lg:text-[20px]
            ">{label}</NavLink>
          </li>
        ))
      }
    </ul>
  )
}
