import CartItems from "@components/eCommerce/CartItems";
import SummaryCart from "@components/eCommerce/SummaryCart";
import { useAppSelector } from "@store/hooks";
import { useNavigate } from "react-router-dom";

export default function ShoppingCart() {

  const {items} = useAppSelector((state)=> state.CartItem);

  const navigate = useNavigate();
  
  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);

  const showCartDetails = totalQuantity !== 0 ;

  function hanldeContinueShoppingRediretToHome(){
    navigate("/");
  }

  return (
    
    <section className="flex-1 container">
      {
        showCartDetails ? (
          <>

           {/* Cart and how may items the user have [Cart heading] */}
          <div className="flex justify-center items-center mb-5">
            <h1 className="text-3xl font-bold">Your Cart <span className="text-xl font-normal">({totalQuantity} item{totalQuantity!==1 ? 's' : ''})</span></h1>
          </div>

          {/* table of items  */}
            <div className="flex flex-col">
              <div className="sm:grid sm:grid-cols-[3fr_1fr_1fr_1fr_1fr] gap-3 p-2 border-b font-bold text-lg">
                <span>Items</span>
                <span className="max-sm:hidden">Price</span>
                <span className="max-sm:hidden">Quantity</span>
                <span className="max-sm:hidden">Total</span>
                <span className="max-sm:hidden">Remove</span>
              </div>
              <div className="mt-2 p-2">
                <CartItems />
              </div>
            </div>

          {/* cart summary  and if the cart is empty dont show summary card*/}
            <div className="flex sm:justify-end justify-center my-5 mx-1">
              <SummaryCart/>
            </div>
        </>
        ) : (
          //if the cart is empty show this 
          <div className="flex justify-center items-center  flex-col ">
            <p className="font-extrabold text-4xl">Your Cart is Empty.</p>
            <button onClick={hanldeContinueShoppingRediretToHome} className="p-2 bg-yellow rounded-3xl mt-5 cursor-pointer">Go Back Shopping</button>
          </div>
        )
      }
      
    </section>
  )
}
