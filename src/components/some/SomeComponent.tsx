import {useEffect, useState} from "react";
import {getAllUsers} from "../../services/api.service.ts";
import {useSearchParams} from "react-router-dom";
import {IUser} from "../../model/IUser.ts";
import UserComponent from "../user-component/UserComponent.tsx";




const SomeComponent = () => {
    const [users,setUsers]= useState<IUser[]>([]);
    const[query]=useSearchParams();

    useEffect(() => {

        getAllUsers(query.get('pg') || '1').then(value =>
        setUsers(value.data));
    }, [query]);
    return (
        <div>
            {
                users.map((user) => <UserComponent key={user.id} item={user}/>)
            }
        </div>
    );
};

export default SomeComponent;



// import { useEffect } from "react";
// import { useSearchParams } from "react-router-dom";
//
// const SomeComponent = () => {
//     const  = useSearchParams();
//
//     useEffect(() => {
//         const pg = query.get('pg');
//         console.log('pg value:', pg);
//
//         if (!pg) {
//             console.log('Параметр pg відсутній у URL');
//             return;
//         }
//
//         console.log('Починаю запит до API...');
//         fetch(`https://reqres.in/api/users?page=${pg}`)
//             .then(response => {
//                 console.log('Статус відповіді:', response.status);
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }
//                 return response.json();
//             })
//             .then(value => {
//                 console.log('API response:', value);
//                 console.dir(value); // Детальний вивід об’єкта
//             })
//             .catch(error => {
//                 console.error('Помилка запиту:', error);
//             });
//
//         console.log('Test');
//     }, [query]);
//
//     return <div></div>;
// };
//
// export default SomeComponent;