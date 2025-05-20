import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FilterParams, normalizeProduct, responseType } from "@components/CustomTypes/SharedTypes";

// for this now i will use client side filters Local filter location cus i have fixed api 


const fetchMenProducts = createAsyncThunk("menCategory/fetchMenProducts",async (filters: FilterParams = {}, thunkAPI)=> {

  const {min = 0 , max =1000} = filters;
  
  const {rejectWithValue} = thunkAPI;

  try{
    const reponse = await axios.get<responseType[]>("https://fakestoreapi.com/products");

    const MenProducts = reponse.data.filter((product)=> product.category === "men's clothing").filter((product)=> product.price>=min && product.price <= max ).map(normalizeProduct);

    return MenProducts;
  } catch(error) {
    /* to make the axios deals with the error that axios can understand use a garud*/
    if (axios.isAxiosError(error)){
      return rejectWithValue(error.response?.data.message || error.message);
    } else {
      /* the error is not http error */
      return rejectWithValue("an Unexpected error")
    }
  }
});

export default fetchMenProducts;