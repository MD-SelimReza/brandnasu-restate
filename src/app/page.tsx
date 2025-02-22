import AutoSlider from "@/components/AutoSlider";
import InfoSection from "@/components/InfoSection";
import GradientSection from "@/components/GradientBackground";
import OurWorks from "@/components/OurWorks";
import DesignProcess from "@/components/DesignProcess";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import CallToActionSection from "@/components/CallToActionSection";
import FAQSection from "@/components/FAQSection";
import DesignPlatform from "@/components/DesignPlatform";

export default function Home() {
  return (
    <div className="flex flex-col justify-start min-h-[calc(100vh-86px)] w-full mx-auto bg-gray-100 max-w-[1440px">
      <AutoSlider />
      {/* <CardSlider /> */}
      {/* <div className="border-b border-gray-100 xl:-mt-20 -mt-28"></div> */}
      <div className="">
        <InfoSection />
        <GradientSection />
        <OurWorks />
        <DesignPlatform />
        <DesignProcess />
        <TestimonialsCarousel />
        <div id="faq" className="border-b border-gray-100 -mt-2"></div>
        <FAQSection />
        <CallToActionSection />
      </div>
      <div className="border-b border-gray-100 -mt-8 pb-16 xl:pb-44"></div>
    </div>
  );
}
