'use client';

import React from 'react';
import Container from './Container';
import Button from './ui/Button';

const DesignPlatform = () => {
  return (
    <Container>
      <div className="w-full h-auto flex flex-col bg-[#E0D9FF] items-center rounded-xl justify-center overflow-hidden text-white p-6 py-10 md:p-16 lg:p-16 xl:p-20">
        {/* Content */}
        <div className="relative z-10 text-center w-full mx-auto">
          <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl lg:!leading-[57px] font-bold text-darkIndigo lg:max-w-4xl mx-auto lg:px-0 text-center">
              Real Estate Branding & Design That Makes an Impact
            </h2>
            <p className="text-sm text-darkGray md:text-xl xl:mt-6 md:mt-5 text-default mt-4 max-w-3xl mx-auto">
              See how our premium branding, design, and web solutions help real
              estate professionals stand out and grow their business.
            </p>
          </div>
          <div className="flex gap-4 lg:mt-20 md:mt-12 mt-8 justify-center">
            <Button
              label="Get Started"
              bgColor="bg-indigo hover:bg-darkIndigo"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DesignPlatform;
