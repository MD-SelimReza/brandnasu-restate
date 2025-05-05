import AutoSlider from '@/components/AutoSlider';
import GradientSection from '@/components/GradientBackground';
import OurWorks from '@/components/OurWorks';
import DesignProcess from '@/components/DesignProcess';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import CallToActionSection from '@/components/CallToActionSection';
import FAQSection from '@/components/FAQSection';
import DesignPlatform from '@/components/DesignPlatform';
import BookADemo from '@/components/BookADemo';
import WhatWeHelp from '@/components/WhatWeHelp';

export default function Home() {
  return (
    <div className="flex flex-col justify-start min-h-[calc(100vh-86px)] w-full mx-auto bg-indigo100 max-w-[1440px">
      <AutoSlider />
      <WhatWeHelp />
      {/* <InfoSection /> */}
      <OurWorks />
      <GradientSection />
      <DesignPlatform />
      <DesignProcess />
      <TestimonialsCarousel />
      <FAQSection />
      <CallToActionSection />
      <BookADemo />
    </div>
  );
}
