'use client'
import Image from "next/image";
import { Button, Spin } from 'antd';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Arrow from "@/components/icons/arrow";


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
                        <div className="px-2.5 pb-8 ">
                            <Image
                                className="w-full  "
                                src={`/robo${i + 1}.png`} alt="Robot"
                                width={180}
                                height={38}
                                priority
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="mt-3.5">
                <h2 className="font-semibold  text-3xl text-center ">
                    Unlock the Power
                    Of  Future AI
                </h2>
                <p className="text-white-700 font-light text-sm mt-1 mb-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
            </div>
            <div className="flex max-w-max text-xl text-dark-200 mx-auto shadow-btn gap-7 p-4.5 rounded-xl items-center">
                <Arrow className="rotate-180 custom-prev-new text-gray-200" />
                <span className="bg-gray-300 h-5 w-0.5 flex min-w-0.5"></span>
                <Arrow className="custom-next-new" />
            </div>
        </div>
    );
}
