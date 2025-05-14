import { pages } from "@Constants/index";
import { Link } from "react-router-dom";

type Props = {
  current : string;
}


export default function Breadcrumb({current}: Props) {

  // show name of pages that is already visited
  const visitedPages = pages.filter((page)=> pages.findIndex((p)=> p.name === page.name) <= pages.findIndex((p)=> p.name === current));

  return (
    <nav aria-label="Breadcrumb" className="mx-4 my-4 font-bold">
      <ol itemScope itemType="https://schema.org/BreadcrumbList" className="flex text-sm text-gray-500 space-x-2">
        {
          visitedPages.map((page , index)=> (
            <li key={index} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="flex items-center">
              {
                index < visitedPages.length -1 ? (
                  <>
                    <Link to={page.path} itemProp="item" className="hover:underline">
                      <span itemProp="name">{page.name}</span>
                    </Link>
                    <meta itemProp="position" content={`${index+1}`}/>
                    <span className="mx-2 text-gray-400">/</span>
                  </>
                ) : (
                  <>
                    <span itemProp="name" className="text-gray-500">{page.name}</span>
                    <meta itemProp="position" content={`${index+1}`}/>
                  </>
                )
              }
            </li>
          ))
        }
      </ol>
    </nav>
    
  )
}
