'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiCopy,
  FiCheck,
} from 'react-icons/fi';

interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

const AddUserPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setServerError('');

    try {
      const res = await axios.post('/api/user/create-magic-link', data);
      setGeneratedLink(res.data.loginLink);
    } catch (error) {
      let errMsg = 'Failed to create user. Try again.';

      if (axios.isAxiosError(error)) {
        errMsg = error.response?.data?.message || errMsg;
      } else if (error instanceof Error) {
        errMsg = error.message;
      }

      setServerError(errMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-20 flex items-center justify-center px-4 text-black">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <h2 className="text-2xl font-bold text-left text-gray-800">
          Add New User
        </h2>
        <p className="text-left text-sm text-gray-500 mt-1">
          Enter user details to create account & generate login link
        </p>

        {serverError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded">
            {serverError}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="text-sm text-gray-600 mb-1 block">
              First Name
            </label>
            <input
              type="text"
              {...register('first_name', {
                required: 'First name is required',
              })}
              className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.first_name && (
              <p className="text-xs text-red-500 mt-1">
                {errors.first_name.message}
              </p>
            )}
          </div>

          <div>
            <label className="text-sm text-gray-600 mb-1 block">
              Last Name
            </label>
            <input
              type="text"
              {...register('last_name', { required: 'Last name is required' })}
              className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.last_name && (
              <p className="text-xs text-red-500 mt-1">
                {errors.last_name.message}
              </p>
            )}
          </div>

          <div>
            <label className="text-sm text-gray-600 mb-1 block">Email</label>
            <div className="relative">
              <input
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Enter a valid email',
                  },
                })}
                className="w-full border rounded-lg px-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="text-sm text-gray-600 mb-1 block">Password</label>
            <div className="relative">
              <input
                type={passwordVisible ? 'text' : 'password'}
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 8,
                    message: 'At least 8 characters required',
                  },
                })}
                className="w-full border rounded-lg px-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
              >
                {passwordVisible ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
            {errors.password && (
              <p className="text-xs text-red-500 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full ${
              loading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-indigo hover:bg-darkIndigo'
            } text-white rounded-md py-2 text-sm font-semibold cursor-pointer transition duration-300`}
          >
            {loading ? 'Creating...' : 'Create & Generate Link'}
          </button>
        </form>

        {generatedLink && (
          <div className="bg-green-50 border border-green-400 rounded-md p-4 mt-4">
            <p className="text-sm text-gray-800 mb-2 font-medium">
              Temporary Login Link (valid for 1 hour):
            </p>
            <div className="flex items-center gap-2">
              <input
                readOnly
                value={generatedLink}
                className="flex-1 px-3 py-2 border rounded text-sm text-gray-600 bg-white"
              />
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-1 bg-indigo text-white text-sm px-3 py-2 rounded hover:bg-darkIndigo transition"
              >
                {copied ? (
                  <>
                    <FiCheck size={20} className="text-white" />
                  </>
                ) : (
                  <>
                    <FiCopy size={20} className="text-white" />
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddUserPage;
