import UpdateProjectEditor from '@/components/ui/UpdateProjectEditor';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Edit Project | BrandNasu',
  description:
    'Edit your project details in the BrandNasu admin panel. Update project information, images, and more to keep your portfolio current.',
  keywords: [
    'edit project',
    'project management',
    'update project',
    'admin panel',
    'portfolio management',
  ],
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
};

export default function EditPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-4">
      <UpdateProjectEditor />
    </div>
  );
}
