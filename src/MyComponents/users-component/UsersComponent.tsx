import UserComponent from "../user-component/UserComponent.tsx";
import {IUser} from "../../models/IUser.ts";
import {useEffect, useState} from "react";
import{getUsers} from "../../servises/api.servise.ts";


 const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        getUsers()
            .then(response => {
                setUsers (response)
            });
        return () => {
            console.log('done');
        }
    }, []);



    return (
        <div>
            {
                users.map( user  => <UserComponent key={user.id} item = {user}/>)
            }
        </div>
    );
 };

export default UsersComponent;