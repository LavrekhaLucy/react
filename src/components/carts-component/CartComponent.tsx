import {FC} from "react";
import {ICart} from "../../models/ICart.ts";
type Props = {
    cart:ICart
}

const CartComponent:FC<Props> = ({cart}) => {

    return (
        <div >
            {cart.total}
        </div>
    );
};


export default CartComponent;