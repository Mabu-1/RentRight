import Headline from "../../../Shared/Headline/Headline";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Partners = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        AOS.refresh();
    }, []);

    const images = [
        { imageURL: "https://i.ibb.co/DgvJLV4/images-4.jpg" },
        { imageURL: "https://i.ibb.co/56SqjWd/images-2.png" },
        { imageURL: "https://i.ibb.co/KyjJHfq/images-1.png" },
        { imageURL: "https://i.ibb.co/9HwmPzf/images.png" },
        { imageURL: "https://i.ibb.co/zSZHdgw/download.png" },
        { imageURL: "https://i.ibb.co/9rPwP8h/images.png" },
    ];

    return (
        <div className="my-7">
            <div className="text-center gap-3" data-aos="fade-up">
                <Headline
                    subheading1={"OUR PREMIUM PARTNERS"}
                    headline1={"Over The Years, The Specialists Who Have Collaborated With Us"}
                />
                <p className="my-2">A pellentesque sit amet porttitor eget dolor morbi non arcu. Tincidunt dui ut ornare lectus sit amet est placerat in. Quisque egestas diam.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4" data-aos="fade-up" data-aos-delay="200">
                {images.map((image, index) => (
                    <div key={index} className="flex justify-center items-center p-2 bg-gray-100 rounded-lg">
                        <img src={image.imageURL} alt={`Partner ${index + 1}`} className="w-full h-[100px] object-cover rounded-lg" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Partners;
