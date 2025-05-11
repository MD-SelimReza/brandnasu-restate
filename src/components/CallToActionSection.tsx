// 'use client';

// import Container from './Container';
// import Image from 'next/image';
// import { IoIosStar, IoIosStarHalf } from 'react-icons/io';
// import clutch from '../../public/clutch-icon.svg';
// import Button from './ui/Button';
// import HeadingBlock from './ui/HeadingBlock';
// import { useInView } from 'react-intersection-observer';
// import { motion } from 'framer-motion';

// const CallToActionSection = () => {
//   const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.5 });
//   return (
//     <div className="bg-white relative">
//       <div className="border border-red-500 sticky top-[88px]"></div>
//       <div ref={ref} className=" bg-white lg:py-12 py-8">
//         <Container>
//           <div className="w-full flex flex-col items-center rounded-xl justify-center text-white relative h-auto p-6 py-10 md:p-16 lg:p-16 xl:p-20">
//             {/* Background Gradient */}
//             <div className="absolute inset-0 bg-black rounded-xl"></div>
//             <div className="absolute bottom-0 right-0 w-[50%] h-[100%] bg-gradient-to-tl from-[#451F62] via-transparent to-transparent rounded-b-xl overflow-hidden"></div>
//             <div className="absolute bottom-0 left-0 w-[50%] h-[100%] bg-gradient-to-tr from-[#123E84] via-transparent to-transparent rounded-xl overflow-hidden"></div>

//             {/* Content */}
//             <div className="relative z-10 text-center">
//               <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
//                 <HeadingBlock
//                   title="Your Brand, Your Listings, Your Growth, We Make It Happen."
//                   description="Stop blending in, get premium branding, marketing, and web
//               solutions for real estate professionals. From one-time designs to
//               unlimited creative support, we help you stand out, attract leads,
//               and close more deals."
//                   titleColor="text-white"
//                   titleWidth="max-w-3xl"
//                   descriptionColor="text-lightIndigo"
//                   descriptionWidth="max-w-3xl"
//                 />
//               </div>
//               <div className="lg:mt-20 md:mt-16 mt-10 mb-5">
//                 <div className="flex items-center flex-col md:flex-row gap-5 w-full mt-10 z-20 justify-center">
//                   <Button
//                     bgColor="bg-lightIndigo"
//                     textColor="text-darkIndigo"
//                     label="Book a Call"
//                     href="/pricing/#book-a-call"
//                   />
//                   <Button
//                     bgColor="bg-indigo"
//                     textColor="text-white"
//                     label="Get Started"
//                     href="/pricing"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Floating Squares */}
//             <motion.div
//               className={`absolute top-[30%] -left-[8%] z-10 w-[300px] h-fit bg-[#E1F7E1] rounded-xl xl:block hidden
//             transition-transform duration-500 ease-in-out
//             ${inView ? 'translate-y-10' : '-translate-y-10'}
//           `}
//             >
//               <div className="w-full h-full p-5">
//                 <div className="flex justify-between items-center">
//                   <div className="flex items-center gap-3">
//                     <div className="w-[50px] h-[50px] border-2 border-lightIndigo rounded-full overflow-hidden flex justify-center items-center">
//                       <Image
//                         src={'/Jason-Kelly.jpg'}
//                         width={100}
//                         height={100}
//                         objectFit="fill"
//                         alt="Jason-Kelly"
//                         className="object-cover w-[45px] h-[45px] rounded-full"
//                       />
//                     </div>
//                     <div>
//                       <p className="text-[16px] font-semibold text-black">
//                         Jason Kelly
//                       </p>
//                       <p className="text-xs text-black">
//                         CEO, Phoenix AZ Ad Agency
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <p className="text-[16px] mt-3 text-black">
//                   Consistently Outstanding – 40+ Projects of Exceptional
//                   Branding & Design with BrandNasu!
//                 </p>
//                 <div className="flex justify-between items-center mt-3">
//                   <div className="flex items-center gap-1 text-yellow-400">
//                     {[1, 2, 3, 4].map((_, index) => (
//                       <IoIosStar key={index} className="text-lg" />
//                     ))}
//                     <IoIosStarHalf className="text-lg" />
//                   </div>
//                   <Image
//                     src={clutch}
//                     width={24}
//                     height={24}
//                     alt="Clutch icon"
//                     objectFit="fill"
//                     className="rounded-xl"
//                   />
//                 </div>
//               </div>
//             </motion.div>
//             <div
//               className={`absolute xl:block hidden top-[10%] -right-[8%] w-[270px] h-fit bg-[#EAE4FC] rounded-xl`}
//             >
//               <div className="w-full h-full p-5">
//                 <div className="flex justify-between items-center">
//                   <div className="flex items-center gap-3">
//                     <div className="w-[50px] h-[50px] border-2 border-lightIndigo rounded-full overflow-hidden flex justify-center items-center">
//                       <Image
//                         src={'/Mason-Preddy.jpg'}
//                         width={100}
//                         height={100}
//                         objectFit="fill"
//                         alt="Mason-Preddy"
//                         className="object-cover w-[45px] h-[45px] rounded-full"
//                       />
//                     </div>
//                     <div>
//                       <p className="text-[16px] font-semibold text-black">
//                         Mason Preddy
//                       </p>
//                       <p className="text-xs text-black">
//                         Founder & CEO, WhiteBrights
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <p className="text-[16px] mt-3 text-black">
//                   Transformative Social Media Branding with BrandNasu!
//                 </p>
//                 <div className="flex justify-between items-center mt-2">
//                   <div className="flex items-center gap-1 text-yellow-400">
//                     {[1, 2, 3, 4].map((_, index) => (
//                       <IoIosStar key={index} className="text-lg" />
//                     ))}
//                     <IoIosStarHalf className="text-lg" />
//                   </div>
//                   <Image
//                     src={clutch}
//                     width={24}
//                     height={24}
//                     alt="Clutch icon"
//                     objectFit="fill"
//                     className="rounded-xl"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div
//               className={`absolute xl:block hidden bottom-[6%] right-[4%] w-[220px] h-[220px] bg-gradient-to-tr from-[#4E3D5C] to-[#772DD8] rounded-xl`}
//             ></div>
//             <div
//               className={`absolute xl:block hidden bottom-[7%] left-[3%] w-[235px] h-[235px] bg-gradient-to-tl from-[#4E3D5C] to-[#772DD8] rounded-xl`}
//             ></div>
//             <div
//               className={`absolute xl:block hidden -bottom-[10%] -right-[9%] w-[230px] h-fit bg-[#F9EFE3] rounded-xl`}
//             >
//               <div className="w-full h-full p-5">
//                 <div className="flex justify-between items-center">
//                   <div className="flex items-center gap-3">
//                     <div className="h-fit">
//                       <div className="w-[50px] h-[50px] border-2 border-lightIndigo rounded-full overflow-hidden flex justify-center items-center">
//                         <Image
//                           src={'/Khalil-Henry.jpg'}
//                           width={100}
//                           height={100}
//                           objectFit="fill"
//                           alt="Khalil-Henry"
//                           className="object-cover w-[45px] h-[45px] rounded-full"
//                         />
//                       </div>
//                     </div>
//                     <div>
//                       <p className="text-[16px] font-semibold text-black">
//                         Khalil Henry
//                       </p>
//                       <p className="text-xs text-black">SoldByKhalil.com</p>
//                     </div>
//                   </div>
//                 </div>
//                 <p className="text-[16px] mt-3 text-black">
//                   BrandNasu Delivers Exceptional Branding & Design Every Time!
//                 </p>
//                 <div className="flex justify-between items-center mt-3">
//                   <div className="flex items-center gap-1 text-yellow-400">
//                     {[1, 2, 3, 4, 5].map((_, index) => (
//                       <IoIosStar key={index} className="text-lg" />
//                     ))}
//                   </div>
//                   <Image
//                     src={clutch}
//                     width={24}
//                     height={24}
//                     alt="Clutch icon"
//                     objectFit="fill"
//                     className="rounded-xl"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Container>
//       </div>
//       <div className="border border-red-500 sticky bottom-0"></div>
//     </div>
//   );
// };

// export default CallToActionSection;

'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Container from './Container';
import HeadingBlock from './ui/HeadingBlock';
import Button from './ui/Button';
import Image from 'next/image';
import { IoIosStar, IoIosStarHalf } from 'react-icons/io';
import clutch from '../../public/clutch-icon.svg';
import { AiOutlineClose } from 'react-icons/ai';

const CallToActionSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-90px', '90px']);

  return (
    <>
      <div ref={sectionRef} className="bg-white lg:py-12 py-8">
        <Container>
          <div className="w-full flex flex-col items-center rounded-xl justify-center text-white relative h-auto p-6 py-10 md:p-16 lg:p-16 xl:p-20">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-black rounded-xl" />
            <div className="absolute bottom-0 right-0 w-[50%] h-full bg-gradient-to-tl from-[#451F62] via-transparent to-transparent rounded-b-xl" />
            <div className="absolute bottom-0 left-0 w-[50%] h-full bg-gradient-to-tr from-[#123E84] via-transparent to-transparent rounded-xl" />

            {/* Content */}
            <div className="relative z-10 text-center max-w-5xl mx-auto">
              <HeadingBlock
                title="Your Brand, Your Listings, Your Growth, We Make It Happen."
                description="Stop blending in, get premium branding, marketing, and web solutions for real estate professionals. From one-time designs to unlimited creative support, we help you stand out, attract leads, and close more deals."
                titleColor="text-white"
                titleWidth="max-w-3xl"
                descriptionColor="text-lightIndigo"
                descriptionWidth="max-w-3xl"
              />
              <div className="lg:mt-20 md:mt-16 mt-10 mb-5">
                <div className="flex flex-col md:flex-row gap-5 items-center justify-center mt-10 z-20">
                  <div onClick={openModal} className="w-fit">
                    <Button
                      bgColor="bg-lightIndigo"
                      textColor="text-darkIndigo"
                      label="Book a Call"
                    />
                  </div>
                  <Button
                    bgColor="bg-indigo"
                    textColor="text-white"
                    label="Get Started"
                    href="/pricing"
                  />
                </div>
              </div>
            </div>

            {/* Floating Review Cards (Scroll synced) */}
            <motion.div
              className="absolute top-[20%] -left-[8%] z-10 w-[300px] h-fit bg-[#E1F7E1] rounded-xl xl:block hidden"
              style={{ y }}
            >
              <ReviewCard
                name="Jason Kelly"
                role="CEO, Phoenix AZ Ad Agency"
                text="Consistently Outstanding – 40+ Projects of Exceptional Branding & Design with BrandNasu!"
                stars={4.5}
                image="/Jason-Kelly.jpg"
              />
            </motion.div>

            <motion.div
              className="absolute top-[0%] -right-[5%] w-[270px] h-fit bg-[#EAE4FC] rounded-xl z-10 xl:block hidden"
              style={{ y }}
            >
              <ReviewCard
                name="Mason Preddy"
                role="Founder & CEO, WhiteBrights"
                text="Transformative Social Media Branding with BrandNasu!"
                stars={4.5}
                image="/Mason-Preddy.jpg"
              />
            </motion.div>

            <motion.div
              className="absolute -bottom-[10%] -right-[9%] w-[230px] h-fit bg-[#F9EFE3] rounded-xl z-10 xl:block hidden"
              style={{ y }}
            >
              <ReviewCard
                name="Khalil Henry"
                role="SoldByKhalil.com"
                text="BrandNasu Delivers Exceptional Branding & Design Every Time!"
                stars={5}
                image="/Khalil-Henry.jpg"
              />
            </motion.div>

            {/* Decorative Gradient Blocks */}
            <div className="absolute bottom-[6%] right-[4%] w-[220px] h-[220px] bg-gradient-to-tr from-[#4E3D5C] to-[#772DD8] rounded-xl xl:block hidden">
              <ReviewCard
                name="Sandra Liu"
                role="Broker, LuxeNest Realty"
                text="BrandNasu leveled up our look, fast and flawless!"
                stars={5}
                image="/Khalil-Henry.jpg"
                nameColor="text-white"
                textColor="text-lightIndigo"
              />
            </div>
            <div className="absolute bottom-[7%] left-[3%] w-[220px] h-[220px] bg-gradient-to-tl from-[#4E3D5C] to-[#772DD8] rounded-xl xl:block hidden">
              <ReviewCard
                name="Marcus Dean"
                role="Investor, UrbanRise Properties"
                text="Top-tier branding that sells. Period."
                stars={5}
                image="/Mason-Preddy.jpg"
                nameColor="text-white"
                textColor="text-lightIndigo"
              />
            </div>
          </div>
        </Container>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-3xl relative p-4">
            <button
              onClick={closeModal}
              className="absolute -top-8 right-3 text-white hover:text-gray100 text-xl font-bold"
            >
              <AiOutlineClose size={24} />
            </button>
            <iframe
              src="https://tidycal.com/brandnasu/strategy-call"
              className="w-full h-[500px] lg:h-[600px] rounded-md border-0"
              allow="camera; microphone; fullscreen; clipboard-read; clipboard-write"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CallToActionSection;

// Reusable ReviewCard component
const ReviewCard = ({
  name,
  role,
  text,
  stars,
  image,
  nameColor,
  textColor,
}: {
  name: string;
  role: string;
  text: string;
  stars: number;
  image: string;
  nameColor?: string;
  textColor?: string;
}) => {
  const fullStars = Math.floor(stars);
  const hasHalfStar = stars % 1 !== 0;

  return (
    <div className="w-full h-full p-5 text-black flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3">
          <div className="w-[50px] h-[50px] border-2 border-lightIndigo rounded-full overflow-hidden flex justify-center items-center">
            <Image
              src={image}
              width={100}
              height={100}
              alt={name}
              className="object-cover w-[45px] h-[45px] rounded-full"
            />
          </div>
          <div>
            <p className={`text-[16px] font-semibold ${nameColor}`}>{name}</p>
            <p className={`text-xs ${textColor}`}>{role}</p>
          </div>
        </div>
        <p className={`text-[16px] mt-3 ${textColor}`}>{text}</p>
      </div>

      <div className="flex justify-between items-center pt-3">
        <div className="flex items-center gap-1 text-yellow-400">
          {Array.from({ length: fullStars }).map((_, i) => (
            <IoIosStar key={i} className="text-lg" />
          ))}
          {hasHalfStar && <IoIosStarHalf className="text-lg" />}
        </div>
        <Image
          src={clutch}
          width={24}
          height={24}
          alt="Clutch icon"
          className="rounded-xl"
        />
      </div>
    </div>
  );
};
