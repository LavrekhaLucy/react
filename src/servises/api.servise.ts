    import {urls, urlDJ} from "../constants/urls.ts";
    import {IUser} from "../model/IUser.ts";
    import {IPost} from "../model/IPost.ts";
    import {IComment} from "../model/IComment.ts";
    import {IUserDummyJson} from "../model/IUserDummyjson.ts";
    import {IPostDummyJson} from "../model/IPostDummyjson.ts";

    export const userService  = {
        getUsers: async ():Promise<IUser[]> =>{
            return await fetch(urls.users.allUsers)
                .then(value =>value.json())

        }
    }

    export const postService  = {
        getAllPostsOfUserById: async (id:number):Promise<IPost[]> =>{
            return await fetch(urls.posts.userPostsById(id))
                .then(value => value.json())

        }
    }

    export const commentService  = {
        getAllCommentsOfUserById: async (id:number):Promise<IComment[]> =>{
            return await fetch(urls.comments.userCommentsById(id))
                .then(value => value.json())

        }
    }
    export const userServiceDummyJSON  = {
        getUsers: async ():Promise<IUserDummyJson[]> =>{
            return await fetch(urlDJ.users.allUsers)
                .then(value =>value.json())

        }
    }
    export const postServiceDummyJSON = {
        getAllPostsOfUserById: async (id:number):Promise<IPostDummyJson[]> =>{
            return await fetch(urlDJ.posts.userDummyJSONPostsById(id))
                .then(value => value.json())

        }
    }