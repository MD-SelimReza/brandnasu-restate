'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

export interface Project {
  _id: string;
  title: string;
  description: string;
  image: string;
  slug: string;
  tag: string[];
}

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get('/api/projects');
        setProjects(res.data);
      } catch (err: unknown) {
        console.error('Error fetching projects:', err);
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Failed to fetch projects');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
};
