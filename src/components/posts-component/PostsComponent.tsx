import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../store/store.ts";
import {postsActions} from "../../slices/PostSlice.ts";
import {PostComponent} from "../post-component/PostComponent.tsx";

export const PostsComponent = () => {
    const dispatch = useAppDispatch();
    const posts = useAppSelector(state => state.postStoreSlice.posts)
    useEffect(()=>{},[
        dispatch(postsActions.loadPosts())
    ]);
    return (
        <div>
            {
                posts.map((post) => <PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};