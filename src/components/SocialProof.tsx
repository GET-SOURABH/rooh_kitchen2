import React from 'react';
import { StarIcon, InstagramIcon } from './icons/Icons';

const SocialProof = () => {
  const reviews = [
    {
      name: 'Priya S.',
      text: 'Best paneer wrap I\'ve ever had! The mint chutney is to die for. Finally, a food truck that takes vegetarian food seriously.',
      rating: 5
    },
    {
      name: 'Rahul M.',
      text: 'Ordered catering for our office Diwali party - 80 people and everyone was raving about the food. Will definitely book again!',
      rating: 5
    },
    {
      name: 'Ananya K.',
      text: 'The Buddha Bowl is my weekly ritual now. Fresh, flavorful, and actually filling. Love that they use eco-friendly packaging too!',
      rating: 5
    }
  ];

  const instagramPosts = [
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=300&fit=crop',
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-main">
        {/* Rating Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="w-8 h-8 text-primary" filled />
            ))}
          </div>
          <p className="text-3xl font-bold text-foreground">4.9 out of 5</p>
          <p className="text-muted-foreground">Based on 500+ reviews</p>
        </div>

        {/* Reviews */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className="bg-card rounded-3xl p-6 border border-border/50 hover:shadow-card transition-all animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-primary" filled />
                ))}
              </div>
              <p className="text-foreground/80 mb-4 italic">"{review.text}"</p>
              <p className="font-semibold text-foreground">{review.name}</p>
            </div>
          ))}
        </div>

        {/* Instagram Strip */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center justify-center gap-2">
            <InstagramIcon className="text-primary" /> Follow the Flavor
          </h3>
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 md:overflow-visible md:justify-center">
            {instagramPosts.map((img, index) => (
              <a
                key={index}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 group"
              >
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-2 border-transparent group-hover:border-primary transition-all group-hover:shadow-elevated group-hover:-translate-y-2">
                  <img
                    src={img}
                    alt="ROOH Kitchen on Instagram"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </a>
            ))}
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-primary hover:underline font-medium"
          >
            @roohkitchen <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
