"use client";

import React, { useState } from "react";
import Image from "next/image";

interface NavBarProps {
  isScrolled: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        id="main-header"
        className={`${isScrolled ? 'bg-black' : 'bg-transparent'} fixed top-0 left-0 right-0 z-50 mr-0 backdrop-blur-[var(--header-blur)] border-b border-[var(--header-border)] min-h-[65px]`}
      >
        <nav
          className="flex items-center justify-between mx-auto py-3 px-4 sm:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Aristotle</span>
              <Image
                className="w-auto h-[38px]"
                src='/assets/logo-cropped.png'
                alt="logo"
                width={120}
                height={60}
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              id="menu-toggle"
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                id="hamburger-icon"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#fff"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a
              href="#why"
              className="text-sm font-normal leading-6 text-white hover:text-brand-300 transition-colors duration-300"
            >
              Why
            </a>
            <a
              href="#how"
              className="text-sm font-normal leading-6 text-white hover:text-brand-300 transition-colors duration-300"
            >
              How
            </a>
            <a
              href="#who"
              className="text-sm font-normal leading-6 text-white hover:text-brand-300 transition-colors duration-300"
            >
              Who
            </a>
            <a
              href="#who"
              className="text-sm font-normal leading-6 text-white hover:text-brand-300 transition-colors duration-300"
            >
              Blog
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-brand-50">
              <span className="absolute inset-[-1000%] animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ffebcb_0%,#84725C_50%,#ffebcb_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl hover:bg-brand-500 hover:text-brand-50 transition duration-300">
                Book an onboarding call
              </span>
            </button>
          </div>
        </nav>
      </header>
      <div
        id="mobile-menu"
        className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <button
              id="menu-close"
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
              onClick={toggleMenu}
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#fff"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="space-y-2 py-6">
                <a
                  href="#why"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-white hover:bg-brand-100 hover:bg-opacity-10"
                >
                  Why
                </a>
                <a
                  href="#how"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-white hover:bg-brand-100 hover:bg-opacity-10"
                >
                  How
                </a>
                <a
                  href="#who"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-white hover:bg-brand-100 hover:bg-opacity-10"
                >
                  Who
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-white hover:bg-brand-100 hover:bg-opacity-10"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-medium leading-7 bg-brand-500 text-white hover:bg-brand-500"
                >
                  <span className="flex justify-between">
                    Book an onboarding call
                    <span className="flex" aria-hidden="true">
                      →
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;