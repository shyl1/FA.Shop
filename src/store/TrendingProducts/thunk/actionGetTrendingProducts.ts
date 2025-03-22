
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

type responeseType = {
  id: number;
  title: string;
  category: string;
  image: string,
  rating:{count: number , rate: number};
  price : number;
}


const fetchTrendingProducts = createAsyncThunk("trendingProducts/fetchTrendingProducts" , async (_ , thunkAPI)=> {

  const {rejectWithValue} = thunkAPI;
  try {
    const response = await axios.get<responeseType[]>("https://fakestoreapi.com/products");

    //for fake store api i am gonna filter the api from electronics
    const filterdCategory = response.data.filter((product)=> product.category !== "electronics");

  // Sort products based on rating (descending order)
  const products = filterdCategory.sort((a, b) => b.rating.rate - a.rating.rate);

  return products.slice(0, 5); // Return top 6 trending products
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

export default fetchTrendingProducts;
