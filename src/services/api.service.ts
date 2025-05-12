import axios from 'axios';
import {ICar} from "../model/model.ts";


const axiosInstance = axios.create ({
    baseURL: 'http://185.69.152.209/carsAPI/v1',
    headers: {'Content-Type': 'application/json' },
});

export const getCars = async (): Promise<ICar[]> => {
    const axiosPromise =await  axiosInstance.get<ICar[]>('/cars');
    console.log(axiosPromise);
    const cars =  axiosPromise.data;
    console.log(cars);
    return cars;
};
export const addCar = async (car:ICar) => {
    await axiosInstance.post('/cars', car);
}