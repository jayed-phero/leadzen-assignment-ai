import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import HistoryCard from './HistoryCard';

const History = () => {

    const { data: history = [], isLoading, refetch } = useQuery({
        queryKey: ['cpcourses'],
        queryFn: () => fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())

    })

    console.log(history)

    return (
        <div className='xl:px-48 px-5 md:px-20 lg:px-32 pt-3'>
            <div className='flex flex-col md:flex-row items-cetner gap-4'>
                <div className='md:w-72 w-full bg-white rounded-xl shadow-sm pb-32'>

                </div>
                <div className='md:flex-1 w-full p'>
                    <div className='flex mb-5 items-cetner flex-col md:flex-row justify-between'>
                        <h3 className='text-lg font-semibold'><i class="fa-solid fa-list pr-2"></i> History</h3>
                        <input type="text" placeholder='Search' className='md:w-72 w-full h-7 rounded-lg border-2 border-gray-400 outline-none px-3' />
                    </div>

                    <div className='w-full'>
                        {
                            history.map((data) => 
                                <HistoryCard key={data.id} data={data} />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default History;