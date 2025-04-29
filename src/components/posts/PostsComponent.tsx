import {IPost} from "../../models/IPost.ts";
import {FC, useEffect, useState} from "react";
import {postService} from "../../services/api.service.ts";



type PostsTypeProps = {
    userId:string;
}
const PostsComponent:FC <PostsTypeProps> = ({userId}) => {

    const [posts,setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        if (userId) {
            console.log("exist", userId);
            postService
                .getAllPostsOfUserById(+userId)
                .then(value=> {
                    console.log(value);
                setPosts(value);
            });
        }
    },[userId]);

    return (

        <div>
            {
                posts.map(value => <div>{value.title}</div>)
            }
        </div>
    );
};

export default PostsComponent;