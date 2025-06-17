import React from 'react';
import RichTextEditor from '@/components/RichTextEditor';
import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Add Project | BrandNasu',
  description:
    'Use our rich text editor to create and edit content for your projects. Enhance your text with formatting, images, and more.',
  keywords: [
    'rich text editor',
    'content creation',
    'text formatting',
    'editor tools',
    'project content',
  ],
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
};

const EditorPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/signin');
  }
  return (
    <div className="max-w-[1440px] mx-auto px-4">
      <RichTextEditor />
    </div>
  );
};

export default EditorPage;
