import React from 'react';
import ProjectsAdmin from '@/components/ProjectsAdmin';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Projects | BrandNasu',
  description:
    'Manage projects in the BrandNasu admin panel. Add, edit, or delete projects to keep your portfolio up to date.',
  keywords: [
    'admin projects',
    'manage projects',
    'project management',
    'admin panel',
    'portfolio management',
  ],
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
};

const Page = () => {
  return (
    <div>
      <ProjectsAdmin />
    </div>
  );
};

export default Page;
