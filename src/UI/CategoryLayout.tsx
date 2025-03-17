import SideBar from "@components/shared/SideBar";
import ProductGrid from "@components/shared/ProductGrid";
import { useParams } from "react-router-dom";
export default function CategoryLayout() {

  const {category} = useParams<{category : string}>();
  return (
    <main className="flex">
      <SideBar />

      <div className="flex-grow">
        <ProductGrid category={category}/>
      </div>
      
    </main>
  )
}
