import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HeroNavbar = () => {
    const [isOpen, setOpen] = useState(false)

    const [menuOpen, setMenuOpen] = useState(false)
    const [nav, setNav] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        function activateNav() {
            let scrollPosition = window.pageYOffset
            if (scrollPosition > 200) {
                setNav(true)
            }
            else if (scrollPosition < 10) {
                setNav(false)
            }
        }
        window.addEventListener("scroll", activateNav)
    }, [])

    return (
        <div>
            <div className={`z-50 w-full bg-white border-b print:hidden lg:py-4 py-4 transition  lg:px-32 ease-in-out xl:px-36  ${nav && 'fixed top-0 ease-in duration-500 '}`}>
                <nav class="relative dark:bg-gray-800 px-5">
                    <div class="">
                        <div class="lg:flex lg:items-center lg:justify-between">
                            <div class="flex items-center justify-between">
                                <div class="text-xl font-semibold text-gray-700">
                                    <a class="text-2xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-700 dark:hover:text-gray-300" href="#"> <i class="fa-solid fa-shield-halved"></i>Leadzen.JI</a>
                                </div>

                                {/* <!-- Mobile menu button --> */}
                                <div class="flex lg:hidden">
                                    <button onClick={() => setOpen(!isOpen)} type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                        {
                                            isOpen ?
                                                <svg x-show="isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                                    stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                                :
                                                <svg x-show="!isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                                                </svg>
                                        }
                                    </button>
                                </div>
                            </div>

                            {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
                            <div className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center  ${isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full'}`}>
                                <div class="flex flex-col lg:flex-row lg:items-center ">
                                    <Link to='/' class="px-3 py-2 mx-2 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-500 "><i class="fa-solid fa-house pr-1"></i> Home</Link>
                                    <a href="#courses" class="px-3 py-2 mx-2 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-500"><i class="fa-regular fa-clock pr-1"></i> History</a>
                                    <a href='#services' class="px-3 py-2 mx-2 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-500"><i class="fa-solid fa-chart-line pr-1"></i> Trending Leads</a>
                                    <Link to='/dashboard' class="px-3 py-2 mx-2 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100  dark:hover:bg-gray-700 hover:text-blue-500"><i class="fa-regular fa-comments pr-1"></i> Engage</Link>
                                    <a href="#blogs" class="px-3 py-2 mx-2 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-500"><i class="fa-solid fa-location-dot pr-1 "></i> Geolocation</a>
                                </div>

                                <div class="flex items-center mt-4 lg:mt-0">
                                    <button class="hidden mr-4 text-gray-700 transition-colors duration-300 transform lg:block dark:text-gray-200 hover:bg-blue-500 hover:text-white dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none border-2 border-blue-500 rounded-3xl px-5 py-2">
                                        2023 Credits Left
                                    </button>

                                    <button type="button" class="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                                        <div class="w-11 h-11 overflow-hidden flex items-center justify-center rounded-full bg-blue-500">
                                            <i class="fa-solid fa-user text-xl text-white"></i>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav >
            </div >
        </div>
    );
};

export default HeroNavbar;




{/* <nav class="lg:flex lg:justify-between lg:items-center">
    <div class="flex items-center justify-between lg:hidden">
        <div className='flex items-center gap-3'>
            <h3><i class="text-4xl text-blue-500  fa-solid fa-computer"></i></h3>
            <p className="text-2xl font-bold ">
                COPlus
            </p>
        </div>
        <div class="flex lg:hidden">
            <button onClick={() => setOpen(!isOpen)} type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                {
                    isOpen ?
                        <svg x-show="isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        :
                        <svg x-show="!isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                        </svg>
                }
            </button>
        </div>
    </div>
    <div className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-gray-900 md:bg-transparent md:dark:bg-transparent md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between ${isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full'}`}>

        <div className='hidden md:block flex items-center gap-3'>
            <h3><i class="text-4xl text-blue-500  fa-solid fa-computer"></i></h3>
            <p className="text-2xl font-bold ">
                COPlus
            </p>
        </div>

        <div class="flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:space-y-0">
            <a class="text-gray-700 font-bold hover:text-white lg:mr-9 dark:text-gray-200 " href="#">Home</a>
            <a class=" text-gray-700 font-bold lg:mx-9 " href="#">Components</a>
            <a class="text-gray-700 font-bold hover:text-white lg:mx-9 " href="#">Pricing</a>
            <Link to='/contact' class="text-gray-200 font-bold hover:text-white lg:mx-9 ">Contact</Link>
            <a class="text-gray-200 font-bold hover:text-white lg:mx-9" href="#">FAQ</a>
            <Link to='/contact' class="block h-10 px-5 py-2 mt-4 text-sm text-center text-gray-200 capitalize transition-colors duration-300 transform border rounded-md font-bold hover:text-gray-700 dark:text-gray-900 lg:mt-0 hover:bg-gray-100 lg:w-auto" >
                Contact Us
            </Link>
        </div>


    </div>
</nav > */}
