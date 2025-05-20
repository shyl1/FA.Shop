import { BlackHeart } from "@assets/icons/svg";
import { initialState } from "@components/CustomTypes/SharedTypes";
import LoadingState from "@components/feedback/Loading/LoadingState";
import TrendingProductsSkeleton from "@components/SkeletonLoading/TrendingProductsSkeleton";
import { categoiresThunks } from "@Constants/index";
import { addToCart } from "@store/Cart/cartslice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { addToWishlist } from "@store/WishList/wishlistslice";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom"

type ValidCategory = keyof typeof categoiresThunks;


export default function CategoryProducts() {

  const {category} = useParams<{category: ValidCategory}>();

  const {priceRange} = useAppSelector(state=> state.priceFilter);


  const dispatch = useAppDispatch();
  // dispatch the correct category with its thunk
  useEffect(()=> {
    if(category && categoiresThunks[category]){
      dispatch(categoiresThunks[category](priceRange));
    }
  } , [category,dispatch, priceRange]);

  // select products based on category
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

  )) : "No products found in this category.";

  return (
    <section className="w-full h-auto">
      <LoadingState status={loading} error={error} skeleton={<TrendingProductsSkeleton/>}>
      <div className="grid justify-center grid-cols-[repeat(auto-fit,minmax(180px,250px))] lg:grid-cols-[repeat(auto-fit,minmax(220px,300px))]  md:justify-start gap-6 px-4 cursor-pointer">
        {productsCategory}
      </div>
      </LoadingState>
    </section>
  )
}
