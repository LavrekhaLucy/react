import {ICommentDummyJson} from "./ICommentDummyjson.ts";


export interface ICommentResponseModel {
    comments:ICommentDummyJson[];
    total: number;
    skip: number;
    limit: number;
}