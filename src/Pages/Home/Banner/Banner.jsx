import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

import './styles.css';

const Banner = () => {
    const slides = [
        {
            imageUrl: "https://i.ibb.co/k95zW2G/frames-for-your-heart-2d4l-AQAlb-DA-unsplash.jpg",
            number: "01",
            headline: "Apartments",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi corporis nostrum numquam perferendis alias fugit veniam assumenda incidunt beatae? Aperiam!"
        },
        {
            imageUrl: "https://i.ibb.co/gMXhyG4/bernard-hermant-g9yd-DMdpf-M0-unsplash.jpg",
            number: "02",
            headline: "Condominium",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi corporis nostrum numquam perferendis alias fugit veniam assumenda incidunt beatae? Aperiam!"


        },
        {
            imageUrl: "https://i.ibb.co/DGVjq4M/etienne-beauregard-riverin-B0a-Cv-AVSX8-E-unsplash.jpg",
            number: "01",
            headline: "Townhome",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi corporis nostrum numquam perferendis alias fugit veniam assumenda incidunt beatae? Aperiam!"

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
                        <div className="absolute top-5 left-5 p-4  text-black w-full">
                            <div className='gap-3'>
                            <div className='flex  justify-center items-center text-center gap-3'>
                            <div className="text-blue-600 text-[100px] md:text-[90px] sm:text-[40px] font-extrabold">{slide.number}</div>
                           
                           <div className="text-blue-500 text-[60px]  md:text-[45px] sm:text-[20px] font-extrabold text-center">{slide.headline}</div>
                            </div>
                            <p className="text-white text-2xl  md:text-xl sm:text-md font-bold  text-center">{slide.text}</p>

                            </div>
                            <div>
                            

                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;
