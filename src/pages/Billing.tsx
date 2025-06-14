import { Cash, MasterCrad, Wallet } from '@assets/icons/svg'
import CashForm from '@components/forms/billingPageComponenets/CashForm';
import CreditCardForm from '@components/forms/billingPageComponenets/CreditCardForm';
import WalletForm from '@components/forms/billingPageComponenets/WalletForm';
import { useAppSelector } from '@store/hooks';
import  { useEffect, useState } from 'react'

export default function Billing() {

  // read grand total
  const {grandTotal} = useAppSelector((state)=> state.grandTotal);

    // to show what card is clicked by default it is credit 
  const [selected , setSelected] = useState("credit");

  //add fixed fee for cash payment
  const [fee , setFee] = useState(0);

  useEffect(()=> {
      // fee change
    if(selected === "cash"){
      if(grandTotal < 1000){
        setFee(5);
      } else {
        setFee(0);
      }
    } else {
      setFee(0);
    }
  }, [selected , grandTotal]);

  return (
    
    <section className='container flex items-center flex-col '>
      {/* payment methods*/}
      
      <div className='flex justify-between sm:justify-center w-2/3 max-md:w-full ml-5 mr-5'>

        {/* Credit Card */}
        <label htmlFor="radio-credit" className={`custom-shadow p-2 lg:p-8 flex flex-col  justify-center items-center cursor-pointer rounded-lg w-[100px] sm:w-[200px] m-2 ${selected === "credit" ? "border-yellow-500 border-1" : ""}`}>
          <input type="radio" name="payment" id="radio-credit" className="hidden" value="credit" onChange={()=> setSelected("credit")}/>
          <MasterCrad className='w-10 h-10  sm:w-20 sm:h-20'/>
          <span className='text-center font-medium mt-2 max-sm:text-xs'>Credit Card</span>
        </label>

        {/* e-wallet */}
        <label htmlFor="radio-wallet"  className={`custom-shadow p-2 flex flex-col  justify-center items-center cursor-pointer rounded-lg w-[100px] sm:w-[200px] m-2 ${selected === "wallet" ? "border-yellow-500 border-1" : ""}`}>
          <input type="radio" name="payment" id="radio-wallet" className="hidden" 
          value="wallet" onChange={()=> setSelected("wallet")}/>
          <Wallet className='w-10 h-10 sm:w-20 sm:h-20'/>
          <span className='text-center font-medium mt-3 max-sm:text-xs'>E-wallet</span>
        </label>


        {/* Cash  */}
        <label htmlFor="radio-cash"  className={`custom-shadow p-2 flex flex-col justify-center  items-center cursor-pointer rounded-lg w-[100px] sm:w-[200px] m-2  ${selected === "cash" ? "border-yellow-500 border-1" : ""}`}>
          <input type="radio" name="payment" id="radio-cash" className="hidden" value="cash" onChange={()=> setSelected("cash")}/>
          <Cash className='w-10 h-10 sm:w-20 sm:h-20'/>
          <span className='text-center font-medium mt-2 max-sm:text-xs'>Cash on delivery</span>
        </label>
      </div>

      {/* show each form based on what card is being selected */}
      { selected === "credit" && <CreditCardForm  />}
      { selected === "wallet" && <WalletForm />}
      { selected === "cash" && <CashForm fee={fee}/>}
    </section>
  )
}
