
import {createBrowserRouter} from "react-router-dom";
import Layout from "../layouts/Layout.tsx";
import CarsPage from "../pages/CarsPage.tsx";
import CreatePage from "../pages/CreatePage.tsx";

const routes = createBrowserRouter([

    {path:'/', element:<Layout/>, children: [
        {path: 'cars', element: <CarsPage/>},
    {path: 'cars/create', element: <CreatePage/>}
        ]},
])

export default routes;