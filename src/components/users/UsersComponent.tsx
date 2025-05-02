import {IBaseResponseModel} from "../../models/IBaseResponseModel.ts";
import {IUser} from "../../models/IUser.ts";
import {useEffect, useState} from "react";
import {getUsers} from "../../servises/api.servise.ts";
import {UserComponent} from "../user/UserComponent.tsx";


const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        getUsers <IBaseResponseModel & {users:IUser[]}> ()

            .then(({users}) => setUsers(users));


    },[]);
    return (
        <div>
            {
                users.map((user:IUser) => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};

export default UsersComponent;