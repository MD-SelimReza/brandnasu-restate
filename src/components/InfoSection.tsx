'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import Container from './Container';

const InfoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      id="watch-demo"
      className="border border-indigo100 pt-8 lg:pt-16 xl:pt-20"
    >
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between md:gap-10 gap-6">
          {/* Left Section */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-darkIndigo lg:max-w-full lg:px-0 md:px-10 lg:text-left text-center">
              Branding, marketing & web solutions for real estate professionals
              like you
            </h2>
            <p className="xl:mt-6 md:mt-5 mt-4 text-sm md:text-xl text-default md:px-16 lg:text-left lg:px-0 text-center">
              See how we built a flexible, affordable, and scalable real estate
              marketing model to help you grow in today&apos;s market.
            </p>
          </div>

          {/* Right Section - Video Thumbnail */}
          <div className="w-full lg:w-1/2 flex justify-end relative">
            <div className="relative w-full aspect-video">
              {!isPlaying ? (
                <div
                  className="relative w-full h-full cursor-pointer"
                  onClick={() => setIsPlaying(true)}
                >
                  {/* Thumbnail Image */}
                  <Image
                    src="/thumbnail.jpg"
                    alt="Video Thumbnail"
                    width={100}
                    height={100}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/60 rounded-full p-5 md:p-6 flex items-center justify-center">
                      <FaPlay className="text-white text-2xl md:text-3xl" />
                    </div>
                  </div>
                </div>
              ) : (
                <video
                  className="w-full h-full object-cover rounded-xl"
                  controls
                  autoPlay
                >
                  {/* <source src="/video.mp4" type="video/mp4" /> */}
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default InfoSection;
