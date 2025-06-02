import React from 'react';
import Link from 'next/link';
import FadeInSection from '@/components/ui/FadeInSection';
import { privacyPolicyEffectiveDate, privacyPolicySections } from '@/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | BrandNasu',
  description:
    'Read our privacy policy to understand how we collect, use, and protect your personal information.',
  keywords: [
    'privacy policy',
    'data protection',
    'user privacy',
    'personal information',
    'data collection',
    'data usage',
    'cookies policy',
    'user rights',
  ],
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
};

const PrivacyPage = () => {
  return (
    <main className="lg:py-32 md:py-24 py-16 max-w-[1440px] mx-auto lg:px-10 px-5 min-h-[calc(100vh-80px)]">
      <FadeInSection>
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800">
          Privacy Policy
        </h1>
      </FadeInSection>

      <FadeInSection>
        <div className="flex items-center text-gray-500 mt-2 md:text-lg">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <span className="mx-2">&gt;</span>
          <span>Privacy Policy</span>
        </div>
      </FadeInSection>

      <FadeInSection>
        <hr className="mt-5 lg:mb-16 mb-12 border border-gray-300" />
      </FadeInSection>

      <FadeInSection>
        <p className="text-gray-700 mb-6 md:text-lg">
          Last Update: {privacyPolicyEffectiveDate}
        </p>
      </FadeInSection>

      {privacyPolicySections.map((section, idx) => (
        <FadeInSection key={idx}>
          <section className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
              {section.heading}
            </h2>

            {section.subSections?.map((sub, i) => (
              <div key={i} className="mb-4">
                {sub.subHeading && (
                  <h3 className="text-xl font-semibold text-gray-700 mb-1">
                    {sub.subHeading}
                  </h3>
                )}
                {sub.paragraphs?.map((p, j) => (
                  <p
                    key={j}
                    className="text-gray-700 mb-3 text-justify md:text-lg"
                  >
                    {p}
                  </p>
                ))}
                {sub.listItems && (
                  <ul className="list-disc pl-4 space-y-2 text-gray-700 text-base">
                    {sub.listItems.map((item, k) => (
                      <li key={k}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {section.paragraphs?.map((p, i) => (
              <p key={i} className="text-gray-700 mb-3 text-justify md:text-lg">
                {p}
              </p>
            ))}

            {section.listItems && (
              <ul className="list-disc pl-4 space-y-2 text-gray-700 text-base mb-4">
                {section.listItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}

            {section.closing && (
              <p className="text-gray-700 text-justify md:text-lg">
                {section.closing}
              </p>
            )}
          </section>
        </FadeInSection>
      ))}
    </main>
  );
};

export default PrivacyPage;
