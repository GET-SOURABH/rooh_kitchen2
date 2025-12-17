import React from 'react';
import { VegDot, SpicyLevel, MilkIcon, NutIcon, ChefHatIcon, StarIcon } from './icons/Icons';
import type { Dish } from '../data/menuData';

interface DishCardProps {
  dish: Dish;
  onClick: (dish: Dish) => void;
}

const DishCard: React.FC<DishCardProps> = ({ dish, onClick }) => {
  return (
    <button
      onClick={() => onClick(dish)}
      className="card-dish text-left w-full group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      <div className="relative overflow-hidden aspect-square">
        <img
          src={dish.image}
          alt={`${dish.name} - Pure Vegetarian`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-4 left-4 flex gap-2">
          {dish.tags.includes('chef') && (
            <span className="bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1">
              <ChefHatIcon className="w-3 h-3" /> Chef's Pick
            </span>
          )}
          {dish.tags.includes('bestseller') && (
            <span className="bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1">
              <StarIcon className="w-3 h-3" filled /> Bestseller
            </span>
          )}
          {dish.tags.includes('new') && (
            <span className="bg-accent text-accent-foreground px-3 py-1.5 rounded-full text-xs font-semibold">
              New
            </span>
          )}
        </div>
        <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm p-2 rounded-full">
          <VegDot />
        </div>
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          <span className="bg-card text-foreground px-4 py-2 rounded-full text-lg font-bold">
            ₹{dish.price}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
            {dish.name}
          </h3>
          <span className="text-xl font-bold text-primary whitespace-nowrap">₹{dish.price}</span>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {dish.description}
        </p>
        
        <div className="flex items-center gap-3 flex-wrap">
          {dish.spicy > 0 && <SpicyLevel level={dish.spicy} />}
          {dish.allergens.includes('dairy') && (
            <span className="flex items-center gap-1 text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
              <MilkIcon className="w-3 h-3" /> Dairy
            </span>
          )}
          {dish.allergens.includes('nuts') && (
            <span className="flex items-center gap-1 text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
              <NutIcon className="w-3 h-3" /> Nuts
            </span>
          )}
        </div>
      </div>
    </button>
  );
};

export default DishCard;