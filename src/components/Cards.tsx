// // Card.tsx
// import React from 'react';

// interface CardProps {
//   service: string;
// }

// const cardData = {
//   "Listing Video": [
//     { id: 1, text: "Card for Listing Video 1" },
//     { id: 2, text: "Card for Listing Video 2" },
//     { id: 3, text: "Card for Listing Video 3" },
//     { id: 4, text: "Card for Listing Video 4" },
//     { id: 5, text: "Card for Listing Video 5" },
//     { id: 6, text: "Card for Listing Video 6" }
//   ],
//   "Listing Flyer": [
//     { id: 1, text: "Card for Listing Flyer 1" },
//     { id: 2, text: "Card for Listing Flyer 2" },
//     { id: 3, text: "Card for Listing Flyer 3" },
//     { id: 4, text: "Card for Listing Flyer 4" },
//     { id: 5, text: "Card for Listing Flyer 5" },
//     { id: 6, text: "Card for Listing Flyer 6" }
//   ],
//   "Photo Banner": [
//     { id: 1, text: "Card for Photo Banner 1" },
//     { id: 2, text: "Card for Photo Banner 2" },
//     { id: 3, text: "Card for Photo Banner 3" },
//     { id: 4, text: "Card for Photo Banner 4" },
//     { id: 5, text: "Card for Photo Banner 5" },
//     { id: 6, text: "Card for Photo Banner 6" }
//   ],
//   "Email Signature": [
//     { id: 1, text: "Card for Email Signature 1" },
//     { id: 2, text: "Card for Email Signature 2" },
//     { id: 3, text: "Card for Email Signature 3" },
//     { id: 4, text: "Card for Email Signature 4" },
//     { id: 5, text: "Card for Email Signature 5" },
//     { id: 6, text: "Card for Email Signature 6" }
//   ],
//   "Logo": [
//     { id: 1, text: "Card for Logo 1" },
//     { id: 2, text: "Card for Logo 2" },
//     { id: 3, text: "Card for Logo 3" },
//     { id: 4, text: "Card for Logo 4" },
//     { id: 5, text: "Card for Logo 5" },
//     { id: 6, text: "Card for Logo 6" }
//   ],
//   "Custom Website": [
//     { id: 1, text: "Card for Custom Website 1" },
//     { id: 2, text: "Card for Custom Website 2" },
//     { id: 3, text: "Card for Custom Website 3" },
//     { id: 4, text: "Card for Custom Website 4" },
//     { id: 5, text: "Card for Custom Website 5" },
//     { id: 6, text: "Card for Custom Website 6" }
//   ],
//   "Landing Page": [
//     { id: 1, text: "Card for Landing Page 1" },
//     { id: 2, text: "Card for Landing Page 2" },
//     { id: 3, text: "Card for Landing Page 3" },
//     { id: 4, text: "Card for Landing Page 4" },
//     { id: 5, text: "Card for Landing Page 5" },
//     { id: 6, text: "Card for Landing Page 6" }
//   ],
//   "Digital Business Card": [
//     { id: 1, text: "Card for Digital Business Card 1" },
//     { id: 2, text: "Card for Digital Business Card 2" },
//     { id: 3, text: "Card for Digital Business Card 3" },
//     { id: 4, text: "Card for Digital Business Card 4" },
//     { id: 5, text: "Card for Digital Business Card 5" },
//     { id: 6, text: "Card for Digital Business Card 6" }
//   ],
  // "Targeted Ad Campaign": [
  //   { id: 1, text: "Card for Targeted Ad Campaign 1" },
  //   { id: 2, text: "Card for Targeted Ad Campaign 2" },
  //   { id: 3, text: "Card for Targeted Ad Campaign 3" },
  //   { id: 4, text: "Card for Targeted Ad Campaign 4" },
  //   { id: 5, text: "Card for Targeted Ad Campaign 5" },
  //   { id: 6, text: "Card for Targeted Ad Campaign 6" }
  // ],
  // "Social Dashboard": [
  //   { id: 1, text: "Card for Social Dashboard 1" },
  //   { id: 2, text: "Card for Social Dashboard 2" },
  //   { id: 3, text: "Card for Social Dashboard 3" },
  //   { id: 4, text: "Card for Social Dashboard 4" },
  //   { id: 5, text: "Card for Social Dashboard 5" },
  //   { id: 6, text: "Card for Social Dashboard 6" }
  // ]
// };

// const Cards: React.FC<CardProps> = ({ service }) => {
//   return (
//     <div className='grid grid-cols-3 gap-x-10 gap-y-12 w-full max-w-[1440px] mx-auto px-4'>
//       {cardData[service].map((card) => (
//         <div key={card.id} className='w-full max-w-md'>
//           <div className={`w-full h-80 flex items-center rounded-2xl justify-center text-white text-2xl font-bold bg-darkIndigo`}>
//             {card.text}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cards;


import React from 'react';
import Image, { StaticImageData } from "next/image";
import flyer1 from "../../public/Services/Listing Flayer/Listing Flayer 1.png";
import flyer2 from "../../public/Services/Listing Flayer/Listing Flayer 2.png";
import flyer3 from "../../public/Services/Listing Flayer/Listing Flayer 3.png";
import video1 from "../../public/Services/Listing Your Real Estate/1.png";
import video2 from "../../public/Services/Listing Your Real Estate/2.png";
import video3 from "../../public/Services/Listing Your Real Estate/3.png";
import demoImg from "../../public/default.jpg";


type ServiceType =
  | "Listing Video"
  | "Listing Flyer"
  | "Photo Banner"
  | "Email Signature"
  | "Logo"
  | "Custom Website"
  | "Landing Page"
  | "Digital Business Card"
  | "Targeted Ad Campaign"
  | "Social Dashboard";

interface CardProps {
  service: ServiceType;
}

const cardData: Record<ServiceType, { id: number; img: StaticImageData }[]> = {
  "Listing Video": [
    { id: 1, img: video1 },
    { id: 2, img: video2 },
    { id: 3, img: video3 },
  ],
  "Listing Flyer": [
    { id: 1, img: flyer1},
    { id: 2, img: flyer2 },
    { id: 3, img: flyer3 },
  ],
  "Photo Banner": [
    { id: 1, img: demoImg},
    { id: 2, img: demoImg },
    { id: 3, img: demoImg },
  ],
  "Email Signature": [
    { id: 1, img: demoImg},
    { id: 2, img: demoImg },
    { id: 3, img: demoImg },
  ],
  "Logo": [
    { id: 1, img: demoImg},
    { id: 2, img: demoImg },
    { id: 3, img: demoImg },
  ],
  "Custom Website": [
    { id: 1, img: demoImg},
    { id: 2, img: demoImg },
    { id: 3, img: demoImg },
  ],
  "Landing Page": [
    { id: 1, img: demoImg},
    { id: 2, img: demoImg },
    { id: 3, img: demoImg },
  ],
  "Digital Business Card": [
    { id: 1, img: demoImg},
    { id: 2, img: demoImg },
    { id: 3, img: demoImg },
  ],
  "Targeted Ad Campaign": [
    { id: 1, img: demoImg},
    { id: 2, img: demoImg },
    { id: 3, img: demoImg },
  ],
  "Social Dashboard": [
    { id: 1, img: demoImg},
    { id: 2, img: demoImg },
    { id: 3, img: demoImg },
  ]
};

const Cards: React.FC<CardProps> = ({ service }) => (
  <div className='grid grid-cols-3 gap-x-10 gap-y-12 w-full max-w-[1440px] mx-auto px-4'>
    {cardData[service].map((card) => (
      <div key={card.id} className='w-full max-w-md'>
        <div className="w-full h-80 flex items-center justify-center">
          <Image src={card.img} alt='Card img' objectFit='fill' />
        </div>
      </div>
    ))}
  </div>
);

export default Cards;
