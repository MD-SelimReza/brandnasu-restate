"use client";

import React from "react";
import calender from "../../public/Icons/web_subscription.svg";
import communication from "../../public/Icons/web_purchases.svg";
import Image from "next/image";

const GradientBackground = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center rounded-2xl justify-center overflow-hidden text-white relative p-20 h-auto mb-44">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-black rounded-2xl"></div>
      <div className="absolute bottom-0 right-0 w-[40%] h-[100%] bg-gradient-to-tl from-[#2375F5] via-transparent to-transparent rounded-bl-2xl overflow-hidden"></div>
      <div className="absolute bottom-0 left-0 w-[40%] h-[100%] bg-gradient-to-tr from-[#9644D5] via-transparent to-transparent rounded-br-2xl overflow-hidden"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-lightIndigo">
          Need Help Picking the Right <br /> Design Plan for You?
        </h2>
        <p className="text-lg md:text-xl mt-10 max-w-3xl mx-auto">
          Try our Package Survey Tool to choose the types of designs you need, 
          and we&apos;ll recommend the best plan options for you.
        </p>
      </div>

      {/* Service Options */}
      <div className="relative z-10 flex flex-col md:flex-row gap-20 w-full mt-16">
        <div className="w-full p-10 bg-white text-purple-700 rounded-xl flex flex-col items-center ">
          <Image src={calender} alt="Calendar" width={100} height={100} />
          <p className="text-4xl font-medium mt-7">Subscription-based services</p>
        </div>
        <div className="w-full p-10 bg-white text-purple-700 rounded-xl flex flex-col items-center ">
          <Image src={communication} alt="Calendar" width={100} height={100} />
          <p className="text-4xl font-medium mt-7">One-time purchases</p>
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
