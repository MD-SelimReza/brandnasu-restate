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
    <div className="relative lg:pt-32 pt-16">
      <div className="w-full mx-auto text-center px-3">
        <HeadingBlock
          title="Real Stories. Real Success. Hear from Our Clients!"
          description="See how real estate professionals like you transformed their branding, marketing, and online presence with our expert solutions."
          titleColor="text-darkIndigo"
          titleWidth="max-w-4xl mx-auto"
          descriptionColor="text-darkGray"
          descriptionWidth="max-w-6xl w-full"
        />
      </div>
      <div className="lg:mt-16 md:mt-10 mt-6 bg-[linear-gradient(to_bottom,_#F4F3FF_25%,_#2E1C6A_25%)] lg:pb-32 pb-16 px-5">
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
                <div
                  className="flex items-center justify-center aspect-[9/16]"
                  data-aos="zoom-in"
                  data-aos-easing="ease"
                  data-aos-duration="500"
                >
                  <iframe
                    width="100%"
                    height="100%"
                    loading="lazy"
                    className="w-full h-full rounded-xl"
                    src={`https://www.youtube-nocookie.com/embed/${id}`}
                    title={`YouTube video ${index + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button
            aria-label="Previous slide"
            className="prev-btn z-40 absolute -left-5 md:-left-5 lg:-left-6 top-1/2 transform -translate-y-1/2 bg-indigo/80 text-white md:p-4 p-3 rounded-full"
          >
            <FaChevronLeft size={30} />
          </button>
          <button
            aria-label="Next slide"
            className="next-btn z-40 absolute -right-5 md:-right-5 lg:-right-6 top-1/2 transform -translate-y-1/2 bg-indigo/80 text-white md:p-4 p-3 rounded-full"
          >
            <FaChevronRight size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
