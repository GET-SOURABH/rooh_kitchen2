import React, { useState, useEffect, useRef } from 'react';
import { MENU_CATEGORIES } from '../data/menuData';
import { VegDot, FlameIcon, ChefHatIcon } from './icons/Icons';

const MenuSection = () => {
  const categories = Object.keys(MENU_CATEGORIES);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id.replace('menu-', ''));
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    categories.forEach((cat) => {
      const ref = sectionRefs.current[cat];
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [categories]);

  const scrollToCategory = (category: string) => {
    sectionRefs.current[category]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Sample prices for menu items
  const getPriceForItem = (item: string): number => {
    const prices: { [key: string]: number } = {
      'Rooh Buddha Bowl': 229,
      'Tadka Dal Rice Bowl': 189,
      'Kadai Paneer Bowl': 209,
      'Paneer Tikka Wrap': 179,
      'Achaari Aloo Wrap': 159,
      'Tandoori Veggie Wrap': 169,
      'Aloo Chaat Bowl': 149,
      'Papdi Chaat': 139,
      'Dahi Puri (eggless yogurt)': 129,
      'Tandoori Corn': 99,
      'Paneer Tikka Skewers': 189,
      'Veg Seekh': 149,
      'Masala Fries': 89,
      'Mint Quinoa': 109,
      'Pickled Slaw': 79,
      'Mini Gulab Jamun': 119,
      'Kesar Phirni': 129,
      'Dark Choco Bites (eggless)': 139,
      'Mango Lassi': 129,
      'Masala Lemonade': 79,
      'Tender Coconut Water': 99,
    };
    return prices[item] || 149;
  };

  const isChefPick = (item: string) => ['Rooh Buddha Bowl', 'Paneer Tikka Wrap', 'Kadai Paneer Bowl'].includes(item);
  const isSpicy = (item: string) => ['Kadai Paneer Bowl', 'Achaari Aloo Wrap'].includes(item);

  return (
    <section id="menu" className="section-padding">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="heading-section text-foreground mb-4">
            Our <span className="text-primary">Menu</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From hearty bowls to crispy wraps, every item is crafted with fresh ingredients and authentic spices.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sticky Category Pills */}
          <nav className="lg:w-48 shrink-0">
            <div className="sticky top-24 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => scrollToCategory(category)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                    activeCategory === category
                      ? 'bg-primary text-primary-foreground shadow-glow-primary'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </nav>

          {/* Menu Items */}
          <div className="flex-1 space-y-12">
            {categories.map((category) => (
              <div
                key={category}
                id={`menu-${category}`}
                ref={(el) => (sectionRefs.current[category] = el)}
                className="scroll-mt-28"
              >
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {category === 'Bowls' && '🥗'}
                    {category === 'Wraps' && '🌯'}
                    {category === 'Chaat' && '🍲'}
                    {category === 'Grill' && '🔥'}
                    {category === 'Sides' && '🍟'}
                    {category === 'Desserts' && '🍮'}
                    {category === 'Drinks' && '🥤'}
                  </span>
                  {category}
                </h3>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {MENU_CATEGORIES[category].map((item) => (
                    <div
                      key={item}
                      className="bg-card rounded-2xl p-4 border border-border/50 hover:border-primary/30 hover:shadow-card transition-all group"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <VegDot />
                            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {item}
                            </h4>
                          </div>
                          <div className="flex items-center gap-2 mt-2">
                            {isChefPick(item) && (
                              <span className="badge-spicy bg-accent/10 text-accent">
                                <ChefHatIcon className="w-3 h-3" /> Chef's Pick
                              </span>
                            )}
                            {isSpicy(item) && (
                              <span className="badge-spicy">
                                <FlameIcon className="w-3 h-3" /> Spicy
                              </span>
                            )}
                          </div>
                        </div>
                        <span className="text-lg font-bold text-primary">₹{getPriceForItem(item)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
