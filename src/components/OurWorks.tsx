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

import React, { useState } from 'react';
import { BiSolidUpArrow } from 'react-icons/bi';
import { FaArrowRight } from 'react-icons/fa';
import Cards from './Cards';

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

  return (
    <div className="max-w-[1440px] w-full mx-auto mb-44">
      <div className="w-full max-w-4xl px-6 !leading-[1.2] mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-darkIndigo">
          Get a fully dedicated design team for a fraction of the cost
        </h2>
        <p className="mt-10 px-16 text-xl text-default">
          Get all your digital, print, and video content created under one roof without
          the expensive hourly rates or variable costs you’d see from a freelancer.
        </p>
        <button className="relative inline-flex items-center px-11 mt-10 mb-16 py-2.5 text-lightIndigo overflow-hidden text-base font-medium rounded-full group bg-darkIndigo">
          <span className="absolute left-0 block w-full h-0 transition-all bg-darkIndigo opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
          <span className="absolute right-0 flex items-center justify-center w-20 h-14 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
            <FaArrowRight className="-rotate-45" />
          </span>
          <span className="relative duration-300 transform translate-x-0 group-hover:-translate-x-4 ease">
            View our Work
          </span>
        </button>
      </div>

      {/* Services List */}
      <div className="flex flex-wrap justify-around bg-indigo p-4 rounded-full">
        {services.map((service, index) => (
          <div className="relative" key={index}>
            <button
              onClick={() => setActiveService(activeService === service ? "Logo" : service)}
              className="text-base w-fit h-fit px-2 text-lightIndigo rounded-full transition-all font-medium"
            >
              <span className="inline-block whitespace-nowrap relative">
                <span
                  className={`absolute inset-0 font-bold ${
                    activeService === service ? "visible" : "invisible"
                  }`}
                >
                  {service}
                </span>
                <span className={activeService === service ? "invisible" : "visible"}>
                  {service}
                </span>
              </span>
            </button>

            {activeService === service && (
              <BiSolidUpArrow
                size={28}
                className="text-lightIndigo h-[20px] w-6 absolute left-1/2 transform -translate-x-1/2 bottom-[-20px] text-2xl transition-all"
              />
            )}
          </div>
        ))}
      </div>

      {/* Active Service Content */}
      {activeService && (
        <div className="mt-8">
          <Cards service={activeService} />
        </div>
      )}
    </div>
  );
};

export default OurWorks;
