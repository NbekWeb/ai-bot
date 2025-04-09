'use client'
import Image from "next/image";
import { Button, Spin } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Arrow from "@/components/icons/arrow";
import SwiperCore from "swiper";

export default function Start() {
    const [filteredData, setFilteredData] = useState([1, 2, 3]);
    const [last, setLast] = useState(false);
    const swiperRef = useRef<SwiperCore>(null);
    const router = useRouter();

    const handleNextClick = () => {
        if (!swiperRef.current) return;

        const swiper = swiperRef.current;
        if (swiper.isEnd && !last) {
            setLast(true)
        }
    };

    const goNext = () => {
        router.push('/dashboard/gender');
    }

    return (
        <div className="pb-7">
            <Swiper
                modules={[Navigation, Pagination]}
                navigation={{
                    nextEl: ".custom-next-new",
                    prevEl: ".custom-prev-new",
                }}
                pagination={{
                    clickable: false,
                    dynamicBullets: true,
                    dynamicMainBullets: 2,
                }}
                loop={false}
                allowTouchMove={false}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
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
                <p className="text-center text-gray-700 font-light text-sm mt-1 mb-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
            </div>
            <div className="flex max-w-max text-xl text-dark-200 mx-auto shadow-btn gap-7 p-4.5 rounded-xl items-center">

                <button className="rotate-180  custom-prev-new text-gray-200">

                    <Arrow className=" text-gray-200" />
                </button>
                <span className="bg-gray-300 h-5 w-0.5 flex min-w-0.5"></span>

                <button className={!last ? 'custom-next-new' : 'hidden'} onClick={handleNextClick} >
                    <Arrow />
                </button>
                <button className={last ? '' : 'hidden'} onClick={goNext} >
                    <Arrow />
                </button>

            </div>
        </div>
    );
}
