import { useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import {IUserResponseModel} from "../../models/IUserResponseModel.ts";

import UserComponent from "./UserComponent.tsx";

const UsersComponent = () => {

    const [users,setUsers]= useState<IUser[]>([]);

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(value => value.json())
            .then(({users}:IUserResponseModel)=> setUsers(users));
    },[])




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