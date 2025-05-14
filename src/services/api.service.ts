
import axios from 'axios';
// Імпортує бібліотеку Axios, яка дозволяє робити HTTP-запити (GET, POST тощо).

import {IUserWithTokensPair} from "../models/IUserWithTokensPair.ts";
// Імпортує тип (інтерфейс) для користувача з токенами після авторизації.

import {IProduct} from "../models/IProduct.ts";
// Тип, що описує один продукт.

import {IProductResponseModelType} from "../models/IProductResponseModelType.ts";
// Тип для відповіді API, яка містить масив продуктів.

import {retriveLocalStorage} from "./helpers.ts";
// Імпорт утиліти, яка читає дані з localStorage (ймовірно з JSON.parse() і типізацією).


type LoginData = {
    username: string,
    password: string,
    expiresInMins:number
}
// Тип даних, які передаються при логіні.


const axiosInstance = axios.create ({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
});
// Створюється окремий інстанс axios з базовим шляхом /auth.
// Усі запити цього інстансу будуть автоматично звертатися до https://dummyjson.com/auth/....


axiosInstance.interceptors.request.use((requestObject)=>{
    // Додаємо interceptor — функцію, яка виконується перед кожним запитом.


    if(requestObject.method?.toUpperCase() === 'GET'){
        // Якщо метод запиту — GET (наприклад, для loadAuthProducts)


        requestObject.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokensPair>('user').accessToken
    }
    // Додаємо токен авторизації з localStorage до заголовків (headers.Authorization).
    // Префікс Bearer обов’язковий для правильного формату.

    return requestObject;
    // Повертаємо модифікований запит, який тепер має заголовок авторизації.
})





export const login = async ({username,password,expiresInMins}:LoginData):Promise<IUserWithTokensPair> => {
    // Асинхронна функція, яка надсилає POST-запит для логіну.

   const {data:userWithTokens} = await axiosInstance.post<IUserWithTokensPair>('/login', {username,password,expiresInMins});
    // Виконує POST-запит на https://dummyjson.com/auth/login з тілом-запитом.
    //  У відповідь приходить об'єкт типу IUserWithTokensPair.
    //

   console.log(userWithTokens);
    // Виводить результат в консоль (для перевірки).

   localStorage.setItem('user', JSON.stringify(userWithTokens));
    // Зберігає токен і дані користувача у localStorage.


   return userWithTokens;
    // Повертає об’єкт із токенами — можливо, для збереження у глобальному стані або передачі в інший компонент.
}
export const loadAuthProducts = async ():Promise<IProduct[]> => {
    // Функція, яка завантажує продукти з API.

    const {data:{products}} = await axiosInstance.get<IProductResponseModelType>('/products');
    // Виконує GET-запит на https://dummyjson.com/auth/products


    return products;
    // Повертає масив продуктів.

}