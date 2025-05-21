import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../store/store.ts";
import {usersActions} from "../../slices/UserSlice.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";

export const UsersComponent = () => {

   const dispatch = useAppDispatch();
   const users = useAppSelector(state => state.userStoreSlice.users);

    useEffect(()=>{

     dispatch(usersActions.loadUsers());
    },[]);


    return (
        <div>
            {
                users.map((user) => <UserComponent key={user.id} user = {user}/>)
            }
        </div>
    );
};