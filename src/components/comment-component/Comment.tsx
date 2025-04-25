import {FC} from "react";
import {IComments} from "../../models/IComments.ts";

type CommentProps = {
    comment:IComments
}
export const Comment:FC<CommentProps> = ({comment:{id, name, postId, email, body }}) => {


    return (
        <div>
            <h2>{name}</h2>
            <h4>{id} {postId} {email}</h4>
            <p>{body}</p>
        </div>
    );
};