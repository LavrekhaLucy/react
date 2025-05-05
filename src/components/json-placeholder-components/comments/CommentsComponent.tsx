import {useEffect, useState} from "react";
import {commentService} from "../../../servises/api.servise.ts";
import {IComment} from "../../../model/IComment.ts";
import CommentComponent from "../comment-component/CommentComponent.tsx";

const CommentsComponent = () => {
    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        commentService.getAllComments()
            .then((value) =>
                setComments(value))


    }, []);

    return (
        <div>

            {
                comments.map((value) => <CommentComponent key={value.id} value={value} />)
            }
        </div>
    );
};


export default CommentsComponent;