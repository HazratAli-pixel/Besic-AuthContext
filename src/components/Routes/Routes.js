import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Orders from "../Orders/Orders";
import PassReset from "../PassReset/PassReset";
import Signup from "../Signup/Signup";
import PrivateRoutes from "./PrivateRoutes";



 export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'login',
                element: <Login></Login>
            },
            {
                path:'signup',
                element: <Signup></Signup>
            },
            {
                path:'passreset',
                element: <PassReset></PassReset>
            },
            {
                path:'orders',
                element: <PrivateRoutes><Orders></Orders></PrivateRoutes>
            },
        ]

    },
  ])