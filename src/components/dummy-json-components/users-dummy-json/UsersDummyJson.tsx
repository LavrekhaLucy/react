import {useEffect, useState} from "react";
import { userServiceDummyJson} from "../../../servises/api.servise.ts";
import {IUserDummyJson} from "../../../model/model-dummy-json/IUserDummyjson.ts";
import UserDummyJson from "../user-component/UserDummyJson.tsx";


const UsersDummyJson = () => {
    const [users, setUsers] = useState<IUserDummyJson[]>([]);

    useEffect(() => {
        userServiceDummyJson.getUsersDummyJson()
            .then(({users}) =>
                setUsers(users));

    }, []);

    return (
        <div>

            <div>
                {
                    users.map((user) => <UserDummyJson key={user.id} item={user}/>
                    )}
            </div>
        </div>
    );
};
export default UsersDummyJson;