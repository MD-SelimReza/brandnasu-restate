import Image, { StaticImageData } from "next/image";
import React from "react";
import D1 from "../../public/D1.png";
import D2 from "../../public/D2.png";
import D3 from "../../public/D3.png";
import W1 from "../../public/W1.png";
import W2 from "../../public/W2.png";
import W3 from "../../public/W3.png";
import S1 from "../../public/S1.png";
import S2 from "../../public/S2.png";
import S3 from "../../public/S3.png";

// Define the structure of the cards object
type BannerKey = "Banner One" | "Banner Two" | "Banner Three";

interface CardItem {
  id: number;
  img: StaticImageData;
}

const cards: Record<BannerKey, CardItem[]> = {
  "Banner One": [
    { id: 1, img: D1 },
    { id: 2, img: D2 },
    { id: 3, img: D3 },
  ],
  "Banner Two": [
    { id: 1, img: W1 },
    { id: 2, img: W2 },
    { id: 3, img: W3 },
  ],
  "Banner Three": [
    { id: 1, img: S1 },
    { id: 2, img: S2 },
    { id: 3, img: S3 },
  ],
};

interface CardProps {
  banner: BannerKey;
}

const Card: React.FC<CardProps> = ({ banner }) => {
  return (
    <div className="flex items-center justify-center xl:gap-x-10 md:gap-x-8 gap-x-4 w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 xl:px-0">
      {cards[banner].map((card) => (
        <div key={card.id} className="w-full">
          <Image src={card.img} alt="Card img" loading="lazy" />
        </div>
      ))}
    </div>
  );
};

export default Card;




// export const ExampleCard = () => {
//   return (
//     <div className="p-6 bg-darkIndigo text-lightIndigo rounded-2xl shadow-soft animate-fadeIn w-80">
//       <h2 className="text-2xl font-bold text-primary">Tailwind Magic ✨</h2>
//       <p className="text-secondary mt-2 font-sans">
//         This card demonstrates all custom Tailwind properties.
//       </p>
//       <button className="mt-4 bg-primary text-white px-4 py-2 rounded-xl shadow-strong hover:bg-secondary transition-all animate-bounceSlow">
//         Click Me 🚀
//       </button>
//     </div>
//   );
// };
