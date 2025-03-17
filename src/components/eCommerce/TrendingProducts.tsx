import { useAppDispatch, useAppSelector } from "@store/hooks";
import fetchTrendingProducts from "@store/TrendingProducts/thunk/actionGetTrendingProducts";
import { useEffect } from "react";



export default function TrendingProducts() {

  const dispatch = useAppDispatch();
  const {products , loading , error } = useAppSelector( (state) => state.trendingProducts);

  useEffect ( ()=> {
    dispatch(fetchTrendingProducts());
  } , [dispatch]);


  const Top6Products = products.length > 0 ? products.map((product)=> (
    <div key={product.id} className="flex flex-col shadow-lg rounded-3xl p-4 w-full h-full cursor-pointer max-md:min-w-[150px] md:min-w-[200px]">

      {/* image */}
        <div className=" w-full h-[80px] md:h-[150px] p-2">
          <img src={product.image} alt={product.title} className="w-full h-full object-contain"/>
        </div>

        {/* title & rating  */}
        <div className="flex justify-between items-center">
          <p className="text-sm font-semibold mt-2 truncate max-md:text-[10px]">{product.title}</p>
          <span className="flex justify-center items-center max-md:text-[10px] ">⭐{product.rating.rate}</span>
        </div>

        {/* price */}
        <div className="mt-2">
          <p className="text-sm font-semibold max-md:text-[10px]">${product.price}</p>
        </div>
    </div>
  )) : "There are no best seller Products for now";


  

  return (
    <section className="container mx-auto">
      <div className="flex justify-center items-center flex-col">
        <h2 className="text-kulim font-bold text-[15px] sm:text-[25px] md:text-[45px]">Trending Products</h2>
        <span className="text-kulim font-light text-[20px] text-gray-400 max-md:text-[10px]">best seller products.</span>
      </div>


      {loading === "pending" && <p className="text-3xl font-bold">Products are being loading</p>}

      {error && <p className="text-red-500 flex justify-center items-center text-5xl">{error}</p>}


      {/* trending products */}
      <div className="mt-7">
        <div className="flex lg:grid grid-cols-5 gap-6 md:gap-4 overflow-x-auto p-4 max-md:p-2 overflow-y-hidden scrollbar-hide scroll-smooth snap-x snap-mandatory custom-scrollbar">
          {Top6Products}
        </div>
      </div>

    </section>
  )
}
