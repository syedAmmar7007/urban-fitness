import React from 'react';
import { MapPin, Phone, Users, Facebook, Instagram } from 'lucide-react';

export const Contact = () => {
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
