import { Search } from "@assets/icons/svg/index";
import { Link } from "react-router-dom";
import HeaderIcons from "./HeaderIcons";


export default function Header() {
  return (
    <header className="bg-blacke w-full h-16 fixed lg:p-5 p-2 top-0 z-10 ">

      <nav className="container flex justify-between items-center h-full max-sm:gap-2 ">

        {/* logo */}
        <Link to="/" className="text-bague max-xxxs:text-[12px] max-xxs:text-[15px] text-[20px] sm:text-[25px] text-kurale"><span className="text-yellow">FA.</span>Shop</Link>

        {/* search bar */}
        <form className="ml-1 mr-1 flex relative items-center xl:w-100 lg:w-90 md:w-70  max-xxxs:w-20 xxxs:w-20 xs:w-40 sm:w-60 min-w-30">
          <input type="text"  placeholder="Search" className="input bg-bague w-full text-kurale text-[14px] md:text-[18px] max-xxxs:text-[10px]"/>
          <Search className="w-4 h-4 lg:w-5 lg:h-5 absolute xl:right-3 right-3 "/>
        </form>

        {/* header icons */}
        <div className="flex justify-between text-bague max-xxxs:gap-0.25 sm:gap-2 max-xxs:gap-0.5 xxs:gap-1">
          <HeaderIcons />
        </div>
        
      </nav>

    </header>
  )
}
