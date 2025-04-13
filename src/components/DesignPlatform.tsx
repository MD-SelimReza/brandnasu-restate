"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Container from "./Container";

const DesignPlatform = () => {
  return (
    <Container>
      <div className="w-full h-auto flex flex-col bg-[#E0D9FF] items-center rounded-[20px] justify-center overflow-hidden text-white p-6 py-10 md:p-16 lg:p-16 xl:p-20 mb-16 xl:mb-44">
        {/* Content */}
        <div className="relative z-10 text-center w-full mx-auto">
          <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-darkIndigo lg:max-w-4xl mx-auto lg:px-0 text-center">
              Real Estate Branding & Design That Makes an Impact
            </h2>
            <p className="text-sm md:text-xl xl:mt-6 md:mt-5 text-default mt-4 max-w-3xl mx-auto">
              See how our premium branding, design, and web solutions help real estate professionals stand out and grow their business.
            </p>
          </div>
          <div className="flex gap-4 lg:mt-20 md:mt-12 mt-8 justify-center">
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
    </Container>
  );
};

export default DesignPlatform;