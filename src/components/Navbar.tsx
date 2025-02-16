'use client';

import { useState } from 'react';
import Link from 'next/link';
import { IoIosArrowDown } from 'react-icons/io';
import ServiceMenu from './ServiceMenu';
import LearnMenu from './LearnMenu';
import logo from '../../public/Logo/light-logo.svg';
import Image from 'next/image';

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMouseEnter = (menu: string) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setActiveMenu(null);
    }, 200); // Short delay to allow smooth hover transitions
  };

  return (
    <nav className="w-full bg-darkIndigo shadow-sm sticky top-0 z-50 font-sans">
      <div className='flex items-center justify-between py-3 max-w-[1440px] mx-auto'>
        <Link href={'/'}>
          <Image src={logo} alt='logo' width={100} height={100} />
        </Link>

        <div className='flex items-center space-x-8 text-lg'>
          <div className="flex items-center space-x-6 text-lightIndigo">
            {/* SERVICES MENU */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 text-lightIndigo px-2 py-4">
                Services <IoIosArrowDown />
              </button>
              {activeMenu === 'services' && (
                <div className="fixed top-[70px] left-0 w-screen bg-white  z-50">
                  <ServiceMenu />
                </div>
              )}
            </div>

            {/* OUR WORK MENU */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('works')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 text-lightIndigo px-2 py-4">
                Our Work <IoIosArrowDown />
              </button>
              {activeMenu === 'works' && (
                <div className="fixed top-[70px] left-0 w-screen bg-white  z-50">
                  <LearnMenu />
                </div>
              )}
            </div>

            {/* Pricing */}
            <Link href="/pricing" className="text-lightIndigo px-2 py-3">
              Pricing
            </Link>

            {/* BLOG */}
            <Link href="/blog" className="text-lightIndigo px-2 py-3">
              Blog
            </Link>

            {/* ABOUT */}
            <Link href="/about" className="text-lightIndigo px-2 py-3">
              About
            </Link>

            {/* CONTACT */}
            {/* <Link href="#" className="text-lightIndigo px-2 py-3">
              Contact
            </Link> */}
          </div>

          {/* BUTTONS */}
          <div className="flex items-center space-x-8">
            <button className="px-8 py-2 rounded-full bg-indigo/90 border border-indigo text-lightIndigo font-semibold hover:bg-indigo">
              Watch A Demo
            </button>
            <button className="px-8 py-2 rounded-full border-[1.5px] border-lightIndigo text-lightIndigo font-semibold hover:bg-darkIndigo/90">
              Dashboard
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { IoIosArrowDown } from "react-icons/io";
// import ServiceMenu from "./ServiceMenu";
// import LearnMenu from "./LearnMenu";
// import logo from "../../public/logo.svg";
// import Image from "next/image";

// export default function Navbar() {
//   const [activeMenu, setActiveMenu] = useState<string | null>(null);

//   const handleMouseEnter = (menu: string) => {
//     setActiveMenu(menu);
//   };

//   const handleMouseLeave = () => {
//     setTimeout(() => {
//       setActiveMenu(null);
//     }, 200); // Short delay for smooth transition
//   };

//   return (
//     <nav className="w-full bg-darkIndigo shadow-sm sticky top-0 z-50">
//       <div className="flex items-center justify-between py-3 max-w-[1440px] mx-auto relative">
//         <div>
//           <Image src={logo} alt="logo" width={100} height={100} />
//         </div>

//         <div className="flex items-center space-x-6">
//           <div className="flex items-center space-x-6 text-lightIndigo">
//             {/* SERVICES MENU */}
//             <div
//               className="relative"
//               onMouseEnter={() => handleMouseEnter("services")}
//               onMouseLeave={handleMouseLeave}
//             >
//               <button className="flex items-center gap-1 text-lightIndigo px-2 py-4">
//                 Services <IoIosArrowDown />
//               </button>
//             </div>

//             {/* OUR WORK MENU */}
//             <div
//               className="relative"
//               onMouseEnter={() => handleMouseEnter("works")}
//               onMouseLeave={handleMouseLeave}
//             >
//               <button className="flex items-center gap-1 text-lightIndigo px-2 py-4">
//                 Our Work <IoIosArrowDown />
//               </button>
//             </div>

//             {/* Pricing */}
//             <Link href="#" className="text-lightIndigo px-2 py-3">
//               Pricing
//             </Link>

//             {/* BLOG */}
//             <Link href="#" className="text-lightIndigo px-2 py-3">
//               Blog
//             </Link>

//             {/* ABOUT */}
//             <Link href="#" className="text-lightIndigo px-2 py-3">
//               About
//             </Link>

//             {/* CONTACT */}
//             <Link href="#" className="text-lightIndigo px-2 py-3">
//               Contact
//             </Link>
//           </div>

//           {/* BUTTONS */}
//           <div className="flex items-center space-x-4">
//             <button className="px-4 py-2 rounded-full bg-indigo/90 border border-indigo text-lightIndigo font-semibold hover:bg-indigo">
//               Watch A Demo
//             </button>
//             <button className="px-4 py-2 rounded-full border-[1.5px] border-indigo text-lightIndigo font-semibold hover:bg-darkIndigo">
//               Dashboard
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Move the Dropdowns Outside the Navbar's Container */}
//       {activeMenu === "services" && (
//         <div
//         onMouseEnter={() => handleMouseEnter('services')}
//         onMouseLeave={handleMouseLeave}
//         className="absolute top-[70px] left-0 w-full bg-white  z-50">
//           <ServiceMenu />
//         </div>
//       )}

//       {activeMenu === "works" && (
//         <div
//          onMouseEnter={() => handleMouseEnter('works')}
//          onMouseLeave={handleMouseLeave}
//          className="absolute top-[70px] left-0 w-full bg-white  z-50">
//           <LearnMenu />
//         </div>
//       )}
//     </nav>
//   );
// }

// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { IoIosArrowDown } from "react-icons/io";
// import ServiceMenu from "./ServiceMenu";
// import LearnMenu from "./LearnMenu";
// import logo from "../../public/logo.svg";
// import Image from "next/image";

// export default function Navbar() {
//   const [activeMenu, setActiveMenu] = useState<string | null>(null);

//   const handleMouseEnter = (menu: string) => {
//     setActiveMenu(menu);
//   };

//   const handleMouseLeave = (menu: string) => {
//     setTimeout(() => {
//       if (activeMenu === menu) {
//         setActiveMenu(null);
//       }
//     }, 200);
//   };

//   return (
//     <nav className="w-full bg-darkIndigo shadow-sm sticky top-0 z-50">
//       <div className="flex items-center justify-between py-3 max-w-[1440px] mx-auto relative">
//         <div>
//           <Image src={logo} alt="logo" width={100} height={100} />
//         </div>

//         <div className="flex items-center space-x-6">
//           <div className="flex items-center space-x-6 text-lightIndigo">
//             {/* SERVICES MENU */}
//             <div
//               className="relative"
//               onMouseEnter={() => handleMouseEnter("services")}
//               onMouseLeave={() => handleMouseLeave("services")}
//             >
//               <button className="flex items-center gap-1 text-lightIndigo px-2 py-4">
//                 Services <IoIosArrowDown />
//               </button>

//               {activeMenu === "services" && (
//                 <div
//                   className="fixed top-[70px] left-0 w-screen bg-white  z-50"
//                   onMouseEnter={() => handleMouseEnter("services")}
//                   onMouseLeave={() => handleMouseLeave("services")}
//                 >
//                   <ServiceMenu />
//                 </div>
//               )}
//             </div>

//             {/* OUR WORK MENU */}
//             <div
//               className="relative"
//               onMouseEnter={() => handleMouseEnter("works")}
//               onMouseLeave={() => handleMouseLeave("works")}
//             >
//               <button className="flex items-center gap-1 text-lightIndigo px-2 py-4">
//                 Our Work <IoIosArrowDown />
//               </button>

//               {activeMenu === "works" && (
//                 <div
//                   className="fixed top-[70px] left-0 w-screen bg-white  z-50"
//                   onMouseEnter={() => handleMouseEnter("works")}
//                   onMouseLeave={() => handleMouseLeave("works")}
//                 >
//                   <LearnMenu />
//                 </div>
//               )}
//             </div>

//             {/* Other Links */}
//             <Link href="#" className="text-lightIndigo px-2 py-3">
//               Pricing
//             </Link>
//             <Link href="#" className="text-lightIndigo px-2 py-3">
//               Blog
//             </Link>
//             <Link href="#" className="text-lightIndigo px-2 py-3">
//               About
//             </Link>
//             <Link href="#" className="text-lightIndigo px-2 py-3">
//               Contact
//             </Link>
//           </div>

//           {/* BUTTONS */}
//           <div className="flex items-center space-x-4">
//             <button className="px-4 py-2 rounded-full bg-indigo/90 border border-indigo text-lightIndigo font-semibold hover:bg-indigo">
//               Watch A Demo
//             </button>
//             <button className="px-4 py-2 rounded-full border-[1.5px] border-indigo text-lightIndigo font-semibold hover:bg-darkIndigo">
//               Dashboard
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
