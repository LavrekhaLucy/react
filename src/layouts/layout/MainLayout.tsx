import PaginationComponent from "../../components/pagination/PaginationComponent.tsx";
import UsersComponent from "../../components/users-component/UsersComponent.tsx";


const MainLayout = () => {
    return (
        <div>

            <UsersComponent/>

            <PaginationComponent/>
        </div>
    );
};

export default MainLayout;