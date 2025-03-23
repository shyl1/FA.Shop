import { footerLinks } from "@Constants/index";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full h-[300px] bg-blacke mt-7 md:mt-11">
      <div className="container mx-auto p-5 mt-5"> 
        <Link to="/" className="text-bague max-xxxs:text-[12px] max-xxs:text-[15px] text-[20px] sm:text-[25px] text-kurale"><span className="text-yellow">FA.</span>Shop</Link>
      </div>

      <div className="container mx-auto p-5 grid grid-cols-3 gap-4">
      {
        footerLinks.map((item)=> (
          <div key={item.id} className="flex flex-col  text-white items-left">
            {
              item.links.map((link , indx)=> (
                <p key={indx} className="text-[10px] sm:text-sm mt-1"> {link.label || link.address || link.email || link.phone}  </p>
              ))
            }
            
          </div>
        ))
      }
      </div>
    </footer>
  )
}
