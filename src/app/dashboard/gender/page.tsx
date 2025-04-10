'use client'
import Image from "next/image";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import BackIcon from "@/components/icons/back";

export default function GenderPage() {
    const [gender, setGender] = useState('');
    const router = useRouter();

    const changeGender = (val: string) => {
        setGender(val)
    }
    const goNext = () => {
        router.push('/dashboard/upload');
    }
    const goBack = () => {
        router.push('/dashboard/start');
    }

    return (
        <div>
            <button onClick={goBack} className="rounded-btn rounded-lg w-8 h-8 flex items-center justify-center  bg-white">
                <BackIcon />
            </button>
            <div className="flex justify-center">
                <Image
                    src='/logo.png' alt="logo"
                    width={140}
                    height={168}
                    className="h-42 w-auto"
                    priority
                />
            </div>
            <h2 className="text-4xl mt-7 font-bold font-urbanist text-center "> Welcome to
                <br />  AI.bot</h2>
            <p className="text-center mt-7 mb-3  font-medium text-sm text-gray-400 ">Укажите Ваш пол</p>
            <div className="flex flex-col  gap-5 w-full">
                <button className="h-14 font-urbanist font-bold text-white bg-dark-200 w-full flex items-center justify-center rounded-4xl border border-dark-200 hover:bg-white duration-300 hover:text-dark-200" onClick={goNext}>
                    Женщина
                </button>
                <button className="h-14 font-urbanist font-bold text-white border border-dark-200 bg-dark-200 w-full flex items-center justify-center rounded-4xl hover:bg-white duration-300 hover:text-dark-200" onClick={goNext}>
                    Мужчина
                </button>
            </div>
        </div>
    );
}
