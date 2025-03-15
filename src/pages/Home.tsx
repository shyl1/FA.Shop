import Categories from '@components/shared/Categories'
import AutoCarousel from '@components/slider/AutoCarousel'

export default function Home() {
  return (
    <section>
      <div className='container mx-auto'>
        <Categories />
      </div>

     {/* auto slider without swiper.js */}
    <div className='mt-7 sm:mt-10'>
      <AutoCarousel />
    </div>

    

    </section>
  )
}
