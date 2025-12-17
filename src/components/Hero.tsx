import React, { useState, useEffect } from 'react';
import { CheckIcon } from './icons/Icons';

const heroSlides = [
  {
    subtitle: "Celebrate",
    title: "Pure Veg",
    titleScript: "Soul Food",
    description: "Street-fresh bowls, wraps, chaats and more. Made with love, served with passion. Experience the true essence of vegetarian cuisine.",
    cta: "View Menu",
    ctaLink: "#menu",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=800&fit=crop",
    gradient: "from-primary via-orange-500 to-primary",
  },
  {
    subtitle: "Experience",
    title: "Street",
    titleScript: "Flavors",
    description: "Authentic chaat, flavorful wraps, and soulful bowls. Every bite tells a story of tradition and taste.",
    cta: "Explore Menu",
    ctaLink: "#gallery",
    image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=600&h=800&fit=crop",
    gradient: "from-secondary via-amber-500 to-secondary",
  },
  {
    subtitle: "Discover",
    title: "Catering",
    titleScript: "Excellence",
    description: "From intimate gatherings to grand celebrations. Let us bring the magic of ROOH to your special events.",
    cta: "Book Catering",
    ctaLink: "#catering",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=800&fit=crop",
    gradient: "from-accent via-rose-500 to-accent",
  },
];

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const badges = [
    '100% Vegetarian',
    'Jain-Friendly',
    'Made Fresh Daily'
  ];

  const slide = heroSlides[activeSlide];

  return (
    <section id="home" className="pt-24 pb-8 px-4 md:px-8 lg:px-16">
      {/* Hero Card */}
      <div className={`hero-card relative min-h-[600px] md:min-h-[700px] bg-gradient-to-br ${slide.gradient} transition-all duration-700`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 border-2 border-white rounded-full" />
          <div className="absolute bottom-20 right-20 w-60 h-60 border-2 border-white rounded-full" />
          <div className="absolute top-1/2 left-1/3 w-32 h-32 border border-white rounded-full" />
        </div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-8 h-full min-h-[600px] md:min-h-[700px]">
          {/* Content */}
          <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
            <div className="animate-fade-in">
              <span className="font-script text-3xl md:text-4xl text-white/90 block mb-2">
                {slide.subtitle}
              </span>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-2">
                {slide.title}
              </h1>
              
              <span className="font-script text-5xl md:text-6xl lg:text-7xl text-white/95 block mb-6">
                {slide.titleScript}
              </span>
              
              <p className="text-white/85 text-lg md:text-xl max-w-md mb-8 leading-relaxed">
                {slide.description}
              </p>

              <a
                href={slide.ctaLink}
                className="btn-outline inline-block"
              >
                {slide.cta}
              </a>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative hidden lg:flex items-center justify-center p-8">
            <div className="relative animate-scale-in">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-white/20 rounded-3xl blur-3xl scale-90" />
              
              {/* Main image */}
              <div className="relative">
                <img
                  src={slide.image}
                  alt="Delicious vegetarian dish"
                  className="w-80 h-96 object-cover rounded-3xl shadow-2xl"
                />
                
                {/* Floating price tag */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-6 py-4 shadow-elevated animate-float">
                  <span className="text-sm text-muted-foreground">Starting at</span>
                  <span className="block text-2xl font-bold text-primary">₹149</span>
                </div>

                {/* Rating badge */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl px-4 py-3 shadow-elevated animate-float-delayed">
                  <div className="flex items-center gap-1">
                    <span className="text-primary text-lg">★</span>
                    <span className="font-bold text-foreground">4.9</span>
                  </div>
                  <span className="text-xs text-muted-foreground">500+ reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 right-8 flex gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-10 h-10 rounded-full border-2 border-white/50 flex items-center justify-center font-semibold text-sm transition-all ${
                activeSlide === index 
                  ? 'bg-white text-primary' 
                  : 'text-white hover:bg-white/20'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Badges below hero */}
      <div className="flex flex-wrap gap-4 justify-center mt-8">
        {badges.map((badge) => (
          <div key={badge} className="badge-veg shadow-soft">
            <CheckIcon className="w-4 h-4 text-primary" />
            {badge}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
