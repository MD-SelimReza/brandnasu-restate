import React from 'react';
import CustomersPage from '@/components/dashboard/CustomersPage';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import { redirect } from 'next/navigation';

const page = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/signin');
  }

  if (session?.user?.role !== 'superadmin') {
    redirect('/dashboard');
  }

  return (
    <div className="py-6">
      <CustomersPage />
    </div>
  );
};

export default page;
