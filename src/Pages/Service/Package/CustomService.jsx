import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

const CustomService = () => {
    const benefitsList = [
        {
            name: "Project Plan Cost",
            price: 10,
            imageUrl: "https://i.ibb.co/1rHH3Q1/2345.jpg",
            description: "Get a detailed and comprehensive project plan tailored to your specific needs, ensuring a smooth and successful project execution."
        },
        {
            name: "Premium Listing",
            price: 50,
            imageUrl: "https://i.ibb.co/rd1ZsBQ/4682641.jpg",
            description: "Stand out with a premium listing that highlights your property, increasing visibility and attracting more potential buyers or renters."
        },
        {
            name: "Free Documentation",
            price: 45,
            imageUrl: "https://i.ibb.co/cCCMhrc/OF71Y10.jpg",
            description: "We handle all the necessary paperwork and documentation for you, ensuring a hassle-free process with no hidden costs."
        },
        {
            name: "Full Assistance",
            price: 70,
            imageUrl: "https://i.ibb.co/Sw133h8/7758834.jpg",
            description: "Receive full assistance from our dedicated team throughout the entire process, from initial consultation to finalizing the deal."
        },
        {
            name: "Dedicated Agent Support",
            price: 100,
            imageUrl: "https://i.ibb.co/ThcCCtg/5113470.jpg",
            description: "Benefit from the expertise of a dedicated agent who will personally manage your property and ensure your needs are met."
        },
        {
            name: "Home Staging",
            price: 80,
            imageUrl: "https://i.ibb.co/StBnmFz/Wavy-REst-01-Single-06.jpg",
            description: "Enhance the appeal of your property with professional home staging, making it more attractive to potential buyers or renters."
        }
    ];

    const [selectedBenefits, setSelectedBenefits] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const handleSelectBenefit = (benefit, number) => {
        const isSelected = selectedBenefits.some(item => item.name === benefit.name);
    
        if (isSelected && number === 1) {
            toast.info("This benefit has already been added.", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } 
        else if (isSelected && number === 2) {
            setSelectedBenefits(selectedBenefits.filter(item => item.name !== benefit.name));
            toast.success("Benefit removed.", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setTotalPrice(totalPrice - benefit.price);
        } else {
            setSelectedBenefits([...selectedBenefits, benefit]);
            toast.success("Benefit added!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setTotalPrice(totalPrice + benefit.price); 
        }
    };

    const handlePurchase = () => {
        Swal.fire({
            title: 'Confirm Purchase',
            html: `<p class="font-semibold">You are about to purchase the following benefits: <span class="text-blue-600">${selectedBenefits.map(b => b.name).join(", ")}</span> for <span class="text-green-400">$${totalPrice} </span>. Are you sure?</p>`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, complete purchase'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Purchased!',
                    'Your custom service has been purchased successfully.',
                    'success'
                );
            setTotalPrice(0); 

            }
        });
    };

    return (
        <div className=" mx-auto my-[130px] ">
            <h1 className="text-5xl font-bold text-center mb-[80px]">Build Your Custom <span className='text-blue-700'> Service</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {benefitsList.map((benefit, idx) => (
                    <div key={idx} className=" p-1 border rounded-lg shadow-lg ">
                        <div className='flex justify-center'>
                            <img className='w-full h-[350px]' src={benefit.imageUrl} alt={benefit.name} />
                        </div>
                        <div className='flex-row text-center my-2'>
                            <div className='my-2'>
                            <p className='text-2xl font-bold mb-2'>{benefit.name} - <span className='text-green-600'>${benefit.price}</span></p>
                            <p className='text-gray-700 mb-2'>{benefit.description}</p>
                                </div>
                            <div className='flex justify-center gap-5 my-7'>
                                <div>
                                    <button className='bg-green-500 p-2 font-bold border rounded-lg'
                                        onClick={() => handleSelectBenefit(benefit, 1)}
                                    >
                                        Add
                                    </button>
                                </div>
                                <div>
                                    <button className='bg-red-500 p-2 font-bold border rounded-lg'
                                        onClick={() => handleSelectBenefit(benefit, 2)}
                                    >
                                        Remove
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-8">
                <p className="text-2xl font-bold">Total Price: <span className="text-green-600">${totalPrice}</span></p>
                <button
                    className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-orange-500"
                    onClick={handlePurchase}
                >
                    Purchase
                </button>
            </div>
         
            {/* Add ToastContainer once in your component */}
            <ToastContainer />
        </div>
    );
};

export default CustomService;
