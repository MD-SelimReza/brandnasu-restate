'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { FiEdit2, FiLogOut, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { signOut } from 'next-auth/react';
import BarLoader from '@/components/ui/BarLoader';

interface User {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  location?: string;
  image?: string;
}

const UserPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      if (!id) return;

      try {
        const response = await axios.get(`/api/user/${id}`);
        setUser(response.data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.message || 'Failed to load user');
        } else {
          setError('Failed to load user');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center mt-40">
        <BarLoader />
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className="text-center mt-40 text-red-600 font-semibold">
        {error || 'User not found'}
      </div>
    );
  }

  return (
    <div className="bg-gray100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl w-full max-w-3xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo via-purple-500 to-pink-500 h-40 relative">
          <div className="absolute inset-0 bg-black opacity-20" />
          <div className="absolute left-1/2 top-24 transform -translate-x-1/2 w-32 h-32 bg-white rounded-full flex items-center justify-center overflow-hidden">
            {user.image ? (
              <Image
                src={user.image}
                alt="User Avatar"
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            ) : (
              <FaUserCircle className="text-gray-300 text-7xl" />
            )}
          </div>
        </div>

        {/* User Info */}
        <div className="pt-20 pb-10 px-6 text-center">
          <h2 className="text-2xl font-semibold text-darkIndigo">
            {user.first_name} {user.last_name}
          </h2>
          <p className="text-gray500 text-sm mt-1">{user.location}</p>

          <div className="mt-6 flex justify-center gap-4">
            <Link href={`/dashboard/update-user/${user._id}`}>
              <button className="flex items-center gap-2 bg-indigo text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-darkIndigo transition">
                <FiEdit2 /> Update Profile
              </button>
            </Link>
            <button
              onClick={() => signOut()}
              className="flex items-center gap-2 bg-red-500 text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-red-600 transition"
            >
              <FiLogOut /> Logout
            </button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t p-6 bg-gray50 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-darkGray">
          <div className="flex items-center gap-3">
            <FiMail className="text-darkIndigo" size={18} />
            <span>{user.email}</span>
          </div>
          <div className="flex items-center gap-3">
            <FiPhone className="text-darkIndigo" size={18} />
            <span>{user.phone || 'N/A'}</span>
          </div>
          <div className="flex items-center gap-3 md:col-span-2">
            <FiMapPin className="text-darkIndigo" size={18} />
            <span>{user.location || 'No location set'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
