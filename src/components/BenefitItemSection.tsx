import React from 'react';
import Image from 'next/image';
import Container from './Container';
import bonus from '../../public/Icons/bonus.svg';
import festival from '../../public/Icons/festival.svg';
import creative from '../../public/Icons/creative.svg';
import coffee from '../../public/Icons/coffee.svg';
import device from '../../public/Icons/device.svg';
import health from '../../public/Icons/health.svg';
import prayer from '../../public/Icons/prayer.svg';
import remote from '../../public/Icons/remote.svg';
import team from '../../public/Icons/team.svg';
import tour from '../../public/Icons/tour.svg';
import loan from '../../public/Icons/loan.svg';
import leave from '../../public/Icons/leave.svg';

interface BenefitItemProps {
  icon: string;
  title: string;
  desc?: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ icon, title, desc }) => {
  return (
    <div className="flex flex-col items-start px-6 py-8 md:px-8 md:py-10">
      <div className="mb-4">
        <Image
          src={icon}
          alt={title}
          width={50}
          height={50}
          className="w-12 h-12 md:w-16 md:h-16 filter-purple"
        />
      </div>
      <h3 className="text-darkIndigo text-lg md:text-2xl font-bold mb-4">
        {title}
      </h3>
      <p className="text-darkGray">{desc}</p>
    </div>
  );
};

const BenefitsItemSection = () => {
  const benefits = [
    {
      icon: remote,
      title: 'Remote Work Freedom',
      desc: "Work from anywhere with full flexibility, your creativity isn't tied to a desk.",
    },
    {
      icon: festival,
      title: 'Two Festival Bonuses',
      desc: 'Celebrate Eid and major festivals with double the joy, and double the bonuses.',
    },
    {
      icon: leave,
      title: 'Generous Leave Benefits',
      desc: 'Enjoy paid time off to recharge, travel, or simply take a breather.',
    },
    {
      icon: device,
      title: 'Device & Internet Allowance',
      desc: 'We support your setup, from your laptop to your high-speed connection.',
    },
    {
      icon: health,
      title: 'Health & Wellness Allowance',
      desc: 'Stay healthy, inside and out, we contribute to your personal well-being.',
    },
    {
      icon: tour,
      title: 'Annual Pleasure Tour',
      desc: 'A yearly getaway with the team, fun, refreshment, and bonding.',
    },
    {
      icon: bonus,
      title: 'Performance Bonuses',
      desc: 'We reward impact, go beyond expectations and get recognized for it.',
    },
    {
      icon: creative,
      title: 'Creative Freedom & Ownership',
      desc: 'Your ideas matter, lead projects, take charge, and create with confidence.',
    },
    {
      icon: team,
      title: 'Supportive, Inclusive Team',
      desc: 'We value respect, diversity, and real collaboration, no egos, just teamwork.',
    },
    {
      icon: loan,
      title: 'Emergency Loan Facilities',
      desc: "In urgent moments, we've got your back with fast, interest-free support.",
    },
    {
      icon: coffee,
      title: 'Coffee & Snacks',
      desc: 'Always stocked, always shared, your daily boost is on us.',
    },
    {
      icon: prayer,
      title: 'Muslim Prayer Zone',
      desc: 'A quiet, dedicated space to reflect, pray, and find peace during the day.',
    },
  ];

  return (
    <section className="bg-darkIndigo py-10">
      <Container>
        <h1
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-duration="400"
          className="text-2xl text-white font-bold mb-6 border-l-4 border-l-indigo pl-2"
        >
          Employee Benefits
        </h1>
        <h3
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-duration="400"
          className="lg:text-4xl text-3xl font-semibold mb-8 text-white"
        >
          We take care of our team, so they can take care of great work.
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-easing="ease"
              data-aos-duration="400"
            >
              <div className="rounded-xl bg-gray100 hover:bg-indigo100 hover:scale-105 transition-scale duration-500">
                <BenefitItem
                  icon={benefit.icon}
                  title={benefit.title}
                  desc={benefit.desc}
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
      <div id="apply-now"></div>
    </section>
  );
};

export default BenefitsItemSection;
