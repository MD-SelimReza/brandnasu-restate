"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";

const InfoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between md:gap-10 gap-6 px-6 md:px-10 lg:px-20 xl:px-0 my-16 xl:my-44">
      {/* Left Section */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-darkIndigo md:max-w-2xl lg:max-w-full lg:px-0 md:px-20 lg:text-left text-center">
          Your All-in-One Real Estate Branding, Web, & Marketing Solution
        </h2>
        <p className="xl:mt-10 md:mt-6 mt-4 text-xl text-default md:px-16 lg:text-left lg:px-0 px-2 text-center">
          Get a powerful brand, a high-converting website, and marketing that attracts clients—all in one place. Simplify your real estate success today.
        </p>
        {/* <p className="mt-6 text-lg font-semibold text-indigo/70 text-right">
          Watch the video to learn more about our service
        </p> */}
      </div>

      {/* Right Section - Video Thumbnail */}
      <div className="w-full lg:w-1/2 flex justify-end relative">
        <div className="relative w-full aspect-video">
          {!isPlaying ? (
            <div className="relative w-full h-full cursor-pointer" onClick={() => setIsPlaying(true)}>
              {/* Thumbnail Image */}
              <Image
                src="/thumbnail.jpg"
                alt="Video Thumbnail"
                width={100}
                height={100}
                className="w-full h-full object-cover rounded-lg "
              />
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/60 rounded-full p-6 md:p-8 flex items-center justify-center">
                  <FaPlay className="text-white text-2xl md:text-3xl" />
                </div>
              </div>
            </div>
          ) : (
            <video className="w-full h-full object-cover rounded-[20px] " controls autoPlay>
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
