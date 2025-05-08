import {IResResponseModel} from "../models/IResResponseModel.ts";
import {url} from "../constants/Url.ts";




export const getUsers = async(page:string):Promise<IResResponseModel> =>  {
    const limit=30;
    const skip = limit*(+page)-limit;
    return  await fetch(url+'/users'+'?skip='+skip)
        .then(response => response.json())

}

