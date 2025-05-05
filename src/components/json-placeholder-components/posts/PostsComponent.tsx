import { useEffect, useState} from "react";
import {postService} from "../../../servises/api.servise.ts";
import {IPost} from "../../../model/IPost.ts";
import PostComponent from "../post-component/PostComponent.tsx";


const PostsComponent= () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        postService.getAllPosts()
            .then((value) => setPosts(value))


    }, []);

    return (
        <div>

            {
                posts.map((value) => <PostComponent key={value.id} value={value} />)
            }
        </div>
    );
};

export default PostsComponent;
