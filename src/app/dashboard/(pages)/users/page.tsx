'use client';
import React from 'react';
import { redirect } from 'next/navigation';
import { useSessionUser } from '@/hooks/useSessionUser';
import CustomersPage from '@/components/dashboard/CustomersPage';
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
    <div className="py-6">
      <CustomersPage />
    </div>
  );
};

export default Page;
