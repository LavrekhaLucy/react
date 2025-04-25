import {IProducts} from "./IProducts.ts";

export interface ProductsResponseDummyJson {
  products:IProducts[];
  total: number;
  skip: number;
  limit: number;
}