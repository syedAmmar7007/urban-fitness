import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      title: "Strength Training",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?auto=format&fit=crop&q=80&w=800",
      tag: "Power"
    },
    {
      title: "Cardio & HIIT",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
      tag: "Endurance"
    },
    {
      title: "Personal Training",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800",
      tag: "Elite"
    }
  ];

  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-4">Our <span className="text-yellow-500">Services</span></h2>
          <p className="text-gray-500 max-w-xl mx-auto">Tailored programs designed to push you beyond your perceived limits.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-3xl aspect-[4/5]">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-2 block">{service.tag}</span>
                <h3 className="text-3xl font-black uppercase italic text-white mb-4">{service.title}</h3>
                <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white/70 group-hover:text-yellow-500 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
