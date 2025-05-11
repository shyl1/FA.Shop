import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FilterParams, responseType } from "@components/CustomTypes/SharedTypes";


const fetchShoeProducts = createAsyncThunk("kidsCategory/fetchKidsProducts", async (filters: FilterParams = {}, thunkAPI) => {
  const {min = 0 , max =1000} = filters;
  const {rejectWithValue} = thunkAPI;
  try {
    const response = await axios.get<responseType[]>("https://fakestoreapi.com/products");

    const shoesProducts = response.data.filter((product)=> product.category === "men's clothing").filter((product)=> product.price>=min && product.price <= max );
    return shoesProducts;
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

export default fetchShoeProducts;