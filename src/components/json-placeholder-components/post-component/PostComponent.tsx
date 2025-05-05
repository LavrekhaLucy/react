import {IPost} from "../../../model/IPost.ts";
import {FC} from "react";


type PostComponentProps = {
    value: IPost
}

const PostComponent:FC<PostComponentProps> = ({value}) => {
       return (
        <div>
            <h4>{value.title}</h4>
            <p>{value.body}</p>

        </div>
    );
};

export default PostComponent;