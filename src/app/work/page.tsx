import WorkHero from '@/components/WorkHero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Work | BrandNasu',
  description:
    'Explore our portfolio of successful projects that showcase our expertise in design and branding.',
  keywords: [
    'design agency',
    'branding',
    'web design',
    'digital experiences',
    'portfolio',
    'case studies',
    'creative solutions',
    'design excellence',
  ],
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
};

const WorkPage = () => {
  return (
    <div>
      <WorkHero />
    </div>
  );
};

export default WorkPage;
