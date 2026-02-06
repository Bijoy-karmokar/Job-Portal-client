import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import LogIn from "../components/LogIn";
import Register from "../components/Register";
import Home from './../Pages/Home';

const router = createBrowserRouter([
    {
        path:"/",
        Component:MainLayouts,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:"logIn",
                Component:LogIn
            },
            {
                path:"register",
                Component:Register
            }
        ]
    }
])
export default router;