import React from 'react';

const Banner = () => {
    return (
        <div className='xl:px-48 px-5 md:px-20 lg:px-32 pt-5'>
            <div className='flex flex-col md:flex-row items-cetner gap-4'>
                <div className='md:w-72 w-full h-60 bg-white rounded-xl shadow-sm p-5'>
                    <h3 className='text-blue-500'>Try Bulk Search Now</h3>
                    <p className='text-gray-400 text-sm'>support.leadzen@gmail.com</p>
                    <div className='  rounded-lg shadow-xl border flex items-center justify-center w-full h-20 mt-3'>
                        <h3 className='border border-blue-500 px-2 py-1 rounded'>Search</h3>
                    </div>
                    <h3 className='border border-blue-500 px-2 py-1 rounded bg-blue-500 text-center mt-3'>Search</h3>
                </div>
                <div className='flex-1 h-60 rounded-xl bg-white shadow-sm p-5'>
                    <div className='flex items-center gap-7'>
                        <div className='w-full md:w-72 bg-blue-500 text-white rounded-3xl h-16 flex items-center justify-center flex-col'>
                            <h3 className='font-semibold'>Name, Email</h3>
                            <p>Linkedin URL</p>
                        </div>
                        <div className='w-full md:w-72 border-2 rounded-3xl h-16 flex items-center justify-center flex-col'>
                            <h3 className='font-semibold'>Name, Email</h3>
                            <p>Linkedin URL</p>
                        </div>
                    </div>
                    <div className='mt-5 flex items-cetner flex-col md:flex-row gap-7'>
                        <div className='p-7 rounded-full bg-blue-500'>
                            <i class="fa-solid fa-globe text-5xl text-white"></i>
                        </div>
                        <div className='flex-1 flex items-center w-full gap-5  md:pr-16'>
                            <input type="text" placeholder='Name or email , Linkedin URl' className='w-full h-9 rounded-xl border-2 border-gray-400 outline-none px-3 text-blue-500' />
                            <h3 className='border border-blue-500 px-2 py-1 rounded-xl bg-blue-500 text-center text-white'>Search</h3>

                        </div>
                        {/* <h3 className='text-xl mt-3'>Hey Get Started by Putting a Name, Email, Linkedin URL</h3> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;