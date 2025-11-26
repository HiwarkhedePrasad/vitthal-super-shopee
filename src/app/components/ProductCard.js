import { Star, CheckCircle } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
      <div className="relative p-4 flex-shrink-0">
        {/* Available Badge */}
        {product.available && (
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm flex items-center gap-1">
              <CheckCircle size={12} /> In Store
            </span>
          </div>
        )}
        
        <div className="relative h-48 w-full flex items-center justify-center overflow-hidden rounded-lg bg-gray-50 group-hover:bg-white transition-colors">
          <img
            src={product.image}
            alt={product.name}
            className="h-40 w-auto object-contain transition-transform duration-500 group-hover:scale-110 mix-blend-multiply"
            loading="lazy"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/400x300?text=Product';
            }}
          />
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <div className="mb-2">
          <div className="flex items-center gap-1 mb-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} size={12} className="fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-xs text-gray-400 ml-1">(42)</span>
          </div>
          <h4 className="text-gray-800 font-bold text-sm sm:text-base leading-tight line-clamp-2 group-hover:text-green-700 transition-colors min-h-[2.5rem]">
            {product.name}
          </h4>
          <p className="text-xs text-gray-500 mt-1">{product.weight}</p>
        </div>

        <div className="mt-auto pt-3 border-t border-gray-50">
          <div className="flex items-end justify-between">
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-gray-900">₹{product.price}</span>
            </div>
            <div className="text-xs font-bold text-green-800 bg-green-100 px-3 py-2 rounded-lg border border-green-200">
              Buy in Store
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
