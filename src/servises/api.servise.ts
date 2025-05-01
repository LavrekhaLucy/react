// const baseUrl = import.meta.env.VITE_BASE_URL;

export const getUsers = async <T,> ():Promise <T> => {

    return await fetch ('https://dummyjson.com/users') .then (res => res.json());


 }
 export const getPosts = async <T,> ():Promise <T> => {

    return await fetch ('https://dummyjson.com/posts') .then (res => res.json());


 }
//
//
// export const getUsers = async <T,> (endpoint:string):Promise <T> => {
//
//     return await fetch (`${baseUrl} ${endpoint}`) .then (res => res.json());
//
//
// }