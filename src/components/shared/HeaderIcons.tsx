import { headerIcons } from "@Constants/index";
import { Link } from "react-router-dom";

export default function HeaderIcons() {
  return (
    <>
    {
      headerIcons.map(({Icon , label , badge , quantity , path}, index) => (
        <Link to={path || "/"} key={index} className="flex flex-col items-center relative">
          <Icon className="w-4 h-4 xs:w-5 xs:h-5 sm:w-8 sm:h-8 text-black "/>

          {/* Red badge on heart */}
          {
            label === "Favorites" && badge &&(
              <span className="absolute bg-red-500 rounded-full w-1 h-1 
              max-xxxs:top-0.25 max-xxxs:right-1 xxxs:right-1.5 top-0.5 xxs:right-2.5  right-1.5 sm:w-2 sm:h-2
              "></span>
            )
          }

          {/* showing quantity on Cart  */}
          {
            label === "Cart" && quantity && (
              <span className="absolute top-0 right-0 w-2 h-2 rounded-full flex justify-center items-center bg-yellow text-black text-kurale
              text-[8px] sm:w-4 sm:h-4 sm:text-[10px]
              ">{quantity}</span>
            )
          }

          {label && ( 
            <span className="max-xxxs:text-[5px] xxxs:text-[7px] xxs:text-[8px] xs:text-[10px] sm:text-xs text-kurale">{label}</span> 
          )}
        </Link>
      ))
    }
  </>
  )
}
