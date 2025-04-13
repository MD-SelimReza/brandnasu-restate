// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import { IoIosArrowDown } from 'react-icons/io';
// import ServiceMenu from './ServiceMenu';
// import LearnMenu from './LearnMenu';
// import logo from '../../public/Logo/light-logo.svg';
// import Image from 'next/image';

// export default function Navbar() {
//   const [activeMenu, setActiveMenu] = useState<string | null>(null);

//   const handleMouseEnter = (menu: string) => {
//     setActiveMenu(menu);
//   };

//   const handleMouseLeave = () => {
//     setTimeout(() => {
//       setActiveMenu(null);
//     }, 200); // Short delay to allow smooth hover transitions
//   };

//   return (
//     <nav className="w-full bg-darkIndigo shadow-sm sticky top-0 z-50 font-sans">
//       <div className='flex items-center justify-between py-3 max-w-[1440px] mx-auto'>
//         <Link href={'/'}>
//           <Image src={logo} alt='logo' width={100} height={100} />
//         </Link>

//         <div className='flex items-center space-x-8 text-lg'>
//           <div className="flex items-center space-x-6 text-lightIndigo">
//             {/* SERVICES MENU */}
//             <div
//               className="relative"
//               onMouseEnter={() => handleMouseEnter('services')}
//               onMouseLeave={handleMouseLeave}
//             >
//               <button className="flex items-center gap-1 text-lightIndigo px-2 py-4">
//                 Services <IoIosArrowDown />
//               </button>
//               {activeMenu === 'services' && (
//                 <div className="fixed top-[70px] left-0 w-screen bg-white  z-50">
//                   <ServiceMenu />
//                 </div>
//               )}
//             </div>

//             {/* OUR WORK MENU */}
//             <div
//               className="relative"
//               onMouseEnter={() => handleMouseEnter('works')}
//               onMouseLeave={handleMouseLeave}
//             >
//               <button className="flex items-center gap-1 text-lightIndigo px-2 py-4">
//                 Our Work <IoIosArrowDown />
//               </button>
//               {activeMenu === 'works' && (
//                 <div className="fixed top-[70px] left-0 w-screen bg-white  z-50">
//                   <LearnMenu />
//                 </div>
//               )}
//             </div>

//             {/* Pricing */}
//             <Link href="/pricing" className="text-lightIndigo px-2 py-3">
//               Pricing
//             </Link>

//             {/* BLOG */}
//             <Link href="/blog" className="text-lightIndigo px-2 py-3">
//               Blog
//             </Link>

//             {/* ABOUT */}
//             <Link href="/about" className="text-lightIndigo px-2 py-3">
//               About
//             </Link>

//             {/* CONTACT */}
//             {/* <Link href="#" className="text-lightIndigo px-2 py-3">
//               Contact
//             </Link> */}
//           </div>

//           {/* BUTTONS */}
//           <div className="flex items-center space-x-8">
//             <button className="px-8 py-2 rounded-full bg-indigo/90 border border-indigo text-lightIndigo font-semibold hover:bg-indigo">
//               Watch A Demo
//             </button>
//             <button className="px-8 py-2 rounded-full border-[1.5px] border-lightIndigo text-lightIndigo font-semibold hover:bg-darkIndigo/90">
//               Dashboard
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoIosArrowDown } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';
import ServiceMenu from './ServiceMenu';
import LearnMenu from './LearnMenu';
import logo from '../../public/Logo/light-logo.svg';
import darkLogo from '../../public/Logo/dark-logo.svg';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  return (
    <nav className="w-full bg-darkIndigo shadow-md sticky top-0 z-50 font-sans">
      <div className='flex items-center justify-between px-4 py-3 max-w-[1440px] mx-auto'>
        {/* Logo */}
        <Link href='/'>
          <Image src={logo} alt='logo' objectFit='fill' className='lg:w-32 md:w-28 w-24' />
        </Link>

        <div className='flex items-center space-x-8 text-lg'>
          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className='xl:hidden text-2xl text-lightIndigo'>
            {menuOpen ? <IoClose /> : <RxHamburgerMenu />}
          </button>

          {/* Desktop Menu */}
          <div className='hidden xl:flex items-center text-base text-lightIndigo'>
            <div className='relative' onMouseEnter={() => toggleDropdown('services')} onMouseLeave={() => toggleDropdown('services')}>
              <button className='flex items-center gap-1 py-4 px-4 group'>
                Services <IoIosArrowDown className='group-hover:rotate-180 ml-2 transition-all duration-300' />
              </button>
              {activeDropdown === 'services' && (
                <div className="fixed top-[70px] left-0 w-screen bg-white z-50">
                  <ServiceMenu />
                </div>
              )}
            </div>
            <div className='relative' onMouseEnter={() => toggleDropdown('works')} onMouseLeave={() => toggleDropdown('works')}>
              <button className='flex items-center gap-1 py-4 px-4 group'>
                Our Work <IoIosArrowDown className='group-hover:rotate-180 ml-2 transition-all duration-300' />
              </button>
              {activeDropdown === 'works' && (
                <div className="fixed top-[70px] left-0 w-screen bg-white  z-50">
                  <LearnMenu />
                </div>
              )}
            </div>
            <Link href='/pricing' className='className="text-lightIndigo px-4 py-3'>Pricing</Link>
            <Link href='/blog' className='className="text-lightIndigo px-4 py-3'>Blog</Link>
            <Link href='/about' className='className="text-lightIndigo px-4 py-3'>About</Link>
          </div>

          {/* Buttons */}
          <div className='hidden xl:flex space-x-8 text-base'>
            <button className='px-6 py-2 bg-indigo text-white rounded-full'>Watch A Demo</button>
            <button className='px-6 py-2 border border-lightIndigo text-lightIndigo rounded-full'>Dashboard</button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 sm:w-96 w-full h-full overflow-y-auto bg-white text-darkIndigo shadow-lg py-4 px-4 transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Logo and Close Button Wrapper */}
        <div className="flex items-center justify-between w-full mb-4">
          <Image src={darkLogo} alt="logo" width={100} height={20} />
          <button onClick={toggleMenu} className="text-2xl">
            <IoClose />
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="space-y-">
          <li className="py-3">
            <button
              className="flex items-center justify-between w-full font-semibold text-darkIndigo/90 text-base"
              onClick={() => toggleDropdown('services')}
            >
              Services <IoIosArrowDown className={`${activeDropdown === 'services' ? 'rotate-180' : 'rotate-0'} transition-all duration-300`} />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeDropdown === 'services' ? 'max-h-full opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              {activeDropdown === 'services' && <ServiceMenu />}
            </div>
          </li>

          <li className="border-t border-lightIndigo py-3">
            <button
              className="flex items-center justify-between w-full font-medium text-darkIndigo/90 text-base"
              onClick={() => toggleDropdown('works')}
            >
              Our Work <IoIosArrowDown className={`${activeDropdown === 'works' ? 'rotate-180' : 'rotate-0'} transition-all duration-300`} />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeDropdown === 'works' ? 'max-h-full opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              {activeDropdown === 'works' && <LearnMenu />}
            </div>
          </li>

          <li className="border-t border-lightIndigo py-3 font-medium text-darkIndigo/90 text-base">
            <Link href="/pricing">Pricing</Link>
          </li>

          <li className="border-t border-lightIndigo py-3 font-medium text-darkIndigo/90 text-base">
            <Link href="/blog">Blog</Link>
          </li>

          <li className="border-y border-lightIndigo py-3 font-medium text-darkIndigo/90 text-base">
            <Link href="/about">About</Link>
          </li>

          <li className="pt-6">
            <button className="bg-indigo text-white w-full py-2 rounded-full">
              Watch A Demo
            </button>
          </li>

          <li className="pt-5">
            <button className="border border-lightIndigo w-full py-2 rounded-full">
              Dashboard
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}



// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { IoIosArrowDown } from 'react-icons/io';
// import { RxHamburgerMenu } from 'react-icons/rx';
// import { IoClose } from 'react-icons/io5';
// import ServiceMenu from './ServiceMenu';
// import LearnMenu from './LearnMenu';
// import logo from '../../public/Logo/light-logo.svg';

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

//   const toggleMenu = () => setMenuOpen(!menuOpen);
//   const toggleDropdown = (menu: string) => {
//     setActiveDropdown(activeDropdown === menu ? null : menu);
//   };

//   return (
//     <nav className="w-full bg-darkIndigo shadow-md sticky top-0 z-50 font-sans">
//       <div className='flex items-center justify-between px-6 py-3 max-w-[1440px] mx-auto'>
//         {/* Logo */}
//         <Link href='/'>
//           <Image src={logo} alt='logo' width={120} height={40} />
//         </Link>

//         {/* Mobile Menu Button */}
//         <button onClick={toggleMenu} className='lg:hidden text-2xl text-lightIndigo'>
//           {menuOpen ? <IoClose /> : <RxHamburgerMenu />}
//         </button>

//         {/* Desktop Menu */}
//         <div className='hidden lg:flex items-center space-x-8 text-lg text-lightIndigo'>
//           <div className='relative' onMouseEnter={() => toggleDropdown('services')} onMouseLeave={() => toggleDropdown('services')}>
//             <button className='flex items-center gap-1 border py-4'>
//               Services <IoIosArrowDown />
//             </button>
//             {/* {activeDropdown === 'services' && <ServiceMenu />} */}
//             {activeDropdown === 'services' && (
//               <div className="fixed top-[70px] left-0 w-screen bg-white  z-50">
//                 <ServiceMenu />
//               </div>
//             )}
//           </div>
//           <div className='relative' onMouseEnter={() => toggleDropdown('works')} onMouseLeave={() => toggleDropdown('works')}>
//             <button className='flex items-center gap-1'>
//               Our Work <IoIosArrowDown />
//             </button>
//             {/* {activeDropdown === 'works' && <LearnMenu />} */}
//             {activeDropdown === 'works' && (
//               <div className="fixed top-[70px] left-0 w-screen bg-white  z-50">
//                 <LearnMenu />
//               </div>
//             )}
//           </div>
//           <Link href='/pricing'>Pricing</Link>
//           <Link href='/blog'>Blog</Link>
//           <Link href='/about'>About</Link>
//         </div>

//         {/* Buttons */}
//         <div className='hidden lg:flex space-x-4'>
//           <button className='px-6 py-2 bg-indigo text-white rounded-full'>Watch A Demo</button>
//           <button className='px-6 py-2 border border-lightIndigo text-lightIndigo rounded-full'>Dashboard</button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//   <div className="fixed top-0 right-0 w-full h-full bg-darkIndigo text-lightIndigo shadow-lg p-6 transition-transform transform translate-x-0 duration-300">
//     {/* Logo and Close Button Wrapper */}
//     <div className="flex items-center justify-between w-full mb-6">
//       {/* Logo */}
//       <Image src={logo} alt="logo" width={100} height={20} />

//       {/* Close Button */}
//       <button onClick={toggleMenu} className="text-2xl">
//         <IoClose />
//       </button>
//     </div>

//     {/* Navigation Links */}
//     <ul className="space-y-4">
//       <li className="pt-3">
//         <button
//           className="flex items-center justify-between w-full"
//           onClick={() => toggleDropdown('services')}
//         >
//           Services <IoIosArrowDown />
//         </button>
//         <div
//           className={`overflow-hidden transition-max-h duration-300 ${
//             activeDropdown === 'services' ? 'max-h-60' : 'max-h-0'
//           }`}
//         >
//           {activeDropdown === 'services' && <ServiceMenu />}
//         </div>
//       </li>

//       <li className="border-t border-lightIndigo pt-3">
//         <button
//           className="flex items-center justify-between w-full"
//           onClick={() => toggleDropdown('works')}
//         >
//           Our Work <IoIosArrowDown />
//         </button>
//         <div
//           className={`overflow-hidden transition-max-h duration-300 ${
//             activeDropdown === 'works' ? 'max-h-60' : 'max-h-0'
//           }`}
//         >
//           {activeDropdown === 'works' && <LearnMenu />}
//         </div>
//       </li>

//       <li className="border-t border-lightIndigo pt-3">
//         <Link href="/pricing">Pricing</Link>
//       </li>

//       <li className="border-t border-lightIndigo pt-3">
//         <Link href="/blog">Blog</Link>
//       </li>

//       <li className="border-y border-lightIndigo pt-3">
//         <Link href="/about">About</Link>
//       </li>

//       <li className="pt-6">
//         <button className="bg-indigo text-white w-full py-2 rounded-full">
//           Watch A Demo
//         </button>
//       </li>

//       <li className="pt-3">
//         <button className="border border-lightIndigo w-full py-2 rounded-full">
//           Dashboard
//         </button>
//       </li>
//     </ul>
//   </div>
// )}


//     </nav>
//   );
// }
