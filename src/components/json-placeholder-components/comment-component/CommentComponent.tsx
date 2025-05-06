import {FC} from "react";
import {IComment} from "../../../model/model-json-placeholder/IComment.ts";

type CommentTypeProps = {
    value: IComment
}

const CommentComponent:FC<CommentTypeProps> = ({value}) => {
    return (
        <div>
            <h4>{value.postId}{value.email}</h4>
            <p>{value.body}</p>

        </div>
    );
};

export default CommentComponent;