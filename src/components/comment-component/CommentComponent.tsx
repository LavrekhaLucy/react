import {IComment} from "../../models/IComment.ts";

interface CommentComponentProps {
    comment: IComment
}

export const CommentComponent = ({comment}: CommentComponentProps) => {
    return (
        <div>
            <h2>{comment.name}</h2>
            <p>{comment.body}</p>
        </div>
    );
};