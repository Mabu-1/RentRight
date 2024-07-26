

const Contact = () => {
    return (
        <div className="my-8" data-aos="fade-up">
            <h3 className="text-4xl  text-yellow-400 font-bold text-center mb-4">Get in Touch</h3>
            <form className="max-w-[700px] mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-lg">
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold">Name</label>
                    <input type="text" className="w-full p-2 text-black rounded" />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold">Email</label>
                    <input type="email" className="w-full p-2 text-black rounded" />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold">Subject</label>
                    <input type="text" className="w-full p-2 text-black rounded" />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold">Property Type</label>
                    <select className="w-full p-2 text-black rounded">
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="industrial">Industrial</option>
                        <option value="land">Land</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold">Preferred Date</label>
                    <input type="date" className="w-full p-2 text-black rounded" />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold">Preferred Time</label>
                    <input type="time" className="w-full p-2 text-black rounded" />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold">Message</label>
                    <textarea className="w-full p-2 text-black rounded" rows="4"></textarea>
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="px-6 py-2 bg-yellow-400 text-black font-bold rounded hover:bg-yellow-500">Send Message</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;
