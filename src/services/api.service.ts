import {IReqResinResponseModel} from "../model/IReqResinResponseModel.ts";

export const getAllUsers =async (pg:string):Promise<IReqResinResponseModel> => {
    return await fetch('https://reqres.in/api/users?page='+pg)
        .then(value => value.json())
};

