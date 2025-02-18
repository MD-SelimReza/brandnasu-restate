"use client";

import React from "react";
import calender from "../../public/Icons/web_subscription.svg";
import communication from "../../public/Icons/web_purchases.svg";
import Image from "next/image";

const GradientBackground = () => {
  return (
    <div className="px-6 md:px-10 lg:px-20 xl:px-0">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center rounded-2xl justify-center overflow-hidden text-white relative h-auto p-6 py-10 md:p-16 lg:p-16 xl:p-20 my-16 xl:my-44">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-black rounded-2xl"></div>
        <div className="absolute bottom-0 right-0 w-[40%] h-[100%] bg-gradient-to-tl from-[#2375F5] via-transparent to-transparent rounded-bl-2xl overflow-hidden"></div>
        <div className="absolute bottom-0 left-0 w-[40%] h-[100%] bg-gradient-to-tr from-[#9644D5] via-transparent to-transparent rounded-br-2xl overflow-hidden"></div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-lightIndigo lg:max-w-2xl md:max-w-lg mx-auto px-10">
            Need Help Picking the Right Design Plan for You?
          </h2>
          <p className="text-[17px] md:text-xl xl:mt-10 md:mt-6 mt-4 max-w-3xl mx-auto">
            Try our Package Survey Tool to choose the types of designs you need, 
            and we&apos;ll recommend the best plan options for you.
          </p>
        </div>

        {/* Service Options */}
        <div className="relative z-10 flex flex-col md:flex-row xl:gap-20 md:gap-10 gap-6 w-full xl:mt-16 md:mt-10 mt-6">
          <div className="w-full xl:p-10 p-6 bg-white text-darkIndigo rounded-xl flex flex-col items-center ">
            <Image src={calender} alt="Calendar" objectFit="fill" className="w-16 md:w-24" />
            <p className="xl:text-4xl md:text-2xl text-xl font-medium xl:mt-7 mt-4">Subscription-based services</p>
          </div>
          <div className="w-full xl:p-10 p-6 bg-white text-darkIndigo rounded-xl flex flex-col items-center ">
            <Image src={communication} alt="communication" objectFit="fill" className="w-16 md:w-24" />
            <p className="xl:text-4xl md:text-2xl text-xl font-medium xl:mt-7 mt-4">One-time purchases</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradientBackground;


// "use client";

// import React from "react";

// const GradientBackground = () => {
//   return (
//     <div className="w-full h-screen flex items-center justify-center text-white relative overflow-hidden bg-black">
//       {/* Bottom-Left Blue Gradient */}
//       <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-gradient-radial from-blue-600/90 via-transparent to-transparent rounded-full blur-[120px]"></div>

//       {/* Bottom-Right Purple Gradient */}
//       <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-gradient-radial from-purple-700/90 via-transparent to-transparent rounded-full blur-[120px]"></div>

//       {/* Content */}
//       <div className="relative z-10 text-center p-6">
//         <h1 className="text-4xl md:text-6xl font-bold">Gradient Magic</h1>
//         <p className="text-lg md:text-xl mt-4">
//           A stunning blend of black, indigo (blue), and magenta (purple).
//         </p>
//       </div>
//     </div>
//   );
// };

// export default GradientBackground;



// "use client";

// import React from "react";

// const GradientBackground = () => {
//   return (
//     <div className="w-full h-screen flex items-center justify-center text-white relative overflow-hidden">
//       {/* Base Black Background */}
//       <div className="absolute inset-0 bg-black"></div>

//       {/* Gradient Overlays */}
//       <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-purple-800"></div>
//       <div className="absolute inset-0 bg-gradient-to-bl from-black via-black to-blue-700"></div>

//       {/* Content */}
//       <div className="relative z-10 text-center p-6">
//         <h1 className="text-4xl md:text-6xl font-bold">Perfect Gradient</h1>
//         <p className="text-lg md:text-xl mt-4">
//           A smooth blend of black, indigo (blue), and magenta (purple).
//         </p>
//       </div>
//     </div>
//   );
// };

// export default GradientBackground;
