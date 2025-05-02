import {FC} from "react";
import {IUser} from "../../models/IUser.ts";
import {useNavigate} from "react-router-dom";
type Props = {
    user:IUser
}

const UserComponent:FC<Props> = ({user}) => {
   const navigate = useNavigate();

    const onButtonClickNavigate = () => {
        navigate('/users' + user.id + '/carts')

    };


    return (
        <div className={'my-5'}>
            {user.username}{user.email} <button className={'border-2'} onClick={onButtonClickNavigate}>click om me</button>
        </div>
    );
};

export default UserComponent;