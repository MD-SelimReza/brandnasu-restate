import React from 'react';
import member1 from '../../public/member1.svg';
import member2 from '../../public/member2.svg';
import member3 from '../../public/member3.svg';
import member4 from '../../public/member4.svg';

const MemberShip = () => {
  return (
    <section className="lg:py-16 bg-darkIndigo">
      <div className="text-center">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl lg:!leading-[57px] font-bold text-white lg:max-w-5xl md:px-14 mx-auto lg:mb-20 md:mb-16 mb-10">
          Benefits of Membership with BrandNasu
        </h2>

        <div className="grid lg:grid-cols-3 md:grid-cols-4 grid-cols-1 xl:gap-10 gap-6 text-left">
          {/* 1. Brand Presence */}
          <div
            className="md:col-span-2 bg-indigo rounded-2xl lg:pt-8 pt-6 lg:pl-8 pl-6 pb-6 bg-no-repeat bg-right-bottom xl:bg-[length:auto_85%] lg:bg-[length:40%_auto] bg-[length:50%_auto]"
            style={{
              backgroundImage: `url(${member1.src})`,
            }}
          >
            <h3 className="xl:text-5xl md:text-4xl text-3xl lg:max-w-sm font-medium xl:!leading-[57px] text-white lg:mb-8 mb-6 pr-6">
              Consistent Brand Presence
            </h3>
            <p className="text-lightIndigo text-lg font-light xl:max-w-xl lg:max-w-sm max-w-44">
              Stay active and relevant with regular content, design, and brand
              updates tailored for real estate professionals.
            </p>
          </div>

          {/* 2. Priority Support */}
          <div
            className="md:col-span-2 lg:col-span-1 bg-indigo100 rounded-2xl lg:pt-8 pt-6 lg:pl-8 pl-6 pb-6 bg-no-repeat bg-right-bottom bg-[length:45%_auto]"
            style={{
              backgroundImage: `url(${member2.src})`,
            }}
          >
            <h3 className="xl:text-5xl md:text-4xl text-3xl font-medium xl:!leading-[57px] text-darkIndigo lg:mb-8 mb-6 pr-6">
              Priority Support
            </h3>
            <p className="text-darkGray text-lg font-light max-w-44 lg:max-w-[165px]">
              Members get faster turnaround, dedicated communication, and
              priority treatment on all service requests.
            </p>
          </div>

          {/* 3. Creative Assets */}
          <div
            className="md:col-span-2 lg:col-span-1 bg-lightIndigo rounded-2xl lg:pt-8 pt-6 lg:pl-8 pl-6 pb-6 bg-no-repeat bg-right-bottom bg-[length:55%_auto]"
            style={{
              backgroundImage: `url(${member3.src})`,
            }}
          >
            <h3 className="xl:text-5xl md:text-4xl text-3xl font-medium xl:!leading-[57px] tracking-tight text-darkIndigo mb-6 pr-6">
              Ongoing Creative Assets
            </h3>
            <p className="text-darkGray text-lg font-light max-w-44">
              From social media designs to marketing materials — enjoy a steady
              flow of fresh visuals and branding assets.
            </p>
          </div>

          {/* 4. Scalable Strategy */}
          <div
            className="md:col-span-2 bg-[#FFA423] rounded-2xl lg:pt-8 pt-6 lg:pl-8 pl-6 pb-6 bg-no-repeat bg-right-bottom xl:bg-[length:auto_75%] lg:bg-[length:auto_50%] md:bg-[length:auto_40%] bg-[length:auto_45%]"
            style={{
              backgroundImage: `url(${member4.src})`,
            }}
          >
            <h3 className="xl:text-5xl md:text-4xl text-3xl font-medium xl:!leading-[57px] text-white lg:mb-8 mb-6 pr-6 lg:max-w-md">
              Scalable Strategy & Guidance
            </h3>
            <p className="text-white text-lg font-light xl:max-w-md lg:max-w-sm max-w-44">
              As your real estate brand grows, we guide you with data-driven
              strategy and creative direction to scale smartly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberShip;
