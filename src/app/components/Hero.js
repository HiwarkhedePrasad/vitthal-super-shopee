'use client';

import React from 'react';

export default function Hero() {
  return (
    <div className="relative -mt-16 lg:-mt-24 pt-20 lg:pt-28 pb-12 lg:pb-16 overflow-hidden bg-yellow-50">
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
    </div>
  );
}
