import Carousel from "./Carousel";
export default function AutoCarousel() {
  return (
    /*slider conatiner defines the dimension*/
    <div className="w-full aspect-[16/5] bg-gray-50">

      {/* slider tracker to hold the items */}
      <div className='w-full h-full overflow-hidden relative'>
        <Carousel />
      </div>


    </div>
  )
}
