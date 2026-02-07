import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import LogIn from "../components/LogIn";
import Register from "../components/Register";
import Home from './../Pages/Home';
import JobDetails from "../components/JobDetails";
import JobApply from "../components/JobApply";
import PrivateRoute from "../Route/PrivateRoute";
import MyApplication from "../Pages/MyApplication/MyApplication";

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
              path:"applications",
              element:<PrivateRoute><MyApplication></MyApplication></PrivateRoute>
            },
            {
              path:"/jobs/:id",
              loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`),
              Component:JobDetails
            },
            {
              path:"/jobApply/:id",
              element:<PrivateRoute><JobApply></JobApply></PrivateRoute>
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