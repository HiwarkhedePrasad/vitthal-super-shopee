'use client';
import React from 'react';
import { Search, Phone } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fcf8e3] font-sans selection:bg-orange-200 w-full">
      {/* Header & Navigation */}
      <header className="bg-transparent relative z-20 w-full">
        {/* Desktop Header */}
        <div className="hidden lg:flex w-full px-4 xl:px-6 items-start">
          {/* Logo - Fixed on left */}
          <div className="bg-[#ff6600] text-white flex flex-col justify-center items-center font-extrabold leading-none shadow-lg shrink-0" style={{ width: '280px', height: '160px' }}>
            <span className="text-4xl block tracking-widest drop-shadow-md">GROCERY</span>
            <span className="text-7xl block tracking-widest drop-shadow-md">STORE</span>
          </div>

          {/* Navigation - Centered with no gaps */}
          <nav className="flex-1 flex justify-center items-center ml-4 overflow-x-auto">
            <div className="flex items-center justify-center gap-0">
              <NavItem title="HOME" color="bg-[#9ACD32]" active />
              <NavItem title="SHOP ONLINE" color="bg-[#008080]" />
              <NavItem title="MY ACCOUNT" color="bg-[#FFD700]" />
              <NavItem title="SHOPPING GUIDE" color="bg-[#FF8C00]" hasDropdown />
              <NavItem title="SPECIALS" color="bg-[#9ACD32]" />
              <NavItem title="RECIPES" color="bg-[#008080]" />
              <NavItem title="EMPLOYMENT" color="bg-[#FFD700]" />
              <NavItem title="LOCATIONS" color="bg-[#FF8C00]" />
            </div>
          </nav>

          {/* Search Bar */}
          <div className="ml-4 mt-10 flex items-center bg-white rounded-full pl-6 pr-3 py-3 shadow-inner border border-gray-200 shrink-0">
            <input
              type="text"
              placeholder="Search..."
              className="outline-none text-lg w-48 xl:w-64 text-gray-600 bg-transparent"
            />
            <Search className="w-6 h-6 text-gray-400 cursor-pointer hover:text-[#ff6600] transition-colors" />
          </div>
        </div>

        {/* Mobile/Tablet Header */}
        <div className="lg:hidden w-full px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            {/* Mobile Logo */}
            <div className="bg-[#ff6600] text-white flex flex-col justify-center items-center font-extrabold leading-none shadow-lg" style={{ width: '180px', height: '100px' }}>
              <span className="text-2xl block tracking-widest drop-shadow-md">GROCERY</span>
              <span className="text-4xl block tracking-widest drop-shadow-md">STORE</span>
            </div>

            {/* Mobile Search */}
            <div className="flex items-center bg-white rounded-full pl-4 pr-2 py-2 shadow-inner border border-gray-200 flex-1 ml-4 max-w-xs">
              <input
                type="text"
                placeholder="Search..."
                className="outline-none text-base w-full text-gray-600 bg-transparent"
              />
              <Search className="w-5 h-5 text-gray-400 cursor-pointer hover:text-[#ff6600] transition-colors shrink-0" />
            </div>
          </div>

          {/* Mobile Navigation - Horizontal Scroll */}
          <nav className="overflow-x-auto -mx-4 px-4">
            <div className="flex gap-2 min-w-max pb-2">
              <MobileNavItem title="HOME" color="bg-[#9ACD32]" active />
              <MobileNavItem title="SHOP" color="bg-[#008080]" />
              <MobileNavItem title="ACCOUNT" color="bg-[#FFD700]" />
              <MobileNavItem title="GUIDE" color="bg-[#FF8C00]" />
              <MobileNavItem title="SPECIALS" color="bg-[#9ACD32]" />
              <MobileNavItem title="RECIPES" color="bg-[#008080]" />
              <MobileNavItem title="JOBS" color="bg-[#FFD700]" />
              <MobileNavItem title="LOCATIONS" color="bg-[#FF8C00]" />
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative -mt-16 lg:-mt-44 pt-20 lg:pt-48 pb-8 lg:pb-8 overflow-hidden w-full lg:max-h-[110vh]">
        {/* Background curved shape approximation */}
        <div className="absolute top-0 left-0 right-0 h-[400px] lg:h-[550px] bg-white rounded-b-[50%] scale-x-150 translate-y-[-20%] z-0 opacity-50"></div>

        <div className="w-full px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-center relative z-10">
          {/* Woman Image Area */}
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-start relative order-2 lg:order-1">
            <div className="relative w-full max-w-md lg:max-w-none">
              <img
                src="/women.png"
                alt="Woman holding grocery bag"
                className="w-full h-auto object-contain drop-shadow-xl lg:ml-8"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/800x900?text=Woman+Placeholder';
                }}
              />
            </div>
          </div>

          {/* Hero Text Area */}
          <div className="lg:w-1/2 text-center w-full relative order-1 lg:order-2 mb-8 lg:mb-0 lg:-ml-20 xl:-ml-24 z-20 flex flex-col items-center lg:justify-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold leading-none drop-shadow-sm">
              <span className="text-[#FFD700] block">VITTHAL</span>
              <span className="text-[#ff6600] block">SUPER SHOPEE</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#008080] tracking-wide drop-shadow-sm">
              FOR TRUE GOURMETS
            </h2>
            <button className="bg-[#9ACD32] text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold px-8 sm:px-10 lg:px-14 py-4 sm:py-5 lg:py-7 rounded-sm shadow-lg hover:bg-[#8bb82d] transition-all transform hover:-translate-y-1 active:translate-y-0 w-full sm:w-auto">
              GREAT SHOPPING EXPERIENCE!
            </button>
          </div>
        </div>
      </main>
      
      {/* Price of the Week Section */}
      <section className="bg-white py-12 lg:py-20 border-t-4 border-[#f0f0f0] relative -mt-20 sm:-mt-32 lg:-mt-52 z-20 w-full px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-600 uppercase mb-8 lg:mb-12 tracking-tight text-center lg:text-left">
            PRICE OF THE WEEK
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 w-full">
            {/* Product 1: Chicken */}
            <OfferCard
              title="LOREM IPSUM DOLOR"
              oldPrice="27.99"
              newPrice="22.99"
              discount="-13%"
              image="https://placehold.co/400x300/png?text=Raw+Chicken"
            />
            {/* Product 2: Fritos */}
            <OfferCard
              title="LOREM IPSUM DOLOR SIT AMET CONSE"
              oldPrice="27.99"
              newPrice="22.99"
              discount="-13%"
              image="https://placehold.co/400x300/png?text=Fritos+Bag"
            />
            {/* Product 3: Beer */}
            <OfferCard
              title="DOLOR SIT AMET CONSE"
              oldPrice="4.99"
              newPrice="2.99"
              discount="-13%"
              image="https://placehold.co/400x300/png?text=Heineken+Bottles"
            />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      
    </div>
  );
}

// --- Helper Components ---

function MobileNavItem({ title, color, active }) {
  return (
    <div
      className={`${color} text-white text-sm font-bold flex items-center justify-center text-center px-4 py-3 min-w-[100px] cursor-pointer hover:brightness-110 transition-all rounded ${
        active ? 'ring-2 ring-white' : ''
      }`}
    >
      <span className="whitespace-nowCrap">{title}</span>
    </div>
  );
}

function NavItem({ title, color, active, hasDropdown }) {
  return (
    <div
      className={`${color} text-white text-base xl:text-lg font-bold flex flex-col justify-center items-center text-center px-3 xl:px-4 h-28 xl:h-32 min-w-[110px] xl:min-w-[120px] cursor-pointer hover:brightness-110 transition-all leading-tight border-0 ${
        active ? 'pb-8 xl:pb-10' : ''
      }`}
    >
      {title.split(' ').map((word, i) => (
        <span key={i} className="block whitespace-nowrap">
          {word}
        </span>
      ))}
      {hasDropdown && <span className="text-sm mt-2">▼</span>}
    </div>
  );
}

function OfferCard({ title, oldPrice, newPrice, discount, image }) {
  return (
    <div className="flex flex-col group cursor-pointer w-full">
      <div className="relative mb-4 lg:mb-6 overflow-hidden w-full">
        <img
          src={image}
          alt={title}
          className="h-48 sm:h-56 lg:h-64 w-full object-contain mx-auto transition-transform duration-300 group-hover:scale-110"
          onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/400x300?text=Product' }}
        />
        {/* Price Tags */}
        <div className="absolute top-0 right-0 flex flex-col items-end">
          <span className="text-gray-400 line-through text-sm sm:text-base bg-white/90 px-2 sm:px-3 mb-2 rounded-sm">
            ${oldPrice}
          </span>
          <div className="flex shadow-lg">
            <div className="bg-[#FFD700] text-white font-bold text-xl sm:text-2xl px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-center min-w-20 sm:min-w-[100px]">
              ${newPrice}
            </div>
            <div className="bg-[#ff0000] text-white text-sm sm:text-base font-bold px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-center ml-1">
              {discount}
            </div>
          </div>
        </div>
      </div>
      <h4 className="text-[#4682B4] font-bold text-base sm:text-lg uppercase mb-3 lg:mb-4 hover:text-[#ff6600] transition-colors leading-tight">
        {title}
      </h4>
      <p className="text-gray-400 text-sm sm:text-base leading-relaxed line-clamp-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
}

function FooterItem({ children }) {
  return (
    <li className="flex items-start group cursor-pointer">
      <span className="text-[#ff6600] mr-3 leading-none mt-1 text-lg">•</span>
      <span className="group-hover:text-[#ff6600] transition-colors text-sm sm:text-base">{children}</span>
    </li>
  );
}