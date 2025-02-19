'use client';

import Image from 'next/image';
import { FaArrowRight, FaPlayCircle, FaBook, FaClipboardList, FaFileAlt } from 'react-icons/fa';
import DefaultImage from "../../public/default.jpg";

const LearnMenu = () => (
  <div className="w-full left-0 xl:p-6 xl:rounded-lg xl:border xl:shadow my-5 xl:my-0">
    <div className='max-w-[1440px] mx-auto grid grid-cols-1 xl:grid-cols-3 gap-6'>
      <div className='bg-gray-100 p-5 rounded-lg space-y-8 h-fit'>
        <p className="font-semibold text-darkIndigo/90 text-sm xl:text-lg border-b">NOLIMIT UNIVERSITY</p>
        <ul className="space-y-2 text-default text-sm">
          {[{ icon: FaBook, title: 'Articles' },
            { icon: FaPlayCircle, title: 'Podcasts & Videos' },
            { icon: FaClipboardList, title: 'Guides, Checklists & Ebooks' },
            { icon: FaFileAlt, title: 'White Papers & Results' }].map(({ icon: Icon, title }, index) => (
            <li key={index} className="flex items-center gap-3 py-2.5 px-1 rounded-lg group hover:bg-gradient-to-r from-transparent to-lightIndigo transition">
              <Icon className="text-darkIndigo text-lg" />
              <span className="text-default text-base font-medium xl:text-lg group-hover:text-darkIndigo">{title}</span>
            </li>
          ))}
        </ul>
        <button className="flex items-center text-darkIndigo text-sm mt-3 font-medium hover:underline group">
          See All <FaArrowRight className="ml-2 transition-transform group-hover:-rotate-45" />
        </button>
      </div>
      <div className='mt-3 xl:space-y-5'>
        <p className="xl:font-semibold font-medium text-darkIndigo/90 text-base xl:text-lg border-b pb-2">NEW ARTICLES</p>
        <div className="space-y-0.5 text-default text-sm mt-3">
          {Array(3).fill(0).map((_, index) => (
            <div key={index} className="flex gap-2.5 py-[5px] px-1 items-center cursor-pointer group transition">
              <Image src={DefaultImage} alt="Article Image" className="w-24 h-16 object-cover rounded-md" />
              <div>
                <span className="text-default text-base font-medium group-hover:underline">Brief description of the article content goes here.</span>
              </div>
            </div>
          ))}
        </div>
        <button className="flex items-center xl:justify-normal justify-between text-darkIndigo w-full xl:p-0 p-2.5 rounded-md xl:bg-transparent bg-gray-100 text-base font-medium hover:underline group">
          See All <FaArrowRight className="xl:ml-2 transition-transform group-hover:-rotate-45" />
        </button>
      </div>
      <div className='mt-3 xl:space-y-5'>
        <p className="xl:font-semibold font-medium text-darkIndigo/90 text-base xl:text-lg border-b pb-2">FREE GUIDES</p>
        <ul className="space-y-0.5 text-default text-sm mt-3">
          {Array(3).fill(0).map((_, index) => (
            <li key={index} className="flex gap-2.5 py-[5px] px-1 items-center cursor-pointer group transition">
              <Image src={DefaultImage} alt="Article Image" className="w-24 h-16 object-cover rounded-md" />
              <div>
                <span className="text-default text-base font-medium group-hover:underline">Brief description of the guide content goes here.</span>
              </div>
            </li>
          ))}
        </ul>
        <button className="flex items-center xl:justify-normal justify-between text-darkIndigo w-full xl:p-0 p-2.5 rounded-md xl:bg-transparent bg-gray-100 text-base font-medium hover:underline group">
          See All <FaArrowRight className="xl:ml-2 transition-transform group-hover:-rotate-45" />
        </button>
      </div>
    </div>
  </div>
);

export default LearnMenu;


// 'use client';

// import Image from 'next/image';
// import { FaArrowRight, FaPlayCircle, FaBook, FaClipboardList, FaFileAlt } from 'react-icons/fa';
// import DefaultImage from "../../public/default.jpg";

// const LearnMenu = () => (
//   <div className="w-full left-0  xl:p-6 xl:rounded-lg xl:border xl:shadow my-5 xl:my-0">
//     <div className='max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
//       <div className='bg-gray-100 p-5 rounded-lg space-y-8 h-fit'>
//         <p className="font-semibold text-darkIndigo/90 text-sm xl:text-lg border-b">NOLIMIT UNIVERSITY</p>
//         <ul className="space-y-2 text-default text-sm">
//           {[{ icon: FaBook, title: 'Articles' },
//             { icon: FaPlayCircle, title: 'Podcasts & Videos' },
//             { icon: FaClipboardList, title: 'Guides, Checklists & Ebooks' },
//             { icon: FaFileAlt, title: 'White Papers & Results' }].map(({ icon: Icon, title }, index) => (
//             <li key={index} className="flex items-center gap-3 py-2.5 px-1 rounded-lg hover:bg-gradient-to-r from-transparent to-lightIndigo transition">
//               <Icon className="text-darkIndigo text-lg" />
//               <span className="text-default text-base font-medium xl:text-lg">{title}</span>
//             </li>
//           ))}
//         </ul>
//         <button className="flex items-center text-darkIndigo group text-sm mt-3 font-medium hover:underline">
//           See All <FaArrowRight className="ml-2 group-hover:-rotate-45" />
//         </button>
//       </div>
//       <div className='mt-3'>
//         <p className="xl:font-semibold font-medium text-darkIndigo/90 text-base xl:text-lg border-b pb-2">NEW ARTICLES</p>
//         <div className="space-y-0.5 text-default text-sm mt-3">
//           {Array(3).fill(0).map((_, index) => (
//             <div key={index} className="flex gap-2.5 py-[5px] px-1 items-center cursor-pointer group transition">
//               <Image src={DefaultImage} alt="Article Image" className="w-24 h-16 object-cover rounded-md" />
//               <div>
//                 <span className="text-default group-hover:underline text-base font-medium">Brief description of the article content goes here.</span>
//               </div>
//             </div>
//           ))}
//         </div>
//         <button className="flex items-center xl:justify-normal justify-between text-darkIndigo w-full xl:p-0 p-2.5 rounded-md xl:bg-transparent bg-gray-100 text-base group mt-3 font-medium hover:underline">
//           See All <FaArrowRight className="xl:ml-2 group-hover:-rotate-45" />
//         </button>
//       </div>
//       <div className='mt-3'>
//         <p className="xl:font-semibold font-medium text-darkIndigo/90 text-base xl:text-lg border-b pb-2">FREE GUIDES</p>
//         <ul className="space-y-0.5 text-default text-sm mt-3">
//           {Array(3).fill(0).map((_, index) => (
//             <li key={index} className="flex gap-2.5 py-[5px] px-1 items-center cursor-pointer group transition">
//               <Image src={DefaultImage} alt="Article Image" className="w-24 h-16 object-cover rounded-md" />
//               <div>
//                 <span className="text-default group-hover:underline text-base font-medium">Brief description of the article content goes here.</span>
//               </div>
//             </li>
//           ))}
//         </ul>
//         <button className="flex items-center xl:justify-normal justify-between text-darkIndigo w-full xl:p-0 p-2.5 rounded-md xl:bg-transparent bg-gray-100 text-base group mt-3 font-medium hover:underline">
//           See All <FaArrowRight className="xl:ml-2 group-hover:-rotate-45" />
//         </button>
//       </div>
//     </div>
//   </div>
// );

// export default LearnMenu;

