import React from 'react';
import { Zap, Shield, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export const Features = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Modern Equipment",
      description: "State-of-the-art machines and free weights designed for maximum efficiency and results."
    },
    {
      icon: <Shield className="w-8 h-8 text-yellow-500" />,
      title: "Certified Trainers",
      description: "Expert coaches dedicated to your form, safety, and personalized progress tracking."
    },
    {
      icon: <Clock className="w-8 h-8 text-yellow-500" />,
      title: "24/7 Access",
      description: "Train on your schedule. Our doors are open around the clock for members."
    }
  ];

  return (
    <section id="features" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-yellow-500/50 transition-all group"
            >
              <div className="mb-6 bg-yellow-500/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-yellow-500 transition-colors">
                {React.cloneElement(feature.icon as React.ReactElement, { 
                  className: `w-8 h-8 ${idx === 0 ? 'group-hover:text-black' : 'text-yellow-500 group-hover:text-black'}` 
                })}
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase italic">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
