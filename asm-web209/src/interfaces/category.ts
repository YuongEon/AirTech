import { IProduct } from "./product";

export interface Category {
  _id: string,
  name: string,
  products?: IProduct[]
}