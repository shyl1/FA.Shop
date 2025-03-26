import { createSlice } from "@reduxjs/toolkit";
import fetchWomenProducts from "./thunk/actionGetWomenCategory";
import { Product, Loading } from "@components/CustomTypes/SharedTypes";

type womenCategoryType = {
  products: Product[];
  loading: Loading;
  error: null | string;
}

const initialState : womenCategoryType ={
  products: [],
  loading: "idle",
  error: null,
}

const womenCategorySlice = createSlice({
  name:"womenCategory",
  initialState,
  reducers: {},
  extraReducers : (builder) => {
    builder.addCase(fetchWomenProducts.pending , (state)=> {
      state.loading = "pending";
      state.error = null;
    });
    // if the fecting is correct then there is data we want
    builder.addCase(fetchWomenProducts.fulfilled , (state,action) => {
      state.loading = "succeeded";
      state.products = action.payload;
    });
    // for state.error  {Type 'unknown' is not assignable to type 'string | null'}
    // we need to get the action.payload as string 
    // custom error msg
    builder.addCase(fetchWomenProducts.rejected , (state,action) => {
      state.loading ="failed";
      // a guard to make sure that the action.payload is a string
      if (action.payload && typeof action.payload === "string"){
        state.error = action.payload;
      }
    });
  },
});


export {fetchWomenProducts};
export default womenCategorySlice.reducer;