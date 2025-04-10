'use client'
import { useParams, useRouter } from 'next/navigation';
import BackIcon from '@/components/icons/back';
import Settings from '@/components/icons/settings'
import Arrow from '@/components/icons/arrow';
import { useState } from 'react';
import TypeCard from '@/components/typeCard';

export default function SingleCard() {
    const [type, setType] = useState('')
    const params = useParams();
    const router = useRouter();
    const id = params.id;
    const cards = new Array(12).fill({ title: "Realistic" })
    const changeType = () => {
        if (!type) {
            setType('row')
        }
        else {
            setType('')
        }
    }
    const goBack = () => {
        router.push('/dashboard/main');
    }


    return (
        <div>
            <div className='flex items-center justify-between'>
                <button onClick={goBack} className='h-8 w-8 flex   back-btn-shadow  bg-white/60 rounded-xl  items-center justify-center '>
                    <BackIcon className='text-dark-full text-xl' />
                </button>
                <h2 className='text-xl font-semibold text-dark-100'>Realistic</h2>
                <button
                    onClick={changeType}
                    className={`${!!type ? 'bg-dark-100 text-white ' : 'bg-white/60 text-dark-full'} h-12 w-12 flex   back-btn-shadow   rounded-full  items-center justify-center`}>
                    <Settings className=' text-2xl' />
                </button>
            </div>
            <div className='mt-5.5 flex flex-col gap-5'>

                <div className={`${!type ? 'grid-cols-3' : 'grid-cols-1 max-h-56 overflow-y-auto'} grid  gap-x-3.5 gap-y-5`}>
                    {cards.map((card, index) => (
                        <TypeCard key={index} data={card} type='grid' />
                    ))}  </div>
                <div className='grid grid-cols-3 gap-x-3.5 gap-y-5 '>
                    {cards.map((card, index) => (
                        <TypeCard key={index} data={card} type='grid' />
                    ))}  </div>
            </div>
        </div>
    );
}
