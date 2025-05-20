import {IUser} from "../models/IUser.ts";
import {urls} from "../constants/urls.ts";
import {IPost} from "../models/IPost.ts";

export const userService  = {
    getUsers: async ():Promise<IUser[]> =>{
        return await fetch(urls.users.allUsers)
            .then(value =>value.json())

    }
}
//    export const userService={
//        getUsers:  async (_, thunkAPI) =>{
//         return await fetch(urls.users.byId)
//             .then((value) =>value.json())
//
//     }
// }
//
//



export const postService  = {
   getAllPostsOfUserById: async (id:number):Promise<IPost[]> =>{
        return await fetch(urls.posts.userPostsById(id))
            .then(value => value.json())

    }
}
