'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from '../components/ProductCard';
import { categories, products } from '../../data/products';

function ProductList() {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get('category');
  
  const [activeCategory, setActiveCategory] = useState(categoryId || 'all');
  
  useEffect(() => {
    if (categoryId) {
      setActiveCategory(categoryId);
    }
  }, [categoryId]);

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.categoryId === activeCategory);

  return (
    <div className="flex flex-col font-sans">

      
      <main className="flex-grow py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row gap-8 items-start">
            
            {/* Sidebar Filters */}
            <aside className="w-full md:w-64 flex-shrink-0 bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-24">
              <h3 className="font-bold text-gray-900 text-lg mb-4">Categories</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeCategory === 'all' 
                      ? 'bg-green-50 text-green-700' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  All Products
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeCategory === cat.id 
                        ? 'bg-green-50 text-green-700' 
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              <div className="mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {activeCategory === 'all' 
                    ? 'All Products' 
                    : categories.find(c => c.id === activeCategory)?.name || 'Products'}
                </h1>
                <p className="text-gray-500 mt-1">
                  Showing {filteredProducts.length} items
                </p>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
                  <p className="text-gray-500 text-lg">No products found in this category.</p>
                  <button 
                    onClick={() => setActiveCategory('all')}
                    className="mt-4 text-green-600 font-bold hover:underline"
                  >
                    View all products
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ProductList />
    </Suspense>
  );
}
