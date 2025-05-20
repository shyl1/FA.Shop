import { useAppDispatch } from "@store/hooks"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { creditCardSchema } from "@schemas/billingSchema";
import {savePaymentMethodDetails } from "@store/Checkout/checkoutslice";

export default function CreditCardForm() {

  const [formData , setFormData] = useState({
    cardNumber:"",
    name: "",
    expiry:"",
    cvv :"",
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
      const result = creditCardSchema.safeParse({...formData , method : "credit"});
  
  
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

    //function to handle card number formatting adding spaces after every 4 digits
    function formatCadtNumber(value : string){
      return value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
    }
    
    // to sync changes
    function handleChange(e: React.ChangeEvent<HTMLInputElement>){

      const {name , value} = e.target;
      let updatedValue = value;

      // if the name is card number format it
      if(name === "cardNumber"){
        updatedValue = formatCadtNumber(value);
      }
      setFormData({...formData , [name] : updatedValue});
    }

  return (
    <div className='flex justify-start items-start w-2/5 mt-5 '>
        <form className='w-full p-5 custom-shadow rounded-lg flex flex-col ' onSubmit={handleSubmit} autoComplete="off">
            {/* Card number */}
            <span className="flex flex-col mb-3">
              <label htmlFor="card" className="text-sm font-bold">Card Number</label>
              <input type="text" id='card' placeholder='---- ---- ---- ----' name="cardNumber" value={formData.cardNumber} onChange={handleChange} className={`border-gray-400  billing-input-form w-full  `} required/>

              {/* show error for card number */}
              {
                showError.cardNumber && (
                  <span className="text-red-500 text-sm font-bold">{showError.cardNumber[0]}</span>
                )
              }
            </span>

            {/* name on the card */}
            <span className="flex flex-col mb-3">
              <label htmlFor="name" className="text-sm font-bold">Name</label>
              <input type="text" placeholder='name on the card' name="name"  value={formData.name} onChange={handleChange} className={`border-gray-400  billing-input-form w-full  `} />

              {/* show error for name */}
              {
                showError.name && (
                  <span className="text-red-500 text-sm font-bold">{showError.name[0]}</span>
                )
              }
            </span>

          
            <span className="flex justify-between mb-3">
               {/* Expiration date */}
              <span className="flex flex-col mr-2">
                <label htmlFor="expiry" className="text-sm font-bold">Expiration date</label>
                <input type="month" placeholder='expiry' id="expiry" name="expiry"  value={formData.expiry} onChange={handleChange} className={`border-gray-400 billing-input-form w-[200px]`} required/>

                {/* show error for expiry */}
                {
                  showError.expiry && (
                    <span className="text-red-500 text-sm font-bold">{showError.expiry[0]}</span>
                  )
                }
              </span>

              {/* CVV */}
              <span className="flex flex-col  ">
                <label htmlFor="cvv" className="text-sm font-bold">CVV</label>
                <input type="text" placeholder='***' id='cvv' name="cvv"  value={formData.cvv} onChange={handleChange} className={`border-gray-400  billing-input-form w-[200px]`} required/>

                {/* show error for cvv */}
                {
                  showError.cvv && (
                    <span className="text-red-500 text-sm font-bold">{showError.cvv[0]}</span>
                  )
                }
              </span>
            </span>

            {/* proceed btn */}
            <button type="submit" className="bg-yellow rounded-3xl p-2 mt-5 cursor-pointer">Proceed</button>
        </form>
    </div>
  )
}
