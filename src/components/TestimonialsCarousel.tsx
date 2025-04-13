'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaPlay, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Container from './Container';
import Image from 'next/image';
import { useState } from 'react';

const TestimonialsCarousel = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  return (
    <div className='relative'>
      <Container>
        <div className="text-center w-full h-fit relative mb-16 xl:mb-44 px-2 md:px-0">
          <div className="w-full max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-darkIndigo lg:max-w-4xl mx-auto md:px-10 lg:px-0 text-center">
              Real Stories. Real Success. Hear from Our Clients!
            </h2>
            <p className="xl:mt-6 md:mt-5 mt-4 text-sm md:text-xl text-default md:px-16 lg:px-20 text-center">
              See how real estate professionals like you transformed their branding, marketing, and online presence with our expert solutions.
            </p>
          </div>
          <div className="relative lg:mt-16 md:mt-10 mt-6 ">
            <Swiper
              modules={[Navigation]}
              spaceBetween={40}
              slidesPerView={1}
              loop={true}
              navigation={{
                prevEl: '.prev-btn',
                nextEl: '.next-btn',
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {[1, 2, 3, 4, 5].map((_, index) => (
                <SwiperSlide key={index} onClick={() => setPlayingIndex(index)}>
                  <div className="flex items-center justify-center h-[450px] lg:h-[500px] xl:h-[702px]">
                  {playingIndex === index ? (
                      <video className="w-full h-full object-cover aspect-video rounded-[20px]" controls autoPlay>
                        {/* <source src="/video.mp4" type="video/mp4" /> */}
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <div className="relative w-full h-full cursor-pointer">
                        <Image
                          src="/thumbnail1.jpg"
                          alt="Video Thumbnail"
                          width={100}
                          height={100}
                          className="w-full h-full object-cover rounded-[20px]"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-black/60 rounded-full p-5 flex items-center justify-center">
                            <FaPlay className="text-white text-2xl md:text-3xl" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            <button className="prev-btn z-40 absolute -left-7 md:-left-8 top-1/2 transform -translate-y-1/2 bg-darkIndigo text-white lg:p-5 md:p-4 p-3 rounded-full ">
              <FaChevronLeft size={30} />
            </button>
            <button className="next-btn z-40 absolute -right-7 md:-right-8 top-1/2 transform -translate-y-1/2 bg-darkIndigo text-white lg:p-5 md:p-4 p-3 rounded-full ">
              <FaChevronRight size={30} />
            </button>
          </div>
        </div>
      </Container>
      <div className='absolute bg-indigo w-full h-[400px] lg:h-[450px] xl:h-[620px] -bottom-14'></div>
    </div>
  );
};

export default TestimonialsCarousel;

// 'use client';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import { Navigation } from 'swiper/modules';
// import { FaPlay, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// import Container from './Container';
// import Image from 'next/image';
// import { useState } from 'react';

// const videoSources = [
//   "/video.mp4",
//   "/video.mp4",
//   "/video.mp4",
//   "/video.mp4",
//   "/video.mp4",
// ];

// const TestimonialsCarousel = () => {
//   const [playingIndex, setPlayingIndex] = useState<number | null>(null);

//   return (
//     <div className='relative'>
//       <Container>
//         <div className='px-6'>
//           <div className="text-center w-full h-fit relative mb-16 xl:mb-44">
//             <h2 className="text-3xl lg:text-5xl font-bold max-w-2xl mx-auto text-darkIndigo">
//               Hear From Business Owners Just Like You
//             </h2>
//             <p className="xl:mt-10 md:mt-6 mt-4 md:px-16 text-xl text-default mb-10">
//               We’ll take your vision and bring it to life while staying consistent with your branding
//               and keeping your goals & objectives in mind.
//             </p>

//             <div className="relative">
//               <Swiper
//                 modules={[Navigation]}
//                 spaceBetween={40}
//                 slidesPerView={1}
//                 loop={true}
//                 navigation={{
//                   prevEl: '.prev-btn',
//                   nextEl: '.next-btn',
//                 }}
//                 breakpoints={{
//                   640: { slidesPerView: 1 },
//                   768: { slidesPerView: 2 },
//                   1024: { slidesPerView: 3 },
//                 }}
//               >
//                 {videoSources.map((videoSrc, index) => (
//                   <SwiperSlide key={index} onClick={() => setPlayingIndex(index)}>
//                     <div className="bg-gradient-to-b from-indigo to-darkIndigo p- rounded-2xl aspect-video flex items-center justify-center h-[450px] lg:h-[500px] xl:h-[702px]">
//                       {playingIndex === index ? (
//                         <video className="w-full h-full object-cover rounded-[20px]" controls autoPlay>
//                           <source src={videoSrc} type="video/mp4" />
//                           Your browser does not support the video tag.
//                         </video>
//                       ) : (
//                         <div className="relative w-full h-full cursor-pointer">
//                           <Image
//                             src="/thumbnail.jpg"
//                             alt="Video Thumbnail"
//                             width={100}
//                             height={100}
//                             className="w-full h-full object-cover rounded-lg"
//                           />
//                           <div className="absolute inset-0 flex items-center justify-center">
//                             <div className="bg-black/60 rounded-full p-6 md:p-8 flex items-center justify-center">
//                               <FaPlay className="text-white text-2xl md:text-3xl" />
//                             </div>
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>

//               {/* Navigation Buttons */}
//               <button className="prev-btn z-40 absolute -left-8 top-1/2 transform -translate-y-1/2 bg-darkIndigo text-white lg:p-5 md:p-4 p-3 rounded-full ">
//                 <FaChevronLeft size={40} />
//               </button>
//               <button className="next-btn z-40 absolute -right-8 top-1/2 transform -translate-y-1/2 bg-darkIndigo text-white lg:p-5 md:p-4 p-3 rounded-full ">
//                 <FaChevronRight size={40} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </Container>
//       <div className='absolute bg-indigo w-full h-[400px] lg:h-[450px] xl:h-[620px] -bottom-14'></div>
//     </div>
//   );
// };

// export default TestimonialsCarousel;
