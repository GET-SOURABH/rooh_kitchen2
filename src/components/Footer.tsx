import React from 'react';
import { PhoneIcon, WhatsAppIcon, MailIcon, InstagramIcon, LeafIcon } from './icons/Icons';

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background">
      {/* CTA Panel */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-orange-500 to-primary" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-5 left-10 w-32 h-32 border border-white rounded-full" />
          <div className="absolute bottom-5 right-10 w-48 h-48 border border-white rounded-full" />
        </div>
        
        <div className="relative py-16 px-4">
          <div className="container-main text-center">
            <span className="font-script text-3xl text-white/90 block mb-2">Ready to</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Experience ROOH?
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform"
              >
                <PhoneIcon /> Call Now
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all"
              >
                <WhatsAppIcon /> WhatsApp
              </a>
              <a
                href="mailto:orders@roohkitchen.example"
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all"
              >
                <MailIcon /> Email Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16 px-4">
        <div className="container-main">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                  <LeafIcon className="w-8 h-8" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl tracking-wider">ROOH</span>
                  <span className="text-xs tracking-[0.3em] text-background/60 -mt-1">KITCHEN</span>
                </div>
              </div>
              <p className="text-background/70 max-w-sm text-lg leading-relaxed mb-6">
                Pure Veg. Big Flavor. Street-fresh happiness. Serving soul-warming 
                vegetarian food from our truck to your plate.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3 text-background/70">
                <li><a href="#menu" className="hover:text-primary transition-colors">Menu</a></li>
                <li><a href="#catering" className="hover:text-primary transition-colors">Catering</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#find-us" className="hover:text-primary transition-colors">Find Us</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-bold text-lg mb-6">Info</h4>
              <ul className="space-y-3 text-background/70">
                <li><a href="#" className="hover:text-primary transition-colors">Menu PDF</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Allergen Info</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-background/10 text-center text-sm text-background/50">
            <p className="text-lg mb-2">Made with ❤️ at ROOH KITCHEN — Pure Veg, Always.</p>
            <p>© {new Date().getFullYear()} ROOH KITCHEN. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
