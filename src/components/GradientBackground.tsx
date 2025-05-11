'use client';

import React from 'react';
import calender from '../../public/Icons/subscription.svg';
import communication from '../../public/Icons/onetime.svg';
import Image from 'next/image';
import Container from './Container';
import Link from 'next/link';
import HeadingBlock from './ui/HeadingBlock';

const GradientBackground = () => {
  return (
    <div className="py-8 lg:py-12">
      <Container>
        <div className="w-full flex flex-col items-center rounded-xl justify-center overflow-hidden text-white relative p-6 py-10 md:p-16 lg:p-16 xl:p-20">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-black rounded-xl"></div>
          <div className="absolute bottom-0 right-0 w-[40%] h-[100%] bg-gradient-to-tl from-[#2375F5] via-transparent to-transparent rounded-bl-xl overflow-hidden"></div>
          <div className="absolute bottom-0 left-0 w-[40%] h-[100%] bg-gradient-to-tr from-[#9644D5] via-transparent to-transparent rounded-br-xl overflow-hidden"></div>

          {/* Content */}
          <div className="relative z-10 w-full mx-auto text-center">
            <HeadingBlock
              title="Find the Perfect Real Estate Marketing Plan for Your Business"
              description="Choose between flexible one-time services or unlimited monthly
              plans, designed to help real estate professionals grow, attract
              clients, and close more deals effortlessly."
              titleColor="text-white"
              titleWidth="max-w-3xl mx-auto"
              descriptionColor="text-lightIndigo"
              descriptionWidth="max-w-4xl"
            />
          </div>

          {/* Service Options */}
          <div className="relative z-10 flex flex-col md:flex-row xl:gap-20 md:gap-10 gap-6 w-full xl:mt-16 md:mt-10 mt-6">
            <Link
              href="/pricing/#subscription"
              className="w-full xl:p-10 p-6 bg-white hover:bg-lightIndigo transition duration-500 text-darkIndigo rounded-xl flex flex-col items-center "
            >
              <Image
                src={calender}
                alt="Calendar"
                objectFit="fill"
                className="w-16 md:w-24"
              />
              <h1 className="md:text-2xl text-xl font-medium xl:mt-7 mt-4 text-center">
                Subscription-Based
              </h1>
              <p className="text-darkGray text-center mt-3">
                Stay consistent with ongoing support for your brand, monthly
                deliverables, dedicated team, and long-term growth.
              </p>
            </Link>
            <Link
              href="/pricing/#on-time"
              className="w-full xl:p-10 p-6 bg-white hover:bg-lightIndigo transition duration-500 text-darkIndigo rounded-xl flex flex-col items-center "
            >
              <Image
                src={communication}
                alt="communication"
                objectFit="fill"
                className="w-16 md:w-24"
              />
              <h1 className="md:text-2xl text-xl font-medium xl:mt-7 mt-4 text-center">
                One-Time Purchase
              </h1>
              <p className="text-darkGray text-center mt-3">
                Need something quick and focused? Get exactly what you need, no
                commitment, just great results.
              </p>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GradientBackground;
