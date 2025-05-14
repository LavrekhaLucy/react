import {FC} from "react";
import {IProduct} from "../../models/IProduct.ts";
import './AuthResourceComponent.css'

type AuthResourcePropsType={
    product:IProduct
}

export const AuthResourceComponent:FC<AuthResourcePropsType> = ({product}) => {
    return (
        <div>
            {product.id}---{product.title}---{product.brand}

            <div>
                <img src={product.images[0]} alt={product.title}/>
            </div>



        </div>
    );
};