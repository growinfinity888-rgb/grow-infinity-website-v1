'use client';

import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Clock, HeadphonesIcon } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-8 h-8 text-amber-500" />,
    title: '100% Digital Process',
    desc: 'Register your company from anywhere in the world. Our secure portal handles everything from document signatures to visa processing online.',
    bg: 'bg-amber-50',
    border: 'border-amber-100'
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-500" />,
    title: '48-Hour Setup',
    desc: 'Time is money. Our fast-tracked relationships with UAE government entities allow us to issue select Free Zone licenses in under 48 hours.',
    bg: 'bg-blue-50',
    border: 'border-blue-100'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />,
    title: 'Transparent Pricing',
    desc: 'No hidden fees. No last-minute surprises. We provide an exact, itemized breakdown of government fees, visa costs, and our service charges upfront.',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100'
  },
  {
    icon: <HeadphonesIcon className="w-8 h-8 text-purple-500" />,
    title: 'Dedicated Account Manager',
    desc: 'Say goodbye to support tickets. You get a direct WhatsApp line to a dedicated corporate advisor who acts as your personal concierge in the UAE.',
    bg: 'bg-purple-50',
    border: 'border-purple-100'
  }
];

export default function WhyUsSection() {
  return (
    <section className="w-full bg-[#F8FAFC] py-24 lg:py-32 relative overflow-hidden" id="why-us">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-amber-500/5 to-orange-500/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/5 to-cyan-400/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0D3B66] bg-blue-100/50 px-3 py-1.5 rounded-full border border-blue-200">
            Why Grow Infinity
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-medium text-[#0F172A] tracking-tight">
            The Smart Way to <br />
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0D3B66] to-[#1565C0]">Start in the UAE</span>
          </h2>
          <p className="text-lg text-gray-500 font-light leading-relaxed">
            We don't just register companies. We engineer corporate structures designed for tax efficiency, compliance, and explosive growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group`}
            >
              <div className={`w-16 h-16 ${feat.bg} ${feat.border} border rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300`}>
                {feat.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-4">
                {feat.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to action inside Why Us */}
        <div className="mt-16 bg-[#0D3B66] rounded-[2rem] p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop')] opacity-10 mix-blend-overlay bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D3B66] to-transparent z-0" />
          
          <div className="relative z-10 max-w-xl">
            <h3 className="text-3xl font-display font-bold text-white mb-4">Ready to bypass the red tape?</h3>
            <p className="text-blue-100 font-light">Join thousands of global founders who have successfully launched their UAE operations with Grow Infinity.</p>
          </div>
          
          <div className="relative z-10 flex shrink-0">
            <a href="#calculator" className="h-14 px-8 bg-white text-[#0D3B66] font-bold rounded-xl flex items-center justify-center hover:bg-gray-50 transition-colors shadow-xl">
              Calculate Your Setup Cost
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
