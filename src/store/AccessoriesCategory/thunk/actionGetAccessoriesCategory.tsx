import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { responseType } from "@components/CustomTypes/SharedTypes";


const fetchAccessoriesProducts = createAsyncThunk("kidsCategory/fetchKidsProducts", async (_ , thunkAPI) => {
  const {rejectWithValue} = thunkAPI;
  try {
    const response = await axios.get<responseType[]>("https://fakestoreapi.com/products");

    return response.data.filter((product)=> product.category === "men's clothing");;
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

export default fetchAccessoriesProducts;