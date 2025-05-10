import { headerIcons } from "@Constants/index";
import { useAppSelector } from "@store/hooks";
import { Link } from "react-router-dom";

export default function HeaderIcons() {

  const {products} = useAppSelector((state)=> state.wishlist);

  return (
    <>
    {
      headerIcons.map(({Icon , label , badge , quantity , path}, index) => (
        <Link to={path || "/"} key={index} className="flex flex-col items-center relative">
          <Icon className="w-8 h-8 text-black "/>

          {/* Red badge on heart */}
          {
            label === "Favorites" && badge && products.length > 0 &&(
              <span className="absolute bg-red-500 rounded-full w-2 h-2 top-0.5 right-1 sm:right-2 
              "></span>
            )
          }

          {/* showing quantity on Cart  */}
          {
            label === "Cart" && quantity && (
              <span className="absolute top-0 right-0 w-3 h-3 rounded-full flex justify-center items-center bg-yellow text-black text-kurale
              text-[8px] sm:w-4 sm:h-4 sm:text-xs
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
