import { TrashBin } from "@assets/icons/svg";
import { useAppSelector } from "@store/hooks"


export default function Wishlist() {

  const {products} = useAppSelector(state => state.wishlist);

  return (
    <section>
      <div className="container max-lg:flex max-lg:justify-center max-lg:items-center max-lg:flex-col">
          {products.map((item) => (
            <div key={item.id} className="p-4 custom-shadow rounded-2xl flex justify-between items-center w-[700px] max-md:w-[500px] max-sm:w-[300px] mb-5">
              <div className="flex items-center gap-2">
                <img src={item.image} alt={item.title} className="w-[150px] h-40 object-contain max-sm:w-[100px]" />
                <div className="flex flex-col ml-2">
                  <p className="text-sm mt-2 max-sm:text-xs max-w-[350px]">{item.title}</p>
                  <p className="text-sm font-semibold mt-5 max-sm:text-xs">${item.price}</p>
                </div>
                <div className="md:w-[100px] flex justify-center items-center">
                  <button><TrashBin className="w-10 h-10 cursor-pointer max-sm:w-6 max-sm:h-6" /></button>
                </div>
              </div>
              
            </div>
          ))}
        </div>
    </section>
  )
}
