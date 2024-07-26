import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Property from "../Pages/Property/Property/Property";
import AboutUs from "../Pages/AboutUs/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs/ContactUs";



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
                element:<Property></Property>
            },
            {
                path:"aboutUS",
                element:<AboutUs></AboutUs>
            },
            {
                path:"contactUS",
                element:<ContactUs></ContactUs>
            }
        ]
    }
   

])

export default router;