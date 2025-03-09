import { categories } from "@Constants/index"
import { NavLink }  from "react-router-dom"

export default function Categories() {
  return (
    <ul className="flex md:gap-4 justify-center items-center gap-1 sm:gap-2">
      {
        categories.map(({label, path} , index)=> (
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
