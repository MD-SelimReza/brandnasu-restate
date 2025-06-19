'use client';
import DashboardLayoutWrapper from '@/components/dashboard/DashboardLayoutWrapper';
import BarLoader from '@/components/ui/BarLoader';
import { useSessionUser } from '@/hooks/useSessionUser';
import { redirect } from 'next/navigation';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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

  return (
    <main className="w-full bg-white">
      <DashboardLayoutWrapper>{children}</DashboardLayoutWrapper>
    </main>
  );
}
