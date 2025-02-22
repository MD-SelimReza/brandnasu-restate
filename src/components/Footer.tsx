'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaYoutube } from 'react-icons/fa';
import logo from '../../public/Logo/light-logo.svg';
import { FaArrowUp, FaXTwitter } from 'react-icons/fa6';
import { IoIosArrowDown } from 'react-icons/io';
import Container from './Container';

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

  const menuLinks: { [key: string]: { name: string; link: string }[] } = {
    Services: [
      { name: 'Custom Logo Design', link: '#' },
      { name: 'Complete Brand Identity', link: '#' },
      { name: 'Digital Business Card', link: '#' },
      { name: 'Email Signature', link: '#' },
      { name: 'Marketing Collateral', link: '#' },
      { name: 'Branding Flyer', link: '#' },
      { name: 'Pitch Deck', link: '#' },
      { name: 'Signage Design', link: '#' },
      { name: 'Listing Video', link: '#' },
      { name: 'Branding Video', link: '#' },
      { name: 'Custom Website', link: '#' },
      { name: 'Landing Page', link: '#' },
      { name: 'Social Media Branding', link: '#' }
    ],
    Content: [
      { name: 'Our Work', link: '#' },
      { name: 'Pricing', link: '#' },
      { name: 'Blog', link: '/blog' },
      { name: 'FAQ', link: '/#faq' },
      { name: 'Contact', link: '/contact' },
      { name: 'About', link: '/about' }
    ],
    Legal: [
      { name: 'Terms and Condition', link: '/terms-condition' },
      { name: 'Privacy Policy', link: '/privacy-policy' },
      { name: 'Refund Policy', link: '/refund-policy' }
    ]
  };

  const socialLinks = [
    { icon: FaFacebookF, link: 'https://www.facebook.com' },
    { icon: FaXTwitter, link: 'https://twitter.com' },
    { icon: FaInstagram, link: 'https://www.instagram.com' },
    { icon: FaLinkedinIn, link: 'https://www.linkedin.com' },
    { icon: FaPinterestP, link: 'https://www.pinterest.com' },
    { icon: FaYoutube, link: 'https://www.youtube.com' }
  ];

  return (
    <footer className="bg-[#2F1D66] text-white xl:py-24 md:py-20 py-16">
      <Container>
        <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-8 gap-4">
          {Object.keys(menuLinks).map((section, index) => (
            <div key={index} className='relative'>
              <h3 onClick={() => toggleDropdown(section.toLowerCase())} className="flex items-center justify-between w-full font-medium text-xl mb-4 md:cursor-auto">
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

          {/* Contact Info */}
          <div className='mt-6 md:mt-0'>
            <h3 className="font-medium text-2xl mb-5 flex items-center gap-2">
              <Image src={logo} alt='logo' width={100} height={100} />
            </h3>
            <p className="text-[15px] mb-5">Join thousands of influencers, brands, creators growing their Instagram followers with Path Social.</p>
            <p className="text-[15px] mb-3">mail@nasu.com</p>
            <p className="text-[15px] mb-3">+0911 2345 1234</p>
            <p className="text-[15px]">1209 Mountain Road Pl Ne Ste R, Albuquerque, NM 87110, USA</p>
            {/* Social Icons */}
            <div className="flex flex-wrap gap-3 mt-4">
              {socialLinks.map(({ icon: Icon, link }, index) => (
                <a key={index} href={link} target="_blank" rel="noopener noreferrer" className="bg-lightIndigo/90 rounded-md p-2 hover:bg-lightIndigo">
                  <Icon className="text-darkIndigo text-lg" />
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* {showBackToTop && (
          <button onClick={scrollToTop} className="fixed bottom-6 right-6 bg-indigo p-3 rounded-full shadow-md hover:bg-darkIndigo transition-all">
            <FaArrowUp className="text-white text-xl" />
          </button>
        )} */}
        {showBackToTop && (
          <button 
            onClick={scrollToTop} 
            className="fixed bottom-6 right-6 bg-indigo p-3 rounded-full shadow-md hover:bg-darkIndigo transition-all animate-bounce"
          >
            <FaArrowUp className="text-white text-xl" />
          </button>
        )}
        <div className="text-center text-[15px] mt-16 text-lightIndigo">
          Copyright © 2025 nasu. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;


// 'use client';

// import Image from 'next/image';
// import React, { useState } from 'react';
// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaYoutube } from 'react-icons/fa';
// import logo from '../../public/Logo/light-logo.svg';
// import { FaXTwitter } from 'react-icons/fa6';
// import { IoIosArrowDown } from 'react-icons/io';

// const Footer = () => {
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
//   const toggleDropdown = (menu: string) => {
//     if (window.innerWidth < 768) {
//       setActiveDropdown(activeDropdown === menu ? null : menu);
//     }
//   };

//   return (
//     <footer className="bg-[#2F1D66] text-white xl:py-24 md:py-20 py-16 md:px-10">
//       <div className="w-full max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-8 gap-4">
//         {['Services', 'Content', 'Legal'].map((section, index) => (
//           <div key={index} className='relative'>
//             <h3 onClick={() => toggleDropdown(section.toLowerCase())} className="flex items-center justify-between w-full font-medium text-xl mb-4 md:cursor-auto">
//               {section}
//               <IoIosArrowDown 
//                 className={`md:hidden ${activeDropdown === section.toLowerCase() ? 'rotate-180' : 'rotate-0'} transition-all duration-300`} 
//               />
//             </h3>
//             <div className={`overflow-hidden transition-all duration-700 ease-in-out ${activeDropdown === section.toLowerCase() ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} md:max-h-full md:opacity-100`}>
//               <ul className="space-y-1 text-[15px] font-light text-lightIndigo">
//                 {(
//                   section === 'Services' ? ['Custom Logo Design', 'Complete Brand Identity', 'Digital Business Card', 'Email Signature', 'Marketing Collateral', 'Branding Flyer', 'Pitch Deck', 'Signage Design', 'Listing Video', 'Branding Video', 'Custom Website', 'Landing Page', 'Social Media Branding'] :
//                   section === 'Content' ? ['Our Work', 'Pricing', 'Blog', 'FAQ', 'Contact', 'About'] :
//                   ['Terms and Condition', 'Privacy Policy', 'Refund Policy']
//                 ).map((item, i) => (
//                   <li key={i} className="hover:text-lightIndigo hover:underline cursor-pointer">{item}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}

//         {/* Contact Info */}
//         <div className='mb-10'>
//           <h3 className="font-medium text-2xl mb-5 flex items-center gap-2">
//             <Image src={logo} alt='logo' width={100} height={100} />
//           </h3>
//           <p className="text-[15px] mb-5">Join thousands of influencers, brands, creators growing their Instagram followers with Path Social.</p>
//           <p className="text-[15px] mb-3">mail@nasu.com</p>
//           <p className="text-[15px] mb-3">+0911 2345 1234</p>
//           <p className="text-[15px]">1209 Mountain Road Pl Ne Ste R, Albuquerque, NM 87110, USA</p>
//           {/* Social Icons */}
//           <div className="flex flex-wrap gap-3 mt-4">
//             {[FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaPinterestP, FaYoutube].map((Icon, index) => (
//               <a key={index} href="#" className="bg-lightIndigo/90 rounded-md p-2 hover:bg-lightIndigo">
//                 <Icon className="text-darkIndigo text-lg" />
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//       {/* Copyright */}
//       <div className="text-center text-[15px] mt-14 text-lightIndigo">
//         Copyright © 2025 nasu. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;
