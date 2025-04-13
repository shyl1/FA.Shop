
import { lazy } from "react";


const  NewArrivals = lazy(()=> import ('@components/eCommerce/NewArrivals')); 
const  TrendingProducts = lazy(()=> import ('@components/eCommerce/TrendingProducts')); 
const  WomenSection = lazy(()=> import ('@components/eCommerce/WomenSection')); 
const  Categories = lazy(()=> import ('@components/shared/Categories')); 
const  MenSection = lazy(()=> import ('@components/eCommerce/MenSection')); 
const  KidsSection = lazy(()=> import ('@components/eCommerce/KidsSection')); 
const  Testimonials = lazy(()=> import ('@components/eCommerce/Testimonials'));
const  Subscribe = lazy(()=> import ('@components/eCommerce/Subscribe'));
const  AutoCarousel = lazy(()=> import ('@components/slider/AutoCarousel'));



export {
  NewArrivals,
  TrendingProducts,
  WomenSection,
  Categories,
  MenSection,
  KidsSection,
  Testimonials,
  Subscribe,
  AutoCarousel,
}