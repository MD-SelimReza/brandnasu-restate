'use client';

import { useEffect, useState } from 'react';
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User,
} from 'firebase/auth';
import { auth, provider } from '@/lib/firebase';
import { FiLogOut, FiUserCheck } from 'react-icons/fi';
import { MdAdminPanelSettings } from 'react-icons/md';
import Link from 'next/link';
import Image from 'next/image';

const ADMIN_EMAILS = ['rezaselim405@gmail.com', 'suvas@brandnasu.com'];

const GoogleAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  const isAdmin = ADMIN_EMAILS.includes(user?.email ?? '');

  return (
    <div className="max-w-md mx-auto flex flex-col items-center space-y-6 p-6 border border-gray-200 rounded-md shadow-sm">
      {user ? (
        <>
          <div className="flex items-center">
            <Image
              src={user.photoURL || '/default-avatar.png'}
              alt="Profile"
              width={60}
              height={60}
              className="rounded-full border"
            />
          </div>

          <div className="text-gray-700 font-medium text-xl">
            {user.displayName}
          </div>

          <div className="flex gap-6">
            {isAdmin && (
              <Link
                href="/admin/projects"
                className="flex items-center gap-2 px-4 py-1.5 text-darkIndigo bg-gray-200 rounded hover:bg-gray-300 transition"
              >
                <MdAdminPanelSettings /> Admin Panel
              </Link>
            )}

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-1.5 text-red-600 border border-red-200 rounded hover:bg-red-50 transition"
            >
              <FiLogOut /> Logout
            </button>
          </div>
        </>
      ) : (
        <button
          onClick={handleLogin}
          className="flex items-center gap-2 px-4 py-2 text-gray-800 border border-gray-300 rounded hover:bg-gray-100 transition"
        >
          <FiUserCheck /> Sign in with Google
        </button>
      )}
    </div>
  );
};

export default GoogleAuth;
