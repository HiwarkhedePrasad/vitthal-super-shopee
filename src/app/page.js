'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import ProductCard from './components/ProductCard';
import CategoryCard from './components/CategoryCard';
import { categories, products } from '../data/products';

export default function Home() {
  // Get top 6 categories for preview
  const featuredCategories = categories.slice(0, 6);
  
  // Get some featured products (e.g., first 8)
  const featuredProducts = products.slice(0, 8);

  return (
    <div className="flex flex-col font-sans">


      <main className="flex-grow">
        {/* Hero Banner */}
        <section className="relative bg-green-900 overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-yellow-400 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-green-400 rounded-full blur-3xl opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-green-100 text-sm font-medium mb-6 border border-white/10">
              <Sparkles size={16} className="text-yellow-400" />
              <span>Fresh Groceries Delivered to Your Doorstep</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight mb-6">
              Quality You Can <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                Trust & Taste
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-green-100 max-w-2xl mb-10 leading-relaxed">
              Shop from our wide range of fresh vegetables, daily essentials, and household items. Best prices guaranteed!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link 
                href="/products" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-green-900 bg-yellow-400 rounded-xl hover:bg-yellow-300 transition-all shadow-lg hover:shadow-yellow-400/30 transform hover:-translate-y-1"
              >
                Shop Now
              </Link>
              <Link 
                href="/categories" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all"
              >
                View Categories
              </Link>
            </div>
          </div>
        </section>

        {/* Categories Preview */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Shop by Category</h2>
                <p className="text-gray-500 mt-2">Find everything you need in one place</p>
              </div>
              <Link href="/categories" className="hidden sm:flex items-center gap-1 text-green-700 font-bold hover:gap-2 transition-all">
                View All <ArrowRight size={18} />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
              {featuredCategories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
            
            <div className="mt-8 sm:hidden text-center">
              <Link href="/categories" className="inline-flex items-center gap-1 text-green-700 font-bold">
                View All Categories <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Essential Groceries</h2>
                <p className="text-gray-500 mt-2">Handpicked daily essentials for you</p>
              </div>
              <Link href="/products" className="hidden sm:flex items-center gap-1 text-green-700 font-bold hover:gap-2 transition-all">
                View All <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link 
                href="/products" 
                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-green-700 bg-green-50 border border-green-100 rounded-xl hover:bg-green-100 transition-all"
              >
                Browse All Products
              </Link>
            </div>
          </div>
        </section>

        {/* Features / Trust Signals */}
        <section className="py-16 bg-green-50 border-t border-green-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-3xl">
                  🥬
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fresh & Organic</h3>
                <p className="text-gray-600">Sourced directly from farmers to ensure the best quality for your family.</p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-3xl">
                  🚚
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Delivery</h3>
                <p className="text-gray-600">Get your groceries delivered to your doorstep in record time.</p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-3xl">
                  🏷️
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Best Prices</h3>
                <p className="text-gray-600">Enjoy great discounts and offers on your daily needs every day.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}