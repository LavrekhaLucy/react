import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage.tsx";
import CommentsPage from "../pages/CommentsPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import ProductsPage from "../pages/ProductsPage.tsx";
import UsersPage from "../pages/UsersPage.tsx";

export const routes = createBrowserRouter( [

        {
                path: '/', element: <HomePage/>, children: [
                        {path: 'comments', element: <CommentsPage/>},
                        {path: 'posts', element: <PostsPage/>},
                        {path: 'products', element: <ProductsPage/>},
                        {path: 'users', element: <UsersPage/>},]
}
]);