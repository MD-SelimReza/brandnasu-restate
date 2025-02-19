// "use client";

// import React from "react";
// import { FaFileAlt, FaClipboardList, FaDownload } from "react-icons/fa";

// const steps = [
//   {
//     icon: <FaFileAlt size={100} className="text-green-600 text-4xl relative z-10" />,
//     title: "Submit your design request",
//     description:
//       "We’ll take your vision and bring it to life while staying consistent with your branding and keeping your goals & objectives in mind.",
//     bgColor: "bg-[#E1F7E1]",
//     textColor: "text-[#00E04C]",
//     circleColor: "bg-[#C3E5C3]"
//   },
//   {
//     icon: <FaClipboardList size={100} className="text-orange-500 text-4xl relative z-10" />,
//     title: "Provide feedback on your design",
//     description:
//       "Use our visual feedback tool to click and annotate different parts of your design for crystal clear change requests.",
//     bgColor: "bg-orange-100",
//     textColor: "text-orange-500",
//     circleColor: "bg-[#C3E5C3]"
//   },
//   {
//     icon: <FaDownload size={100} className="text-purple-600 text-4xl relative z-10" />,
//     title: "Download & launch your design",
//     description:
//       "Download your new design and source files and launch them online for audiences worldwide to see.",
//     bgColor: "bg-[#EAE4FC]",
//     textColor: "text-[#663CD9]",
//     circleColor: "bg-[#D3CFE5]"
//   },
// ];

// const DesignProcess = () => {
//   return (
//     <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center mb-44">
//       {/* Heading */}
//       <h2 className="text-3xl md:text-5xl font-bold text-center text-darkIndigo">
//         Getting quality & scalable <br /> creatives has never been easier
//       </h2>
//       <p className="text-default text-xl text-center w-full max-w-3xl px-10 mt-10">
//         We’ll take your vision and bring it to life while staying consistent with 
//         your branding and keeping your goals & objectives in mind.
//       </p>

//       {/* Steps Section */}
//       <div className="mt-16 space-y-6 w-full">
//         {steps.map((step, index) => (
//           <div
//             key={index}
//             className={`flex items-center p-12 gap-20 rounded-xl ${step.bgColor} `}
//           >
//             {/* Icon with Background Circle */}
//             <div className="relative w-32 h-32 flex items-center justify-center border border-red-500">
//               <div className={`absolute bottom-[-16px] right-[-24px] w-28 h-28 ${step.circleColor} rounded-full`}></div>
//               {step.icon}
//             </div>

//             {/* Text Content */}
//             <div className="ml-12">
//               <h3 className={`text-3xl md:text-5xl font-semibold ${step.textColor}`}>
//                 {step.title}
//               </h3>
//               <p className="text-default text-xl mt-4">{step.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DesignProcess;

"use client";

import React from "react";
import request from "../../public/Icons/web_submit-request.svg";
import feedback from "../../public/Icons/web_feedback.svg";
import download from "../../public/Icons/web_download.svg";
import Image from "next/image";
import Container from "./Container";

const steps = [
  {
    icon: request,
    title: "Submit your design request",
    description:
      "We’ll take your vision and bring it to life while staying consistent with your branding and keeping your goals & objectives in mind.",
    bgColor: "bg-[#E1F7E1]",
    textColor: "text-[#00E04C]",
    circleColor: "bg-[#C3E5C3]",
  },
  {
    icon: feedback,
    title: "Provide feedback on your design",
    description:
      "Use our visual feedback tool to click and annotate different parts of your design for crystal clear change requests.",
    bgColor: "bg-[#F9EFE3]",
    textColor: "text-[#FF8C00]",
    circleColor: "bg-[#EADDCE]",
  },
  {
    icon: download,
    title: "Download & launch your design",
    description:
      "Download your new design and source files and launch them online for audiences worldwide to see.",
    bgColor: "bg-[#EAE4FC]",
    textColor: "text-[#663CD9]",
    circleColor: "bg-[#D3CFE5]",
  },
];

const DesignProcess = () => {
  return (
    <Container>
      <div className="w-full flex flex-col items-center mb-16 xl:mb-44">
        <div className="w-full max-w-4xl px-6 mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-darkIndigo">
            Getting quality & scalable creatives has never been easier
          </h2>
          <p className="xl:mt-10 md:mt-6 mt-4 md:px-16 text-xl text-default">
            We’ll take your vision and bring it to life while staying consistent with
            your branding and keeping your goals & objectives in mind.
          </p>
        </div>

        {/* Steps Section */}
        <div className="lg:mt-16 md:mt-10 mt-6 w-full grid grid-cols-1 gap-6">
          {steps.map((step, index) => (
            <div
            key={index}
            className={`flex flex-col md:flex-row p-6 items-center md:p-10 lg:p-12 xl:pl-20 lg:pl-16 border xl:gap-20 lg:gap-16 md:gap-10 gap-6 rounded-xl ${step.bgColor} `}
          >
            <div className="md:w-72 lg:w-60 xl:w-36 w-28 h-fit relative">
              <Image 
                src={step.icon} 
                alt={step.title}
                className="object-fill" 
              />
            </div>
            {/* Text Content */}
            <div className="text-center md:text-left">
              <h3 className={`text-3xl lg:text-4xl xl:text-5xl font-bold ${step.textColor}`}>
                {step.title}
              </h3>
              <p className="text-default text-lg md:text-xl mt-4">{step.description}</p>
            </div>
          </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default DesignProcess;