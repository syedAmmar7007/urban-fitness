import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { motion } from 'motion/react';
import { Logo } from './Logo';

export const Footer = ({ logoSrc }: { logoSrc: string | null }) => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="bg-black pt-24 pb-12 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <Logo className="w-14 h-14" src={logoSrc} />
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-bold tracking-tighter uppercase">Urban</span>
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary -mt-1">Fitness KHI</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              The best fitness center in Karachi, providing top-notch equipment and professional training since 2012.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Classes', 'Pricing', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '')}`} className="text-gray-500 hover:text-primary transition-colors text-sm font-medium uppercase tracking-widest">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest">Our Classes</h4>
            <ul className="space-y-4">
              {['Strength Training', 'Cardio & HIIT', 'Personal Training', 'Yoga & Mobility'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-gray-500 hover:text-primary transition-colors text-sm font-medium uppercase tracking-widest">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest">Newsletter</h4>
            <p className="text-gray-500 text-sm mb-6">Subscribe to get the latest updates and offers.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-white/5 border border-white/10 p-3 outline-none focus:border-primary transition-colors text-sm w-full"
              />
              <button className="bg-primary text-black px-4 font-bold hover:bg-white transition-colors">
                GO
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-xs font-bold uppercase tracking-widest">
            © 2026 Urban Fitness KHI. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-gray-600 hover:text-white transition-colors text-[10px] uppercase tracking-widest font-bold">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-white transition-colors text-[10px] uppercase tracking-widest font-bold">Terms of Service</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
