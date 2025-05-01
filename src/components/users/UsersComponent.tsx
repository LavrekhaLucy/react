import {IBaseResponseModel} from "../../models/IBaseResponseModel.ts";
import {IUser} from "../../models/IUser.ts";
import {getAll} from "../../servises/api.servise.ts";
import {useEffect, useState} from "react";


const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        getAll <IBaseResponseModel & {users:IUser[]}> ()

            .then(({users}) => setUsers(users));


    },[]);
    return (
        <div>
            {
                users.map((user:IUser) => <div key={user.id}> {user.username} </div>)
            }
        </div>
    );
};

export default UsersComponent;