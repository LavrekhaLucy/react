import {createBrowserRouter} from "react-router-dom";
import Layout from "../layout/Layout.tsx";
import UsersComponent from "../components/users/UsersComponent.tsx";
import CommentsComponent from "../components/comments/CommentsComponent.tsx";
import PostsComponent from "../components/posts/PostsComponent.tsx";
import UsersDummyJson from "../components/users-dummy-json/UsersDummyJson.tsx";
import PostsDummyJson from "../components/posts-dummy-json/PostsDummyJson.tsx";
import CommentsDummyJson from "../components/comments-dummy-json/CommentsDummyJson.tsx";

export const routes = createBrowserRouter([
    {
        path: '', element: <Layout/>, children: [
            {path: 'users', element: <UsersComponent/>, children:[
                    {path: 'dummy-json', element: <UsersDummyJson/>},
                ]},
            {path: 'posts', element: <PostsComponent/>, children:[
                    {path: 'dummy-json', element: <PostsDummyJson/>},
                ]},
            {path: 'comments', element: <CommentsComponent/>,children:[
                    {path: 'dummy-json', element: <CommentsDummyJson/>},
                ]},

]

    }
])