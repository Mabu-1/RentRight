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
            <ScrollToTop />
            <div className="flex flex-col min-h-screen">
                {/* Conditionally render Navbar */}
                {!noHeaderFooter && <Navbar />}

                <main className="flex-grow container max-w-screen-sm sm:max-w-screen-md md:max-w-screen-xl mx-auto px-3 sm:px-4 md:px-4 lg:px-8">
                    <Outlet />
                </main>

                {/* Conditionally render GoToTop and Footer */}
                {!noHeaderFooter && <GoToTop />}
                {!noHeaderFooter && <Footer />}
            </div>
        </>
    );
};

export default Main;
