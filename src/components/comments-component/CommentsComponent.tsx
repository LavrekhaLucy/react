import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../store/store.ts";
import {commentsAction} from "../../slices/CommentSlice.ts";
import {CommentComponent} from "../comment-component/CommentComponent.tsx";

export const CommentsComponent = () => {

    const dispatch = useAppDispatch();
    const comments = useAppSelector(state => state.commentStoreSlice.comments);
    useEffect(()=>{},[

        dispatch(commentsAction.loadComments())
    ]);
    return (
        <div>

            {
                comments.map((comment) => <CommentComponent key={comment.id} comment={comment} />)
            }
        </div>
    );
};