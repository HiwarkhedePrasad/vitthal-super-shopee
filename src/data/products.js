export const categories = [
  { 
    id: 'atta-grains',
    name: "Atta & Grains", 
    image: "https://placehold.co/400x300/e8f5e9/1b5e20?text=Atta+%26+Grains",
    slug: "atta-grains"
  },
  { 
    id: 'rice',
    name: "Rice", 
    image: "https://placehold.co/400x300/fffde7/f57f17?text=Rice",
    slug: "rice"
  },
  { 
    id: 'pulses',
    name: "Pulses", 
    image: "https://placehold.co/400x300/fff3e0/e65100?text=Pulses",
    slug: "pulses"
  },
  { 
    id: 'oils-ghee',
    name: "Oils & Ghee", 
    image: "https://placehold.co/400x300/fff8e1/fbc02d?text=Oils+%26+Ghee",
    slug: "oils-ghee"
  },
  { 
    id: 'masala-spices',
    name: "Masala & Spices", 
    image: "https://placehold.co/400x300/ffebee/c62828?text=Masala+%26+Spices",
    slug: "masala-spices"
  },
  { 
    id: 'tea-coffee',
    name: "Tea & Coffee", 
    image: "https://placehold.co/400x300/efebe9/5d4037?text=Tea+%26+Coffee",
    slug: "tea-coffee"
  },
  { 
    id: 'snacks',
    name: "Snacks", 
    image: "https://placehold.co/400x300/fff3e0/ef6c00?text=Snacks",
    slug: "snacks"
  },
  { 
    id: 'soaps-detergents',
    name: "Soaps & Detergents", 
    image: "https://placehold.co/400x300/e3f2fd/1565c0?text=Soaps+%26+Detergents",
    slug: "soaps-detergents"
  },
  { 
    id: 'personal-care',
    name: "Personal Care", 
    image: "https://placehold.co/400x300/fce4ec/ad1457?text=Personal+Care",
    slug: "personal-care"
  },
  { 
    id: 'dairy-bakery',
    name: "Dairy & Bakery", 
    image: "https://placehold.co/400x300/e0f7fa/006064?text=Dairy+%26+Bakery",
    slug: "dairy-bakery"
  },
  { 
    id: 'cold-drinks',
    name: "Cold Drinks", 
    image: "https://placehold.co/400x300/e0f2f1/004d40?text=Cold+Drinks",
    slug: "cold-drinks"
  },
  { 
    id: 'packaged-foods',
    name: "Packaged Foods", 
    image: "https://placehold.co/400x300/fbe9e7/bf360c?text=Packaged+Foods",
    slug: "packaged-foods"
  },
  { 
    id: 'household',
    name: "General Household", 
    image: "https://placehold.co/400x300/eceff1/37474f?text=Household+Items",
    slug: "household"
  }
];

export const products = [
  // Atta & Grains
  {
    id: 101,
    categoryId: 'atta-grains',
    name: "Whole Wheat Atta (Aashirvaad)",
    price: 450,
    weight: "10 kg",
    image: "https://placehold.co/400x300/png?text=Wheat+Atta",
    available: true
  },
  {
    id: 102,
    categoryId: 'atta-grains',
    name: "Maida",
    price: 45,
    weight: "1 kg",
    image: "https://placehold.co/400x300/png?text=Maida",
    available: true
  },
  
  // Rice
  {
    id: 201,
    categoryId: 'rice',
    name: "Basmati Rice Premium",
    price: 120,
    weight: "1 kg",
    image: "https://placehold.co/400x300/png?text=Basmati+Rice",
    available: true
  },
  {
    id: 202,
    categoryId: 'rice',
    name: "Kolam Rice",
    price: 60,
    weight: "1 kg",
    image: "https://placehold.co/400x300/png?text=Kolam+Rice",
    available: true
  },

  // Pulses
  {
    id: 301,
    categoryId: 'pulses',
    name: "Toor Dal",
    price: 140,
    weight: "1 kg",
    image: "https://placehold.co/400x300/png?text=Toor+Dal",
    available: true
  },
  {
    id: 302,
    categoryId: 'pulses',
    name: "Moong Dal",
    price: 110,
    weight: "1 kg",
    image: "https://placehold.co/400x300/png?text=Moong+Dal",
    available: true
  },

  // Oils & Ghee
  {
    id: 401,
    categoryId: 'oils-ghee',
    name: "Sunflower Oil (Gemini)",
    price: 150,
    weight: "1 L",
    image: "https://placehold.co/400x300/png?text=Sunflower+Oil",
    available: true
  },
  {
    id: 402,
    categoryId: 'oils-ghee',
    name: "Pure Cow Ghee (Amul)",
    price: 550,
    weight: "1 L",
    image: "https://placehold.co/400x300/png?text=Cow+Ghee",
    available: true
  },

  // Masala & Spices
  {
    id: 501,
    categoryId: 'masala-spices',
    name: "Turmeric Powder",
    price: 40,
    weight: "200 g",
    image: "https://placehold.co/400x300/png?text=Turmeric",
    available: true
  },
  {
    id: 502,
    categoryId: 'masala-spices',
    name: "Red Chilli Powder",
    price: 45,
    weight: "200 g",
    image: "https://placehold.co/400x300/png?text=Chilli+Powder",
    available: true
  },

  // Tea & Coffee
  {
    id: 601,
    categoryId: 'tea-coffee',
    name: "Red Label Tea",
    price: 130,
    weight: "250 g",
    image: "https://placehold.co/400x300/png?text=Tea+Powder",
    available: true
  },
  {
    id: 602,
    categoryId: 'tea-coffee',
    name: "Nescafe Classic Coffee",
    price: 180,
    weight: "50 g",
    image: "https://placehold.co/400x300/png?text=Coffee",
    available: true
  },

  // Snacks
  {
    id: 701,
    categoryId: 'snacks',
    name: "Maggi Noodles",
    price: 14,
    weight: "70 g",
    image: "https://placehold.co/400x300/png?text=Maggi",
    available: true
  },
  {
    id: 702,
    categoryId: 'snacks',
    name: "Good Day Biscuits",
    price: 25,
    weight: "200 g",
    image: "https://placehold.co/400x300/png?text=Biscuits",
    available: true
  },

  // Soaps & Detergents
  {
    id: 801,
    categoryId: 'soaps-detergents',
    name: "Rin Bar",
    price: 10,
    weight: "150 g",
    image: "https://placehold.co/400x300/png?text=Rin+Bar",
    available: true
  },
  {
    id: 802,
    categoryId: 'soaps-detergents',
    name: "Surf Excel Powder",
    price: 120,
    weight: "1 kg",
    image: "https://placehold.co/400x300/png?text=Surf+Excel",
    available: true
  },

  // Dairy & Bakery
  {
    id: 901,
    categoryId: 'dairy-bakery',
    name: "Amul Milk",
    price: 60,
    weight: "1 L",
    image: "https://placehold.co/400x300/png?text=Milk",
    available: true
  },
  {
    id: 902,
    categoryId: 'dairy-bakery',
    name: "Bread",
    price: 40,
    weight: "400 g",
    image: "https://placehold.co/400x300/png?text=Bread",
    available: true
  }
];
