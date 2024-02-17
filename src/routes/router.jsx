import VerticalTab from "src/components/layout/vertical_tab/VerticalTab";
import Home from "src/pages/home/Home";

const routes = [
    {   
        path: "/",
        element: <Home />,
    },
    {
        path: '/menu',
        element: <VerticalTab />
    }
];

export default routes;