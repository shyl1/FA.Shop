import { createSlice } from "@reduxjs/toolkit";

type GrandTotalState = {
  grandTotal: number;
}

const initialState : GrandTotalState= {
  grandTotal: 0,
}

const GrandTotalSlice = createSlice({
  name: "grandTotal",
  initialState,
  reducers: {
    setGrandTotal: (state, action) => {
      state.grandTotal = action.payload;
    },
    resetGrandTotal: (state) => {
      state.grandTotal = 0;
    },
  },
});


export const { setGrandTotal, resetGrandTotal } = GrandTotalSlice.actions;
export default GrandTotalSlice.reducer;