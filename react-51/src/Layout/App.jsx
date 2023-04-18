import {Outlet} from "react-router-dom";
import Header from "../component/Header";

function Layout() {
    return (
        <div>
            <Header />
               <Outlet />
            <h2>Footer</h2>
        </div>
    );
}

export default Layout;
