import Headline from "../../../Shared/Headline/Headline";
import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect } from "react";
import Loading from '../../../Loading/Loading';
import usePackage from "../../../hooks/usePackage";
import Card from "./Card";
import { Link } from "react-router-dom";
import Button from "../../../Shared/Button/Button";
import { AuthContext } from "../../../Providers/AuthProvider";

const Package = () => {
    const {user} =useContext(AuthContext);
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        AOS.refresh();
    }, []);
    const { data, isLoading, isError, error } = usePackage();

    
    if (isLoading) {
        return <Loading />;
    }
    if (isError) {
        return <div className="text-red-500 text-center">Error: {error.message}</div>;
    }

    if (!data || data.length === 0) {
        return <div className="text-center text-gray-500">No Amenties found.</div>;
    }

        return (
            <div className="my-10">
                <div className="flex justify-between">
                    <div data-aos="fade-right">
                        <img src="https://i.ibb.co/pJMpc6F/Home-2-Pricing-Hd-Left-Img.png" alt="" />
                    </div>
                    <div className="text-center" data-aos="fade-up">
                        <Headline
                            subheading1={"AFFORDABLE"}
                            headline1={"Package Details"}
                        />
                        <p>Ultrices dui sapien eget mi proin sed libero enim sed. Velit euismod in pellentesque massa placerat duis ultricies lacus sed.</p>
                    </div>
                    <div data-aos="fade-left">
                        <img src="https://i.ibb.co/VWw9xLg/Home-2-Pricing-Hd-Right-Img.png" alt="" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3">
                    {data.map((pack) => (
                        <Card key={pack._id} pack={pack } />
                    ))}
                </div>
                {/* <div className="flex justify-center text-center my-4" data-aos="fade-up">
                <Link to="/custom">
                    <Button >
                        Custom Service
                    </Button>
                </Link>
            </div> */}
            </div>
        );
};

export default Package;
