import { Outlet } from "react-router-dom";
import Footer from "./layouts/footer/Footer";

function AppLayout() {
    return (
        <div>
            <Outlet />
            <Footer />
        </div>
    );
}

export default AppLayout;
