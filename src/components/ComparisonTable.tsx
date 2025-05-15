import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { GiCheckMark } from 'react-icons/gi';

const features = [
  {
    label: '100% focused on real estate industry',
    brandnasu: true,
    others: false,
  },
  {
    label: 'General freelancers with no niche focus',
    brandnasu: false,
    others: true,
  },
  {
    label: 'One dedicated team ensuring brand consistency',
    brandnasu: true,
    others: false,
  },
  {
    label: 'Multiple freelancers, inconsistent output',
    brandnasu: false,
    others: true,
  },
  {
    label: 'Fast delivery (1–2 business days per project)',
    brandnasu: true,
    others: false,
  },
  {
    label: 'Depends on freelancer availability',
    brandnasu: false,
    others: true,
  },
  {
    label: 'Unlimited design & content requests per plan',
    brandnasu: true,
    others: false,
  },
  { label: 'Pay per task or revision', brandnasu: false, others: true },
  {
    label: 'Transparent pricing, no surprises',
    brandnasu: true,
    others: false,
  },
  {
    label: 'Variable pricing, hourly confusion',
    brandnasu: false,
    others: true,
  },
  {
    label: 'Direct, responsive support from one team',
    brandnasu: true,
    others: false,
  },
  {
    label: 'Juggling between different freelancers',
    brandnasu: false,
    others: true,
  },
  {
    label: 'Graphics, video edits, branding, web & more',
    brandnasu: true,
    others: false,
  },
  {
    label: 'Usually limited to one skill per freelancer',
    brandnasu: false,
    others: true,
  },
  {
    label: 'Designed to scale with your business',
    brandnasu: true,
    others: false,
  },
  {
    label: 'You start from scratch for every new need',
    brandnasu: false,
    others: true,
  },
  {
    label: 'Professional oversight on every deliverable',
    brandnasu: true,
    others: false,
  },
  { label: 'Hit or miss, no guaranteed QC', brandnasu: false, others: true },
  {
    label: 'Designs built with real estate conversion in mind',
    brandnasu: true,
    others: false,
  },
  {
    label: 'Mostly visual, no marketing context',
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
        <h2
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-duration="400"
          className="text-3xl lg:text-4xl xl:text-5xl lg:!leading-[57px] font-bold text-darkIndigo lg:max-w-5xl md:px-14 mx-auto text-center mb-4"
        >
          Why Choose BrandNasu Over Freelance Marketplaces?
        </h2>
        <p
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-duration="400"
          className="text-darkGray max-w-5xl mx-auto mb-12"
        >
          With BrandNasu, you get a real partner, not just a task-taker. We know
          the real estate space, understand your goals, and deliver consistently
          branded creative at the speed your business moves.
        </p>

        <div
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-duration="400"
          className="bg-white border border-gray-200 rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2"
        >
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
                <AiOutlineClose className="text-red-500 w-5 h-5" />
                <span className="text-darkGray text-left">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
