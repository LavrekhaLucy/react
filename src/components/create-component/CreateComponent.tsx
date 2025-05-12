import {useForm} from "react-hook-form";
import {ICar} from "../../model/model.ts";
import {addCar} from "../../services/api.service.ts";
import carValidator from "../../validator/carValidator.ts";
import {joiResolver} from "@hookform/resolvers/joi";



const CreateComponent = () => {
    const {register,formState:{errors},handleSubmit } = useForm<ICar>({
        mode:'all',
        resolver: joiResolver(carValidator)
    });

    const createHandler = (data:ICar) => {
       addCar(data);
        console.log(data);
    }


    return (
        <div>
            <form onSubmit={handleSubmit(createHandler)}>
                <div>
                    <input type="text"{...register('brand')} />
                    <div>{errors.brand?.message}</div>
                </div>
                <div>
                    <input type="number"{...register('price')} />
                    <div>{errors.price?.message}</div>
                </div>
                <div>
                    <input type="number"{...register('year')} />
                    <div>{errors.year?.message}</div>
                </div>
                <button> Save car</button>
            </form>

        </div>
    );
};

export default CreateComponent;