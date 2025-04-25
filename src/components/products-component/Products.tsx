import "./Products.css"
import {useEffect, useState} from "react";
import {IProducts} from "../../models/IProducts.ts";
import {loadProducts} from "../../service/api.service.ts";
import {Product} from "../product-component/Product.tsx";

export const Products = () => {

    const [products, setProducts] = useState <IProducts [] > ([])
    useEffect(() => {

        loadProducts() .then(value => setProducts(value));

    }, []);


    return (
       < div>

           {
               products.map ((product) => (<Product product={product} key={product.id}/>))
            }
       </div>
    );
};