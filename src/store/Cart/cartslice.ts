import { cartItems } from "@components/CustomTypes/SharedTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type cartType = {
  items : cartItems[];
}

const initialState : cartType = {
  items : [],
}
const cartSlice = createSlice({
  name:'CartItem',
  initialState, 
  reducers: {
    addToCart: (state , action : PayloadAction<cartItems>)=> {
      const existing = state.items.find((item)=> item.id === action.payload.id);

      if(existing){
        existing.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeFromCart: (state , action: PayloadAction<number>)=> {
      state.items = state.items.filter((item)=> item.id !== action.payload);
    }, 
    updateQuantity: (state , action: PayloadAction<{id :number ,quantity: number }>)=> {
      return {
        ...state,
        items:state.items.map((item)=> item.id === action.payload.id ? {...item , quantity: action.payload.quantity} : item),
      };
    },
    clearCart: (state)=> {
      return{...state,items:[]};
    },
  },
});


export const {addToCart , removeFromCart , updateQuantity , clearCart} = cartSlice.actions;
export default cartSlice.reducer;