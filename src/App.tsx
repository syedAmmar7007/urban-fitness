/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Dumbbell, 
  Users, 
  Clock, 
  CheckCircle2, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  MessageCircle, 
  Menu, 
  X, 
  ArrowRight,
  Zap,
  Shield,
  Trophy
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { generateLogoImage } from './services/logoGenerator';

// --- Components ---

const Logo = ({ className = "w-12 h-12", src }: { className?: string, src?: string | null }) => {
  if (src) {
    return <img src={src} alt="Urban Fitness Logo" className={`${className} object-contain`} referrerPolicy="no-referrer" />;
  }
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Specular Lighting for Metallic Shine */}
        <filter id="metalShine" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="blur" />
          <feSpecularLighting in="blur" surfaceScale="5" specularConstant="1" specularExponent="20" lightingColor="#white" result="specOut">
            <fePointLight x="-50" y="-50" z="100" />
          </feSpecularLighting>
          <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut" />
          <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
        </filter>

        {/* Extreme 3D Extrusion for FITNESS */}
        <filter id="fitness3D" x="-20%" y="-20%" width="140%" height="140%">
          <feOffset dx="0" dy="1" in="SourceAlpha" result="o1" />
          <feOffset dx="0" dy="2" in="SourceAlpha" result="o2" />
          <feOffset dx="0" dy="3" in="SourceAlpha" result="o3" />
          <feOffset dx="0" dy="4" in="SourceAlpha" result="o4" />
          <feOffset dx="0" dy="5" in="SourceAlpha" result="o5" />
          <feMerge result="ext">
            <feMergeNode in="o1" /><feMergeNode in="o2" /><feMergeNode in="o3" /><feMergeNode in="o4" /><feMergeNode in="o5" />
          </feMerge>
          <feFlood floodColor="#431407" result="extColor" />
          <feComposite in="extColor" in2="ext" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF2CC" />
          <stop offset="20%" stopColor="#FFD966" />
          <stop offset="50%" stopColor="#F6B26B" />
          <stop offset="80%" stopColor="#E69138" />
          <stop offset="100%" stopColor="#B45F06" />
        </linearGradient>

        <linearGradient id="frameGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F3F4F6" />
          <stop offset="50%" stopColor="#9CA3AF" />
          <stop offset="100%" stopColor="#374151" />
        </linearGradient>
      </defs>

      {/* Shield Frame */}
      <path d="M100 5 L192 38 V100 C192 165 100 198 100 198 C100 198 8 165 8 100 V38 L100 5Z" fill="url(#frameGrad)" filter="url(#metalShine)" />
      
      {/* Shield Interior */}
      <path d="M100 18 L178 45 V100 C178 155 100 188 100 188 C100 188 22 155 22 100 V45 L100 18Z" fill="#000000" />
      <path d="M100 18 L178 45 V100 C178 155 100 188 100 188 C100 188 22 155 22 100 V45 L100 18Z" fill="radial-gradient(circle at 50% 30%, #4B5563 0%, transparent 80%)" opacity="0.4" />

      {/* Screws */}
      {[
        {x:100, y:12}, {x:148, y:28}, {x:52, y:28}, 
        {x:186, y:45}, {x:14, y:45}, {x:186, y:100}, 
        {x:14, y:100}, {x:148, y:172}, {x:52, y:172}, {x:100, y:192}
      ].map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r="3.5" fill="#1F2937" />
          <circle cx={p.x-0.5} cy={p.y-0.5} r="3" fill="#D1D5DB" />
          <path d={`M${p.x-1.5} ${p.y} L${p.x+1.5} ${p.y} M${p.x} ${p.y-1.5} L${p.x} ${p.y+1.5}`} stroke="#111827" strokeWidth="0.5" />
        </g>
      ))}

      {/* URBAN Text */}
      <path id="urbanPath" d="M40 85 Q100 45 160 85" fill="none" />
      <text className="font-black italic uppercase" fontSize="24" fill="url(#goldGrad)" filter="url(#metalShine)">
        <textPath href="#urbanPath" startOffset="50%" textAnchor="middle">URBAN</textPath>
      </text>

      {/* Silhouettes */}
      <g transform="translate(0, 10)">
        <path d="M75 115 C75 105 85 100 85 90 C85 82 80 78 75 78 C70 78 65 82 65 90 C65 95 70 100 70 105 C60 110 55 120 58 135 L75 135 Z" fill="#F3F4F6" filter="url(#metalShine)" />
        <path d="M125 115 C125 105 115 100 115 90 C115 82 120 78 125 78 C130 78 135 82 135 90 C135 95 130 100 130 105 C140 110 145 120 142 135 L125 135 Z" fill="#F97316" filter="url(#metalShine)" />
        <rect x="52" y="112" width="12" height="4" rx="1" fill="#9CA3AF" transform="rotate(-20 52 112)"/>
        <rect x="138" y="112" width="12" height="4" rx="1" fill="#EA580C" transform="rotate(20 138 112)"/>
      </g>

      {/* FITNESS Text */}
      <text x="100" y="172" className="font-black italic uppercase" fontSize="38" fill="url(#goldGrad)" textAnchor="middle" filter="url(#fitness3D)" style={{ letterSpacing: '-1.5px' }}>FITNESS</text>
      
      {/* Divider Arc */}
      <path d="M35 142 Q100 130 165 142" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.3" fill="none" />
    </svg>
  );
};

const Navbar = ({ logoSrc }: { logoSrc: string | null }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Trainers', href: '#features' },
    { name: 'Membership', href: '#membership' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Logo className="w-14 h-14" src={logoSrc} />
          <div className="flex flex-col leading-none">
            <span className="text-xl font-black tracking-tighter uppercase italic">Urban</span>
            <span className="text-sm font-bold tracking-[0.3em] uppercase text-yellow-500 -mt-1">Fitness KHI</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-yellow-500 transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#membership" 
            className="bg-yellow-500 text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-yellow-400 transition-colors uppercase tracking-wider"
          >
            Join Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black border-b border-white/10 md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-bold uppercase tracking-wider"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
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

const Features = () => {
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

const Services = () => {
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

const Membership = () => {
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
    <section id="membership" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-4">Choose Your <span className="text-yellow-500">Plan</span></h2>
          <p className="text-gray-500">Flexible memberships for every fitness level.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`p-10 rounded-3xl border ${plan.popular ? 'border-yellow-500 bg-yellow-500/5 relative' : 'border-white/10 bg-white/5'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold uppercase italic mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black">PKR {plan.price}</span>
                <span className="text-gray-500">/mo</span>
              </div>
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-yellow-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-black uppercase tracking-wider transition-all ${plan.popular ? 'bg-yellow-500 text-black hover:bg-yellow-400' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-8">Get In <span className="text-yellow-500">Touch</span></h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="First Name" 
                  className="bg-white/5 border border-white/10 rounded-xl p-4 focus:border-yellow-500 outline-none transition-colors"
                />
                <input 
                  type="text" 
                  placeholder="Last Name" 
                  className="bg-white/5 border border-white/10 rounded-xl p-4 focus:border-yellow-500 outline-none transition-colors"
                />
              </div>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-yellow-500 outline-none transition-colors"
              />
              <textarea 
                placeholder="How can we help?" 
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-yellow-500 outline-none transition-colors"
              ></textarea>
              <button className="bg-yellow-500 text-black w-full py-4 rounded-xl font-black uppercase tracking-wider hover:bg-yellow-400 transition-all">
                Send Message
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="bg-yellow-500/10 p-4 rounded-2xl">
                  <MapPin className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <h4 className="text-lg font-bold uppercase italic mb-1">Location</h4>
                  <p className="text-gray-400">Plot 123, Block 5, Clifton, Karachi, Pakistan</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-yellow-500/10 p-4 rounded-2xl">
                  <Phone className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <h4 className="text-lg font-bold uppercase italic mb-1">Phone</h4>
                  <p className="text-gray-400">+92 300 1234567</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-yellow-500/10 p-4 rounded-2xl">
                  <Users className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <h4 className="text-lg font-bold uppercase italic mb-1">Socials</h4>
                  <div className="flex gap-4 mt-2">
                    <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors"><Facebook /></a>
                    <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors"><Instagram /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ logoSrc }: { logoSrc: string | null }) => {
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

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/923001234567" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
};

// --- Main App ---

export default function App() {
  const [logoSrc, setLogoSrc] = useState<string | null>(null);

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const src = await generateLogoImage();
        setLogoSrc(src);
      } catch (error) {
        console.error("Failed to generate logo:", error);
      }
    };
    fetchLogo();
  }, []);

  return (
    <div className="min-h-screen selection:bg-yellow-500 selection:text-black">
      <Navbar logoSrc={logoSrc} />
      <Hero />
      <Features />
      <Services />
      <Membership />
      <Contact />
      <Footer logoSrc={logoSrc} />
      <WhatsAppButton />
    </div>
  );
}
