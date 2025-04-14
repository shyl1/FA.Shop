
export default function WomenSectionSkeletonLoading() {
  return (
    <section className="container mx-auto">
    <div className="flex justify-center items-center flex-col mb-5">
      <h2 className="h-2 w-3 bg-gray-300 sm:w-6 md:w-10 rounded animate-pulse mb-2"> </h2>
      <span className="h-1 w-3 bg-gray-300  sm:w-6 md:w-10 rounded animate-pulse">.</span>
    </div>


    {/* trending products */}
    <div className="mt-7">
      <div className="flex lg:grid grid-cols-5 max-sm:gap-2 gap-6 md:gap-4 overflow-x-auto p-4 max-md:p-2 overflow-y-hidden scrollbar-hide scroll-smooth snap-x snap-mandatory custom-scrollbar">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="flex flex-col gap-2 bg-gray-300 animate-pulse h-40 w-full rounded-md sm:w-1/2 md:w-full lg:w-full lg:h-52 snap-center">
            <div className="w-full h-[50px] md:h-[200px] max-md:h-[150px] max-sm:h-[100px] bg-gray-300 rounded-lg animate-pulse"></div>
              <div className="flex justify-between items-center mt-4">
                <div className="h-4 w-3/4 bg-gray-300 rounded animate-pulse"></div>
                <div className="h-4 w-8 bg-gray-300 rounded animate-pulse"></div>
              </div>
              <div className="h-4 w-12 bg-gray-300 rounded animate-pulse mt-3"></div>
            </div>
          ))}
        </div>
      </div>

  </section>
  )
}
