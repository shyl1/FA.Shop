import MainLayout from '@UI/MainLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '@pages/Home'
import Wishlist from '@pages/Wishlist'
import ShoppingCart from '@pages/ShoppingCart'
import Error from '@pages/Error'
import ProductDetails from '@pages/ProductDetails'
import CategoryLayout from '@UI/CategoryLayout'
import CategoryProducts from '@pages/CategoryProducts'
import CheckoutLayout from '@UI/CheckoutLayout'
import PersonalDetails from '@pages/PersonalDetails'
import Billing from '@pages/Billing'
import Confirmation from '@pages/Confirmation'


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
        element: <CheckoutLayout />,
        children : [
          {
            index: true,
            element: <PersonalDetails />
          },
          {
            path: 'billing',
            element: <Billing />
          },
          {
            path: 'confirmation',
            element: <Confirmation />
          },
        ],
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
