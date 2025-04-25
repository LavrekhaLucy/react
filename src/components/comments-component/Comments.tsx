import {useEffect, useState} from "react";
import {IComments} from "../../models/IComments.ts";
import {loadComments} from "../../service/api.service.ts";
import {Comment} from "../comment-component/Comment.tsx";
import "./Comments.css"

export const Comments = () => {
    const [comments, setComments] = useState<IComments[]>([])

    useEffect(() => {
        loadComments().then((value) => setComments(value))
    },[]);

    return (
        <div>
            {
               comments.map((comment) => <Comment comment={comment} key={comment.id} />)
            }
        </div>
    );
};