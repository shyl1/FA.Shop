import { useAppSelector } from "@store/hooks"
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence , motion } from "framer-motion";

type LocationState = {
  fee?: number;
};

export default function Confirmation() {

  const {items} = useAppSelector(state => state.CartItem);

  const {appliedCode} = useAppSelector(state => state.coupon);

  // show modal 
  const [showModal , setShowModal] = useState(false);

  const location = useLocation();
  const state = location.state as LocationState;
  // If you're passing fee through location state
  const fee = state?.fee || 0;

  // if the coupon is applied if 10$ fixed or 25% percent
  const discount = 
    appliedCode?.type === "fixed" 
    ? appliedCode.value 
    : appliedCode?.type === "percent"
    ? appliedCode.value 
    : 0;

  const subTotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const salesTax = subTotal * 0.1;
  const total = subTotal + salesTax;
  const grandTotal = (total  + fee) - discount;

  const navigate = useNavigate();

  function hanldeContinueShoppingRediretToHome(){
    navigate("/");
  }

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
              
              {/* coupon */}
              <div className="flex justify-between  items-center border-b pb-4 px-2">
                <span className="font-semibold">code:</span>
                <span>-${discount}</span>
              </div>

              {/* total */}
              <div className="flex justify-between  items-center px-2">
                <span className="font-semibold">Total:</span>
                <span> ${grandTotal.toFixed(2)}</span>
              </div>
              {/* total */}


          </div>

          {/* btn */}
          <div className="flex justify-end mt-4">
            <button className="p-2 bg-black text-bague rounded cursor-pointer" onClick={()=> setShowModal(true)}>confirm order</button>
          </div>
      </div>
      
      {/* modal */}
      <AnimatePresence>
        {
        showModal && (
          <motion.div 
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center z-50"
          >
            <motion.div 
            initial={{ opacity: 0 , scale: 0.8 }}
            animate={{ opacity: 1 , scale: 1 }}
            exit={{ opacity: 0 , scale: 0.8  }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded shadow-md md:w-[800px] w-full text-center"
            >
              <h3 className="text-xl font-semibold mb-4">Order Confirmed</h3>
              <p className="mb-4">Your order has been placed!</p>
              <div className="flex justify-center items-center gap-4">
                <button onClick={hanldeContinueShoppingRediretToHome} className="p-3 rounded-lg cursor-pointer">Home</button>
                <button onClick={() => setShowModal(false)} className="bg-yellow p-3 rounded-lg cursor-pointer">Close</button>
              </div>
            </motion.div>
          </motion.div>
        )
        }
      </AnimatePresence>
      
    </section>
  )
}
