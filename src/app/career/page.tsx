import React from 'react';
import CareerHero from '@/components/CareerHero';
import BenefitsItemSection from '@/components/BenefitItemSection';
import CareersPage from '@/components/CareersPage';
import Gallery from '@/components/Gallery';
import TeamBenefits from '@/components/TeamBenefits';
// import TeamTestimonials from '@/components/TeamTestimonials';
import CareerFaq from '@/components/CareerFaq';

const CareerPage = () => {
  return (
    <div>
      <CareerHero />
      <BenefitsItemSection />
      <CareersPage />
      <Gallery />
      <TeamBenefits />
      {/* <TeamTestimonials /> */}
      <CareerFaq />
    </div>
  );
};

export default CareerPage;
