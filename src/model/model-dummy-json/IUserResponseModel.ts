import {IUserDummyJson} from "./IUserDummyjson.ts";


export interface IUserResponseModel {
    users: IUserDummyJson[];
    total: number;
    skip: number;
    limit: number;
}