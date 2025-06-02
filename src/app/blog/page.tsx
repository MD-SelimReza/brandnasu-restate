import React from 'react';
import BlogDetailsPage from '@/components/BlogDetailsPage';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Blog Details | BrandNasu',
  description:
    'Read the latest articles and insights from BrandNasu. Explore our blog for design tips, branding strategies, and industry trends.',
  keywords: [
    'blog details',
    'brand nasu blog',
    'design articles',
    'branding tips',
    'industry trends',
  ],
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
};

const Page = () => {
  return (
    <div className="bg-white">
      <BlogDetailsPage />
    </div>
  );
};

export default Page;
