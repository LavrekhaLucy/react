import {IUser} from "../../../model/IUser.ts";
import {FC} from "react";


type UserComponentProps = {
   item: IUser
}

const UserComponent:FC<UserComponentProps> = ({item} ) => {
    return (
        <div>

            <h3>{item.name}-{item.username}</h3>
            <p>{item.website}</p>
        </div>
    );
};

export default UserComponent;