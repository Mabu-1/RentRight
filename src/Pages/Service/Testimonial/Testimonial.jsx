import { useEffect } from "react";
import Marquee from "react-fast-marquee";
import Headline from "../../../Shared/Headline/Headline";
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

  const { data, isLoading, isError, error } = useReview();

  if (isLoading) return <Loading />;
  if (isError)
    return (
      <div className="text-red-500 text-center">Error: {error.message}</div>
    );
  if (!data || data.length === 0)
    return (
      <div className="text-center text-gray-500">No Testimonials found.</div>
    );

  return (
    <div className="my-12">
      {/* Section Heading */}
      <div data-aos="fade-up" className="text-center max-w-2xl mx-auto">
        <Headline subheading1={"TESTIMONIALS"} headline1={"The Words Of Clients"} />
        <p className="text-gray-500 mt-3 text-sm sm:text-base">
          Aliquet enim tortor at auctor urna nunc id cursus. Mattis molestie a
          iaculis at erat pellentesque adipiscing commodo elit.
        </p>
      </div>

      {/* Reviews Carousel */}
      <div className="mt-8">
      <Marquee
  speed={50}
  pauseOnHover={true}
  gradient={false}   // <-- remove the right/left sidebar gradient
  className="py-4"
>
  {data.map((review) => (
    <div key={review._id} className="mx-3">
      <Card review={review} />
    </div>
  ))}
</Marquee>

      </div>
    </div>
  );
};

export default Testimonial;
