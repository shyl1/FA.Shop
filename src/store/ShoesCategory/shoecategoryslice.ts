import { createSlice } from "@reduxjs/toolkit";
import fetchShoeProducts from "./thunk/actionGetShoeCategory";
import { initialState } from "@components/CustomTypes/SharedTypes";


const shoeCategorySlice = createSlice({
  name: 'shoeCategory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase( fetchShoeProducts.pending , (state)=> {
      state.loading = "pending";
      state.error = null;
    });
    // if the fecting is correct then there is data we want
    builder.addCase(fetchShoeProducts.fulfilled , (state,action) => {
      state.loading = "succeeded";
      state.products = action.payload;
    });
    // for state.error  {Type 'unknown' is not assignable to type 'string | null'}
    // we need to get the action.payload as string 
    // custom error msg
    builder.addCase(fetchShoeProducts.rejected , (state,action) => {
      state.loading ="failed";
      // a guard to make sure that the action.payload is a string
      if (action.payload && typeof action.payload === "string"){
        state.error = action.payload;
      }
    });
  }
});

export {fetchShoeProducts};
export default shoeCategorySlice.reducer;