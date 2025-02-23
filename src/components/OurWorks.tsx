// 'use client';

// import React, { useState } from 'react';
// import { BiSolidUpArrow } from 'react-icons/bi';
// import { FaArrowRight } from 'react-icons/fa';
// import Cards from './Cards';

// const services = [
//   "Listing Video",
//   "Listing Flyer",
//   "Photo Banner",
//   "Email Signature",
//   "Logo",
//   "Custom Website",
//   "Landing Page",
//   "Digital Business Card",
//   "Targeted Ad Campaign",
//   "Social Dashboard"
// ];

// const OurWorks = () => {
//   const [activeService, setActiveService] = useState<string>("Logo");

//   return (
//     <div className="max-w-[1440px] w-full mx-auto mb-44">
//       <div className="w-full max-w-4xl px-6 !leading-[1.2] mx-auto text-center">
//         <h2 className="text-3xl lg:text-5xl font-bold text-darkIndigo">
//           Get a fully dedicated design team for a fraction of the cost
//         </h2>
//         <p className="mt-10 px-16 text-xl text-default">
//           Get all your digital, print and video content created under one roof without
//           the expensive hourly rates or variable costs you’d see from a freelancer.
//         </p>
//         <button className="relative inline-flex items-center px-11 mt-10 mb-16 py-2.5 text-lightIndigo overflow-hidden text-base font-medium rounded-full group bg-darkIndigo">

//           <span className="absolute left-0 block w-full h-0 transition-all bg-darkIndigo opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
          
//           <span className="absolute right-0 flex items-center justify-center w-20 h-14 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
//             <FaArrowRight className="-rotate-45" />
//           </span>

//           <span className="relative duration-300 transform translate-x-0 group-hover:-translate-x-4 ease">
//             View our Work
//           </span>
//         </button>
//       </div>
//       {/* Services List */}
//       <div className="flex flex-wrap justify-around bg-indigo p-4 rounded-full">
//         {services.map((service, index) => (
//           <div className="relative" key={index}>
//             <button
//               onClick={() => setActiveService(activeService === service ? "" : service)}
//               className="text-base w-fit h-fit px-2 text-lightIndigo rounded-full transition-all font-medium"
//             >
//               <span className="inline-block whitespace-nowrap relative">
//                 <span
//                   className={`absolute inset-0 font-bold ${
//                     activeService === service ? "visible" : "invisible"
//                   }`}
//                 >
//                   {service}
//                 </span>
//                 <span className={activeService === service ? "invisible" : "visible"}>
//                   {service}
//                 </span>
//               </span>
//             </button>

//             {/* Add arrow down below the active service */}
//             {activeService === service && (
//               <BiSolidUpArrow size={28} className="text-lightIndigo h-[20px] w-6 absolute left-1/2 transform -translate-x-1/2 bottom-[-20px] text-2xl transition-all" />
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Active Service Content */}
//       {activeService && (
//         <div className="mt-8">
//             <Cards service={activeService} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default OurWorks;


'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Cards from './Cards';
import Container from './Container';

const services = [
  "Listing Video",
  "Listing Flyer",
  "Photo Banner",
  "Email Signature",
  "Logo",
  "Custom Website",
  "Landing Page",
  "Digital Business Card",
  "Targeted Ad Campaign",
  "Social Dashboard"
] as const;

type ServiceType = typeof services[number];

const OurWorks = () => {
  const [activeService, setActiveService] = useState<ServiceType>("Logo");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const checkScroll = () => {
      if (scrollRef.current) {
        setCanScrollLeft(scrollRef.current.scrollLeft > 0);
        setCanScrollRight(
          scrollRef.current.scrollLeft + scrollRef.current.clientWidth < scrollRef.current.scrollWidth
        );
      }
    };
    checkScroll();
    scrollRef.current?.addEventListener("scroll", checkScroll);
    return () => scrollRef.current?.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth / 2;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Container>
      <div className="w-full my-16 xl:my-44">
        <div className="w-full max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl xl:text-6xl font-bold text-darkIndigo md:max-w-2xl lg:max-w-full md:px-10 lg:px-0 text-center">
          Real Estate Branding & Design That Makes an Impact
          </h2>
          <p className="xl:mt-10 md:mt-6 mt-4 text-sm md:text-xl text-default md:px-16 lg:px-20 text-center">
          See how our premium branding, design, and web solutions help real estate professionals stand out and grow their business
          </p>
        </div>

        {/* Scrollable Services List */}
        <div className="relative w-full mx-auto rounded-lg xl:mt-16 md:mt-10 mt-6">
          {canScrollLeft && (
            <div className="absolute left-0 h-full w-28 rounded-l-lg bg-gradient-to-l from-transparent to-lightIndigo/80 pointer-events-none" />
          )}
          {canScrollLeft && (
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-[#E0D9FF] p-2"
              onClick={() => scroll('left')}
            >
              <FaChevronLeft className="text-darkIndigo" />
            </button>
          )}

          <div
            ref={scrollRef}
            style={{scrollbarWidth: "none"}}
            className="flex overflow-x-auto bg-transparent border-gray-300 border rounded-lg items-center scrollbar-hide"
          >
            {services.map((service) => (
              <button
                key={service}
                onClick={() => setActiveService(service)}
                className={`px-3 mx-auto py-3 whitespace-nowrap font-medium transition-all duration-300 border-b-4 ${
                  activeService === service ? 'border-indigo bg-[#E0D9FF] text-darkIndigo' : 'border-transparent text-default'
                }`}
              >
                {service}
              </button>
            ))}
          </div>

          {canScrollRight && (
            <div className="absolute right-0 top-0 h-full rounded-r-lg w-28 bg-gradient-to-r from-transparent to-lightIndigo/80 pointer-events-none" />
          )}
          {canScrollRight && (
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-darkIndigo p-2"
              onClick={() => scroll('right')}
            >
              <FaChevronRight className="text-darkIndigo" />
            </button>
          )}
        </div>

        {/* Active Service Content */}
        {activeService && (
          <div className="lg:mt-12 md:mt-10 mt-6">
            <Cards service={activeService} />
          </div>
        )}
      </div>
    </Container>
  );
};

export default OurWorks;



// 'use client';

// import React, { useState, useRef, useEffect } from 'react';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// const services = [
//   "E-commerce",
//   "Agency",
//   "Saas",
//   "Consulting",
//   "Beauty Services",
//   "Health & Wellness",
//   "Real Estate",
//   "E-commerce",
//   "Agency",
//   "Saas",
//   "Consulting",
//   "Beauty Services",
//   "Health & Wellness",
//   "Real Estate",
//   "Travel & Tourism"
// ] as const;

// type ServiceType = typeof services[number];

// const ServicesMenu = () => {
//   const [activeService, setActiveService] = useState<ServiceType>("Saas");
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const [canScrollLeft, setCanScrollLeft] = useState(false);
//   const [canScrollRight, setCanScrollRight] = useState(true);

//   useEffect(() => {
//     const checkScroll = () => {
//       if (scrollRef.current) {
//         setCanScrollLeft(scrollRef.current.scrollLeft > 0);
//         setCanScrollRight(
//           scrollRef.current.scrollLeft + scrollRef.current.clientWidth < scrollRef.current.scrollWidth
//         );
//       }
//     };
//     checkScroll();
//     scrollRef.current?.addEventListener("scroll", checkScroll);
//     return () => scrollRef.current?.removeEventListener("scroll", checkScroll);
//   }, []);

//   const scroll = (direction: 'left' | 'right') => {
//     if (scrollRef.current) {
//       const { scrollLeft, clientWidth } = scrollRef.current;
//       const scrollAmount = clientWidth / 2;
//       scrollRef.current.scrollTo({
//         left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
//         behavior: 'smooth'
//       });
//     }
//   };

//   return (
//     <div className="relative w-full max-w-4xl mx-auto rounded-xl">
//       {canScrollLeft && (
//         <div className="absolute left-0 h-full w-32 rounded-l-xl bg-gradient-to-l from-transparent to-lightIndigo/80 pointer-events-none" />
//       )}
//       {canScrollLeft && (
//         <button
//           className="absolute left-0 top-1/2 transform -translate-y-1/2 text-blue-500 p-2"
//           onClick={() => scroll('left')}
//         >
//           <FaChevronLeft className="text-blue-600" />
//         </button>
//       )}

//       <div
//         ref={scrollRef}
//         style={{scrollbarWidth: "none"}}
//         className="flex gap- overflow-x-auto bg-transparent border-gray-300 border rounded-xl items-center"
//       >
//         {services.map((service) => (
//           <button
//             key={service}
//             onClick={() => setActiveService(service)}
//             className={`px-4 py-4 whitespace-nowrap font-medium hover:text-blue-500 transition-all duration-300 border-b-4 ${
//               activeService === service ? 'border-blue-500 bg-blue-100 text-blue-600' : 'border-transparent text-gray-700'
//             }`}
//           >
//             {service}
//           </button>
//         ))}
//       </div>
//       {canScrollRight && (
//         <div className="absolute right-0 top-0 h-full w-32 rounded-r-xl bg-gradient-to-r from-transparent to-lightIndigo/80 pointer-events-none" />
//       )}
//       {canScrollRight && (
//         <button
//           className="absolute right-0 top-1/2 transform -translate-y-1/2 text-blue-500 p-2"
//           onClick={() => scroll('right')}
//         >
//           <FaChevronRight className="text-blue-600" />
//         </button>
//       )}
//     </div>
//   );
// };

// export default ServicesMenu;
