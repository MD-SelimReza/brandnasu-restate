// 'use client';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Navigation, Autoplay, Pagination } from 'swiper/modules';
// import Image from 'next/image';
// import D1 from '../../public/D1.png';
// import D2 from '../../public/D2.png';
// import D3 from '../../public/D3.png';
// import W1 from '../../public/W1.png';
// import W2 from '../../public/W2.png';
// import W3 from '../../public/W3.png';
// import S1 from '../../public/S1.png';
// import S2 from '../../public/S2.png';
// import S3 from '../../public/S3.png';

// const Banner = [
//   { id: 1, img: D1 },
//   { id: 2, img: D2 },
//   { id: 3, img: D3 },
//   { id: 4, img: W1 },
//   { id: 5, img: W2 },
//   { id: 6, img: W3 },
//   { id: 7, img: S1 },
//   { id: 8, img: S2 },
//   { id: 9, img: S3 },
// ];

// const CardSlider = () => {
//   // const swiperRef = useRef<any>(null); // Store Swiper instance persistently

//   return (
//     <div className="relative mt-10">
//       <div className="relative w-full max-w-7xl mx-auto xl:px-0 lg:px-6 md:px-2">
//         <Swiper
//           modules={[Navigation, Autoplay, Pagination]}
//           spaceBetween={10}
//           slidesPerView={1}
//           loop={true}
//           // autoplay={{
//           //   delay: 3000,
//           //   disableOnInteraction: false,
//           // }}
//           navigation={{
//             prevEl: '.prev-btn',
//             nextEl: '.next-btn',
//           }}
//           pagination={{ clickable: true }}
//           breakpoints={{
//             640: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//             1280: { slidesPerView: 4 },
//           }}
//           // onSwiper={(swiper) => (swiperRef.current = swiper)} // Save Swiper instance
//         >
//           {Banner.map((card) => (
//             <SwiperSlide
//               key={card.id}
//               // onMouseEnter={() => swiperRef.current?.autoplay.stop()} // Stop autoplay on hover
//               // onMouseLeave={() => swiperRef.current?.autoplay.start()} // Resume autoplay on mouse leave
//             >
//               <Image
//                 src={card.img}
//                 alt="Card img"
//                 loading="lazy"
//                 className="mx-auto"
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Navigation Buttons */}
//         <button className="prev-btn absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-[#190C2A] text-white p-3 rounded-full">
//           ❮
//         </button>
//         <button className="next-btn absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-[#190C2A] text-white p-3 rounded-full">
//           ❯
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CardSlider;

'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import D1 from '../../public/D1.png';
import D2 from '../../public/D2.png';
import D3 from '../../public/D3.png';
import W1 from '../../public/W1.png';
import W2 from '../../public/W2.png';
import W3 from '../../public/W3.png';
import S1 from '../../public/S1.png';
import S2 from '../../public/S2.png';
import S3 from '../../public/S3.png';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

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
      <div className="relative w-full max-w-[1920px] mx-auto xl:px-0 lg:px-6 md:px-2">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: '.prev-btn',
            nextEl: '.next-btn',
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 5 },
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
                className="mx-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button className="prev-btn absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-[#190C2A] text-muteIndigo p-3 rounded-full">
          <AiOutlineLeft className="text-2xl" />
        </button>
        <button className="next-btn absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-[#190C2A] text-muteIndigo p-3 rounded-full">
          <AiOutlineRight className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default CardSlider;
