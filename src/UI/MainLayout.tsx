import { Outlet } from "react-router-dom";
import Header from "@components/shared/Header";
import Footer from "@components/shared/Footer";


export default function MainLayout() {

  return (
    <>
    <Header/>
    <main className="relative">
      {/* Render child pages dynamically */}
      <div className="mt-24 sm:mt-28 ">
        <Outlet/>
      </div>
      
      <Footer/>
    </main>
    </>
  )
}
