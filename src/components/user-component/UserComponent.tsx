import {FC} from "react";
import {IUser} from "../../models/IUser.ts";

type UserTypeProps = {
    user:IUser;

}
const UserComponent:FC<UserTypeProps> = ({user}) => {
    return (
        <div>
            {user.id}---{user.username}
        </div>
    );
};

export default UserComponent;