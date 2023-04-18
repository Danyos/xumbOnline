import {Outlet} from "react-router-dom";
import Header from "../component/Header";

function Layout2() {
    return (
        <div>
                <h1>header2</h1>
               <Outlet />
            <h2>Footer2</h2>
        </div>
    );
}

export default Layout2;
