import {Link, Outlet} from "react-router-dom";




const Layout = () => {
    return (
        <div>

                <h1 style={{ display: 'flex',justifyContent:'center' }}>Home navigation</h1>

            <div  style={{ display: 'flex',justifyContent:'center', gap: '100px', fontSize:'26px' }}>

                <Link to='JsonPlaceholder'>JsonPlaceholder</Link>
                <Link to='DummyJson'>DummyJson</Link>

            </div>

                <hr />
                <Outlet />
        </div>
    );
};

export default Layout;