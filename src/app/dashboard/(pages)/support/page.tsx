'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSessionUser } from '@/hooks/useSessionUser';
import SupportPage from '@/components/dashboard/SupportPage';

const Page = () => {
  const { user, loading } = useSessionUser();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      // 🚫 Block admin users from accessing this page
      if (user?.role === 'admin') {
        router.replace('/dashboard'); // redirect or send to 403 page
      }
    }
  }, [user, loading, router]);

  if (loading || user?.role === 'admin') {
    return <p className="text-center py-10">Checking permissions...</p>;
  }
  return (
    <div>
      <SupportPage />
    </div>
  );
};

export default Page;
