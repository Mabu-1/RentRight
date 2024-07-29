import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Headline from "../../../Shared/Headline/Headline";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonial = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        AOS.refresh();
    }, []);

    const [reviews, setreviews] = useState([]);
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setreviews(data));
    }, []);

    return (
        <div className="my-7">
            <div data-aos="fade-up">
                <Headline
                    subheading={"TESTIMONIALS"}
                    headline={"The Words Of Clients"}
                />
            </div>
            <p className="text-gray-400 mb-4" data-aos="fade-up">Aliquet enim tortor at auctor urna nunc id cursus. Mattis molestie a iaculis at erat pellentesque adipiscing commodo elit.</p>

            <Marquee speed={70} pauseOnHover={true} className="gap-5">
                <div className="flex gap-5">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-gray-200 border-2 border-yellow-300 rounded-lg" data-aos="fade-up">
                            <div className="flex gap-5">
                                <div className="flex justify-center">
                                    <img src={review.imageUrl} alt={`Review by ${review.name}`} className="p-5 md:p-5 sm:p-2" />
                                </div>
                                <div className="w-[350px] md:w-[350px] sm:[150px] gap-2">
                                    <div className="flex gap-2">
                                        <span className="text-xl font-bold">{review.star}</span>
                                        <FaStar color="yellow" size={22} />
                                    </div>
                                    <p className="my-12 md:my-12 sm:my-6">{review.text}</p>
                                    <p className="font-bold">{review.name}</p>
                                    <p>{review.profession}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Marquee>
        </div>
    );
};

export default Testimonial;
