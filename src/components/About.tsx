'use client';

import React from 'react';
import brand1 from '../../public/Logo/l1.svg';
import brand2 from '../../public/Logo/l2.svg';
import brand3 from '../../public/Logo/l3.svg';
import brand4 from '../../public/Logo/l4.svg';
import brand5 from '../../public/Logo/l5.svg';
import brand6 from '../../public/Logo/l6.svg';
import brand7 from '../../public/Logo/l7.svg';
import brand8 from '../../public/Logo/l8.svg';
import brand9 from '../../public/Logo/l9.svg';
import brand10 from '../../public/Logo/l10.svg';
import web from '../../public/whiteicon_web.svg';
import branding from '../../public/Icons/branding.svg';
import global from '../../public/Icons/global.svg';
import empowering from '../../public/Icons/empowering.svg';
import graphic from '../../public/whiteicon_graphic.svg';
import marketing from '../../public/whiteicon_marketing.svg';
import video from '../../public/whiteicon_video.svg';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import TypewriterWithSound from './TypewriterWithSound';
import CounterUp from './CounterUp';
import Button from './ui/Button';
import { motion } from 'framer-motion';

const portfolioInfo = [
  {
    icon: brand1,
  },
  {
    icon: brand2,
  },
  {
    icon: brand3,
  },
  {
    icon: brand4,
  },
  {
    icon: brand5,
  },
  {
    icon: brand6,
  },
  {
    icon: brand7,
  },
  {
    icon: brand8,
  },
  {
    icon: brand9,
  },
  {
    icon: brand10,
  },
];

const teamMembers = [
  {
    name: 'Suvas Bin Monir',
    title: 'Chief Executive Officer',
    image:
      'https://brandnasu-space.nyc3.cdn.digitaloceanspaces.com/uploads/team-suvo.jpg',
  },
  {
    name: 'Ab Hadi',
    title: 'Senior Graphic Designer',
    image:
      'https://brandnasu-space.nyc3.cdn.digitaloceanspaces.com/uploads/team-abhadi.jpg',
  },
  {
    name: 'Saikat Somir',
    title: 'Web Developer',
    image:
      'https://brandnasu-space.nyc3.cdn.digitaloceanspaces.com/uploads/team-saikat.jpg',
  },
  {
    name: 'Md. Selim Reza',
    title: 'Web Developer',
    image:
      'https://brandnasu-space.nyc3.cdn.digitaloceanspaces.com/uploads/team-selim-reza.jpg',
  },
];

const serviceSections = [
  {
    title: 'Web Development',
    icon: web,
    description:
      'Custom-built, fast-loading, and mobile-ready real estate websites.',
  },
  {
    title: 'Brand Design',
    icon: graphic,
    description:
      'From custom logos to full identity kits that tell your brand story.',
  },
  {
    title: 'Social Media Identity',
    icon: marketing,
    description:
      'Branded templates and visuals that keep your profiles consistent and pro.',
  },
  {
    title: 'Branded Video',
    icon: video,
    description:
      'Short-form listing clips, reels, and marketing edits, fast turnaround, agent-ready.',
  },
];

const About = () => {
  const [showBox, setShowBox] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [animateOnce, setAnimateOnce] = useState(false);

  useEffect(() => {
    setAnimateOnce(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        // Scrolling up
        setShowBox(true);
      } else {
        // Scrolling down
        setShowBox(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="bg-darkIndigo">
      <div className="w-full max-w-[1440px] mx-auto px-5">
        <section className="relative xl:h-[850px] lg:h-[750px] md:h-[450px] pt-20 bg-darkIndigo flex md:flex-row flex-col-reverse gap-10 md:gap-20 items-center overflow-hidden">
          <div className="container mx-auto sm:px-4 lg:px-6 z-10 relative">
            <div className="w-full">
              <div className="relative overflow-hidden mb-2">
                <motion.h2
                  initial={{ opacity: 0, y: '50%' }}
                  animate={animateOnce ? { opacity: 1, y: '0%' } : {}}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="text-white text-[26px] sm:text-3xl mm:text-4xl lg:text-5xl font-bold"
                >
                  We are BrandNasu,
                </motion.h2>
              </div>
              <div className="text-white sm:text-3xl tracking-tight sm:tracking-normal text-[26px] md:text-4xl lg:text-5xl font-bold mb-12 flex items-center gap-2">
                <span>Real Estate </span>
                <span className="text-white sm:text-3xl text-[26px] md:text-4xl lg:text-5xl font-bold">
                  <TypewriterWithSound
                    text="Digital Agency."
                    speed={100}
                    delayAfterComplete={2000}
                  />
                </span>
              </div>
              <div
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-duration="400"
              >
                <Button label="Book A Call" href="/pricing/#book-call" />
              </div>
            </div>
          </div>

          <div
            className={`absolute bg-indigo/70 w-1/2 lg:h-48 h-32 hidden md:block z-10 bottom-0 right-0 transition-all duration-700 ease-in-out
              ${
                showBox
                  ? 'opacity-0 translate-y-10'
                  : 'opacity-100 translate-y-0'
              }
              `}
          ></div>

          <div className="absolute right-0 top-0 bottom-0 w-full md:w-3/4 lg:w-[80%] hidden md:block">
            <div className="relative h-full w-full">
              <Image
                src="https://brandnasu-space.nyc3.cdn.digitaloceanspaces.com/uploads/hero.jpg"
                alt="Thumbnail Image"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 78vw"
                className="object-cover object-center"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-indigo/70 to-lightIndigo/0" />
          </div>

          <div className="relative w-full md:hidden h-[300px]">
            <Image
              src="https://brandnasu-space.nyc3.cdn.digitaloceanspaces.com/uploads/hero.jpg"
              alt="About Hero"
              fill
              className="object-cover"
            />
          </div>
        </section>

        <section className="flex flex-col lg:flex-row lg:pb-32 md:py-24 py-16 lg:pt-0">
          {/* Left Orange Box */}
          <div className="bg-indigo flex justify-center items-center w-full lg:w-1/2 lg:h-[450px] md:h-[400px] h-[300px] relative">
            <h1 className="text-white xl:text-[10rem] md:text-9xl text-8xl md:font-extrabold font-bold flex items-center mr-16">
              <span>0</span>{' '}
              <span>
                <CounterUp
                  target={8}
                  duration={0.3}
                  className="text-white xl:text-[10rem] md:text-9xl text-8xl md:font-extrabold font-bold"
                />
              </span>{' '}
              <span>+</span>
            </h1>
            <div className="absolute xl:right-6 lg:right-2 md:right-20 -right-4 top-1/2 transform -translate-y-1/2 -rotate-90 origin-center">
              <p className="text-lightIndigo xl:text-5xl text-4xl font-semibold">
                years <br /> experience
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2 flex flex-col justify-center xl:pt-36 lg:pt-16 pt-20 xl:pl-36 lg:pl-16">
            <h2
              data-aos="fade-up"
              data-aos-easing="ease"
              data-aos-duration="400"
              className="text-white text-3xl md:text-4xl font-semibold mb-12"
            >
              Real Estate Branding <br /> Solutions for
            </h2>

            {/* First Project */}
            <div className="mb-10">
              <div
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-duration="400"
              >
                <h3 className="text-white font-semibold text-xl mb-3">
                  World Wide <span className="font-light">(countries)</span>
                </h3>
                {/* Progress Bar */}
                <div className="w-full bg-indigo rounded-full h-[3px] mb-4" />
              </div>
              <div className="flex items-center gap-5">
                <div className="text-white xl:text-7xl md:text-6xl text-5xl font-light lg:w-[35%] md:w-[20%] w-[30%] flex items-center">
                  <span>
                    <CounterUp
                      target={20}
                      duration={1}
                      className="text-white xl:text-7xl md:text-6xl text-5xl font-light"
                    />
                  </span>{' '}
                  <span>+</span>
                </div>
                <p
                  data-aos="fade-up"
                  data-aos-easing="ease"
                  data-aos-duration="400"
                  className="text-lightIndigo text-justify lg:w-[65%] md:w-[80%] w-[70%]"
                >
                  At BandNasu, we proudly deliver real estate branding solutions
                  across 20+ countries, helping agents and agencies worldwide
                  create powerful, recognizable brands. No matter where you are,
                  our expertise travels with you.
                </p>
              </div>
            </div>

            {/* Second Project */}
            <div>
              <div
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-duration="400"
              >
                <h3 className="text-white font-semibold text-xl mb-3">
                  Clients
                </h3>
                {/* Progress Bar */}
                <div className="w-full bg-indigo rounded-full h-[3px] mb-4" />
              </div>
              <div className="flex items-center gap-5">
                <div className="text-white lg:w-[35%] md:w-[20%] w-[30%] xl:text-7xl md:text-6xl text-5xl font-light flex items-center">
                  <span>
                    <CounterUp
                      target={300}
                      duration={1}
                      className="text-white xl:text-7xl md:text-6xl text-5xl font-light"
                    />
                  </span>{' '}
                  <span>+</span>
                </div>
                <p
                  data-aos="fade-up"
                  data-aos-easing="ease"
                  data-aos-duration="400"
                  className="text-lightIndigo lg:w-[65%] md:w-[80%] w-[70%] text-justify"
                >
                  With over 300+ clients served, BandNasu has earned the trust
                  of real estate professionals across the globe. Our experience
                  drives results , your success is our mission.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-center items-center pb-16">
          <h2
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="400"
            className="text-3xl md:text-4xl font-bold text-center lg:mb-20 text-white md:underline underline-offset-4"
          >
            Trusted by 100+ Real Estate Brands
          </h2>
          <div
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="300"
            className="w-full"
          >
            <div className="overflow-hidden max-w-[1440px] w-full mx-auto">
              <div className="relative flex items-center w-max animate-marquee gap-10">
                {[...portfolioInfo, ...portfolioInfo].map((portfolio, idx) => (
                  <div key={idx} className="flex-shrink-0">
                    <div className="flex flex-col md:gap-5 gap-3 justify-center items-center">
                      <Image
                        src={portfolio.icon}
                        alt="Logo"
                        width={150}
                        height={150}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Styles for Seamless Scrolling */}
            <style jsx>{`
              @keyframes marquee {
                0% {
                  transform: translateX(0%);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .animate-marquee {
                animation: marquee 50s linear infinite;
              }
            `}</style>
          </div>
        </section>

        <section className="flex flex-col items-center md:py-16">
          {/* Container */}
          <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-14">
            {/* Left Div */}
            <div className="w-full lg:w-1/2 flex flex-col items-start">
              <h1
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-duration="400"
                className="text-2xl text-white font-bold mb-6 border-l-4 border-l-indigo pl-2"
              >
                About Us
              </h1>
              <h3
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-duration="400"
                className="text-2xl md:text-3xl font-semibold mb-6 text-white"
              >
                Building Brands that Move Real Estate Forward.
              </h3>
              <p
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-duration="400"
                className="text-base text-lightIndigo text-justify mb-4"
              >
                Real estate moves fast, and in today&apos;s market, your
                marketing needs to move faster. That&apos;s where we come in.
              </p>
              <p
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-duration="400"
                className="text-base text-lightIndigo text-justify mb-4"
              >
                We&apos;re <strong>BrandNasu</strong>, a creative agency built
                specifically for real estate professionals. Our mission?
              </p>
              <p
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-duration="400"
                className="text-base text-lightIndigo text-justify mb-4"
              >
                To make branding effortless, content consistent, and marketing
                results-driven, no matter how many listings you&apos;re
                managing.
              </p>
              <p
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-duration="400"
                className="text-base text-lightIndigo text-justify mb-4"
              >
                We saw agents burning hours on Canva, chasing freelancers, or
                settling for cookie-cutter templates that didn&apos;t match the
                quality of their service. That&apos;s why we created BrandNasu:{' '}
                <strong>your on-demand creative team</strong>, without the
                overhead.
              </p>
              <p
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-duration="400"
                className="text-base text-lightIndigo text-justify mb-4"
              >
                From social media posts to listing flyers, branding kits to
                video edits, we handle the visuals while you focus on showings,
                closings, and growing your pipeline.
              </p>
              <p
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-duration="400"
                className="text-base text-lightIndigo text-justify mb-4"
              >
                Backed by real estate insight and a love for bold design,
                we&apos;re here to help agents and teams look sharp, stay
                consistent, and stand out in any market.
              </p>
            </div>

            {/* Right Div (Image) */}
            <div className="w-full lg:w-1/2 rounded-xl overflow-hidden">
              <Image
                src="https://brandnasu-space.nyc3.cdn.digitaloceanspaces.com/uploads/about.jpg"
                alt="Investment analysis"
                width={700}
                height={400}
                className="rounded-xl shadow-md object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </section>

        <section className="py-16">
          {/* Services Cards */}
          <div>
            <h1
              data-aos="fade-up"
              data-aos-easing="ease"
              data-aos-duration="400"
              className="text-2xl text-white font-bold mb-6 border-l-4 border-l-indigo pl-2"
            >
              What We Do
            </h1>
            <p
              data-aos="fade-up"
              data-aos-easing="ease"
              data-aos-duration="400"
              className="text-3xl font-semibold text-white text-justify mb-10"
            >
              We offer flat-rate creative support with services including
            </p>
            <div className="w-full grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-8">
              {serviceSections.map((service, idx) => (
                <div
                  data-aos="fade-up"
                  data-aos-easing="ease"
                  data-aos-duration="30"
                  key={idx}
                >
                  <div className="p-5 pt-8 h-56 bg-indigo rounded-xl shadow hover:scale-105 transition duration-500 flex flex-col items-center text-center">
                    <div className="flex flex-col justify-center items-center gap-5 mb-2">
                      <Image
                        priority
                        src={service.icon}
                        alt="service icon"
                        width={40}
                        height={40}
                        className="service-svg"
                      />
                      <h2 className="text-2xl font-bold text-white">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-lightIndigo">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pt-16 pb-32">
          <h1
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="400"
            className="text-2xl text-white font-bold mb-6 border-l-4 border-l-indigo pl-2"
          >
            Our Workspace & Environment
          </h1>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Child Container */}
            <div className="flex flex-col gap-6">
              {/* Paragraph */}
              <div className="h-fit pb-8">
                <p
                  data-aos="fade-up"
                  data-aos-easing="ease"
                  data-aos-duration="400"
                  className="text-base text-lightIndigo text-justify leading-relaxed mb-3"
                >
                  We&apos;re a hands-on team of creatives, brand strategists,
                  and developers, built for speed, quality, and clarity. Whether
                  it&apos;s a new listing that needs graphics today or a full
                  rebrand for your growing team, we&apos;ve got the in-house
                  talent and streamlined systems to make it happen fast.
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-easing="ease"
                  data-aos-duration="400"
                  className="text-base text-lightIndigo text-justify leading-relaxed"
                >
                  No fluff. Just clarity, consistency, and creative excellence,
                  delivered through a process built specifically to support real
                  estate professionals and drive real business results.
                </p>
              </div>

              {/* Image 1 */}
              <div
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-duration="400"
                className="relative overflow-hidden rounded-xl"
              >
                <Image
                  src="https://brandnasu-space.nyc3.cdn.digitaloceanspaces.com/uploads/gallery2.jpg"
                  alt="Portfolio Image 1"
                  width={2048}
                  height={2048}
                  className="object-cover rounded-xl hover:scale-105 transition duration-500"
                />
              </div>

              {/* Image 2 */}
              <div
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-duration="400"
                className="relative overflow-hidden rounded-xl"
              >
                <Image
                  src="https://brandnasu-space.nyc3.cdn.digitaloceanspaces.com/uploads/gallery4.jpg"
                  alt="Portfolio Image 2"
                  width={2048}
                  height={2048}
                  className="object-cover rounded-xl hover:scale-105 transition duration-500"
                />
              </div>
            </div>

            {/* Second Child Container */}
            <div className="flex flex-col gap-6">
              {/* Image 3 */}
              <div
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-duration="400"
                className="relative overflow-hidden rounded-xl"
              >
                <Image
                  src="https://brandnasu-space.nyc3.cdn.digitaloceanspaces.com/uploads/gallery1.jpg"
                  alt="Portfolio Image 3"
                  width={2048}
                  height={2048}
                  className="object-cover rounded-xl hover:scale-105 transition duration-500"
                />
              </div>

              {/* Image 4 */}
              <div
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-duration="400"
                className="relative overflow-hidden rounded-xl"
              >
                <Image
                  src="https://brandnasu-space.nyc3.cdn.digitaloceanspaces.com/uploads/gallery3.jpg"
                  alt="Portfolio Image 4"
                  width={2048}
                  height={2048}
                  className="object-cover rounded-xl hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="xl:py-20 py-20 lg:pb-16 px-5 md:px-8 xl:px-16 bg-[#f7f7f7] rounded-xl">
          {/* Our Mission */}
          <div className="mx-auto text-center">
            {/* Heading */}
            <h2
              data-aos="fade-up"
              data-aos-easing="ease"
              data-aos-duration="400"
              className="text-3xl font-bold text-darkIndigo mb-4"
            >
              Our Mission
            </h2>
            <p
              data-aos="fade-up"
              data-aos-easing="ease"
              data-aos-duration="400"
              className="text-darkGray max-w-5xl mx-auto mb-12"
            >
              BrandNasu&apos;s mission is to serve as the creative backbone for
              real estate professionals, delivering high-quality design work at
              lightning speed on a flat-rate basis. We aim to remove the
              marketing hurdles for agents and brokers by providing consistent,
              on-brand visuals, from social media posts and listing graphics to
              branding and short videos. Our support elevates your brand,
              allowing you to focus on what you do best.
            </p>

            {/* Cards */}
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 xl:gap-8 gap-6">
              {/* Card 1 */}
              <div
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-duration="400"
                className="bg-indigo rounded-xl overflow-hidden flex flex-col h-full md:order-1 lg:order-none"
              >
                <div className="p-6">
                  <h3 className="text-lightIndigo">
                    We help agents and teams grow their brand with standout
                    creative, fast, flexible, and consistent.
                  </h3>
                </div>
                <div className="flex-1 relative w-full aspect-square overflow-hidden">
                  <Image
                    src="https://brandnasu-space.nyc3.cdn.digitaloceanspaces.com/uploads/mission1.jpg"
                    alt="Secure Authentication"
                    fill
                    className="object-cover hover:scale-105 transition duration-500 object-right-top"
                  />
                </div>
              </div>

              {/* Card 2 (center) */}
              <div
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-duration="400"
                className="bg-indigo rounded-xl overflow-hidden flex sm:flex-col flex-col-reverse h-full md:order-3 lg:order-none"
              >
                <div className="relative w-full aspect-square overflow-hidden">
                  <Image
                    src="https://brandnasu-space.nyc3.cdn.digitaloceanspaces.com/uploads/mission2.jpg"
                    alt="Trusted Investors"
                    fill
                    className="object-cover hover:scale-105 transition duration-500 object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lightIndigo">
                    Our mission is to remove the design bottleneck by offering
                    unlimited content with on-demand turnaround.
                  </h3>
                </div>
              </div>

              {/* Card 3 */}
              <div
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-duration="400"
                className="bg-indigo rounded-xl overflow-hidden flex flex-col h-full md:order-2 lg:order-none"
              >
                <div className="p-6">
                  <h3 className="text-lightIndigo">
                    From new agents to top producers, we scale creative to match
                    your marketing goals and business vision.
                  </h3>
                </div>
                <div className="flex-1 relative w-full aspect-square overflow-hidden">
                  <Image
                    src="https://brandnasu-space.nyc3.cdn.digitaloceanspaces.com/uploads/mission3.jpg"
                    alt="Data Security"
                    fill
                    className="object-cover hover:scale-105 transition duration-500 object-right-bottom"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Our Vision */}
          <div className="mt-24 mx-auto text-center">
            <div>
              <h2
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-duration="400"
                className="text-3xl font-bold text-darkIndigo mb-4"
              >
                Our Vision
              </h2>
              <p
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-duration="400"
                className="text-darkGray max-w-5xl mx-auto mb-12"
              >
                We envision a real estate industry where every agent and broker
                has seamless access to top-tier creative design, leveling the
                playing field in marketing. Our vision is to transform how real
                estate professionals present themselves by making high-quality
                branding and content creation accessible, fast, and effective.
                We are committed to continually innovating our services to help
                our clients stand out and set new standards in the market.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5 text-left">
              <div
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-duration="400"
              >
                <div className="p-6 rounded-xl bg-white flex flex-col md:flex-row md:gap-10 gap-6 md:items-center hover:scale-105 md:hover:scale-[1.03] transition duration-500">
                  <div className="flex md:justify-center items-center">
                    <Image
                      src={branding}
                      alt="Branding"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-darkIndigo mb-2">
                      Innovation in Real Estate Branding
                    </h2>
                    <p className="text-base text-darkGray text-justify">
                      We&apos;re building the most efficient creative system for
                      real estate, fast, scalable, and built for daily
                      execution.
                    </p>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-duration="400"
              >
                <div className="p-6 rounded-xl bg-white flex flex-col md:flex-row md:gap-10 gap-6 md:items-center hover:scale-105 md:hover:scale-[1.03] transition duration-500">
                  <div className="flex md:justify-center items-center">
                    <Image src={global} alt="Global" width={100} height={100} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-darkIndigo mb-2">
                      Global Reach, Local Focus
                    </h2>
                    <p className="text-base text-darkGray text-justify">
                      We serve agents and teams worldwide while tailoring
                      content to reflect each market&apos;s unique style and
                      audience.
                    </p>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-duration="400"
              >
                <div className="p-6 rounded-xl bg-white flex flex-col md:flex-row md:gap-10 gap-6 md:items-center hover:scale-105 md:hover:scale-[1.03] transition duration-500">
                  <div className="flex md:justify-center items-center">
                    <Image
                      src={empowering}
                      alt="Empowering"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-darkIndigo mb-2">
                      Elevating the Industry Standard
                    </h2>
                    <p className="text-base text-darkGray text-justify">
                      Our vision is to raise the creative bar for real estate
                      marketing, making high-quality design accessible to all
                      agents.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-32 xl:px-16 md:px-8 px-5 py-20 pb-16 bg-gray100 rounded-xl">
          <div className="mx-auto text-center">
            <h2
              data-aos="fade-up"
              data-aos-easing="ease"
              data-aos-duration="400"
              className="text-3xl font-bold text-darkIndigo mb-4"
            >
              Meet the Leadership Team
            </h2>
            <p
              data-aos="fade-up"
              data-aos-easing="ease"
              data-aos-duration="400"
              className="text-darkGray max-w-5xl mx-auto mb-12"
            >
              A team of designers, creators, and builders, working together to
              deliver marketing that actually drives results.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-easing="ease"
                  data-aos-duration="400"
                >
                  <div className="bg-white rounded-xl overflow-hidden text-center xl:p-6 p-5 flex flex-col items-center transition duration-300 hover:scale-105">
                    <div className="aspect-[3/4] w-full relative mb-6 rounded-lg overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h4 className="text-darkIndigo text-2xl font-semibold mb-1">
                      {member.name}
                    </h4>
                    <p className="text-darkGray">{member.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
