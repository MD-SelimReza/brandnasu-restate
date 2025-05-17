import { connectDB } from '@/lib/mongo';
import { IProject, Project } from '@/models/projects';

export async function findProjectByIdAndUpdate(
  projectId: string,
  updateData: Partial<IProject>
): Promise<IProject> {
  await connectDB();
  const project = await Project.findByIdAndUpdate(projectId, updateData, {
    new: true,
  });
  return JSON.parse(JSON.stringify(project));
}

export async function findProjectByIdAndDelete(
  projectId: string
): Promise<IProject> {
  await connectDB();
  const project = await Project.findByIdAndDelete(projectId);
  return JSON.parse(JSON.stringify(project));
}
