'use client';

import React, { Suspense, useEffect, useState } from 'react';
import Image from 'next/image';
import CtaSection from './CtaSection';
import { motion } from 'framer-motion';
import { useProjects } from '@/hooks/useProjects';
import ScrollToSectionClient from './ui/ScrollToSectionClient';
import Link from 'next/link';

const WorkHero = () => {
  const [animateOnce, setAnimateOnce] = useState(false);

  useEffect(() => {
    setAnimateOnce(true);
  }, []);

  const { projects } = useProjects();

  // Ensure Project type has updatedAt: string or Date
  type ProjectWithUpdatedAt = typeof projects extends (infer U)[]
    ? U & { updatedAt: string | Date }
    : never;
  const sortedProjects = [...(projects as ProjectWithUpdatedAt[])].sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );

  const webTags = ['Development', 'Website', 'Landing Page', 'UI/UX'];
  const designTags = ['Design', 'Logo Design', 'Brand Guideline', 'Printing'];
  const marketingTags = [
    'Marketing',
    'Pitch Deck',
    'Social Media Branding',
    'Signage',
  ];
  const videoTags = ['Branding Video', 'Listing Video', 'Video Ads'];

  const webProjects = sortedProjects.filter((p) =>
    p.tag.some((tag) => webTags.includes(tag))
  );
  const designProjects = sortedProjects.filter(
    (p) =>
      !webProjects.includes(p) && p.tag.some((tag) => designTags.includes(tag))
  );
  const marketingProjects = sortedProjects.filter(
    (p) =>
      !webProjects.includes(p) &&
      !designProjects.includes(p) &&
      p.tag.some((tag) => marketingTags.includes(tag))
  );
  const videoProjects = sortedProjects.filter(
    (p) =>
      !webProjects.includes(p) &&
      !designProjects.includes(p) &&
      !marketingProjects.includes(p) &&
      p.tag.some((tag) => videoTags.includes(tag))
  );

  return (
    <>
      <section className="bg-white">
        <div className="mx-auto text-center pt-16 lg:pt-24 xl:pt-32 px-5">
          <div className="relative overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: '50%' }}
              animate={animateOnce ? { opacity: 1, y: '0%' } : {}}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="text-3xl lg:text-4xl xl:text-5xl xl:!leading-[57px] lg:!leading-[48px] font-bold mx-auto lg:px-0 max-w-4xl text-darkIndigo"
            >
              Explore what our team has executed for real estate
            </motion.h1>
          </div>
          <div className="relative overflow-hidden xl:mt-6 md:mt-5 mt-4 ">
            <motion.p
              initial={{ opacity: 0, y: '100%' }}
              animate={animateOnce ? { opacity: 1, y: '0%' } : {}}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="mx-auto text-darkGray max-w-6xl text-lg"
            >
              Each project in this section reflects the strategic thinking and
              creative execution of our team. These works are not for sale, but
              presented to demonstrate the quality, precision, and results we
              consistently deliver for real estate brands.
            </motion.p>
          </div>
        </div>

        <div>
          {/* Web Development */}
          <div className="bg-white">
            <div id="website" className="lg:py-32 py-24 mx-auto max-w-[1440px]">
              <div className="w-full flex flex-col items-start px-6 mb-4">
                <h1
                  data-aos="fade-up"
                  data-aos-easing="ease"
                  data-aos-duration="400"
                  className="text-2xl text-darkIndigo font-bold mb-6 border-l-4 border-l-indigo pl-2"
                >
                  Web Development
                </h1>
                <h3
                  data-aos="fade-up"
                  data-aos-easing="ease"
                  data-aos-duration="400"
                  className="text-3xl md:text-4xl font-semibold mb-6 text-darkIndigo"
                >
                  Smart, scalable websites tailored for real estate brands to
                  convert visitors into leads.
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-6 xl:gap-y-24 gap-y-20 md:gap-x-5 gap-x-10 xl:px-6 px-5">
                {webProjects.map((web) => (
                  <div
                    key={web.slug}
                    data-aos="fade-up"
                    data-aos-easing="ease"
                    data-aos-duration="400"
                  >
                    <Link href={`/work/${web.slug}`} className="block mb-10">
                      <div className="relative overflow-hidden rounded-xl aspect-[3/2]">
                        <Image
                          src={web.image}
                          alt={web.title}
                          fill
                          className="object-cover hover:scale-105 transition duration-300"
                        />
                      </div>
                    </Link>
                    <Link href={`/work/${web.slug}`}>
                      <h2 className="text-2xl font-semibold text-darkIndigo">
                        {web.title}
                      </h2>
                    </Link>
                    <p className="mt-4 text-darkGray truncate-one-line">
                      {web.description}
                    </p>
                    <div className="mt-6 gap-3 flex flex-wrap">
                      {web.tag.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-[#DEE0E2] text-darkGray px-3 py-1 rounded-full font-regular text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Web Design */}
          <div className="bg-gray100">
            <div
              id="brand-design"
              className="lg:py-32 py-24 mx-auto max-w-[1440px]"
            >
              <div className="w-full flex flex-col items-start px-6 mb-4">
                <h1
                  data-aos="fade-up"
                  data-aos-easing="ease"
                  data-aos-duration="400"
                  className="text-2xl text-darkIndigo font-bold mb-6 border-l-4 border-l-indigo pl-2"
                >
                  Brand Design
                </h1>
                <h3
                  data-aos="fade-up"
                  data-aos-easing="ease"
                  data-aos-duration="400"
                  className="text-3xl md:text-4xl font-semibold mb-6 text-darkIndigo"
                >
                  Visually compelling brand identities that create trust and set
                  your business apart.
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-6 xl:gap-y-24 gap-y-20 md:gap-x-5 gap-x-10 xl:px-6 px-5">
                {designProjects.map((brand) => (
                  <div
                    data-aos="fade-up"
                    data-aos-easing="ease"
                    data-aos-duration="400"
                    key={brand.slug}
                  >
                    <Link href={`/work/${brand.slug}`} className="block mb-10">
                      <div className="relative overflow-hidden rounded-xl aspect-[3/2]">
                        <Image
                          src={brand.image}
                          alt={brand.title}
                          fill
                          className="object-cover hover:scale-105 transition duration-300"
                        />
                      </div>
                    </Link>
                    <Link href={`/work/${brand.slug}`}>
                      <h2 className="text-2xl font-semibold text-darkIndigo">
                        {brand.title}
                      </h2>
                    </Link>
                    <p className="mt-4 text-darkGray truncate-one-line">
                      {brand.description}
                    </p>
                    <div className="mt-6  gap-3 flex flex-wrap">
                      {brand.tag.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-[#DEE0E2] text-darkGray px-3 py-1 rounded-full font-regular text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Brand Marketing */}
          <div className="bg-white">
            <div
              id="brand-marketing"
              className="lg:py-32 py-24 mx-auto max-w-[1440px]"
            >
              <div className="w-full flex flex-col items-start px-6 mb-4">
                <h1
                  data-aos="fade-up"
                  data-aos-easing="ease"
                  data-aos-duration="400"
                  className="text-2xl text-darkIndigo font-bold mb-6 border-l-4 border-l-indigo pl-2"
                >
                  Brand Marketing
                </h1>
                <h3
                  data-aos="fade-up"
                  data-aos-easing="ease"
                  data-aos-duration="400"
                  className="text-3xl md:text-4xl font-semibold mb-6 text-darkIndigo"
                >
                  Strategic campaigns and content that grow your brand
                  visibility across platforms.
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-6 xl:gap-y-24 gap-y-20 md:gap-x-5 gap-x-10 xl:px-6 px-5">
                {marketingProjects.map((brand) => (
                  <div
                    data-aos="fade-up"
                    data-aos-easing="ease"
                    data-aos-duration="400"
                    key={brand.slug}
                  >
                    <Link href={`/work/${brand.slug}`} className="block mb-10">
                      <div className="relative overflow-hidden rounded-xl aspect-[3/2]">
                        <Image
                          src={brand.image}
                          alt={brand.title}
                          fill
                          className="object-cover hover:scale-105 transition duration-300"
                        />
                      </div>
                    </Link>
                    <Link href={`/work/${brand.slug}`}>
                      <h2 className="text-2xl font-semibold text-darkIndigo">
                        {brand.title}
                      </h2>
                    </Link>
                    <p className="mt-4 text-darkGray truncate-one-line">
                      {brand.description}
                    </p>
                    <div className="mt-6  gap-3 flex flex-wrap">
                      {brand.tag.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-[#DEE0E2] text-darkGray px-3 py-1 rounded-full font-regular text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Brand Video */}
          <div className="bg-gray100">
            <div
              id="brand-video"
              className="lg:py-32 py-24 mx-auto max-w-[1440px]"
            >
              <div className="w-full flex flex-col items-start px-6 mb-4">
                <h1
                  data-aos="fade-up"
                  data-aos-easing="ease"
                  data-aos-duration="400"
                  className="text-2xl text-darkIndigo font-bold mb-6 border-l-4 border-l-indigo pl-2"
                >
                  Brand Video
                </h1>
                <h3
                  data-aos="fade-up"
                  data-aos-easing="ease"
                  data-aos-duration="400"
                  className="text-3xl md:text-4xl font-semibold mb-6 text-darkIndigo"
                >
                  High-quality visuals and storytelling that connect emotionally
                  and sell effectively.
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-6 xl:gap-y-24 gap-y-20 md:gap-x-5 gap-x-10 xl:px-6 px-5">
                {videoProjects.map((brand) => (
                  <div
                    data-aos="fade-up"
                    data-aos-easing="ease"
                    data-aos-duration="400"
                    key={brand.slug}
                  >
                    <Link href={`/work/${brand.slug}`} className="block mb-10">
                      <div className="relative overflow-hidden rounded-xl aspect-[3/2]">
                        <Image
                          src={brand.image}
                          alt={brand.title}
                          fill
                          className="object-cover hover:scale-105 transition duration-300"
                        />
                      </div>
                    </Link>
                    <Link href={`/work/${brand.slug}`}>
                      <h2 className="text-2xl font-semibold text-darkIndigo">
                        {brand.title}
                      </h2>
                    </Link>
                    <p className="mt-4 text-darkGray truncate-one-line">
                      {brand.description}
                    </p>
                    <div className="mt-6  gap-3 flex flex-wrap">
                      {brand.tag.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-[#DEE0E2] text-darkGray px-3 py-1 rounded-full font-regular text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-easing="ease" data-aos-duration="400">
          <CtaSection />
        </div>
      </section>
      <Suspense fallback={null}>
        <ScrollToSectionClient />
      </Suspense>
    </>
  );
};

export default WorkHero;
