'use client';

import React from 'react';
import Link from 'next/link';
import FadeInSection from '@/components/ui/FadeInSection';
import { termsLastUpdated, termsSections } from '@/data';

const TermsPage = () => {
  return (
    <main className="lg:py-16 py-12 max-w-[1440px] mx-auto lg:px-10 px-5 min-h-[calc(100vh-80px)]">
      <FadeInSection>
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800">
          Terms and Conditions
        </h1>
      </FadeInSection>

      <FadeInSection>
        <div className="flex items-center text-gray-500 mt-2 md:text-lg">
          <Link
            href="/"
            className="flex items-center hover:text-blue-600 transition-colors"
          >
            Home
          </Link>
          <span className="mx-2">&gt;</span>
          <span>Terms and Conditions</span>
        </div>
      </FadeInSection>

      <FadeInSection>
        <hr className="mt-5 lg:mb-16 mb-12 border border-gray-300" />
      </FadeInSection>

      <FadeInSection>
        <p className="text-gray-700 mb-6 md:text-lg">
          Last Update: {termsLastUpdated}
        </p>
      </FadeInSection>

      {termsSections.map((section, idx) => (
        <FadeInSection key={idx}>
          <section className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
              {section.heading}
            </h2>
            {section.paragraphs?.map((p, i) => (
              <p key={i} className="text-gray-700 mb-4 text-justify md:text-lg">
                {p}
              </p>
            ))}
            {section.listItems && (
              <ul className="list-disc pl-4 space-y-3 text-base text-gray-700 mb-4">
                {section.listItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
            {section.closing && (
              <p className="text-gray-700 mb-4 text-justify md:text-lg">
                {section.closing}
              </p>
            )}
          </section>
        </FadeInSection>
      ))}
    </main>
  );
};

export default TermsPage;
