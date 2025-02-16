'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaPlay, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TestimonialsCarousel = () => {
  return (
    <div className='h-fit relative mb-44'>
      <div className="text-center w-full max-w-[1440px] mx-auto">
        <h2 className="text-3xl lg:text-5xl font-bold max-w-2xl mx-auto text-darkIndigo">
          Hear From Business Owners Just Like You
        </h2>
        <p className="mt-10 mb-14 text-xl text-default px-8 mx-auto">
          We’ll take your vision and bring it to life while staying consistent with your branding
          and keeping your goals & objectives in mind.
        </p>

        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={40}
            slidesPerView={3}
            loop={true}
            navigation={{
              prevEl: '.prev-btn',
              nextEl: '.next-btn',
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 3 },
            }}
            className="px-8"
          >
            {[1, 2, 3, 4, 5].map((_, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gradient-to-b from-indigo to-darkIndigo p-8 rounded-2xl flex items-center justify-center h-[702px]">
                  <div className='border-2 p-3 rounded-full flex justify-center items-center'>
                    <button className="text-white text-4xl">
                    <FaPlay size={50} className='ml-1' />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button className="prev-btn z-40 absolute -left-8 top-1/2 transform -translate-y-1/2 bg-darkIndigo text-white p-5 rounded-full ">
            <FaChevronLeft size={40} />
          </button>
          <button className="next-btn z-40 absolute -right-8 top-1/2 transform -translate-y-1/2 bg-darkIndigo text-white p-5 rounded-full ">
            <FaChevronRight size={40} />
          </button>
        </div>
      </div>
      <div className='absolute bg-indigo w-full h-[620px] -bottom-14'></div>
    </div>
  );
};

export default TestimonialsCarousel;
