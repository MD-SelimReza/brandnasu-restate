'use client';

import Image from 'next/image';
const demoImages = [
  'https://randomuser.me/api/portraits/men/32.jpg',
  'https://randomuser.me/api/portraits/women/44.jpg',
  'https://randomuser.me/api/portraits/men/52.jpg',
];

const Subscription = () => {
  return (
    <nav className="sticky top-32 md:w-72 space-y-5">
      <div className="space-y-4 bg-indigo p-5 w-full">
        <h2 className="text-2xl font-bold text-white">
          UI UX design Inspiration right in your inbox
        </h2>
        <div className="space-y-3">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
            className="p-3 rounded w-full"
          />
          <button className="p-3 rounded bg-lightIndigo w-full text-lg">
            Subscription
          </button>
        </div>
        <p className="text-sm text-lightIndigo">
          By entering your email, you are agreeing to our{' '}
          <a href="#" className="underline underline-offset-2">
            privacy policy
          </a>
          .
        </p>
      </div>
      <div className="space-y-6 bg-darkIndigo p-6 w-full">
        <div className="flex items-center">
          {demoImages.map((src, idx) => (
            <div
              key={idx}
              className="border border-white/[.2] rounded-full flex justify-center items-center"
              style={{
                transform: `translateX(-${15 * idx + 2}px)`,
              }}
            >
              <Image
                src={src}
                alt={`Profile ${idx + 1}`}
                width={50}
                height={50}
                className="rounded-full border-2 border-white shadow-md"
              />
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-bold text-white pr-4">
          Find The Right LOGO Design Services for You
        </h2>
        <button className="py-3 px-6 rounded-full bg-lightIndigo">
          Let&apos;s talk
        </button>
      </div>
    </nav>
  );
};

export default Subscription;
