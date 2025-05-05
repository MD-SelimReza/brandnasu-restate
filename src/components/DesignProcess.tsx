'use client';

import React from 'react';
import request from '../../public/Icons/web_submit-request.svg';
import feedback from '../../public/Icons/web_feedback.svg';
import download from '../../public/Icons/web_download.svg';
import Image from 'next/image';
import Container from './Container';

const steps = [
  {
    icon: request,
    title: 'Submit Your Request',
    description:
      'Send us your design needs, and we’ll craft high-quality branding, marketing, or web assets tailored to your business.',
    bgColor: 'bg-[#E1F7E1]',
    textColor: 'text-[#00E04C]',
    circleColor: 'bg-[#C3E5C3]',
  },
  {
    icon: feedback,
    title: 'Review & Provide Feedback',
    description:
      'Easily share your thoughts using our feedback tool, ensuring every design aligns perfectly with your vision.',
    bgColor: 'bg-[#F9EFE3]',
    textColor: 'text-[#FF8C00]',
    circleColor: 'bg-[#EADDCE]',
  },
  {
    icon: download,
    title: 'Download & Launch',
    description:
      'Get your final files, ready to use for marketing, social media, and beyond—so you can focus on closing more deals.',
    bgColor: 'bg-[#EAE4FC]',
    textColor: 'text-[#663CD9]',
    circleColor: 'bg-[#D3CFE5]',
  },
];

const DesignProcess = () => {
  return (
    <Container>
      <div className="w-full flex flex-col items-center">
        <div className="w-full mx-auto text-center max-w-4xl">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl lg:!leading-[57px] font-bold text-darkIndigo lg:max-w-4xl mx-auto lg:px-0 md:px-20 text-center">
            How It Works—Simple, Fast & Hassle-Free
          </h2>
          <p className="xl:mt-6 md:mt-5 mt-4 text-sm md:text-xl text-default md:px-16 lg:px-20 text-center">
            See how real estate professionals like you transformed their
            branding, marketing, and online presence with our expert solutions.
          </p>
        </div>

        {/* Steps Section */}
        <div className="lg:mt-16 md:mt-10 mt-6 w-full grid grid-cols-1 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row p-6 items-center md:p-10 lg:p-12 xl:pl-20 lg:pl-16 xl:gap-20 lg:gap-16 md:gap-10 gap-6 rounded-[20px] ${step.bgColor} `}
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
                <h3
                  className={`text-3xl lg:text-4xl xl:text-[42px] font-bold ${step.textColor}`}
                >
                  {step.title}
                </h3>
                <p className="text-default text-lg md:text-xl mt-4">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default DesignProcess;
