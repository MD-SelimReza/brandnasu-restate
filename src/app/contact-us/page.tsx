import React from 'react';
import ContactBody from '@/components/ContactBody';
import ContactHero from '@/components/ContactHero';
import OfficeLocation from '@/components/OfficeLocation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | BrandNasu',
  description:
    'Get in touch with us for inquiries, support, or collaboration opportunities. We are here to help you with your design and branding needs.',
  keywords: [
    'contact us',
    'get in touch',
    'customer support',
    'inquiries',
    'collaboration',
    'design agency contact',
    'branding support',
  ],
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
};

const Page = () => {
  return (
    <div>
      <ContactHero />
      <ContactBody />
      <OfficeLocation />
    </div>
  );
};

export default Page;
