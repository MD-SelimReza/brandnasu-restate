import React from 'react';
import CareerHero from '@/components/CareerHero';
import BenefitsItemSection from '@/components/BenefitItemSection';
import CareersPage from '@/components/CareersPage';
import Gallery from '@/components/Gallery';
import TeamBenefits from '@/components/TeamBenefits';
// import TeamTestimonials from '@/components/TeamTestimonials';
import FAQSection from '@/components/FAQSection';
import { careerFaq } from '@/data';

const CareerPage = () => {
  return (
    <div>
      <CareerHero />
      <BenefitsItemSection />
      <CareersPage />
      <Gallery />
      <TeamBenefits />
      {/* <TeamTestimonials /> */}
      <FAQSection
        title="Frequently Asked Questions"
        description="Get answers to some of the most commonly asked questions we receive from businesses just like yours."
        faqs={careerFaq}
      />
    </div>
  );
};

export default CareerPage;
