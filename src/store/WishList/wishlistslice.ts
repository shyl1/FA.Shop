import { Product } from "@components/CustomTypes/SharedTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type wishlistType = {
  products: Product[];
}

const initialState : wishlistType = {
  products: [],
}

const wishListSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist(state , action: PayloadAction<Product>){
      // check if the products exists in the wish list
      const exists = state.products.find(product => product.id === action.payload.id);
      if (!exists){
        state.products.push(action.payload);
      }
    },
    removeFromWishlist(state , action: PayloadAction<number>){
      state.products = state.products.filter(product => product.id !== action.payload);
    },
  },
});

export const {addToWishlist , removeFromWishlist} = wishListSlice.actions;
export default wishListSlice.reducer;