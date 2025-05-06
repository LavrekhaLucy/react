import {IPostDummyJson} from "../../../model/model-dummy-json/IPostDummyjson.ts";
import {FC} from "react";

type PostTypeDummyJsonProps = {
    item: IPostDummyJson
}

const PostDummyJson:FC<PostTypeDummyJsonProps> = ({item} ) => {
    return (
        <div>
            <h4>{item.title}</h4>
            <p>{item.body}</p>
        </div>
    );
};

export default PostDummyJson;