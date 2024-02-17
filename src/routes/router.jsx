import VerticalTab from "src/components/layout/vertical_tab/VerticalTab";
import Home from "src/pages/home/Home";
import Lenta from "src/pages/lenta/Lenta";

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
    }
];

export default routes;