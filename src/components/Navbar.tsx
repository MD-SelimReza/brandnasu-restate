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
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(target)
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="w-full bg-darkIndigo shadow-md sticky top-0 z-50 font-sans">
      <div className="flex items-center justify-between px-5 py-4 max-w-[1440px] mx-auto relative">
        {/* Logo */}
        <Link href="/">
          <div className="relative lg:w-32 md:w-28 w-24">
            <Image src={logo} alt="logo" className="object-cover" />
          </div>
        </Link>

        <div className="flex items-center space-x-4 text-lg">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="xl:hidden text-2xl text-lightIndigo"
          >
            {menuOpen ? <IoClose /> : <RxHamburgerMenu />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center text-base text-lightIndigo">
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
          {/* <div className="hidden xl:flex text-base gap-6"> */}
          {/* <Link
            href="/admin/projects/add"
            className="px-4 py-1 block bg-indigo text-white border-[0.1px] border-indigo transition-all duration-200 rounded-full"
          >
            Add Project
          </Link> */}
          <Link
            href="https://client.brandnasu.com/sign-in"
            className="hidden xl:block px-4 py-1 border-[0.1px] hover:bg-indigo hover:border-indigo transition-all duration-200 border-lightIndigo/25 text-lightIndigo rounded-full"
          >
            Dashboard
          </Link>
          {/* </div> */}
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

          {/* <li className="pt-6">
            <button
              onClick={toggleMenu}
              className="bg-indigo text-white w-full py-2 rounded-full"
            >
              Watch A Demo
            </button>
          </li> */}

          <li className="pt-5">
            <Link
              onClick={toggleMenu}
              href="https://client.brandnasu.com/sign-in"
            >
              <button className="border border-lightIndigo w-full py-2 rounded-full">
                Dashboard
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
