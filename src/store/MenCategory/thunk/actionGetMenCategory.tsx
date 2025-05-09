import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { responseType } from "@components/CustomTypes/SharedTypes";

const fetchMenProducts = createAsyncThunk("menCategory/fetchMenProducts",async (_ , thunkAPI)=> {

  const {rejectWithValue} = thunkAPI;

  try{
    const reponse = await axios.get<responseType[]>("https://fakestoreapi.com/products");

    const MenProducts = reponse.data.filter((product)=> product.category === "men's clothing");

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