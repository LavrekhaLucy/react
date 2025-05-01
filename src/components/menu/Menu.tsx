import {Link} from "react-router-dom";
import "./Menu.css"

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>Home </Link></li>
                <li><Link to={'users'}> Users </Link></li>
                <li><Link to={'posts'}> Posts </Link></li>
                <li><Link to={'comments'}> Comments </Link></li>

            </ul>
        </div>
    );
};

export default Menu;