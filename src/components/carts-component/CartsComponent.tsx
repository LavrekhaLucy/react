import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {ICart} from "../../models/ICart.ts";
import {ICartResponseModel} from "../../models/ICartResponseModel.ts";
import CartComponent from "./CartComponent.tsx";


const CartsComponent = () => {
    const {id} = useParams();
    const [carts,setCarts]= useState<ICart[]>([]);

    useEffect(() => {
        fetch('https://dummyjson.com/carts/user'+id)
            .then(value => value.json())
            .then(({carts}:ICartResponseModel)=> setCarts(carts));
    },[id])




    return (
        <div>
            {
                carts.map(cart => (<CartComponent  key={cart.id} cart={cart}/>

                ))
            }
        </div>
    );
};

export default CartsComponent;