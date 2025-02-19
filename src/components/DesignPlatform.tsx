"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Container from "./Container";

const DesignPlatform = () => {
  return (
    <Container>
      <div className="w-full h-auto flex flex-col bg-[#E0D9FF] items-center rounded-2xl justify-center overflow-hidden text-white  p-6 py-10 md:p-16 lg:p-16 xl:p-20 mb-16 xl:mb-44">
        {/* Content */}
        <div className="relative z-10 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-darkIndigo lg:max-w-2xl md:max-w-xl mx-auto md:px-10">
            Manage all your design projects in our design platform
          </h2>
          <p className="text-[17px] md:text-xl xl:mt-10 md:mt-6 mt-4 max-w-3xl mx-auto text-default">
            Manage all your design projects, graphics and videos in one platform. Track design phases, delivery dates,
            and communicate with designers seamlessly.
          </p>
          <div className="flex gap-4 lg:mt-24 md:mt-12 mt-8 justify-center">
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
    </Container>
  );
};

export default DesignPlatform;