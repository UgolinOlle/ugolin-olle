import React from 'react';
import Link from 'next/link';
import { FiGithub, FiMenu } from 'react-icons/fi';

import Toggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between fixed z-10 w-full border-b-[1px] border-b-gray-300 dark:border-b-white bg-white dark:bg-dark dark:text-white">
      <div className="p-3 pl-8">
        <h1 className="text-3xl font-extrabold">UO</h1>
      </div>
      <div className="text-[18px] cursor-pointer md:hidden block">
        <FiMenu />
      </div>
      <div
        className="hidden w-full md:flex md:items-center md:w-auto "
        id="menu"
      >
        <ul className="md:flex md:justify-between md:pt-0">
          <li className="p-5 text-[18px]">
            <Link href="/" className="hover:text-blue-700 transition-all">
              Accueil
            </Link>
          </li>
          <li className="p-5 text-[18px]">
            <Link
              href="/services"
              className="hover:text-blue-700 transition-all"
            >
              Services
            </Link>
          </li>
          <li className="p-5 text-[18px]">
            <a
              href="mailto:ugolin@olle.pro"
              className="hover:text-blue-700 transition-all"
            >
              Contact
            </a>
          </li>
          <li className="p-5 text-[18px] flex items-center">
            <a
              href="https://github.com/UgolinOlle"
              target="_blank"
              className="hover:text-blue-700 transition-all"
              rel="noreferrer"
            >
              <FiGithub />
            </a>
          </li>
        </ul>
      </div>
      <div className="pr-5">
        <Toggle />
      </div>
    </nav>
  );
};

export default Navbar;
