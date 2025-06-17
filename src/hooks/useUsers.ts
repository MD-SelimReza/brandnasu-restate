'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

export interface User {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  role?: string;
  phone?: string;
  image?: string;
  location?: string;
  password?: string;
}

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get('/api/user');
        setUsers(res.data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Failed to fetch users');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { users, loading, error };
};
