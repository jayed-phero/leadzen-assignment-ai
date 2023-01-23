import React from 'react';

const HeroFooter = () => {
    return (
        <div className='my-16 flex items-center justify-center flex-col'>
            <h3 className='text-xl font-semibold'>Stay Connected With US</h3>
            <div className="flex items-center gap-5">
                <div className='flex items-center gap-5 pt-5'>
                    <div className='h-7 w-7 rounded-full flex items-center justify-center bg-blue-500 transition duration-500 hover:bg-blue-700 text-white'>
                        <i class="fa-brands fa-facebook "></i>
                    </div>
                </div>
                <div className='flex items-center gap-5 pt-5'>
                    <div className='h-7 w-7 rounded-full flex items-center justify-center bg-blue-500 transition duration-500 hover:bg-blue-700 text-white'>
                        <i class="fa-brands fa-youtube"></i>
                    </div>
                </div>
                <div className='flex items-center gap-5 pt-5'>
                    <div className='h-7 w-7 rounded-full flex items-center justify-center bg-blue-500 transition duration-500 hover:bg-blue-700 text-white'>
                        <i class="fa-brands fa-whatsapp"></i>
                    </div>
                </div>
                <div className='flex items-center gap-5 pt-5'>
                    <div className='h-7 w-7 rounded-full flex items-center justify-center bg-blue-500 transition duration-500 hover:bg-blue-700 text-white'>
                        <i class="fa-solid fa-layer-group"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroFooter;