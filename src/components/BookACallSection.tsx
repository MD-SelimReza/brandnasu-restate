'use client';

import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import google from '../../public/Icons/google.svg';
import clutch from '../../public/Icons/clutch.svg';
import Link from 'next/link';
import { IoIosStar } from 'react-icons/io';
import bookACall from '../../public/book-a-call.svg';

export default function BookACallSection() {
  const CalendlyInlineWidget = dynamic(
    () => import('react-calendly').then((mod) => mod.InlineWidget),
    {
      ssr: false,
      loading: () => <p className="text-center p-4">Loading calendar...</p>,
    }
  );
  return (
    <section className="bg-darkIndigo text-white lg:p-16 md:p-10 p-6 rounded-2xl">
      <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-20 gap-16">
        {/* Left Section */}
        <div className="text-left h-full flex flex-col">
          {/* <h2 className="text-4xl font-bold mb-4">Book a Call</h2>
          <p className="text-lightIndigo mb-6">
            Have a frank chat with our Customer Success Manager and Design
            Director for fun. Straightforward discussion of your ideas – no
            overwhelming tech jargon unless you&apos;re into that!
          </p> */}

          <h2 className="text-3xl lg:text-4xl xl:text-5xl lg:!leading-[57px] font-bold text-white mb-4">
            Book a Call
          </h2>
          <p className="text-lightIndigo max-w-5xl mx-auto mb-6">
            Have a frank chat with our Customer Success Manager and Design
            Director for fun. Straightforward discussion of your ideas - no
            overwhelming tech jargon unless you&apos;re into that!
          </p>

          <div className="relative flex items-center lg:justify-start justify-center mb-10">
            <Image
              src={bookACall}
              alt="Book A Call"
              width={500}
              height={100}
              className="object-cover"
            />
          </div>

          {/* Rating buttons pushed to bottom */}
          <div className="mt-auto flex md:flex-row flex-col items-center lg:justify-normal justify-center gap-8">
            <Link
              href=""
              target="_blank"
              className="flex gap-3 justify-center items-center bg-white rounded-full py-4 px-6"
            >
              <Image src={clutch} alt="Clutch Logo" width={80} height={80} />
              <div className="flex gap-0.5 text-red-500 text-lg">
                {Array.from({ length: 5 }).map((_, starIdx) => (
                  <IoIosStar key={starIdx} />
                ))}
              </div>
              <span className="text-darkGray font-bold">5.0</span>
            </Link>
            <Link
              href=""
              target="_blank"
              className="flex gap-3 justify-center items-center bg-white rounded-full py-4 px-6"
            >
              <Image src={google} alt="Google Logo" width={80} height={80} />
              <div className="flex gap-0.5 text-yellow-400 text-lg">
                {Array.from({ length: 5 }).map((_, starIdx) => (
                  <IoIosStar key={starIdx} />
                ))}
              </div>
              <span className="text-darkGray font-bold">5.0</span>
            </Link>
          </div>
        </div>

        {/* Right Section (Calendly) */}
        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
          <CalendlyInlineWidget
            url="https://calendly.com/your-calendly-link"
            styles={{
              height: '700px',
            }}
            pageSettings={{
              primaryColor: '0069ff',
              textColor: '4d5055',
              backgroundColor: 'ffffff',
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
            }}
          />
        </div>
      </div>
    </section>
  );
}
