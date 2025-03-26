import { createSlice } from "@reduxjs/toolkit";
import fetchMenProducts from "./thunk/actionGetMenCategory";
import { Product, Loading } from "@components/CustomTypes/SharedTypes";

type menCategoryType  = {
  products: Product[];
  loading: Loading ;
  error: null | string;
}

const initialState : menCategoryType = {
  products : [],
  loading: "idle",
  error: null,
};

const manCategorySlice = createSlice({
  name:"menCategory",
  initialState,
  reducers: {},
  extraReducers : (builder) => {
    builder.addCase(fetchMenProducts.pending , (state)=> {
      state.loading = "pending";
      state.error = null;
    });
    // if the fecting is correct then there is data we want
    builder.addCase(fetchMenProducts.fulfilled , (state,action) => {
      state.loading = "succeeded";
      state.products = action.payload;
    });
    // for state.error  {Type 'unknown' is not assignable to type 'string | null'}
    // we need to get the action.payload as string 
    // custom error msg
    builder.addCase(fetchMenProducts.rejected , (state,action) => {
      state.loading ="failed";
      // a guard to make sure that the action.payload is a string
      if (action.payload && typeof action.payload === "string"){
        state.error = action.payload;
      }
    });
  },
});


export {fetchMenProducts};
export default manCategorySlice.reducer;