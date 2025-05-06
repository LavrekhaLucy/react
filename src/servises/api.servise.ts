    import {urlDummyJson, urlJsonPlaceholder} from "../constants/urls.ts";
    import {IUser} from "../model/model-json-placeholder/IUser.ts";
    import {IPost} from "../model/model-json-placeholder/IPost.ts";
    import {IComment} from "../model/model-json-placeholder/IComment.ts";
    import {IUserResponseModel} from "../model/model-dummy-json/IUserResponseModel.ts";
    import {IUserDummyJson} from "../model/model-dummy-json/IUserDummyjson.ts";
    import {IPostDummyJson} from "../model/model-dummy-json/IPostDummyjson.ts";
    import {IPostResponseModel} from "../model/model-dummy-json/IPostResponseModel.ts";
    import {ICommentResponseModel} from "../model/model-dummy-json/ICommentResponseModel.ts";
    import {ICommentDummyJson} from "../model/model-dummy-json/ICommentDummyjson.ts";

    // api.JsonPlaceholder//

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


    // api.DummyJson//

    export const userServiceDummyJson  = {
        getUsersDummyJson: async ():Promise<IUserResponseModel & {users:IUserDummyJson[]} > =>{
            return await fetch(urlDummyJson.users.allUsers)
                .then(value =>value.json())

        }
    }

    export const postServiceDummyJSON = {
        getAllPosts: async ():Promise<IPostResponseModel & {posts:IPostDummyJson[]}> =>{
            return await fetch(urlDummyJson.posts.allPosts)
                .then(value => value.json())

        }
    }

    export const commentServiceDummyJSON  = {
        getAllComments: async ():Promise<ICommentResponseModel & {comments:ICommentDummyJson[]}> =>{
            return await fetch(urlDummyJson.comments.allComments)
                .then(value => value.json())

        }
    }