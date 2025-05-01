import {Link, Outlet} from "react-router-dom";
import Menu from "../components/menu/Menu.tsx";




const Layout = () => {
    return (
        <div>

            <Menu/>

            <div style={{ display: "flex", justifyContent:'center', gap: "200px", fontSize:'25px' }}>

                <Link to='JsonPlaceholder'>JsonPlaceholder</Link>
                <Link to='DummyJson'>DummyJson</Link></div>

                <hr />
                <Outlet />

        </div>
    );
};

export default Layout;