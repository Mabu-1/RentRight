import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease",
    });
  }, []);

  return (
    <div className="mb-12 px-4">
      <div className="flex flex-col sm:flex-col md:flex-row gap-12 items-center">
        {/* Text Section */}
        <div
          className="flex-1 text-center md:text-left mt-8 md:mt-0"
          data-aos="fade-right"
        >
          <div className="font-bold text-[#eb7043] mb-2">
            <h6 className="text-4xl sm:text-5xl md:text-6xl leading-tight">
              Get in <br /> Touch
            </h6>
          </div>

          <div className="my-4">
            <p className="text-xl sm:text-2xl md:text-2xl font-semibold">
              We're Here to Help You
            </p>
          </div>

          <div className="max-w-md mx-auto md:mx-0">
            <p className="text-gray-500 text-base sm:text-lg md:text-lg">
            If you have any questions, need clarification, or require assistance with anything, please don’t hesitate to reach out. Our dedicated team is always available to provide you with the guidance and support you need to ensure a smooth experience.
            </p>
          </div>

          {/* Call to Action */}
          
        </div>

        {/* Image Section */}
        <div
          className="flex-1 flex justify-center mt-5"
          data-aos="fade-left"
        >
          <img
            src="https://i.ibb.co/FqxvRtx/5132732.jpg"
            alt="Support"
            className="w-90 h-90 object-cover rounded-full border-4 border-[#eb7043] shadow-lg "
      
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
