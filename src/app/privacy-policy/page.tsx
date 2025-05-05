import React from 'react';
import Link from 'next/link';

const PrivacyPolicyPage = () => {
  return (
    <div className='lg:py-16 py-12 max-w-[1440px] mx-auto lg:px-10 px-5 min-h-[calc(100vh-80px)]'>
      <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800">Privacy Policy</h1>
      <div className="flex items-center text-gray-500 mt-2 md:text-lg">
        <Link href="/" className="flex items-center hover:text-blue-600 transition-colors">
          Home
        </Link>
        <span className="mx-2">&gt;</span>
        <span>Privacy Policy</span>
      </div>
      <hr className="mt-5 lg:mb-16 mb-12 border border-gray-300" />

      <p className="text-gray-700 mb-6 md:text-lg">Last Update: April 01, 2024</p>

      <h2 className="lg:text-3xl md:text-2xl text-2xl font-medium text-gray-800 mb-2">Your Privacy Matters</h2>

      <p className="text-gray-700 mb-4 text-justify md:text-lg">
        We are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and protect your personal data when you visit our website or use our services.
      </p>

      <p className="text-gray-700 mb-4 text-justify md:text-lg">
        Information collected may include your name, email, IP address, and other relevant data. We use cookies and other tracking technologies to enhance your browsing experience and analyze usage.
      </p>

      <p className="text-gray-700 mb-4 text-justify md:text-lg">
        We do not sell or rent your information to third parties. However, we may share information with trusted partners to help perform statistical analysis, send email or postal mail, or provide customer support.
      </p>

      <p className="text-gray-700 text-justify md:text-lg">
        You have the right to access, correct, or delete your data at any time. If you have questions about this policy, please contact us directly.
      </p>
    </div>
  );
};

export default PrivacyPolicyPage;
