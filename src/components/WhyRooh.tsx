import React from 'react';

const WhyRooh = () => {
  const features = [
    {
      icon: '🥬',
      title: '100% Vegetarian Kitchen',
      description: 'No meat, no egg. Ever. Pure vegetarian cooking with love.'
    },
    {
      icon: '🌿',
      title: 'Fresh, Local Produce',
      description: 'We source locally for the freshest ingredients every day.'
    },
    {
      icon: '✨',
      title: 'Hygiene First',
      description: 'FSSAI certified. Clean kitchen, safe food, happy you.'
    },
    {
      icon: '♻️',
      title: 'Eco Packaging',
      description: 'Biodegradable containers & cutlery. Good food, better planet.'
    }
  ];

  return (
    <section className="section-padding bg-card">
      <div className="container-main">
        {/* Philosophy Header - GT's "We Begin Within" style */}
        <div className="text-center mb-16">
          <span className="font-script text-4xl md:text-5xl text-primary block mb-4">We Believe</span>
          <h2 className="heading-section text-foreground mb-6">
            Food Should Be Your Medicine
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            That's why we are on a mission to positively transform people through pure, 
            vegetarian nutrition. For years, our kitchen has been authentically fueled by 
            fresh produce, traditional recipes, and a whole lot of soul.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-background rounded-3xl p-8 text-center border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-500 group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Image reveal section - GT's "From Nature to Nutrition" style */}
        <div className="mt-20 relative rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-96 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&h=600&fit=crop"
                alt="Fresh vegetables and produce"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <span className="absolute bottom-6 left-6 text-white text-2xl font-bold">From Nature</span>
            </div>
            <div className="relative h-64 md:h-96 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop"
                alt="Delicious prepared dish"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <span className="absolute bottom-6 right-6 text-white text-2xl font-bold">To Nutrition</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRooh;
