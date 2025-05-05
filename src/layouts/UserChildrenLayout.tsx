import {Link, Outlet} from "react-router-dom";



const UsersChildrenLayout = () => {
    return (
        <div>


            <div style={{ display: "flex", justifyContent:'center', gap: "200px", fontSize:'25px' }}>

                <Link to={'/users/JsonPlaceholder'}>JsonPlaceholder</Link>
                <Link to={'/users/DummyJson'}>DummyJson</Link>
            </div>


            <Outlet />
        </div>
    );
};

export default UsersChildrenLayout;