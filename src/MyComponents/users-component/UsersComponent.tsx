import UserComponent from "../user-component/UserComponent.tsx";
import {IUser} from "../../models/IUser.ts";
import {useEffect, useState} from "react";
import{getUsers} from "../../servises/api.servise.ts";


 const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    const [item, setItem]=useState<IUser | null>(null);
    useEffect(() => {
        getUsers()
            .then(response => {
                setUsers (response)
            });
        return () => {
            console.log('done');
        }
    }, []);

  const foo = (item:IUser) => {
      setItem(item);
  }

    return (
        <div>
            {
                item && <div>
                    {item.id}
                    {item.name}
                    {item.username}
                    {item.email}
                    {item.phone}
                    {item.website}
                 </div>
            }
            {
                users.map( user  => <UserComponent  foo={foo} key={user.id} item = {user}/>)
            }
        </div>
    );
 };

export default UsersComponent;