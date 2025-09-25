import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram 
} from "react-icons/fa";
import Headline from "../../../Shared/Headline/Headline";

const Contact = () => {
  return (
    <div className="my-12 px-4" data-aos="fade-up">
      <Headline
        subheading1="Follow Us"
        headline1="Stay Connected and Get the Latest Updates"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-center mt-8">
        {/* Phone */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
          <FaPhoneAlt className="text-[#eb7043] text-4xl mb-4 mx-auto" />
          <h4 className=" mabu-text3 text-xl font-bold mb-2">Phone</h4>
          <p className="mabu-text3 text-gray-600">+123-456-7890</p>
        </div>

        {/* Email */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
          <FaEnvelope className="text-[#eb7043] text-4xl mb-4 mx-auto" />
          <h4 className="mabu-text3 text-xl font-bold mb-2">Email</h4>
          <p className="mabu-text3 text-gray-600">info@example.com</p>
        </div>

        {/* Location */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
          <FaMapMarkerAlt className="text-[#eb7043] text-4xl mb-4 mx-auto" />
          <h4 className="mabu-text3 text-xl font-bold mb-2">Visit Us</h4>
          <p className="mabu-text3 text-gray-600">123 Main Street, City, Country</p>
        </div>

        {/* Social */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
          <div className="flex justify-center space-x-4 text-2xl mb-4">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="Facebook"
              className="p-2 rounded-full bg-gray-100 hover:bg-[#eb7043] hover:text-white transition"
            >
              <FaFacebookF />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="Twitter"
              className="p-2 rounded-full bg-gray-100 hover:bg-[#eb7043] hover:text-white transition"
            >
              <FaTwitter />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="Instagram"
              className="p-2 rounded-full bg-gray-100 hover:bg-[#eb7043] hover:text-white transition"
            >
              <FaInstagram />
            </a>
          </div>
          <h4 className=" mabu-text3 text-xl font-bold mb-2">Social</h4>
          <p className="mabu-text3 text-gray-600">Stay connected through our social channels.</p>
        </div>

        {/* Support */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
          <FaEnvelope className="text-[#eb7043] text-4xl mb-4 mx-auto" />
          <h4 className=" mabu-text3 text-xl font-bold mb-2">Support</h4>
          <p className="mabu-text3 text-gray-600">support@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
