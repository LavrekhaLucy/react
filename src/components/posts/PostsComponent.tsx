import {useEffect, useState} from "react";
import {IBaseResponseModel} from "../../models/IBaseResponseModel.ts";
import {IPost} from "../../models/IPost.ts";
import {getPosts} from "../../servises/api.servise.ts";


const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        getPosts <IBaseResponseModel & {posts:IPost[]}> ()

            .then((value) => setPosts(value.posts));


    },[]);


    return (
        <div>
            {
                posts.map((value:IPost) => <div key={value.id}> {value.title} </div>)
            }
        </div>
    );
};

export default PostsComponent;