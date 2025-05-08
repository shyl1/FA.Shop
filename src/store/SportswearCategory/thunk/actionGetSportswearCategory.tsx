import { responseType } from "@components/CustomTypes/SharedTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



const fetchSportswearProducts = createAsyncThunk("sportswearCategory/fetchSportswearProducts", async (_ , thunkAPI)=> {
  const {rejectWithValue} = thunkAPI;
  try {
    const response = await axios.get<responseType[]>("https://fakestoreapi.com/products"); 

    return response.data.filter((product)=> product.category === "Jewelery");
  } catch(error){
    /* to make the axios deals with the error that axios can understand use a garud*/
    if (axios.isAxiosError(error)){
      return rejectWithValue(error.response?.data.message || error.message);
    } else {
      /* the error is not http error */
      return rejectWithValue("an Unexpected error")
    } 
  }   
});

export default fetchSportswearProducts;

