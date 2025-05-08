import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "@components/CustomTypes/SharedTypes";
import fetchSportswearProducts from "./thunk/actionGetSportswearCategory";

const sportswearCategorySlice = createSlice({
  name: 'sportswearCategory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase( fetchSportswearProducts.pending , (state)=> {
      state.loading = "pending";
      state.error = null;
    });
    // if the fecting is correct then there is data we want
    builder.addCase(fetchSportswearProducts.fulfilled , (state,action) => {
      state.loading = "succeeded";
      state.products = action.payload;
    });
    // for state.error  {Type 'unknown' is not assignable to type 'string | null'}
    // we need to get the action.payload as string 
    // custom error msg
    builder.addCase(fetchSportswearProducts.rejected , (state,action) => {
      state.loading ="failed";
      // a guard to make sure that the action.payload is a string
      if (action.payload && typeof action.payload === "string"){
        state.error = action.payload;
      }
    });
  }
});

export {fetchSportswearProducts};
export default sportswearCategorySlice.reducer;