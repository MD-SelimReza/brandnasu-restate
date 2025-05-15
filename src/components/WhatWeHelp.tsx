'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Button from './ui/Button';
import Image from 'next/image';
import image1 from '../../public/real-estate-agent.jpeg';
import image2 from '../../public/teams-brokers.jpeg';
import image3 from '../../public/marketing-manager.png';
import image4 from '../../public/dev-investor.jpeg';
import { useInView } from 'react-intersection-observer';

const contentItems = [
  {
    title: 'Real Estate Agents',
    desc: `From new agents building a personal brand to experienced professionals managing multiple listings, we deliver consistent, high-quality marketing and design that helps you stay visible and close more deals.`,
    className: '',
    image: image1,
  },
  {
    title: 'Real Estate Teams & Brokers',
    desc: `We help teams and brokerages maintain a strong, unified brand across agents and platforms by providing scalable creative support without the overhead of an in-house team.`,
    className: 'lg:mt-48',
    image: image2,
  },
  {
    title: 'Marketing Managers',
    desc: `In-house marketing teams rely on us to handle listing promotions, brand materials, and campaign visuals, so deadlines are met and quality is never compromised.`,
    className: 'lg:-mt-48',
    image: image3,
  },
  {
    title: 'Developers & Investors',
    desc: `We help real estate developers and investors launch, fund, and promote their projects through branding, pitch decks, landing pages, and high-converting marketing assets that impress buyers, partners, and stakeholders.`,
    className: '',
    image: image4,
  },
];

const FadeInContent = ({
  title,
  desc,
  delay,
}: {
  title: string;
  desc: string;
  delay: number;
}) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.5 });

  return (
    <div
      ref={ref}
      className="absolute bottom-0 left-0 w-full h-1/2 flex flex-col items-center justify-end text-left p-6"
    >
      <div className="text-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay }}
          className="text-2xl font-bold"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: delay + 0.3 }}
          className="mt-4 text-justify text-white font-light"
        >
          {desc}
        </motion.p>
      </div>
    </div>
  );
};

const WhatWeHelp = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const borderWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div
      ref={containerRef}
      className="relative max-w-[1440px] w-full mx-auto px-5 bg-indigo100"
    >
      <div className="relative flex lg:flex-row flex-col md:gap-10 items-start">
        {/* Sticky Sidebar */}
        <div className="lg:w-1/3 w-full lg:sticky lg:top-[86px] pt-16 lg:py-24 xl:py-32 self-start">
          <div className="relative mb-6">
            <h1
              data-aos="fade-up"
              data-aos-easing="ease"
              data-aos-duration="400"
              className="text-2xl text-darkIndigo font-bold mb-2 border-l-4 border-l-indigo pl-2"
            >
              Who We Help
            </h1>
          </div>

          <h1
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="400"
            className="relative text-3xl lg:text-4xl lg:!leading-[43px] font-bold text-left text-darkIndigo capitalize mb-4"
          >
            Empowering Every Corner of Real Estate
            <motion.div
              style={{ width: borderWidth }}
              className="h-[2px] bg-indigo transition-all duration-500"
            />
          </h1>

          <p
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="400"
            className="text-left lg:mb-32 md:mb-16 mb-10 text-darkGray"
          >
            We serve every corner of the real estate industry with on-demand
            creative and marketing solutions tailored to your role.
          </p>

          <div
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="400"
          >
            <Button
              label="Get Started"
              bgColor="bg-indigo hover:bg-darkIndigo"
              href="/pricing"
            />
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="lg:w-2/3 w-full grid grid-cols-1 sm:grid-cols-2 gap-10 py-16 lg:py-24 xl:py-32">
          {contentItems.map((item, index) => (
            <div
              key={index}
              className={`aspect-[3/4] relative rounded-xl overflow-hidden ${item.className}`}
            >
              <Image
                src={item.image}
                alt="Image"
                layout="fill"
                objectFit="cover"
              />

              {/* Gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-darkIndigo via-darkIndigo/70 to-transparent" />

              {/* Animated Content */}
              <FadeInContent
                title={item.title}
                desc={item.desc}
                delay={index * 0.1}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeHelp;
