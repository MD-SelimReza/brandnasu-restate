'use client';

// import Image from 'next/image';
// import React, { useEffect, useState } from 'react';
// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaYoutube } from 'react-icons/fa';
// import logo from '../../public/Logo/light-logo.svg';
// import { FaArrowUp, FaXTwitter } from 'react-icons/fa6';
// import { IoIosArrowDown } from 'react-icons/io';

// const Footer = () => {
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//   const [showBackToTop, setShowBackToTop] = useState(false);

// const toggleDropdown = (menu: string) => {
//   if (window.innerWidth < 768) {
//     setActiveDropdown(activeDropdown === menu ? null : menu);
//   }
// };

// useEffect(() => {
//   const handleScroll = () => {
//     if (window.scrollY > window.innerHeight + 200) {
//       setShowBackToTop(true);
//     } else {
//       setShowBackToTop(false);
//     }
//   };

//   window.addEventListener('scroll', handleScroll);
//   return () => window.removeEventListener('scroll', handleScroll);
// }, []);

// const scrollToTop = () => {
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// };

// const menuLinks: { [key: string]: { name: string; link: string }[] } = {
//   Services: [
//     { name: 'Custom Logo Design', link: 'https://client.brandnasu.com/catalog/get-a-premium-logo-that-defines-your-real-estate-brand-1740995963093774/checkout' },
//     { name: 'Complete Brand Identity', link: '#' },
//     { name: 'Digital Business Card', link: '#' },
//     { name: 'Email Signature', link: '#' },
//     { name: 'Marketing Collateral', link: '#' },
//     { name: 'Branding Flyer', link: '#' },
//     { name: 'Pitch Deck', link: '#' },
//     { name: 'Signage Design', link: '#' },
//     { name: 'Listing Video', link: '#' },
//     { name: 'Branding Video', link: '#' },
//     { name: 'Custom Website', link: '#' },
//     { name: 'Landing Page', link: '#' },
//     { name: 'Social Media Branding', link: '#' }
//   ],
//   Company: [
//     { name: 'Our Work', link: '#' },
//     { name: 'Pricing', link: '#' },
//     { name: 'Blog', link: '/blog' },
//     { name: 'FAQ', link: '/#faq' },
//     { name: 'Contact', link: '/contact' },
//     { name: 'About', link: '/about' }
//   ],
//   Legal: [
//     { name: 'Terms and Condition', link: '/terms-condition' },
//     { name: 'Privacy Policy', link: '/privacy-policy' },
//     { name: 'Refund Policy', link: '/refund-policy' }
//   ]
// };

// const socialLinks = [
//   { icon: FaFacebookF, link: 'https://www.facebook.com' },
//   { icon: FaXTwitter, link: 'https://twitter.com' },
//   { icon: FaInstagram, link: 'https://www.instagram.com' },
//   { icon: FaLinkedinIn, link: 'https://www.linkedin.com' },
//   { icon: FaPinterestP, link: 'https://www.pinterest.com' },
//   { icon: FaYoutube, link: 'https://www.youtube.com' }
// ];

//   return (
//     <footer className="bg-[#2F1D66] text-white xl:pt-16 pb-4 md:pt-20 pt-16">
//       {/* <Container> */}
//         <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-8 gap-4 md:px-8 px-5">
// {Object.keys(menuLinks).map((section, index) => (
//   <div key={index} className='relative'>
//     <h3 onClick={() => toggleDropdown(section.toLowerCase())} className="flex items-center justify-between w-full font-medium text-xl mb-2 md:cursor-auto">
//       {section}
//       <IoIosArrowDown
//         className={`md:hidden ${activeDropdown === section.toLowerCase() ? 'rotate-180' : 'rotate-0'} transition-all duration-300`}
//       />
//     </h3>
//     <div className={`overflow-hidden transition-all duration-700 ease-in-out ${activeDropdown === section.toLowerCase() ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} md:max-h-full md:opacity-100`}>
//       <ul className="space-y-1 text-[15px] font-light text-lightIndigo">
//         {menuLinks[section].map((item, i) => (
//           <li key={i}>
//             <a href={item.link} className="hover:text-lightIndigo hover:underline cursor-pointer">
//               {item.name}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   </div>
// ))}

//           {/* Contact Info */}
// <div className='mt-6 md:mt-0'>
//   <h3 className="font-medium text-2xl mb-5 flex items-center gap-2">
//     <Image src={logo} alt='logo' width={100} height={100} />
//   </h3>
// <p className="text-[15px] mb-5">Branding, Marketing & Web Solutions for Real Estate Professionals</p>
// <p className="text-[15px] mb-3">hello@brandnasu.com</p>
// <p className="text-[15px] mb-3">(505) 575 7863</p>
// <p className="text-[15px]">1209 Mountain Road Pl Ne Ste R, Albuquerque, NM 87110, USA</p>
//   {/* Social Icons */}
// <div className="flex flex-wrap gap-3 mt-4">
//   {socialLinks.map(({ icon: Icon, link }, index) => (
//     <a key={index} href={link} target="_blank" rel="noopener noreferrer" className="bg-lightIndigo/90 rounded-md p-2 hover:bg-lightIndigo">
//       <Icon className="text-darkIndigo text-lg" />
//     </a>
//   ))}
// </div>
// </div>
//         </div>
// {showBackToTop && (
//   <button
//     onClick={scrollToTop}
//     className="fixed bottom-6 right-6 bg-indigo p-3 rounded-full shadow-md hover:bg-darkIndigo transition-all animate-bounce"
//   >
//     <FaArrowUp className="text-white text-xl" />
//   </button>
// )}
// <div className="text-center text-[15px] mt-16 text-lightIndigo">
//   Copyright © 2025 nasu. All rights reserved.
// </div>
//       {/* </Container> */}
//     </footer>
//   );
// };

// export default Footer;

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa6';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from 'react-icons/fa';
import { FaArrowUp, FaXTwitter } from 'react-icons/fa6';
import { IoIosArrowDown } from 'react-icons/io';
import logo from '../../public/Logo/light-logo.svg';
import { FiMail } from 'react-icons/fi';

const socialLinks = [
  { icon: FaFacebookF, link: 'https://www.facebook.com' },
  { icon: FaXTwitter, link: 'https://twitter.com' },
  { icon: FaInstagram, link: 'https://www.instagram.com' },
  { icon: FaLinkedinIn, link: 'https://www.linkedin.com' },
  { icon: FaPinterestP, link: 'https://www.pinterest.com' },
];

const menuLinks: { [key: string]: { name: string; link: string }[] } = {
  Services: [
    {
      name: 'Web Development',
      link: 'https://client.brandnasu.com/catalog/real-estate-custom-website-development-1745302418147241/checkout',
    },
    {
      name: 'Landing Page Design',
      link: 'https://client.brandnasu.com/catalog/real-estate-landing-page-development-1745301112487468/checkout',
    },
    {
      name: 'UI/UX Design',
      link: 'https://client.brandnasu.com/catalog/real-estate-ulux-design-1745304233591512/checkout',
    },
    {
      name: 'Branding Video',
      link: 'https://client.brandnasu.com/catalog/real-estate-branding-video-1745046042160171/checkout',
    },
    {
      name: 'Listing Video',
      link: 'https://client.brandnasu.com/catalog/real-estate-listing-videos-1745044921997631/checkout',
    },
    {
      name: 'Video Ads Creative',
      link: 'https://client.brandnasu.com/catalog/real-estate-video-ads-creative-1745040881594561/checkout',
    },
    {
      name: 'Logo Design',
      link: 'https://client.brandnasu.com/catalog/real-estate-logo-design-1745222839236304/checkout',
    },
    {
      name: 'Brands Style Guide',
      link: 'https://client.brandnasu.com/catalog/real-estate-brand-style-guide-1745213216131538/checkout',
    },
    {
      name: 'Flyer, Brochure & Postcard',
      link: 'https://client.brandnasu.com/catalog/real-estate-flyer-brochure-and-postcard-design-1745055401831160/checkout',
    },
    {
      name: 'Social Media Branding',
      link: 'https://client.brandnasu.com/catalog/social-media-branding-1745211112790372/checkout',
    },
    {
      name: 'Signage Design',
      link: 'https://client.brandnasu.com/catalog/real-estate-signage-design-1745054144198136/checkout',
    },
    {
      name: 'Pitch Deck Design',
      link: 'https://client.brandnasu.com/catalog/real-estate-pitch-deck-design-1745052563160132/checkout',
    },
  ],
  'Quick Link': [
    { name: 'About Us', link: '/about-us' },
    { name: 'Career', link: '/career' },
    { name: 'Pricing', link: '/pricing' },
    { name: 'Work', link: '/work' },
    { name: 'Blog', link: '/blog' },
  ],
};

const Footer = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const toggleDropdown = (menu: string) => {
    if (window.innerWidth < 768) {
      setActiveDropdown(activeDropdown === menu ? null : menu);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight + 200) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-darkIndigo text-white pt-16">
      <div className="max-w-[1440px] w-full mx-auto">
        {/* Main Footer */}
        <div className="flex flex-col lg:flex-row py-10 px-5 lg:gap-20 md:gap-16 gap-10">
          {/* Left Section */}
          <div className="lg:w-[40%] space-y-8">
            <div className="mb-4 text-white">
              <h3 className="font-medium text-2xl mb-3 flex items-center gap-2 pb-3 border-b-[0.1px] border-b-lightIndigo/25">
                <Image src={logo} alt="logo" width={100} height={100} />
              </h3>
              <p className="text-[#afa5ff]">
                1209 Mountain Road Pl Ne Ste R, Albuquerque, <br /> NM 87110,
                USA
              </p>
              <div className="flex items-center space-x-2 mt-6 text-[#afa5ff] hover:text-lightIndigo">
                <Link
                  href="https://wa.me/15055757863"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <FaWhatsapp size={16} className="text-lightIndigo" />
                  <span>(505) 575 7863</span>
                </Link>
              </div>
              <div className="flex items-center space-x-2 mt-2 text-[#afa5ff] hover:text-lightIndigo">
                {/* <a className="MuiBox-root css-19hg7r9" href="mailto:web@programming-hero.com">level2@programming-hero.com</a> */}
                <a
                  href="mailto:hello@brandnasu.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <FiMail size={16} className="text-lightIndigo" />
                  <span>hello@brandnasu.com</span>
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-5">
              {socialLinks.map(({ icon: Icon, link }, index) => (
                <Link
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="text-[#afa5ff] hover:text-lightIndigo text-xl" />
                </Link>
              ))}
            </div>
          </div>

          {/* Right Section */}
          {/* <div className="lg:w-1/2 grid md:grid-cols-3 grid-cols-1 md:gap-8 gap-4">
            {Object.keys(menuLinks).map((section, index) => (
              <div key={index} className={`${section === "Services" ? "col-span-2" : "col-span-1"}`}>
                <h3 onClick={() => toggleDropdown(section.toLowerCase())} className="flex items-center pb-3 border-b-[0.1px] border-b-lightIndigo/25 justify-between w-full text-xl mb-3 md:cursor-auto">
                  {section}
                  <IoIosArrowDown 
                    className={`md:hidden ${activeDropdown === section.toLowerCase() ? 'rotate-180' : 'rotate-0'} transition-all duration-300`} 
                  />
                </h3>
                <div className={`overflow-hidden transition-all duration-700 ease-in-out ${activeDropdown === section.toLowerCase() ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} md:max-h-full md:opacity-100`}>
                  <ul className="space-y-1 text-[15px] font-light text-lightIndigo">
                    {menuLinks[section].map((item, i) => (
                      <li key={i}>
                        <a href={item.link} className="hover:text-lightIndigo hover:underline cursor-pointer">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div> */}

          <div className="lg:w-[60%] grid md:grid-cols-3 grid-cols-1 lg:gap-20 md:gap-16 gap-6">
            {Object.keys(menuLinks).map((section, index) => (
              <div
                key={index}
                className={`${
                  section === 'Services' ? 'md:col-span-2' : 'md:col-span-1'
                }`}
              >
                <h3
                  onClick={() => toggleDropdown(section.toLowerCase())}
                  className="flex items-center md:pb-4 pb-3 border-b-[0.1px] border-b-lightIndigo/25 justify-between w-full text-lg mb-3 md:cursor-auto text-lightIndigo"
                >
                  {section}
                  <IoIosArrowDown
                    className={`md:hidden ${
                      activeDropdown === section.toLowerCase()
                        ? 'rotate-180'
                        : 'rotate-0'
                    } transition-all duration-300`}
                  />
                </h3>

                {/* Content wrapper with smooth toggle on mobile */}
                <div
                  className={`overflow-hidden transition-all duration-700 ease-in-out ${
                    activeDropdown === section.toLowerCase()
                      ? 'max-h-[500px] opacity-100'
                      : 'max-h-0 opacity-0'
                  } md:max-h-full md:opacity-100`}
                >
                  {/* SERVICES SECTION */}
                  {section === 'Services' ? (
                    <>
                      {/* Mobile View */}
                      <ul className="md:hidden space-y-2 font-light text-lightIndigo">
                        {menuLinks[section].map((item, i) => (
                          <li key={i}>
                            <Link
                              href={item.link}
                              target="_blank"
                              className="before:w-0 hover:before:w-full text-[#afa5ff] before:bg-lightIndigo before:h-[1px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-0.1px] hover:text-lightIndigo transition-all duration-300 before:left-0 cursor-pointer capitalize"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>

                      {/* Desktop View: 2 columns */}
                      <div className="hidden md:grid grid-cols-2 gap-x-16">
                        {[...Array(2)].map((_, colIndex) => (
                          <ul
                            key={colIndex}
                            className="space-y-2 font-light text-lightIndigo"
                          >
                            {menuLinks[section]
                              .slice(
                                colIndex === 0
                                  ? 0
                                  : Math.ceil(menuLinks[section].length / 2),
                                colIndex === 0
                                  ? Math.ceil(menuLinks[section].length / 2)
                                  : undefined
                              )
                              .map((item, i) => (
                                <li key={i}>
                                  <Link
                                    href={item.link}
                                    target="_blank"
                                    className="before:w-0 hover:before:w-full text-[#afa5ff] before:bg-lightIndigo before:h-[1px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-0.1px] hover:text-lightIndigo transition-all duration-300 before:left-0 cursor-pointer capitalize"
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                          </ul>
                        ))}
                      </div>
                    </>
                  ) : (
                    // QUICK LINK SECTION
                    <ul className="space-y-2 font-light text-lightIndigo">
                      {menuLinks[section].map((item, i) => (
                        <li key={i}>
                          <Link
                            href={item.link}
                            // target="_blank"
                            className="before:w-0 hover:before:w-full text-[#afa5ff] before:bg-lightIndigo before:h-[1px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-0.1px] hover:text-lightIndigo transition-all duration-300 before:left-0 cursor-pointer capitalize"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-indigo p-3 rounded-full hover:bg-darkIndigo transition-all duration-500 animate-bounce"
          >
            <FaArrowUp className="text-white text-xl" />
          </button>
        )}

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 max-w-[1400px] mx-auto text-lightIndigo lg:flex-row justify-between items-center py-6 border-t-[0.1px] border-t-lightIndigo/25">
          <p className="text-center text-[#afa5ff] no-underline">
            Copyright © 2025 BrandNasu, All rights reserved.
          </p>
          <div className="flex lg:space-x-[85px] space-x-4 mt-5 md:mt-0">
            <Link
              href="/contact-us"
              className="before:w-0 hover:before:w-full text-[#afa5ff] before:bg-lightIndigo before:h-[1px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-0.1px] hover:text-lightIndigo transition-all duration-300 before:left-0 cursor-pointer capitalize"
            >
              Contact us
            </Link>
            <Link
              href="/terms-condition"
              className="before:w-0 hover:before:w-full text-[#afa5ff] before:bg-lightIndigo before:h-[1px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-0.1px] hover:text-lightIndigo transition-all duration-300 before:left-0 cursor-pointer"
            >
              Terms and Condition
            </Link>
            <Link
              href="/privacy-policy"
              className="before:w-0 hover:before:w-full text-[#afa5ff] before:bg-lightIndigo before:h-[1px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-0.1px] hover:text-lightIndigo transition-all duration-300 before:left-0 cursor-pointer capitalize"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
