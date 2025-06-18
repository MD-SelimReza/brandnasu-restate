'use client';

import { useSessionUser } from '@/hooks/useSessionUser';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import BarLoader from '../ui/BarLoader';
import logo from '../../../public/Logo/light-logo.svg';

const DashboardLayoutWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, loading } = useSessionUser();
  const pathname = usePathname();

  if (loading) {
    return (
      <div className="h-screen p-6 bg-gray100">
        <BarLoader />
      </div>
    );
  }

  const isActive = (path: string) => pathname === path;

  const getNavLinkClass = (path: string) =>
    `block py-2 px-4 rounded ${
      isActive(path)
        ? 'bg-indigo100 text-darkIndigo font-medium'
        : 'text-lightIndigo hover:text-darkIndigo hover:bg-indigo100'
    }`;

  return (
    <div className="flex min-h-screen bg-gray100 w-full max-w-[1920px] mx-auto">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:sticky top-0 left-0 h-screen sm:max-w-64 w-full bg-darkIndigo z-40 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <div className="flex justify-between items-center px-5 pt-6 pb-4 border-b-[0.1px] border-b-lightIndigo/25">
          <Link href={'/'}>
            <div className="flex items-center py-1">
              <Image src={logo} alt="Shop Logo" width={120} height={120} />
            </div>
          </Link>
          <button
            className="md:hidden text-darkGray text-2xl cursor-pointer"
            onClick={() => setSidebarOpen(false)}
          >
            <AiOutlineClose />
          </button>
        </div>

        <div className="flex items-center space-x-4 ml-auto mt-6 px-6">
          <Link href={'/dashboard/my-account'} className="relative w-10 h-10">
            <Image
              src={
                user?.image ? user?.image : 'https://i.pravatar.cc/40?img=32'
              }
              alt="Profile"
              layout="fill"
              className="rounded-full border-2 border-lightIndigo object-cover"
            />
          </Link>
          <span className="text-lightIndigo hidden sm:block capitalize text-center">
            {user?.first_name} {user?.last_name}
          </span>
        </div>

        <nav className="mt-6 space-y-2 px-2">
          {/* Dashboard - All roles */}
          <Link
            href="/dashboard"
            onClick={() => setSidebarOpen(false)}
            className={getNavLinkClass('/dashboard')}
          >
            Dashboard
          </Link>

          {/* SuperAdmin & Admin: Can view Projects */}
          {(user?.role === 'superadmin' || user?.role === 'admin') && (
            <Link
              href="/dashboard/projects"
              onClick={() => setSidebarOpen(false)}
              className={getNavLinkClass('/dashboard/projects')}
            >
              Projects
            </Link>
          )}

          {/* SuperAdmin only: Can view Users */}
          {user?.role === 'superadmin' && (
            <Link
              href="/dashboard/users"
              onClick={() => setSidebarOpen(false)}
              className={getNavLinkClass('/dashboard/users')}
            >
              Users
            </Link>
          )}

          {/* User & SuperAdmin: Support route */}
          {/* {(user?.role === 'user' || user?.role === 'superadmin') && ( */}
          <Link
            href="/dashboard/support"
            onClick={() => setSidebarOpen(false)}
            className={getNavLinkClass('/dashboard/support')}
          >
            Support
          </Link>
          {/* // )} */}

          {/* All roles: My Account */}
          <Link
            href="/dashboard/my-account"
            onClick={() => setSidebarOpen(false)}
            className={getNavLinkClass('/dashboard/my-account')}
          >
            My Account
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header for Mobile */}
        <header className="lg:hidden flex items-center justify-between bg-white px-4 py-5 sticky top-0 z-20">
          <div className="flex items-center space-x-3 md:hidden">
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-2xl text-darkGray cursor-pointer"
            >
              <FiMenu />
            </button>
            <Link href={'/'}>
              <div className="flex items-center py-1">
                <Image src={logo} alt="Shop Logo" width={100} height={100} />
              </div>
            </Link>
          </div>
          <div className="flex items-center space-x-4 ml-auto">
            <span className="text-darkGray text-sm hidden sm:block">
              Hello, {user?.first_name}
            </span>
            <Link href={'/dashboard/my-account'} className="relative w-10 h-10">
              <Image
                src={
                  user?.image ? user?.image : 'https://i.pravatar.cc/40?img=32'
                }
                alt="Profile"
                layout="fill"
                className="rounded-full border-2 border-indigo object-cover"
              />
            </Link>
          </div>
        </header>

        {/* Dashboard Body */}
        <main className="px-4 md:px-6 space-y-6 flex-1 max-w-dvw">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayoutWrapper;
