import {useAppDispatch, useAppSelector} from "../../store/store.ts";
import {useEffect} from "react";
import {usersActions} from "../../slices/UserSlice.ts";
import {postsActions} from "../../slices/PostSlice.ts";
import {commentsAction} from "../../slices/CommentSlice.ts";

export const ComplexComponent = () => {

const dispatch=useAppDispatch();
const {userStoreSlice:{users},postStoreSlice:{posts},commentStoreSlice:{comments}}=useAppSelector(state => state);

useEffect(() => {

    if (!users.length) {
        dispatch(usersActions.loadUsers())
    }
    if (!posts.length) {
        dispatch(postsActions.loadPosts())
    }
    if (!comments.length) {
        dispatch(commentsAction.loadComments())
    }
})

    return (
        <div>
            <h1>{users.map(user => (<div key={user.id}>{user.name}</div>))}</h1>

            <h2>{posts.map(post => (<div key={post.id}>{post.title}</div>))}</h2>

            <h3>{comments.map(comment => (<div key={comment.id}>{comment.name}</div>))}</h3>

        </div>
    );
};