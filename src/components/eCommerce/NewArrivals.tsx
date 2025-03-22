import {LeftArrow, RightArrow } from "@assets/icons/svg"
import {NewArrival} from "@Constants/index"
import { useState } from "react"

export default function NewArrivals() {

  const [index , setIndex] = useState(0);

  // to next photo
  const nextphoto = () => {
    setIndex((nextPic)=> nextPic === NewArrival.length-1  ? 0 : nextPic+1 );
  }

  // to prev photo
  const prevphoto = () => {
    setIndex((prevPic)=> prevPic === 0 ? NewArrival.length-1  : prevPic - 1 );
  }


  return (
    <section className="bg-yellow aspect-w-16 aspect-h-9 p-4 flex sm:justify-evenly sm:items-center flex-col sm:flex-row md:gap-5">

      <div className="flex justify-center items-left flex-col md:w-3xl">
          <h2 className="text-kulim font-bold text-[15px] sm:text-[25px] lg:text-[45px]">New Arrivals</h2>
          <span className="text-kulim lg:text-[18px] sm:text-[20px] lg:w-[400px] text-[10px] font-light w-[270px]">explore new products that matches your vibes get the perfect clothes for your best occasions</span>
          <div className="mt-5">
            <button className="bg-blacke md:p-4 p-2 text-white rounded md:text-xl text-[15px] cursor-pointer">Explore Now</button>
          </div>
      </div>

      <div className="py-4 relative">
        {/* image slider */}
        <div className="bg-blacke rounded-lg lg:w-[500px] md:w-[400px] sm:w-[350px] flex justify-center items-center overflow-hidden relative">
              <img src={NewArrival[index].imgurl} className="w-full sm:h-[500px] max-sm:h-[200px] object-contain transition-all duration-300 ease-in-out" />          
        </div>

        {/* navigation buttons */}
        <div className="absolute flex justify-between top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-2">
          <button onClick={prevphoto} className="cursor-pointer" type="button"><LeftArrow className="w-5 h-5"/></button>
          <button  onClick={nextphoto} className="cursor-pointer" type="button" //to prevent submissions
          ><RightArrow className="w-5 h-5"/></button>
        </div>
        
      </div>
      
    </section>
  )
}
