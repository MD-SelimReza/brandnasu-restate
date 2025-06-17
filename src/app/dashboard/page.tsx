'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSessionUser } from '@/hooks/useSessionUser';
import BarLoader from '@/components/ui/BarLoader';
import AdminDashboard from '@/components/dashboard/AdminDashboard';
import UserDashboard from '@/components/dashboard/UserDashboard';

const DashboardHomePage = () => {
  const { user, loading } = useSessionUser();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/signin');
    }
  }, [loading, user, router]);

  if (loading || !user) {
    return (
      <div className="flex justify-center items-center mt-40">
        <BarLoader />
      </div>
    );
  }

  return (
    <div>{user.role === 'admin' ? <AdminDashboard /> : <UserDashboard />}</div>
  );
};

export default DashboardHomePage;
