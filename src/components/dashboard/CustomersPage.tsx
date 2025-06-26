'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { FiTrash2 } from 'react-icons/fi';
import { BiUserPlus } from 'react-icons/bi';
import ConfirmDeleteDialog from '../ConfirmDeleteDialog';
import { User, useUsers } from '@/hooks/useUsers';

export default function UserManagement() {
  const { users, loading, error } = useUsers();
  const [currentUsers, setCurrentUsers] = useState<User[]>([]);

  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  useEffect(() => {
    setCurrentUsers(users);
  }, [users]);

  const confirmDelete = (id: string) => {
    setDeleteId(id);
    setShowConfirm(true);
  };

  const handleConfirmDelete = async () => {
    if (!deleteId) return;
    try {
      await axios.delete(`/api/user/${deleteId}`);
      setCurrentUsers((prev) => prev.filter((p) => p._id !== deleteId));
    } finally {
      setShowConfirm(false);
      setDeleteId(null);
    }
  };

  const handleRoleChange = async (id: string, newRole: string) => {
    try {
      await axios.patch(`/api/user/${id}`, { id, role: newRole });
      setCurrentUsers((prev) =>
        prev.map((u) => (u._id === id ? { ...u, role: newRole } : u))
      );
    } catch (error) {
      console.error('Failed to update role:', error);
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500 text-lg">Loading users...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-red-500 text-lg">Error loading users: {error}</p>
      </div>
    );

  if (currentUsers.length === 0)
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 text-lg">No users found.</p>
      </div>
    );

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="max-w-full p-6">
        <div className="flex justify-between items-center px-4 border-x border-t rounded-t-lg border-gray-200">
          <h1 className="text-3xl font-bold py-5">User Management</h1>
          <Link href="/dashboard/add-user">
            <button className="flex items-center gap-2 bg-indigo text-white font-medium py-2.5 px-5 rounded-md hover:bg-darkIndigo transition">
              <BiUserPlus size={20} /> Add User
            </button>
          </Link>
        </div>

        <div className="overflow-x-auto rounded-b-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Photo
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Name
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Email
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Role
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentUsers.map((user) => {
                const isProtectedUser = user.email === 'suvas@brandnasu.com';

                return (
                  <tr key={user._id}>
                    <td className="px-4 py-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border">
                        <Image
                          src={user.image || 'https://i.pravatar.cc/40?img=32'}
                          alt={user.first_name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">
                      {user.first_name} {user.last_name}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {user.email}
                    </td>
                    <td className="px-4 py-3">
                      <select
                        value={user.role || 'user'}
                        onChange={(e) =>
                          handleRoleChange(user._id, e.target.value)
                        }
                        className="border border-gray-300 rounded-md px-2 py-1 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed"
                        disabled={isProtectedUser}
                      >
                        <option value="admin">Admin</option>
                        <option value="superadmin">Super Admin</option>
                      </select>
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => confirmDelete(user._id)}
                        className="flex items-center justify-center py-1.5 px-2 rounded-md bg-gray-100 text-red-600 hover:bg-red-100 border disabled:opacity-60 disabled:cursor-not-allowed"
                        title="Delete"
                        // disabled={isProtectedUser}
                      >
                        <FiTrash2 className="text-lg" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <ConfirmDeleteDialog
        isOpen={showConfirm}
        onCancel={() => setShowConfirm(false)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}
