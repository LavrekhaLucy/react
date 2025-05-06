import {IUser} from "../../model/IUser.ts";
import {FC} from "react";

type PropsType = {
    item:IUser
}

const UserComponent:FC<PropsType> = ({item}) => {
    return (
        <div>
            <h3>{item.first_name}{item.last_name}</h3>
            <img src={item.avatar} alt={item.first_name}/>
        </div>
    );
};

export default UserComponent;
