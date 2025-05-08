import {IUser} from "./IUser.ts";

export interface IResResponseModel {
    users: IUser[];
    total: number;
    skip: number;
    limit: number;


}
