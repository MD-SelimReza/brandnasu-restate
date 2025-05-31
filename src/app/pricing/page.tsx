import React from 'react';
import PricingPackage from '@/components/PricingPackage';
import ComparisonTable from '@/components/ComparisonTable';
import MemberShip from '@/components/MemberShip';
import BookACallSection from '@/components/BookACallSection';
import OneTimePurchaseItem from '@/components/OneTimePurchaseItem';

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
