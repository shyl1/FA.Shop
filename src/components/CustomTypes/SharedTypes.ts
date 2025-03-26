export type Product = {
  id: number;
  title: string;
  category: string;
  image: string, 
  rating:{count: number , rate: number};
  price : number;
};

export type Loading = "idle" | "pending" | "failed" | "succeeded";

export type responseType = {
  id: number;
  title: string;
  category: string; 
  image: string;
  rating: {count: number, rate: number};
  price: number;
}