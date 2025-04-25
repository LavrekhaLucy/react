import {FC} from "react";
import {IProducts} from "../../models/IProducts.ts";

type PropTypeProduct = {
    product: IProducts;
};
export const Product:FC<PropTypeProduct> = ({product:{id, price, title, availabilityStatus, brand, description}}) => {
    return (
        <div>
            <h3>{id} {title} {brand}</h3>
            <h4> {price}USD </h4>
            <p className='status'> {availabilityStatus}</p>
            <p className='description'> {description}</p>

        </div>
    );
};