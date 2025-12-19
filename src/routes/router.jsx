import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Navbar from "../component/Navbar/Navbar";
import Error from '../component/Error/ErrorPage'
import AuthLayout from "../component/AuthLayout/AuthLayout";
import Login from "../page/Login";
import Register from "../page/Register";
import Home from "../page/Home";
import Services from "../page/Services";    
import MyProfile from "../page/MyProfile";
const router = createBrowserRouter(
    [
        {
            path:'/',
            Component:HomeLayout,
            children:[
                {
             path: "/home",
         loader: async () => {
         const services = await fetch("/Fake.json").then(r => r.json());
        const doctors = await fetch("/doctor.json").then(r => r.json());
        const tips = await fetch("/tips.json").then(r => r.json());

         return { services, doctors,tips };
                         },
             Component: Home
                },
                {
                    path:'/services',
                    Component:Services
                },
                {
                    path:'/myProfile',
                    Component:MyProfile
                },
                
            ]
            
        },
        {
            path:'/auth',
            Component:AuthLayout,
            children:[
                {
                    path:'/auth/login',
                    Component:Login
                },
                {
                    path:'/auth/register',
                    Component:Register
                }
            ]
        },
     {
        path:'/*',
        Component:Error ,
                 }
    ]
)
export default router
//https://docs.google.com/document/d/1P9CZqP7X-a61PylXmSxIoavh71f2sE1-JrJCKCZC5FQ/edit?tab=t.0