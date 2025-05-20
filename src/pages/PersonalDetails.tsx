import { personalDetailsSchema } from "@schemas/personalDetailsSchema";
import { savePersonalDetails } from "@store/Checkout/checkoutslice";
import { useAppDispatch } from "@store/hooks"
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function PersonalDetails() {

  const [formData , setFormData] = useState({
    firstName:"",
    lastName: "",
    email:"",
    phone :"",
    address: "",
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
    const result = personalDetailsSchema.safeParse({...formData});


    //check if there is any error
    if(!result.success){
      const errors = result.error.flatten().fieldErrors; // show errors
      setShowError(errors);
      return;
    }

    setShowError({});   // Clear previous errors if valid

    dispatch(savePersonalDetails(result.data));

    //when clicking submit navigate to billing page
    navigate('/checkout/billing');
  } 
  
  // to sync changes
  function handleChange(e: React.ChangeEvent<HTMLInputElement>){
    setFormData({...formData , [e.target.name] : e.target.value});
  }

  return (
    <section className="max-w:[1280px] my-15 flex items-center flex-col">
      <form onSubmit={handleSubmit} className="custom-shadow p-5 w-[850px] flex flex-col gap-3 rounded-2xl ">

        <div className="flex justify-between">
          {/* first name */}
          <span className="flex flex-col">
            <label htmlFor="first" className="text-sm font-bold">First Name</label>
            <input type="text" placeholder="first name" name="firstName" value={formData.firstName} onChange={handleChange} id="first" className={`input-form ${showError.firstName ? "border-red-500" : "border-gray-400"}`} required/>

            {/* show first name error below */}
            {showError.firstName && (
              <span className="text-red-500 text-xs mt-1">{showError.firstName[0]}</span>
            )}
          </span>

          {/* last name */}
          <span className="flex flex-col">
            <label htmlFor="last"  className="text-sm font-bold">Last Name</label>
            <input type="text" placeholder="last name" name="lastName" value={formData.lastName} onChange={handleChange} id="last"  className={`input-form ${showError.lastName ? "border-red-500" : "border-gray-400"}`} required/>

            {/* show last name error below */}
            {showError.lastName && showError.phone.length > 0 && (
              <span className="text-red-500 text-xs mt-1">{showError.lastName[0]}</span>
            )}
          </span>
        </div>

        <div className="flex justify-between">
          {/* email */}
          <span className="flex flex-col">
            <label htmlFor="email"  className="text-sm font-bold">E-mail</label>
            <input type="email" placeholder="e-mail" name="email" value={formData.email} onChange={handleChange} id="email"  className={`input-form ${showError.email ? "border-red-500" : "border-gray-400"}`} required/>

            {/* show invalid email error below */}
            {showError.email && (
              <span className="text-red-500 text-xs mt-1">{showError.email[0]}</span>
            )}
          </span>

          {/* phone */}
          <span  className="flex flex-col">
            <label htmlFor="phone" className="text-sm font-bold">Phone</label>
            <input type="text" placeholder="phone" name="phone" id="phone" value={formData.phone} onChange={handleChange} className={`input-form ${showError.phone ? "border-red-500" : "border-gray-400"}`} required/>

            {/* show length of phone error below */}
            {showError.phone && (
              <span className="text-red-500 text-xs mt-1">{showError.phone[0]}</span>
            )}
          </span>
        </div>

        {/* address */}
        <div className="flex flex-col">
          <label htmlFor="address" className="text-sm font-bold">Address</label>
          <input type="text"  placeholder="region , state , city , street name , house number and apartment" name="address" id="address" className={`border-2  outline-0 p-2 rounded ${showError.address ? "border-red-400" : "border-gray-400"}`} onChange={handleChange} value={formData.address} required/>
          {/* show address error below */}
            {showError.address && (
              <span className="text-red-500 text-xs mt-1">{showError.address[0]}</span>
            )}
        </div>

        {/* next btn */}
        <div className="flex items-center justify-center">
          <button type="submit" className="my-5 py-2 px-3 bg-yellow w-[300px] flex items-center justify-center cursor-pointer rounded font-bold text-xl">Next</button>
        </div>

        
      </form>
    </section>
  )
}
