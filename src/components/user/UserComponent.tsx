import {FC} from "react";
import {IUser} from "../../models/IUser.ts";

type UserPropsType = {
    item:IUser
};
const UserComponent:FC <UserPropsType> = ({item}) => {
    
    return (
        <div>
            <ul>
                <li>{item.username} </li>
                <li> {item.name}</li>
                <li> {item.email}</li>
            </ul>
        </div>
    );
};

export default UserComponent;