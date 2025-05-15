'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CtaSection from './CtaSection';
import { motion } from 'framer-motion';

const webList = [
  {
    title: 'UrbanNest - Website Development',
    description:
      'IDX-integrated real estate site crafted for seamless property search.',
    image:
      'https://img.freepik.com/free-photo/homepage-seen-computer-screen_23-2149416723.jpg',
    slug: 'urbannest-website-development',
    tag: ['Development', 'Website', 'Project'],
  },
  {
    title: 'SkyVista - Landing Page Design',
    description:
      'High-converting landing page focused on generating quality leads.',
    image:
      'https://img.freepik.com/free-vector/flat-design-real-estate-project-landing-page_23-2149908746.jpg',
    slug: 'skyvista-landing-page-design',
    tag: ['Development', 'Landing Page', 'Project'],
  },
  {
    title: 'HavenSpace - UI/UX Design',
    description:
      'Modern UI/UX optimized for intuitive browsing and engagement.',
    image:
      'https://img.freepik.com/premium-vector/programming-web-banner-best-programming-languages-social-media-creative-concept-idea-desktop-pc_122058-1961.jpg',
    slug: 'havenspace-ui-ux-design',
    tag: ['Development', 'UI/UX', 'Project'],
  },
  {
    title: 'MetroCity - Website Development',
    description:
      'Mobile-responsive site with listing management and lead capture.',
    image:
      'https://img.freepik.com/premium-psd/dream-house-sale-landing-page_872901-1688.jpg',
    slug: 'metrocity-website-development',
    tag: ['Development', 'Website', 'Project'],
  },
  {
    title: 'GreenBrick - Landing Page Design',
    description: 'Conversion-focused landing page tailored for local realtors.',
    image:
      'https://img.freepik.com/free-vector/flat-abstract-real-estate-landing-page_23-2149034508.jpg',
    slug: 'greenbrick-landing-page-design',
    tag: ['Development', 'Landing Page', 'Project'],
  },
];

const brandList = [
  {
    title: 'PrimeNest Realty – Logo Design',
    description: 'Bold and modern logo crafted for a premium property firm.',
    image:
      'https://img.freepik.com/free-vector/real-estate-logo-template_1156-724.jpg',
    slug: 'primenest-realty-logo-design',
    tag: ['Design', 'Logo Design', 'PrimeNest'],
  },
  {
    title: 'Skyline Homes – Brand Style Guide',
    description:
      'Defined brand colors, fonts, and visual rules for a consistent identity.',
    image:
      'https://fliphtml5.com/learning-center/wp-content/uploads/2023/04/Two-Toned-Brand-Guideline-Template.webp',
    slug: 'skyline-homes-brand-style-guide',
    tag: ['Design', 'Brand Guideline', 'Skyline Homes'],
  },
  {
    title: 'UrbanVista – Brochure Design',
    description:
      'Elegant brochure highlighting key listings and agent expertise.',
    image:
      'https://designshack.net/wp-content/uploads/bold-company-profile-brochure-template-823-1.jpg',
    slug: 'urbanvista-brochure-design',
    tag: ['Design', 'Printing', 'UrbanVista'],
  },
  {
    title: 'CozyKeys – Logo Design',
    description:
      'Friendly and minimal logo to reflect a warm property experience.',
    image:
      'https://img.freepik.com/premium-vector/free-vector-yellow-black-real-estate-logo_883906-1659.jpg',
    slug: 'cozykeys-logo-design',
    tag: ['Design', 'Logo Design', 'CozyKeys'],
  },
  {
    title: 'VistaEdge – Brand Style Guide',
    description:
      'Clean, strategic design system tailored for digital and print use.',
    image:
      'https://silber-consult.com/wp-content/uploads/2022/10/Brand-Style-Guideline-by-Smotrow-1024x683.jpg',
    slug: 'vistaedge-brand-style-guide',
    tag: ['Design', 'Brand Guideline', 'VistaEdge'],
  },
  {
    title: 'BrickLane Agency – Postcard Design',
    description: 'Compact marketing postcard designed for direct mail success.',
    image:
      'https://uicreative.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2019/11/23165623/postcard-digital-development.jpg',
    slug: 'bricklane-agency-postcard-design',
    tag: ['Design', 'Printing', 'BrickLane'],
  },
  {
    title: 'NextDoor Living – Logo Design',
    description:
      'Distinctive icon and typography symbolizing neighborhood trust.',
    image:
      'https://img.freepik.com/premium-vector/free-vector-yellow-black-real-estate-logo_883906-1659.jpghttps://img.freepik.com/free-vector/house-logo-icon-negative-space-style_126523-692.jpg',
    slug: 'nextdoor-living-logo-design',
    tag: ['Design', 'Logo Design', 'NextDoor Living'],
  },
  {
    title: 'Elevate Realty – Flyer Design',
    description: 'High-converting flyer designed to boost listing inquiries.',
    image:
      'https://brandpacks.com/wp-content/uploads/2018/09/free-festival-poster-templates.jpg',
    slug: 'elevate-realty-flyer-design',
    tag: ['Design', 'Printing', 'Elevate Realty'],
  },
];

const brandMarketList = [
  {
    title: 'Skyline Realty - Social Media Branding',
    description:
      'Created a unified brand presence across all major social platforms.',
    image:
      'https://img.freepik.com/premium-vector/social-media-post-design-facebook-cover-template-design-professional-creative-designs_756056-21.jpg',
    slug: 'skyline-realty-social-media-branding',
    tag: ['Marketing', 'Social Media Branding', 'Project'],
  },
  {
    title: 'UrbanEdge - Signage Design',
    description:
      'Developed high-impact real estate signage for street visibility.',
    image: 'https://realtysigns.org/wp-content/uploads/sandwich-board001.jpg',
    slug: 'urbanedge-signage-design',
    tag: ['Marketing', 'Signage', 'Project'],
  },
  {
    title: 'BlueNest - Pitch Deck Design',
    description:
      'Investor-ready pitch deck with strong visual narrative and stats.',
    image:
      'https://cdn.kwork.com/files/portfolio/t3/77/252c23c6dd62c19fc4b117810c06657e143fa023-1710744178.jpg',
    slug: 'bluenest-pitch-deck-design',
    tag: ['Marketing', 'Pitch Deck', 'Project'],
  },
  {
    title: 'OakHill Homes - Social Media Branding',
    description:
      'Built consistent visual identity for daily social engagement.',
    image:
      'https://img.freepik.com/premium-vector/creative-modern-business-facebook-cover-design-web-banner-template_627383-623.jpg',
    slug: 'oakhill-homes-social-media-branding',
    tag: ['Marketing', 'Social Media Branding', 'Project'],
  },
  {
    title: 'HomeVista - Signage Design',
    description:
      'Designed large-scale signs to promote new property developments.',
    image:
      'https://fiverr-res.cloudinary.com/t_mobile_web_2, q_auto, f_auto/gigs/370901000/original/460ab6a5279b988acc8c4b79e8efe1a909b6f280.jpg',
    slug: 'homevista-signage-design',
    tag: ['Marketing', 'Signage', 'Project'],
  },
  {
    title: 'NestSure - Pitch Deck Design',
    description:
      'Professional deck showcasing business model and funding goals.',
    image:
      'https://designshack.net/wp-content/uploads/Voute-Pitch-Deck-Powerpoint-Template.jpg',
    slug: 'nestsure-pitch-deck-design',
    tag: ['Marketing', 'Pitch Deck', 'Project'],
  },
];

const brandVideoList = [
  {
    title: 'VistaHomes - Branding Video',
    description: 'Told the brand’s story with cinematic visuals and narration.',
    image: 'https://homejab.com/wp-content/uploads/2021/02/360hero.jpg',
    slug: 'vistahomes-branding-video',
    tag: ['Design', 'Branding Video', 'Project'],
  },
  {
    title: 'MetroNest - Listing Video',
    description:
      'Highlighted premium property features for prospective buyers.',
    image:
      'https://f.vimeocdn.com/cms-images/2021/07/0702_Brand-Videos-Ideas-Blog-Header_1920x1080.jpeg',
    slug: 'metronest-listing-video',
    tag: ['Design', 'Listing Video', 'Project'],
  },
  {
    title: 'BlueOak Realty - Video Ads Creative',
    description: 'Crafted short-form video ads for social media campaigns.',
    image:
      'https://nestscale.com/wp-content/uploads/2022/12/745x400-TikTok-ad-creative-Specs-elements.jpg',
    slug: 'blueoak-realty-video-ads-creative',
    tag: ['Design', 'Video Ads', 'Project'],
  },
  {
    title: 'DreamBrick - Branding Video',
    description: 'Captured the essence of the brand through lifestyle shots.',
    image:
      'https://www.appletoncreative.com/wp-content/uploads/2017/08/Real-Estate-Video.jpg',
    slug: 'dreambrick-branding-video',
    tag: ['Design', 'Branding Video', 'Project'],
  },
  {
    title: 'RealVista - Listing Video',
    description:
      'Showcased interior and neighborhood appeal with drone footage.',
    image: 'https://i.ytimg.com/vi/mgn6myt_Ok8/hq720.jpg',
    slug: 'realvista-listing-video',
    tag: ['Design', 'Listing Video', 'Project'],
  },
  {
    title: 'ZenSpaces - Video Ads Creative',
    description: 'Produced engaging reels for targeted lead generation.',
    image:
      'https://www.mastroke.com/wp-content/uploads/2023/03/Digital-Video-Advertising-Is-The-Future-1.jpg',
    slug: 'zenspaces-video-ads-creative',
    tag: ['Design', 'Video Ads', 'Project'],
  },
];

const WorkHero = () => {
  const [animateOnce, setAnimateOnce] = useState(false);

  useEffect(() => {
    setAnimateOnce(true);
  }, []);

  return (
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
              {webList.slice(0, 5).map((web) => (
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
                        layout="fill"
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
              {brandList.slice(0, 8).map((brand) => (
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
                        layout="fill"
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
                Strategic campaigns and content that grow your brand visibility
                across platforms.
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-6 xl:gap-y-24 gap-y-20 md:gap-x-5 gap-x-10 xl:px-6 px-5">
              {brandMarketList.slice(0, 6).map((brand) => (
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
                        layout="fill"
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
              {brandVideoList.slice(0, 6).map((brand) => (
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
                        layout="fill"
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
  );
};

export default WorkHero;
