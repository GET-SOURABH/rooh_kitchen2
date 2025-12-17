import React from 'react';
import { Helmet } from 'react-helmet-async';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FoodGallery from '../components/FoodGallery';
import MenuSection from '../components/MenuSection';
import CateringSection from '../components/CateringSection';
import WhyRooh from '../components/WhyRooh';
import AboutSection from '../components/AboutSection';
import FindUs from '../components/FindUs';
import SocialProof from '../components/SocialProof';
import Footer from '../components/Footer';
import MobileBottomBar from '../components/MobileBottomBar';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>ROOH KITCHEN — Pure Veg Food Truck | Menu & Catering</title>
        <meta name="description" content="Street-fresh vegetarian bowls, wraps, chaats & party-perfect catering. See the menu, book catering, find today's stop." />
        <meta property="og:title" content="ROOH KITCHEN — Pure Veg Food Truck" />
        <meta property="og:description" content="Street-fresh vegetarian bowls, wraps, chaats & party-perfect catering." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://roohkitchen.example" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FoodEstablishment",
            "name": "ROOH KITCHEN",
            "description": "Pure vegetarian food truck serving street-fresh bowls, wraps, chaats and catering services.",
            "servesCuisine": "Vegetarian",
            "telephone": "+919876543210",
            "areaServed": "Bangalore",
            "priceRange": "₹₹",
            "hasMenu": {
              "@type": "Menu",
              "hasMenuSection": [
                {
                  "@type": "MenuSection",
                  "name": "Signature Dishes",
                  "hasMenuItem": [
                    { "@type": "MenuItem", "name": "Paneer Tikka Wrap", "offers": { "@type": "Offer", "price": "179", "priceCurrency": "INR" } },
                    { "@type": "MenuItem", "name": "Rooh Buddha Bowl", "offers": { "@type": "Offer", "price": "229", "priceCurrency": "INR" } }
                  ]
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg z-50">
        Skip to main content
      </a>

      <TopBar />
      <Header />
      
      <main id="main">
        <Hero />
        <FoodGallery />
        <MenuSection />
        <CateringSection />
        <WhyRooh />
        <AboutSection />
        <FindUs />
        <SocialProof />
      </main>

      <Footer />
      <MobileBottomBar />

      {/* Bottom padding for mobile bar */}
      <div className="h-20 md:hidden" aria-hidden />
    </>
  );
};

export default Index;
