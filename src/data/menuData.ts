export interface Dish {
  id: string;
  name: string;
  price: number;
  category: string;
  spicy: number;
  allergens: string[];
  tags: string[];
  image: string;
  description: string;
}

export interface CateringPackage {
  id: string;
  name: string;
  pricePerHead: number;
  guests: string;
  includes: string[];
  addons: string[];
  notes: string;
}

export const DISHES: Dish[] = [
  {
    id: 'paneer-wrap',
    name: 'Paneer Tikka Wrap',
    price: 179,
    category: 'Wraps',
    spicy: 2,
    allergens: ['dairy'],
    tags: ['chef'],
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop',
    description: 'Tandoor paneer, mint chutney, crisp salad wrapped in soft roomali.'
  },
  {
    id: 'chaat-bowl',
    name: 'Aloo Chaat Bowl',
    price: 149,
    category: 'Chaat',
    spicy: 1,
    allergens: ['nuts'],
    tags: ['bestseller'],
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop',
    description: 'Tangy, crunchy, sweet & spicy in a bowl. Street-style perfection.'
  },
  {
    id: 'buddha-bowl',
    name: 'Rooh Buddha Bowl',
    price: 229,
    category: 'Bowls',
    spicy: 1,
    allergens: [],
    tags: ['new', 'chef'],
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
    description: 'Quinoa, roasted veg, chickpeas, tahini. Nourishing & delicious.'
  },
  {
    id: 'tandoori-corn',
    name: 'Tandoori Corn',
    price: 99,
    category: 'Sides',
    spicy: 1,
    allergens: [],
    tags: [],
    image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=300&fit=crop',
    description: 'Charred corn with spice rub & lime. Perfect snack on the go.'
  },
  {
    id: 'gulab',
    name: 'Mini Gulab Jamun',
    price: 119,
    category: 'Desserts',
    spicy: 0,
    allergens: ['dairy'],
    tags: [],
    image: 'https://images.unsplash.com/photo-1666190094762-2a14ee894a1a?w=400&h=300&fit=crop',
    description: 'Warm, syrupy minis to end on a sweet note. Melt-in-mouth goodness.'
  },
  {
    id: 'mango-lassi',
    name: 'Mango Lassi',
    price: 129,
    category: 'Drinks',
    spicy: 0,
    allergens: ['dairy'],
    tags: ['bestseller'],
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop',
    description: 'Alphonso mango + curd, smooth & cool. Summer in a glass.'
  },
  {
    id: 'kadai-paneer',
    name: 'Kadai Paneer Bowl',
    price: 209,
    category: 'Bowls',
    spicy: 2,
    allergens: ['dairy'],
    tags: ['chef'],
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop',
    description: 'Spicy kadai paneer over fragrant rice with pickled onions.'
  },
  {
    id: 'papdi-chaat',
    name: 'Papdi Chaat',
    price: 139,
    category: 'Chaat',
    spicy: 1,
    allergens: ['dairy'],
    tags: [],
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop',
    description: 'Crispy papdi, curd, chutneys, sev. Classic Delhi street flavors.'
  }
];

export const MENU_CATEGORIES: Record<string, string[]> = {
  'Bowls': ['Rooh Buddha Bowl', 'Tadka Dal Rice Bowl', 'Kadai Paneer Bowl'],
  'Wraps': ['Paneer Tikka Wrap', 'Achaari Aloo Wrap', 'Tandoori Veggie Wrap'],
  'Chaat': ['Aloo Chaat Bowl', 'Papdi Chaat', 'Dahi Puri (eggless yogurt)'],
  'Grill': ['Tandoori Corn', 'Paneer Tikka Skewers', 'Veg Seekh'],
  'Sides': ['Masala Fries', 'Mint Quinoa', 'Pickled Slaw'],
  'Desserts': ['Mini Gulab Jamun', 'Kesar Phirni', 'Dark Choco Bites (eggless)'],
  'Drinks': ['Mango Lassi', 'Masala Lemonade', 'Tender Coconut Water']
};

export const CATERING_PACKAGES: CateringPackage[] = [
  {
    id: 'street-feast',
    name: 'Street Feast',
    pricePerHead: 349,
    guests: '25–40',
    includes: ['2 Mains', '2 Sides', '1 Dessert', 'Beverage'],
    addons: ['Live Chaat Counter', 'Extra Dessert', 'Return Gifts'],
    notes: 'Jain-friendly customization available.'
  },
  {
    id: 'chaat-party',
    name: 'Chaat Party',
    pricePerHead: 299,
    guests: '30–60',
    includes: ['3 Chaats', '1 Dessert', 'Beverage'],
    addons: ['Mocktail Bar', 'Photo Booth'],
    notes: 'Perfect for birthdays & society events.'
  },
  {
    id: 'corporate-lunch',
    name: 'Corporate Lunch',
    pricePerHead: 399,
    guests: '20–200',
    includes: ['1 Bowl', '1 Wrap', 'Salad', 'Beverage'],
    addons: ['Hot Case Setup', 'Cutlery'],
    notes: 'GST invoice available.'
  },
  {
    id: 'festive-thali',
    name: 'Festive Thali',
    pricePerHead: 449,
    guests: '30–120',
    includes: ['2 Curries', 'Bread/Rice', 'Sweet', 'Beverage'],
    addons: ['Live Tandoor', 'Decor'],
    notes: 'Ideal for Diwali & weddings.'
  }
];

export const CATEGORIES = ['All', 'Bowls', 'Wraps', 'Chaat', 'Grill', 'Sides', 'Desserts', 'Drinks'];
