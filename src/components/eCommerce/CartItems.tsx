import { TrashBin } from "@assets/icons/svg";
import { removeFromCart, updateQuantity } from "@store/Cart/cartslice";
import { useAppDispatch, useAppSelector } from "@store/hooks"

export default function CartItems() {

  const {items} =useAppSelector((state)=> state.CartItem);

  const dispatch = useAppDispatch();

  const itemsCart = items.length > 0 ? items.map((item)=> (
    <div key={item.id} className="sm:grid sm:grid-cols-[3fr_1fr_1fr_1fr_1fr] gap-3 p-2 text-base custom-shadow rounded flex flex-col">

      {/* item info  when sm*/}
      <div className="hidden sm:flex w-full">
        <img src={item.image} alt={item.title} className="w-[150px] h-40 object-contain max-sm:w-[100px]"/>
        <p className="text-xs sm:text-sm font-semibold mt-2 w-1/2 ml-5">{item.title}</p>
      </div>

      {/* price it diplays when sm */}
      <span className="hidden sm:flex items-center font-semibold">{item.price}</span>

      {/* quantity  when sm */}
      <div className="hidden sm:flex sm:items-center max-sm:justify-end">
        <div className="w-[100px] sm:w-full md:w-1/2 flex justify-between bg-bague rounded-2xl ">
          <button className="outline-0 bg-yellow p-2 rounded-2xl sm:text-2xl w-[10px] sm:w-[30px] cursor-pointer flex items-center justify-center" onClick={()=> dispatch(updateQuantity({...item , quantity: item.quantity+1 }))}>+</button>
          <span className="flex items-center font-semibold">{item.quantity}</span>
          <button className="outline-0 bg-yellow p-2 rounded-2xl text-base sm:text-2xl w-[10px] sm:w-[30px] cursor-pointer flex items-center justify-center" onClick={()=> item.quantity > 1 ? dispatch(updateQuantity({ ...item, quantity: item.quantity - 1 })): dispatch(removeFromCart(item.id)) }>-</button>
        </div>
      </div>

      {/* Total it diplays when sm */}
      <span className="hidden sm:flex items-center font-semibold">
        ${(item.price * item.quantity).toFixed(2)}
      </span>

      {/* remove item when sm */}
      <span className="hidden sm:flex items-center ml-5"><button onClick={()=> dispatch(removeFromCart(item.id))}><TrashBin className="w-8 h-8 cursor-pointer"/></button></span>

      {/* for below sm */}
        <div className="sm:hidden flex gap-2 flex-col">
          <div className="flex">
            {/* image */}
            <img src={item.image} alt={item.title} className="w-[100px] h-[150px] object-contain" />
            {/* title , price , Total */}
            <div className="flex flex-col">
              <p className="font-semibold mt-2 w-full ml-2">{item.title}</p>
              <span className="mt-2 ml-2" ><span className="font-bold">Price: </span>{`$${item.price}`}</span>
              <span className="mt-2 ml-2"><span className="font-bold">Total: </span>{`$${(item.price * item.quantity).toFixed(2)}`}</span>
            </div>
          </div>
          <div className="flex justify-between">
            {/* quantity */}
            <div className="flex items-center ">
              <div className="w-[100px] sm:w-full md:w-1/2 flex justify-between bg-bague rounded-2xl ">
                <button className="outline-0 bg-yellow p-2 rounded-2xl sm:text-2xl w-[10px] sm:w-[30px] cursor-pointer flex items-center justify-center" onClick={()=> dispatch(updateQuantity({...item , quantity: item.quantity+1 }))}>+</button>
                <span className="flex items-center font-semibold">{item.quantity}</span>
                <button className="outline-0 bg-yellow p-2 rounded-2xl text-base sm:text-2xl w-[10px] sm:w-[30px] cursor-pointer flex items-center justify-center" onClick={()=> item.quantity > 1 ? dispatch(updateQuantity({ ...item, quantity: item.quantity - 1 })): dispatch(removeFromCart(item.id)) }>-</button>
              </div>
            </div>

             {/* remove item */}
              <span className="flex items-center ml-5"><button onClick={()=> dispatch(removeFromCart(item.id))}><TrashBin className="w-8 h-8 cursor-pointer"/></button></span>
          </div>
        </div>
    </div>
  )) : "Your Cart is empty";
  return (
    <div className="flex flex-col gap-4">
      {itemsCart}
    </div>
  )
}
