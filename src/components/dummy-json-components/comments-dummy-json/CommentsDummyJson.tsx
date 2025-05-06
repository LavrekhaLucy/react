import {useEffect, useState} from "react";
import {commentServiceDummyJSON} from "../../../servises/api.servise.ts";
import {ICommentDummyJson} from "../../../model/model-dummy-json/ICommentDummyjson.ts";
import CommentDummyJson from "../comment-component/CommentDummyJson.tsx";

const CommentsDummyJson = () => {

    const [comments, setComments] = useState<ICommentDummyJson[]>([]);

    useEffect(() => {
        commentServiceDummyJSON.getAllComments()

            .then(({comments}) =>
                setComments(comments));

    }, []);

    return (
        <div>

                {
                    comments.map((comment) => <CommentDummyJson key={comment.id} comment={comment}/>)
                }

        </div>
    );
};

export default CommentsDummyJson;