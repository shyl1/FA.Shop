import { BlackHeart } from "@assets/icons/svg";
import { initialState } from "@components/CustomTypes/SharedTypes";
import LoadingState from "@components/feedback/Loading/LoadingState";
import TrendingProductsSkeleton from "@components/SkeletonLoading/TrendingProductsSkeleton";
import { categoiresThunks } from "@Constants/index";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { addToWishlist } from "@store/WishList/wishlistslice";
import { useEffect } from "react";
import { useParams } from "react-router-dom"

type ValidCategory = keyof typeof categoiresThunks;


export default function CategoryProducts() {

  const {category} = useParams<{category: ValidCategory}>();

  const dispatch = useAppDispatch();
  // dispatch the correct category with its thunk
  useEffect(()=> {
    if(category && categoiresThunks[category]){
      dispatch(categoiresThunks[category]());
    }
  } , [category,dispatch]);

  // select  products based on category
  const { products, loading, error } = useAppSelector((state) => {
    switch (category) {
      case 'women':
        return state.womenCategory;
      case 'men':
        return state.menCategory;
      case 'kids':
        return state.kidsCategory;
      case 'shoes':
        return state.shoeCategory;
      case 'accessories':
        return state.accessoricesCategory; 
      case 'sportswear':
        return state.sportswearCategory;
      default:
        return initialState; // Fallback to avoid undefined
    }
  });

  const productsCategory = products.length > 0 ? products.map((product)=> (
    <div key={product.id} className="custom-shadow group px-4">

      {/* image */}
      <div className=" w-full h-[200px] p-2 relative">
          <img src={product.image} alt={product.title} className="w-full h-full object-contain "/>
        </div>
        
        {/* title & rating  */}
        <div className="flex justify-between items-center">
          <p className="text-sm font-semibold mt-2 truncate">{product.title}</p>
          <span className="flex justify-center items-center ">⭐{product.rating.rate}</span>
        </div>

        {/* price */}
        <div className="mt-2">
          <p className="text-sm font-semibold">${product.price}</p>
        </div>

        {/* Buttons favs and add to cart */}
        <div className="flex justify-between my-3">
            <button className="bg-yellow p-2 w-[100px] rounded cursor-pointer text-sm hover:">Add to Cart</button>
            <button onClick={()=> dispatch(addToWishlist(product))}><BlackHeart className="w-8 h-8 cursor-pointer"/></button>
        </div>
    </div>

  )) : "No products found in this category.";

  return (
    <section className="w-full h-auto">
      <LoadingState status={loading} error={error} skeleton={<TrendingProductsSkeleton/>}>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 px-4 cursor-pointer">
        {productsCategory}
      </div>
      </LoadingState>
    </section>
  )
}
