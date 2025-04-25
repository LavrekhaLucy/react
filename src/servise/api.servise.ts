import {ITodoModel} from "../models/ITodoModel.ts";

const endpointTodos=import.meta.env.VITE_API_DASE_URL +'/todos'

const loadTodos= async ():Promise<ITodoModel[]> => {

   return await fetch (endpointTodos)
       .then(value => value.json())
}
export { loadTodos };