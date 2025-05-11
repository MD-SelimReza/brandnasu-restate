'use client';

import React from 'react';
import Button from './ui/Button';

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
  return (
    <div className="bg-white">
      <div className="max-w-[1440px] mx-auto px-6 py-32 min-h-screen">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold text-darkIndigo">{title}</h1>
            <p className="text-gray-600">
              {sit} • {type}
            </p>
          </div>
          <div className="flex items-center gap-4">
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
        </div>

        <hr className="my-6 border-gray-200" />

        {/* Description */}
        <section>
          <h2 className="text-2xl font-semibold text-darkIndigo mb-2">
            Description
          </h2>
          <p className="text-darkGray whitespace-pre-line text-justify">
            {description}
          </p>
          <p className="text-darkGray whitespace-pre-line text-justify mt-3">
            At Musemind, we are looking for a dedicated designer who is capable
            of leading a team and translating requirements into real design. We
            are looking for someone who can propose a new design pattern not to
            replicate any design. If you are confident in solving design
            problems aesthetically, you are welcome to join us.
          </p>
        </section>

        {/* Core Responsibilities */}
        <section className="mt-8">
          <h3 className="text-2xl font-semibold text-darkIndigo mb-3">
            Core Responsibilities
          </h3>
          <ul className="space-y-2">
            {responsibilities.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-darkGray">
                •<span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Minimum Qualifications */}
        <section className="mt-8">
          <h3 className="text-2xl font-semibold text-darkIndigo mb-3">
            Core Requirements:
          </h3>
          <ul className="space-y-2">
            {minimumQualifications.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-darkGray">
                •<span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Preferred Qualifications */}
        <section className="mt-8">
          <h3 className="text-2xl font-semibold text-darkIndigo mb-3">
            Qualifications & Skills:
          </h3>
          <ul className="space-y-2">
            {preferredQualifications.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-700">
                •<span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Company Benefits */}
        <section className="mt-8">
          <h3 className="text-2xl font-semibold text-darkIndigo mb-3">
            Benefit:
          </h3>
          <ul className="space-y-2">
            {benefits.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-700">
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
