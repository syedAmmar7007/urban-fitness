import React from 'react';
import { motion } from 'motion/react';

export const Membership = () => {
  const plans = [
    {
      name: "Basic",
      price: "5,000",
      features: ["Gym Access", "Locker Room", "Standard Equipment", "Free Water"],
      popular: false
    },
    {
      name: "Pro",
      price: "8,500",
      features: ["24/7 Access", "Group Classes", "Personalized Plan", "Sauna Access"],
      popular: true
    },
    {
      name: "Elite",
      price: "15,000",
      features: ["All Pro Features", "Private Coaching", "Nutrition Guide", "Guest Passes"],
      popular: false
    }
  ];

  return (
    <section id="membership" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="section-subtitle">Membership Plans</span>
          <h2 className="section-title">Choose Your <span className="text-primary">Journey</span></h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-0 border border-white/10 overflow-hidden">
          {plans.map((plan, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ backgroundColor: "rgba(249, 115, 22, 0.05)" }}
              className={`p-12 flex flex-col items-center text-center border-r border-white/10 last:border-r-0 transition-all duration-500 group ${plan.popular ? 'bg-white/[0.02]' : ''}`}
            >
              <h3 className="text-2xl font-bold mb-8 group-hover:text-primary transition-colors">{plan.name}</h3>
              <div className="mb-10">
                <span className="text-sm font-bold text-gray-500 uppercase tracking-widest block mb-2">Starting From</span>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-sm font-bold text-primary">PKR</span>
                  <span className="text-6xl font-bold">{plan.price}</span>
                </div>
                <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">Per Month</span>
              </div>
              
              <ul className="space-y-4 mb-12 w-full">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="text-gray-400 text-sm font-medium border-b border-white/5 pb-2 last:border-0">
                    {feature}
                  </li>
                ))}
              </ul>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 font-bold uppercase tracking-widest transition-all ${plan.popular ? 'bg-primary text-black hover:bg-white' : 'border border-white/20 text-white hover:bg-primary hover:text-black hover:border-primary'}`}
              >
                Join Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
