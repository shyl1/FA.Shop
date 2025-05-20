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
import CategoriesSkeletonLoading from "@components/SkeletonLoading/CategoriesSkeletonLoading"
import TrendingProductsSkeleton from "@components/SkeletonLoading/TrendingProductsSkeleton"
import NewArrivalsSkeletonLaoding from "@components/SkeletonLoading/NewArrivalsSkeletonLaoding"
import AutoCarouselSkeletonLoading from "@components/SkeletonLoading/AutoCarouselSkeletonLoading"
import WomenSectionSkeletonLoading from "@components/SkeletonLoading/WomenSectionSkeletonLoading"
import MenSectionSkeletonLoading from "@components/SkeletonLoading/MenSectionSkeletonLoading"
import KidsSectionSkeletonLoading from "@components/SkeletonLoading/KidsSectionSkeletonLoading"

export default function Home() {
  return (
    <section>

      <Suspense fallback= {<CategoriesSkeletonLoading/>}>
        <div className='container mx-auto'>
          <Categories />
        </div>
      </Suspense>
      
     {/* auto slider without swiper.js */}
    {/* <Suspense fallback={<AutoCarouselSkeletonLoading />}>
      <div className='mt-7 sm:mt-10'>
        <AutoCarousel />
      </div>
    </Suspense> */}


      <Suspense fallback={<TrendingProductsSkeleton/>}>
        <div className='mt-7 md:mt-20'>
          <TrendingProducts />
        </div>
      </Suspense>
      
      <Suspense fallback={<NewArrivalsSkeletonLaoding/>}>
        <div className='mt-7 md:mt-20'>
          <NewArrivals />
        </div>
      </Suspense>
      
      <Suspense fallback={<WomenSectionSkeletonLoading/>}>
        <div className='mt-7 md:mt-11'>
          <WomenSection />
        </div>
      </Suspense>
      

      <Suspense fallback={<MenSectionSkeletonLoading/>}>
        <div  className='mt-7 md:mt-11'>
          <MenSection />
        </div>
      </Suspense>

      <Suspense fallback={<KidsSectionSkeletonLoading />}>
        <div className='mt-7 md:mt-11'>
          <KidsSection />
        </div>
      </Suspense>
      

      <Suspense fallback={<TrendingProductsSkeleton/>}>
        <div className='mt-7 md:mt-11'>
          <Testimonials />
        </div>
      </Suspense>
      
      
      <div className='mt-7 md:mt-15'>
        <Subscribe />
      </div>


    </section>
  )
}
