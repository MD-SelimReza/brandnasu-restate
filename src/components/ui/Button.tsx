// import React from 'react';
// import { FaArrowRightLong } from 'react-icons/fa6';

// const Button = ({
//   bgColor = 'bg-indigo',
//   textColor = 'text-white',
//   label = 'Click Me',
//   icon: Icon = FaArrowRightLong,
// }) => {
//   return (
//     <button
//       className={`relative inline-flex justify-between md:w-fit w-56 items-center px-11 py-2.5 overflow-hidden text-base font-medium rounded-full group ${bgColor} ${textColor}`}
//     >
//       <span className="absolute opacity-0 group-hover:opacity-100 right-0 hidden md:flex items-center justify-center w-20 h-14 duration-500 transform -translate-x-2 group-hover:translate-x-2 ease">
//         <Icon />
//       </span>
//       <span className="relative text-lg flex justify-center items-center md:transform md:translate-x-0 font-bold md:group-hover:-translate-x-4 ease duration-500">
//         {label}
//       </span>
//     </button>
//   );
// };

// export default Button;

import Link from 'next/link';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const Button = ({
  bgColor = 'bg-indigo',
  textColor = 'text-white',
  label = 'Apply Now',
  width = 'w-52',
  icon: Icon = FaArrowRightLong,
  href = '',
  target = '_self',
}) => {
  return (
    <Link
      href={href}
      target={target}
      className={`rounded-full block font-semibold text-lg transition duration-500 cursor-pointer group ${bgColor} ${textColor} ${width}`}
    >
      <div className="relative flex justify-center items-center max-w-40 mx-auto py-2.5">
        <button className="rounded-full font-bold text-lg md:flex items-center justify-center duration-500 transform translate-x-0 group-hover:-translate-x-3 ease">
          {label}
        </button>
        <Icon
          size={16}
          className="absolute opacity-0 group-hover:opacity-100 right-0 -translate-x-5 transform ease duration-500 group-hover:translate-x-0"
        />
      </div>
    </Link>
  );
};

export default Button;
