import {IPostDummyJson} from "./IPostDummyjson.ts";


export interface IPostResponseModel {
    posts: IPostDummyJson[];
    total: number;
    skip: number;
    limit: number;
}