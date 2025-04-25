import {IComments} from "../models/IComments.ts";


const endpointComments = import.meta.env.VITE_API_URL + '/comments';

const loadComments = async ():Promise <IComments[]> =>{

    return await fetch(endpointComments).then(value =>value.json());
}
export { loadComments };