'use client'
// import Arrow from './icons/arrow'
import Chevron from './icons/chevron'
import Dots from './icons/dots'
import Close from './icons/close'

export default function TopNavigator() {
    const CloseApp = () => {
        // if (window?.Telegram?.WebApp) {
        //     window?.Telegram.WebApp.close();
        // }
    }

    return (
        <div className="flex justify-between items-center">
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
