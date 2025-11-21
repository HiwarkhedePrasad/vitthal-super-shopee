'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, ChevronDown } from 'lucide-react';

// Reusable Nav Item
const NavItem = ({ title, color, href, hasDropdown, className = '' }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const words = title.split(' ');
  
  return (
    <Link 
      href={href} 
      className={`${color} text-white font-bold flex flex-col justify-center items-center text-center px-3 xl:px-4 h-24 xl:h-28 min-w-[110px] xl:min-w-[120px] cursor-pointer hover:brightness-110 transition-all duration-200 border-0 no-underline ${isActive ? 'pb-8 xl:pb-10' : ''} ${className}`}
    >
      {words.map((word, i) => (
        <span key={i} className="block whitespace-nowrap text-base xl:text-lg leading-tight">
          {word}
        </span>
      ))}
      {hasDropdown && (
        <ChevronDown className="w-4 h-4 mt-1 animate-pulse" />
      )}
    </Link>
  );
};

// Mobile Nav Item
const MobileNavItem = ({ title, color, href }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link 
      href={href} 
      className={`${color} text-white text-xs sm:text-sm font-bold px-4 py-3 min-w-[100px] rounded-md cursor-pointer hover:brightness-110 transition-all duration-200 no-underline ${isActive ? 'ring-2 ring-white ring-offset-2 ring-offset-transparent' : ''}`}
    >
      <span className="whitespace-nowrap">{title}</span>
    </Link>
  );
};

export default function Header() {
  return (
    <header className="relative z-50 w-full bg-gradient-to-b from-yellow-50 to-transparent">
      {/* Desktop Header */}
      <div className="hidden lg:flex items-start px-4 xl:px-6 pt-4">
        {/* Logo */}
        <div className="bg-orange-600 text-white flex flex-col justify-center items-center font-extrabold leading-none shadow-xl rounded-br-3xl w-52 h-32">
          <span className="text-3xl tracking-widest drop-shadow-md">VSS</span>
          <span className="text-5xl tracking-widest drop-shadow-md">STORE</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 flex justify-center items-center ml-4">
          <div className="flex items-center gap-0 rounded-lg overflow-hidden shadow-md">
            <NavItem title="HOME" color="bg-lime-500" href="/" />
            <NavItem title="SHOPPING GUIDE" color="bg-orange-500" href="/shopping-guide" hasDropdown />
            <NavItem title="SPECIALS" color="bg-lime-500" href="/specials" />
            <NavItem title="LOCATIONS" color="bg-orange-500" href="/locations" />
          </div>
        </nav>

        {/* Search Bar */}
        <div className="ml-4 mt-10">
          <div className="flex items-center bg-white rounded-full pl-6 pr-3 py-3 shadow-lg border border-gray-200 w-64 xl:w-80 group focus-within:ring-2 focus-within:ring-orange-400 transition-all">
            <input
              type="text"
              placeholder="Search products..."
              className="outline-none text-lg text-gray-700 bg-transparent flex-1"
              aria-label="Search products"
            />
            <Search className="w-6 h-6 text-gray-400 group-hover:text-orange-600 transition-colors cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden px-4 py-4">
        <div className="flex items-center justify-between mb-4 gap-3">
          {/* Mobile Logo */}
          <div className="bg-orange-600 text-white flex flex-col justify-center items-center font-extrabold leading-none shadow-lg rounded-br-2xl w-44 h-28">
            <span className="text-2xl tracking-widest drop-shadow-md">VSS</span>
            <span className="text-4xl tracking-widest drop-shadow-md">STORE</span>
          </div>

          {/* Mobile Search */}
          <div className="flex items-center bg-white rounded-full pl-4 pr-2 py-2 shadow-inner border border-gray-200 flex-1">
            <input
              type="text"
              placeholder="Search..."
              className="outline-none text-base text-gray-600 bg-transparent flex-1"
              aria-label="Search"
            />
            <Search className="w-5 h-5 text-gray-400 hover:text-orange-600 transition-colors" />
          </div>
        </div>

        {/* Mobile Nav */}
        <nav className="overflow-x-auto scrollbar-hide -mx-4 px-4">
          <div className="flex gap-2 min-w-max pb-2">
            <MobileNavItem title="HOME" color="bg-lime-500" href="/" />
            <MobileNavItem title="SHOPPING GUIDE" color="bg-orange-500" href="/shopping-guide" />
            <MobileNavItem title="SPECIALS" color="bg-lime-500" href="/specials" />
            <MobileNavItem title="LOCATIONS" color="bg-orange-500" href="/locations" />
          </div>
        </nav>
      </div>
    </header>
  );
}
