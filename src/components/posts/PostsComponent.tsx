import {useEffect} from "react";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import { postSliceActions} from "../../redux/slices/postSlice.ts";


const PostsComponent = () => {


    const {posts}= useAppSelector(({postSlice})=> postSlice);
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(postSliceActions.loadPosts());

    },[]);

    return (
        <div>
            {
                posts.map((post) => {
                    return <div key={post.id}>{post.id}: {post.title}</div>
                })
            }
        </div>
    );
};

export default PostsComponent;