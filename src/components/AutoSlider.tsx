// "use client";

// import { useState, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import { Swiper as SwiperClass } from "swiper";
// import banner from "../../public/Banner.png";
// import "swiper/css";
// import Card from "./Card";
// import { FaArrowRight } from "react-icons/fa";

// const banners = [
//   {
//     id: "Banner One" as const,
//     heading: "Turn Listings into Sales with Standout Real Estate Designs",
//     subheading:
//       "Join thousands of leading brands getting unlimited, agency-quality designs at breakthrough speed. One flat monthly rate, zero complexity.",
//     image: banner,
//   },
//   {
//     id: "Banner Two" as const,
//     heading:
//       "Custom Real Estate Websites Solution That Convert Visitors into Clients",
//     subheading:
//       "Join top real estate professionals using high performance, beautifully designed websites to showcase listings, attract buyers, and grow their business. Fast, responsive, and built for success —one flat monthly rate, zero hassle",
//     image: banner,
//   },
//   {
//     id: "Banner Three" as const,
//     heading:
//       "Real Estate Social Media Design Solutions That Drive Engagement & Sales",
//     subheading:
//       "Boost your real estate brand with high-quality flyers, Instagram posts, stories, and ad creatives designed to capture attention and convert leads. Our social media marketing solutions provide visually stunning, on-brand design —delivered fast and hassle-free, all at a flat monthly rate.",
//     image: banner,
//   },
// ];

// export default function AutoSlider() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const swiperRef = useRef<SwiperClass | null>(null);

//   // Handle dot click
//   const handleDotClick = (index: number) => {
//     if (swiperRef.current) {
//       swiperRef.current.slideToLoop(index);
//     }
//   };

//   return (
//     <div className="relative w-full min-h-[calc(100vh+80px)]">
//       <Swiper
//         spaceBetween={0}
//         slidesPerView={1}
//         loop={true}
//         autoplay={{
//           delay: 7000,
//           disableOnInteraction: false,
//         }}
//         pagination={{ clickable: true }}
//         modules={[Autoplay, Pagination]}
//         onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//         onSwiper={(swiper) => (swiperRef.current = swiper)}
//       >
//         {banners.map((banner, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative min-h-[calc(100vh+84px)] h-full w-full">
//               <div
//                 className="relative w-full h-[calc(100vh-50px) md:h-[calc(100vh-84px)] h-full bg-center bg-no-repeat bg-cover"
//                 style={{ backgroundImage: `url(${banner.image.src})` }}
//               >
//                 <div className="relative flex flex-col items-center lg:pt-28 md:pt-14 pt-8 w-full px-6 max-w-[1440px] mx-auto h-[calc(100vh-135px)] md:h-[calc(100vh-180px)] lg:h-[calc(100vh-250px)] xl:h-[calc(100vh-430px)]">
//                   <h1 className="text-white xl:text-6xl text-3xl md:text-4xl !leading-[1.2] tracking-wider font-bold max-w-7xl text-center">
//                     {banner.heading}
//                   </h1>
//                   <p className="text-lightIndigo font-light text-lg md:text-xl text-center mt-10">
//                     {banner.subheading}
//                   </p>
//                   <div className="w-full flex-1 xl:mb-0 lg:mb-20 mb-28 flex justify-center items-center">
                    // <button className="relative inline-flex items-center px-11 py-2.5 text-darkIndigo overflow-hidden text-base font-medium rounded-full group bg-lightIndigo">
                    //   <span className="absolute left-0 block w-full h-0 transition-all bg-lightIndigo opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    //   <span className="absolute right-0 flex items-center justify-center w-20 h-14 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    //     <FaArrowRight className="-rotate-45" />
                    //   </span>
                    //   <span className="relative duration-300 transform translate-x-0 font-bold group-hover:-translate-x-4 ease">
                    //     Get Started
                    //   </span>
                    // </button>
//                     {/* <button className="relative flex items-center px-8 py-3 mt-6 text-base font-medium bg-lightIndigo rounded-full group text-darkIndigo">
//                       <span className="absolute inset-0 w-full h-0 transition-all duration-300 bg-lightIndigo opacity-100 group-hover:h-full"></span>
//                       <span className="relative font-bold transition-transform duration-300 transform group-hover:-translate-x-4">Get Started</span>
//                       <FaArrowRight className="absolute right-4 transition-transform duration-300 transform -rotate-45 group-hover:translate-x-0" />
//                     </button> */}
//                   </div>
//                 </div>
//               </div>

//               {/* Conditionally render the Card component */}
//               {banner.id && (
//                 <div className="absolute xl:bottom-20 bottom-28 w-full">
//                   <Card banner={banner.id} />
//                 </div>
//               )}
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Pagination Dots */}
//       <div className="absolute xl:bottom-[500px] lg:bottom-[410px] md:bottom-[350px] bottom-[300px] left-1/2 transform -translate-x-1/2 flex space-x-10 z-40">
//         {banners.map((_, index) => (
//           <div
//             key={index}
//             className={`h-[10px] rounded-full cursor-pointer transition-all duration-300 ${
//               activeIndex === index ? "w-[60px] bg-white" : "w-[10px] bg-white"
//             }`}
//             onClick={() => handleDotClick(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import { FaArrowRight } from "react-icons/fa";
import CardSlider from "./Card";

export default function HeroBanner() {
  return (
    <div className="relative w-full min-h-[calc(100vh-80px)]">
      {/* Left Dark Opacity */}
      <div className="absolute left-0 top-0 h-full w-40 md:w-60 lg:w-80 xl:w-[35%] bg-gradient-to-r from-[#190C2ACC] to-transparent pointer-events-none z-10"></div>

      {/* Right Dark Opacity */}
      <div className="absolute right-0 top-0 h-full w-40 md:w-60 lg:w-80 xl:w-[35%] bg-gradient-to-l from-[#190C2ACC] to-transparent pointer-events-none z-10"></div>

      {/* Static Hero Banner */}
      <div
        className="relative w-full min-h-[calc(100vh-80px)] bg-[#3B0C7C] bg-center bg-cover bg-no-repeat flex flex-col items-center lg:py-16 py-12 px-6"
      >
        <div className="text-center text-white max-w-7xl z-20">
          <h1 className="text-white xl:text-7xl lg:text-6xl text-3xl md:text-5xl !leading-[1.2] md:tracking-wid font-bold md:font-semibold lg:font-black max-w-7xl lg:px-16 text-center mb-6">
            Stand Out, Get Leads & <br /> Sell Faster
          </h1>
          <p className="text-white font-normal text-sm md:text-xl mt-4 max-w-4xl xl:px-0 md:px-10 mx-auto">
            We help real estate professionals attract quality leads and close more deals with expert marketing, branding, and web solutions—so you can focus on selling.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center flex-col md:flex-row gap-5 w-full mt-10 z-20 justify-center">
          <button className="relative inline-flex justify-between md:w-fit w-full items-center px-11 py-2.5 text-darkIndigo overflow-hidden text-base font-medium rounded-full group bg-white">
            <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span></span>
            <span className="absolute right-0 hidden md:flex items-center justify-center w-20 h-14 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <FaArrowRight className="-rotate-45" />
            </span>
            <span className="relative duration-300 text-lg flex justify-center items-center md:transform md:translate-x-0 font-bold md:group-hover:-translate-x-4 ease">
              Book A Demo
            </span>
            <FaArrowRight className="-rotate-45 block md:hidden" />
          </button>
          <button className="relative inline-flex justify-between md:w-fit w-full items-center px-11 py-2.5 text-white overflow-hidden text-base font-medium rounded-full group bg-indigo">
            <span className="absolute left-0 block w-full h-0 transition-all bg-indigo opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span></span>
            <span className="absolute right-0 hidden md:flex items-center justify-center w-20 h-14 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <FaArrowRight className="-rotate-45" />
            </span>
            <span className="relative duration-300 text-lg flex justify-center items-center md:transform md:translate-x-0 font-bold md:group-hover:-translate-x-4 ease">
              Get Started
            </span>
            <FaArrowRight className="-rotate-45 block md:hidden" />
          </button>
        </div>

        {/* CardSlider Positioned at the Center */}
        <div className="w-full mt-4 md:mt-10 z-20">
          <CardSlider />
        </div>
      </div>
    </div>
  );
}



// "use client";

// import { FaArrowRight } from "react-icons/fa";
// import banner from "../../public/Banner.png";
// import CardSlider from "./Card";

// export default function HeroBanner() {
//   return (
//     <div className="relative w-full min-h-[calc(100vh-80px)]">
//       {/* Static Hero Banner */}
//       {/* <div className="absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-transparent to-indigo/80 pointer-events-none" /> */}
//       <div
//         className="relative w-full min-h-[calc(100vh-80px)] bg-center bg-cover bg-no-repeat flex flex-col items-center justify-center px-6 md:py-10"
//         style={{ backgroundImage: `url(${banner.src})` }}
//       >
//         <div className="text-center text-white max-w-7xl px-">
//           <h1 className="text-white xl:text-7xl lg:text-6xl text-2xl md:text-5xl !leading-[1.2] md:tracking-wider font-bold md:font-semibold lg:font-black max-w-7xl lg:px-16 text-center mb-6">
//             Stand Out, Get Leads & <br /> Sell Faster
//           </h1>
//           <p className="text-white font-normal text-base md:text-xl mt-4 max-w-4xl lg:px-10 xl:px-0 md:px- mx-auto">
//             We help realtors and agencies build a standout brand, attract quality leads, and close more deals with expert-designed marketing, branding, and web solutions—so you can focus on selling, not stressing.
//           </p>
//         </div>

//         <div className="flex items-center flex-col md:flex-row gap-5 w-full mt-10">
//           <button className="relative inline-flex justify-center w-full items-center px-11 py-2.5 text-darkIndigo overflow-hidden text-base font-medium rounded-full group bg-lightIndigo">
//             <span className="absolute left-0 block w-full h-0 transition-all bg-lightIndigo opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
//             <span className="absolute right-0 flex items-center justify-center w-20 h-14 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
//               <FaArrowRight className="-rotate-45" />
//             </span>
//             <span className="relative duration-300 text-lg transform translate-x-0 font-bold group-hover:-translate-x-4 ease">
//               Book A Demo
//             </span>
//           </button>
//           <button className="relative inline-flex justify-center w-full items-center px-11 py-2.5 text-white overflow-hidden text-base font-medium rounded-full group bg-darkIndigo">
//             <span className="absolute left-0 block w-full h-0 transition-all bg-darkIndigo opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
//             <span className="absolute right-0 flex items-center justify-center w-20 h-14 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
//               <FaArrowRight className="-rotate-45" />
//             </span>
//             <span className="relative duration-300 text-lg transform translate-x-0 font-bold group-hover:-translate-x-4 ease">
//               Get Started
//             </span>
//           </button>
//         </div>

//         {/* CardSlider Positioned at the Center */}
//         <div className="w-full mt-4 md:mt-10">
//           <CardSlider />
//         </div>
//       {/* <div className="absolute left-0 h-full w-40 bg-gradient-to-r from-transparent to-indigo/80 pointer-events-none" /> */}
//       </div>
//     </div>
//   );
// }
