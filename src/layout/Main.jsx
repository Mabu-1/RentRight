import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import GoToTop from "../Shared/GoToTop/GoToTop";



const Main = () => {
   
    
   
    return (
        <>
        
            <div className="w-full mx-auto">
                <div className="w-11/12 mx-auto">
                    <nav>
                 <Navbar></Navbar>
                    </nav>
                    <div className="w-11/12 mx-auto mt-[100px]">
                        <Outlet />
                    </div>
                   
                </div>
                <GoToTop></GoToTop>
            </div>
           
            <Footer></Footer>
        </>
    );
};




export default Main;