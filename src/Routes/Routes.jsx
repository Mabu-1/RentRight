import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Property from "../Pages/Property/Property/Property";
import AboutUs from "../Pages/AboutUs/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs/ContactUs";
import Service from "../Pages/Service/Service/Service";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";



const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main> ,
        children:
        [
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"property",
                element: <Property></Property>
            },
            {
                path:"aboutUS",
                element:<AboutUs></AboutUs>
            },
            {
                path:"contactUS",
                element:<ContactUs></ContactUs>
            },
            {
                path:"service",
                element:<Service></Service>
            },
            {
                path:'login',
                element:<Login></Login>    
                },
              {
                path:'signup',
                element:<Signup></Signup>   
                }
        ]
    }
   

])

export default router;