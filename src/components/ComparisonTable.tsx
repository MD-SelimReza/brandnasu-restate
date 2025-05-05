import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { GiCheckMark } from 'react-icons/gi';

const features = [
  {
    label: 'The best design talent',
    brandnasu: true,
    others: true,
  },
  {
    label: 'Dedicated project manager for every client',
    brandnasu: true,
    others: false,
  },
  {
    label: 'Real estate-focused creative team',
    brandnasu: true,
    others: false,
  },
  {
    label: 'Monthly branding support & strategy',
    brandnasu: true,
    others: false,
  },
  {
    label: 'Fast, reliable communication & priority service',
    brandnasu: true,
    others: false,
  },
  {
    label: 'In-house team collaboration for better results',
    brandnasu: true,
    others: false,
  },
  {
    label: 'Scalable branding system for long-term growth',
    brandnasu: true,
    others: false,
  },
  {
    label: 'Quality control and review before delivery',
    brandnasu: true,
    others: false,
  },
  {
    label: 'Strategic partnership mindset',
    brandnasu: true,
    others: false,
  },
  {
    label: 'No project manager; you coordinate everything',
    brandnasu: false,
    others: true,
  },
  {
    label: 'General freelancers with no industry focus',
    brandnasu: false,
    others: true,
  },
  {
    label: 'One-time delivery, no ongoing support',
    brandnasu: false,
    others: true,
  },
  {
    label: 'Response times vary by freelancer',
    brandnasu: false,
    others: true,
  },
  {
    label: 'Disconnected freelancers per task',
    brandnasu: false,
    others: true,
  },
  {
    label: 'No consistency across projects',
    brandnasu: false,
    others: true,
  },
  {
    label: 'You manage revisions and quality yourself',
    brandnasu: false,
    others: true,
  },
  {
    label: 'Transactional, not long-term focused',
    brandnasu: false,
    others: true,
  },
];

export default function ComparisonTable() {
  const brandnasuFeatures = features.filter((f) => f.brandnasu);
  const othersFeatures = features.filter((f) => f.others);

  return (
    <section className="lg:py-16">
      <div className="w-full">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl lg:!leading-[57px] font-bold text-darkIndigo lg:max-w-5xl md:px-14 mx-auto text-center lg:mb-20 md:mb-16 mb-10">
          Why Choose BrandNasu Over Freelance Marketplaces
        </h2>

        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          {/* BrandNasu Column */}
          <div className="border-b lg:border-b-0 lg:border-r border-gray-200">
            <div className="p-6 text-left text-darkIndigo text-2xl font-semibold border-b border-gray-200">
              BrandNasu
            </div>
            {brandnasuFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 px-6 py-4 border-b border-gray-200"
              >
                <GiCheckMark className="text-green-500 w-5 h-5" />
                <span className="text-darkGray text-left">{feature.label}</span>
              </div>
            ))}
          </div>

          {/* Others Column */}
          <div>
            <div className="p-6 text-left text-darkIndigo text-2xl font-semibold border-b border-gray-200">
              Other Freelance Marketplace
            </div>
            {othersFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 px-6 py-4 border-b border-gray-200"
              >
                {idx === 0 ? (
                  <GiCheckMark className="text-green-500 w-5 h-5" />
                ) : (
                  <AiOutlineClose className="text-red-500 w-5 h-5" />
                )}
                <span className="text-darkGray text-left">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
