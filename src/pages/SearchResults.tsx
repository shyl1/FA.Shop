import { BlackHeart } from "@assets/icons/svg";
import { fetchAllProducts } from "@store/AllProducts/allproductsslice";
import { addToCart } from "@store/Cart/cartslice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { setSearchQuery } from "@store/Search/searchslice";
import { addToWishlist } from "@store/WishList/wishlistslice";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function SearchResults() {
  const dispatch = useAppDispatch();

  const {allProducts , loading ,error} = useAppSelector(state=> state.AllProducts);

  function useQueryParam() {
    return new URLSearchParams(useLocation().search).get("query") || "";
  }

  const query = useQueryParam().toLowerCase();

  // i must use use effect before return statments
  useEffect(() => {
  dispatch(setSearchQuery(query));
    }, [dispatch,query]);

  // dispatch all products
  useEffect(() => {
  if (allProducts.length === 0) {
    dispatch(fetchAllProducts());
  }
}, [dispatch, allProducts.length]);

  if (loading === "pending") return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;


  const filteredProducts = allProducts.filter((product) => product.title?.toLowerCase().includes(query.toLowerCase()));
  
  return (
    <div className="container grid justify-center grid-cols-[repeat(auto-fit,minmax(180px,250px))] lg:grid-cols-[repeat(auto-fit,minmax(220px,280px))]  md:justify-start gap-6 px-4 cursor-pointer">
      {
        filteredProducts.length > 0 ? filteredProducts.map((product)=> (
          <Link to={`/product/${product.id}`} key={product.id} className="custom-shadow group px-4">

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

            {/* Buttons favs and add to cart adding on click so when the user click on the btns it acts as a btn not a link {prevent Link on button click}*/}
            <div className="flex justify-between my-3" onClick={(e) => e.preventDefault()}>
                <button onClick={()=> dispatch(addToCart({...product , quantity: 1}))} className="bg-yellow p-2 w-[100px] rounded cursor-pointer text-sm hover:">Add to Cart</button>
                <button onClick={()=> dispatch(addToWishlist(product))}><BlackHeart className="w-8 h-8 cursor-pointer"/></button>
            </div>
        </Link>
        )
        ) : (
          <p>No products found for "{query}".</p>
        )
      }

    </div>
  )
}
