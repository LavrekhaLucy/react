import {Link, Outlet} from "react-router-dom";

const CommentsChildrenLayout = () => {
    return (
        <div>
            <div style={{ display: "flex", justifyContent:'center', gap: "200px", fontSize:'25px' }}>

                <Link to={'JsonPlaceholder'}>JsonPlaceholder</Link>
                <Link to={'DummyJson'}>DummyJson</Link>
            </div>


            <Outlet/>
        </div>
    );
};

export default CommentsChildrenLayout;