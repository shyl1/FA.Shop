import { useAppDispatch, useAppSelector } from "@store/hooks"
import { fetchWomenProducts } from "@store/WomenCategory/womencategoryslice";
import { useEffect } from "react";
import { Heart } from "@assets/icons/svg";
import WomenSectionSkeletonLoading from "@components/SkeletonLoading/WomenSectionSkeletonLoading";
import LoadingState from "@components/feedback/Loading/LoadingState";
import { addToWishlist } from "@store/WishList/wishlistslice";
import { addToCart } from "@store/Cart/cartslice";


export default function WomenSection() {

  const dispatch = useAppDispatch();
  const {products , loading , error } = useAppSelector( (state) => state.womenCategory);

  // to laod all the data once the component is mounted
  useEffect(()=> {
    //action to fetch data
    dispatch(fetchWomenProducts());
  }, [dispatch]);

  // to display the products
  const womenProducts = products.length > 0 ? products.slice(0,5).map((product)=> (
      <div key={product.id} className="flex flex-col shadow-lg rounded-3xl p-4 w-full h-full cursor-pointer max-sm:min-w-[130px] max-md:min-w-[170px] md:min-w-[200px] group">

      {/* image */}
        <div className=" w-full h-[50px] md:h-[200px] max-md:h-[150px] max-sm:h-[100px] p-2 relative">
          <img src={product.image} alt={product.title} className="w-full h-full object-contain"/>

          {/*hover Overlay */}
          <div className="absolute inset-0 bg-black group-hover:opacity-50 rounded opacity-0 max-md:hidden"></div>

          {/* Buttons favs and add to cart */}
          <div className="absolute inset-0 flex justify-evenly items-center gap-2 bottom-0 opacity-0 group-hover:opacity-100 max-md:hidden">
            <button className="bg-yellow p-1 rounded cursor-pointer text-sm" onClick={()=> dispatch(addToCart({...product , quantity: 1}))}>Add to Cart</button>
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
    </div>
  )) : "there are no products for now";



  return (
    
    <section className="container mx-auto relative">
      <LoadingState status={loading} error={error} skeleton={<WomenSectionSkeletonLoading/>}>
      <div className="mt-7 relative">

        <div className="absolute top-[-10px] left-2 bg-yellow w-15 h-5 md:w-18 md:h-11  text-[15px] md:text-lg z-0 shadow-md rounded-lg flex justify-center items-center text-kurale">
          <h4>Women</h4>
        </div>

        <div className=" relative z-50 flex lg:grid grid-cols-5 max-sm:gap-2 gap-6 md:gap-4 overflow-x-auto p-4 max-md:p-2 overflow-y-hidden scrollbar-hide scroll-smooth snap-x snap-mandatory custom-scrollbar">
            {womenProducts}
        </div>
      </div>
      </LoadingState>
    </section>
  )
}
