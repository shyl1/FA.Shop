import CartItems from "@components/eCommerce/CartItems";
import { useAppSelector } from "@store/hooks";

export default function ShoppingCart() {

  const {items} = useAppSelector((state)=> state.CartItem);

  
  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);
  return (
    
    <section className="flex-1 container">
      {/* Cart and how may items the user have */}
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

      {/* cart summary */}
      <div>

      </div>

    </section>
  )
}
