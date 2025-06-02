import React from 'react';
import PricingPackage from '@/components/PricingPackage';
import ComparisonTable from '@/components/ComparisonTable';
import MemberShip from '@/components/MemberShip';
import BookACallSection from '@/components/BookACallSection';
import OneTimePurchaseItem from '@/components/OneTimePurchaseItem';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Pricing | BrandNasu',
  description:
    'Explore our pricing plans for web design and branding services. Choose the best package that fits your needs and budget.',
  keywords: [
    'pricing',
    'web design pricing',
    'branding services',
    'pricing plans',
    'affordable web design',
    'brand nasu pricing',
  ],
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
};

const Page = () => {
  return (
    <div className="w-full bg-indigo100">
      <PricingPackage />
      <div className="bg-white">
        <div className="text-center max-w-[1440px] w-full mx-auto py-20 px-5">
          <ComparisonTable />
        </div>
      </div>
      <div className="bg-darkIndigo">
        <div className="text-center max-w-[1440px] w-full mx-auto py-20 px-5">
          <MemberShip />
        </div>
      </div>
      <OneTimePurchaseItem />
      <div id="book-call" className="bg-white">
        <div className="text-center max-w-[1440px] w-full mx-auto lg:py-36 py-20 px-5">
          <BookACallSection />
        </div>
      </div>
    </div>
  );
};

export default Page;
