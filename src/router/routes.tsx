import {createBrowserRouter} from "react-router-dom";
import Layout from "../layout/Layout.tsx";
import UsersComponent from "../components/users/UsersComponent.tsx";
import CommentsComponent from "../components/comments/CommentsComponent.tsx";
import PostsComponent from "../components/posts/PostsComponent.tsx";
import UsersDummyJson from "../components/users-dummy-json/UsersDummyJson.tsx";
import PostsDummyJson from "../components/posts-dummy-json/PostsDummyJson.tsx";

export const routes = createBrowserRouter([
    {
        path: '', element: <Layout/>, children: [
            {path: 'users', element: <UsersComponent/>},
            {path: 'posts', element: <PostsComponent/>},
            {path: 'comments', element: <CommentsComponent/>},
            {path: 'usersDJ', element: <UsersDummyJson/>},
            {path: 'postsDJ', element: <PostsDummyJson/>},
]

    }
])