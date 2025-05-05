import { useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import {IUserResponseModel} from "../../models/IUserResponseModel.ts";

import UserComponent from "./UserComponent.tsx";
import {userService} from "../../services/api.service.ts";

const UsersComponent = () => {

    const [users,setUsers]= useState<IUser[]>([]);

    useEffect(() => {
    userService.getAllUsers()
            .then(({users}:IUserResponseModel)=>
                setUsers(users));
    },[]);

    return (
        <div>
            {
                users.map(user => (<UserComponent  key={user.id} user={user}/>

               ))
            }
        </div>
    );
};

export default UsersComponent;