'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, ShoppingCart, Menu } from 'lucide-react';

const NavItem = ({ title, href, className = '' }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  
  return (
    <Link 
      href={href} 
      className={`relative font-bold text-sm xl:text-base px-4 py-2 transition-colors duration-200 ${
        isActive ? 'text-green-700' : 'text-gray-600 hover:text-green-600'
      } ${className}`}
    >
      {title}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 rounded-full" />
      )}
    </Link>
  );
};

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-105 transition-transform">
              V
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold text-gray-800 leading-none tracking-tight">
                VITHAL <span className="text-green-600">SUPER SHOPEE</span>
              </span>
              <span className="text-[0.65rem] font-bold text-gray-400 tracking-widest uppercase">
                Kirana Store
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-full border border-gray-100">
            <NavItem title="Home" href="/" />
            <NavItem title="Categories" href="/categories" />
            <NavItem title="All Products" href="/products" />
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Search */}
            <div className="hidden sm:flex items-center bg-gray-100 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-green-500/20 transition-all w-48 lg:w-64">
              <Search size={18} className="text-gray-400" />
              <input 
                type="text" 
                placeholder="Search items..." 
                className="bg-transparent border-none outline-none text-sm ml-2 w-full text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-gray-600 hover:text-green-600 transition-colors">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
