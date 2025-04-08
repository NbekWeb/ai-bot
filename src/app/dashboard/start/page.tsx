'use client'
import Image from "next/image";
import { Button, Spin } from 'antd';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import WebApp from '@twa-dev/sdk'


export default function Start() {
    const [filteredData, setFilteredData] = useState([1, 2, 3]);

    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation={{
                    nextEl: ".custom-next-new",
                    prevEl: ".custom-prev-new",
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                    dynamicMainBullets: 2,
                }}
                loop={false}

                slidesPerView={1}
                spaceBetween={10}
            >
                {filteredData.map((item, i) => (
                    <SwiperSlide key={i}>
                        <div className="px-2.5 pb-8">
                            <Image
                                className="w-full  "
                                src="/robo1.png"
                                alt="Robot"
                                width={180}
                                height={38}
                                priority
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
