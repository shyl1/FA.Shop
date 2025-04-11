import { Outlet } from "react-router-dom";
import Header from "@components/shared/Header";
import Footer from "@components/shared/Footer";


export default function MainLayout() {

  return (
    <main className="relative">
      <Header/>

      {/* Render child pages dynamically */}
      <div className="mt-22 sm:mt-28 ">
        <Outlet/>
      </div>
      
      <Footer/>
    </main>
  )
}
