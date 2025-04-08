'use client'
import Image from "next/image";
import { Button, Spin } from 'antd';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

{/* <Image
className="dark:invert"
src="/next.svg"
alt="Next.js logo"
width={180}
height={38}
priority
/> */}

export default function Start() {
    const [filteredData, setFilteredData] = useState([1, 2, 3]);

    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{
                    nextEl: ".custom-next-new",
                    prevEl: ".custom-prev-new",
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                    dynamicMainBullets: 2,
                }}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    280: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    1280: {
                        slidesPerView: 1,
                        spaceBetween: 50,
                    },
                }}
            >
                {filteredData.map((item, i) => (
                    <SwiperSlide key={i}>
                        salom
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
