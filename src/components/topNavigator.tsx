'use client'
import { closeMiniApp } from '@telegram-apps/sdk';
import Chevron from './icons/chevron'
import Dots from './icons/dots'
import Close from './icons/close'
import { useEffect } from 'react';

export default function TopNavigator() {

    const CloseApp = () => {

    }

    return (
        <div className="flex justify-between items-center mb-3.5">
            <div onClick={CloseApp} className='text-black/20 text-xs flex bg-white-200 gap-3 items-center rounded-2xl h-9 px-2.5 '>
                <Close className="text-xl" />
                <span className=''>Закрыть</span>
            </div>
            <div className='text-black/20 text-2xl flex bg-white-200 gap-3 items-center rounded-2xl h-9 px-2.5 '>
                <Chevron className="" />
                <Dots className="" />

            </div>
        </div>
    );
}
