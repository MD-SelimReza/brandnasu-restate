// 'use client';

// import React, { useState } from 'react';
// import Image from 'next/image';
// import HeadingBlock from './ui/HeadingBlock';
// import Button from './ui/Button';
// import { useProjects } from '@/hooks/useProjects';

// const services = [
//   'Website',
//   'Landing Page',
//   'UI/UX',
//   'Logo Design',
//   'Brand Guideline',
//   'Printing',
//   'Social Media Branding',
//   'Signage',
//   'Pitch Deck',
//   'Branding Video',
//   'Listing Video',
//   'Video Ads',
// ] as const;

// type ServiceType = (typeof services)[number];

// const serviceRedirectMap: Record<ServiceType, string> = {
//   Website: 'website',
//   'Landing Page': 'website',
//   'UI/UX': 'website',

//   'Logo Design': 'brand-design',
//   'Brand Guideline': 'brand-design',
//   Printing: 'brand-design',

//   'Social Media Branding': 'brand-marketing',
//   Signage: 'brand-marketing',
//   'Pitch Deck': 'brand-marketing',

//   'Branding Video': 'brand-video',
//   'Listing Video': 'brand-video',
//   'Video Ads': 'brand-video',
// };

// const OurWorks = () => {
//   const [activeService, setActiveService] = useState<ServiceType>('Website');
//   const { projects } = useProjects();

//   const filteredProjects = projects.filter((project) =>
//     project.tag.includes(activeService)
//   );

//   const preloadImages = (tag: ServiceType) => {
//     const preImages = projects
//       .filter((p) => p.tag.includes(tag))
//       .slice(0, 3)
//       .map((p) => p.image);

//     preImages.forEach((src) => {
//       const img = new window.Image();
//       img.src = src;
//     });
//   };

//   return (
//     <div className="lg:py-32 md:py-20 py-16 bg-white px-5">
//       <div className="text-center mb-10">
//         <HeadingBlock
//           title="Explore what our team has executed for real estate"
//           description="Each project in this section reflects the strategic thinking and creative execution of our team. These works are not for sale, but presented to demonstrate the quality, precision, and results we consistently deliver for real estate brands."
//           titleColor="text-darkIndigo"
//           titleWidth="max-w-3xl mx-auto"
//           descriptionColor="text-darkGray"
//           descriptionWidth="max-w-5xl"
//           textAlignment="center"
//         />

//         {/* Service Filter */}
//         <div
//           data-aos="fade-up"
//           data-aos-easing="ease"
//           data-aos-duration="400"
//           className="mt-16 gap-3 flex flex-wrap mx-auto justify-center"
//         >
//           {services.map((tag) => (
//             <span
//               key={tag}
//               onMouseEnter={() => preloadImages(tag)}
//               onClick={() => setActiveService(tag)}
//               className={`md:px-4 md:py-2 md:text-base text-sm px-3 py-1 rounded-full cursor-pointer transition-colors duration-200 border
//                 ${
//                   activeService === tag
//                     ? 'bg-indigo text-white border-indigo'
//                     : 'bg-[#DEE0E2] text-darkGray border-[#DEE0E2] hover:bg-white hover:border-lightGray'
//                 }`}
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Project Grid */}
//       <div className="max-w-[1920px] mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-6 xl:gap-y-24 gap-y-20 md:gap-x-5 gap-x-10">
//           {filteredProjects.length > 0 ? (
//             filteredProjects.slice(0, 3).map((project) => (
//               <div
//                 key={project.slug}
//                 data-aos="fade-up"
//                 data-aos-easing="ease"
//                 data-aos-duration="400"
//               >
//                 <div className="block mb-10">
//                   <div className="relative overflow-hidden rounded-xl aspect-[3/2]">
//                     <Image
//                       key={project.image}
//                       src={project.image}
//                       alt={project.title}
//                       fill
//                       priority={true}
//                       className="object-cover rounded-xl hover:scale-105 transition duration-300"
//                     />
//                   </div>
//                 </div>
//                 <h2 className="text-2xl font-semibold text-darkIndigo">
//                   {project.title}
//                 </h2>
//                 <p className="mt-4 text-darkGray truncate-one-line">
//                   {project.description}
//                 </p>
//                 <div className="mt-6 gap-3 flex flex-wrap">
//                   {project.tag.map((tag, index) => (
//                     <span
//                       key={index}
//                       className="bg-[#DEE0E2] text-darkGray px-3 py-1 rounded-full font-regular text-sm"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-center col-span-full text-darkGray">
//               No projects available for this tag.
//             </p>
//           )}
//         </div>

//         {/* See All Button */}
//         <div className="mt-20 flex justify-center">
//           <Button
//             label="See More"
//             bgColor="bg-indigo hover:bg-darkIndigo"
//             textColor="text-white"
//             href={`/work?section=${serviceRedirectMap[activeService]}`}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurWorks;

import React from 'react';
import HeadingBlock from './ui/HeadingBlock';
import OurWorksClient from './ui/OurWorksClient';

const OurWorksStatic = () => {
  return (
    <div className="lg:py-32 md:py-20 py-16 bg-white px-5">
      <div className="text-center mb-10">
        <HeadingBlock
          title="Explore what our team has executed for real estate"
          description="Each project in this section reflects the strategic thinking and creative execution of our team. These works are not for sale, but presented to demonstrate the quality, precision, and results we consistently deliver for real estate brands."
          titleColor="text-darkIndigo"
          titleWidth="max-w-3xl mx-auto"
          descriptionColor="text-darkGray"
          descriptionWidth="max-w-5xl"
          textAlignment="center"
        />
      </div>

      {/* Client-side logic here */}
      <OurWorksClient />
    </div>
  );
};

export default OurWorksStatic;
