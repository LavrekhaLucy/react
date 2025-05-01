const baseUrl = import.meta.env.VITE_BASE_URL;

export const getAll = async <T,> ():Promise <T> => {

    return await fetch (`${baseUrl}/users`) .then (res => res.json());


 }
