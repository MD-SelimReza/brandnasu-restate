import React from 'react';
import RichTextEditor from '@/components/RichTextEditor';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Editor | BrandNasu',
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

const EditorPage = () => {
  return (
    <div>
      <RichTextEditor />
    </div>
  );
};

export default EditorPage;
