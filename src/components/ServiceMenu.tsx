import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import pricing from "../../public/Icons/pricing.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import { serviceSections } from "@/data";
import { ServicesSection } from "./ServiceSection";

const PricingServices = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-10 gap-5">
      <div>
        <div className="text-darkIndigo flex items-center gap-3 mb-3">
          <Image priority src={pricing} alt="Service icon" width={20} height={20} />
          <h2 className="text-xl font-bold text-darkIndigo flex items-center gap-2">
            Pricing
            <FaArrowRightLong
              size={18}
              className="opacity-0 mt-1 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
            />
          </h2>
        </div>
        <p className="2xl:text-[15px] text-sm text-darkGray lg:mb-5">Build Brand with Easy Pricing</p>
      </div>
      <div className="text-darkGray lg:mt-10">
        <div>
          <h3 className="font-bold text-darkIndigo">
            Starter Plan
          </h3>
          <p className="text-xs text-darkGray mt-2">Perfect for new agents needing steady, pro-quality content to build their brand.</p>
        </div>
      </div>
      <div className="text-darkGray lg:mt-10">
        <div>
          <h3 className="font-bold text-darkIndigo">
            Agent Plan
          </h3>
          <p className="text-xs text-darkGray mt-2">Designed for busy agents managing multiple listings and growing their presence.</p>
        </div>
      </div>
      <div className="text-darkGray lg:pr-5 lg:mt-10">
        <div>
          <h3 className="font-bold text-darkIndigo">
            Broker Plan
          </h3>
          <p className="text-xs text-darkGray mt-2">High-output creative support for top agents or teams needing fast, consistent content.</p>
        </div>
      </div>
    </div>
  );
};

export default function ServiceMenu({ toggleDropdown, toggleMenu } : { toggleDropdown : (menu : string) => void; toggleMenu : () => void; }) {
  const [isMobile, setIsMobile] = useState(false);
  const breakpoint = 1280;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);

    handleResize(); // set on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return (
    <div className="max-w-[1440px] mx-auto lg:mt-[18px] 2xl:px-3 px-5">
      <div className="bg-white lg:p-5 rounded-b-lg lg:shadow-md space-y-5">
        <div className="mt-5 lg:mt-0">
          <h3 className="font-semibold text-darkIndigo text-lg pb-2 mb-5 hidden lg:block">Services</h3>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-0 xl:divide-x divide-black/10">
            {serviceSections.map((section, idx) => (
              <div key={idx} className={`flex flex-col gap-3 px-0 ${idx === 0 && "lg:pl-0"} ${idx === 3 && "lg:pr-0"} lg:px-5`}>
                <div className="flex items-center gap-3">
                  <Image priority src={section.icon} alt="Section icon" width={20} height={20} />       
                  <h2 className="text-xl font-bold text-darkIndigo">{section.title}</h2>
                </div>
                <p className="2xl:text-[15px] text-sm text-darkGray lg:mb-4">{section.description}</p>
                <ServicesSection services={section.services} />
              </div>
            ))}
          </div>
        </div>
        <Link 
          onClick={() => {
            if (isMobile) {
              toggleMenu();
            } else {
              toggleDropdown("services");
            }
          }}  
          href={"/pricing"} className="bg-[#F7F7F7] hover:bg-violet-100 p-5 rounded-lg block group">
          <PricingServices />
        </Link>
      </div>
    </div>
  );
}


