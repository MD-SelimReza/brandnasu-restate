import React from 'react';
import Link from 'next/link';
import FadeInSection from '@/components/ui/FadeInSection';
import { termsLastUpdated, termsSections } from '@/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions | BrandNasu',
  description:
    'Read the terms and conditions for using BrandNasu services, including user responsibilities, intellectual property rights, and limitations of liability.',
  keywords: [
    'terms and conditions',
    'terms of service',
    'user agreement',
    'user responsibilities',
    'intellectual property',
    'liability limitations',
  ],
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
};

const TermsPage = () => {
  return (
    <main className="lg:py-32 md:py-24 py-16 max-w-[1440px] mx-auto lg:px-10 px-5 min-h-[calc(100vh-80px)]">
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
