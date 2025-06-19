'use client';
import React from 'react';
import AddUserPage from '@/components/dashboard/AddUserPage';
import { redirect } from 'next/navigation';
import { useSessionUser } from '@/hooks/useSessionUser';
import BarLoader from '@/components/ui/BarLoader';

const Page = () => {
  const { user, loading } = useSessionUser();

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-40">
        <BarLoader />
      </div>
    );
  }

  if (!user) {
    return redirect('/');
  }

  if (user?.role !== 'superadmin') {
    redirect('/dashboard');
  }

  return (
    <div>
      <AddUserPage />
    </div>
  );
};

export default Page;
