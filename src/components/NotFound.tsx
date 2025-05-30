'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const NotFound = () => {
  const router = useRouter();

  return (
    <section className="bg-white lg:min-h-[calc(100vh-80px)] flex justify-center">
      <div className="mx-auto w-full space-y-24 lg:py-32 md:py-24 py-16 px-5 text-center">
        {/* Illustration */}
        <div className="mx-auto w-full">
          <Image
            className="mx-auto"
            src="https://merakiui.com/images/components/illustration.svg"
            alt="404 Illustration"
            width={250}
            height={250}
          />
        </div>

        {/* Text Section */}
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="mt-3 text-2xl font-semibold text-darkIndigo md:text-3xl">
            Page not found
          </h1>
          <p className="mt-4 text-darkGray">
            Sorry, the page you are looking for doesn&apos;t exist. Here are
            some helpful links:
          </p>

          <div className="flex justify-center items-center mt-6 gap-x-3 w-full">
            {/* Go Back Button */}
            <button
              onClick={() => router.back()}
              className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-darkGray transition-colors duration-300 bg-white border rounded-full gap-x-2 sm:w-auto hover:bg-lightGray"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
              <span>Go back</span>
            </button>

            {/* Home Button */}
            <Link
              href="/"
              className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-indigo rounded-full shrink-0 sm:w-auto hover:bg-darkIndigo"
            >
              Take me home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
