import NewArrivals from '@components/eCommerce/NewArrivals'
import TrendingProducts from '@components/eCommerce/TrendingProducts'
import Categories from '@components/shared/Categories'
//import AutoCarousel from '@components/slider/AutoCarousel'

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

    <div className='mt-20 max-md:mt-7'>
      <TrendingProducts />
    </div>

    <div className='mt-20 max-md:mt-7'>
      <NewArrivals />
    </div>

    </section>
  )
}
