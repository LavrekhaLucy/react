import {IPost} from "../../models/IPost.ts";


interface PostComponentProp {
    value: IPost,

}

export const PostComponent = ({value}: PostComponentProp) => {
    return <div>
        {value.title}
    </div>;
}