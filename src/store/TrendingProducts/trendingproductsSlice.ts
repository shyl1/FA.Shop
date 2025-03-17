import {createSlice} from "@reduxjs/toolkit"
import fetchTrendingProducts from "./thunk/actionGetTrendingProducts";

type Product = {
  id: number;
  title: string;
  category: string;
  image: string, 
  rating:{count: number , rate: number};
  price : number;
};

type trendingProductsType = {
  products: Product[];
  loading : "idle" | "pending" | "failed" | "succeeded";
  error: null | string;
}

const initialState : trendingProductsType = {
  products: [],
  loading : "idle",
  error: null,
}


const trendingproductsSlice = createSlice({
  name:"trendingProducts",
  initialState,
  reducers: {},
  extraReducers: (builder)=> {
    builder.addCase(fetchTrendingProducts.pending , (state) => {
      state.loading = "pending";
      state.error = null ;
    });
    //if the fetching is correct then there is data we want 
    builder.addCase(fetchTrendingProducts.fulfilled , (state , action) => {
      state.loading = "succeeded";
      state.products = action.payload;
    });
    // for state.error  {Type 'unknown' is not assignable to type 'string | null'}
    // we need to get the action.payload as string 
    builder.addCase(fetchTrendingProducts.rejected , (state , action) => {
      state.loading = "failed";
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