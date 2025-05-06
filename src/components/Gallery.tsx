'use client';

import React from 'react';
import Image from 'next/image';

const galleryImages = [
  { title: 'Image 1', icon: '/mission1.jpg' },
  { title: 'Image 2', icon: '/mission2.jpg' },
  { title: 'Image 3', icon: '/mission3.jpg' },
  { title: 'Image 1', icon: '/mission1.jpg' },
  { title: 'Image 2', icon: '/mission2.jpg' },
  { title: 'Image 3', icon: '/mission3.jpg' },
];

const Gallery = () => {
  return (
    <section className="bg-gray100 px-5 py-20 xl:py-36">
      <main className="w-full mx-auto">
        <div className="mb-10 max-w-[1440px] mx-auto xl:px-5">
          <h1 className="text-2xl text-darkIndigo font-bold mb-6 border-l-4 border-l-indigo pl-2">
            Gallery
          </h1>
          <h3 className="text-3xl lg:text-4xl font-semibold mb-8 text-darkIndigo">
            Inside BrandNasu: Moments That Matter
          </h3>
        </div>

        {/* First Gallery (Right to Left) */}
        <div className="w-full overflow-hidden mb-5">
          <div className="relative flex items-center w-max animate-marquee-left gap-5">
            {[
              ...galleryImages,
              ...galleryImages,
              ...galleryImages,
              ...galleryImages,
              ...galleryImages,
            ].map((portfolio, idx) => (
              <div key={idx} className="flex-shrink-0">
                <div className="relative h-[200px] md:h-[300px] lg:h-[400px] w-auto">
                  <Image
                    src={portfolio.icon}
                    alt={portfolio.title}
                    className="rounded-xl shadow-md h-full w-auto"
                    width={300}
                    height={400}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Gallery (Left to Right) */}
        <div className="w-full overflow-hidden">
          <div className="relative flex items-center w-max animate-marquee-right gap-5">
            {[
              ...galleryImages,
              ...galleryImages,
              ...galleryImages,
              ...galleryImages,
              ...galleryImages,
            ].map((portfolio, idx) => (
              <div key={`right-${idx}`} className="flex-shrink-0">
                <div className="relative h-[200px] md:h-[300px] lg:h-[400px] w-auto">
                  <Image
                    src={portfolio.icon}
                    alt={portfolio.title}
                    className="rounded-xl shadow-md h-full w-auto"
                    width={300}
                    height={400}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Styles */}
        <style jsx>{`
          @keyframes marquee-left {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @keyframes marquee-right {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0%);
            }
          }

          .animate-marquee-left {
            animation: marquee-left 80s linear infinite;
          }

          .animate-marquee-right {
            animation: marquee-right 80s linear infinite;
          }
        `}</style>
      </main>
    </section>
  );
};

export default Gallery;
