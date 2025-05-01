import {createBrowserRouter} from "react-router-dom";
import Layout from "../layouts/Layout.tsx";
import JsonPlaceholderLayout from "../layouts/JsonPlaceholderLayout.tsx";
import UsersComponent from "../components/users/UsersComponent.tsx";
import PostsComponent from "../components/posts/PostsComponent.tsx";
import CommentsComponent from "../components/comments/CommentsComponent.tsx";
import DummyJsonLayout from "../layouts/DummyJsonLayout.tsx";
import UsersDummyJson from "../components/users-dummy-json/UsersDummyJson.tsx";
import PostsDummyJson from "../components/posts-dummy-json/PostsDummyJson.tsx";
import CommentsDummyJson from "../components/comments-dummy-json/CommentsDummyJson.tsx";

export const routes = createBrowserRouter([
    {
        path: '', element: <Layout />, children: [
            {
                path: 'JsonPlaceholder', element: <JsonPlaceholderLayout />, children: [
                    { path: 'users', element: <UsersComponent /> },
                    { path: 'posts', element: <PostsComponent /> },
                    { path: 'comments', element: <CommentsComponent /> }
                ]
            },
            {
                path: 'DummyJson', element: <DummyJsonLayout />, children: [
                    { path: 'users', element: <UsersDummyJson /> },
                    { path: 'posts', element: <PostsDummyJson /> },
                    { path: 'comments', element: <CommentsDummyJson /> }
                ]
            }
        ]
    }

]);