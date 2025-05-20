const baseUrl= import.meta.env.VITE_Base_URL;

export const getAll= async<T,> (endpoint:string): Promise<T> => {
    const responseResult = await fetch(`${baseUrl}${endpoint}`).then((res) => res.json());
    return responseResult as T;

}
