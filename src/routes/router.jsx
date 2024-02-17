import CreateMonitoring from "src/components/layout/create-monitoring/CreateMonitoring";
import VerticalTab from "src/components/layout/vertical_tab/VerticalTab";
import Home from "src/pages/home/Home";
import Lenta from "src/pages/lenta/Lenta";
import Login from "src/pages/login/Login";
import Register from "src/pages/register/Register";


const routes = [
    {   
        path: "/",
        element: <Home />,
    },

    {
        path: '/menu',
        element: <VerticalTab />
    },

    {
        path: '/lenta',
        element: <Lenta />
    },

    {   
        path: "/login",
        element: <Login />,
    },

    {   
        path: "/register",
        element: <Register />,
    },

    {   
        path: "/creator",
        element: <CreateMonitoring />,
    },
]

export default routes;