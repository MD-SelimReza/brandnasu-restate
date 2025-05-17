'use client';

import RichTextEditor from '@/components/RichTextEditor';
import { useProjectById } from '@/hooks/useProjectById';
import { useParams } from 'next/navigation';

export default function EditPage() {
  const params = useParams();
  const projectId = typeof params.id === 'string' ? params.id : '';
  const { project, loading } = useProjectById(projectId);

  if (loading)
    return (
      <p className="min-h-[calc(100vh-85px)] flex justify-center items-center">
        Loading...
      </p>
    );
  if (!project)
    return (
      <p className="min-h-[calc(100vh-85px)] flex justify-center items-center">
        Project not found
      </p>
    );

  return (
    <div className="px-4 md:px-8">
      <RichTextEditor initialData={project} />
    </div>
  );
}
