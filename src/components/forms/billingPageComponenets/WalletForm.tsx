import { useAppDispatch } from "@store/hooks"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { walletSchema } from "@schemas/billingSchema";
import {savePaymentMethodDetails } from "@store/Checkout/checkoutslice";

export default function WalletForm() {

  const [formData , setFormData] = useState({
    phone:""
  });

  // to show errors 
    const [showError , setShowError] = useState<Record<string, string[]>>({});
  
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
  
     // dont forget to convert phone from string to number cuz e.target.value deal with string only 
      function handleSubmit(e : React.FormEvent){
        // to prevent form from rendering
        e.preventDefault();
        // storing 
        const result = walletSchema.safeParse({...formData , method : "wallet"});
    
        //check if there is any error
        if(!result.success){
          const errors = result.error.flatten().fieldErrors; // show errors
          setShowError(errors);
          return;
        }
    
        setShowError({});   // Clear previous errors if valid
    
        dispatch(savePaymentMethodDetails(result.data));
    
        //when clicking submit navigate to confirmation page
        navigate('/checkout/confirmation');
      } 
  
      // to sync changes
      function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        setFormData({...formData , [e.target.name] : e.target.value});
      }


  return (
    <div className='flex justify-start items-start w-full sm:w-1/2 sm:mt-5 '>
        <form className='w-full p-5 custom-shadow rounded-lg flex flex-col' onSubmit={handleSubmit} autoComplete="off">
            {/* phone number */}
            <span className="flex flex-col mb-3">
              <label htmlFor="card" className="text-sm font-bold">phone</label>
              <input type="tel" id='card' placeholder='enter phone number' name="phone" value={formData.phone} onChange={handleChange} className={`border-gray-400 input-form w-full  `} required/>

              {/* show error */}
              {
                showError.phone && (
                  <span className="text-red-500 text-sm font-bold">{showError.phone[0]}</span>
                )
              }
            </span>

            {/* proceed btn */}
            <div className="flex justify-center items-center w-full">
              <button type="submit" className="bg-yellow rounded-3xl p-2 mt-5 cursor-pointer  w-[300px] ">Proceed</button>
            </div>
        </form>
    </div>
  )
}
