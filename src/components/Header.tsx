import React, { useState, useEffect } from 'react';
import { PhoneIcon, WhatsAppIcon, MenuIcon, XIcon, LeafIcon } from './icons/Icons';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'HOME' },
    { href: '#menu', label: 'MENU' },
    { href: '#catering', label: 'CATERING' },
    { href: '#about', label: 'ABOUT' },
    { href: '#find-us', label: 'FIND US' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <nav className="container-main flex items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center shadow-card transition-transform group-hover:scale-110">
              <LeafIcon className="w-7 h-7 text-primary" />
            </div>
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-bold text-lg tracking-wider text-foreground">ROOH</span>
            <span className="text-[10px] tracking-[0.3em] text-muted-foreground -mt-1">KITCHEN</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs font-semibold tracking-wider text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-foreground font-medium hover:bg-card transition-all text-sm"
          >
            <PhoneIcon className="w-4 h-4" />
            <span className="hidden lg:inline">Call</span>
          </a>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all text-sm"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span className="hidden lg:inline">Order Now</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-foreground hover:bg-card rounded-full transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-card/98 backdrop-blur-xl border-t border-border/30 animate-slide-up">
          <ul className="flex flex-col p-6 gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-4 px-4 text-foreground font-semibold text-sm tracking-wider hover:bg-muted rounded-2xl transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="flex gap-3 pt-4 border-t border-border mt-4">
              <a
                href="tel:+919876543210"
                className="flex-1 flex items-center justify-center gap-2 py-4 rounded-full border-2 border-primary text-primary font-semibold"
              >
                <PhoneIcon className="w-4 h-4" />
                Call
              </a>
              <a
                href="https://wa.me/919876543210"
                className="flex-1 flex items-center justify-center gap-2 py-4 rounded-full bg-primary text-primary-foreground font-semibold"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Order
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
