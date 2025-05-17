'use client';

import { Project, useProjects } from '@/hooks/useProjects';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function ProjectsAdmin() {
  const { projects, loading, error } = useProjects();
  const [currentProjects, setCurrentProjects] = useState<Project[]>([]);
  const router = useRouter();

  useEffect(() => {
    setCurrentProjects(projects);
  }, [projects]);

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`/api/projects/${id}`);
      setCurrentProjects((prev) => prev.filter((p) => p._id !== id));
      toast.success('Project deleted successfully');
    } catch {
      toast.error('Failed to delete project');
    }
  };

  const handleEdit = (id: string) => {
    router.push(`/admin/projects/edit/${id}`);
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 text-lg">Loading projects...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-red-500 text-lg">Error loading projects: {error}</p>
      </div>
    );

  if (currentProjects.length === 0)
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 text-lg">No projects found.</p>
      </div>
    );

  return (
    <div className="bg-gray-100">
      <div className="max-w-[1440px] px-5 mx-auto lg:py-32 md:py-24 py-16">
        <h1 className="text-3xl font-bold mb-6">Projects Admin</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Title
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Description
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Image
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Tags
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentProjects.map((project) => (
                <tr key={project._id}>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    {project.title}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 max-w-xs truncate">
                    {project.description}
                  </td>
                  <td className="px-4 py-1">
                    <div className="relative w-24 h-16">
                      <Image
                        src={project.image}
                        alt={project.title}
                        layout="fill"
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {project.tag.join(', ')}
                  </td>
                  <td className="px-4 py-3 flex items-center gap-2">
                    <button
                      onClick={() => handleEdit(project._id)}
                      className="px-3 py-1 rounded-md bg-green-600 text-white hover:bg-green-700 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(project._id)}
                      className="px-3 py-1 rounded-md bg-red-600 text-white hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
