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
      'Tell us what you need, from listing posts to branded templates. We’ll handle the creative, so you don’t have to.',
    bgColor: 'bg-indigo100',
    textColor: 'text-darkIndigo',
  },
  {
    icon: feedback,
    title: 'Review & Refine',
    description:
      'Get your first draft within 1–2 business days. Share feedback directly, we’ll revise until it feels just right.',
    bgColor: 'bg-lightIndigo',
    textColor: 'text-darkIndigo',
  },
  {
    icon: download,
    title: 'Download & Launch',
    description:
      'Grab your ready-to-use files and start using them across social, print, or email, no delays, no design stress.',
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
              description="Get high-quality designs in three easy steps, no stress, no delays, just results."
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
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-duration="400"
              >
                <div
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
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DesignProcess;
