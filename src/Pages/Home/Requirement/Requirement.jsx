import { GrUserExpert } from "react-icons/gr";
import { GiCctvCamera } from "react-icons/gi";
import { BsBank2 } from "react-icons/bs";
import Headline from "../../../Shared/Headline/Headline";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Requirement = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  return (
    <div className="my-10 px-4">
      {/* Headline */}
      <div className="text-center mb-7">
        <Headline
          subheading="OUR SERVICES"
          headline="Personalized Service To Fulfill Requirements"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Images */}
        <div className="flex md:w-1/2 gap-4">
          <div data-aos="fade-up" className="flex-1">
            <img
              src="https://i.ibb.co/zxQqz8b/req-1.jpg"
              alt="Residential property"
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
          <div className="flex flex-col gap-4 flex-1">
            <img
              src="https://i.ibb.co/47F3C8r/req-2.jpg"
              alt="Modern office interior"
              data-aos="fade-up"
              className="w-full rounded-lg object-cover"
            />
            <img
              src="https://i.ibb.co/YP5M50s/req-3.jpg"
              alt="Luxury apartment"
              data-aos="fade-up"
              className="w-full rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 flex flex-col justify-center" data-aos="fade-up">
          <p className="text-gray-500 text-sm md:text-lg text-center md:text-left mb-8">
            We are committed to providing a wide range of services to meet your unique needs. 
            Our expert staff ensures that every requirement is met with precision and care.
          </p>

          {/* Services */}
          <div className="flex justify-around md:justify-start md:gap-12 mb-10">
            <div className="flex flex-col items-center gap-2">
              <GrUserExpert className="text-3xl text-[#eb7043]" />
              <p className="text-sm md:text-base font-bold text-gray-700">Expert Staff</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <GiCctvCamera className="text-3xl text-[#eb7043]" />
              <p className="text-sm md:text-base font-bold text-gray-700">24/7 Surveillance</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <BsBank2 className="text-3xl text-[#eb7043]" />
              <p className="text-sm md:text-base font-bold text-gray-700">Insurance</p>
            </div>
          </div>

          {/* Counters */}
          <div className="flex gap-6 text-[#eb7043] justify-center md:justify-start">
            <div className="text-center md:text-left">
              <CountUp end={150} duration={2} suffix="+" className="text-2xl md:text-4xl font-bold" />
              <p className="text-xs md:text-base font-bold text-gray-700">MANAGED PROPERTIES</p>
            </div>
            <div className="text-center md:text-left">
              <CountUp end={120} duration={2} suffix="+" className="text-2xl md:text-4xl font-bold" />
              <p className="text-xs md:text-base font-bold text-gray-700">HAPPY CLIENTS</p>
            </div>
            <div className="text-center md:text-left">
              <CountUp end={30} duration={2} suffix="+" className="text-2xl md:text-4xl font-bold" />
              <p className="text-xs md:text-base font-bold text-gray-700">YEARS EXPERIENCE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requirement;
