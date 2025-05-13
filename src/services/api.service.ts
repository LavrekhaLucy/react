
import axios from 'axios';
import {IUserWithTokensPair} from "../models/IUserWithTokensPair.ts";
import {IProduct} from "../models/IProduct.ts";
import {IProductResponseModelType} from "../models/IProductResponseModelType.ts";
import {retriveLocalStorage} from "./helpers.ts";


type LoginData = {
    username: string,
    password: string,
    expiresInMins:number
}

const axiosInstance = axios.create ({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
});

axiosInstance.interceptors.request.use((requestObject)=>{
    if(requestObject.method?.toUpperCase() === 'GET'){
        requestObject.headers.Authorization = 'Barer ' + retriveLocalStorage<IUserWithTokensPair>('user').accessToken
    }
    return requestObject;
})





export const login = async ({username,password,expiresInMins}:LoginData):Promise<IUserWithTokensPair> => {

   const {data:userWithTokens} = await axiosInstance.post<IUserWithTokensPair>('/login', {username,password,expiresInMins});
   console.log(userWithTokens);
   localStorage.setItem('user', JSON.stringify(userWithTokens));
   return userWithTokens;
}
export const loadAuthProducts = async ():Promise<IProduct[]> => {

    const {data:{products}} = await axiosInstance.get<IProductResponseModelType>('/products');
    return products
}