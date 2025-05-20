import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



const fetchAllProducts = createAsyncThunk("allProducts/fetchAllProducts" , async(_ , thunkAPI)=> {

  const {rejectWithValue} = thunkAPI;

  try{
    const response = await axios.get("https://fakestoreapi.com/products");
    const allProducts = response.data;
    console.log("Response:", response); // ✅ Add this
    console.log("Data:", response.data);
    return allProducts;
  } catch (error){
    /* to make the axios deals with the error that axios can understand use a garud*/
    if (axios.isAxiosError(error)){
      return rejectWithValue(error.response?.data.message || error.message);
    } else {
      /* the error is not http error */
      return rejectWithValue("an Unexpected error")
    }
  }
});

export default fetchAllProducts;