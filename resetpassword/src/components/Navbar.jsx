import React, { useState } from "react";

const Navbar = () => {
    const [isClick, setisClick] = useState(false);

    const toggleNavbar = () => {
        setisClick(!isClick);
    };
    
    return (
        <>
        <nav className="bg-transparent fixed inset-x-0 top-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <a href="#" className="">
                                <img src="/images/svara-logo.png" alt="Logo Svara" srcset="" width="150px" height="100px" />
                            </a>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center space-x-4">
                            <a 
                            href="#"
                            className="text-[12px] text-black text-opacity-50 hover:text-black tracking-[1px] transition-color duration-200 rounded-lg p-2"
                            ><b>WEBPLAY</b></a>
                            <a 
                            href="#"
                            className="text-[12px] text-black text-opacity-50 hover:text-black tracking-[1px] transition-color duration-200 rounded-lg p-2"
                            ><b>DOWNLOAD</b></a>
                            <a 
                            href="#"
                            className="text-[12px] text-black text-opacity-50 hover:text-black tracking-[1px] transition-color duration-200 rounded-lg p-2"
                            ><b>FEATURES</b></a>
                            <a 
                            href="#"
                            className="text-[12px] text-black text-opacity-50 hover:text-black tracking-[1px] transition-color duration-200 rounded-lg p-2"
                            ><b>CONTACT</b></a>
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            className="inline-flex items-center bg-black justify-center p-2 rounded-md text-white hover:text-white
                            focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            onClick={toggleNavbar}
                        >
                            {isClick ? (
                                <svg  className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor" >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            ) : (
                                <svg  className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M4 6h16M4 12h16m-7 6h7"/>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isClick && (
                <div className="md:hidden">
                    <div className="bg-black px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a 
                        href="#"
                        className="block text-[12px] text-white text-opacity-50 hover:text-white tracking-[1px] transition-color duration-200 rounded-lg p-2"
                        >WEBPLAY</a>
                        <a 
                        href="#"
                        className="block text-[12px] text-white text-opacity-50 hover:text-white tracking-[1px] transition-color duration-200 rounded-lg p-2"
                        >DOWNLOAD</a>
                        <a 
                        href="#"
                        className="block text-[12px] text-white text-opacity-50 hover:text-white tracking-[1px] transition-color duration-200 rounded-lg p-2"
                        >FEATURES</a>
                        <a 
                        href="#"
                        className="block text-[12px] text-white text-opacity-50 hover:text-white tracking-[1px] transition-color duration-200 rounded-lg p-2"
                        >CONTACT</a>
                    </div>
                </div>
            )}
        </nav>
        </>
    )
}

export default Navbar;