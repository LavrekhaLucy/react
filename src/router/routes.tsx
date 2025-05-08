
import {createBrowserRouter} from "react-router-dom";
import UsersPage from "../pages/UsersPage.tsx";

const routes = createBrowserRouter([
    {path:'/', element:<UsersPage/>}

]);

export default routes;