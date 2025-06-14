import { Outlet, useLocation } from "react-router-dom";
import Header from "@components/shared/Header";
import Footer from "@components/shared/Footer";


export default function MainLayout() {

  const location = useLocation();

  // define routes where footer should be hidden
  const hideFooterForRoute = ["/shopping-cart" , "/checkout"]; ;
  const shouldHideFooter = hideFooterForRoute.some(route => location.pathname.startsWith(route));

  return (
    <>
    <main className="flex flex-col justify-between min-h-screen">
      <Header/>
      <section className="relative">
        {/* Render child pages dynamically */}
        <div className="mt-24 sm:mt-28 ">
          <Outlet/>
        </div>
      </section>
      {!shouldHideFooter && <Footer/>}
    </main>
    </>
  )
}
