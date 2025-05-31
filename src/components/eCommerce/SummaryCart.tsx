import { couponList } from "@Constants/index";
import { applyCode } from "@store/Coupon/couponslice";
import { useAppSelector , useAppDispatch } from "@store/hooks"
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function SummaryCart() {

  const navigate = useNavigate()

  const {items} = useAppSelector((state)=> state.CartItem);


  // for showing coupon input
  const [showCouponInput , setShowCouponInput] = useState(false);
  // string value for coupon in input
  const [couponCode , setCouponCode] = useState("");

  const {appliedCode} = useAppSelector(state => state.coupon);
  const dispatch = useAppDispatch();

  // set error for coupon
  const [couponError , setCouponError] = useState("");

  // if the coupon is applied if 10$ fixed or 25% percent
  const discount = 
    appliedCode?.type === "fixed" 
    ? appliedCode.value 
    : appliedCode?.type === "percent"
    ? appliedCode.value 
    : 0;

  //sub total
  const subTotal = items.reduce((acc, item)=> acc + item.price * item.quantity ,0);

  //sales tax 
  const salesTaxRate = 0.10;
  const salesTax = subTotal * salesTaxRate ;

  //Grand Total
    const grandTotal = subTotal + salesTax - discount ;

  //free shipping 
  const freeShippingThreshold = 1000;
  const isFreeShipping = grandTotal >= freeShippingThreshold;

  // to handle if applied coupon then show , not then not show input field
    function handleApplyCoupon(){
      const coupon = couponList[couponCode];
      if (coupon) {
        dispatch(applyCode(coupon));
        setShowCouponInput(false);
        setCouponError("");
      } else {
        setCouponError("invalid coupon code.");
      }
    };

  return (
    <div className="p-4 border rounded sm:w-[400px] w-[300px] flex flex-col gap-2">

      {/* sub total */}
      <div className="flex justify-between">
        <span className="font-semibold">Subtotal:</span>
        <span className="text-gray-500">${subTotal.toFixed(2)}</span>
      </div>
      {/* end sub total */}

      <hr />

      {/* sales tax */}
      <div className="flex justify-between">
        <span className="font-semibold">Sales Tax:</span>
        <span className="text-gray-500">${salesTax.toFixed(2)}</span>
      </div>
      {/* end sales tax */}

      <hr />
      {/* coupon section */}
      {/* state 1 is when there is no coupon being applied show Add Coupon */}
      {
        !appliedCode && !showCouponInput && (
          <div className="flex justify-between">
            <span className="font-semibold">Coupon Code:</span>
            <span>
              <button className="underline text-gray-500 cursor-pointer" onClick={()=> setShowCouponInput(true)}>Add Coupon</button>
            </span>
          </div>
        )
      }

      {/* state 2 when user clicked on add coupon */}
      {
        showCouponInput &&(
          <div className="flex flex-col" >
              <div className="flex bg-gray-100 rounded-2xl">
                <input type="text" value={couponCode} onChange={(e)=> setCouponCode(e.target.value)} placeholder="Enter code" className="border-0 outline-0 py-2 px-4 flex-1"/>
                <button className="w-[100px] bg-yellow rounded-2xl cursor-pointer text-[12px] sm:text-base p-1" onClick={handleApplyCoupon}>Apply</button>
              </div>
              {/* show error if there is */}
              {couponError && (
                <p className="text-red-500 text-sm px-2">{couponError}</p>
              )}         
          </div>
        )
      }

      {/* if the coupon is applied */}
      {
        appliedCode && (
          <div className="flex justify-between">
            <span className="font-semibold">Coupon Applied:</span>
            <span>{appliedCode.type === 'fixed' 
              ? `-$${appliedCode.value}`
            : `-${appliedCode.value * 100}%`}</span>
          </div>
        )
      }

      {/*end coupon section */}

      <hr />

      {/* Grand total */}
      <div className="flex justify-between">
        <span className="font-semibold text-lg">Grand total:</span>
        <span className="font-semibold text-lg">${grandTotal.toFixed(2)}</span>
      </div>


      {/* for shipping */} 
      <div className="flex justify-end">
        {
        isFreeShipping && (
          <div className="w-[250px]">
            <p>Congarts. you're eligible for <span className="font-bold">Free Shipping</span></p>
          </div>
        )
        }
      </div>


      {/* check out  */}
      <div className="flex justify-end">
        <button className="bg-black text-yellow-400 w-[250px] cursor-pointer p-2 " onClick={()=> navigate('/checkout')}>Check Out</button>
      </div>
    </div>
  )
}
