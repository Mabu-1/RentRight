import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Property from "../Pages/Property/Property/Property";



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
            }
        ]
    }
   

])

export default router;