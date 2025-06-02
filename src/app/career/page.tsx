import React from 'react';
import CareerHero from '@/components/CareerHero';
import BenefitsItemSection from '@/components/BenefitItemSection';
import CareersPage from '@/components/CareersPage';
import Gallery from '@/components/Gallery';
import TeamBenefits from '@/components/TeamBenefits';
import FAQSection from '@/components/FAQSection';
import { careerFaq } from '@/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | BrandNasu',
  description:
    'Join the BrandNasu team! Explore our career opportunities and learn about the benefits of working with us. We are looking for talented individuals to help us create exceptional digital experiences.',
  keywords: [
    'careers',
    'job openings',
    'join our team',
    'work with us',
    'BrandNasu careers',
    'digital design jobs',
  ],
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
};

const CareerPage = () => {
  return (
    <div>
      <CareerHero />
      <BenefitsItemSection />
      <CareersPage />
      <Gallery />
      <TeamBenefits />
      <FAQSection
        title="Frequently Asked Questions"
        description="Get answers to some of the most commonly asked questions we receive from businesses just like yours."
        faqs={careerFaq}
      />
    </div>
  );
};

export default CareerPage;
