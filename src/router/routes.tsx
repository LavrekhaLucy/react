import {createBrowserRouter} from "react-router-dom";
import Layout from "../layouts/Layout.tsx";
import UsersJsonPage from "../pages/UsersJsonPage.tsx";
import UsersDummyPage from "../pages/UsersDummyPage.tsx";
import PostsJsonPage from "../pages/PostsJsonPage.tsx";
import PostsDummyPage from "../pages/PostsDummyPage.tsx";
import CommentsJsonPage from "../pages/CommentsJsonPage.tsx";
import CommentsDummyPage from "../pages/CommentsDummyPage.tsx";
import UsersChildrenLayout from "../layouts/UserChildrenLayout.tsx";
import PostsChildrenLayout from "../layouts/PostsChildrenLayout.tsx";
import CommentsChildrenLayout from "../layouts/CommentsChildrenLayout.tsx";



export const routes = createBrowserRouter([
    {
        path: '', element: <Layout/>,
        children: [

            {path:'users', element:<UsersChildrenLayout/>, children:[

                    {path: 'JsonPlaceholder', element:<UsersJsonPage/>},
                    {path:'DummyJson', element: <UsersDummyPage/>}
                ]},
            {path:'posts', element:<PostsChildrenLayout/>, children:[
                    {path: 'JsonPlaceholder', element:<PostsJsonPage/>},
                    {path:'DummyJson', element: <PostsDummyPage/>}
                ]},
            {path:'comments', element:<CommentsChildrenLayout/>, children:[
                    {path: 'JsonPlaceholder', element:<CommentsJsonPage/>},
                    {path:'DummyJson', element: <CommentsDummyPage/>}
                ]},
        ]
    }

]);