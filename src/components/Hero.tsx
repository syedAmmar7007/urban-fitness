import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=1920" 
          alt="Gym Training" 
          className="w-full h-full object-cover opacity-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="section-subtitle"
          >
            Build Your Body Strong
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-7xl md:text-9xl font-bold mb-6 leading-[0.9] text-white"
          >
            Ready to <br />
            <span className="text-primary">Train</span> Hard?
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-gray-300 text-lg md:text-xl mb-10 max-w-xl font-medium leading-relaxed"
          >
            Urban Fitness KHI provides the best environment, equipment, and expert guidance to help you reach your peak physical condition.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <a href="#membership" className="btn-primary flex items-center justify-center gap-3 group">
              Get Started <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#services" className="border border-white/30 hover:border-primary px-8 py-3 font-bold uppercase tracking-widest transition-all hover:bg-primary/10 flex items-center justify-center">
              Our Classes
            </a>
          </motion.div>
        </div>
      </div>

      {/* Side Text Decoration */}
      <div className="absolute right-0 bottom-20 hidden lg:block select-none pointer-events-none">
        <span className="text-[20vh] font-black text-white/[0.03] uppercase vertical-text leading-none tracking-tighter">
          Fitness
        </span>
      </div>
    </section>
  );
};
