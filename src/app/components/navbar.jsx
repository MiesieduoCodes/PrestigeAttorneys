// components/navbar.jsx
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ModeToggle } from "@/app/components/mode-toggle";

// Links data in JSON format
const links = [
  { href: "/", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Our Teams" },
  { href: "/videos", label: "Videos" },
  { href: "/blog", label: "Blog" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the mobile menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Effect to detect dark mode
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(darkModeMediaQuery.matches);

    const handleDarkModeChange = (e) => {
      setIsDarkMode(e.matches);
    };

    darkModeMediaQuery.addEventListener("change", handleDarkModeChange);

    return () => {
      darkModeMediaQuery.removeEventListener("change", handleDarkModeChange);
    };
  }, []);

  return (
    <nav className="bg-white against p-3 dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-5 sm:px-7 lg:px-9">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" onClick={closeMenu}>
              {/* Conditionally render the logo based on the theme */}
              {isDarkMode ? (
                <img
                  src="/images/logo-dark.png"
                  alt="Prestige Attorneys"
                  className="h-10 z-50 "
                />
              ) : (
                <img
                  src="/images/logo-light.png"
                  alt="Prestige Attorneys"
                  className="h-10 bg-blue-950 z-50 "
                />
              )}
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex against items-center space-x-6">
            <div className="flex space-x-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-blue-950 text-sm dark:text-white font-medium hover:text-blue-600 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <ModeToggle />
            <Link href="/get-started">
              <button className="bg-blue-950 lufga text-white px-6 py-2 rounded-full hover:bg-blue-900 transition-colors duration-200">
                Connect With Us
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <ModeToggle />
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="text-gray-800 dark:text-white p-2 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${isOpen ? "block" : "hidden"} transition-all duration-300 ease-in-out`}
        >
          <div className="flex flex-col bg-white dark:bg-gray-800 shadow-lg">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-gray-800 dark:text-white p-4 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <div className="p-4">
              <Link href="/get-started" onClick={closeMenu}>
                <button className="bg-blue-600 lufga text-white px-4 py-2 rounded hover:bg-blue-700 w-full transition-colors duration-200">
                  Connect With Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;