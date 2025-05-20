import {PersonalDetails} from '@schemas/personalDetailsSchema';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { paymentDetails } from "@schemas/billingSchema";

type checkoutState = {
  personalDetails: PersonalDetails | null;
  paymentMethodDetalis : paymentDetails | null;
}


const initialState: checkoutState = {
  personalDetails: null ,
  paymentMethodDetalis: null, 
}


const checkOutSlice = createSlice({
  name:'checkout',
  initialState,
  reducers: {
    savePersonalDetails: (state , action: PayloadAction <PersonalDetails>) => {
      state.personalDetails = action.payload;
    },
    savePaymentMethodDetails: (state , action: PayloadAction <paymentDetails>) => {
    state.paymentMethodDetalis = action.payload;
  },
  },
});

export const {savePersonalDetails , savePaymentMethodDetails} = checkOutSlice.actions;
export default checkOutSlice.reducer;