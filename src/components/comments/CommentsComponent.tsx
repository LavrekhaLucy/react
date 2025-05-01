import {Link, Outlet} from "react-router-dom";


const CommentsComponent = () => {
    return (
        <div>
            <h2>CommentsComponent</h2>
            <Link to="dummy-json">Go to CommentsDummyJson</Link>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default CommentsComponent;