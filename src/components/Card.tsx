import React from "react";

const cards = [
  { id: 1, text: "Card 1" },
  { id: 2, text: "Card 2" },
  { id: 3, text: "Card 3" },
];

const Card = () => {
  return (
    <div className="flex items-center justify-center gap-x-10 w-full max-w-[1440px] mx-auto">
      {cards.map((card) => (
        <div key={card.id} className="w-full">
          <div className="w-full h-[350px] flex items-center justify-center rounded-lg text-white text-2xl font-bold bg-darkIndigo">
            {card.text}
          </div>
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
