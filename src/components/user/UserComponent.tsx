import {IUser} from "../../models/IUser.ts";



interface UserComponentProp{
    user:IUser
}

export const UserComponent= ({user}:UserComponentProp)=> {
    return <div>
        {user.username}
    </div>;
}