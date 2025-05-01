import {Outlet} from "react-router-dom";
import Menu from "../components/menu/Menu.tsx";



const DummyJsonLayout = () => {
    return (
        <div>
            <h2>DummyJson</h2>
            <Menu/>
            <Outlet/>
        </div>
    );
};

export default DummyJsonLayout;