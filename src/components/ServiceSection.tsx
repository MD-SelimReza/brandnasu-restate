import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';

const ServiceCard = ({
  title,
  description,
  href,
  icon,
}: {
  title: string;
  description: string;
  href: string;
  icon: string;
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#F7F7F7] hover:bg-violet-100 transition p-4 rounded-lg flex flex-col justify-between group"
  >
    <div className="flex items-start gap-2 text-darkIndigo">
      <Image
        loading="eager"
        src={icon}
        alt="Service icon"
        width={20}
        height={20}
      />
      <div>
        <h3 className="font-semibold flex items-center gap-2">
          {title}
          <FaArrowRightLong
            size={16}
            className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
          />
        </h3>
        <p className="text-xs text-darkGray mt-2">{description}</p>
      </div>
    </div>
  </Link>
);

export const ServicesSection = ({
  services,
}: {
  services: {
    title: string;
    description: string;
    href: string;
    icon: string;
  }[];
}) => (
  <div className="grid grid-cols-1 gap-5">
    {services.map((service, idx) => (
      <ServiceCard key={idx} {...service} />
    ))}
  </div>
);
