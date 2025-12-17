import React from 'react';
import { VegDot } from './icons/Icons';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=500&fit=crop"
                alt="ROOH Kitchen team preparing fresh vegetarian food"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
            </div>
            
            {/* Floating stats */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 shadow-elevated">
              <div className="text-3xl font-bold text-primary">3+</div>
              <div className="text-sm text-muted-foreground">Years of Flavor</div>
            </div>
            
            <div className="absolute -top-4 -left-4 bg-secondary text-secondary-foreground rounded-2xl px-4 py-2 shadow-elevated font-semibold text-sm flex items-center gap-2">
              <VegDot /> Pure Veg Since Day 1
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="heading-section text-foreground mb-6">
              Our <span className="text-primary">Story</span>
            </h2>
            
            <div className="space-y-4 text-foreground/80">
              <p className="text-lg">
                We're a small crew serving honest, soul-warming vegetarian street food. 
                What started as a weekend passion project has become the city's go-to 
                spot for guilt-free indulgence.
              </p>
              <p>
                We believe flavor can be bold without meat. Every dish at ROOH is crafted 
                with fresh spices, seasonal produce, and a whole lot of heart. Whether 
                you're grabbing a quick wrap or hosting a 200-guest celebration, we bring 
                the same love to every plate.
              </p>
              <p className="font-medium text-primary">
                "Good food, made right, served with soul."
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <div className="bg-card rounded-2xl px-6 py-4 border border-border/50">
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="bg-card rounded-2xl px-6 py-4 border border-border/50">
                <div className="text-2xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Events Catered</div>
              </div>
              <div className="bg-card rounded-2xl px-6 py-4 border border-border/50">
                <div className="text-2xl font-bold text-foreground">4.9</div>
                <div className="text-sm text-muted-foreground">Google Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
