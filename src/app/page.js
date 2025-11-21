'use client';

import { 
  Heart, 
  Star, 
  ChevronRight, 
  Milk, 
  Wheat, 
  Coffee, 
  ShoppingBag 
} from 'lucide-react';
import Hero from './components/Hero';

// Offer Card
const OfferCard = ({ title, oldPrice, newPrice, discount, image }) => (
  <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
    <div className="relative p-4 flex-shrink-0">
      {/* Discount Badge */}
      <div className="absolute top-3 left-3 z-10">
        <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
          {discount} OFF
        </span>
      </div>
      
      {/* Action Buttons */}
      <div className="absolute top-3 right-3 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="p-2 bg-white rounded-full shadow-md hover:bg-orange-50 text-gray-600 hover:text-orange-600 transition-colors">
          <Heart size={18} />
        </button>
      </div>

      <div className="relative h-48 w-full flex items-center justify-center overflow-hidden rounded-lg bg-gray-50 group-hover:bg-white transition-colors">
        <img
          src={image}
          alt={title}
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
        <h4 className="text-gray-800 font-bold text-sm sm:text-base leading-tight line-clamp-2 group-hover:text-orange-600 transition-colors min-h-[2.5rem]">
          {title}
        </h4>
      </div>

      <div className="mt-auto pt-3 border-t border-gray-50">
        <div className="flex items-end justify-between">
          <div className="flex flex-col">
            <span className="text-gray-400 line-through text-xs">₹{oldPrice}</span>
            <span className="text-xl font-extrabold text-gray-900">₹{newPrice}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function Home() {
  const products = [
    // Essentials
    {
      id: 101,
      category: "Essentials",
      title: "SUNFLOWER OIL 1L",
      oldPrice: "180",
      newPrice: "150",
      discount: "16%",
      image: "https://placehold.co/400x300/png?text=Sunflower+Oil"
    },
    {
      id: 102,
      category: "Essentials",
      title: "PREMIUM SUGAR 1KG",
      oldPrice: "45",
      newPrice: "40",
      discount: "11%",
      image: "https://placehold.co/400x300/png?text=Sugar"
    },
    {
      id: 103,
      category: "Essentials",
      title: "RAW PEANUTS 500G",
      oldPrice: "90",
      newPrice: "80",
      discount: "11%",
      image: "https://placehold.co/400x300/png?text=Peanuts"
    },
    {
      id: 104,
      category: "Essentials",
      title: "WHOLE WHEAT ATTA 10KG",
      oldPrice: "450",
      newPrice: "380",
      discount: "15%",
      image: "https://placehold.co/400x300/png?text=Wheat+Atta"
    },
    {
      id: 105,
      category: "Essentials",
      title: "BASMATI RICE 5KG",
      oldPrice: "600",
      newPrice: "450",
      discount: "25%",
      image: "https://placehold.co/400x300/png?text=Basmati+Rice"
    },
    {
      id: 106,
      category: "Essentials",
      title: "TATA SALT 1KG",
      oldPrice: "28",
      newPrice: "25",
      discount: "10%",
      image: "https://placehold.co/400x300/png?text=Tata+Salt"
    },
    {
      id: 107,
      category: "Essentials",
      title: "TOOR DAL 1KG",
      oldPrice: "160",
      newPrice: "140",
      discount: "12%",
      image: "https://placehold.co/400x300/png?text=Toor+Dal"
    },

    // Dairy & Frozen
    {
      id: 201,
      category: "Dairy & Frozen",
      title: "AMUL BUTTER 500G",
      oldPrice: "280",
      newPrice: "265",
      discount: "5%",
      image: "https://placehold.co/400x300/png?text=Amul+Butter"
    },
    {
      id: 202,
      category: "Dairy & Frozen",
      title: "FRESH CHICKEN BREAST",
      oldPrice: "250",
      newPrice: "200",
      discount: "20%",
      image: "https://placehold.co/400x300/png?text=Raw+Chicken"
    },

    // Snacks & Beverages
    {
      id: 301,
      category: "Snacks & Beverages",
      title: "MAGGI NOODLES 6-PACK",
      oldPrice: "84",
      newPrice: "75",
      discount: "10%",
      image: "https://placehold.co/400x300/png?text=Maggi"
    },
    {
      id: 302,
      category: "Snacks & Beverages",
      title: "FRITOS CORN CHIPS",
      oldPrice: "50",
      newPrice: "30",
      discount: "40%",
      image: "https://placehold.co/400x300/png?text=Fritos+Bag"
    },
    {
      id: 303,
      category: "Snacks & Beverages",
      title: "HEINEKEN 6-PACK",
      oldPrice: "800",
      newPrice: "650",
      discount: "18%",
      image: "https://placehold.co/400x300/png?text=Heineken"
    }
  ];

  // Categories with Icons
  const categories = [
    { name: "Essentials", icon: Wheat },
    { name: "Dairy & Frozen", icon: Milk },
    { name: "Snacks & Beverages", icon: Coffee },
  ];

  return (
    <>
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        /* Hide scrollbar for Chrome, Safari and Opera */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>

      {/* 
        Main Layout Container 
        Row direction: Sidebar | Right Column
      */}
      <div className="flex bg-gray-50 items-start">
        
        {/* Sticky Sidebar (Left) */}
        <aside className="hidden lg:flex w-72 flex-col bg-white border-r border-gray-200 h-screen sticky top-0 overflow-y-auto no-scrollbar z-20 shadow-[4px_0_24px_rgba(0,0,0,0.02)] flex-shrink-0">
          <div className="p-6">
            <div className="flex items-center gap-2 mb-6 px-2">
              <ShoppingBag className="text-orange-600" size={24} />
              <h3 className="font-extrabold text-lg text-gray-800 tracking-tight">CATEGORIES</h3>
            </div>
            
            <nav className="space-y-1">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <a 
                    key={cat.name}
                    href={`#${cat.name.replace(/\s+/g, '-').toLowerCase()}`}
                    className="group flex items-center gap-3 px-4 py-3.5 rounded-xl text-gray-600 hover:bg-orange-50 hover:text-orange-700 transition-all duration-200 font-medium"
                  >
                    <span className="p-2 bg-gray-100 rounded-lg group-hover:bg-orange-100 transition-colors text-gray-500 group-hover:text-orange-600">
                      <Icon size={18} />
                    </span>
                    <span>{cat.name}</span>
                    <ChevronRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-orange-400" size={16} />
                  </a>
                );
              })}
            </nav>

            {/* Sidebar Promo */}
            <div className="mt-8 p-4 bg-gradient-to-br from-lime-500 to-lime-600 rounded-2xl text-white shadow-lg relative overflow-hidden group cursor-pointer">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-10 rounded-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-500"></div>
              <h4 className="font-bold text-lg mb-1 relative z-10">Weekend Deal</h4>
              <p className="text-lime-100 text-sm mb-3 relative z-10">Get flat 20% off on all dairy products!</p>
              <button className="text-xs font-bold bg-white text-lime-600 px-3 py-2 rounded-lg shadow-sm hover:bg-lime-50 transition-colors relative z-10">
                View Offers
              </button>
            </div>
          </div>
        </aside>

        {/* Right Column (Hero + Products) */}
        <div className="flex flex-col flex-1">
          
          {/* Hero Section (Scrolls with page) */}
          <div className="relative z-10">
            <Hero />
          </div>

          {/* Product List */}
          <main className="flex-1 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-8">
              {categories.map((cat) => (
                <section 
                  key={cat.name} 
                  id={cat.name.replace(/\s+/g, '-').toLowerCase()}
                  className="mb-12 scroll-mt-8"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
                        <cat.icon size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {cat.name}
                      </h3>
                    </div>
                    <a href="#" className="text-sm font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1">
                      View All <ChevronRight size={16} />
                    </a>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products
                      .filter(p => p.category === cat.name)
                      .map((product) => (
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
                </section>
              ))}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}