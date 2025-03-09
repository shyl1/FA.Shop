import MainLayout from '@UI/MainLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '@pages/Home'
import Wishlist from '@pages/Wishlist'
import ShoppingCart from '@pages/ShoppingCart'
import Error from '@pages/Error'
// import Categories from '@components/shared/Categories'
// import CategoryProducts from '@pages/CategoryProducts'
// import ProductDetails from '@pages/ProductDetails'
import Women from '@pages/categories/Women'
import Men from '@pages/categories/Men'
import Kids from '@pages/categories/Kids'
import Shoes from '@pages/categories/Shoes'
import Accessories from '@pages/categories/Accessories'
import Sportswear from '@pages/categories/Sportswear'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    errorElement:<Error />,
    children: [
      {
        index: true,
        element: <Home />,

      }, 
      {
        path : 'wishlist',
        element:<Wishlist />,
      },
      {
        path:'shopping-cart',
        element: <ShoppingCart />,
      },
      {
        path:'women',
        element:<Women/>,
      },
      {
        path:'men',
        element:<Men/> ,
      },
      {
        path:'kids',
        element:<Kids/> ,
      },
      {
        path:'shoes',
        element:<Shoes/> ,
      },
      {
        path:'accessories',
        element:<Accessories/> ,
      },
      {
        path:'sportswear',
        element:<Sportswear />,
      },
    ],
  },
]);


export default function AppRouter() {
  return (
    <RouterProvider router={router}/>
  )
}
