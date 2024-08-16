import { Link } from "react-router-dom";
import Headline from "../../../Shared/Headline/Headline";
import Marquee from "react-fast-marquee";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Button from "../../../Shared/Button/Button";
import Loading from "../../../Loading/Loading";
import Card from "./Card";
import useProperty from "../../../hooks/useProperty";

const Properties = () => {
    

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        AOS.refresh();
    }, []);

    const { data, isLoading, isError, error } = useProperty();

   
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
        <div className="my-[100px]">
            <div className="flex justify-center text-center" data-aos="fade-up">
                <Headline
                    subheading1={"PROPERTY"}
                    headline={"Quality Tailored Property"}
                />
            </div>
            <div className="flex justify-center text-center mb-4" data-aos="fade-up">
                <div className="max-w-[700px]">
                    <p className="text-gray-400">Aldus Corporation, which later merged with Adobe Systems, ushered lorem information age with its desktop publishing software Aldus PageMaker</p>
                </div>
            </div>

            <Marquee speed={50} pauseOnHover={true} className="gap-5">
                <div className="flex gap-5">
                    {data.map((Property) => (
                        <Card key={Property._id} Property={Property} />
                    ))}
                </div>
            </Marquee>
            <div className="flex justify-center text-center my-4" data-aos="fade-up">
                <Link to="/property">
                    <Button>
                        Visit All Properties
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Properties;
