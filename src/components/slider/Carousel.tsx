import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from "swiper/modules";
import { autoSlider } from '@Constants/index';

import 'swiper/swiper-bundle.css';

export default function Carousel() {



  return (
    <div className="w-full h-full overflow-hidden">
      <Swiper 
        modules ={[Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        loop 
        className="w-full h-full"
      >
          {
            autoSlider.map(({Id : id, ImageUrl :img})=>( 
              <SwiperSlide key={id} className="w-full h-full ">
                <img src={img} className="w-full h-full object-fill"  />
              </SwiperSlide>
            ))
          }
      </Swiper>
    </div>
  )
}
