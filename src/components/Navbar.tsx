'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoIosArrowDown } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';
import ServiceMenu from './ServiceMenu';
import logo from '../../public/Logo/light-logo.svg';
import darkLogo from '../../public/Logo/dark-logo.svg';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  // useEffect(() => {
  //   if (activeDropdown) {
  //     const scrollY = window.scrollY;
  //     document.body.style.position = 'fixed';
  //     document.body.style.top = `-${scrollY}px`;
  //     document.body.style.width = '100%';

  //     // Optional: maintain scrollbar gap if needed
  //     document.body.style.overflowY = 'scroll';
  //   } else {
  //     const scrollY = document.body.style.top;
  //     document.body.style.position = '';
  //     document.body.style.top = '';
  //     document.body.style.width = '';
  //     document.body.style.overflowY = '';
  //     window.scrollTo(0, parseInt(scrollY || '0') * -1);
  //   }

  //   return () => {
  //     document.body.style.position = '';
  //     document.body.style.top = '';
  //     document.body.style.width = '';
  //     document.body.style.overflowY = '';
  //   };
  // }, [activeDropdown]);

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
      <div className="flex items-center justify-between px-5 py-4 max-w-[1440px] mx-auto relative">
        {/* Logo */}
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            objectFit="fill"
            className="lg:w-32 md:w-28 w-24"
          />
        </Link>

        <div className="flex items-center space-x-8 text-lg">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="xl:hidden text-2xl text-lightIndigo"
          >
            {menuOpen ? <IoClose /> : <RxHamburgerMenu />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center text-base text-lightIndigo">
            {/* <div className='relative' onMouseEnter={() => toggleDropdown('services')} onMouseLeave={() => toggleDropdown('services')}>
              <button className='flex items-center gap-1 py-5 px-4 group'>
                Services <IoIosArrowDown className='group-hover:rotate-180 ml-2 transition-all duration-300' />
              </button>
              {activeDropdown === 'services' && (
                <div className="fixed top-[70px] left-0 w-screen mx-auto z-50 pr-3.5">
                  <ServiceMenu />
                </div>
              )}
            </div> */}
            <div className="relative">
              <div
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
                className="relative"
              >
                <button
                  className={`flex items-center gap-1 py-4 px-4 group ${
                    activeDropdown ? 'text-lightIndigo' : 'text-[#afa5ff]'
                  }`}
                >
                  Services
                  <IoIosArrowDown
                    className={`ml-2 transition-all duration-300 ${
                      activeDropdown && 'rotate-180'
                    }`}
                  />
                </button>

                {activeDropdown === 'services' && (
                  <div className="fixed top-[70px] left-0 w-screen z-50">
                    <div className="flex justify-center">
                      <div
                        className="w-full max-w-[1440px] 2xl:pr-4"
                        onMouseLeave={() => toggleDropdown('services')}
                      >
                        <ServiceMenu
                          toggleDropdown={toggleDropdown}
                          toggleMenu={toggleMenu}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <Link
              href="/work"
              className={`px-4 py-3 ${
                pathname === '/work'
                  ? 'text-lightIndigo underline underline-offset-4'
                  : 'text-[#afa5ff]'
              } hover:text-lightIndigo`}
            >
              Work
            </Link>

            <Link
              href="/pricing"
              className={`px-4 py-3 ${
                pathname === '/pricing'
                  ? 'text-lightIndigo underline underline-offset-4'
                  : 'text-[#afa5ff]'
              } hover:text-lightIndigo`}
            >
              Pricing
            </Link>

            <Link
              href="/career"
              className={`px-4 py-3 ${
                pathname === '/career'
                  ? 'text-lightIndigo underline underline-offset-4'
                  : 'text-[#afa5ff]'
              } hover:text-lightIndigo`}
            >
              Career
            </Link>

            <Link
              href="/about-us"
              className={`px-4 py-3 ${
                pathname === '/about-us'
                  ? 'text-lightIndigo underline underline-offset-4'
                  : 'text-[#afa5ff]'
              } hover:text-lightIndigo`}
            >
              About us
            </Link>
          </div>

          {/* Buttons */}
          <div className="hidden xl:flex space-x-8 text-base">
            <Link
              href="/#watch-demo"
              className="px-4 py-1 block bg-indigo text-white border-[0.1px] border-indigo transition-all duration-200 rounded-full"
            >
              Watch a Demo
            </Link>
            <button className="px-4 py-1 border-[0.1px] hover:bg-indigo hover:border-indigo transition-all duration-200 border-lightIndigo/25 text-lightIndigo rounded-full">
              Dashboard
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 sm:w-96 w-full h-full overflow-y-auto bg-white text-darkIndigo shadow-lg p-5 transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Logo and Close Button Wrapper */}
        <div className="flex items-center justify-between w-full mb-4">
          <Link href="/">
            <Image
              onClick={toggleMenu}
              src={darkLogo}
              alt="logo"
              width={100}
              height={20}
            />
          </Link>
          <button onClick={toggleMenu} className="text-2xl">
            <IoClose />
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="space-y-">
          <li className="py-3">
            <button
              className="flex items-center justify-between w-full font-medium text-darkIndigo/90 text-base"
              onClick={() => toggleDropdown('services')}
            >
              Services{' '}
              <IoIosArrowDown
                className={`${
                  activeDropdown === 'services' ? 'rotate-180' : 'rotate-0'
                } transition-all duration-300`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeDropdown === 'services'
                  ? 'max-h-full opacity-100'
                  : 'max-h-0 opacity-0'
              }`}
            >
              {activeDropdown === 'services' && (
                <ServiceMenu
                  toggleDropdown={toggleDropdown}
                  toggleMenu={toggleMenu}
                />
              )}
            </div>
          </li>

          <li className="border-t border-lightIndigo font-medium text-darkIndigo/90 text-base">
            <Link onClick={toggleMenu} href="/work" className="block py-3">
              Work
            </Link>
          </li>

          <li className="border-t border-lightIndigo font-medium text-darkIndigo/90 text-base">
            <Link onClick={toggleMenu} href="/pricing" className="block py-3">
              Pricing
            </Link>
          </li>

          <li className="border-t border-lightIndigo font-medium text-darkIndigo/90 text-base">
            <Link onClick={toggleMenu} href="/career" className="block py-3">
              Career
            </Link>
          </li>

          <li className="border-y border-lightIndigo font-medium text-darkIndigo/90 text-base">
            <Link onClick={toggleMenu} href="/about-us" className="block py-3">
              About us
            </Link>
          </li>

          <li className="pt-6">
            <button
              onClick={toggleMenu}
              className="bg-indigo text-white w-full py-2 rounded-full"
            >
              Watch A Demo
            </button>
          </li>

          <li className="pt-5">
            <button
              onClick={toggleMenu}
              className="border border-lightIndigo w-full py-2 rounded-full"
            >
              Dashboard
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

// import React, {useState} from "react";

// // react icons
// import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
// import {FaTasks} from "react-icons/fa";
// import {TbLogout2, TbUsersGroup} from "react-icons/tb";
// import {CiMenuFries} from "react-icons/ci";
// import {MdLaptopMac, MdOutlineArrowRightAlt, MdOutlineKeyboardArrowRight} from "react-icons/md";
// import {BsBuildings, BsCalendar2Date} from "react-icons/bs";
// import {AiOutlineFire} from "react-icons/ai";
// import {BiSupport} from "react-icons/bi";
// import {FiUser} from "react-icons/fi";
// import {IoSettingsOutline} from "react-icons/io5";

// const Navbar = () => {
//     const [accountMenuOpen, setAccountMenuOpen] = useState(false)
//     const [isProductHover, setIsProductHover] = useState(false)
//     const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
//     const [isMegaMenuCollapse, setIsMegaMenuCollapse] = useState(false)
//     const [megaMenuSubItemsOpen, setMegaMenuSubItemsOpen] = useState("")

//     return (
//         <nav
//             className="flex items-center justify-between w-full relative max-w-[1440px] mx-auto">

//             {/* logo */}
//             <img src="https://i.ibb.co/0BZfPq6/darklogo.png" alt="logo" className="w-[55px] "/>

//             {/* nav links */}
//             <ul className="items-center gap-[20px] text-[1rem] text-[#424242] md:flex hidden">

//                 {/* product megamenu */}
//                 <li className={`${isProductHover ? "text-[#3B9DF8]" : "dark:text-[#abc2d3] text-gray-600"} flex items-center gap-[5px] cursor-pointer`}
//                     onMouseEnter={() => setIsProductHover(true)}
//                     onMouseLeave={() => setIsProductHover(false)}>
//                     <MdLaptopMac className="text-[1.1rem]"/>
//                     Products
//                     <IoIosArrowUp
//                         className={`${isProductHover ? "rotate-0" : "rotate-[-180deg]"} transition-all duration-300`}/>

//                     {/* mega menu */}
//                     <div
//                         className={`${isProductHover ? "translate-y-0 opacity-100 z-30" : "translate-y-[20px] opacity-0 z-[-1]"} bg-white rounded-md w-full absolute top-[40px] left-0 p-[30px] transition-all duration-300 boxShadow flex flex-wrap gap-[30px]`}>

//                         <div className="grid grid-cols-2 gap-[30px]">
//                             <div className="flex flex-col gap-[20px]">

//                                 <h3 className="text-[1.2rem] text-gray-500 font-[500]">More
//                                     Products</h3>

//                                 <div className="flex float-start gap-[10px] group">
//                                     <img src="https://i.ibb.co/LQBDJGD/icon-logo-container.png"
//                                          alt="image" className="w-[30px] h-[30px]"/>

//                                     <div>
//                                         <h1 className="text-[1rem] text-gray-600 font-[500]">Demo
//                                             App</h1>
//                                         <p className="text-[0.9rem] text-gray-400 font-[300]">Lorem
//                                             ipsum dolor sit amet, consect adipiscing elit</p>

//                                         <button
//                                             className="text-[#FF5E5E] mt-2 flex items-center gap-[4px] text-[0.9rem]">
//                                             Call to action
//                                             <MdOutlineArrowRightAlt
//                                                 className="text-[1.4rem] group-hover:ml-[5px] transition-all duration-300"/>
//                                         </button>
//                                     </div>
//                                 </div>
//                                 <div className="flex float-start gap-[10px] group">
//                                     <img src="https://i.ibb.co/Y8cRWRj/icon-logo-container-1.png"
//                                          alt="image" className="w-[30px] h-[30px]"/>

//                                     <div>
//                                         <h1 className="text-[1rem] text-gray-600 font-[500]">CRM</h1>
//                                         <p className="text-[0.9rem] text-gray-400 font-[300]">Lorem
//                                             ipsum dolor sit amet, consect adipiscing elit</p>

//                                         <button
//                                             className="text-[#FE9239] mt-2 flex items-center gap-[4px] text-[0.9rem]">
//                                             Call to action
//                                             <MdOutlineArrowRightAlt
//                                                 className="text-[1.4rem] group-hover:ml-[5px] transition-all duration-300"/>
//                                         </button>
//                                     </div>
//                                 </div>
//                                 <div className="flex float-start gap-[10px] group">
//                                     <img src="https://i.ibb.co/6bGWgp6/icon-logo-container-2.png"
//                                          alt="image" className="w-[30px] h-[30px]"/>

//                                     <div>
//                                         <h1 className="text-[1rem] text-gray-600 font-[500]">CMS</h1>
//                                         <p className="text-[0.9rem] text-gray-400 font-[300]">Lorem
//                                             ipsum dolor sit amet, consect adipiscing elit</p>

//                                         <button
//                                             className="text-[#8B5CF6] mt-2 flex items-center gap-[4px] text-[0.9rem]">
//                                             Call to action
//                                             <MdOutlineArrowRightAlt
//                                                 className="text-[1.4rem] group-hover:ml-[5px] transition-all duration-300"/>
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="flex flex-col gap-[20px]">

//                                 <h3 className="text-[1.2rem] text-gray-500 font-[500]">Ecosystem</h3>

//                                 <div className="flex float-start gap-[10px]">
//                                     <BsBuildings className="text-[1.4rem] text-gray-600"/>

//                                     <div>
//                                         <h1 className="text-[1rem] text-gray-600 font-[500]">Directory</h1>
//                                         <p className="text-[0.9rem] text-gray-400 font-[300]">Lorem
//                                             ipsum dolor sit amet, consect adipiscing elit</p>
//                                     </div>
//                                 </div>
//                                 <div className="flex float-start gap-[10px]">
//                                     <BsCalendar2Date className="text-[1.4rem] text-gray-600"/>

//                                     <div>
//                                         <h1 className="text-[1rem] text-gray-600 font-[500] ">Bookings</h1>
//                                         <p className="text-[0.9rem] text-gray-400 font-[300]">Lorem
//                                             ipsum dolor sit amet, consect adipiscing elit</p>
//                                     </div>
//                                 </div>
//                                 <div className="flex float-start gap-[10px]">
//                                     <TbUsersGroup className="text-[1.4rem] text-gray-600"/>

//                                     <div>
//                                         <h1 className="text-[1rem] text-gray-600 font-[500]">User
//                                             feedback</h1>
//                                         <p className="text-[0.9rem] text-gray-400 font-[300]">Lorem
//                                             ipsum dolor sit amet, consect adipiscing elit</p>
//                                     </div>
//                                 </div>
//                                 <div className="flex float-start gap-[10px]">
//                                     <FaTasks className="text-[1.4rem] text-gray-600"/>

//                                     <div>
//                                         <h1 className="text-[1rem] text-gray-600 font-[500]">Task
//                                             Manager</h1>
//                                         <p className="text-[0.9rem] text-gray-400 font-[300]">Lorem
//                                             ipsum dolor sit amet, consect adipiscing elit</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div
//                             className="flex flex-col gap-[20px] bg-gray-50 rounded-md p-[20px] w-full">
//                             <div className="flex float-start gap-[10px] group">
//                                 <img src="https://i.ibb.co/VTqw5rY/img-container.png"
//                                      alt="image" className="w-[100px]"/>

//                                 <div>
//                                     <div className="mb-2 flex items-center gap-[5px]">
//                                         <h1 className="text-[1rem] text-gray-600 font-[500]">Check
//                                             the new app</h1>
//                                         <p className="py-[3px] px-[8px] text-[0.6rem] text-gray-500 border border-gray-300 rounded-full text-center">
//                                             Featured
//                                         </p>
//                                     </div>
//                                     <p className="text-[0.9rem] text-gray-400 font-[300]">Lorem
//                                         ipsum dolor sit amet, consect adipiscing elit</p>

//                                     <button
//                                         className="text-[#FF5E5E] mt-2 flex items-center gap-[4px] text-[0.9rem]">
//                                         Call to action
//                                         <MdOutlineArrowRightAlt
//                                             className="text-[1.4rem] group-hover:ml-[5px] transition-all duration-300"/>
//                                     </button>
//                                 </div>
//                             </div>
//                             <div className="flex float-start gap-[10px] group">
//                                 <img src="https://i.ibb.co/V2b5xnK/img-container-1.png"
//                                      alt="image" className="w-[100px]"/>

//                                 <div>
//                                     <h1 className="text-[1rem] text-gray-600 font-[500]">Check our
//                                         newsletter</h1>
//                                     <p className="text-[0.9rem] text-gray-400 font-[300]">Lorem
//                                         ipsum dolor sit amet, consect adipiscing elit</p>

//                                     <button
//                                         className="text-[#FF5E5E] mt-2 flex items-center gap-[4px] text-[0.9rem]">
//                                         Call to action
//                                         <MdOutlineArrowRightAlt
//                                             className="text-[1.4rem] group-hover:ml-[5px] transition-all duration-300"/>
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </li>

//                 <li className="flex items-center hover:text-[#3B9DF8] group gap-[5px] cursor-pointer">
//                     <AiOutlineFire
//                         className="text-[1.1rem] group-hover:text-[#3B9DF8] text-gray-600"/>
//                     Features
//                 </li>
//                 <li className="flex items-center hover:text-[#3B9DF8] group gap-[5px] cursor-pointer">
//                     <BiSupport className="text-[1.1rem] group-hover:text-[#3B9DF8] text-gray-600"/>
//                     Support
//                 </li>

//             </ul>

//             {/* user account */}
//             <div className="flex items-center gap-[15px]">
//                 <div className="flex items-center gap-[10px] cursor-pointer relative"
//                      onClick={() => setAccountMenuOpen(!accountMenuOpen)}>
//                     <div className="relative">
//                         <img
//                             src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?t=st=1724605498~exp=1724609098~hmac=7f6fc106bae2c17b0c93af1b2e5483d9d8368f3e51284aaec7c7d50590d2bae5&w=740"
//                             alt="avatar" className="w-[35px] h-[35px] rounded-full object-cover"/>
//                         <div
//                             className="w-[10px] h-[10px] rounded-full bg-green-500 absolute bottom-[0px] right-0 border-2 border-white"></div>
//                     </div>

//                     <h1 className="text-[1rem] font-[400] text-gray-600 sm:block hidden">Dhon
//                         Deo</h1>

//                     <div
//                         className={`${accountMenuOpen ? "translate-y-0 opacity-100 z-[1]" : "translate-y-[10px] opacity-0 z-[-1]"} bg-white w-max rounded-md absolute top-[45px] right-0 p-[10px] flex flex-col transition-all duration-300 gap-[5px]`}>
//                         <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] text-gray-600 hover:bg-gray-50">
//                             <FiUser/>
//                             View Profile
//                         </p>
//                         <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] text-gray-600 hover:bg-gray-50">
//                             <IoSettingsOutline/>
//                             Settings
//                         </p>
//                         <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] text-gray-600 hover:bg-gray-50">
//                             <FiUser/>
//                             View Profile
//                         </p>

//                         <div className="mt-3 border-t border-gray-200 pt-[5px]">
//                             <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] text-red-500 hover:bg-red-50">
//                                 <TbLogout2/>
//                                 Logout
//                             </p>
//                         </div>

//                     </div>

//                     <IoIosArrowUp
//                         className={`${accountMenuOpen ? "rotate-0" : "rotate-[180deg]"} transition-all duration-300 text-gray-600 sm:block hidden`}/>

//                 </div>

//                 <CiMenuFries onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
//                              className="text-[1.8rem] text-[#424242]c cursor-pointer md:hidden flex"/>
//             </div>

//             {/* mobile sidebar */}
//             <aside
//                 className={` ${mobileSidebarOpen ? "translate-x-0 opacity-100 z-20" : "translate-x-[200px] opacity-0 z-[-1]"} md:hidden bg-white p-4 text-center absolute top-[55px] right-0 sm:w-[300px] w-full rounded-md transition-all duration-300`}>
//                 <ul className="items-start gap-[20px] text-[1rem] text-gray-600 flex flex-col">
//                     <li onClick={() => setIsMegaMenuCollapse(!isMegaMenuCollapse)}
//                         className="hover:text-[#3B9DF8] group transition-all duration-500 cursor-pointer capitalize flex items-center gap-[10px]">
//                         Products
//                         <IoIosArrowDown
//                             className={`${isMegaMenuCollapse ? "rotate-0" : "rotate-[180deg]"} text-gray-600 group-hover:text-[#3B9DF8] transition-all duration-300`}/>
//                     </li>

//                     {/* product mega menu */}
//                     <div onClick={() => setMegaMenuSubItemsOpen("more_product")}
//                          className={`${isMegaMenuCollapse ? "hidden" : "block"} group font-[500] ml-6`}>
//                         <h4 className="text-left flex items-center gap-[5px]">
//                             More Products
//                             <MdOutlineKeyboardArrowRight className="text-[1.2rem]"/>
//                         </h4>

//                         <ul className={`${megaMenuSubItemsOpen === "more_product" ? "flex" : "hidden"} pl-6 mt-3 font-[400] items-start flex-col gap-[10px] text-gray-600`}>
//                             <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-pointer capitalize">Demo
//                                 App
//                             </li>
//                             <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-pointer capitalize">CRM</li>
//                             <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-pointer capitalize">CMS</li>
//                         </ul>
//                     </div>

//                     <div onClick={() => setMegaMenuSubItemsOpen("ecosystem")}
//                          className={`${isMegaMenuCollapse ? "hidden" : "block"} font-[500] ml-6`}>
//                         <h4 className="text-left flex items-center gap-[5px]">
//                             Ecosystem
//                             <MdOutlineKeyboardArrowRight className="text-[1.2rem]"/>
//                         </h4>

//                         <ul className={`${megaMenuSubItemsOpen === "ecosystem" ? "flex" : "hidden"} pl-6 mt-3 font-[400] items-start flex-col gap-[10px] text-gray-600`}>
//                             <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-pointer capitalize">Directory</li>
//                             <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-pointer capitalize">Bookings</li>
//                             <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-pointer capitalize">User
//                                 feedback
//                             </li>
//                             <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-pointer capitalize">Task
//                                 Manager
//                             </li>
//                         </ul>
//                     </div>

//                     <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-poin ter capitalize">Features
//                     </li>
//                     <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-pointer capitalize">Support</li>
//                 </ul>
//             </aside>
//         </nav>
//     );
// };

// export default Navbar;
