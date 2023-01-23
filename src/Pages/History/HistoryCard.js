import React, { useState } from 'react';
import useCollapse from 'react-collapsed'

const HistoryCard = ({ data }) => {
    const [isExpanded, setExpanded] = useState(false)
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })
    return (
        <div className='mb-3 bg-white rounded-xl'>
            <div className=' flex flex-col sm:flex-row sm:items-center justify-between w-full px-5 py-7 gap-5 sm:gap-0'>
                <h3 className='-semibold text-sm'>{data.username}</h3>
                <div className='flex flex-col justify-start text-left'>
                    <h3 className='font-semibold'>Contact</h3>
                    <h3 className='text-sm'>{data.name}</h3>
                </div>
                <div className='flex flex-col justify-start text-left'>
                    <h3 className='font-semibold'>City</h3>
                    <h3 className='text-sm'>{data.address.city}</h3>
                </div>
                <div className='flex flex-col justify-start text-left'>
                    <h3 className='font-semibold'>Street</h3>
                    <h3 className='text-sm'>{data.address.street}</h3>
                </div>
                <button
                    {...getToggleProps({
                        onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                    })}
                    className='rounded-2xl px-2 py-1 bg-blue-500 text-white hover:bg-blue-700 transition duration-500 text-sm'
                >
                    {isExpanded ? 'Hide Details' : 'View Details'}
                </button>
            </div>
            <div>
                <section className='w-full p-9 ' {...getCollapseProps()}>
                    <div className='px-5 py-5 shadow-lg border rounded-xl'>
                        <div>
                            <h3 className='font-semibold text-left'>Description</h3>
                            <p className="text-sm text-gray-400 text-left">
                                Providing service domestic flight booking @ lowest price guaranted and also for railway a ticket booking also offering international flight ticket giving service to our customers since 1995 now going to start hajj and umrah very soon for our valuable customers it will bealso very afffordable prices.
                            </p>
                        </div>
                        <div className='pt-5 flex items-start gap-9 md:gap-44 flex-col md:flex-row'>
                            <div>
                                <div className='flex flex-col justify-start text-left mb-3'>
                                    <h3 className='font-semibold'>Contact Person</h3>
                                    <h3 className='text-sm'>{data.company.name}</h3>
                                </div>
                                <div className='flex flex-col justify-start text-left mb-3'>
                                    <h3 className='font-semibold'>Designation</h3>
                                    <h3 className='text-sm'>{data.company.name}</h3>
                                </div>
                                <div className='flex flex-col justify-start text-left mb-3'>
                                    <h3 className='font-semibold'>Emails</h3>
                                    <h3 className='text-sm'>{data.email}</h3>
                                </div>
                                <div className='flex flex-col justify-start text-left mb-3'>
                                    <h3 className='font-semibold'>Phones</h3>
                                    <h3 className='text-sm'>{data.phone}</h3>
                                </div>
                            </div>
                            <div>
                                <div className='flex flex-col justify-start text-left mb-3'>
                                    <h3 className='font-semibold'>Address</h3>
                                    <div className='flex flex-col md:flex-row items-center gap-3'>
                                        <h3 className='text-sm'>{data.address.city}</h3>
                                        <h3 className='text-sm'>{data.address.street}</h3>
                                        <h3 className='text-sm'>{data.address.zipcode}</h3>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-start text-left mb-3'>
                                    <h3 className='font-semibold'>City</h3>
                                    <h3 className='text-sm'>{data.address.city}</h3>
                                </div>
                                <div className='flex flex-col justify-start text-left mb-3'>
                                    <h3 className='font-semibold'>Street</h3>
                                    <h3 className='text-sm'>{data.address.street}</h3>
                                </div>
                                <div className='flex flex-col justify-start text-left mb-3'>
                                    <h3 className='font-semibold'>Website</h3>
                                    <h3 className='text-sm'>{data.website}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default HistoryCard;