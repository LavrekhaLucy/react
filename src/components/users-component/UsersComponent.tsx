import {IUser} from "../../models/IUser.ts";
import {getUsers} from "../../services/api.service.ts";
import {IResResponseModel} from "../../models/IResResponseModel.ts";
import {useEffect, useState} from "react";
import UserComponent from "../user-component/UserComponent.tsx";
import {useSearchParams} from "react-router-dom";


const UsersComponent = () => {
    const [users,setUsers]=useState<IUser[]>([]);
    const [searchParams]=useSearchParams('page');

    useEffect(() => {

        const currentPage = searchParams.get("page") || '1';
        getUsers(currentPage)
            .then( ({users}:IResResponseModel) => (setUsers(users))

            )

    },[searchParams])

    return (
        <div>
            {users.map((user:IUser) => <UserComponent key={user.id} user={user}/>) }
        </div>
    );
};

export default UsersComponent;