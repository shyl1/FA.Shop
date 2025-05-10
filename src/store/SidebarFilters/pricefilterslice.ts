import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type priceFlitersType = {
  priceRange : {
    min : number;
    max: number;
  },
}

const initialState : priceFlitersType = {
  priceRange : {
    min: 0,
    max: 1000,
  },
}

const priceFiltersSlice = createSlice({
  name: "priceFilter",
  initialState , 
  reducers: {
    setPriceRange : (state , action: PayloadAction<{min:number , max: number}> ) => {
      state.priceRange = action.payload;
    },
  },
});

export const {setPriceRange} = priceFiltersSlice.actions;

export default priceFiltersSlice.reducer;