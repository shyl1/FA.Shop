import { Cash, MasterCrad, Wallet } from '@assets/icons/svg'
import CashForm from '@components/forms/billingPageComponenets/CashForm';
import CreditCardForm from '@components/forms/billingPageComponenets/CreditCardForm';
import WalletForm from '@components/forms/billingPageComponenets/WalletForm';
import  { useEffect, useState } from 'react'

export default function Billing() {

    // to show what card is clicked by default it is credit 
  const [selected , setSelected] = useState("credit");

  //add fixed fee for cash payment
  const [fee , setFee] = useState(0);

  useEffect(()=> {
      // fee change
    if(selected === "cash"){
      setFee(5);
    } else {
      setFee(0);
    }
  }, [selected]);

  return (
    
    <section className='container flex items-center flex-col'>
      {/* payment methods*/}
      
      <div className='flex justify-between w-2/3 max-md:w-full p-2 '>

        {/* Credit Card */}
        <label htmlFor="radio-credit" className={`custom-shadow p-2 lg:p-8 flex flex-col  justify-center items-center cursor-pointer rounded-lg w-[100px] xs:w-[150px] sm:w-[200px] m-2 ${selected === "credit" ? "border-yellow-500 border-1" : ""}`}>
          <input type="radio" name="payment" id="radio-credit" className="hidden" value="credit" onChange={()=> setSelected("credit")}/>
          <MasterCrad className='w-15 h-15 sm:w-20 sm:h-20'/>
          <span className='text-center font-medium mt-2'>Credit Card</span>
        </label>

        {/* e-wallet */}
        <label htmlFor="radio-wallet"  className={`custom-shadow p-2 flex flex-col  justify-center items-center cursor-pointer rounded-lg w-[100px] xs:w-[150px] sm:w-[200px] m-2 ${selected === "wallet" ? "border-yellow-500 border-1" : ""}`}>
          <input type="radio" name="payment" id="radio-wallet" className="hidden" 
          value="wallet" onChange={()=> setSelected("wallet")}/>
          <Wallet className='w-15 h-15 sm:w-20 sm:h-20'/>
          <span className='text-center font-medium mt-3'>E-wallet</span>
        </label>


        {/* Cash  */}
        <label htmlFor="radio-cash"  className={`custom-shadow p-2 flex flex-col justify-center  items-center cursor-pointer rounded-lg w-[100px] xs:w-[150px] sm:w-[200px] m-2  ${selected === "cash" ? "border-yellow-500 border-1" : ""}`}>
          <input type="radio" name="payment" id="radio-cash" className="hidden" value="cash" onChange={()=> setSelected("cash")}/>
          <Cash className='w-15 h-15 sm:w-20 sm:h-20'/>
          <span className='text-center font-medium mt-2'>Cash on delivery</span>
        </label>
      </div>

      {/* show each form based on what card is being selected */}
      { selected === "credit" && <CreditCardForm  />}
      { selected === "wallet" && <WalletForm />}
      { selected === "cash" && <CashForm fee={fee}/>}
    </section>
  )
}
