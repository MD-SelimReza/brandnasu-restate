'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import user1 from '../../public/team3.jpg';
import { FaQuoteRight } from 'react-icons/fa6';

const testimonials = [
  {
    name: 'Saif Sarwar',
    role: 'UI Designer',
    image: user1,
    text: `Starting as an intern and getting promoted to Junior UI Designer at Design Monks was incredible. The mentors here are genuinely supportive and guide you through every challenge. I never felt like a beginner, and that boosted my confidence. Design Monks is a place where creativity thrives, and I’m proud to be part of it.`,
  },
  {
    name: 'Saif Sarwar',
    role: 'UI Designer',
    image: user1,
    text: `Starting as an intern and getting promoted to Junior UI Designer at Design Monks was incredible. The mentors here are genuinely supportive and guide you through every challenge. I never felt like a beginner, and that boosted my confidence. Design Monks is a place where creativity thrives, and I’m proud to be part of it.`,
  },
  {
    name: 'Saif Sarwar',
    role: 'UI Designer',
    image: user1,
    text: `Starting as an intern and getting promoted to Junior UI Designer at Design Monks was incredible. The mentors here are genuinely supportive and guide you through every challenge. I never felt like a beginner, and that boosted my confidence. Design Monks is a place where creativity thrives, and I’m proud to be part of it.`,
  },
  {
    name: 'Saif Sarwar',
    role: 'UI Designer',
    image: user1,
    text: `Starting as an intern and getting promoted to Junior UI Designer at Design Monks was incredible. The mentors here are genuinely supportive and guide you through every challenge. I never felt like a beginner, and that boosted my confidence. Design Monks is a place where creativity thrives, and I’m proud to be part of it.`,
  },
];

const TeamTestimonials = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-black">
          Hear From The <span className="italic text-primary">Team</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Design Monks is a vibrant blend of creativity, collaboration, and
          growth, where every voice is valued and innovation thrives.
        </p>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        className="max-w-5xl mx-auto"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col lg:flex-row items-center gap-6 bg-gray100 rounded-2xl shadow-md w-full">
              {/* Left: Image */}
              <div className="w-full max-w-sm">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-2xl rounded-br-none w-full object-cover"
                />
              </div>

              {/* Right: Testimonial Card */}
              <div className="text-left p-8">
                <div className="flex items-start gap-3 mb-4">
                  <div className="bg-[#7B61FF] p-2 rounded-full text-white">
                    <FaQuoteRight className="w-8 h-8" />
                  </div>
                </div>
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  {testimonial.text}
                </p>
                <div>
                  <p className="text-black font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TeamTestimonials;
