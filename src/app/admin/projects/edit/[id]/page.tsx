import RichTextEditor from '@/components/RichTextEditor';
import { getProjectById } from '@/hooks/getProjectById';
import { notFound } from 'next/navigation';

interface EditPageProps {
  params: Promise<{ id: string }> | { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function EditPage(props: EditPageProps) {
  const params =
    props.params instanceof Promise ? await props.params : props.params;
  const projectId = params.id;

  const project = await getProjectById(projectId);

  if (!project) return notFound();

  return (
    <div className="px-4 md:px-8">
      <RichTextEditor initialData={project} />
    </div>
  );
}
