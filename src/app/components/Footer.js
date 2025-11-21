'use client'
import React from 'react';
import { Phone } from 'lucide-react';

// Footer Link
const FooterLink = ({ children }) => (
  <li className="flex items-center group cursor-pointer py-1">
    <span className="text-orange-600 mr-2 text-lg">•</span>
    <span className="text-gray-600 group-hover:text-orange-600 transition-colors text-sm sm:text-base">
      {children}
    </span>
  </li>
);

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h4 className="font-bold text-gray-800 text-lg uppercase mb-5">CUSTOMER HELP</h4>
            <ul className="space-y-3">
              <FooterLink>Product Quality</FooterLink>
              <FooterLink>Returns & Exchange</FooterLink>
              <FooterLink>Consumer Rights</FooterLink>
            </ul>
          </div>
          <div>
            <div className="bg-orange-600 text-white p-6 rounded-lg shadow-xl max-w-sm mx-auto lg:mx-0">
              <div className="flex items-center space-x-4 mb-4">
                <Phone className="w-10 h-10 opacity-60" />
                <p className="font-bold text-xl uppercase">CONTACT US</p>
              </div>
              <div>
                <p className="font-bold text-lg mb-2">Vitthal Super Shop</p>
                <p className="text-sm opacity-90 leading-relaxed mb-3">
                  QMQM+6Q5 gajanan watika chauk,<br />
                  Khamgaon Rd, Adarsha Nagar,<br />
                  SBI Colony, Shegaon,<br />
                  Maharashtra 444203
                </p>
                <p className="font-bold text-lg tracking-wider">+91 70204 02642</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
