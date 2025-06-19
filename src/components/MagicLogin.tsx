'use client';

import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import axios from 'axios';
import { signIn } from 'next-auth/react';

export default function MagicLogin() {
  const params = useSearchParams();
  const router = useRouter();
  const token = params.get('token');

  const [serverError, setServerError] = useState('');
  const [verifying, setVerifying] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleVerify = async () => {
    if (!token) {
      setServerError('No token found');
      return;
    }

    setVerifying(true);
    setServerError('');
    try {
      const res = await axios.post('/api/user/verify-magic-link', { token });
      const email = res.data.email;

      const signInRes = await signIn('credentials', {
        redirect: false,
        email,
        magic: 'true',
      });

      if (signInRes?.ok) {
        setSuccessMessage('Login successful! Redirecting...');
        router.push('/dashboard');
      } else {
        setServerError('Magic login failed.');
      }
    } catch (err) {
      console.error(err);
      setServerError('Invalid or expired magic link.');
    } finally {
      setVerifying(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 text-black">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-2xl font-bold text-left text-gray-800">Login</h2>
          <p className="text-left text-sm text-gray-500 mt-1">
            Use a magic link or your credentials
          </p>
        </div>

        {/* Messages */}
        {serverError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded">
            {serverError}
          </div>
        )}
        {successMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded">
            {successMessage}
          </div>
        )}

        {/* Accept Button */}
        {token && !successMessage && (
          <button
            onClick={handleVerify}
            disabled={verifying}
            className="w-full bg-indigo text-white font-semibold py-2 px-4 rounded-md hover:bg-darkIndigo transition disabled:opacity-50"
          >
            {verifying ? 'Verifying...' : 'Accept Credentials'}
          </button>
        )}
      </div>
    </div>
  );
}
