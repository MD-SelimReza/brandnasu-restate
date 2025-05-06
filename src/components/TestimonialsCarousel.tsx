// 'use client';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import { Navigation } from 'swiper/modules';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// import Container from './Container';
// import HeadingBlock from './ui/HeadingBlock';

// const videoIds = [
//   'dmT6Y53ex1A',
//   'fmo0CERQusI',
//   '-PjKU-69h5I',
//   '0PCYjP3I2zM',
//   'J5rzKhq5HdQ',
// ];

// const TestimonialsCarousel = () => {
//   return (
//     <div className="relative bg-[linear-gradient(to_bottom,_#F4F3FF_45%,_#2E1C6A_45%)] py-8 lg:py-12">
//       <Container>
//         <div className="text-center w-full h-fit relative px-2 md:px-0">
//           <div className="w-full mx-auto text-center">
//             <HeadingBlock
//               title="Real Stories. Real Success. Hear from Our Clients!"
//               description="See how real estate professionals like you transformed their branding, marketing, and online presence with our expert solutions."
//               titleColor="text-darkIndigo"
//               titleWidth="max-w-4xl"
//               descriptionColor="text-darkGray"
//               descriptionWidth="max-w-6xl w-full"
//             />
//           </div>
//           <div className="relative lg:mt-16 md:mt-10 mt-6">
//             <Swiper
//               modules={[Navigation]}
//               spaceBetween={40}
//               slidesPerView={1}
//               loop={true}
//               navigation={{
//                 prevEl: '.prev-btn',
//                 nextEl: '.next-btn',
//               }}
//               breakpoints={{
//                 640: { slidesPerView: 1 },
//                 768: { slidesPerView: 2 },
//                 1024: { slidesPerView: 3 },
//               }}
//             >
// {videoIds.map((id, index) => (
//   <SwiperSlide key={index}>
//     <div className="flex items-center justify-center aspect-[9/16]">
//       <iframe
//         width="100%"
//         height="100%"
//         className="w-full h-full rounded-xl"
//         src={`https://www.youtube.com/embed/${id}`}
//         title={`YouTube video ${index + 1}`}
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowFullScreen
//       ></iframe>
//     </div>
//   </SwiperSlide>
// ))}
//             </Swiper>

//             {/* Navigation Buttons */}
//             <button className="prev-btn z-40 absolute -left-7 md:-left-8 top-1/2 transform -translate-y-1/2 bg-indigo/80 text-white md:p-4 p-3 rounded-full ">
//               <FaChevronLeft size={30} />
//             </button>
//             <button className="next-btn z-40 absolute -right-7 md:-right-8 top-1/2 transform -translate-y-1/2 bg-indigo/80 text-white md:p-4 p-3 rounded-full ">
//               <FaChevronRight size={30} />
//             </button>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default TestimonialsCarousel;

'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import HeadingBlock from './ui/HeadingBlock';

const videoIds = [
  'dmT6Y53ex1A',
  'fmo0CERQusI',
  '-PjKU-69h5I',
  '0PCYjP3I2zM',
  'J5rzKhq5HdQ',
];

const TestimonialsCarousel = () => {
  return (
    <div className="relative lg:pt-32">
      <div className="w-full mx-auto text-center">
        <HeadingBlock
          title="Real Stories. Real Success. Hear from Our Clients!"
          description="See how real estate professionals like you transformed their branding, marketing, and online presence with our expert solutions."
          titleColor="text-darkIndigo"
          titleWidth="max-w-4xl mx-auto"
          descriptionColor="text-darkGray"
          descriptionWidth="max-w-6xl w-full"
        />
      </div>
      <div className="lg:mt-16 md:mt-10 mt-6 bg-[linear-gradient(to_bottom,_#F4F3FF_25%,_#2E1C6A_25%)] pb-32">
        <div className="relative max-w-[1400px] mx-auto">
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
            {videoIds.map((id, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center aspect-[9/16]">
                  <iframe
                    width="100%"
                    height="100%"
                    className="w-full h-full rounded-xl"
                    src={`https://www.youtube.com/embed/${id}`}
                    title={`YouTube video ${index + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button className="prev-btn z-40 absolute -left-7 md:-left-8 top-1/2 transform -translate-y-1/2 bg-indigo/80 text-white md:p-4 p-3 rounded-full">
            <FaChevronLeft size={30} />
          </button>
          <button className="next-btn z-40 absolute -right-7 md:-right-8 top-1/2 transform -translate-y-1/2 bg-indigo/80 text-white md:p-4 p-3 rounded-full">
            <FaChevronRight size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;

// 'use client';

// import { useEffect, useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import { Navigation } from 'swiper/modules';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// import Container from './Container';
// import HeadingBlock from './ui/HeadingBlock';

// const videoIds = [
//   'dmT6Y53ex1A',
//   'fmo0CERQusI',
//   '-PjKU-69h5I',
//   '0PCYjP3I2zM',
//   'J5rzKhq5HdQ',
// ];

// // Extend Window interface to include YouTube API types
// declare global {
//   interface Window {
//     YT: {
//       Player: new (id: string, options: object) => YTPlayer;
//       PlayerState: {
//         PLAYING: number;
//       };
//     };
//     onYouTubeIframeAPIReady?: () => void;
//   }
// }

// interface YTPlayer {
//   pauseVideo: () => void;
// }

// const TestimonialsCarousel = () => {
//   const playerRefs = useRef<(YTPlayer | null)[]>([]);

//   useEffect(() => {
//     // Load YouTube Iframe API
//     const tag = document.createElement('script');
//     tag.src = 'https://www.youtube.com/iframe_api';
//     document.body.appendChild(tag);

//     // Global function required by the API
//     window.onYouTubeIframeAPIReady = () => {
//       playerRefs.current = playerRefs.current.map((iframe, index) => {
//         return new window.YT.Player(`yt-player-${index}`, {
//           events: {
//             onStateChange: (event: { data: number }) => {
//               if (event.data === window.YT.PlayerState.PLAYING) {
//                 playerRefs.current.forEach((player, i) => {
//                   if (i !== index && player?.pauseVideo) {
//                     player.pauseVideo();
//                   }
//                 });
//               }
//             },
//           },
//         });
//       });
//     };

//     return () => {
//       // Cleanup
//       if (window.onYouTubeIframeAPIReady) {
//         delete window.onYouTubeIframeAPIReady;
//       }
//     };
//   }, []);

//   return (
//     <div className="relative bg-[linear-gradient(to_bottom,_#F4F3FF_45%,_#2E1C6A_45%)] py-8 lg:py-12">
//       <Container>
//         <div className="text-center w-full h-fit relative px-2 md:px-0">
//           <div className="w-full mx-auto text-center">
//             <HeadingBlock
//               title="Real Stories. Real Success. Hear from Our Clients!"
//               description="See how real estate professionals like you transformed their branding, marketing, and online presence with our expert solutions."
//               titleColor="text-darkIndigo"
//               titleWidth="max-w-4xl"
//               descriptionColor="text-darkGray"
//               descriptionWidth="max-w-6xl w-full"
//             />
//           </div>
//           <div className="relative lg:mt-16 md:mt-10 mt-6">
//             <Swiper
//               modules={[Navigation]}
//               spaceBetween={40}
//               slidesPerView={1}
//               loop={true}
//               navigation={{
//                 prevEl: '.prev-btn',
//                 nextEl: '.next-btn',
//               }}
//               breakpoints={{
//                 640: { slidesPerView: 1 },
//                 768: { slidesPerView: 2 },
//                 1024: { slidesPerView: 3 },
//               }}
//             >
//               {videoIds.map((id, index) => (
//                 <SwiperSlide key={index}>
//                   <div className="flex items-center justify-center aspect-[9/16] w-full">
//                     <div className="w-full h-full rounded-xl overflow-hidden">
//                       <div className="w-full h-full">
//                         <iframe
//                           id={`yt-player-${index}`}
//                           ref={(el) => {
//                             playerRefs.current[index] =
//                               el as unknown as YTPlayer;
//                           }}
//                           width="100%"
//                           height="100%"
//                           className="w-full h-full"
//                           src={`https://www.youtube.com/embed/${id}?enablejsapi=1`}
//                           title={`YouTube video ${index + 1}`}
//                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                           allowFullScreen
//                         ></iframe>
//                       </div>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>

//             {/* Navigation Buttons */}
//             <button className="prev-btn z-40 absolute -left-7 md:-left-8 top-1/2 transform -translate-y-1/2 bg-indigo/80 text-white md:p-4 p-3 rounded-full">
//               <FaChevronLeft size={30} />
//             </button>
//             <button className="next-btn z-40 absolute -right-7 md:-right-8 top-1/2 transform -translate-y-1/2 bg-indigo/80 text-white md:p-4 p-3 rounded-full">
//               <FaChevronRight size={30} />
//             </button>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default TestimonialsCarousel;

// 'use client';

// import { useEffect, useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import { Navigation } from 'swiper/modules';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// import Container from './Container';
// import HeadingBlock from './ui/HeadingBlock';

// const videoIds = [
//   'dmT6Y53ex1A',
//   'fmo0CERQusI',
//   '-PjKU-69h5I',
//   '0PCYjP3I2zM',
//   'J5rzKhq5HdQ',
// ];

// const TestimonialsCarousel = () => {
//   const playerRefs = useRef([]);

//   useEffect(() => {
//     // Load YouTube Iframe API
//     const tag = document.createElement('script');
//     tag.src = 'https://www.youtube.com/iframe_api';
//     document.body.appendChild(tag);

//     // Global function required by the API
//     window.onYouTubeIframeAPIReady = () => {
//       playerRefs.current = playerRefs.current.map((iframe, index) => {
//         return new window.YT.Player(`yt-player-${index}`, {
//           events: {
//             onStateChange: (event) => {
//               if (event.data === window.YT.PlayerState.PLAYING) {
//                 playerRefs.current.forEach((player, i) => {
//                   if (i !== index && player.pauseVideo) {
//                     player.pauseVideo();
//                   }
//                 });
//               }
//             },
//           },
//         });
//       });
//     };
//   }, []);

//   return (
//     <div className="relative bg-[linear-gradient(to_bottom,_#F4F3FF_45%,_#2E1C6A_45%)] py-8 lg:py-12">
//       <Container>
//         <div className="text-center w-full h-fit relative px-2 md:px-0">
//           <div className="w-full mx-auto text-center">
//             <HeadingBlock
//               title="Real Stories. Real Success. Hear from Our Clients!"
//               description="See how real estate professionals like you transformed their branding, marketing, and online presence with our expert solutions."
//               titleColor="text-darkIndigo"
//               titleWidth="max-w-4xl"
//               descriptionColor="text-darkGray"
//               descriptionWidth="max-w-6xl w-full"
//             />
//           </div>
//           <div className="relative lg:mt-16 md:mt-10 mt-6">
//             <Swiper
//               modules={[Navigation]}
//               spaceBetween={40}
//               slidesPerView={1}
//               loop={true}
//               navigation={{
//                 prevEl: '.prev-btn',
//                 nextEl: '.next-btn',
//               }}
//               breakpoints={{
//                 640: { slidesPerView: 1 },
//                 768: { slidesPerView: 2 },
//                 1024: { slidesPerView: 3 },
//               }}
//             >
//               {videoIds.map((id, index) => (
//                 <SwiperSlide key={index}>
//                   <div className="flex items-center justify-center aspect-[9/16] w-full">
//                     <div className="w-full h-full rounded-xl overflow-hidden">
//                       <div className="w-full h-full">
//                         <iframe
//                           id={`yt-player-${index}`}
//                           ref={(el) => (playerRefs.current[index] = el)}
//                           width="100%"
//                           height="100%"
//                           className="w-full h-full"
//                           src={`https://www.youtube.com/embed/${id}?enablejsapi=1`}
//                           title={`YouTube video ${index + 1}`}
//                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                           allowFullScreen
//                         ></iframe>
//                       </div>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>

//             {/* Navigation Buttons */}
//             <button className="prev-btn z-40 absolute -left-7 md:-left-8 top-1/2 transform -translate-y-1/2 bg-indigo/80 text-white md:p-4 p-3 rounded-full">
//               <FaChevronLeft size={30} />
//             </button>
//             <button className="next-btn z-40 absolute -right-7 md:-right-8 top-1/2 transform -translate-y-1/2 bg-indigo/80 text-white md:p-4 p-3 rounded-full">
//               <FaChevronRight size={30} />
//             </button>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default TestimonialsCarousel;
