import SideBar from "@components/shared/sidebar/SideBar";
import { Outlet, useParams } from "react-router-dom";


export default function CategoryLayout() {
  // to know which category is selected, we can use the useParams hook from react-router-dom
  //  how do YOU know inside your component that the category is selected?
  //  useParams will return an object with the params of the current route
  const {category} = useParams <{category : string}>();

  return (
    <main className="flex container mx-auto gap-2 px-4 max-sm:p-0 ">
      <aside className="max-sm:hidden">
        <SideBar category={category} />
      </aside>
      

      <div className="flex-1">
        <Outlet />
      </div>
      
    </main>
  )
}
