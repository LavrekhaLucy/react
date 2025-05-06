import {ICommentDummyJson} from "../../../model/model-dummy-json/ICommentDummyjson.ts";
import {FC} from "react";

type CommentTypeDummyJsonProps = {
    comment: ICommentDummyJson
}

const CommentDummyJson:FC<CommentTypeDummyJsonProps> = ({comment} ) => {
    return (
        <div>
             <h3>{comment.id}</h3>
             <h3>{comment.body}</h3>
        </div>
    );
};

export default CommentDummyJson;