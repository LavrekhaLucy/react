import {Outlet} from "react-router-dom";
import Menu from "../components/menu/Menu.tsx";




const JsonPlaceholderLayout = () => {
    return (
        <div>
            <h2>JsonPlaceholder </h2>
            <Menu/>
            <Outlet/>
        </div>
    );
};

export default JsonPlaceholderLayout;