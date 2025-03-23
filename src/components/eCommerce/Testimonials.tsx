import 'swiper/swiper-bundle.css';
import { testimonial } from "@Constants/index";
import { Swiper, SwiperSlide } from "swiper/react";
//import {Autoplay} from "swiper/modules";


export default function Testimonials() {
  return (
    <section className="container mx-auto">

    <div className="w-full h-1/2 md:rounded-lg bg-yellow p-5 shadow-lg">

      <Swiper className="w-full h-full" 
      // spaceBetween={50} 
      // modules ={[Autoplay]}
      // slidesPerView={1}
      // autoplay={{ delay: 4000, disableOnInteraction: false }}
      // loop 
      >
        {
          testimonial.map((item, indx)=> (
            <SwiperSlide key={indx} className="bg-yellow p-6 w-full h-full">
              <div className='flex items-center gap-4 md:gap-8'>
                <img src={item.imgurl} className='rounded-full w-12 h-12 md:w-20 md:h-20'/>
                <div className='flex flex-col '>
                  <p className='text-[10px] font-semibold md:text-sm mt-5'>{item.name}</p>
                  <p className='text-[11px] w-[250px] md:w-[400px] mt-2'>{item.comment}</p>
                </div>
              </div>
            
              
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>

    </section>
  )
}
