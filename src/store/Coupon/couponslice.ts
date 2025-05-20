import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a single coupon's structure
type Coupon = {
  type: "fixed" | "percent";
  value: number;
};

// Define the slice state
type CouponState = {
  appliedCode: Coupon | null;
};


const initialState: CouponState = {
  appliedCode: null,
};

const couponSlice = createSlice({
  name: "coupon",
  initialState,
  reducers : {
    applyCode : (state , action: PayloadAction<Coupon>)=> {
      state.appliedCode = action.payload;
    },
    resetCode : (state)=> {
      state.appliedCode = null;
    },
  },
});


export const {applyCode, resetCode } = couponSlice.actions;
export default couponSlice.reducer;