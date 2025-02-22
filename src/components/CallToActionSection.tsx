// "use client";

// import React from "react";
// import { FaArrowRight } from "react-icons/fa";

// const CallToActionSection = () => {
//   return (
//     <div className="w-full max-w-[1440px] mx-auto h-auto flex flex-col items-center rounded-2xl justify-center overflow-hidden text-white relative py-16">
//       {/* Background Gradient */}
//       <div className="absolute inset-0 bg-black rounded-2xl"></div>
//       <div className="absolute bottom-0 right-0 w-[50%] h-[100%] bg-gradient-to-tl from-blue-600/90 via-transparent to-transparent rounded-bl-2xl overflow-hidden"></div>
//       <div className="absolute bottom-0 left-0 w-[50%] h-[100%] bg-gradient-to-tr from-purple-700/90 via-transparent to-transparent rounded-br-2xl overflow-hidden"></div>

//       {/* Content */}
//       <div className="relative z-10 text-center p-6">
//         <h1 className="text-4xl md:text-5xl font-bold">
//           Ready to Transform Your <br /> Vision Into Reality?
//         </h1>
//         <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto">
//           Let’s create something extraordinary together! Become the next success story and scale your brand to new heights.
//         </p>
//         <div className="flex gap-4 mt-6 justify-center">
//           <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-full  flex items-center gap-2">
//             Get Started <FaArrowRight />
//           </button>
//           <button className="bg-white text-black font-semibold py-3 px-6 rounded-full  border border-gray-300 flex items-center gap-2">
//             Book A Demo <FaArrowRight />
//           </button>
//         </div>
//       </div>

//       {/* Floating Squares */}
//       <div className="absolute bottom-1/2 right-0 translate-x-1/2 w-40 h-40 bg-yellow-100 rounded-lg  rotate-45"></div>
//       <div className="absolute bottom-1/2 left-0 -translate-y-[60px] w-32 h-32 bg-green-200 rounded-lg  rotate-45"></div>
//       <div className="absolute top-10 right-10 w-32 h-32 bg-purple-200 rounded-lg  rotate-45"></div>
//       <div className="absolute top-10 right-40 w-36 h-36 bg-blue-500 rounded-lg  rotate-45"></div>
//     </div>
//   );
// };

// export default CallToActionSection;


"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Container from "./Container";

const CallToActionSection = () => {
  return (
    <Container>
      <div className="w-full flex flex-col items-center rounded-2xl justify-center text-white relative h-auto p-6 py-10 md:p-16 lg:p-16 xl:p-20 mb-16 xl:mb-44">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-black rounded-2xl"></div>
        <div className="absolute bottom-0 right-0 w-[50%] h-[100%] bg-gradient-to-tl from-[#451F62] via-transparent to-transparent rounded-b-2xl overflow-hidden"></div>
        <div className="absolute bottom-0 left-0 w-[50%] h-[100%] bg-gradient-to-tr from-[#123E84] via-transparent to-transparent rounded-2xl overflow-hidden"></div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl xl:text-6xl font-bold text-lightIndigo lg:max-w-full lg:px- text-center">
              Find the Perfect Real Estate Marketing Plan for Your Business
            </h2>
            <p className="text-sm md:text-xl xl:mt-10 md:mt-6 mt-4 max-w-3xl mx-auto">
              Choose between flexible one-time services or unlimited monthly plans—designed to help real estate professionals grow, attract clients, and close more deals effortlessly.
            </p>
          </div>
          <div className="lg:mt-20 md:mt-16 mt-10">
            <div className="flex items-center flex-col md:flex-row gap-5 w-full z-20 justify-center">
              <button className="relative inline-flex justify-between md:w-fit w-full items-center px-11 py-2.5 text-darkIndigo overflow-hidden text-base font-medium rounded-full group bg-white">
                <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span></span>
                <span className="absolute right-0 hidden md:flex items-center justify-center w-20 h-14 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  <FaArrowRight className="-rotate-45" />
                </span>
                <span className="relative duration-300 text-lg flex justify-center items-center md:transform md:translate-x-0 font-bold md:group-hover:-translate-x-4 ease">
                  Book A Demo
                </span>
                <FaArrowRight className="-rotate-45 block md:hidden" />
              </button>
              <button className="relative inline-flex justify-between md:w-fit w-full items-center px-11 py-2.5 text-white overflow-hidden text-base font-medium rounded-full group bg-indigo">
                <span className="absolute left-0 block w-full h-0 transition-all bg-indigo opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span></span>
                <span className="absolute right-0 hidden md:flex items-center justify-center w-20 h-14 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  <FaArrowRight className="-rotate-45" />
                </span>
                <span className="relative duration-300 text-lg flex justify-center items-center md:transform md:translate-x-0 font-bold md:group-hover:-translate-x-4 ease">
                  Get Started
                </span>
                <FaArrowRight className="-rotate-45 block md:hidden" />
              </button>
            </div>
          </div>
        </div>

        {/* Floating Squares */}
        <div className="absolute xl:block hidden top-[30%] -left-[8%] z-30 w-[300px] h-52 bg-[#E1F7E1] rounded-2xl"></div>
        <div className="absolute xl:block hidden top-[10%] -right-[7%] w-[280] h-[170] bg-[#EAE4FC] rounded-2xl"></div>
        <div className="absolute xl:block hidden bottom-[6%] right-[4%] w-[220px] h-[220px] bg-gradient-to-tr from-[#4E3D5C] to-[#772DD8] rounded-2xl"></div>
        <div className="absolute xl:block hidden bottom-[7%] left-[3%] w-[250px] h-[250px] bg-gradient-to-tl from-[#4E3D5C] to-[#772DD8] rounded-2xl"></div>
        <div className="absolute xl:block hidden -bottom-[22%] -right-[9%] w-[300px] h-[300px] bg-[#F9EFE3] rounded-2xl"></div>
      </div>
    </Container>
  );
};

export default CallToActionSection;
