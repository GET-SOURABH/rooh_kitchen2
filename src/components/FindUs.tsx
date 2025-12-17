import React, { useState, useEffect } from 'react';
import { MapPinIcon, ClockIcon } from './icons/Icons';

const FindUs = () => {
  const locations = [
    { day: 'Mon-Tue', spot: 'Koramangala 5th Block', time: '11 AM - 9 PM' },
    { day: 'Wed-Thu', spot: 'Indiranagar 12th Main', time: '11 AM - 9 PM' },
    { day: 'Fri-Sat', spot: 'HSR Layout Sector 2', time: '11 AM - 10 PM' },
    { day: 'Sunday', spot: 'Cubbon Park (Near Bandstand)', time: '8 AM - 2 PM' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % locations.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [locations.length]);

  const hours = [
    { day: 'Monday - Thursday', time: '11:00 AM - 9:00 PM' },
    { day: 'Friday - Saturday', time: '11:00 AM - 10:00 PM' },
    { day: 'Sunday', time: '8:00 AM - 2:00 PM' },
  ];

  return (
    <section id="find-us" className="section-padding">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="heading-section text-foreground mb-4">
            Find <span className="text-primary">Us</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We pop up around the city. Track today's stop and hours below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Next Stop Ticker */}
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <MapPinIcon className="text-primary" /> Next Stop
            </h3>
            
            <div className="relative h-32 overflow-hidden">
              {locations.map((loc, index) => (
                <div
                  key={loc.day}
                  className={`absolute inset-0 transition-all duration-500 ${
                    index === currentIndex
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                >
                  <div className="bg-card rounded-2xl p-6 shadow-card">
                    <p className="text-sm text-primary font-semibold mb-1">{loc.day}</p>
                    <p className="text-2xl font-bold text-foreground mb-2">{loc.spot}</p>
                    <p className="text-muted-foreground flex items-center gap-2">
                      <ClockIcon className="w-4 h-4" /> {loc.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {locations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary w-6' : 'bg-muted-foreground/30'
                  }`}
                  aria-label={`Go to location ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-3 mt-6">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 btn-primary text-center text-sm"
              >
                Open in Maps
              </a>
              <a
                href="https://maps.google.com/dir"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 btn-outline text-center text-sm"
              >
                Get Directions
              </a>
            </div>
          </div>

          {/* Hours & Map */}
          <div className="space-y-6">
            {/* Operating Hours */}
            <div className="bg-card rounded-3xl p-8 border border-border/50">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <ClockIcon className="text-primary" /> Operating Hours
              </h3>
              <div className="space-y-4">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                    <span className="font-medium text-foreground">{h.day}</span>
                    <span className="text-muted-foreground">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-muted rounded-3xl h-48 flex items-center justify-center border border-border/50">
              <div className="text-center">
                <MapPinIcon className="w-12 h-12 text-muted-foreground/50 mx-auto mb-2" />
                <p className="text-muted-foreground">Interactive Map Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
