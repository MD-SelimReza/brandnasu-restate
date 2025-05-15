'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Container from './Container';
import careerHero from '../../public/careerhero.svg';
import { motion } from 'framer-motion';

const CareerHero = () => {
  const [animateOnce, setAnimateOnce] = useState(false);

  useEffect(() => {
    setAnimateOnce(true);
  }, []);

  return (
    <div className="bg-white">
      <Container>
        <div className="flex flex-col-reverse md:flex-row justify-between lg:gap-20 gap-16 py-10">
          <div className="w-full md:w-1/2 text-left">
            <div className="relative overflow-hidden mb-8">
              <motion.h1
                initial={{ opacity: 0, y: '50%' }}
                animate={animateOnce ? { opacity: 1, y: '0%' } : {}}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="text-3xl lg:text-4xl xl:text-5xl lg:!leading-[57px] font-bold text-darkIndigo lg:max-w-xl"
              >
                Grow, Create, Belong With Us
              </motion.h1>
            </div>
            <p
              data-aos="fade-up"
              data-aos-easing="ease"
              data-aos-duration="400"
              className="text-darkGray max-w-5xl text-justify mb-6"
            >
              At BrandNasu, we don&apos;t just build brands, we build a team
              culture where people feel inspired, supported, and empowered.
            </p>
            <p
              data-aos="fade-up"
              data-aos-easing="ease"
              data-aos-duration="400"
              className="text-darkGray max-w-5xl text-justify mb-6"
            >
              We work with real estate professionals around the world,
              delivering creative solutions that make a difference. But what
              makes our work truly meaningful is how we do it, together.
            </p>
            <p
              data-aos="fade-up"
              data-aos-easing="ease"
              data-aos-duration="400"
              className="text-darkGray max-w-5xl text-justify mb-6"
            >
              From shared brainstorms to casual snack breaks, from tough
              deadlines to team wins, we show up for each other. Your ideas
              matter here, and your growth is part of our mission.
            </p>
            <p
              data-aos="fade-up"
              data-aos-easing="ease"
              data-aos-duration="400"
              className="text-darkGray max-w-5xl text-justify mb-24"
            >
              If you&apos;re looking for a place where you can create boldly,
              work with purpose, and be part of something real, welcome to
              BrandNasu.
            </p>
            <a href="#apply-now">
              <button
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-duration="400"
                className={`rounded-full block font-semibold text-lg transition duration-500 cursor-pointer group bg-indigo hover:bg-darkIndigo`}
              >
                <p className="rounded-full font-bold text-lg duration-500 px-8 py-2.5 text-white">
                  Apply Now
                </p>
              </button>
            </a>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src={careerHero}
              alt="Career Hero"
              width={700}
              height={350}
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CareerHero;
