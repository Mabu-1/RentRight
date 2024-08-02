import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Headline from "../../../Shared/Headline/Headline";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import useReview from "../../../hooks/useReview";
import Loading from "../../../Loading/Loading";
import Card from "./Card";

const Testimonial = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        AOS.refresh();
    }, []);

    const [review,  loading] = useReview(); 
   if(loading)
    return <Loading></Loading>
     
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
                    {review.map((review) => (
                       <Card key={review._id} review={review}/>
                    ))}
                </div>
            </Marquee>
        </div>
    );
};

export default Testimonial;
