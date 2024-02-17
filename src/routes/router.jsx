import VerticalTab from "src/components/layout/vertical_tab/VerticalTab";
import Home from "src/pages/home/Home";
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
        path: "/login",
        element: <Login />,
    },

    {   
        path: "/register",
        element: <Register />,
    },
]

export default routes;