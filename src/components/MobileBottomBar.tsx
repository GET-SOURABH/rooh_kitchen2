import React from 'react';
import { PhoneIcon } from './icons/Icons';

const MobileBottomBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden bg-card/95 backdrop-blur-xl border-t border-border/50 p-3 z-40">
      <div className="flex gap-3">
        <a href="#menu" className="flex-1 py-3.5 text-center font-semibold text-sm text-foreground bg-muted rounded-2xl">
          Menu
        </a>
        <a href="#catering" className="flex-1 py-3.5 text-center font-semibold text-sm text-foreground bg-muted rounded-2xl">
          Catering
        </a>
        <a href="tel:+919876543210" className="flex-1 py-3.5 flex items-center justify-center gap-2 font-semibold text-sm text-primary-foreground bg-primary rounded-2xl">
          <PhoneIcon className="w-4 h-4" /> Call
        </a>
      </div>
    </div>
  );
};

export default MobileBottomBar;