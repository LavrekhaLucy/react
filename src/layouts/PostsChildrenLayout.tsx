import { Outlet} from "react-router-dom";


const PostsChildrenLayout = () => {
    return (
        <div>
            <div>
                <h2>Users JsonPlaceholder </h2>

            </div>
            <div>
                <h2>Users DummyJson</h2>

            </div>

                <Outlet/>

        </div>
    );
};

export default PostsChildrenLayout;