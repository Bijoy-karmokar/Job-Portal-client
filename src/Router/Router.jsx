import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import LogIn from "../components/LogIn";
import Register from "../components/Register";

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