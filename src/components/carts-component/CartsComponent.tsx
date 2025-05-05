import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {ICart} from "../../models/ICart.ts";
import {ICartResponseModel} from "../../models/ICartResponseModel.ts";
import CartComponent from "./CartComponent.tsx";
import {cartService} from "../../services/api.service.ts";


const CartsComponent = () => {
    const {id} = useParams();
    const [carts,setCarts]= useState<ICart[]>([]);

    useEffect(() => {
      if(id){
          cartService.getCartOfUser(id)
              .then(({carts}:ICartResponseModel)=> setCarts(carts));
      }
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