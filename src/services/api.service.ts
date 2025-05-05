import {IUserResponseModel} from "../models/IUserResponseModel.ts";
import {ICartResponseModel} from "../models/ICartResponseModel.ts";

const baseUrl =import.meta.env.VITE_BASE_URL

export const userService = {

    getAllUsers:  async ():Promise<IUserResponseModel> => {
        return await fetch (baseUrl+'/users')
        .then(value => value.json());
    }
};

export const cartService = {
    getCartOfUser: async (userId:string):Promise<ICartResponseModel> => {
        return await fetch(baseUrl+'/carts/user/'+userId )
            .then(value => value.json());
    }
}