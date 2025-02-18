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
//     setActiveDropdown(activeDropdown === menu ? null : menu);
//   };

//   return (
//     <footer className="bg-[#2F1D66] text-white xl:py-24 md:py-20 py-16">
//       <div className="w-full max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
//         {/* Services */}
//         <div className='relative' onClick={() => toggleDropdown('services')}>
//           <h3 className="flex items-center justify-between w-full font-medium text-xl mb-4">Services <IoIosArrowDown className={`${activeDropdown === 'services' ? 'rotate-180' : 'rotate-0'} transition-all duration-300`} /></h3>   
//           <div
//               className={`overflow-hidden transition-all duration-700 ease-in-out ${
//                 activeDropdown === 'services' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
//               }`}
//             >
//               {activeDropdown === 'services' && <ul className="space-y-1 text-[15px] font-light text-lightIndigo">
//             {[
//               'Custom Logo Design', 'Complete Brand Identity', 'Digital Business Card', 'Email Signature', 'Marketing Collateral', 
//               'Branding Flyer', 'Pitch Deck', 'Signage Design', 'Listing Video', 'Branding Video', 'Custom Website', 
//               'Landing Page', 'Social Media Branding'
//             ].map((item, index) => (
//               <li key={index} className="hover:text-lightIndigo hover:underline cursor-pointer">{item}</li>
//             ))}
//           </ul>}
//             </div>      
//           {/* <ul className="space-y-1 text-[15px] font-light text-lightIndigo">
//             {[
//               'Custom Logo Design', 'Complete Brand Identity', 'Digital Business Card', 'Email Signature', 'Marketing Collateral', 
//               'Branding Flyer', 'Pitch Deck', 'Signage Design', 'Listing Video', 'Branding Video', 'Custom Website', 
//               'Landing Page', 'Social Media Branding'
//             ].map((item, index) => (
//               <li key={index} className="hover:text-lightIndigo hover:underline cursor-pointer">{item}</li>
//             ))}
//           </ul> */}
//         </div>
        
//         {/* Content */}
//         <div className='relative' onClick={() => toggleDropdown('contact')}>
//         <h3 className="flex items-center justify-between w-full font-medium text-xl mb-4">Contact <IoIosArrowDown className={`${activeDropdown === 'contact' ? 'rotate-180' : 'rotate-0'} transition-all duration-300`} /></h3> 
//         <div
//               className={`overflow-hidden transition-all duration-700 ease-in-out ${
//                 activeDropdown === 'contact' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
//               }`}
//             >
//               {activeDropdown === 'contact' && <ul className="space-y-1 text-[15px] font-light text-lightIndigo">
//             {['Our Work', 'Pricing', 'Blog', 'FAQ', 'Contact', 'About'].map((item, index) => (
//               <li key={index} className="hover:text-lightIndigo hover:underline cursor-pointer">{item}</li>
//             ))}
//           </ul>}
//             </div> 
          
//         </div>
        
//         {/* Legal */}
//         <div className='relative' onClick={() => toggleDropdown('legal')}>
//         <h3 className="flex items-center justify-between w-full font-medium text-xl mb-4">Legal <IoIosArrowDown className={`${activeDropdown === 'legal' ? 'rotate-180' : 'rotate-0'} transition-all duration-300`} /></h3>
//         <div
//               className={`overflow-hidden transition-all duration-700 ease-in-out ${
//                 activeDropdown === 'legal' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
//               }`}
//             >
//               {activeDropdown === 'legal' && <ul className="space-y-1 text-[15px] font-light text-lightIndigo">
//             {['Terms and Condition', 'Privacy Policy', 'Refund Policy'].map((item, index) => (
//               <li key={index} className="hover:text-lightIndigo hover:underline cursor-pointer">{item}</li>
//             ))}
//           </ul>}
//             </div> 
          
//         </div>
        
//         {/* Contact Info */}
//         <div>
//           <h3 className="font-medium text-2xl mb-4 flex items-center gap-2">
//           <Image src={logo} alt='logo' width={100} height={100} />
//           </h3>
//           <p className="text-[15px] mb-4">Join thousands of influencers, brands, creators growing their Instagram followers with Path Social.</p>
//           <p className="text-[15px] mb-2">mail@nasu.com</p>
//           <p className="text-[15px] mb-2">+0911 2345 1234</p>
//           <p className="text-[15px]">1209 Mountain Road Pl Ne Ste R, Albuquerque, NM 87110, USA</p>
          
//           {/* Social Icons */}
//           <div className="flex gap-3 mt-3">
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


'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaYoutube } from 'react-icons/fa';
import logo from '../../public/Logo/light-logo.svg';
import { FaXTwitter } from 'react-icons/fa6';
import { IoIosArrowDown } from 'react-icons/io';

const Footer = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  const toggleDropdown = (menu: string) => {
    if (window.innerWidth < 768) {
      setActiveDropdown(activeDropdown === menu ? null : menu);
    }
  };

  return (
    <footer className="bg-[#2F1D66] text-white xl:py-24 md:py-20 py-16">
      <div className="w-full max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-8 gap-4">
        {['Services', 'Content', 'Legal'].map((section, index) => (
          <div key={index} className='relative' onClick={() => toggleDropdown(section.toLowerCase())}>
            <h3 className="flex items-center justify-between w-full font-medium text-xl mb-4 md:cursor-auto">
              {section}
              <IoIosArrowDown 
                className={`md:hidden ${activeDropdown === section.toLowerCase() ? 'rotate-180' : 'rotate-0'} transition-all duration-300`} 
              />
            </h3>
            <div className={`overflow-hidden transition-all duration-700 ease-in-out ${activeDropdown === section.toLowerCase() ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} md:max-h-full md:opacity-100`}>
              <ul className="space-y-1 text-[15px] font-light text-lightIndigo">
                {(
                  section === 'Services' ? ['Custom Logo Design', 'Complete Brand Identity', 'Digital Business Card', 'Email Signature', 'Marketing Collateral', 'Branding Flyer', 'Pitch Deck', 'Signage Design', 'Listing Video', 'Branding Video', 'Custom Website', 'Landing Page', 'Social Media Branding'] :
                  section === 'Content' ? ['Our Work', 'Pricing', 'Blog', 'FAQ', 'Contact', 'About'] :
                  ['Terms and Condition', 'Privacy Policy', 'Refund Policy']
                ).map((item, i) => (
                  <li key={i} className="hover:text-lightIndigo hover:underline cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        {/* Contact Info */}
        <div className='-order-1 lg:order-none mb-10'>
          <h3 className="font-medium text-2xl mb-4 flex items-center gap-2">
            <Image src={logo} alt='logo' width={100} height={100} />
          </h3>
          <p className="text-[15px] mb-4">Join thousands of influencers, brands, creators growing their Instagram followers with Path Social.</p>
          <p className="text-[15px] mb-2">mail@nasu.com</p>
          <p className="text-[15px] mb-2">+0911 2345 1234</p>
          <p className="text-[15px]">1209 Mountain Road Pl Ne Ste R, Albuquerque, NM 87110, USA</p>
          {/* Social Icons */}
          <div className="flex gap-3 mt-3">
            {[FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaPinterestP, FaYoutube].map((Icon, index) => (
              <a key={index} href="#" className="bg-lightIndigo/90 rounded-md p-2 hover:bg-lightIndigo">
                <Icon className="text-darkIndigo text-lg" />
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-center text-[15px] mt-14 text-lightIndigo">
        Copyright © 2025 nasu. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
