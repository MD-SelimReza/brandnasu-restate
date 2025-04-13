import AutoSlider from "@/components/AutoSlider";
import InfoSection from "@/components/InfoSection";
import GradientSection from "@/components/GradientBackground";
import OurWorks from "@/components/OurWorks";
import DesignProcess from "@/components/DesignProcess";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import CallToActionSection from "@/components/CallToActionSection";
import FAQSection from "@/components/FAQSection";
import DesignPlatform from "@/components/DesignPlatform";
// import LoginForm from "@/components/authentication/Login";

export default function Home() {
  return (
    <div className="flex flex-col justify-start min-h-[calc(100vh-86px)] w-full mx-auto bg-gray-100 max-w-[1440px">
      <AutoSlider />
      <div className="">
        {/* <LoginForm /> */}
        <InfoSection />
        <GradientSection />
        <OurWorks />
        <DesignPlatform />
        <DesignProcess />
        <TestimonialsCarousel />
        <div id="faq" className="border-b border-gray-100 xl:-mt-[120px]"></div>
        <FAQSection />
        <CallToActionSection />
        <div className="border-b border-gray-100 xl:-mt-44 xl:pb-44 pb-16"></div>
      </div>
      {/* <div className="border-b border-gray-100 pb-16 xl:pb-44"></div> */}
    </div>
  );
}
