'use client';

import React, { useEffect, useState } from 'react';
import Button from './ui/Button';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  sit: string;
  type: string;
  deadline: string;
  description: string;
  responsibilities: string[];
  minimumQualifications: string[];
  preferredQualifications: string[];
  benefits: string[];
}

const JobDetails: React.FC<Props> = ({
  title,
  sit,
  type,
  deadline,
  description,
  responsibilities,
  minimumQualifications,
  preferredQualifications,
  benefits,
}) => {
  const [animateOnce, setAnimateOnce] = useState(false);

  useEffect(() => {
    setAnimateOnce(true);
  }, []);

  return (
    <div className="bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:py-32 md:py-24 py-16 min-h-screen">
        {/* Header */}
        <div className="relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: '50%' }}
            animate={animateOnce ? { opacity: 1, y: '0%' } : {}}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="flex flex-col md:flex-row justify-between"
          >
            <div className="space-y-3">
              <h1 className="xl:text-5xl xl:!leading-[57px] md:text-4xl text-3xl font-bold text-darkIndigo">
                {title}
              </h1>
              <p className="text-gray-600">
                {sit} • {type}
              </p>
            </div>
            <div className="flex items-center justify-between md:justify-normal gap-4">
              <p className="text-darkGray">Deadline in {deadline}</p>
              <div className="text-right space-y-3">
                <Button
                  label="Apply Now"
                  bgColor="bg-indigo hover:bg-darkIndigo"
                  textColor="text-white"
                  href="/apply"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <hr
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-duration="400"
          className="my-6 border-gray-200"
        />

        {/* Description */}
        <section>
          <h2
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="400"
            className="text-2xl font-semibold text-darkIndigo mb-2"
          >
            Description
          </h2>
          <p
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="400"
            className="text-darkGray whitespace-pre-line text-justify"
          >
            {description}
          </p>
          <p
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="400"
            className="text-darkGray whitespace-pre-line text-justify mt-3"
          >
            At Musemind, we are looking for a dedicated designer who is capable
            of leading a team and translating requirements into real design. We
            are looking for someone who can propose a new design pattern not to
            replicate any design. If you are confident in solving design
            problems aesthetically, you are welcome to join us.
          </p>
        </section>

        {/* Core Responsibilities */}
        <section className="mt-8">
          <h3
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="400"
            className="text-2xl font-semibold text-darkIndigo mb-3"
          >
            Core Responsibilities
          </h3>
          <ul className="space-y-2">
            {responsibilities.map((item, idx) => (
              <li
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-duration="400"
                key={idx}
                className="flex items-start gap-2 text-darkGray"
              >
                •<span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Minimum Qualifications */}
        <section className="mt-8">
          <h3
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="400"
            className="text-2xl font-semibold text-darkIndigo mb-3"
          >
            Core Requirements:
          </h3>
          <ul className="space-y-2">
            {minimumQualifications.map((item, idx) => (
              <li
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-duration="400"
                key={idx}
                className="flex items-start gap-2 text-darkGray"
              >
                •<span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Preferred Qualifications */}
        <section className="mt-8">
          <h3
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="400"
            className="text-2xl font-semibold text-darkIndigo mb-3"
          >
            Qualifications & Skills:
          </h3>
          <ul className="space-y-2">
            {preferredQualifications.map((item, idx) => (
              <li
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-duration="400"
                key={idx}
                className="flex items-start gap-2 text-gray-700"
              >
                •<span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Company Benefits */}
        <section className="mt-8">
          <h3
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="400"
            className="text-2xl font-semibold text-darkIndigo mb-3"
          >
            Benefit:
          </h3>
          <ul className="space-y-2">
            {benefits.map((item, idx) => (
              <li
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-duration="400"
                key={idx}
                className="flex items-start gap-2 text-gray-700"
              >
                •<span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default JobDetails;
