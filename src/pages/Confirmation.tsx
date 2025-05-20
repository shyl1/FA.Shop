import { useAppSelector } from "@store/hooks"
import { useLocation } from "react-router-dom";

type LocationState = {
  fee?: number;
};

export default function Confirmation() {

  const {items} = useAppSelector(state => state.CartItem);

  const location = useLocation();
  const state = location.state as LocationState;
  // If you're passing fee through location state
  const fee = state?.fee || 0;

  const subTotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const salesTax = subTotal * 0.1;
  const total = subTotal + salesTax;
  const grandTotal = total + fee;

  return (
    <section className="flex container flex-col justify-center items-center">
      <div className="custom-shadow p-4 w-full sm:w-1/2">
        <h2 className="font-bold text-lg">Your items</h2>
        <ul className="my-3">
          {
            items.map((item)=> (
              <li key={item.id} className="flex justify-between items-center border-b p-2">
                <span>{item.title} <span className="font-light">x</span> <span className="font-bold">{item.quantity}</span></span>
                <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))
          }
        </ul>
          <div className="flex flex-col gap-2">
             {/* sub total */}
              <div className="flex justify-between items-center border-b pb-4 px-2">
                <span className="font-semibold">Subtotal:</span>
                <span className="text-gray-500">${subTotal.toFixed(2)}</span>
              </div>
              {/* end sub total */}

              {/* sales tax */}
              <div className="flex justify-between  items-center border-b pb-4 px-2">
                <span className="font-semibold">Sales Tax (10%):</span>
                <span className="text-gray-500">${salesTax.toFixed(2)}</span>
              </div>
              {/* end sales tax */}


              {/* shipping fee */}
              <div className="flex justify-between  items-center border-b pb-4 px-2">
                <span className="font-semibold">Fee:</span>
                <span> ${fee.toFixed(2)}</span>
              </div>
              {/* end shipping fee */}

              {/* total */}
              <div className="flex justify-between  items-center px-2">
                <span className="font-semibold">Total:</span>
                <span> ${grandTotal.toFixed(2)}</span>
              </div>
              {/* total */}


          </div>

          {/* btn */}
          <div className="flex justify-end mt-4">
            <button className="p-2 bg-black text-bague rounded cursor-pointer">confirm order</button>
          </div>
      </div>
      
    </section>
  )
}
