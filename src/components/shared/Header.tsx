import { CloseSquare, MenuBar, Search } from "@assets/icons/svg/index";
import { Link, useLocation, useNavigate } from "react-router-dom";
import HeaderIcons from "./HeaderIcons";
import { useState } from "react";
import SideBar from "./sidebar/SideBar"
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {  setSearchQuery } from "@store/Search/searchslice";


export default function Header() {

  const location = useLocation();

  // check if the path contains (/category)
  const isCategoryPage = location.pathname.includes('/category');
  // to hide any distraction form header for bothe shopping cart and checkout page
  const isShoppingCartOrCheckout = location.pathname === '/shopping-cart' || location.pathname.startsWith('/checkout');

  // state to track if side bar is open
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // to read the query
  const {query} = useAppSelector(state => state.search);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  // handle form 
  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query)}`);
    }
  }

  return (
    <header className="bg-blacke w-full h-16 fixed lg:p-5 p-2 top-0 z-999 ">

      <nav className="container flex justify-between items-center h-full max-sm:gap-2 ">

        {/* logo */}
        <Link to="/" className="text-bague max-xxxs:text-[12px] max-xxs:text-[15px] text-[20px] sm:text-[25px] text-kurale"><span className="text-yellow">FA.</span>Shop</Link>


        {/* remove any distrcation leave only shopping option */}
        {
          !isShoppingCartOrCheckout && (
            <>
              {/* search bar */}
              <form onSubmit={handleFormSubmit} className="ml-1 mr-1 flex relative items-center xl:w-100 lg:w-90 md:w-70  max-xxxs:w-20 xxxs:w-20 xs:w-40 sm:w-60 min-w-30">
                <input type="text"  placeholder="Search" className="input bg-bague w-full text-kurale text-[14px] md:text-[18px] max-xxxs:text-[10px]" value={query} onChange={(e)=> dispatch(setSearchQuery(e.target.value))}/>
                
                 {/* Only show search icon when no query */}
                  {!query && (
                    <Search className="w-4 h-4 lg:w-5 lg:h-5 absolute right-3 pointer-events-none text-gray-500" />
                  )}
              </form>

              {/* header icons */}
              <div className="flex justify-between text-bague">
                {/* menu bar hidden on large devices and only in category pages */}
                  {
                    isCategoryPage && (
                      <div className="sm:hidden flex mr-2">
                        {
                          isSidebarOpen ? (
                            <CloseSquare  className="w-6 h-9 cursor-pointer"  onClick={()=> setSidebarOpen((false))}/>
                          ) : (
                            <MenuBar className="w-6 h-9 cursor-pointer" onClick={()=> setSidebarOpen((true))}/>
                          )
                        }
                      </div>
                    )
                  }
                <HeaderIcons />
              </div>
          </>
          )
        }
      </nav>

      {/* Dropdown sidebar Menu (for small screens) */}
      {
        isSidebarOpen && isCategoryPage && (
          <div className="sm:hidden absolute top-16 w-full bg-white left-0 h-[800px]">
            <SideBar className="mobile"  />
          </div>
        )
      }

    </header>
  )
}
