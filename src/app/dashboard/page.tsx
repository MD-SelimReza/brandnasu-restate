import React from 'react';
import ProjectsAdmin from '@/components/ProjectsAdmin';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import { redirect } from 'next/navigation';

const DashboardHomePage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect('/');
  }

  return (
    <div className="py-6">
      <ProjectsAdmin />
    </div>
  );
};

export default DashboardHomePage;
