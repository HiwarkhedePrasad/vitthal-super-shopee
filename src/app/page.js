'use client';

import React from 'react';
import { Search, Phone, ChevronDown } from 'lucide-react';

// Reusable Nav Item
const NavItem = ({ title, color, active, hasDropdown, className = '' }) => {
  const words = title.split(' ');
  return (
    <div
      className={`${color} text-white font-bold flex flex-col justify-center items-center text-center px-3 xl:px-4 h-24 xl:h-28 min-w-[110px] xl:min-w-[120px] cursor-pointer hover:brightness-110 transition-all duration-200 border-0 ${active ? 'pb-8 xl:pb-10' : ''
        } ${className}`}
    >
      {words.map((word, i) => (
        <span key={i} className="block whitespace-nowrap text-base xl:text-lg leading-tight">
          {word}
        </span>
      ))}
      {hasDropdown && (
        <ChevronDown className="w-4 h-4 mt-1 animate-pulse" />
      )}
    </div>
  );
};

// Mobile Nav Item
const MobileNavItem = ({ title, color, active }) => (
  <div
    className={`${color} text-white text-xs sm:text-sm font-bold px-4 py-3 min-w-[100px] rounded-md cursor-pointer hover:brightness-110 transition-all duration-200 ${active ? 'ring-2 ring-white ring-offset-2 ring-offset-transparent' : ''
      }`}
  >
    <span className="whitespace-nowrap">{title}</span>
  </div>
);

// Offer Card
const OfferCard = ({ title, oldPrice, newPrice, discount, image }) => (
  <div className="group cursor-pointer bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
    <div className="relative overflow-hidden">
      <img
        src={image}
        alt={title}
        className="h-56 sm:h-64 w-full object-contain mx-auto transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/400x300?text=Product';
        }}
      />
      {/* Price Tags */}
      <div className="absolute top-2 right-2 flex flex-col items-end space-y-1">
        <span className="text-gray-500 line-through text-sm bg-white/80 px-2 py-1 rounded backdrop-blur-sm">
          ${oldPrice}
        </span>
        <div className="flex shadow-md">
          <div className="bg-yellow-400 text-white font-bold text-xl sm:text-2xl px-3 py-2 flex items-center">
            ${newPrice}
          </div>
          <div className="bg-red-600 text-white font-bold text-sm px-3 py-2 ml-1 flex items-center">
            {discount}
          </div>
        </div>
      </div>
    </div>
    <div className="p-4">
      <h4 className="text-steel-blue font-bold text-base sm:text-lg uppercase mb-2 hover:text-orange-600 transition-colors line-clamp-2">
        {title}
      </h4>
      <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
        Premium quality product with fresh ingredients. Limited time offer!
      </p>
    </div>
  </div>
);

// Footer Link
const FooterLink = ({ children }) => (
  <li className="flex items-center group cursor-pointer py-1">
    <span className="text-orange-600 mr-2 text-lg">•</span>
    <span className="text-gray-600 group-hover:text-orange-600 transition-colors text-sm sm:text-base">
      {children}
    </span>
  </li>
);

export default function Home() {
  return (
    <>
      {/* Inject Global Styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Realistic PNG Drop Shadow */
        .shadow-png-pro {
          filter: 
            drop-shadow(0 25px 35px rgba(0,0,0,0.15))
            drop-shadow(0 10px 15px rgba(0,0,0,0.1))
            drop-shadow(0 4px 6px rgba(0,0,0,0.05));
          transition: filter 0.4s ease;
        }
        .shadow-png-pro:hover {
          filter: 
            drop-shadow(0 30px 45px rgba(0,0,0,0.2))
            drop-shadow(0 15px 20px rgba(0,0,0,0.15))
            drop-shadow(0 6px 10px rgba(0,0,0,0.1));
        }
      `}</style>

      <div className="min-h-screen bg-yellow-50 font-sans selection:bg-orange-200 w-full overflow-x-hidden">
        {/* Header */}
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
                <NavItem title="HOME" color="bg-lime-500" active />
                <NavItem title="SHOPPING GUIDE" color="bg-orange-500" hasDropdown />
                <NavItem title="SPECIALS" color="bg-lime-500" />
                <NavItem title="LOCATIONS" color="bg-orange-500" />
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
                <MobileNavItem title="HOME" color="bg-lime-500" active />
                <MobileNavItem title="SHOP" color="bg-teal-600" />
                <MobileNavItem title="ACCOUNT" color="bg-yellow-500" />
                <MobileNavItem title="GUIDE" color="bg-orange-500" />
                <MobileNavItem title="SPECIALS" color="bg-lime-500" />
                <MobileNavItem title="RECIPES" color="bg-teal-600" />
                <MobileNavItem title="JOBS" color="bg-yellow-500" />
                <MobileNavItem title="LOCATIONS" color="bg-orange-5G0" />
              </div>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <main className="relative -mt-16 lg:-mt-24 pt-20 lg:pt-28 pb-12 lg:pb-16 overflow-hidden">
          {/* Curved Background */}
          <div className="absolute inset-x-0 top-0 h-full bg-white rounded-b-[50%] scale-x-150 -translate-y-1/4 opacity-60 pointer-events-none"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* Woman Image with PRO Shadow */}
              <div className="order-1 lg:order-1 flex justify-center lg:justify-start relative">
                <div className="relative max-w-md lg:max-w-lg w-full">
                  <img
                    src="/women.png"
                    alt="Happy woman holding grocery bag"
                    className="w-full h-auto object-contain shadow-png-pro animate-float"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/800x900?text=Woman+Grocery';
                    }}
                  />
                </div>
              </div>

              {/* Hero Text */}
              <div className="order-2 lg:order-2 text-center lg:text-left relative z-10 lg:-ml-35">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                  <span className="block text-yellow-400 drop-shadow-md">VITTHAL</span>
                  <span className="block text-orange-600 drop-shadow-md">SUPER SHOPEE</span>
                </h1>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-teal-700 mt-3 tracking-wide">
                  FOR TRUE GOURMETS
                </p>
                <button className="mt-6 bg-lime-500 text-white font-bold text-lg sm:text-xl px-8 py-4 rounded-md shadow-xl hover:bg-lime-600 transform hover:-translate-y-1 transition-all duration-200 active:scale-95">
                  GREAT SHOPPING EXPERIENCE!
                </button>
              </div>

            </div>
          </div>
        </main>

        {/* Price of the Week */}
        <section className="py-16 lg:py-24 bg-white -mt-12 lg:-mt-20 relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-700 uppercase mb-10 text-center lg:text-left tracking-tight">
              PRICE OF THE WEEK
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <OfferCard
                title="FRESH CHICKEN BREAST"
                oldPrice="27.99"
                newPrice="22.99"
                discount="-18%"
                image="https://placehold.co/400x300/png?text=Raw+Chicken"
              />
              <OfferCard
                title="FRITOS CORN CHIPS"
                oldPrice="4.99"
                newPrice="2.99"
                discount="-40%"
                image="https://placehold.co/400x300/png?text=Fritos+Bag"
              />
              <OfferCard
                title="HEINEKEN 6-PACK"
                oldPrice="12.99"
                newPrice="9.99"
                discount="-23%"
                image="https://placehold.co/400x300/png?text=Heineken"
              />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-50 py-16 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              <div>
                <h4 className="font-bold text-gray-800 text-lg uppercase mb-5">ABOUT NETWORK</h4>
                <ul className="space-y-3">
                  <FooterLink>Gift Certificates</FooterLink>
                  <FooterLink>Quality Control</FooterLink>
                  <FooterLink>Service Monitoring</FooterLink>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 text-lg uppercase mb-5">CAREER</h4>
                <ul className="space-y-3">
                  <FooterLink>For Graduates</FooterLink>
                  <FooterLink>Apply Online</FooterLink>
                  <FooterLink>Current Openings</FooterLink>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 text-lg uppercase mb-5">BUYER</h4>
                <ul className="space-y-3">
                  <FooterLink>Product Quality</FooterLink>
                  <FooterLink>Returns & Exchange</FooterLink>
                  <FooterLink>Consumer Rights</FooterLink>
                </ul>
              </div>
              <div className="sm:col-span-2 lg:col-span-1">
                <div className="bg-orange-600 text-white p-6 rounded-lg shadow-xl flex items-center space-x-4 max-w-sm mx-auto lg:mx-0">
                  <Phone className="w-12 h-12 opacity-40" />
                  <div>
                    <p className="font-bold text-xl uppercase">HOT LINE</p>
                    <p className="font-bold text-3xl tracking-wider">+1 234 567 8901</p>
                    <p className="text-xs opacity-80 tracking-widest mt-1">7 DAYS: 9AM - 8PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}