"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa";

const DesignPlatform = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto h-auto flex flex-col bg-[#E0D9FF] items-center rounded-2xl justify-center overflow-hidden text-white py-20 mb-44">
      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl mx-auto max-w-3xl font-bold text-darkIndigo">
          Manage all your design projects in our design platform
        </h1>
        <p className="text-lg md:text-xl my-10 text-gray-600 max-w-5xl mx-auto">
          Manage all your design projects, graphics and videos in one platform. Track design phases, delivery dates,
          and communicate with designers seamlessly.
        </p>
        <div className="flex gap-4 mt-24 justify-center">
          <button className="relative inline-flex items-center px-11 py-2.5 text-lightIndigo overflow-hidden text-base font-medium rounded-full group bg-indigo"> 
            <span className="absolute left-0 block w-full h-0 transition-all bg-indigo opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            
            <span className="absolute right-0 flex items-center justify-center w-20 h-14 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <FaArrowRight className="-rotate-45" />
            </span>

            <span className="relative duration-300 transform translate-x-0 group-hover:-translate-x-4 ease">
              Get Started
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesignPlatform;