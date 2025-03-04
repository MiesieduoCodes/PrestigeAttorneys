// components/navbar.jsx
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { ModeToggle } from '@/app/components/mode-toggle';

// Links data in JSON format
const links = [
  { href: "/", label: "About Us" },
  { href: "/services", label: "Servics" },
  { href: "/team", label: "Our Teams" },
  { href: "/videos", label: "Videos" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex justify-between items-center">
            <Link href="/">
              <img src="/images/logo.png" alt="Prestige Attorneys" className="h-8 w-8 mr-2" />
            </Link>
            <div className="hidden md:flex space-x-4">
              {links.map(link => (
                <Link key={link.href} href={link.href} className="text-gray-800 dark:text-white hover:text-blue-600">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <ModeToggle />
            <Link href="/get-started">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col bg-white dark:bg-gray-800 shadow-md">
          {links.map(link => (
            <Link key={link.href} href={link.href} className="text-gray-800 dark:text-white p-4 hover:bg-gray-200 dark:hover:bg-gray-700">
              {link.label}
            </Link>
          ))}
          <div className="p-4">
            <ModeToggle />
            <Link href="/get-started">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;