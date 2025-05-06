
import { useEffect, useState } from "react";
import {userService} from "../../../servises/api.servise.ts";
import {IUser} from "../../../model/model-json-placeholder/IUser.ts";
import UserComponent from "../user-component/UserComponent.tsx";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        userService.getAllUsers()
            .then((allUsers) =>
            setUsers(allUsers));

    }, [users]);

    return (
        <div>

            <div>
                {
                    users.map((user) => <UserComponent key={user.id} item={user}/>
                    )}
            </div>
        </div>
    );
};

export default UsersComponent;
