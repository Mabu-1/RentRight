import { Link } from "react-router-dom";
import Headline from "../../../Shared/Headline/Headline";
import Button from "../../../Shared/Button/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Leading = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        AOS.refresh();
    }, []);

    const images = [
        {
            imageUrl: "https://i.ibb.co/3ddFJrZ/istockphoto-1492424940-2048x2048.jpg",
            headline: "STUDIO APARTMENT",
            subheading: "Properties"
        },
        {
            imageUrl: "https://i.ibb.co/MsjqKwT/eco-friendly-house-0-1200.jpg",
            headline: "FARMHOUSE",
            subheading: "Properties"
        },
        {
            imageUrl: "https://i.ibb.co/v4Xg1hC/images.jpg",
            headline: "VILLA",
            subheading: "Properties"
        },
        {
            imageUrl: "https://i.ibb.co/fCVPntq/images-1.jpg",
            headline: "PENTHOUSE",
            subheading: "Properties"
        },
        {
            imageUrl: "https://i.ibb.co/XVQRx2f/603-ne-92nd-ave.webp",
            headline: "ROWHOUSE",
            subheading: "Properties"
        }
    ];

    return (
        <div className="my-7">
            <div className="flex justify-center" data-aos="fade-up">
                <Headline
                    subheading1={"WHY WE ARE LEADING"}
                    headline={"One-Stop Real Estate Solution"}
                />
            </div>
            <div className="flex justify-center text-center mb-4" data-aos="fade-up">
                <div className="max-w-[700px]">
                    <p className="text-gray-400">Aldus Corporation, which later merged with Adobe Systems, ushered lorem information age with its desktop publishing software Aldus PageMaker</p>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-7">
                {images.map((image, index) => (
                    <div key={index} className="" data-aos="fade-up">
                        <Link to="/">
                            <div className="relative w-[230px] h-[230px] overflow-hidden rounded-full group">
                                <img src={image.imageUrl} alt={image.headline} className="w-full h-full object-cover rounded-full transition duration-300 ease-in-out group-hover:opacity-0" />
                                <div className="absolute inset-0 bg-yellow-500 flex items-center justify-center rounded-full opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
                                    <span className=" text-2xl font-semibold ">Read more</span>
                                </div>
                            </div>
                        </Link>
                        <div className="flex-col justify-center text-center my-2">
                            <h1 className="text-2xl font-bold">{image.headline}</h1>
                            <p className="font-md">{image.subheading}</p>
                        </div>
                    </div>
                ))}
            </div>
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

export default Leading;
