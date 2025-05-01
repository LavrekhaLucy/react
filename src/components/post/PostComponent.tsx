import {FC} from "react";
import {IPost} from "../../models/IPost.ts";

type PostComponentProps = {
    post: IPost[];
}
const PostComponent:FC<PostComponentProps> = () => {
    return (
        <div>

        </div>
    );
};

export default PostComponent;