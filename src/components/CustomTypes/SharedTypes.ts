export type Product = {
  id: number;
  title: string;
  category: string;
  image: string, 
  rating:{count: number , rate: number};
  price : number;
  description: string;
};

export type Loading = "idle" | "pending" | "failed" | "succeeded";

export type responseType = {
  id: number;
  title: string;
  category: string; 
  image: string;
  rating: {count: number, rate: number};
  price: number;
  description?: string;
}

export type Category = {
  path: string;
  label: string;
};

export type categoryTypeFetch = {
  products: Product[];
  loading: Loading;
  error: null | string;
}

export const initialState : categoryTypeFetch = {
  products : [],
  loading: "idle",
  error: null,
};

export type FilterParams = {
  min?: number;
  max?:number;
}

export type cartItems = Product & {
  quantity:number;
}


export type paymentMethods = "credit" | "wallet" | "cash";