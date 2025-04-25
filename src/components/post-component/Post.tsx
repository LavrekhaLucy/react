import {IPostModel} from "../../models/IPostModel.ts";
import {FC} from "react";

type PostProps = {
    post: IPostModel
}

export const Post:FC<PostProps>= ({post: {title,id, body, userId}} ) => {
    return (
        <div>
        <h2>{title}</h2>
         <h4>{id} {userId}</h4>
         <p>{body}</p>
        </div>
    );
};