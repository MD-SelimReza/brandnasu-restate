'use client';

import { Project, useProjects } from '@/hooks/useProjects';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import ConfirmDeleteDialog from './ConfirmDeleteDialog';

export default function ProjectsAdmin() {
  const { projects, loading, error } = useProjects();
  const [currentProjects, setCurrentProjects] = useState<Project[]>([]);
  const router = useRouter();

  useEffect(() => {
    setCurrentProjects(projects);
  }, [projects]);

  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const confirmDelete = (id: string) => {
    setDeleteId(id);
    setShowConfirm(true);
  };

  const handleConfirmDelete = async () => {
    if (!deleteId) return;
    try {
      await axios.delete(`/api/projects/${deleteId}`);
      setCurrentProjects((prev) => prev.filter((p) => p._id !== deleteId));
      toast.success('Project deleted successfully');
    } catch {
      toast.error('Failed to delete project');
    } finally {
      setShowConfirm(false);
      setDeleteId(null);
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
                  <td className="px-4 py-3 flex items-center gap-8">
                    <button
                      onClick={() => handleEdit(project._id)}
                      className="px-3 bg-gray100 text-darkGray py-1.5 w-20 rounded-md hover:bg-gray-100"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => confirmDelete(project._id)}
                      className="px-3 py-1.5 w-20 rounded-md bg-gray100 text-[#f62447] hover:bg-red-100"
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
      <ConfirmDeleteDialog
        isOpen={showConfirm}
        onCancel={() => setShowConfirm(false)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}
