import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import GoToTop from "../Shared/GoToTop/GoToTop";
import ScrollToTop from "../Shared/ScroolToTop/ScrollToTop";



const Main = () => {
    const location = useLocation();

    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');



    return (
        <>

                    <div className="w-11/12 mx-auto mt-[100px]">
                        {noHeaderFooter || <Navbar></Navbar>}
                        <ScrollToTop />
                        <Outlet />

                    </div>   
                    {noHeaderFooter || <Footer></Footer>}
         
                <GoToTop></GoToTop>
           
        </>
    );
};




export default Main;