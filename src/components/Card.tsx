// import Image, { StaticImageData } from "next/image";
// import React from "react";
// import D1 from "../../public/D1.png";
// import D2 from "../../public/D2.png";
// import D3 from "../../public/D3.png";
// import W1 from "../../public/W1.png";
// import W2 from "../../public/W2.png";
// import W3 from "../../public/W3.png";
// import S1 from "../../public/S1.png";
// import S2 from "../../public/S2.png";
// import S3 from "../../public/S3.png";
// import Container from "./Container";

// // Define the structure of the cards object
// type BannerKey = "Banner One" | "Banner Two" | "Banner Three";

// interface CardItem {
//   id: number;
//   img: StaticImageData;
// }

// const cards: Record<BannerKey, CardItem[]> = {
//   "Banner One": [
//     { id: 1, img: D1 },
//     { id: 2, img: D2 },
//     { id: 3, img: D3 },
//   ],
//   "Banner Two": [
//     { id: 1, img: W1 },
//     { id: 2, img: W2 },
//     { id: 3, img: W3 },
//   ],
//   "Banner Three": [
//     { id: 1, img: S1 },
//     { id: 2, img: S2 },
//     { id: 3, img: S3 },
//   ],
// };

// interface CardProps {
//   banner: BannerKey;
// }

// const Card: React.FC<CardProps> = ({ banner }) => {
//   return (
//     <Container>
//       <div className="flex items-center justify-center xl:gap-x-10 md:gap-x-8 gap-x-4 w-full">
//         {cards[banner].map((card) => (
//           <div key={card.id} className="w-full">
//             <Image src={card.img} alt="Card img" loading="lazy" />
//           </div>
//         ))}
//       </div>
//     </Container>
//   );
// };

// export default Card;

'use client';

// import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import D1 from '../../public/D1.png';
import D2 from '../../public/D2.png';
import D3 from '../../public/D3.png';
import W1 from "../../public/W1.png";
import W2 from "../../public/W2.png";
import W3 from "../../public/W3.png";
import S1 from "../../public/S1.png";
import S2 from "../../public/S2.png";
import S3 from "../../public/S3.png";

const Banner = [
  { id: 1, img: D1 },
  { id: 2, img: D2 },
  { id: 3, img: D3 },
  { id: 4, img: W1 },
  { id: 5, img: W2 },
  { id: 6, img: W3 },
  { id: 7, img: S1 },
  { id: 8, img: S2 },
  { id: 9, img: S3 },
];

const CardSlider = () => {
  // const swiperRef = useRef<any>(null); // Store Swiper instance persistently

  return (
    <div className="relative mt-10">
      <div className="relative w-full max-w-7xl mx-auto">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          // autoplay={{
          //   delay: 3000,
          //   disableOnInteraction: false,
          // }}
          navigation={{
            prevEl: '.prev-btn',
            nextEl: '.next-btn',
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          // onSwiper={(swiper) => (swiperRef.current = swiper)} // Save Swiper instance
        >
          {Banner.map((card) => (
            <SwiperSlide
              key={card.id}
              // onMouseEnter={() => swiperRef.current?.autoplay.stop()} // Stop autoplay on hover
              // onMouseLeave={() => swiperRef.current?.autoplay.start()} // Resume autoplay on mouse leave
            >
              <Image
                src={card.img}
                alt="Card img"
                loading="lazy"
                className="rounded-lg shadow-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button className="prev-btn absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-3 rounded-full">
          ❮
        </button>
        <button className="next-btn absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-3 rounded-full">
          ❯
        </button>
      </div>
    </div>
  );
};

export default CardSlider;


// export const ExampleCard = () => {
//   return (
//     <div className="p-6 bg-darkIndigo text-lightIndigo rounded-2xl shadow-soft animate-fadeIn w-80">
//       <h2 className="text-2xl font-bold text-primary">Tailwind Magic ✨</h2>
//       <p className="text-secondary mt-2 font-sans">
//         This card demonstrates all custom Tailwind properties.
//       </p>
//       <button className="mt-4 bg-primary text-white px-4 py-2 rounded-xl shadow-strong hover:bg-secondary transition-all animate-bounceSlow">
//         Click Me 🚀
//       </button>
//     </div>
//   );
// };
