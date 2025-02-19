'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaPlay, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Container from './Container';

const TestimonialsCarousel = () => {
  return (
    <div className='relative'>
      <Container>
        <div className='px-6'>
          <div className="text-center w-full h-fit relative mb-16 xl:mb-44">
            <h2 className="text-3xl lg:text-5xl font-bold max-w-2xl mx-auto text-darkIndigo">
              Hear From Business Owners Just Like You
            </h2>
            <p className="xl:mt-10 md:mt-6 mt-4 md:px-16 text-xl text-default mb-10">
              We’ll take your vision and bring it to life while staying consistent with your branding
              and keeping your goals & objectives in mind.
            </p>

            <div className="relative">
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
                  <SwiperSlide key={index}>
                    <div className="bg-gradient-to-b from-indigo to-darkIndigo p-8 rounded-2xl aspect-vide flex items-center justify-center h-[450px] lg:h-[500px] xl:h-[702px]">
                      <div className='border-2p-3 rounded-full flex justify-center items-center'>
                        <button className="text-white text-4xl">
                        <FaPlay size={50} className='ml-1' />
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation Buttons */}
              <button className="prev-btn z-40 absolute -left-8 top-1/2 transform -translate-y-1/2 bg-darkIndigo text-white lg:p-5 md:p-4 p-3 rounded-full ">
                <FaChevronLeft size={40} />
              </button>
              <button className="next-btn z-40 absolute -right-8 top-1/2 transform -translate-y-1/2 bg-darkIndigo text-white lg:p-5 md:p-4 p-3 rounded-full ">
                <FaChevronRight size={40} />
              </button>
            </div>
          </div>
        </div>
      </Container>
      <div className='absolute bg-indigo w-full h-[400px] lg:h-[450px] xl:h-[620px] -bottom-14'></div>
    </div>
  );
};

export default TestimonialsCarousel;
