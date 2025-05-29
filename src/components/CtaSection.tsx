import React from 'react';
import Button from './ui/Button';
import Image from 'next/image';
import shuttle from '../../public/shuttle.svg';

const CtaSection = () => {
  return (
    <div className="lg:py-32 md:py-24 py-16 px-5">
      <div className="w-full mx-auto max-w-[1400px] flex flex-col items-center rounded-xl justify-center text-white relative h-auto p-6 py-10 md:p-16 lg:p-16 xl:p-20">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-black rounded-xl" />
        <div className="absolute bottom-0 right-0 w-[50%] h-full bg-gradient-to-tl from-[#451F62] via-transparent to-transparent rounded-b-xl" />
        <div className="absolute bottom-0 left-0 w-[50%] h-full bg-gradient-to-tr from-[#123E84] via-transparent to-transparent rounded-xl" />

        {/* Content */}
        <div className="relative z-10 w-full text-left">
          <div className={`relative z-10 max-w-4xl`}>
            <h2
              className={`text-3xl lg:text-4xl lg:!leading-[43px] font-bold lg:px-0 text-white`}
            >
              Your Brand, Your Listings, Your Growth, We Make It Happen.
            </h2>
            <p className={`xl:mt-6 md:mt-5 mt-4 text-lightIndigo`}>
              Stop blending in, get premium branding, marketing, and web
              solutions for real estate professionals. From one-time designs to
              unlimited creative support, we help you stand out, attract leads,
              and close more deals.
            </p>
          </div>
          <div className="lg:mt-20 md:mt-16 mt-10 mb-5">
            <div className="flex flex-col md:flex-row gap-5 justify-normal mt-10 z-20">
              <Button
                bgColor="bg-indigo"
                textColor="text-white"
                label="Get Started"
                href="/pricing"
              />
              <Button
                bgColor="bg-lightIndigo"
                textColor="text-darkIndigo"
                label="Book a Call"
                href="/pricing/#book-call"
              />
            </div>
          </div>
        </div>
        <div className="absolute lg:w-[350px] lg:h-[350px] md:w-[150px] md:h-[150px] w-[130px] h-[130px] bottom-10 lg:right-10 md:right-4 right-2">
          <Image src={shuttle} alt="Shuttle" fill className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
