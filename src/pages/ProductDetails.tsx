import { Heart } from "@assets/icons/svg";
import { fetchAllProducts } from "@store/AllProducts/allproductsslice";
import { addToCart } from "@store/Cart/cartslice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { addToWishlist } from "@store/WishList/wishlistslice";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function ProductDetails() {

  const {id} = useParams<{id : string}>();
  const productId = Number(id);

  const {allProducts , loading ,error} = useAppSelector(state=> state.AllProducts);

  const dispatch = useAppDispatch();

  // local quantity and pass it to cart redux
  const [quantity , setQuantity] = useState(1);

  useEffect(()=>{
    dispatch(fetchAllProducts());
  } , [dispatch]);
  
  
  const product = allProducts.find(p => p.id === productId);

  if (!product){
    return "there is no product with this id";
  }  

  if (loading === "pending") return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="container">
      <div className="flex flex-col md:flex-row gap-6 p-4">

      {/* image */}
      <div className="w-full sm:h-[400px] h-[200px]">
        <img src={product.image} alt={product.title} className="object-contain w-full h-full" />
      </div>

      {/* details */}
      <div className="flex flex-col items-start p-2">
        {/* title */}
        <h2 className="text-lg font-bold">{product.title}</h2>

        {/* rating */}
        <span className="flex justify-center items-center mt-3 mb-2">⭐{product.rating.rate} ({product.rating.count} Reviews)</span>

        {/* description */}
        <p className="text-sm"><span className="text-base font-medium">Description: </span>{product.description}</p>

        {/* colors */}
        <div className="flex gap-2 mt-3 items-center">
          <span className="text-sm font-medium">colors: </span>
          <span className="w-5 h-5 bg-red-500 rounded-full cursor-pointer"></span>
          <span className="w-5 h-5 bg-blue-500 0 rounded-full cursor-pointer"></span>
          <span className="w-5 h-5 bg-green-500 rounded-full cursor-pointer"></span>
        </div>

        {/* quantity */}
        <div className="flex flex-col gap-2 mt-4 items-start">
          <span className="text-sm font-medium">Quantity:</span>
          <span className="flex gap-2 items-center">
            <button className="w-8 h-8 bg-bague rounded-full flex justify-center items-center cursor-pointer" onClick={()=> setQuantity(prev => Math.max(1 , prev-1))}>-</button>
            <span className="text-sm font-medium">{quantity}</span>
            <button className="w-8 h-8 bg-bague rounded-full flex justify-center items-center cursor-pointer" onClick={()=> setQuantity(prev => prev +1)}>+</button>
          </span>
        </div>

        {/* add to cart and fav */}
        <div className="flex gap-2 mt-3">
          <button className="px-4 py-2 bg-yellow font-medium rounded-full cursor-pointer" onClick={()=> dispatch(addToCart({...product , quantity}))}>Add To Cart</button>
          <button onClick={()=> dispatch(addToWishlist(product))}><Heart className="w-8 h-8 fill-black cursor-pointer"/></button>
        </div>
      </div>
    </div>

    {/* related products */}
    </section>
  )
}
