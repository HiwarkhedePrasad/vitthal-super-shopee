'use client';

import CategoryCard from '../components/CategoryCard';
import { categories } from '../../data/products';

export default function CategoriesPage() {
  return (
    <div className="flex flex-col font-sans">

      
      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">All Categories</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our wide range of products. From daily essentials to special treats, we have it all.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
