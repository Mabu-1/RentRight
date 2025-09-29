import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from 'sweetalert2';
import Button from "../../../Shared/Button/Button";
import Headline from '../../../Shared/Headline/Headline';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const handleSubscribe = (e) => {
        e.preventDefault();

        if (!email) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Please enter a valid email",
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }

        // Replace this with actual API call
        console.log('Subscribed Email:', email);

        Swal.fire({
            position: "center", // centered on screen
            icon: "success",
            title: "Thank you for subscribing!",
            showConfirmButton: false,
            timer: 1500
        });

        setEmail(''); // clear input
    };

    return (
        <div className="my-12 px-4" data-aos="fade-up">
            <Headline 
                subheading1={"Newsletter"}
                headline1={"Stay Connected With Us"}
                headline3={" exclusive offers, property updates & news."}
            />

            <form 
                onSubmit={handleSubscribe} 
                className="flex flex-col md:flex-row gap-4 justify-center mt-6 max-w-2xl mx-auto"
            >
                <div className="flex items-center border-2 border-[#eb7043] rounded-full px-4 py-2 w-full shadow-sm focus-within:shadow-md transition">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="outline-none w-full text-sm bg-transparent md:text-base 
                                   text-gray-800 dark:text-gray-200"
                        required
                        aria-label="Email address"
                    />
                </div>

                <Button type="submit" className="w-full md:w-auto rounded-full px-6 py-3">
                    Subscribe
                </Button>
            </form>

            <p className="text-center text-gray-500 dark:text-gray-400 text-xs md:text-sm mt-3">
                We respect your privacy. Unsubscribe anytime.
            </p>
        </div>
    );
};

export default Newsletter;
