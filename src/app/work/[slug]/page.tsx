import { Project } from '@/models/projects';
import { connectDB } from '@/lib/mongo';
import React from 'react';
import DOMPurify from 'isomorphic-dompurify';
import { notFound } from 'next/navigation';
import '../../styles/style.css';

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

// ✅ Let Next.js infer the prop types using `params: { slug }`
export default async function WorkDetailsPage(props: {
  params: Promise<{ slug: string }>;
}) {
  // Sidestep TS destructuring mismatch—await before use
  const { slug } = await props.params;
  await connectDB();

  const project = await Project.findOne({ slug });

  if (!project) {
    // ✅ Best practice: use Next.js notFound helper
    notFound();
  }

  return (
    <div className="px-5 max-w-[1440px] mx-auto pb-12">
      <div className="my-10">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-darkIndigo">
              {project.title}
            </h1>
            <p className="text-darkGray mt-2">{project.description}</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {project.tag.map((tag: string, index: number) => (
              <span
                key={index}
                className="bg-[#DEE0E2] text-darkGray px-3 py-1 rounded-full font-regular text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div
        className="mt-10 prose max-w-none prose-headings:my-2 prose-p:my-1 tiptap-custom prose tiptap"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(project.content),
        }}
      />
    </div>
  );
}
