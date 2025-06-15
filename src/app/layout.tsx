'use client';

// import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DataAosProvider from '@/components/DataAosProvider';
import { usePathname } from 'next/navigation';

// export const metadata: Metadata = {
//   title: 'BrandNasu',
//   description:
//     'BrandNasu is a design agency that specializes in creating stunning and effective brand identities, websites, and digital experiences.',
//   keywords: [
//     'design agency',
//     'branding',
//     'web design',
//     'digital experiences',
//     'user experience',
//     'UI/UX design',
//     'graphic design',
//     'logo design',
//     'responsive design',
//     'creative agency',
//     'brand identity',
//     'web development',
//     'digital marketing',
//     'social media',
//     'content creation',
//     'e-commerce',
//     'mobile app design',
//     'UI design',
//     'UX design',
//     'visual design',
//     'interaction design',
//     'design thinking',
//     'user interface',
//     'user-centered design',
//     'design strategy',
//     'design consultancy',
//     'creative solutions',
//     'digital branding',
//     'brand strategy',
//     'design trends',
//     'graphic design agency',
//     'web design agency',
//     'branding agency',
//     'digital design',
//     'creative design',
//     'design services',
//     'custom design',
//     'design portfolio',
//     'design inspiration',
//     'design excellence',
//     'design innovation',
//     'design projects',
//     'design solutions',
//     'design excellence',
//     'design leadership',
//   ],
//   icons: {
//     icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const shouldHideFooter =
    pathname.startsWith('/admin/projects/add') ||
    pathname.startsWith('/admin/projects/edit');
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-gray100">
        <Navbar />
        <DataAosProvider>{children}</DataAosProvider>
        {!shouldHideFooter && <Footer />}
      </body>
    </html>
  );
}
