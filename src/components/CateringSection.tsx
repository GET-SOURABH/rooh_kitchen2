import React, { useState } from 'react';
import { CATERING_PACKAGES } from '../data/menuData';
import { CheckIcon, XIcon, PhoneIcon, WhatsAppIcon, MailIcon } from './icons/Icons';
import { toast } from 'sonner';

const CateringSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    date: '',
    guests: '',
    budget: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent('Catering Inquiry - ROOH KITCHEN');
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email}\n` +
      `Event Type: ${formData.eventType}\n` +
      `Date: ${formData.date}\n` +
      `Guests: ${formData.guests}\n` +
      `Budget: ${formData.budget}\n` +
      `Notes: ${formData.notes}`
    );
    
    window.location.href = `mailto:orders@roohkitchen.example?subject=${subject}&body=${body}`;
    toast.success("We'll contact you shortly!", {
      description: "Your catering inquiry has been submitted."
    });
    setIsFormOpen(false);
    setFormData({ name: '', phone: '', email: '', eventType: '', date: '', guests: '', budget: '', notes: '' });
  };

  return (
    <section id="catering" className="section-padding bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="heading-section text-foreground mb-4">
            Catering <span className="text-primary">Packages</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From birthday 'chaat parties' to corporate lunches, we tailor pure-veg menus your guests will actually remember.
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {CATERING_PACKAGES.map((pkg, index) => (
            <div
              key={pkg.id}
              className="bg-card rounded-3xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-elevated transition-all animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-primary">₹{pkg.pricePerHead}</div>
                <p className="text-sm text-muted-foreground">per person</p>
                <p className="text-sm text-secondary font-medium mt-1">{pkg.guests} guests</p>
              </div>

              <div className="space-y-3 mb-6">
                <p className="text-sm font-medium text-foreground">Includes:</p>
                {pkg.includes.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckIcon className="w-4 h-4 text-secondary shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="space-y-2 mb-6">
                <p className="text-sm font-medium text-foreground">Add-ons:</p>
                <div className="flex flex-wrap gap-2">
                  {pkg.addons.map((addon) => (
                    <span key={addon} className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                      + {addon}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-xs text-secondary italic">{pkg.notes}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => setIsFormOpen(true)}
            className="btn-primary text-lg px-8 py-4"
          >
            Get a Quote
          </button>
          <p className="text-sm text-muted-foreground mt-4">
            Or call us directly at{' '}
            <a href="tel:+919876543210" className="text-primary hover:underline">+91 98765 43210</a>
          </p>
        </div>
      </div>

      {/* Catering Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" onClick={() => setIsFormOpen(false)} />
          
          <div className="relative bg-card rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-elevated animate-scale-in">
            <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
              <h3 className="text-xl font-bold text-foreground">Catering Inquiry</h3>
              <button
                onClick={() => setIsFormOpen(false)}
                className="p-2 hover:bg-muted rounded-full transition-colors"
                aria-label="Close"
              >
                <XIcon />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="you@example.com"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Event Type *</label>
                  <select
                    required
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select type</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Corporate">Corporate</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Festival">Festival</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Event Date *</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Number of Guests *</label>
                  <input
                    type="number"
                    required
                    min="10"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Budget Range</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select range</option>
                    <option value="Under ₹10,000">Under ₹10,000</option>
                    <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000</option>
                    <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                    <option value="Above ₹50,000">Above ₹50,000</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Additional Notes</label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Dietary preferences, Jain options, etc."
                />
              </div>

              <button type="submit" className="w-full btn-primary">
                Submit Inquiry
              </button>

              <div className="text-center pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-3">Or reach us directly:</p>
                <div className="flex justify-center gap-3">
                  <a
                    href="tel:+919876543210"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border hover:border-primary text-foreground transition-colors"
                  >
                    <PhoneIcon className="w-4 h-4" /> Call
                  </a>
                  <a
                    href="https://wa.me/919876543210?text=Hi! I'd like to inquire about catering."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary text-secondary-foreground"
                  >
                    <WhatsAppIcon className="w-4 h-4" /> WhatsApp
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default CateringSection;
