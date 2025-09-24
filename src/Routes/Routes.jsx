import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Property from "../Pages/Property/Property/Property";
import AboutUs from "../Pages/AboutUs/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs/ContactUs";
import Service from "../Pages/Service/Service/Service";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import PropertyInfo from "../Pages/Property/properties/PropertyInfo";
import PropertyBuy from "../Pages/Property/properties/PropertyBuy";
import CustomService from "../Pages/Service/Package/CustomService";
import Dashboard from "../layout/Dashboard";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import Review from "../Pages/Dashboard/Review/Review";
import PrivateRoute from "./PrivateRoute";
import Notification from "../Pages/Dashboard/Notification/Notification";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import MyProperty from "../Pages/Dashboard/MyProperty/MyProperty";
import AllProperty from "../Pages/Dashboard/AllProperty/AllProperty";
import ALLServices from "../Pages/Dashboard/AllServices/ALLServices";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import CreateProperty from "../Pages/Dashboard/CreateProperty/CreateProperty";
import CreateService from "../Pages/Dashboard/CreateService/CreateService";
import CreateNotification from "../Pages/Dashboard/CreateNotification/CreateNotification";
import UpdateProperty from "../Pages/Dashboard/AllProperty/UpdateProperty";
import UpdateService from "../Pages/Dashboard/AllServices/UpdateService";
import AllNotification from "../Pages/Dashboard/AllNotification/AllNotification";
import UpdatedNotification from "../Pages/Dashboard/AllNotification/UpdatedNotification";
import PackageBuy from "../Pages/Service/Package/PackageBuy";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import MyService from "../Pages/Dashboard/MyService/MyService";
import Payment from "../Pages/Dashboard/MyService/Payment";







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
                element: <Property></Property>,
                loader:() => fetch('https://rent-right-server.vercel.app/propertyCount')

            },
            {
                path:"property/:id",
                element: <PropertyInfo></PropertyInfo>,
                loader: ({params}) => fetch(`https://rent-right-server.vercel.app/property/${params.id}`)
            },
            {
                path:"propertyBuy/:id",
                element: <PropertyBuy></PropertyBuy>,
                loader: ({params}) => fetch(`https://rent-right-server.vercel.app/property/${params.id}`)

            },
            {
                path:"packageBuy/:id",
                element: <PackageBuy></PackageBuy>,
                loader: ({params}) => fetch(`https://rent-right-server.vercel.app/package/${params.id}`)

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
                path:"custom",
                element:<CustomService></CustomService>
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
    },
    {
        path:'dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute> ,
        children: [
          
            {
                path:'home',
                element:<UserHome></UserHome>
            },
            {
                path:'myProperty',
                element:<MyProperty></MyProperty>
            },
            {
                path:'myService',
                element:<MyService></MyService>
            },
           
            {
                path:'payment/:id',
                element:<Payment>,</Payment>,
                loader: ({params}) => fetch(`https://rent-right-server.vercel.app/package/${params.id}`)
            },

            {
                path:'paymentHistory',
                element:<PaymentHistory></PaymentHistory>
            },

            {
                path:'notification',
                element:<Notification></Notification>
            },
            {
                path:'review',
                element:<Review></Review>
            },

            //admin
            {
                path:'admin',
                element:<AdminHome></AdminHome>
            },
            {
                path:'updateProperty/:id',
                element:<UpdateProperty></UpdateProperty>,
                loader: ({params}) => fetch(`https://rent-right-server.vercel.app/property/${params.id}`)

                
            },
            {
                path:'updateService/:id',
                element:<UpdateService></UpdateService>,
                loader: ({params}) => fetch(`https://rent-right-server.vercel.app/package/${params.id}`)

                
            },
            {
                path:'updateNotification/:id',
                element:<UpdatedNotification></UpdatedNotification>,
                loader: ({params}) => fetch(`https://rent-right-server.vercel.app/notification/${params.id}`)

                
            },
            {
                path:'allProperty',
                element:<AllProperty></AllProperty>
            },
            {
                path:'allServices',
                element:<ALLServices></ALLServices>
            },
            {
                path:'allNotification',
                element:<AllNotification></AllNotification>
            },
            {
                path:'allUsers',
                element:<AllUsers></AllUsers>
            },
          
            {
                path:'createProperty',
                element:<CreateProperty></CreateProperty>
            },
            {
                path:'createService',
                element:<CreateService></CreateService>
            },
            {
                path:'createNotification',
                element:<CreateNotification></CreateNotification>
            },

           

           
        ]
    }
   

])

export default router;