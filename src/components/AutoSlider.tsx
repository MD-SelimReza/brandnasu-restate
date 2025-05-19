'use client';

import { useEffect, useState } from 'react';
import CardSlider from './Card';
import Button from './ui/Button';
import { AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion';

export default function HeroBanner() {
  const [animateOnce, setAnimateOnce] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setAnimateOnce(true);
  }, []);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className="relative w-full">
        {/* Left Dark Opacity */}
        <div className="absolute left-0 top-0 h-full w-40 md:w-60 lg:w-80 xl:w-[35%] bg-gradient-to-r from-[#190C2ACC] to-transparent pointer-events-none z-10"></div>

        {/* Right Dark Opacity */}
        <div className="absolute right-0 top-0 h-full w-40 md:w-60 lg:w-80 xl:w-[35%] bg-gradient-to-l from-[#190C2ACC] to-transparent pointer-events-none z-10"></div>

        {/* Static Hero Banner */}
        <div className="relative w-full bg-[#3B0C7C] bg-center bg-cover bg-no-repeat flex flex-col items-center xl:pt-28 lg:pb-12 py-12 px-4">
          <div className="text-center text-white max-w-[1340px] z-20">
            <div className="relative overflow-hidden mb-6">
              <motion.h1
                initial={{ opacity: 0, y: '50%' }}
                animate={animateOnce ? { opacity: 1, y: '0%' } : {}}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="text-white xl:text-7xl lg:text-6xl text-3xl md:text-5xl !leading-[1.2] font-bold md:font-bold max-w-full lg:px-16 text-center"
              >
                Empowering Real Estate Business with Creative Excellence
              </motion.h1>
            </div>

            <div className="relative overflow-hidden mt-4">
              <motion.p
                initial={{ opacity: 0, y: '100%' }}
                animate={animateOnce ? { opacity: 1, y: '0%' } : {}}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="text-lightIndigo font-normal text-sm md:text-2xl max-w-5xl xl:px-0 md:px-10 mx-auto"
              >
                We help real estate professionals attract quality leads and
                close more deals with expert marketing, branding, and web
                solutions, so you can focus on selling.
              </motion.p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="400"
            className="flex items-center flex-col md:flex-row gap-5 w-full z-20 justify-center mt-16"
          >
            <div className="w-fit">
              <Button
                bgColor="bg-lightIndigo"
                textColor="text-darkIndigo"
                label="Get Started"
                href="/pricing"
              />
            </div>
            <div onClick={openModal} className="w-fit">
              <Button
                bgColor="bg-indigo border border-indigo"
                textColor="text-white"
                label="Book a Call"
              />
            </div>
          </div>

          {/* CardSlider Positioned at the Center */}
          <div
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="400"
            className="w-full mt-4 md:mt-10 z-20 xl:px-5"
          >
            <CardSlider />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          data-aos="zoom-out"
          data-aos-duration="500"
          className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center p-4"
        >
          <div className="bg-white rounded-lg w-full max-w-3xl relative p-4">
            <button
              onClick={closeModal}
              className="absolute -top-8 right-3 text-white hover:text-gray100 text-xl font-bold"
            >
              <AiOutlineClose size={24} />
            </button>
            <iframe
              src="https://tidycal.com/brandnasu/strategy-call"
              className="w-full h-[500px] lg:h-[600px] rounded-md border-0"
              allow="camera; microphone; fullscreen; clipboard-read; clipboard-write"
            />
          </div>
        </div>
      )}
    </>
  );
}
