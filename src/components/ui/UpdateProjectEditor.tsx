'use client';

import { useProjectById } from '@/hooks/useProjectById';
import RichTextEditor from '@/components/RichTextEditor';
import { useParams } from 'next/navigation';

export default function UpdateProjectEditor() {
  const params = useParams();
  const projectId = typeof params.id === 'string' ? params.id : '';
  const { project, loading } = useProjectById(projectId);

  if (loading)
    return (
      <p className="min-h-[calc(100vh-85px)] flex justify-center items-center"></p>
    );
  if (!project)
    return (
      <p className="min-h-[calc(100vh-85px)] flex justify-center items-center">
        Project not found
      </p>
    );

  return (
    <div>
      <RichTextEditor initialData={project} />
    </div>
  );
}
