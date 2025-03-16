import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import {categories} from "@Constants/index"

type responesType = {Products: {id: number , title: string ,category: string ,thumbnail: string, rating: number}[];}



const fetchTrendingProducts = createAsyncThunk("trendingProducts/fetchTrendingProducts" , async (_ , thunkAPI)=> {

  const {rejectWithValue} = thunkAPI;
  try {
    const response = await axios.get<responesType>("https://dummyjson.com/products");

    //we need to manipulate the data
    //1- we need to get products from the response 
    let products = response.data.Products;

    // we need to keep in mind if there is any missing rating for a product
    // 2- we need to filter out the categories 
    products = products.filter((product) => categories.label.includes(product.category));

    //sort by rating (get the highest rating products)
    products.sort((a,b) => b.rating - a.rating);

    //console.log(products.slice(0,6));

    //return the top 6 products
    return products.slice(0,6);
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
