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
      <div className="w-full h-auto flex flex-col items-center rounded-2xl justify-center text-white relative py-20 p-6 md:p-16 lg:p-16 xl:p-20 mb-16 xl:mb-44">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-black rounded-2xl"></div>
        <div className="absolute bottom-0 right-0 w-[50%] h-[100%] bg-gradient-to-tl from-[#451F62] via-transparent to-transparent rounded-bl-2xl overflow-hidden"></div>
        <div className="absolute bottom-0 left-0 w-[50%] h-[100%] bg-gradient-to-tr from-[#123E84] via-transparent to-transparent rounded-2xl overflow-hidden"></div>

        {/* Content */}
        <div className="relative z-10 text-center p-6">
          <h1 className="text-4xl md:text-5xl text-lightIndigo !leading-[1.2] font-bold">
            Ready to Transform Your <br /> Vision Into Reality?
          </h1>
          <p className="text-lg md:text-xl mt-10 max-w-2xl mx-auto">
            Let’s create something extraordinary together! Become the next success story and scale your brand to new heights.
          </p>
          <div className="flex gap-4 mt-32 justify-center pb-12">
            <button className="relative inline-flex items-center px-11 py-2.5 text-lightIndigo overflow-hidden text-base font-medium rounded-full group bg-indigo">

              <span className="absolute left-0 block w-full h-0 transition-all bg-indigo opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              
              <span className="absolute right-0 flex items-center justify-center w-20 h-14 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <FaArrowRight className="-rotate-45" />
              </span>

              <span className="relative duration-300 transform translate-x-0 group-hover:-translate-x-4 ease">
              Get Started
              </span>
            </button>
            <button className="relative inline-flex items-center px-11 py-2.5 text-darkIndigo overflow-hidden text-base font-medium rounded-full group bg-lightIndigo">

              <span className="absolute left-0 block w-full h-0 transition-all bg-lightIndigo opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              
              <span className="absolute right-0 flex items-center justify-center w-20 h-14 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <FaArrowRight className="-rotate-45" />
              </span>

              <span className="relative duration-300 transform translate-x-0 group-hover:-translate-x-4 ease">
                Book A Demo
              </span>
            </button>
          </div>
        </div>

        {/* Floating Squares */}
        <div className="absolute top-[30%] -left-[8%] z-30 w-[307px] h-52 bg-[#E1F7E1] rounded-2xl"></div>
        <div className="absolute top-[10%] -right-[6%] min-w-[358] h-[180] bg-[#EAE4FC] rounded-2xl"></div>
        <div className="absolute bottom-[12%] right-[7%] w-[260px] h-[260px] bg-gradient-to-tr from-[#4E3D5C] to-[#772DD8] rounded-2xl"></div>
        <div className="absolute bottom-[7%] left-[3%] w-[290px] h-[290px] bg-gradient-to-tl from-[#4E3D5C] to-[#772DD8] rounded-2xl"></div>
        <div className="absolute -bottom-[22%] -right-[9%] w-[345px] h-[345px] bg-[#F9EFE3] rounded-2xl"></div>
      </div>
    </Container>
  );
};

export default CallToActionSection;
