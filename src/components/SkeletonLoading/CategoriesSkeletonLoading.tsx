
export default function CategoriesSkeletonLoading() {
  return (
    <ul className="flex md:gap-4 justify-center items-center gap-1 sm:gap-2 text-kurale ">
          {[...Array(6)].map((_, index) => (
            <li key={index} className="bg-gray-300 animate-pulse "></li>
          ))
          }
    </ul>
  )
}
