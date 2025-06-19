'use client';

import dynamic from 'next/dynamic';

const MagicLogin = dynamic(() => import('@/components/MagicLogin'), {
  ssr: false,
});

export default function Page() {
  return <MagicLogin />;
}
