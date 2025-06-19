import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

interface User {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  phone?: string;
  location?: string;
  image?: string;
}

export const useSessionUser = () => {
  const { data: session, status } = useSession();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (status === 'loading') return;

    if (status !== 'authenticated' || !session?.user?.email) {
      setUser(null);
      setLoading(false);
      return;
    }

    const fetchUser = async () => {
      try {
        const res = await fetch('/api/user/me');
        const data = await res.json();

        if (!res.ok) throw new Error(data.error || 'Failed to fetch user');

        setUser(data.user);
      } catch (err) {
        setUser(null);
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Unexpected error');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [status, session]);

  return { user, loading, error };
};
