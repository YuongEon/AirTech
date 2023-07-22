import { IProduct } from "./product";

export interface Brand {
  _id: string,
  name: string,
  products?: IProduct[]
}