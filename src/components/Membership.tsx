import React from 'react';
import { CheckCircle2 } from 'lucide-react';

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
