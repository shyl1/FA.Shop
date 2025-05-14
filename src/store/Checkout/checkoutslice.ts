import {PersonalDetails} from '@schemas/personalDetailsSchema';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type checkoutState = {
  personalDetails: PersonalDetails | null;
  //billing: {}, 
}


const initialState: checkoutState = {
  personalDetails: null ,
  //billing: {}, 
}


const checkOutSlice = createSlice({
  name:'checkout',
  initialState,
  reducers: {
    savePersonalDetails: (state , action: PayloadAction <PersonalDetails>) => {
      state.personalDetails = action.payload;
    }
  },
});

export const {savePersonalDetails} = checkOutSlice.actions;
export default checkOutSlice.reducer;