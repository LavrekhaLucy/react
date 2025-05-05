import {createBrowserRouter} from "react-router-dom";
import Layout from "../layouts/Layout.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import CartsPage from "../pages/CartsPage.tsx";


const routes = createBrowserRouter ([
    {
        path: "/", element: <Layout/>,
        children: [
            {
                path: 'users', element: <UsersPage/>},
            {path: 'users/:id/carts', element: <CartsPage/>}
        ]

     }
    ])



export default routes;