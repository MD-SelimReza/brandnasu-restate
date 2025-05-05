'use client';

import Image from 'next/image';
import React from 'react';

import team from '../../public/Icons/home-team.svg';
import balance from '../../public/Icons/balance.svg';
import culture from '../../public/Icons/culture.svg';
import impact from '../../public/Icons/impact.svg';
import personal from '../../public/Icons/personal-growth.svg';
import thinking from '../../public/Icons/thinking.svg';

const benefits = [
  {
    icon: impact,
    title: 'Real Impact, Every Day',
    description:
      'Your work directly shapes brands and businesses. Here, what you do matters, and it shows.',
  },
  {
    icon: thinking,
    title: 'Freedom to Think & Create',
    description:
      'No micromanaging. We trust your process and give you the space to innovate fearlessly.',
  },
  {
    icon: team,
    title: 'A Team That Feels Like Home',
    description:
      "Work with people who care, collaborate openly, and celebrate each other's wins.",
  },
  {
    icon: personal,
    title: "Growth That's Personal",
    description:
      'From mentorship to real challenges, we help you level up in skills and confidence.',
  },
  {
    icon: culture,
    title: 'Culture of Care & Respect',
    description:
      'We value you as a person, not just a professional. Respect and support are non-negotiable here.',
  },
  {
    icon: balance,
    title: 'Balance That Works for You',
    description:
      'With remote options, flexible hours, and wellness perks, your life comes first, always.',
  },
];

const TeamBenefits = () => {
  return (
    <section className="relative bg-white xl:py-36 py-20 text-darkIndigo px-5 overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-10">
        <div className="xl:w-1/4 lg:w-1/3">
          <h1 className="text-2xl text-darkIndigo font-bold mb-6 border-l-4 border-l-indigo pl-2">
            Being Our Teammate
          </h1>
          <h3 className="text-3xl md:text-5xl xl:!leading-[57px] font-semibold mb-8 text-darkIndigo">
            Where Your Talent Meets Belonging
          </h3>
        </div>
        <div className="relative z-10 flex flex-col items-end xl:w-3/4 lg:w-2/3">
          <div className="grid md:grid-cols-2 gird-cols-1 gap-6 md:gap-0">
            {benefits.map((item, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-start rounded-xl px-6 py-8 md:px-8 md:py-10 ${
                  idx === 0 || idx === 3 || idx === 4
                    ? 'hover:bg-indigo100 bg-gray100'
                    : 'bg-gray100 hover:bg-indigo100 md:bg-transparent md:hover:bg-transparent'
                } ${idx === 0 ? 'md:rounded-br-none' : ''} ${
                  idx === 3 ? 'md:rounded-l-none' : ''
                }${idx === 4 ? 'md:rounded-tr-none' : ''}`}
              >
                <div className="mb-4">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={50}
                    height={50}
                    className="w-12 h-12 md:w-16 md:h-16"
                  />
                </div>
                <h3 className="text-lg md:text-2xl font-bold mb-4">
                  {item.title}
                </h3>
                <p className="text-darkGray">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamBenefits;
