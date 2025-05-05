import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import TypewriterWithSound from './TypewriterWithSound';
import thumbnail from '../../public/hero.jpg';
import { useEffect, useState } from "react";

const AboutHero = () => {
    const [showBox, setShowBox] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY < lastScrollY) {
            // Scrolling up
            setShowBox(true);
        } else {
            // Scrolling down
            setShowBox(false);
        }

        setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <div className="w-full max-w-[1440px] mx-auto px-5">
            <section className="relative bg-darkIndigo flex items-center w-full max-w-[1440px] mx-auto px-5 min-h-[calc(80vh-80px)] sm:min-h-[calc(90vh-80px)] md:min-h-[calc(100vh-80px)] overflow-hidden">
            {/* <section className="relative bg-darkIndigo flex items-center overflow-hidden w-full max-w-[1440px] mx-auto px-5"> */}
                {/* Text and Button */}
                <div className="z-10">
                    <h1 className="text-white text-3xl md:text-5xl font-bold mb-2">
                        We are BrandNasu,
                    </h1>
                    <p className="text-white text-3xl md:text-5xl font-bold mb-12 flex items-center">
                        <span>Real Estate D</span> <span className="text-white text-3xl md:text-5xl font-bold"><TypewriterWithSound text="igital Agency." speed={100} delayAfterComplete={2000} /></span>
                    </p>
                    <button className="relative inline-flex justify-between md:w-fit w-56 items-center px-11 py-2.5 text-white overflow-hidden text-base font-medium rounded-full group bg-indigo">
                    <span className="absolute left-0 block w-full h-0 transition-all bg-indigo opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span></span>
                    <span className="absolute right-0 hidden md:flex items-center justify-center w-20 h-14 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                        <FaArrowRight className="-rotate-45" />
                    </span>
                    <span className="relative duration-300 text-lg flex justify-center items-center md:transform md:translate-x-0 font-bold md:group-hover:-translate-x-4 ease">
                        Book A Demo
                    </span>
                    <FaArrowRight className="-rotate-45 block md:hidden" />
                    </button>
                </div>

                {/* Indigo Box */}
                <div
                    className={`absolute bg-indigo/70 w-[50%] h-48 z-10 bottom-0 right-0 transition-all duration-700 ease-in-out
                    ${showBox ? "opacity-0 translate-y-10" : "opacity-100 translate-y-0"}
                    `}
                ></div>

                {/* Image Positioned to the right */}
                <div className="absolute right-0 top-0 h-full w-[80%] overflow-hidden">
                    <Image
                        src={thumbnail}
                        alt="Thumbnail Image"
                        fill
                        className="object-cover overflow-hidden"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo/70 to-lightIndigo/0" />
                </div>
            </section>
        </div>
    );
};

export default AboutHero;

// import React from 'react';

// const AboutHero = () => {
//     return (
//         <div>
//             <section className="dark:bg-gray-100 dark:text-gray-800">
//                 <div className="container flex flex-col justify-center px-6 mx-auto lg:flex-row lg:justify-between">
//                     <div className="w-[30%] flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
//                         <h1 className="text-5xl font-bold leading-none sm:text-6xl">Ac mattis
//                             <span className="dark:text-violet-600">senectus</span>erat pharetra
//                         </h1>
//                         <p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
//                             <br  className="hidden md:inline lg:hidden" />turpis pulvinar, est scelerisque ligula sem
//                         </p>
//                         <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
//                             <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Suspendisse</a>
//                             <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800">Malesuada</a>
//                         </div>
//                     </div>
//                     <div className="w-[70%] flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
//                     <Image
//                         src={thumbnail}
//                         alt="Thumbnail Image"
//                         className="object-contain h-72 sm:h-80 lg:h-96 xl:h-[440px] w-full border border-red-500" />
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default AboutHero;