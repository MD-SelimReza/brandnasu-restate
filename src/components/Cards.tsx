import React from 'react';
import Image, { StaticImageData } from 'next/image';
import flyer1 from '../../public/Services/Listing Flayer/Listing Flayer 1.png';
import flyer2 from '../../public/Services/Listing Flayer/Listing Flayer 2.png';
import flyer3 from '../../public/Services/Listing Flayer/Listing Flayer 3.png';
import video1 from '../../public/Services/Listing Your Real Estate/1.png';
import video2 from '../../public/Services/Listing Your Real Estate/2.png';
import video3 from '../../public/Services/Listing Your Real Estate/3.png';
import demoImg from '../../public/default.jpg';

type ServiceType =
  | 'Listing Video'
  | 'Listing Flyer'
  | 'Photo Banner'
  | 'Email Signature'
  | 'Logo'
  | 'Custom Website'
  | 'Landing Page'
  | 'Digital Business Card'
  | 'Targeted Ad Campaign'
  | 'Social Dashboard';

interface CardProps {
  service: ServiceType;
}

const cardData: Record<ServiceType, { id: number; img: StaticImageData }[]> = {
  'Listing Video': [
    { id: 1, img: video1 },
    { id: 2, img: video2 },
    { id: 3, img: video3 },
  ],
  'Listing Flyer': [
    { id: 1, img: flyer1 },
    { id: 2, img: flyer2 },
    { id: 3, img: flyer3 },
  ],
  'Photo Banner': [
    { id: 1, img: demoImg },
    { id: 2, img: demoImg },
    { id: 3, img: demoImg },
  ],
  'Email Signature': [
    { id: 1, img: demoImg },
    { id: 2, img: demoImg },
    { id: 3, img: demoImg },
  ],
  Logo: [
    { id: 1, img: demoImg },
    { id: 2, img: demoImg },
    { id: 3, img: demoImg },
  ],
  'Custom Website': [
    { id: 1, img: demoImg },
    { id: 2, img: demoImg },
    { id: 3, img: demoImg },
  ],
  'Landing Page': [
    { id: 1, img: demoImg },
    { id: 2, img: demoImg },
    { id: 3, img: demoImg },
  ],
  'Digital Business Card': [
    { id: 1, img: demoImg },
    { id: 2, img: demoImg },
    { id: 3, img: demoImg },
  ],
  'Targeted Ad Campaign': [
    { id: 1, img: demoImg },
    { id: 2, img: demoImg },
    { id: 3, img: demoImg },
  ],
  'Social Dashboard': [
    { id: 1, img: demoImg },
    { id: 2, img: demoImg },
    { id: 3, img: demoImg },
  ],
};

const Cards: React.FC<CardProps> = ({ service }) => (
  <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 lg:gap-x-10 md:gap-x-6 gap-x-4 gap-y-6 lg:gap-y-12 w-full max-w-[1440px] mx-auto px-">
    {cardData[service].map((card) => (
      <div key={card.id} className="w-full">
        <div className="w-full h-full flex items-center justify-center shadow rounded-xl">
          <Image
            src={card.img}
            alt="Card img"
            objectFit="fill"
            className="rounded-xl"
          />
        </div>
      </div>
    ))}
  </div>
);

export default Cards;
