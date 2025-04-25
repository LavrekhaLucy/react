import "./Posts.css"
import {useEffect, useState} from "react";
import {IPostModel} from "../../models/IPostModel.ts";
import {Post} from "../post-component/Post.tsx";
import {loadPosts} from "../../servise/api.servise.ts";


export const Posts = () => {

   const [posts,setPosts]= useState<IPostModel[]>([])
    useEffect(()=>{
    async function fetchPosts(){
        const allPosts = await loadPosts ();
        setPosts(allPosts);
    }
        fetchPosts();
    })
    return (
        <div>
            {posts.map((post) =><Post post={post} key={post.id}/>
            )}
        </div>
    );
};