/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import HeaderImg from '@/assets/images/sdsLogoHeader.svg';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const pathname = usePathname();

  const menuItems = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'About Us',
      href: '/aboutus/',
    },
    {
      name: 'Services',
      href: '/services/',
    },
    {
      name: 'Portfolio',
      href: '/portfolio/',
    },
    {
      name: 'Case Studies',
      href: '/case-studies/',
    },
  ];
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const currentIndex = menuItems.findIndex(
      (item) => item.href === pathname || item.href.startsWith('/case-')
    );

    setActiveIndex(currentIndex !== -1 ? currentIndex : null);
  }, [pathname]);

  return (
    <nav className="bg-[#187AC3]">
      <div className="w-full flex flex-wrap items-center justify-between sds_layout_padding py-6">
        {/* Logo */}
        <div className="relative right-5 sm:right-0">
          <div className="bg-white p-7 rounded-[20px] border border-[#187AC3] absolute w-max top-[-15px]">
            <Link
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <Image
                src={HeaderImg}
                alt="Flowbite Logo"
                width={220}
                height={10}
              />
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-300 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 relative top-3 left-2 sm:left-0 sm:top-0 "
          aria-controls="navbar-default"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-10 h-10"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full lg:block md:w-auto" id="navbar-default">
          <ul className="text-base font-semibold font-sans flex flex-col p-4 md:p-0 mt-4 md:flex-row xl:space-x-4 xl:mr-4 md:mt-0 md:border-0">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="relative group text-white font-semibold"
                onClick={() => setActiveIndex(index)} // Set active navlink on click
              >
                {/* Link */}
                <Link
                  href={item.href}
                  className="block py-2 px-4 hover:text-[16px] transform duration-300 ease-in group-hover:scale-110"
                >
                  {item.name}
                </Link>
                {/* Orange Line */}
                <span
                  className={`absolute w-full rounded-t-md top-[55px] h-2 bg-orange-500 
              transition-all duration-300  ${
                activeIndex === index
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100'
              }`}
                ></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-0 left-0 w-full h-full bg-white z-50">
            <div className="flex justify-end items-center p-4 ">
              {/* <Link
                href="/"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <Image
                  src={HeaderImg}
                  alt="Flowbite Logo"
                  width={245}
                  height={20}
                />
              </Link> */}

              <button
                onClick={closeMenu}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <ul className="text-base font-semibold font-sans flex flex-col p-4 space-y-4">
              <li>
                <Link
                  href="/"
                  className="block py-2 px-3 text-lg sm:text-xl md:text-2xl text-black rounded"
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/aboutus"
                  className="block py-2 px-3 text-lg sm:text-xl md:text-2xl  text-black  rounded"
                  onClick={closeMenu}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="block py-2 px-3 text-lg sm:text-xl md:text-2xl text-black  rounded"
                  onClick={closeMenu}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="block py-2 px-3 text-lg sm:text-xl md:text-2xl text-black  rounded"
                  onClick={closeMenu}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="block py-2 px-3 text-lg sm:text-xl md:text-2xl text-black  rounded"
                  onClick={closeMenu}
                >
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
