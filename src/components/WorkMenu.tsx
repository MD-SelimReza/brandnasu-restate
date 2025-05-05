import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

// Icons
import service1 from '../../public/Icons/Services/Services-01.svg';
import service2 from '../../public/Icons/Services/Services-02.svg';
import service3 from '../../public/Icons/Services/Services-03.svg';
import service4 from '../../public/Icons/Services/Services-04.svg';
import service5 from '../../public/Icons/Services/Services-05.svg';
import service6 from '../../public/Icons/Services/Services-06.svg';
import service7 from '../../public/Icons/Services/Services-07.svg';
import service8 from '../../public/Icons/Services/Services-08.svg';
import service9 from '../../public/Icons/Services/Services-09.svg';
import service10 from '../../public/Icons/Services/Services-10.svg';
import service11 from '../../public/Icons/Services/Services-11.svg';
import service12 from '../../public/Icons/Services/Services-12.svg';
import web from '../../public/Icons/web.svg';
import graphic from '../../public/Icons/graphic.svg';
import marketing from '../../public/Icons/marketing.svg';
import video from '../../public/Icons/video.svg';
import { FaArrowRightLong } from 'react-icons/fa6';

const serviceSections = [
  {
    title: 'Web Development',
    icon: web,
    description: 'Custom Real Estate Web Design Solutions',
    services: [
      {
        title: 'Website Development',
        description: 'IDX-integrated, responsive real estate sites',
        href: 'https://client.brandnasu.com/catalog/real-estate-custom-website-development-1745302418147241/checkout',
        icon: service3,
      },
      {
        title: 'Landing Page Development',
        description: 'Lead-generating, conversion-focused',
        href: 'https://client.brandnasu.com/catalog/real-estate-landing-page-development-1745301112487468/checkout',
        icon: service4,
      },
      {
        title: 'UI/UX Design',
        description: 'Unified brand visuals and user experience',
        href: 'https://client.brandnasu.com/catalog/real-estate-ulux-design-1745304233591512/checkout',
        icon: service1,
      },
    ],
  },
  {
    title: 'Brand Design',
    icon: graphic,
    description: 'Professional Graphics for Realty',
    services: [
      {
        title: 'Logo Design',
        description: 'Bold, memorable real estate logos',
        href: 'https://client.brandnasu.com/catalog/real-estate-logo-design-1745222839236304/checkout',
        icon: service5,
      },
      {
        title: 'Brand Style Guide',
        description: 'Consistent branding for your business',
        href: 'https://client.brandnasu.com/catalog/real-estate-brand-style-guide-1745213216131538/checkout',
        icon: service6,
      },
      {
        title: 'Flyer, Brochure & Postcard',
        description: 'Custom marketing print materials',
        href: 'https://client.brandnasu.com/catalog/real-estate-flyer-brochure-and-postcard-design-1745055401831160/checkout',
        icon: service8,
      },
    ],
  },
  {
    title: 'Brand Marketing',
    icon: marketing,
    description: 'Targeted Marketing Materials Drive',
    services: [
      {
        title: 'Social Media Branding',
        description: 'Cohesive social profile branding',
        href: 'https://client.brandnasu.com/catalog/social-media-branding-1745211112790372/checkout',
        icon: service7,
      },
      {
        title: 'Signage Design',
        description: 'High-visibility real estate signs',
        href: 'https://client.brandnasu.com/catalog/real-estate-signage-design-1745054144198136/checkout',
        icon: service9,
      },
      {
        title: 'Pitch Deck Design',
        description: 'Stunning investor-ready presentations',
        href: 'https://client.brandnasu.com/catalog/real-estate-pitch-deck-design-1745052563160132/checkout',
        icon: service10,
      },
    ],
  },
  {
    title: 'Brand Video',
    icon: video,
    description: 'Showcase Properties with Cinematic Edge',
    services: [
      {
        title: 'Branding Video',
        description: 'High-quality brand storytelling',
        href: 'https://client.brandnasu.com/catalog/real-estate-branding-video-1745046042160171/checkout',
        icon: service11,
      },
      {
        title: 'Listing Video',
        description: 'Property showcase for buyers',
        href: 'https://client.brandnasu.com/catalog/real-estate-listing-videos-1745044921997631/checkout',
        icon: service12,
      },
      {
        title: 'Video Ads Creative',
        description: 'Engaging social media video ads',
        href: 'https://client.brandnasu.com/catalog/real-estate-video-ads-creative-1745040881594561/checkout',
        icon: service2,
      },
    ],
  },
];

const ServiceCard = ({
  title,
  href,
}: {
  title: string;
  description: string;
  href: string;
  icon: string;
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#F7F7F7] hover:bg-violet-100 transition p-4 flex flex-col justify-between group ml-8"
  >
    <div className="flex items-start gap-2 text-darkIndigo">
      <div className="w-full">
        <h3 className="font-semibold flex items-center justify-between w-full gap-2">
          <span>{title}</span>
          <FaArrowRightLong
            size={16}
            className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
          />
        </h3>
      </div>
    </div>
  </Link>
);

const ServicesSection = ({
  services,
}: {
  services: {
    title: string;
    description: string;
    href: string;
    icon: string;
  }[];
}) => (
  <div className="grid grid-cols-1 gap-2">
    {services.map((service, idx) => (
      <ServiceCard key={idx} {...service} />
    ))}
  </div>
);

export default function WorkMenu({
  toggleDropdown,
  toggleMenu,
}: {
  toggleDropdown: (menu: string) => void;
  toggleMenu: () => void;
}) {
  const [isMobile, setIsMobile] = useState(false);
  const breakpoint = 1280;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);

    handleResize(); // set on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return (
    <div className="max-w-[1440px] mx-auto lg:pt-2.5 px-4">
      <div className="bg-white lg:p-5 rounded-b-lg shadow-md space-y-5">
        <div className="mt-5 lg:mt-0">
          <h3 className="font-semibold text-darkIndigo text-lg pb-2 mb-5 hidden lg:block">
            Our Services
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-0 xl:divide-x divide-black/10">
            {serviceSections.map((section, idx) => (
              <div
                key={idx}
                className={`flex flex-col gap-2 px-0 ${
                  idx === 0 && 'lg:pl-0'
                } ${idx === 3 && 'lg:pr-0'} lg:px-5`}
              >
                <div className="flex items-center gap-3">
                  <Image
                    priority
                    src={section.icon}
                    alt="Section icon"
                    width={20}
                    height={20}
                  />
                  <h2 className="text-xl font-bold text-darkIndigo">
                    {section.title}
                  </h2>
                </div>
                <p className="2xl:text-[15px] text-sm text-default mb-3 pl-8">
                  {section.description}
                </p>
                <ServicesSection services={section.services} />
              </div>
            ))}
          </div>
          <Link
            onClick={() => {
              if (isMobile) {
                toggleMenu();
              } else {
                toggleDropdown('work');
              }
            }}
            href="/"
            rel="noopener noreferrer"
            className="bg-[#F7F7F7] hover:bg-violet-100 transition p-4 flex flex-col justify-between group mt-8 rounded-lg"
          >
            <div className="flex items-start gap-2 text-darkIndigo">
              <div className="w-full">
                <h3 className="font-semibold flex items-center justify-center w-full gap-2">
                  <span>See More</span>
                  <FaArrowRightLong
                    size={16}
                    className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                  />
                </h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
