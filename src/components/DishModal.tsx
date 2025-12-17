import React, { useEffect, useRef } from 'react';
import { XIcon, VegDot, SpicyLevel, MilkIcon, NutIcon, PhoneIcon, WhatsAppIcon } from './icons/Icons';
import type { Dish } from '../data/menuData';

interface DishModalProps {
  dish: Dish | null;
  onClose: () => void;
}

const DishModal: React.FC<DishModalProps> = ({ dish, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (dish) {
      closeButtonRef.current?.focus();
      document.body.style.overflow = 'hidden';
      
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleEscape);
      return () => {
        window.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = '';
      };
    }
  }, [dish, onClose]);

  if (!dish) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dish-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        ref={modalRef}
        className="relative bg-card rounded-3xl max-w-lg w-full max-h-[90vh] overflow-hidden shadow-elevated animate-scale-in"
      >
        {/* Close button */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-card/80 backdrop-blur-sm rounded-full hover:bg-card transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="Close modal"
        >
          <XIcon />
        </button>

        {/* Image */}
        <div className="relative">
          <img
            src={dish.image}
            alt={`${dish.name} - Pure Vegetarian`}
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-4 left-4">
            <VegDot className="w-6 h-6" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h2 id="dish-modal-title" className="text-2xl font-bold text-foreground">
                {dish.name}
              </h2>
              <p className="text-sm text-muted-foreground">{dish.category}</p>
            </div>
            <span className="text-2xl font-bold text-primary">₹{dish.price}</span>
          </div>

          <p className="text-foreground/80 mb-6">{dish.description}</p>

          {/* Info row */}
          <div className="flex flex-wrap gap-4 mb-6">
            {dish.spicy > 0 && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Spice:</span>
                <SpicyLevel level={dish.spicy} />
              </div>
            )}
            
            {dish.allergens.length > 0 && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Contains:</span>
                <div className="flex gap-2">
                  {dish.allergens.includes('dairy') && (
                    <span className="badge-veg">
                      <MilkIcon className="w-4 h-4" /> Dairy
                    </span>
                  )}
                  {dish.allergens.includes('nuts') && (
                    <span className="badge-veg">
                      <NutIcon className="w-4 h-4" /> Nuts
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-3">
            <a
              href="tel:+919876543210"
              className="flex-1 btn-primary flex items-center justify-center gap-2"
            >
              <PhoneIcon className="w-5 h-5" />
              Call to Order
            </a>
            <a
              href={`https://wa.me/919876543210?text=Hi! I'd like to order ${encodeURIComponent(dish.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 btn-secondary flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishModal;
