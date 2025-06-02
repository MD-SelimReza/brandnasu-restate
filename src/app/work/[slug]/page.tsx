import React from 'react';
import WorkDetails from '@/components/WorkDetails';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Work Details | BrandNasu',
  description:
    'Explore detailed insights into our projects at BrandNasu. Discover the design process, challenges, and solutions behind each work.',
  keywords: [
    'work details',
    'brand nasu projects',
    'design insights',
    'project challenges',
    'solution design',
  ],
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
};

const Page = () => {
  return (
    <div>
      <WorkDetails />
    </div>
  );
};

export default Page;
