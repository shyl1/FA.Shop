import { TrashBin } from "@assets/icons/svg";
import { useAppDispatch, useAppSelector } from "@store/hooks"
import { removeFromWishlist } from "@store/WishList/wishlistslice";



export default function Wishlist() {

  const dispatch = useAppDispatch();
  const {products} = useAppSelector(state => state.wishlist);

  // to convert wishlist from object to array
  const productList = Object.values(products);

  console.log("wishlist products", productList);

  return (
    <section>
      <div className="container max-lg:flex max-lg:justify-center max-lg:items-center max-lg:flex-col ">
          {productList.length > 0 ? (
            productList.map((product) => (
              <div key={product.id} className="p-4 custom-shadow rounded-2xl flex justify-between items-center w-full mb-5">
                <div className="flex items-center gap-2 w-full justify-between">
                  <div className="flex items-center gap-2">
                    <img src={product.image} alt={product.title} className="w-[150px] h-40 object-contain max-sm:w-[100px]" />
                    <div className="flex flex-col ml-2">
                      <p className="text-sm mt-2 max-sm:text-xs max-w-[350px]">{product.title}</p>
                      <p className="text-sm font-semibold mt-5 max-sm:text-xs">${product.price}</p>
                    </div>
                  </div>
                  
                  <div className="md:w-[100px] flex justify-center items-center">
                    <button onClick={()=> dispatch(removeFromWishlist(product.id))}><TrashBin className="w-10 h-10 cursor-pointer max-sm:w-6 max-sm:h-6"/></button>
                  </div>
                </div>
                
              </div>
            ))) : (
              <div className="flex flex-col items-center justify-center h-[50vh]">
                <h2 className="text-xl font-semibold">Your Wishlist is Empty</h2>
                <p className="text-gray-500 mt-2">Add items to your wishlist to see them here.</p>
              </div>
          )}
        </div>
    </section>
  )
}
