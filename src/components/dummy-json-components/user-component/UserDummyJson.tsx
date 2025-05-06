import {IUserDummyJson} from "../../../model/model-dummy-json/IUserDummyjson.ts";
import {FC} from "react";

type UserTypeDummyJsonProps = {
    item: IUserDummyJson
}

const UserDummyJson:FC<UserTypeDummyJsonProps> = ({item}) => {
    return (
        <div>
            <h3>{item.firstName}{item.lastName}</h3>
            <p>{item.email}</p>
            <img src={item.image} alt={item.firstName}/>
        </div>
    );
};

export default UserDummyJson;