import { Heart } from "@assets/icons/svg";
import LoadingState from "@components/feedback/Loading/LoadingState";
import TrendingProductsSkeleton from "@components/SkeletonLoading/TrendingProductsSkeleton";
import { addToCart } from "@store/Cart/cartslice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import fetchTrendingProducts from "@store/TrendingProducts/thunk/actionGetTrendingProducts";
import { addToWishlist } from "@store/WishList/wishlistslice";
import { useEffect } from "react";
import { Link } from "react-router-dom";



export default function TrendingProducts() {

  const dispatch = useAppDispatch();
  const {products , loading , error } = useAppSelector( (state) => state.trendingProducts);

  useEffect ( ()=> {
    dispatch(fetchTrendingProducts());
  } , [dispatch]);


  const Top6Products = products.length > 0 ? products.map((product)=> (
    <Link to={`/product/${product.id}`} key={product.id} className="flex flex-col shadow-lg rounded-3xl p-4 w-full h-full cursor-pointer max-sm:min-w-[130px] max-md:min-w-[170px] md:min-w-[200px] group">

      {/* image */}
        <div className=" w-full h-[50px] md:h-[200px] max-md:h-[150px] max-sm:h-[100px] p-2 relative">
          <img src={product.image} alt={product.title} className="w-full h-full object-contain"/>

          {/*hover Overlay */}
          <div className="absolute inset-0 bg-black group-hover:opacity-50 rounded opacity-0 max-md:hidden"></div>

          {/* Buttons favs and add to cart */}
          <div className="absolute inset-0 flex justify-evenly items-center gap-2 bottom-0 opacity-0 group-hover:opacity-100 max-md:hidden"  onClick={(e) => e.preventDefault()}>
            {/* add to cart */}
            <button className="bg-yellow p-1 rounded cursor-pointer text-sm" onClick={()=> dispatch(addToCart({...product , quantity: 1}))}>Add to Cart</button>
            {/* add to wishlist */}
            <button onClick={()=> dispatch(addToWishlist(product))}><Heart className="w-10 h-10 cursor-pointer"/></button>
          </div>
        </div>

        {/* title & rating  */}
        <div className="flex justify-between items-center">
          <p className="text-sm font-semibold mt-2 truncate max-md:text-[10px] max-sm:text-[6px]">{product.title}</p>
          <span className="flex justify-center items-center max-md:text-[10px] max-sm:text-[6px]">⭐{product.rating.rate}</span>
        </div>

        {/* price */}
        <div className="mt-2">
          <p className="text-sm font-semibold max-md:text-[10px] max-sm:text-[6px]">${product.price}</p>
        </div>
    </Link>
  )) : "There are no best seller Products for now";


  return (
    <section className="container mx-auto">
      <LoadingState  status={loading} error={error} skeleton={ <TrendingProductsSkeleton/>}>
      <div className="flex justify-center items-center flex-col">
        <h2 className="text-kulim font-bold text-[15px] sm:text-[25px] md:text-[45px]">Trending Products</h2>
        <span className="text-kulim font-light text-[20px] text-gray-400 max-md:text-[10px]">best seller products.</span>
      </div>
      
      {/* trending products */}
      <div className="mt-7">
        <div className="flex lg:grid grid-cols-5 max-sm:gap-2 gap-6 md:gap-4 overflow-x-auto p-4 max-md:p-2 overflow-y-hidden scrollbar-hide scroll-smooth snap-x snap-mandatory custom-scrollbar">
          {Top6Products}
        </div>
      </div>
      </LoadingState>
    </section>
  )
}
