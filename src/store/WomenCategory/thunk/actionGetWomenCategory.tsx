import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FilterParams, normalizeProduct, responseType } from "@components/CustomTypes/SharedTypes";


const fetchWomenProducts = createAsyncThunk( "womenCategory/fetchWomenProducts", async(filters: FilterParams = {} , thunkAPI)=> {

  const {min = 0 , max =1000} = filters;

  //rejectWithValue lets you send custom error data to the reducer instead of just throwing an error.
  const {rejectWithValue} = thunkAPI;

  try {
    const response = await axios.get<responseType[]>("https://fakestoreapi.com/products");

    // seclecting only the products that are in women category
    const womenProducts = response.data.filter((product)=> product.category === "women's clothing").filter((product)=> product.price>=min && product.price <= max ).map(normalizeProduct);

    return womenProducts;
  } catch (error) {
    /* to make the axios deals with the error that axios can understand use a garud*/
    if (axios.isAxiosError(error)){
      return rejectWithValue(error.response?.data.message || error.message);
    } else {
      /* the error is not http error */
      return rejectWithValue("an Unexpected error")
    }
  }
});

export default fetchWomenProducts;