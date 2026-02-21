import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const Services = () => {
  const services = [
    {
      title: "Strength Training",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?auto=format&fit=crop&q=80&w=800",
      tag: "Power",
      desc: "Build muscle and increase your raw power with our expert-led strength programs."
    },
    {
      title: "Cardio & HIIT",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
      tag: "Endurance",
      desc: "Torch calories and improve your cardiovascular health with high-intensity training."
    },
    {
      title: "Personal Training",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800",
      tag: "Elite",
      desc: "Get one-on-one guidance tailored specifically to your body and fitness goals."
    },
    {
      title: "Yoga & Mobility",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
      tag: "Flexibility",
      desc: "Improve your range of motion and find mental clarity with our expert yoga instructors."
    }
  ];

  return (
    <section id="services" className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="section-subtitle">Our Specialities</span>
          <h2 className="section-title">Professional <span className="text-primary">Classes</span></h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0">
          {services.map((service, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group overflow-hidden aspect-[3/4] border-r border-b border-white/5 last:border-r-0"
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-primary/40 transition-colors duration-500"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-primary group-hover:text-white text-xs font-bold uppercase tracking-widest mb-2 block transition-colors">{service.tag}</span>
                <h3 className="text-3xl font-bold text-white mb-4 leading-none">{service.title}</h3>
                <p className="text-gray-400 group-hover:text-white/90 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {service.desc}
                </p>
                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white border-b border-white/20 pb-1 w-fit group-hover:border-white transition-colors">
                  Join Class <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
