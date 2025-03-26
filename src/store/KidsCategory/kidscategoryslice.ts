import { createSlice } from "@reduxjs/toolkit";
import fetchKidesProducts from "./thunk/actionGetKidsCategory";
import { Product, Loading } from "@components/CustomTypes/SharedTypes";

type kidsCategoryType  = {
  products: Product[];
  loading: Loading;
  error: null | string;
}

const initialState : kidsCategoryType = {
  products : [],
  loading: "idle",
  error: null,
};

const kidsCategorySlice = createSlice({
  name: 'kidsCategory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase( fetchKidesProducts.pending , (state)=> {
      state.loading = "pending";
      state.error = null;
    });
    // if the fecting is correct then there is data we want
    builder.addCase(fetchKidesProducts.fulfilled , (state,action) => {
      state.loading = "succeeded";
      state.products = action.payload;
    });
    // for state.error  {Type 'unknown' is not assignable to type 'string | null'}
    // we need to get the action.payload as string 
    // custom error msg
    builder.addCase(fetchKidesProducts.rejected , (state,action) => {
      state.loading ="failed";
      // a guard to make sure that the action.payload is a string
      if (action.payload && typeof action.payload === "string"){
        state.error = action.payload;
      }
    });
  }
});

export {fetchKidesProducts};
export default kidsCategorySlice.reducer;