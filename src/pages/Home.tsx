import CategoriesSkeletonLoading from "@components/SkeletonLoading/CategoriesSkeletonLoading"
import {  NewArrivals,
  TrendingProducts,
  WomenSection,
  Categories,
  MenSection,
  KidsSection,
  Testimonials,
  Subscribe,
  AutoCarousel} from "../components/LazyComponents/lazyComponents"

  import { Suspense } from "react"

export default function Home() {
  return (
    <section>

      <Suspense fallback= {<CategoriesSkeletonLoading/>}>
        <div className='container mx-auto'>
          <Categories />
        </div>
      </Suspense>
      

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
