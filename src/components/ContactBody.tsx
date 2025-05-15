import React from 'react';

const ContactBody = () => {
  return (
    <div className="bg-white lg:py-32 md:py-24 py-16">
      <div className="max-w-[1440px] mx-auto px-5">
        <h1 className="text-3xl md:text-4xl lg:text-4xl lg:!leading-[43px] font-bold text-darkIndigo mb-16">
          We listen deeply, plan smartly, and execute with care, ensuring every
          project reflects true value.
        </h1>

        <video
          src="/office-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto bg-black/70"
        />
      </div>
    </div>
  );
};

export default ContactBody;
