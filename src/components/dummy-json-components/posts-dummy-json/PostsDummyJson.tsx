import {useEffect, useState} from "react";
import {postServiceDummyJSON} from "../../../servises/api.servise.ts";
import {IPostDummyJson} from "../../../model/model-dummy-json/IPostDummyjson.ts";
import PostDummyJson from "../post-component/PostDummyJson.tsx";

const PostsDummyJson = () => {
    const [posts, setPosts] = useState<IPostDummyJson[]>([]);

    useEffect(() => {
       postServiceDummyJSON.getAllPosts()
            .then(({posts}) =>
                setPosts(posts));

    }, []);

    return (
        <div>

            <div>
                {
                    posts.map((post) => <PostDummyJson key={post.id} item={post}/>
                    )}
            </div>
        </div>
    );
};

export default PostsDummyJson;