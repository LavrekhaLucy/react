    import { urlJsonPlaceholder} from "../constants/urls.ts";
    import {IUser} from "../model/IUser.ts";
    import {IPost} from "../model/IPost.ts";
    import {IComment} from "../model/IComment.ts";


    export const userService  = {
        getAllUsers: async ():Promise<IUser[]> =>{
            return await fetch(urlJsonPlaceholder.users.allUsers)
                .then(value =>value.json())

        }
    }


    export const postService  = {
        getAllPosts: async ():Promise<IPost[]> =>{
            return await fetch(urlJsonPlaceholder.posts.allPosts)
                .then(value => value.json())

        }
    }



    export const commentService  = {
        getAllComments: async ():Promise<IComment[]> =>{
            return await fetch(urlJsonPlaceholder.comments.allComments)
                .then(value => value.json())

        }
    }







    //
    // export const userServiceDummyJSON  = {
    //     getUsersDJ: async ():Promise<IUserDummyJson[]> =>{
    //         return await fetch(urlDJ.users.allUsers)
    //             .then(value =>value.json())
    //
    //     }
    // }
    //
    // export const postServiceDummyJSON = {
    //     getAllPostsOfUserByIdDJ: async (id:number):Promise<IPostDummyJson[]> =>{
    //         return await fetch(urlDJ.posts.userDummyJSONPostsById(id))
    //             .then(value => value.json())
    //
    //     }
    // }
    //
    // export const commentServiceDummyJSON  = {
    //     getAllCommentsOfUserByIdDJ: async (id:number):Promise<ICommentDummyjson[]> =>{
    //         return await fetch(urlDJ.comments.userDummyJSONCommentsById(id))
    //             .then(value => value.json())
    //
    //     }
    // }