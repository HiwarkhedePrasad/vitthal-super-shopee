'use client'
import React from 'react';
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-600 rounded-md flex items-center justify-center text-white font-bold shadow-sm">
                V
              </div>
              <span className="text-xl font-extrabold text-gray-800">
                VITHAL <span className="text-green-600">SUPER SHOPEE</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Your neighborhood Kirana store, now online. Browse our wide range of fresh groceries and daily essentials.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider">Visit Us</h4>
            <div className="flex items-start gap-3 text-gray-600 text-sm">
              <MapPin size={18} className="text-green-600 mt-0.5 flex-shrink-0" />
              <p>
                QMQM+6Q5 Gajanan Watika Chauk,<br />
                Khamgaon Rd, Adarsha Nagar,<br />
                Shegaon, Maharashtra 444203
              </p>
            </div>
            <div className="flex items-center gap-3 text-gray-600 text-sm">
              <Clock size={18} className="text-green-600 flex-shrink-0" />
              <p>Daily: 8:00 AM - 10:00 PM</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider">Categories</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="/categories" className="hover:text-green-600 transition-colors">Rice & Grains</a></li>
              <li><a href="/categories" className="hover:text-green-600 transition-colors">Oils & Ghee</a></li>
              <li><a href="/categories" className="hover:text-green-600 transition-colors">Spices & Masala</a></li>
              <li><a href="/categories" className="hover:text-green-600 transition-colors">Dairy Products</a></li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="space-y-4">
            <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider">Contact</h4>
            <a 
              href="https://wa.me/917020402642" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-lg shadow-green-200 hover:shadow-green-300 transform hover:-translate-y-0.5"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
            <a 
              href="tel:+917020402642"
              className="flex items-center justify-center gap-2 w-full bg-white border border-gray-200 hover:border-green-600 text-gray-700 hover:text-green-600 font-bold py-3 px-4 rounded-xl transition-all"
            >
              <Phone size={18} />
              +91 70204 02642
            </a>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Vithal Super Shopee. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-400">
            <a href="#" className="hover:text-gray-600">Privacy Policy</a>
            <a href="#" className="hover:text-gray-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
