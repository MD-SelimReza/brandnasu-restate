import AutoSlider from '@/components/AutoSlider';
import GradientSection from '@/components/GradientBackground';
import OurWorks from '@/components/OurWorks';
import DesignProcess from '@/components/DesignProcess';
// import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import CallToActionSection from '@/components/CallToActionSection';
import FAQSection from '@/components/FAQSection';
import BookADemo from '@/components/BookADemo';
import WhatWeHelp from '@/components/WhatWeHelp';
import { faqsData } from '@/data';

export default function Home() {
  return (
    <div className="flex flex-col justify-start min-h-[calc(100vh-86px)] w-full mx-auto bg-indigo100 max-w-[1440px">
      <AutoSlider />
      <WhatWeHelp />
      <OurWorks />
      <GradientSection />
      <DesignProcess />
      {/* <TestimonialsCarousel /> */}
      <CallToActionSection />
      <FAQSection
        title="Frequently Asked Questions"
        description="Get answers to some of the most commonly asked questions we receive from businesses just like yours."
        faqs={faqsData}
      />
      <BookADemo />
    </div>
  );
}
