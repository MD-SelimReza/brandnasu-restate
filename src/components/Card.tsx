'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import D1 from '../../public/guideline.png';
import D2 from '../../public/landing.png';
import D3 from '../../public/logo.png';
import W1 from '../../public/pitchdeck.png';
import W2 from '../../public/printing.png';
import W3 from '../../public/signage.png';
import S1 from '../../public/social.png';
import S2 from '../../public/uiux.png';
import S3 from '../../public/video.png';
import S4 from '../../public/web.png';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

const Banner = [
  { id: 1, img: D1, link: '#' },
  { id: 2, img: D2, link: '#' },
  { id: 3, img: D3, link: '#' },
  { id: 4, img: W1, link: '#' },
  { id: 5, img: W2, link: '#' },
  { id: 6, img: W3, link: '#' },
  { id: 7, img: S1, link: '#' },
  { id: 8, img: S2, link: '#' },
  { id: 9, img: S3, link: '#' },
  { id: 10, img: S4, link: '#' },
];

const CardSlider = () => {
  return (
    <div className="relative mt-10">
      <div className="relative w-full max-w-[1920px] mx-auto xl:px-0 lg:px-6 md:px-2">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          grabCursor={true}
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
          className="cursor-grab active:cursor-grabbing"
        >
          {Banner.map((card) => (
            <SwiperSlide key={card.id}>
              <div>
                <Image src={card.img} alt="Card img" className="mx-auto" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="hidden md:block">
          <div className="absolute top-1/2 transform -translate-y-1/2 z-10 w-40 h-full group left-0">
            <button
              aria-label="Previous slide"
              className="opacity-0 group-hover:opacity-100 transition duration-500 prev-btn absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-[#190C2ACC] text-lightIndigo p-3 rounded-full"
            >
              <FaChevronLeft size={30} />
            </button>
          </div>
          <div className="absolute top-1/2 transform -translate-y-1/2 z-10 w-40 h-full group right-0">
            <button
              aria-label="Next slide"
              className="opacity-0 group-hover:opacity-100 transition duration-500 next-btn absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-[#190C2ACC] text-lightIndigo p-3 rounded-full"
            >
              <FaChevronRight size={30} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
