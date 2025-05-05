import React from 'react';
import { GiCheckMark } from 'react-icons/gi';
import { catalogItems } from '@/data';
import CatalogCard from './CatalogCard';
import MemberShip from './MemberShip';
import ComparisonTable from './ComparisonTable';
import BookACallSection from './BookACallSection';
import Button from './ui/Button';

const packages = [
  {
    name: 'Starter Plan',
    price: '$295',
    period: '/month',
    highlight:
      'Perfect for new agents needing steady, pro-quality content to build their brand.',
    features: [
      'Social media post designs (Instagram, Facebook, LinkedIn)',
      'Just listed / Just sold graphics',
      'Market update visuals',
      'Email newsletter design',
      'Client testimonial graphics',
      'Real estate quote cards',
    ],
    requests: 'Unlimited requests',
    concurrency: '1 project at a time',
    delivery: '2 business days delivery per project',
    slot: '3 Slots Available, Hurry!',
    highlightColor: 'bg-white',
    textColor: 'text-darkIndigo',
    readColor: 'text-darkGray',
    dotColor: 'bg-green-500',
    slotBg: 'bg-[#F4F3FF]',
    slotText: 'text-darkIndigo',
  },
  {
    name: 'Agent Plan',
    price: '$495',
    period: '/month',
    highlight:
      'Designed for busy agents managing multiple listings and growing their presence.',
    features: [
      'Everything in Starter +',
      'Open house flyers/postcards',
      'Property listing highlights',
      'Branded story/reel templates',
      'Real estate infographics',
      'Video thumbnails',
    ],
    requests: 'Unlimited requests',
    concurrency: '2 project at a time',
    delivery: '1 business day delivery per project',
    slot: '2 Slots Available, Hurry!',
    highlightColor: 'bg-indigo',
    readColor: 'text-lightIndigo',
    textColor: 'text-white',
    dotColor: 'bg-lightIndigo',
    slotBg: 'bg-[#4122B2]',
    slotText: 'text-white',
  },
  {
    name: 'Broker Plan',
    price: '$795',
    period: '/month',
    highlight:
      'High-output creative support for top agents or teams needing fast, consistent content.',
    features: [
      'Everything in Active +',
      'Short-form video edits (up to 30 secs)',
      'Agent branding materials (email signature, business card, etc.)',
      'Lead magnet visuals (guides, checklists)',
      'Facebook ad creatives',
      'Custom graphics for events or promotions',
    ],
    requests: 'Unlimited requests',
    concurrency: '3 project at a time',
    delivery: '1 business days delivery per project',
    slot: '3 Slots Available, Hurry!',
    highlightColor: 'bg-white',
    textColor: 'text-darkIndigo',
    readColor: 'text-darkGray',
    dotColor: 'bg-green-500',
    slotBg: 'bg-[#F4F3FF]',
    slotText: 'text-darkIndigo',
  },
];

export default function PricingPackage() {
  return (
    <div className="w-full bg-indigo100">
      <div
        id="subscription"
        className="text-center max-w-[1440px] w-full mx-auto lg:py-36 py-20 px-5"
      >
        <h2 className="text-3xl lg:text-4xl xl:text-5xl lg:!leading-[57px] font-bold text-darkIndigo lg:max-w-5xl md:px-14 mx-auto text-center lg:mb-20 md:mb-16 mb-10">
          Power Your Listings with a Creative Team—One Flat Monthly Fee
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-10 gap-6 w-full mb-20">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between ${pkg.highlightColor} ${pkg.textColor} rounded-2xl pb-14 p-[30px] max-w-[440px] text-left`}
            >
              <div>
                <div
                  className={`flex items-center gap-2 mb-8 py-1 px-[10px] w-fit rounded-full ${pkg.slotBg}`}
                >
                  <span className="relative flex h-3 w-3">
                    {(() => {
                      const isTwoSlots = pkg.slot.includes('2');
                      const dynamicDotColor = isTwoSlots
                        ? 'bg-red-500'
                        : 'bg-green-500';
                      return (
                        <>
                          <span
                            className={`animate-ping absolute inline-flex h-full w-full rounded-full ${dynamicDotColor} opacity-95`}
                            style={{ animationDuration: '2s' }}
                          ></span>
                          <span
                            className={`relative inline-flex rounded-full h-3 w-3 ${dynamicDotColor}`}
                          ></span>
                        </>
                      );
                    })()}
                  </span>
                  <span className={`text-[15px] font-light ${pkg.readColor}`}>
                    {pkg.slot}
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-5">{pkg.name}</h2>
                <p
                  className={`text-[15px] mb-11 font-regular ${pkg.readColor}`}
                >
                  {pkg.highlight}
                </p>
                <div className="text-5xl font-bold mb-5">
                  {pkg.price}
                  <span
                    className={`text-2xl ml-1 font-normal ${pkg.readColor}`}
                  >
                    {pkg.period}
                  </span>
                </div>
                <p className={`text-base font-regular mb-10 ${pkg.readColor}`}>
                  Cancel any time.
                </p>
                <button
                  className={`w-full py-2 rounded-full font-semibold text-2xl ${
                    pkg.highlightColor === 'bg-indigo'
                      ? 'bg-lightIndigo text-darkIndigo hover:bg-darkIndigo hover:text-white'
                      : 'bg-indigo text-white hover:bg-darkIndigo transition duration-500'
                  }`}
                >
                  Purchase
                </button>
                <ul className={`mt-11 space-y-3 text-base ${pkg.readColor}`}>
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-baseline">
                      <span className="mr-2 font-bold">
                        <GiCheckMark size={14} />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`mt-8 space-y-3.5 text-base ${pkg.readColor}`}>
                <p
                  className={`w-fit py-1 px-[10px] rounded-full flex items-center justify-center gap-2 ${pkg.slotBg}`}
                >
                  <GiCheckMark size={14} /> {pkg.requests}
                </p>
                <p
                  className={`w-fit py-1 px-[10px] rounded-full flex items-center justify-center gap-2 ${pkg.slotBg}`}
                >
                  <GiCheckMark size={14} /> {pkg.concurrency}
                </p>
                <p
                  className={`w-fit py-1 px-[10px] rounded-full flex items-center justify-center gap-2 ${pkg.slotBg}`}
                >
                  <GiCheckMark size={14} /> {pkg.delivery}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Button
          bgColor="bg-indigo hover:bg-darkIndigo"
          textColor="text-white"
          label="Book A Demo"
          width="w-full"
        />
      </div>
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
      <div className="bg-indigo100">
        <div
          id="on-time"
          className="text-center max-w-[1440px] w-full mx-auto lg:py-36 py-20 px-5"
        >
          <h2 className="text-3xl lg:text-4xl xl:text-5xl lg:!leading-[57px] font-bold text-darkIndigo lg:max-w-5xl md:px-14 mx-auto text-center mb-4">
            One-Time Purchase, Lifetime Value
          </h2>
          <p className="text-darkGray max-w-5xl mx-auto mb-12">
            Not ready for a monthly plan? No problem. With our one-time purchase
            packages, you get exactly what you need — whether it&apos;s a
            professional logo, brand identity, or a single marketing asset. No
            ongoing costs, no long-term commitments. Just high-quality,
            done-for-you services designed to elevate your real estate brand in
            one go.
          </p>
          <div className="mt-5 lg:mt-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xl:gap-10 gap-6">
              {catalogItems.map((item) => (
                <CatalogCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div id="book-a-call" className="bg-white">
        <div className="text-center max-w-[1440px] w-full mx-auto lg:py-36 py-20 px-5">
          <BookACallSection />
        </div>
      </div>
    </div>
  );
}
