'use client';
import Image from 'next/image';
import React from 'react';
import FooterImg from '@/assets/images/sdsFooterLogo.svg';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Footer = () => {
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

  useEffect(() => {
    const currentIndex = menuItems.findIndex(
      (item) => item.href === pathname || item.href.startsWith('/case-')
    );

    setActiveIndex(currentIndex !== -1 ? currentIndex : null);
  }, [pathname]);
  return (
    <footer className="bg-white w-full">
      <div className="w-full">
        <div className="bg-black sds_layout_padding flex flex-col lg:flex-row gap-4 items-center sm:justify-between py-6">
          <Link
            href="/"
            className="flex items-center sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={FooterImg}
              className="h-8"
              alt="Flowbite Logo"
              width={200}
              height={10}
            />
          </Link>

          <ul className="text-base font-semibold font-sans flex flex-col text-center lg:text-left md:p-0 lg:flex-row xl:space-x-4 xl:mr-4 md:border-0">
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
                  className={`absolute w-[70%] lg:w-full rounded-t-md lg:top-[55px] top-[30px] h-2 bg-orange-500 
              transition-all duration-300 left-[18px] lg:left-0  ${
                activeIndex === index
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100'
              }`}
                ></span>
              </li>
            ))}
          </ul>
        </div>
        <span className="block text-sm text-black text-center dark:text-gray-400 py-6 md:py-[10px]">
          <a href="https://flowbite.com/" className="hover:underline">
            © sdssoftwares2025
          </a>
          ,All Rights Reserved. Company Registration No. 08183306{' '}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
