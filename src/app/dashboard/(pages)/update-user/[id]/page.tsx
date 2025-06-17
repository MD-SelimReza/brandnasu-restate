'use client';

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useRouter } from 'next/navigation';
import { FiArrowLeft, FiSave, FiCamera } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import axios from 'axios';
import Image from 'next/image';
import { imageUpload } from '@/lib/imageUpload';
import { toast } from 'react-toastify';
import BarLoader from '@/components/ui/BarLoader';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

type User = {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  location?: string;
  image?: string;
  role?: string;
  currentPassword?: string;
  newPassword?: string;
};

const UpdateUserPage = () => {
  const router = useRouter();
  const params = useParams();
  const userId = params.id as string;

  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<User>({
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      location: '',
      image: '',
    },
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(`/api/user/${userId}`);
        const user = res.data;

        reset(user);
        setPreviewImage(user.image || null);
      } catch {
        toast.error('Failed to load profile');
      } finally {
        setIsLoading(false);
      }
    };

    if (userId) {
      fetchProfile();
    }
  }, [reset, userId]);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const url = await imageUpload(file);
        setPreviewImage(url);
        setValue('image', url);
      } catch (error) {
        toast.error(
          `Image upload failed: ${
            error instanceof Error ? error.message : 'Unknown error'
          }`
        );
      }
    }
  };

  const onSubmit = async (data: User) => {
    setPasswordError(null);

    if (
      (data.currentPassword && !data.newPassword) ||
      (!data.currentPassword && data.newPassword)
    ) {
      setPasswordError(
        'Please provide both current and new passwords to update.'
      );
      return;
    }

    try {
      await axios.patch(`/api/user/${userId}`, data);
      toast.success('Profile updated successfully!');
    } catch (err) {
      let errorMsg = 'Unknown error';

      if (axios.isAxiosError(err)) {
        errorMsg = err.response?.data?.message || 'Unknown error';
      } else if (err instanceof Error) {
        errorMsg = err.message;
      }

      if (errorMsg.toLowerCase().includes('current password')) {
        setPasswordError('Current password is incorrect.');
      } else {
        toast.error(`Update failed: ${errorMsg}`);
      }
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center mt-40">
        <BarLoader />
      </div>
    );
  }

  return (
    <div className="bg-gray100 flex items-center justify-center p-4 text-darkGray">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-3xl overflow-hidden">
        <div className="bg-gradient-to-r from-indigo via-purple-500 to-pink-500 h-40 relative">
          <div className="absolute inset-0 bg-black opacity-20" />
          <button
            onClick={() => router.back()}
            className="absolute left-4 top-4 flex items-center gap-1 text-white hover:text-gray300 text-sm"
          >
            <FiArrowLeft /> Back
          </button>

          <div className="absolute left-1/2 top-24 transform -translate-x-1/2 w-32 h-32 bg-lightIndigo rounded-full flex items-center justify-center shadow overflow-hidden">
            {previewImage ? (
              <Image
                src={previewImage}
                alt="Avatar"
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            ) : (
              <FaUserCircle className="text-gray400 text-7xl" />
            )}
            <label
              htmlFor="avatarUpload"
              className="absolute bottom-2 right-2 bg-indigo hover:bg-darkIndigo text-white p-2 rounded-full cursor-pointer"
            >
              <FiCamera size={16} />
            </label>
            <input
              id="avatarUpload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: 'First Name', name: 'first_name', required: true },
              { label: 'Last Name', name: 'last_name', required: true },
              { label: 'Email', name: 'email', type: 'email', required: true },
              { label: 'Phone', name: 'phone' },
              { label: 'Location', name: 'location', fullWidth: true },
            ].map(
              ({ label, name, type = 'text', required, fullWidth }, idx) => (
                <div key={idx} className={fullWidth ? 'md:col-span-2' : ''}>
                  <label className="block text-sm text-gray600 mb-1">
                    {label}
                  </label>
                  <input
                    type={type}
                    {...register(
                      name as keyof User,
                      required ? { required: `${label} is required` } : {}
                    )}
                    className={`w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 ${
                      errors[name as keyof User]
                        ? 'border-red-500 focus:ring-red-500'
                        : 'focus:ring-indigo'
                    }`}
                  />
                  {errors[name as keyof User] && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors[name as keyof User]?.message as string}
                    </p>
                  )}
                </div>
              )
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <label className="block text-sm text-gray600 mb-1">
                Current Password
              </label>
              <input
                type={showCurrentPassword ? 'text' : 'password'}
                {...register('currentPassword')}
                className={`w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 ${
                  passwordError
                    ? 'border-red-500 focus:ring-red-500'
                    : 'focus:ring-indigo'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowCurrentPassword((prev) => !prev)}
                className="absolute top-9 right-3 text-xs text-indigo hover:underline"
              >
                {showCurrentPassword ? (
                  <AiOutlineEyeInvisible size={20} />
                ) : (
                  <AiOutlineEye size={20} />
                )}
              </button>
              {passwordError && (
                <p className="text-red-500 text-xs mt-1">{passwordError}</p>
              )}
            </div>

            <div className="relative">
              <label className="block text-sm text-gray600 mb-1">
                New Password
              </label>
              <input
                type={showNewPassword ? 'text' : 'password'}
                {...register('newPassword')}
                className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo"
              />
              <button
                type="button"
                onClick={() => setShowNewPassword((prev) => !prev)}
                className="absolute top-9 right-3 text-xs text-indigo hover:underline"
              >
                {showNewPassword ? (
                  <AiOutlineEyeInvisible size={20} />
                ) : (
                  <AiOutlineEye size={20} />
                )}
              </button>
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={() => router.back()}
              className="flex items-center gap-2 bg-red-500 text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-red-600 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm text-white ${
                isSubmitting
                  ? 'bg-indigo/50 cursor-not-allowed'
                  : 'bg-indigo hover:bg-darkIndigo'
              }`}
            >
              <FiSave />
              {isSubmitting ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateUserPage;
