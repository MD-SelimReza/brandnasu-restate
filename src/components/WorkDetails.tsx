import React from 'react';
import Image from 'next/image';
import CtaSection from './CtaSection';

const WorkDetails = () => {
  return (
    <div>
      <div className="bg-white pt-16 pb-32">
        <div className="max-w-[1440px] mx-auto px-5">
          <div className="flex flex-col md:flex-row justify-between items-end mb-4">
            <h2 className="lg:w-2/3 w-full text-3xl md:text-4xl xl:text-5xl xl:!leading-[57px] font-semibold text-darkIndigo">
              UrbanNest - Website Development
            </h2>
            <div className="lg:w-1/3 w-full mt-6 gap-3 flex flex-wrap justify-end">
              {['Website', 'Development', 'Design'].map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#DEE0E2] text-darkGray px-3 py-1 rounded-full font-regular text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div>
            <Image
              src="/hero.jpg"
              alt="Hero image"
              width={2048}
              height={2048}
            />
          </div>
          <div className="my-8 flex flex-col items-start">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-darkIndigo">
              Building Brands that Move Real Estate Forward.
            </h3>
            <p className="text-base text-darkGray text-justify mb-4">
              Real estate moves fast, and in today&apos;s market, your marketing
              needs to move faster. That&apos;s where we come in. We&apos;re{' '}
              <strong>BrandNasu</strong>, a creative agency built specifically
              for real estate professionals. Our mission? To make branding
              effortless, content consistent, and marketing results-driven, no
              matter how many listings you&apos;re managing. From social media
              posts to listing flyers, branding kits to video edits, we handle
              the visuals while you focus on showings, closings, and growing
              your pipeline.
            </p>
            <p className="text-base text-darkGray text-justify mb-4">
              We saw agents burning hours on Canva, chasing freelancers, or
              settling for cookie-cutter templates that didn&apos;t match the
              quality of their service. That&apos;s why we created BrandNasu:{' '}
              <strong>your on-demand creative team</strong>, without the
              overhead.
            </p>
            <p className="text-base text-darkGray text-justify mb-4">
              Backed by real estate insight and a love for bold design,
              we&apos;re here to help agents and teams look sharp, stay
              consistent, and stand out in any market.
            </p>
          </div>
          <div className="flex flex-col mt-5">
            <Image
              src="/mission3.jpg"
              alt="Hero image"
              width={2048}
              height={2048}
            />
            <div className="my-10">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-darkIndigo">
                Building Brands that Move Real Estate Forward.
              </h3>
              <ul className="mt-3 space-y-3 *:text-lg *:text-darkGray pl-6">
                <li>
                  Point 1. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Asperiores, iusto.
                </li>
                <li>
                  Point 2. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Asperiores, iusto.
                </li>
                <li>
                  Point 3. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Asperiores, iusto.
                </li>
                <li>
                  Point 4. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Asperiores, iusto.
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-3">
              <Image
                src="/gallery2.jpg"
                alt="Hero image"
                width={2048}
                height={2048}
              />
              <Image
                src="/gallery3.jpg"
                alt="Hero image"
                width={2048}
                height={2048}
              />
              <Image
                src="/gallery5.jpg"
                alt="Hero image"
                width={2048}
                height={2048}
              />
            </div>
            <Image
              src="/mission1.jpg"
              alt="Hero image"
              width={2048}
              height={2048}
            />
          </div>
        </div>
      </div>
      <div className="bg-gray100">
        <CtaSection />
      </div>
    </div>
  );
};

export default WorkDetails;
