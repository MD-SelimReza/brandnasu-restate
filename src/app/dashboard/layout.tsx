import DashboardLayoutWrapper from '@/components/dashboard/DashboardLayoutWrapper';
import { authOptions } from '@/lib/authOptions';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  console.log('Session:', session?.user?.role);

  if (!session) {
    return redirect('/signin');
  }

  return (
    <main className="w-full bg-white">
      <DashboardLayoutWrapper>{children}</DashboardLayoutWrapper>
    </main>
  );
}
