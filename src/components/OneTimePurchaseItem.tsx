import { catalogItems } from '@/data';
import React from 'react';
import CatalogCard from './CatalogCard';

const OneTimePurchaseItem = () => {
  return (
    <div className="bg-indigo100">
      <div
        id="on-time"
        className="text-center max-w-[1440px] w-full mx-auto lg:py-36 py-20 px-5"
      >
        <h2
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-duration="400"
          className="text-3xl lg:text-4xl xl:text-5xl lg:!leading-[57px] font-bold text-darkIndigo lg:max-w-5xl md:px-14 mx-auto text-center mb-4"
        >
          One-Time Purchase, Lifetime Value
        </h2>
        <p
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-duration="400"
          className="text-darkGray max-w-5xl mx-auto mb-12"
        >
          Not ready for a monthly plan? No problem. With our one-time purchase
          packages, you get exactly what you need , whether it&apos;s a
          professional logo, brand identity, or a single marketing asset. No
          ongoing costs, no long-term commitments. Just high-quality,
          done-for-you services designed to elevate your real estate brand in
          one go.
        </p>
        <div className="mt-5 lg:mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xl:gap-10 gap-6">
            {catalogItems.map((item) => (
              <div
                key={item.id}
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-duration="400"
              >
                <CatalogCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneTimePurchaseItem;
