'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserPlus, Search, FileSignature, Stamp, Landmark, Rocket } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Consultation',
    desc: 'Meet with our corporate advisors to structure your business plan, ownership, and tax model.',
    icon: <UserPlus className="w-6 h-6" />
  },
  {
    num: '02',
    title: 'Trade Name',
    desc: 'Reserve and register your official trade name with the respective government authority.',
    icon: <Search className="w-6 h-6" />
  },
  {
    num: '03',
    title: 'Approvals',
    desc: 'Obtain Initial Approvals and draft the Memorandum of Association (MoA).',
    icon: <FileSignature className="w-6 h-6" />
  },
  {
    num: '04',
    title: 'License Issued',
    desc: 'Pay government fees and receive your official Trade License and Establishment Card.',
    icon: <Stamp className="w-6 h-6" />
  },
  {
    num: '05',
    title: 'Banking & Visas',
    desc: 'Process investor visas, Emirates IDs, and open a corporate bank account.',
    icon: <Landmark className="w-6 h-6" />
  },
  {
    num: '06',
    title: 'Launch Business',
    desc: 'Your business is fully operational, 100% compliant, and ready to trade globally.',
    icon: <Rocket className="w-6 h-6" />
  }
];

export default function JourneySection() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
    }, 4000); // Progress every 4 seconds
    return () => clearInterval(timer);
  }, []);
  return (
    <section className="w-full bg-white py-24 lg:py-32 overflow-hidden border-b border-gray-100" id="journey">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="text-center mb-20 space-y-4 max-w-2xl mx-auto">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0D3B66] bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
            Streamlined Process
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-medium text-[#1E293B] tracking-tight">
            The Business Setup <span className="font-bold text-[#0D3B66]">Journey</span>
          </h2>
          <p className="text-gray-500 text-lg font-light">
            We handle the complexities of government interactions, delivering a seamless 6-step incorporation pipeline.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Automated Connecting Line (Hidden on Mobile) */}
          <div className="hidden lg:block absolute top-[60px] left-10 right-10 h-1 bg-gray-100 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-blue-500 to-[#0EA5E9]"
              initial={{ width: '0%' }}
              animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, idx) => {
              const isActive = idx === activeStep;
              const isPast = idx < activeStep;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative group cursor-pointer"
                  onClick={() => setActiveStep(idx)}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-32 h-32 mb-6 rounded-full border-4 flex items-center justify-center relative shadow-sm transition-all duration-500 ${
                      isActive ? 'border-[#0EA5E9]/30 bg-blue-50/50 scale-110' : 
                      isPast ? 'border-blue-100 bg-white' : 
                      'border-gray-50 bg-white'
                    }`}>
                      {/* Inner Circle */}
                      <div className={`w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500 ${
                        isActive ? 'bg-gradient-to-br from-[#0D3B66] to-[#0EA5E9] text-white shadow-lg shadow-blue-500/20' : 
                        isPast ? 'bg-[#0D3B66]/10 text-[#0D3B66]' : 
                        'bg-gray-50 text-gray-400 group-hover:bg-gray-100 group-hover:text-gray-600'
                      }`}>
                        {step.icon}
                      </div>
                      
                      {/* Step Number Badge */}
                      <div className={`absolute top-0 right-0 w-8 h-8 rounded-full flex items-center justify-center font-bold font-mono text-xs shadow-md transition-colors duration-500 ${
                        isActive || isPast ? 'bg-[#0EA5E9] text-white' : 'bg-gray-200 text-gray-500'
                      }`}>
                        {step.num}
                      </div>
                      
                      {/* Active Pulse Ring */}
                      {isActive && (
                        <div className="absolute inset-0 rounded-full border border-[#0EA5E9] animate-ping opacity-20" />
                      )}
                    </div>
                    
                    <h4 className={`text-lg font-display font-bold mb-3 transition-colors duration-500 ${
                      isActive ? 'text-[#0D3B66]' : 'text-[#1E293B]'
                    }`}>
                      {step.title}
                    </h4>
                    <p className={`text-sm leading-relaxed font-light px-2 transition-colors duration-500 ${
                      isActive ? 'text-gray-600' : 'text-gray-400'
                    }`}>
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
