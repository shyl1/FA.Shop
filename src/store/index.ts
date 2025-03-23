import { configureStore } from '@reduxjs/toolkit'
import trendingProducts from "./TrendingProducts/trendingproductsSlice";
import womenCategory from "./WomenCategory/womencategoryslice";
import menCategory from "./MenCategory/mencategoryslice";
import kidsCategory from "./KidsCategory/kidscategoryslice";

export const store = configureStore({
  reducer: {
    trendingProducts,
    womenCategory,
    menCategory,
    kidsCategory,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;