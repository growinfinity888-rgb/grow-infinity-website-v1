'use client';

import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { ShieldCheck, Award, Globe, Users } from 'lucide-react';

export default function TrustSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      id: 1,
      value: 1000,
      suffix: '+',
      label: 'Businesses Setup',
      icon: <Globe className="w-5 h-5 text-blue-500" />,
    },
    {
      id: 2,
      value: 40,
      suffix: '+',
      label: 'Countries Served',
      icon: <Users className="w-5 h-5 text-indigo-500" />,
    },
    {
      id: 3,
      value: 99,
      suffix: '%',
      label: 'Success Rate',
      icon: <Award className="w-5 h-5 text-emerald-500" />,
    },
    {
      id: 4,
      value: 15,
      suffix: '+',
      label: 'Years Experience',
      icon: <ShieldCheck className="w-5 h-5 text-amber-500" />,
    },
  ];

  return (
    <section className="w-full bg-white border-b border-gray-100 py-16 lg:py-24" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="text-center mb-16 space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0D3B66] bg-blue-50 px-3 py-1.5 rounded-full">
            Government Grade Trust
          </span>
          <h2 className="text-3xl lg:text-4xl font-display font-semibold text-[#1E293B]">
            Trusted by Global <span className="text-[#0D3B66]">Enterprises</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 divide-x divide-gray-100">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-gray-100">
                {stat.icon}
              </div>
              <div className="flex items-baseline gap-1 text-[#1E293B] font-display font-bold text-4xl lg:text-5xl mb-2">
                {inView ? (
                  <CountUp end={stat.value} duration={2.5} separator="," />
                ) : (
                  <span>0</span>
                )}
                <span className="text-2xl text-[#0D3B66]">{stat.suffix}</span>
              </div>
              <p className="text-xs uppercase tracking-wider font-semibold text-gray-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Highlighted Industries Strip - Infinite Marquee */}
        <div className="mt-20 pt-10 border-t border-gray-100 overflow-hidden relative flex">
          {/* Fading edges for smooth entry/exit */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />
          
          <motion.div
            className="flex whitespace-nowrap pt-2 pb-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          >
            {[
              'Technology', 'Real Estate', 'Healthcare', 'Finance', 'E-commerce', 'Consulting',
              'Technology', 'Real Estate', 'Healthcare', 'Finance', 'E-commerce', 'Consulting'
            ].map((industry, idx) => (
              <div
                key={`${industry}-${idx}`}
                className="mr-4 lg:mr-6 group relative px-6 py-3 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden flex items-center justify-center shrink-0"
              >
                {/* Vibrant Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-[#0EA5E9] to-indigo-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                
                <span className="relative z-10 text-sm font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#0D3B66] to-[#0EA5E9] group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                  {industry}
                </span>

                {/* Animated Glow Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/20 transition-colors duration-300" />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
