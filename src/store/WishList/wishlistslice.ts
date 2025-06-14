import { Product } from "@components/CustomTypes/SharedTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// this is to handle the wishlist under 100 state
// type wishlistType = {
//   products: Product[];
// }

// for larger state management, we can use MAP Record<number, Product>[]
type wishlistType = {
  products: Record<number, Product>;
}

const initialState : wishlistType = {
  products: {},
}

const wishListSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist(state , action: PayloadAction<Product>){
      // check if the products exists in the wish list
      //const exists = state.products.find(product => product.id === action.payload.id);

      const product = action.payload;
      if(!state.products[product.id]){
        state.products[product.id]= product; 
      }
    },
    removeFromWishlist(state , action: PayloadAction<number>){
      delete state.products[action.payload];
      //state.products = state.products.filter(product => product.id !== action.payload);
    },
  },
});

export const {addToWishlist , removeFromWishlist} = wishListSlice.actions;
export default wishListSlice.reducer;