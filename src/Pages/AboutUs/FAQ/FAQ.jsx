import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What services do you offer?",
            answer: "We offer a variety of property management services including tenant placement, rent collection, property maintenance, and more."
        },
        {
            question: "How do you screen tenants?",
            answer: "We conduct thorough background checks including credit, employment, and rental history to ensure we place reliable tenants in your property."
        },
        {
            question: "What are your fees?",
            answer: "Our fees vary depending on the services required. Please contact us for a detailed quote tailored to your specific needs."
        },
        {
            question: "How do you handle maintenance requests?",
            answer: "Tenants can submit maintenance requests through our online portal, and we promptly address any issues to ensure your property remains in excellent condition."
        },
        {
            question: "What areas do you serve?",
            answer: "We provide property management services in the metropolitan area and surrounding suburbs. Contact us to find out if we serve your location."
        },
    ];

    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of animations in milliseconds
        });
    }, []);

    return (
        <div className="my-10">
            <h2 className="text-4xl text-yellow-400 font-bold text-center mb-8" data-aos="fade-up">FAQ</h2>
            <div className="space-y-6">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="p-4 border border-gray-300 rounded-lg shadow-sm"
                        data-aos="fade-up"
                        data-aos-delay={index * 100} // Stagger animations based on index
                    >
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggleFAQ(index)}
                        >
                            <h3 className="text-xl font-semibold">{faq.question}</h3>
                            <span className="text-2xl">{openIndex === index ? '-' : '+'}</span>
                        </div>
                        {openIndex === index && (
                            <div className="mt-2">
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
