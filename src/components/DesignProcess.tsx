'use client';

import React from 'react';
import request from '../../public/Icons/request.svg';
import feedback from '../../public/Icons/feedback.svg';
import download from '../../public/Icons/download.svg';
import Image from 'next/image';
import Container from './Container';
import HeadingBlock from './ui/HeadingBlock';

const steps = [
  {
    icon: request,
    title: 'Submit Your Request',
    description:
      'Send us your design needs, and we’ll craft high-quality branding, marketing, or web assets tailored to your business.',
    bgColor: 'bg-indigo100',
    textColor: 'text-darkIndigo',
  },
  {
    icon: feedback,
    title: 'Review & Provide Feedback',
    description:
      'Easily share your thoughts using our feedback tool, ensuring every design aligns perfectly with your vision.',
    bgColor: 'bg-lightIndigo',
    textColor: 'text-darkIndigo',
  },
  {
    icon: download,
    title: 'Download & Launch',
    description:
      'Get your final files, ready to use for marketing, social media, and beyond, so you can focus on closing more deals.',
    bgColor: 'bg-muteIndigo/80',
    textColor: 'text-darkIndigo',
  },
];

const DesignProcess = () => {
  return (
    <div className="bg-white py-8 lg:py-12">
      <Container>
        <div className="w-full flex flex-col items-center">
          <div className="w-full mx-auto text-center">
            <HeadingBlock
              title="How It Works: Simple, Fast & Hassle-Free"
              description="See how real estate professionals like you transformed their
              branding, marketing, and online presence with our expert
              solutions."
              titleColor="text-darkIndigo"
              titleWidth="max-w-3xl mx-auto"
              descriptionColor="text-darkGray"
              descriptionWidth="max-w-4xl"
            />
          </div>

          {/* Steps Section */}
          <div className="lg:mt-16 md:mt-10 mt-6 w-full grid grid-cols-1 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row p-6 items-center md:p-10 lg:p-12 xl:pl-20 lg:pl-16 xl:gap-20 lg:gap-16 md:gap-10 gap-6 rounded-xl ${step.bgColor} hover:scale-[1.02] transition duration-500`}
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
                  <h3 className={`text-4xl font-bold ${step.textColor}`}>
                    {step.title}
                  </h3>
                  <p className="text-darkGray mt-4">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DesignProcess;
