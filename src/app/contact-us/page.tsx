import ContactBody from '@/components/ContactBody';
import ContactHero from '@/components/ContactHero';
import OfficeLocation from '@/components/OfficeLocation';
import React from 'react';

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
