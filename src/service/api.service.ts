import {IProducts} from "../models/IProducts.ts";
import {ProductsResponseDummyJson} from "../models/ProductsResponseDummyJson.ts";

const endpointProducts = import.meta.env.VITE_API_URL +'/products';

const loadProducts = async ():Promise<IProducts[]> => {

    const responce: ProductsResponseDummyJson = await fetch(endpointProducts)
    .then(value => value.json());

    return responce.products;
}

export { loadProducts };