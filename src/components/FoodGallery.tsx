import React, { useState } from 'react';
import DishCard from './DishCard';
import DishModal from './DishModal';
import { DISHES, CATEGORIES } from '../data/menuData';
import type { Dish } from '../data/menuData';

const FoodGallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

  const filteredDishes = activeCategory === 'All'
    ? DISHES
    : DISHES.filter(dish => dish.category === activeCategory);

  // Featured dishes for brand tiles
  const featuredDishes = DISHES.filter(dish => dish.tags.includes('chef') || dish.tags.includes('bestseller')).slice(0, 6);

  return (
    <>
      {/* Brand Tiles Section - GT's style */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="heading-section text-foreground mb-2">
              Our <span className="font-script text-primary">Signatures</span>
            </h2>
          </div>

          {/* Horizontal scroll on mobile, grid on desktop */}
          <div className="flex gap-6 overflow-x-auto pb-4 lg:grid lg:grid-cols-6 lg:overflow-visible scrollbar-hide">
            {featuredDishes.map((dish, index) => (
              <button
                key={dish.id}
                onClick={() => setSelectedDish(dish)}
                className="brand-tile flex-shrink-0 w-40 lg:w-full group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-sm text-foreground">{dish.name}</h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Full Gallery Section */}
      <section id="gallery" className="section-padding philosophy-bg">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="font-script text-3xl text-primary block mb-2">Discover</span>
            <h2 className="heading-section text-foreground mb-4">
              Our Full Menu
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Street-fresh flavors crafted with love. Every dish is 100% vegetarian and made fresh daily.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap gap-3 justify-center mb-12" role="tablist">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                role="tab"
                aria-selected={activeCategory === category}
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
                className={`chip-filter ${activeCategory === category ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Dish Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredDishes.map((dish, index) => (
              <div
                key={dish.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <DishCard dish={dish} onClick={setSelectedDish} />
              </div>
            ))}
          </div>

          {filteredDishes.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              No dishes found in this category.
            </div>
          )}
        </div>
      </section>

      <DishModal dish={selectedDish} onClose={() => setSelectedDish(null)} />
    </>
  );
};

export default FoodGallery;
