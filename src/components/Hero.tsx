import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1920" 
          alt="Gym Interior" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Subtle Shield Watermark */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-[0.03]">
            <Shield className="w-[500px] h-[500px] text-white" />
          </div>

          <span className="inline-block px-4 py-1 mb-6 border border-yellow-500/30 bg-yellow-500/10 text-yellow-500 rounded-full text-xs font-bold uppercase tracking-[0.2em]">
            Karachi's Premier Fitness Hub
          </span>
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none uppercase italic tracking-tighter">
            Dominate Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-yellow-400 to-orange-600">Limits</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium">
            Experience world-class training, elite equipment, and a community dedicated to crushing goals. Your transformation starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#membership" 
              className="bg-yellow-500 text-black px-10 py-4 rounded-full text-lg font-black hover:bg-yellow-400 transition-all hover:scale-105 uppercase tracking-wider flex items-center justify-center gap-2"
            >
              Join Now <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#contact" 
              className="border-2 border-white/20 hover:border-white/40 px-10 py-4 rounded-full text-lg font-black transition-all hover:bg-white/5 uppercase tracking-wider flex items-center justify-center"
            >
              Book Free Trial
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-gray-500 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};
