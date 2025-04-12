import React from 'react'

export default function TrendingProductsSkeleton() {
  return (
    <section className="container mx-auto">
    <div className="flex justify-center items-center flex-col">
      <h2 className="text-kulim font-bold text-[15px] sm:text-[25px] md:text-[45px]">Trending Products</h2>
      <span className="text-kulim font-light text-[20px] text-gray-400 max-md:text-[10px]">best seller products.</span>
    </div>



    {/* trending products */}
    <div className="mt-7">
      <div className="flex lg:grid grid-cols-5 max-sm:gap-2 gap-6 md:gap-4 overflow-x-auto p-4 max-md:p-2 overflow-y-hidden scrollbar-hide scroll-smooth snap-x snap-mandatory custom-scrollbar">
        {Top6Products}
      </div>
    </div>

  </section>
  )
}
