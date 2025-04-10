'use client'

import { useState } from 'react';
import TypeCard from '@/components/typeCard'
import Search from '@/components/icons/search';
import Close from '@/components/icons/close';

export default function MainPage() {
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const clearInput = () => {
        if (!searchQuery) {

            setSearchQuery('');
        }
    };

    const cards = new Array(10).fill({ title: "Realistic", to: 'main/card/1' })

    return (
        <div>
            <div className='px-4 mb-9'>
                <h2 className='text-xl font-semibold text-dark-100 text-center mb-4'>
                    AI.bot
                </h2>
                <div className='h-14 w-full  flex gap-2 items-center'>
                    <div className='h-full flex gap-3 items-center px-4 flex-grow bg-dark-200/[3%] rounded-2xl'>
                        <Search className='text-22 text-gray-600' />
                        <input placeholder='Search...'
                            value={searchQuery}
                            onChange={handleInputChange}
                            className='main-input text-dark-100 font-medium flex-grow bg-transparent border-none outline-none' />
                    </div>
                    <div onClick={clearInput} className={`${!searchQuery ? 'opacity-30' : 'hover:opacity-85'} transition-all duration-300 bg-dark-100 text-white rounded-2xl h-full w-14 flex items-center justify-center`}>
                        <Close className='text-2xl' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-5.5'>
                {cards.map((card, index) => (
                    <TypeCard key={index} data={card} to={card?.to} />
                ))}
            </div>
        </div>
    );
}
