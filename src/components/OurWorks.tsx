'use client';

// import React, { useState, useRef, useEffect } from 'react';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// import Cards from './Cards';
// import Container from './Container';

// const services = [
//   'Listing Video',
//   'Listing Flyer',
//   'Photo Banner',
//   'Email Signature',
//   'Logo',
//   'Custom Website',
//   'Landing Page',
//   'Digital Business Card',
//   'Targeted Ad Campaign',
//   'Social Dashboard',
// ] as const;

// type ServiceType = (typeof services)[number];

// const OurWorks = () => {
//   const [activeService, setActiveService] = useState<ServiceType>('Logo');
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const [canScrollLeft, setCanScrollLeft] = useState(false);
//   const [canScrollRight, setCanScrollRight] = useState(true);

//   // useEffect(() => {
//   //   const checkScroll = () => {
//   //     if (scrollRef.current) {
//   //       setCanScrollLeft(scrollRef.current.scrollLeft > 0);
//   //       setCanScrollRight(
//   //         scrollRef.current.scrollLeft + scrollRef.current.clientWidth <
//   //           scrollRef.current.scrollWidth
//   //       );
//   //     }
//   //   };
//   //   checkScroll();
//   //   scrollRef.current?.addEventListener('scroll', checkScroll);
//   //   return () => scrollRef.current?.removeEventListener('scroll', checkScroll);
//   // }, []);

//   useEffect(() => {
//     const checkScroll = () => {
//       if (scrollRef.current) {
//         setCanScrollLeft(scrollRef.current.scrollLeft > 0);
//         setCanScrollRight(
//           scrollRef.current.scrollLeft + scrollRef.current.clientWidth <
//             scrollRef.current.scrollWidth
//         );
//       }
//     };
//     checkScroll();
//     const currentScrollRef = scrollRef.current;
//     currentScrollRef?.addEventListener('scroll', checkScroll);
//     return () => currentScrollRef?.removeEventListener('scroll', checkScroll);
//   }, []);

//   const scroll = (direction: 'left' | 'right') => {
//     if (scrollRef.current) {
//       const { scrollLeft, clientWidth } = scrollRef.current;
//       const scrollAmount = clientWidth / 2;
//       scrollRef.current.scrollTo({
//         left:
//           direction === 'left'
//             ? scrollLeft - scrollAmount
//             : scrollLeft + scrollAmount,
//         behavior: 'smooth',
//       });
//     }
//   };

//   return (
//     <div className="pt-8 lg:pt-16 xl:pt-20">
//       <Container>
//         <div className="w-full">
//           <div className="w-full max-w-4xl mx-auto text-center">
//             <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-darkIndigo lg:max-w-4xl mx-auto md:px-10 lg:px-0 text-center">
//               Powerful Branding, Marketing & Web Solutions in Action
//             </h2>
//             <p className="xl:mt-6 md:mt-5 mt-4 text-sm md:text-xl text-default md:px-16 lg:px-20 text-center">
//               See how our expert-designed branding, marketing, and web solutions
//               help real estate professionals stand out, attract leads, and close
//               more deals.
//             </p>
//           </div>

//           {/* Scrollable Services List */}
//           <div className="relative w-full mx-auto rounded-lg xl:mt-16 md:mt-10 mt-6">
//             {canScrollLeft && (
//               <div className="absolute left-0 h-full w-28 rounded-l-lg bg-gradient-to-l from-transparent to-lightIndigo/80 pointer-events-none" />
//             )}
//             {canScrollLeft && (
//               <button
//                 className="absolute left-0 top-1/2 transform -translate-y-1/2 text-[#E0D9FF] p-2"
//                 onClick={() => scroll('left')}
//               >
//                 <FaChevronLeft className="text-darkIndigo" />
//               </button>
//             )}

//             <div
//               ref={scrollRef}
//               style={{ scrollbarWidth: 'none' }}
//               className="flex overflow-x-auto bg-transparent border-gray-300 border rounded-lg items-center scrollbar-hide"
//             >
//               {services.map((service) => (
//                 <button
//                   key={service}
//                   onClick={() => setActiveService(service)}
//                   className={`px-3 mx-auto py-3 whitespace-nowrap font-medium transition-all duration-300 border-b-4 ${
//                     activeService === service
//                       ? 'border-indigo bg-[#E0D9FF] text-darkIndigo'
//                       : 'border-transparent text-default'
//                   }`}
//                 >
//                   {service}
//                 </button>
//               ))}
//             </div>

//             {canScrollRight && (
//               <div className="absolute right-0 top-0 h-full rounded-r-lg w-28 bg-gradient-to-r from-transparent to-lightIndigo/80 pointer-events-none" />
//             )}
//             {canScrollRight && (
//               <button
//                 className="absolute right-0 top-1/2 transform -translate-y-1/2 text-darkIndigo p-2"
//                 onClick={() => scroll('right')}
//               >
//                 <FaChevronRight className="text-darkIndigo" />
//               </button>
//             )}
//           </div>

//           {/* Active Service Content */}
//           {activeService && (
//             <div className="lg:mt-12 md:mt-10 mt-6">
//               <Cards service={activeService} />
//             </div>
//           )}
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default OurWorks;

import React, { useState } from 'react';
import { webList } from '@/data';
import Link from 'next/link';
import Image from 'next/image';
import HeadingBlock from './ui/HeadingBlock';

const services = [
  'Website',
  'Landing Page',
  'UI/UX',
  'Logo Design',
  'Brand Guideline',
  'Printing',
  'Social Media Branding',
  'Signage',
  'Pitch Deck',
  'Branding Video',
  'Listing Video',
  'Video Ads',
];

type ServiceType = (typeof services)[number];

const OurWorks = () => {
  const [activeService, setActiveService] = useState<ServiceType>('Website');

  return (
    <div className="lg:py-32 md:py-20 py-16 bg-white px-5">
      <div className="text-center mb-10">
        <HeadingBlock
          title="Explore What Our Team Has Executed"
          description="Each project in this section reflects the strategic thinking and
          creative execution of our team. These works are not for sale, but
          presented to demonstrate the quality, precision, and results we
          consistently deliver for real estate brands."
          titleColor="text-darkIndigo"
          descriptionColor="text-darkGray"
        />
        <div className="mt-16 gap-3 flex flex-wrap mx-auto justify-center">
          {services.map((tag) => (
            <span
              key={tag}
              onClick={() => setActiveService(tag)}
              className={`px-4 py-2 rounded-full cursor-pointer transition-colors duration-200 border 
                ${
                  activeService === tag
                    ? 'bg-indigo text-white border-indigo'
                    : 'bg-lightGray text-darkGray border-lightGray hover:bg-white hover:border-lightGray'
                }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-6 xl:gap-y-24 gap-y-20 md:gap-x-5 gap-x-10 xl:px-6 px-5">
          {webList.slice(0, 3).map((web) => (
            <div key={web.slug}>
              <Link href={`/work/${web.slug}`} className="block mb-10">
                <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                  <Image
                    src={web.image}
                    alt={web.title}
                    layout="fill"
                    className="object-cover rounded-xl hover:scale-105 transition duration-300"
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
                    className="bg-lightGray text-darkGray px-4 py-2 rounded-full font-regular"
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
  );
};

export default OurWorks;
