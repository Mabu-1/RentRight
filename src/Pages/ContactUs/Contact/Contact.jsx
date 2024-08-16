import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="my-8 " data-aos="fade-up">
            <h3 className="text-4xl text-yellow-400 font-bold text-center mb-4">Get in Touch</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 text-center ">

                <div className="bg-white p-2 rounded-lg shadow-lg">
                    <FaPhoneAlt className="text-red-500 text-4xl mb-4 mx-auto" />
                    <h4 className="text-xl font-bold mb-2">Phone</h4>
                    <p className="text-gray-700">+123-456-7890</p>
                </div>

                <div className="bg-white p-2 rounded-lg shadow-lg">
                    <FaEnvelope className="text-green-500 text-4xl mb-4 mx-auto" />
                    <h4 className="text-xl font-bold mb-2">Email</h4>
                    <p className="text-gray-700">info@example.com</p>
                </div>

                <div className="bg-white p-2 rounded-lg shadow-lg">
                    <FaMapMarkerAlt className="text-blue-500 text-4xl mb-4 mx-auto" />
                    <h4 className="text-xl font-bold mb-2">Visit Us</h4>
                    <p className="text-gray-700">123 Main Street, City, Country</p>
                </div>

                <div className="bg-white p-2 rounded-lg shadow-lg">
                    <div className="flex justify-center space-x-4 text-4xl mb-4">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer">
                            <FaFacebookF className="text-blue-600" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer">
                            <FaTwitter className="text-blue-400" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer">
                            <FaInstagram className="text-pink-500" />
                        </a>
                    </div>
                    <h4 className="text-xl font-bold mb-2">Follow Us
                    </h4>
                    <p className="text-gray-700">Stay connected through our social media channels.</p>
                </div>
                <div className="bg-white p-2 rounded-lg shadow-lg">
                    <FaEnvelope className="text-purple-500 text-4xl mb-4 mx-auto" />
                    <h4 className="text-xl font-bold mb-2">Support</h4>
                    <p className="text-gray-700">support@example.com</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;