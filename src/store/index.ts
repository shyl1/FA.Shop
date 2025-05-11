import { configureStore } from '@reduxjs/toolkit'
import trendingProducts from "./TrendingProducts/trendingproductsSlice";
import womenCategory from "./WomenCategory/womencategoryslice";
import menCategory from "./MenCategory/mencategoryslice";
import kidsCategory from "./KidsCategory/kidscategoryslice";
import accessoricesCategory from './AccessoriesCategory/accessoriescategoryslice';
import shoeCategory from './ShoesCategory/shoecategoryslice';
import sportswearCategory from './SportswearCategory/sportswearcategoryslice';
import wishlist from './WishList/wishlistslice';
import priceFilter from './SidebarFilters/pricefilterslice';
import CartItem from './Cart/cartslice';


export const store = configureStore({
  reducer: {
    trendingProducts,
    womenCategory,
    menCategory,
    kidsCategory,
    accessoricesCategory,
    shoeCategory,
    sportswearCategory,
    wishlist,
    priceFilter,
    CartItem,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;