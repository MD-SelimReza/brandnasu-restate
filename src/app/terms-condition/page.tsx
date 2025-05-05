import React from 'react';
import Link from 'next/link';

const TermsPage = () => {
  return (
    <div className="lg:py-16 py-12 max-w-[1440px] mx-auto lg:px-10 px-5 min-h-[calc(100vh-80px)]">
      <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800">
        Terms and Conditions
      </h1>
      <div className="flex items-center text-gray-500 mt-2 md:text-lg">
        <Link
          href="/"
          className="flex items-center hover:text-blue-600 transition-colors"
        >
          Home
        </Link>
        <span className="mx-2">&gt;</span>
        <span>Terms and conditions</span>
      </div>
      <hr className="mt-5 lg:mb-16 mb-12 border border-gray-300" />

      <p className="text-gray-700 mb-6 md:text-lg">
        Last Update: April 01, 2024
      </p>

      <h2 className="lg:text-3xl md:text-2xl text-2xl font-medium text-gray-800 mb-2">
        General Terms and Conditions
      </h2>

      <p className="text-gray-700 mb-4 text-justify md:text-lg">
        &quot;Cookies&quot; are small compressed text files that allow us to
        save data specifically related to the user&apos;s device while he is
        visiting our website.
      </p>

      <p className="text-gray-700 mb-4 text-justify md:text-lg">
        Please read these General Terms and Conditions carefully. These General
        Terms and Conditions set forth a legally binding and enforceable
        agreement (the “Terms”) between you and 99Designs Pty Ltd, an Australian
        proprietary limited company (“99designs”, “us”, and “we”), governing
        your access and/or use, whether as a Client, Designer, visitor or
        otherwise, of the 99designs website (
        <a href="https://99designs.com" className="text-blue-600 underline">
          https://99designs.com
        </a>
        ) and the correlate local domains (such as, and including,{' '}
        <a href="https://99designs.co.uk" className="text-blue-600 underline">
          https://99designs.co.uk
        </a>
        ) (collectively, the “Site”) and/or the services, features and/or
        functionality available or provided on or through the Site and/or
        Partner Integrations (the “Services”).
      </p>

      <p className="text-gray-700 mb-4 text-justify md:text-lg">
        By accessing and/or using the Site or the Services, you are accepting
        and agreeing, on behalf of yourself or on behalf of your employer (or
        the entity to which you are providing services), if applicable, to be
        bound by and comply with these Terms, and you represent and warrant that
        you are at least 18 years old and have the right, authority, and
        capacity to enter into these Terms. If you do not agree with all of the
        provisions of this Agreement, you cannot use the Site and Services.
      </p>

      <p className="text-gray-700 text-justify md:text-lg">
        Certain features of the Services or Site may be subject to additional
        policies, codes or guidelines (collectively, the “Additional Terms”),
        which are or will be posted on the Service or Site in connection with
        such features and may be amended or updated from time to time.
      </p>
    </div>
  );
};

export default TermsPage;
