import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { Logo } from './Logo';

export const Footer = ({ logoSrc }: { logoSrc: string | null }) => {
  return (
    <footer className="py-12 border-t border-white/10 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <Logo className="w-12 h-12" src={logoSrc} />
          <div className="flex flex-col leading-none">
            <span className="text-lg font-black tracking-tighter uppercase italic">Urban</span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-yellow-500 -mt-0.5">Fitness KHI</span>
          </div>
        </div>
        <p className="text-gray-500 text-sm">© 2026 Urban Fitness KHI. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm uppercase tracking-widest font-bold">Privacy</a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm uppercase tracking-widest font-bold">Terms</a>
        </div>
      </div>
    </footer>
  );
};
