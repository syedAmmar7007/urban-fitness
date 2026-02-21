import React from 'react';
import { Zap, Shield, Clock, Trophy } from 'lucide-react';
import { motion } from 'motion/react';

export const Features = () => {
  const stats = [
    { icon: <Trophy />, label: "Years Experience", value: "12+" },
    { icon: <Zap />, label: "Modern Equipment", value: "150+" },
    { icon: <Shield />, label: "Expert Trainers", value: "25+" },
  ];

  return (
    <section id="features" className="py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-none overflow-hidden border-8 border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800" 
                alt="Gym Interior" 
                className="w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/20 -z-10"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 border-t-4 border-l-4 border-primary -z-10"></div>
            
            {/* Experience Badge */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
              className="absolute bottom-10 left-10 bg-primary p-6 text-black z-20 hidden md:block"
            >
              <span className="text-5xl font-bold block leading-none">12+</span>
              <span className="text-sm font-bold uppercase tracking-widest">Years of Excellence</span>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-subtitle">About Urban Fitness</span>
            <h2 className="section-title">Push Your Limits <br /> <span className="text-primary">Beyond</span> Expectations</h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Urban Fitness KHI is more than just a gym; it's a community of dedicated individuals striving for excellence. We provide a world-class environment where your goals become our mission.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="text-center md:text-left"
                >
                  <div className="text-primary mb-2 flex justify-center md:justify-start">
                    {React.cloneElement(stat.icon as React.ReactElement, { size: 32 })}
                  </div>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-gray-500 text-xs uppercase font-bold tracking-widest">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-12"
            >
              <button className="btn-primary">Learn More About Us</button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
