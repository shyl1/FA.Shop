import {createSlice} from "@reduxjs/toolkit"
import fetchTrendingProducts from "./thunk/actionGetTrendingProducts";

type trendingProductsType = {
  Products: {id: number , title: string ,category: string ,thumbnail: string, rating: number}[];
  laoding : "idle" | "pending" | "failed" | "succeeded";
  error: null | string;
}

const initialState : trendingProductsType = {
  Products: [],
  laoding : "idle",
  error: null,
}


const trendingproductsSlice = createSlice({
  name:"trendingProducts",
  initialState,
  reducers: {},
  extraReducers: (builder)=> {
    builder.addCase(fetchTrendingProducts.pending , (state) => {
      state.laoding = "pending";
      state.error = null ;
    });
    //if the fetching is correct then there is data we want 
    builder.addCase(fetchTrendingProducts.fulfilled , (state , action) => {
      state.laoding = "succeeded";
      state.Products = action.payload;
    });
    // for state.error  {Type 'unknown' is not assignable to type 'string | null'}
    // we need to get the action.payload as string 
    builder.addCase(fetchTrendingProducts.rejected , (state , action) => {
      state.laoding = "failed";
      // a guard
      if (action.payload && typeof action.payload === "string"){
        // load the data
        state.error = action.payload ;
      }
      
    });
  },
});

export {fetchTrendingProducts};
export default trendingproductsSlice.reducer;