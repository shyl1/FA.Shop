

export default function Subscribe() {
  return (
    
    <section className="container mx-auto">
      <div className="flex justify-center items-center gap-4 md:gap-8">
        <form className="flex justify-between items-center md:w-[500px] md:h-12 rounded-2xl shadow-lg  ">
          <input type="text" placeholder="subscribe" className="w-full outline-0 h-full shadow-2xl p-2"/>
          <button type="button" className="bg-blacke text-white p-2 flex justify-center items-center md:w-[80px] md:h-full rounded-2xl">Subscribe</button>
        </form>
      </div>

    </section>
  )
}
