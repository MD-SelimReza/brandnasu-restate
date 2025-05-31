'use client';

import React from 'react';
import Image from 'next/image';
import google from '../../public/Icons/google.svg';
import clutch from '../../public/Icons/clutch.svg';
import Link from 'next/link';
import { IoIosStar } from 'react-icons/io';
import bookACall from '../../public/book-a-call.svg';

export default function BookACallSection() {
  return (
    <section className="bg-darkIndigo text-white lg:p-16 md:p-10 p-5 rounded-xl">
      <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-20 gap-16">
        {/* Left Section */}
        <div className="text-left h-full flex flex-col">
          <h2
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="400"
            aria-label="Book a Call"
            className="text-3xl lg:text-4xl xl:text-5xl xl:!leading-[57px] lg:!leading-[48px] font-bold text-white mb-4"
          >
            Book a Call
          </h2>
          <p
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="400"
            className="text-lightIndigo max-w-5xl mx-auto mb-6"
          >
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
          <div
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="400"
            className="mt-auto flex md:flex-row flex-col items-center lg:justify-normal justify-center gap-8"
          >
            <Link
              href="https://clutch.co/profile/brandnasu"
              target="_blank"
              aria-label="Explore our clutch"
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
              aria-label="Explore our google"
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
        <div
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-duration="400"
          className="bg-white rounded-xl overflow-hidden shadow-lg"
        >
          <iframe
            src="https://tidycal.com/brandnasu/strategy-call"
            title="Strategy Call Booking Form"
            width="100%"
            height="600"
            loading="lazy"
            className="rounded-md border"
            allow="camera; microphone; fullscreen; clipboard-read; clipboard-write"
          />
        </div>
      </div>
    </section>
  );
}
