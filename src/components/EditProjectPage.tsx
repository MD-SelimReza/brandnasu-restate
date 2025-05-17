'use client';

import RichTextEditor from '@/components/RichTextEditor';
import { useProjectById } from '@/hooks/useProjectById';

export default function EditProjectPage({ id }: { id: string }) {
  const { project, loading } = useProjectById(id);

  if (loading) return <p>Loading...</p>;
  if (!project) return <p>Project not found</p>;

  return (
    <div className="px-4 md:px-8">
      <RichTextEditor initialData={project} />
    </div>
  );
}
