import { Link } from "react-router-dom";
import Headline from "../../../Shared/Headline/Headline";
import Marquee from "react-fast-marquee";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Button from "../../../Shared/Button/Button";
import useProperties from "../../../hooks/useProperties";
import Loading from "../../../Loading/Loading";
import Card from "./Card";

const Properties = () => {
    const [Properties, loading] = useProperties();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        AOS.refresh();
    }, []);

    if (loading) return <Loading />;

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
                    {Properties.map((Property) => (
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
