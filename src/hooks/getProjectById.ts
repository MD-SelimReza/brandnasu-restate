import { Project } from '@/models/projects';

export const getProjectById = async (id: string) => {
  try {
    const project = await Project.findById(id).lean();
    if (!project || Array.isArray(project)) return null;

    return {
      _id: project._id?.toString?.() ?? '',
      title: project.title,
      description: project.description,
      image: project.image,
      tag: project.tag,
      slug: project.slug,
    };
  } catch (error) {
    console.error('Error fetching project:', error);
    return null;
  }
};
