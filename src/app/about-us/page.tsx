import React from 'react';
import About from '@/components/About';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | BrandNasu',
  description:
    'Learn more about BrandNasu, our mission, values, and the team behind our design agency. Discover how we can help you create a strong brand identity.',
  keywords: [
    'about us',
    'brand nasu',
    'design agency',
    'branding',
    'web design',
    'digital experiences',
    'our team',
    'mission and values',
  ],
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
};

const AboutPage = () => {
  return (
    <div>
      <About />
    </div>
  );
};

export default AboutPage;
