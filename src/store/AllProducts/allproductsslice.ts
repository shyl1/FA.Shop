import { Loading, Product } from "@components/CustomTypes/SharedTypes";
import { createSlice } from "@reduxjs/toolkit";
import fetchAllProducts from "./thunk/actionGetAllProducts"

type AllProductsState = {
  allProducts: Product[];
  loading: Loading;
  error: null | string;
}

const initialState : AllProductsState = {
  allProducts : [],
  loading: "idle",
  error: null,
}

const allProductsSlice = createSlice({
  name: "AllProducts",
  initialState,
  reducers: {},
  extraReducers : (builder) => {
    builder.addCase(fetchAllProducts.pending , (state)=> {
      state.loading = "pending";
      state.error = null;
    });
    // if the fecting is correct then there is data we want
    builder.addCase(fetchAllProducts.fulfilled , (state,action) => {
      state.loading = "succeeded";
      state.allProducts = action.payload;
    });
    // for state.error  {Type 'unknown' is not assignable to type 'string | null'}
    // we need to get the action.payload as string 
    // custom error msg
    builder.addCase(fetchAllProducts.rejected , (state,action) => {
      state.loading ="failed";
      // a guard to make sure that the action.payload is a string
      if (action.payload && typeof action.payload === "string"){
        state.error = action.payload;
      }
    });
  },
});


export {fetchAllProducts};
export default allProductsSlice.reducer;