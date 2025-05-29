'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ScrollToSectionClient() {
  const searchParams = useSearchParams();
  const section = searchParams?.get('section');

  useEffect(() => {
    if (section) {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [section]);

  return null;
}
