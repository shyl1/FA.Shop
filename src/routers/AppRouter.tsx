import MainLayout from '@UI/MainLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '@pages/Home'
import Wishlist from '@pages/Wishlist'
import ShoppingCart from '@pages/ShoppingCart'
import Error from '@pages/Error'
import ProductDetails from '@pages/ProductDetails'
import CategoryLayout from '@UI/CategoryLayout'
import CategoryProducts from '@pages/CategoryProducts'
import Checkout from '@pages/Checkout'


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
            path:'checkout',
            element: <Checkout />
      },
      {
        path:'category/:category',
        element : <CategoryLayout />,
        children : [
          {
          index: true,
          element: <CategoryProducts />,
          },
        ],
      },
      {
        path: 'product/:id',
        element: <ProductDetails />
      },
    ],
  },
]);


export default function AppRouter() {
  return (
    <RouterProvider router={router}/>
  )
}
