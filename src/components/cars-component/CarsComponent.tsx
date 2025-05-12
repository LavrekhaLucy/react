import {useEffect, useState} from "react";
import {getCars} from "../../services/api.service.ts";
import {ICar} from "../../model/model.ts";


const CarsComponent = () => {

    const [cars, setCars] = useState<ICar[]>([]);
    useEffect(() => {
        getCars().then((cars)=>{
            setCars(cars);
        })
    }, []);





    return (
        <div>
            {cars.map((car) => <div key={car.id}>{car.id}---{car.brand}---{car.year}</div>)}
        </div>
    );
};

export default CarsComponent;


