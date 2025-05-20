import { useNavigate } from "react-router-dom";

type props = {
  fee: number;
}
export default function CashForm({fee}: props) {

  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    // to prevent form from rendering
    e.preventDefault();
    // when clicking submit navigate to confirmation page
    navigate('/checkout/confirmation' , {state: {fee}});
  }

  return (
    <form className='flex justify-start items-center w-full sm:w-1/2 mt-5  flex-col custom-shadow p-5 rounded-lg' onSubmit={handleSubmit}>
      <span className="font-normal text-base">be prepared to have cash <span className="font-medium text-lg">{fee}$</span></span>
      <div className="flex justify-end items-end mt-5 w-full">
        <button type="submit" className="bg-yellow rounded-3xl p-3 mt-5 cursor-pointer">Proceed</button>
      </div>
    </form>
  )
}
