'use client'

import React from 'react';

// Offer Card (Duplicated for now, ideally should be a shared component)
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
          ₹{oldPrice}
        </span>
        <div className="flex shadow-md">
          <div className="bg-yellow-400 text-white font-bold text-xl sm:text-2xl px-3 py-2 flex items-center">
            ₹{newPrice}
          </div>
          <div className="bg-red-600 text-white font-bold text-sm px-3 py-2 ml-1 flex items-center">
            {discount}
          </div>
        </div>
      </div>
    </div>
    <div className="p-4 text-center">
      <h4 className="text-steel-blue font-bold text-base sm:text-lg uppercase mb-2 hover:text-orange-600 transition-colors line-clamp-2">
        {title}
      </h4>
    </div>
  </div>
);

export default function Specials() {
  const specialProducts = [
    {
      id: 1,
      title: "FAMILY PACK ICE CREAM",
      oldPrice: "300",
      newPrice: "250",
      discount: "-16%",
      image: "https://placehold.co/400x300/png?text=Ice+Cream"
    },
    {
      id: 2,
      title: "DETERGENT POWDER 4KG",
      oldPrice: "500",
      newPrice: "400",
      discount: "-20%",
      image: "https://placehold.co/400x300/png?text=Detergent"
    },
    {
      id: 3,
      title: "SOFT DRINKS 2L",
      oldPrice: "90",
      newPrice: "75",
      discount: "-16%",
      image: "https://placehold.co/400x300/png?text=Soft+Drink"
    }
  ];

  return (
    <div className="min-h-screen bg-yellow-50 pt-20 lg:pt-28 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center uppercase">Special Offers</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialProducts.map((product) => (
            <OfferCard
              key={product.id}
              title={product.title}
              oldPrice={product.oldPrice}
              newPrice={product.newPrice}
              discount={product.discount}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
