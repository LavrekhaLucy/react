import {Link, Outlet} from "react-router-dom";


const PostsComponent = () => {
    return (
        <div>
            <h2>PostsComponent</h2>
            <Link to="dummy-json">Go to PostsDummyJson</Link>
            <hr/>
            <Outlet/>

        </div>
    );
};

export default PostsComponent;