import {Link, Outlet} from "react-router-dom";


const UsersComponent = () => {
    return (
        <div>
            <h2>UsersComponent</h2>
            <Link to="dummy-json">Go to UsersDummyJson</Link>
            <hr/>
            <Outlet/>

        </div>
    );
};

export default UsersComponent;