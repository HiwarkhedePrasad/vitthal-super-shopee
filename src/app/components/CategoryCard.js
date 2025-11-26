import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const CategoryCard = ({ category }) => {
  return (
    <Link href={`/products?category=${category.id}`} className="group block">
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col">
        <div className="relative h-32 w-full overflow-hidden bg-gray-50">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
        </div>
        <div className="p-4 flex items-center justify-between">
          <h3 className="font-bold text-gray-800 group-hover:text-green-700 transition-colors">
            {category.name}
          </h3>
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-green-100 group-hover:text-green-700 transition-all">
            <ChevronRight size={16} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
