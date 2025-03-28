import NewArrivals from '@components/eCommerce/NewArrivals'
import TrendingProducts from '@components/eCommerce/TrendingProducts'
import WomenSection from '@components/eCommerce/WomenSection'
import Categories from '@components/shared/Categories'
import MenSection from '@components/eCommerce/MenSection'
import KidsSection from '@components/eCommerce/KidsSection'
import Testimonials from '@components/eCommerce/Testimonials'
import Subscribe from '@components/eCommerce/Subscribe'
import AutoCarousel from '@components/slider/AutoCarousel'

export default function Home() {
  return (
    <section>
      <div className='container mx-auto'>
        <Categories />
      </div>

     {/* auto slider without swiper.js */}
    {/* <div className='mt-7 sm:mt-10'>
      <AutoCarousel />
    </div> */}

      <div className='mt-7 md:mt-20'>
        <TrendingProducts />
      </div>

      <div className='mt-7 md:mt-20'>
        <NewArrivals />
      </div>

      <div className='mt-7 md:mt-11'>
        <WomenSection />
      </div>

      <div  className='mt-7 md:mt-11'>
        <MenSection />
      </div>

      <div className='mt-7 md:mt-11'>
        <KidsSection />
      </div>

      <div className='mt-7 md:mt-11'>
        <Testimonials />
      </div>

      <div className='mt-7 md:mt-15'>
        <Subscribe />
      </div>


    </section>
  )
}
