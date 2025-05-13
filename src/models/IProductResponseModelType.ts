import {IProduct} from "./IProduct.ts";

export interface IProductResponseModelType {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}