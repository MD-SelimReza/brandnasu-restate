// 'use client';

// import { motion, useScroll, useTransform } from 'framer-motion';
// import { useRef } from 'react';
// import Button from './ui/Button';
// import Image from 'next/image';
// import image from '../../public/gallery5.jpg';
// import { useInView } from 'react-intersection-observer';

// const WhatWeHelp = () => {
//   const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.5 });
//   const containerRef = useRef(null);

//   // Track scroll within full WhatWeHelp section
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ['start start', 'end end'],
//   });

//   // Animate border width from 0% to 100% across scroll
//   const borderWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

//   return (
//     <div
//       ref={containerRef}
//       className="relative max-w-[1440px] w-full mx-auto px-5 bg-indigo100"
//     >
//       <div className="relative flex lg:flex-row flex-col gap-10 items-start">
//         {/* Sticky Sidebar */}
//         <div className="lg:w-1/3 w-full lg:sticky lg:top-[86px] mb-10 lg:mb-0 py-16 lg:py-24 xl:py-40 self-start">
//           <div className="relative mb-6">
//             <h1 className="text-2xl text-darkIndigo font-bold mb-2 border-l-4 border-l-indigo pl-2">
//               Who We Help
//             </h1>
//           </div>

//           <h1 className="relative text-3xl font-bold text-left text-darkIndigo capitalize mb-4">
//             Empowering Every Corner of Real Estate
//             <motion.div
//               style={{ width: borderWidth }}
//               className="h-[2px] bg-indigo transition-all duration-500"
//             />
//           </h1>
//           <p className="text-left lg:mb-32 md:mb-16 mb-10 text-darkGray">
//             We serve everyone in the real estate space—delivering custom design,
//             marketing, and branding solutions that fit every unique need.
//           </p>
//           <Button label="Get Started" bgColor="bg-indigo hover:bg-darkIndigo" />
//         </div>

//         {/* Scrollable Content */}
//         <div className="lg:w-2/3 w-full grid grid-cols-1 sm:grid-cols-2 gap-10 py-16 lg:py-24 xl:py-40">
//           <div className="aspect-[3/4] relative rounded-xl overflow-hidden">
//             <Image src={image} alt="Image" layout="fill" objectFit="cover" />

//             {/* Gradient overlay at bottom */}
//             <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-darkIndigo to-transparent"></div>

//             {/* Content positioned at bottom end */}
//             <div
//               data-aos="fade-up"
//               data-aos-delay="100"
//               className="absolute bottom-0 left-0 w-full h-1/2 flex flex-col items-center justify-end text-left p-6"
//             >
//               <div className="text-white">
//                 <h1 className="text-2xl font-bold">Real Estate Investors</h1>
//                 <p className="mt-4 text-justify text-lightIndigo">
//                   Whether you&apos;re growing your portfolio or launching a new
//                   venture—we support your vision with tailored creative
//                   solutions.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="aspect-[3/4] relative rounded-xl overflow-hidden lg:mt-48">
//             <Image src={image} alt="Image" layout="fill" />

//             {/* Gradient overlay at bottom */}
//             <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-darkIndigo to-transparent"></div>

//             {/* Content positioned at bottom end */}
//             <div
//               data-aos="fade-up"
//               data-aos-delay="200"
//               className="absolute bottom-0 left-0 w-full h-1/2 flex flex-col items-center justify-end text-left p-6"
//             >
//               <div className="text-white">
//                 <h1 className="text-2xl font-bold">
//                   Homeowners & Property Sellers
//                 </h1>
//                 <p className="mt-4 text-justify text-lightIndigo">
//                   Need to stand out in a competitive market? We help you tell
//                   your story with clarity, confidence, and visual impact.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="aspect-[3/4] relative rounded-xl overflow-hidden lg:-mt-48">
//             <Image src={image} alt="Image" layout="fill" />

//             {/* Gradient overlay at bottom */}
//             <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-darkIndigo to-transparent"></div>

//             {/* Content positioned at bottom end */}
//             <div
//               data-aos="fade-up"
//               data-aos-delay="300"
//               className="absolute bottom-0 left-0 w-full h-1/2 flex flex-col items-center justify-end text-left p-6"
//             >
//               <div className="text-white">
//                 <h1 className="text-2xl font-bold">Real Estate Businesses</h1>
//                 <p className="mt-4 text-justify text-lightIndigo">
//                   From digital branding to full-service campaigns—we equip
//                   businesses with tools to scale, grow, and lead.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="aspect-[3/4] relative rounded-xl overflow-hidden">
//             <Image src={image} alt="Image" layout="fill" />

//             {/* Gradient overlay at bottom */}
//             <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-darkIndigo to-transparent"></div>

//             {/* Content positioned at bottom end */}
//             <div
//               data-aos="fade-up"
//               data-aos-delay="300"
//               className="absolute bottom-0 left-0 w-full h-1/2 flex flex-col items-center justify-end text-left p-6"
//             >
//               <div className="text-white">
//                 <h1 className="text-2xl font-bold">Real Estate Agencies</h1>
//                 <p className="mt-4 text-justify text-lightIndigo">
//                   You handle the properties. We handle your brand—from logo to
//                   lead generation and beyond.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhatWeHelp;

'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Button from './ui/Button';
import Image from 'next/image';
import image from '../../public/gallery5.jpg';
import { useInView } from 'react-intersection-observer';

const contentItems = [
  {
    title: 'Real Estate Investors',
    desc: `Whether you're growing your portfolio or launching a new venture—we support your vision with tailored creative solutions.`,
    className: '',
  },
  {
    title: 'Homeowners & Property Sellers',
    desc: `Need to stand out in a competitive market? We help you tell your story with clarity, confidence, and visual impact.`,
    className: 'lg:mt-48',
  },
  {
    title: 'Real Estate Businesses',
    desc: `From digital branding to full-service campaigns—we equip businesses with tools to scale, grow, and lead.`,
    className: 'lg:-mt-48',
  },
  {
    title: 'Real Estate Agencies',
    desc: `You handle the properties. We handle your brand—from logo to lead generation and beyond.`,
    className: '',
  },
];

const FadeInContent = ({
  title,
  desc,
  delay,
}: {
  title: string;
  desc: string;
  delay: number;
}) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.5 });

  return (
    <div
      ref={ref}
      className="absolute bottom-0 left-0 w-full h-1/2 flex flex-col items-center justify-end text-left p-6"
    >
      <div className="text-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay }}
          className="text-2xl font-bold"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: delay + 0.3 }}
          className="mt-4 text-justify text-lightIndigo"
        >
          {desc}
        </motion.p>
      </div>
    </div>
  );
};

const WhatWeHelp = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const borderWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div
      ref={containerRef}
      className="relative max-w-[1440px] w-full mx-auto px-5 bg-indigo100"
    >
      <div className="relative flex lg:flex-row flex-col gap-10 items-start">
        {/* Sticky Sidebar */}
        <div className="lg:w-1/3 w-full lg:sticky lg:top-[86px] mb-10 lg:mb-0 py-16 lg:py-24 xl:py-32 self-start">
          <div className="relative mb-6">
            <h1 className="text-2xl text-darkIndigo font-bold mb-2 border-l-4 border-l-indigo pl-2">
              Who We Help
            </h1>
          </div>

          <h1 className="relative text-3xl lg:text-4xl lg:!leading-[43px] font-bold text-left text-darkIndigo capitalize mb-4">
            Empowering Every Corner of Real Estate
            <motion.div
              style={{ width: borderWidth }}
              className="h-[2px] bg-indigo transition-all duration-500"
            />
          </h1>
          <p className="text-left lg:mb-32 md:mb-16 mb-10 text-darkGray">
            We serve everyone in the real estate space—delivering custom design,
            marketing, and branding solutions that fit every unique need.
          </p>
          <Button label="Get Started" bgColor="bg-indigo hover:bg-darkIndigo" />
        </div>

        {/* Scrollable Content */}
        <div className="lg:w-2/3 w-full grid grid-cols-1 sm:grid-cols-2 gap-10 py-16 lg:py-24 xl:py-32">
          {contentItems.map((item, index) => (
            <div
              key={index}
              className={`aspect-[3/4] relative rounded-xl overflow-hidden ${item.className}`}
            >
              <Image src={image} alt="Image" layout="fill" objectFit="cover" />

              {/* Gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-darkIndigo to-transparent" />

              {/* Animated Content */}
              <FadeInContent
                title={item.title}
                desc={item.desc}
                delay={index * 0.1}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeHelp;
