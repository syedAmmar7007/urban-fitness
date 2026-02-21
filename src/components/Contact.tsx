import React, { SVGProps } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-subtitle">Contact Us</span>
            <h2 className="section-title">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-gray-400 mb-12 leading-relaxed max-w-lg">
              Have questions about our classes or membership? Our team is here
              to help you start your fitness journey.
            </p>

            <div className="space-y-8">
              {[
                {
                  icon: <MapPin />,
                  label: "Our Location",
                  value: "Plot 123, Block 5, Clifton, Karachi",
                },
                {
                  icon: <Phone />,
                  label: "Phone Number",
                  value: "+92 300 1234567",
                },
                {
                  icon: <Mail />,
                  label: "Email Address",
                  value: "info@urbanfitnesskhi.com",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 bg-white/5 flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                    {React.cloneElement(
                      item.icon as React.ReactElement<SVGProps<SVGSVGElement>>,
                      {
                        className: "text-primary group-hover:text-black",
                      },
                    )}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-1">
                      {item.label}
                    </span>
                    <span className="text-white font-bold">{item.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/2 p-12 border border-white/5"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-black border border-white/10 p-4 outline-none focus:border-primary transition-colors text-sm"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-black border border-white/10 p-4 outline-none focus:border-primary transition-colors text-sm"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-black border border-white/10 p-4 outline-none focus:border-primary transition-colors text-sm"
              />
              <textarea
                placeholder="Message"
                rows={6}
                className="w-full bg-black border border-white/10 p-4 outline-none focus:border-primary transition-colors text-sm resize-none"
              ></textarea>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
