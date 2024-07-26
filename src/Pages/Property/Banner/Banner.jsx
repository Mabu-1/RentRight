import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import './styles.css';


const Banner = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease',
            // Add more options as needed
        });
    }, []);

    const slides = [
        {
            imageUrl: "https://i.ibb.co/k95zW2G/frames-for-your-heart-2d4l-AQAlb-DA-unsplash.jpg",
            price: "$180.000",
            discount: "30% OFF",
        },
        {
            imageUrl: "https://i.ibb.co/gMXhyG4/bernard-hermant-g9yd-DMdpf-M0-unsplash.jpg",
            price: "$290.000",
            discount: "40% OFF",


        },
        {
            imageUrl: "https://i.ibb.co/DGVjq4M/etienne-beauregard-riverin-B0a-Cv-AVSX8-E-unsplash.jpg",
            price: "$280.000",
            discount: "24%  OFF",

        }
    ];

    useEffect(() => {
        const updateBulletContent = () => {
            const bullets = document.querySelectorAll('.swiper-pagination-bullet');
            bullets.forEach((bullet, index) => {
                if (bullet.classList.contains('swiper-pagination-bullet-active')) {
                    bullet.innerHTML = index + 1;
                } else {
                    bullet.innerHTML = '<img src="' + slides[index].imageUrl + '" alt="">';
                }
            });
        };

        const swiper = document.querySelector('.swiper').swiper;
        swiper.on('slideChange', updateBulletContent);
        swiper.on('paginationUpdate', updateBulletContent);

        // Initial update
        updateBulletContent();
    }, []);

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + ' swiper-custom-pagination">' +
                '<img src="' + slides[index].imageUrl + '" alt="">' +
                '</span>';
        },
    };

    return (
        <div className='mb-3'>
            <Swiper
                pagination={pagination}
                modules={[Pagination, Autoplay]}
                autoplay={{
                    delay: 3000, // Time in milliseconds before the next slide
                    disableOnInteraction: false, // Continue auto-slide after interaction
                }}
                className="mySwiper"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} style={{ backgroundImage: `url(${slide.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '500px', width: '100%' }} className=''>
                        <div className="relative w-full h-full">
                            <div className="absolute top-[80px] right-[70px] p-4 text-black" data-aos="zoom-in">
                                <div className='border-2 border-black  rounded-full bg-yellow-400 text-center p-1 transform translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] flex items-center justify-center shadow-lg'>
                                    <p className="text-blue-600 text-5xl font-extrabold">{slide.discount}</p>
                                </div>
                            </div>
                            <div className="absolute bottom-5 left-5 p-4 text-black" data-aos="fade-left">
                                <div className='border-2 border-black rounded-lg w-[260px] bg-yellow-400 text-center p-1'>
                                    <div className="text-green-600 text-5xl font-extrabold">{slide.price}</div>
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;
