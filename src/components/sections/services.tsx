'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Globe, ShieldCheck, Briefcase, Landmark, Receipt, CheckCircle2, ArrowRight } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const servicesData = [
  {
    id: 'mainland',
    title: 'Mainland Company Formation',
    shortTitle: 'Mainland Setup',
    icon: <Building2 className="w-5 h-5" />,
    desc: 'Establish a Dubai DET licensed entity to trade anywhere in the UAE and internationally. Gain unhindered access to the lucrative local market.',
    benefits: [
      '100% Foreign Ownership on Select Activities', 
      'Trade directly with the local UAE market', 
      'No restrictions on office location', 
      'Unlimited visa allocations based on office size'
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
    color: 'from-blue-500 to-[#0D3B66]'
  },
  {
    id: 'freezone',
    title: 'Free Zone Setup',
    shortTitle: 'Free Zone',
    icon: <Globe className="w-5 h-5" />,
    desc: 'Tax-optimized incorporation in leading free zones like IFZA, DMCC, or Meydan. Ideal for global trade, digital businesses, and holding companies.',
    benefits: [
      '0% Corporate Tax for Qualifying Income', 
      '100% Capital & Profit Repatriation', 
      'Fast-tracked digital setup (48 hours)', 
      'World-class infrastructure and networking'
    ],
    image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=800&auto=format&fit=crop',
    color: 'from-indigo-400 to-indigo-600'
  },
  {
    id: 'offshore',
    title: 'Offshore Registration',
    shortTitle: 'Offshore',
    icon: <ShieldCheck className="w-5 h-5" />,
    desc: 'Secure your wealth with strategic asset protection and international holding structures in jurisdictions like JAFZA or RAK ICC.',
    benefits: [
      'Ultimate confidentiality and privacy', 
      'Robust asset protection framework', 
      'No minimum capital requirement', 
      'Tax-free global operations'
    ],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
    color: 'from-slate-600 to-slate-800'
  },
  {
    id: 'tax',
    title: 'Corporate Tax & VAT',
    shortTitle: 'Tax & VAT',
    icon: <Receipt className="w-5 h-5" />,
    desc: 'Navigate the UAE tax landscape with confidence. FTA registration, compliance structuring, and audit services by certified agents.',
    benefits: [
      'Seamless FTA Registration & TRN issuance', 
      'Comprehensive tax health checks', 
      'Ongoing VAT return filing', 
      'Corporate Tax structuring & optimization'
    ],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop',
    color: 'from-emerald-400 to-emerald-600'
  },
  {
    id: 'golden-visa',
    title: 'Golden Visa Services',
    shortTitle: 'Golden Visa',
    icon: <Briefcase className="w-5 h-5" />,
    desc: 'Secure your long-term future in the UAE. 10-year residency processing for investors, entrepreneurs, and exceptional talents.',
    benefits: [
      '10-Year Renewable Residency', 
      'No requirement for an employment sponsor', 
      'Sponsor family members and domestic staff', 
      'Extended time outside UAE permitted'
    ],
    image: 'https://images.unsplash.com/photo-1565689157206-0fddef7589a2?q=80&w=800&auto=format&fit=crop',
    color: 'from-amber-400 to-amber-600'
  },
  {
    id: 'banking',
    title: 'Corporate Banking',
    shortTitle: 'Corporate Bank',
    icon: <Landmark className="w-5 h-5" />,
    desc: 'Fast-tracked multi-currency business bank accounts through our extensive network of elite banking partners in the UAE and internationally.',
    benefits: [
      'Pre-approved banking partnerships', 
      'Multi-currency accounts (AED, USD, EUR)', 
      'Dedicated relationship manager', 
      'Trade finance & letters of credit support'
    ],
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop',
    color: 'from-sky-400 to-sky-600'
  }
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const activeService = servicesData[activeTab];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % servicesData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-[#F8FAFC] py-24 lg:py-32" id="services">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0EA5E9] bg-sky-100 px-3 py-1.5 rounded-full border border-sky-200">
              Corporate Portfolio
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-medium text-[#0F172A] tracking-tight">
              Comprehensive <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0D3B66] to-[#1565C0]">Structuring</span>
            </h2>
            <p className="text-[#1E293B]/70 text-lg font-light leading-relaxed">
              We provide a complete ecosystem of professional services. Select a jurisdiction or service below to explore deep-dive details.
            </p>
          </div>
        </div>

        {/* Tabbed Interface Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Tabs List */}
          <div className="lg:col-span-4 space-y-3 relative z-20">
            {servicesData.map((service, idx) => (
              <button
                key={service.id}
                id={service.id}
                onClick={() => setActiveTab(idx)}
                className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all duration-300 text-left border ${
                  activeTab === idx 
                  ? 'bg-white border-[#0EA5E9]/30 shadow-lg shadow-blue-900/5 translate-x-2' 
                  : 'bg-transparent border-transparent hover:bg-white/50 text-gray-500 hover:text-gray-900'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2.5 rounded-xl transition-colors ${
                    activeTab === idx ? 'bg-[#0D3B66] text-white shadow-md' : 'bg-white text-gray-400 border border-gray-200'
                  }`}>
                    {service.icon}
                  </div>
                  <span className={`font-bold ${activeTab === idx ? 'text-[#0F172A] text-lg' : 'text-base'}`}>
                    {service.shortTitle}
                  </span>
                </div>
                {activeTab === idx && (
                  <motion.div layoutId="activeTabIndicator">
                    <ArrowRight className="w-5 h-5 text-[#0EA5E9]" />
                  </motion.div>
                )}
              </button>
            ))}
          </div>

          {/* Right Column: Content Area */}
          <div className="lg:col-span-8 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white rounded-[2rem] border border-gray-100 shadow-2xl overflow-hidden"
              >
                {/* Image Header */}
                <div className="w-full h-[280px] relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${activeService.color} opacity-40 mix-blend-multiply z-10`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent z-10" />
                  <img 
                    src={activeService.image} 
                    alt={activeService.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-6 left-8 right-8 z-20">
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
                      {activeService.title}
                    </h3>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-8 md:p-10">
                  <p className="text-lg text-gray-600 leading-relaxed font-light mb-10">
                    {activeService.desc}
                  </p>

                  <div className="space-y-6">
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Key Advantages</h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {activeService.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-3 bg-gray-50/50 p-4 rounded-xl border border-gray-100">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-sm font-medium text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-12 flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="#calculator"
                      className={cn(
                        buttonVariants({ variant: "default" }),
                        "h-14 px-8 rounded-xl bg-[#0D3B66] hover:bg-[#1565C0] text-white font-bold text-base transition-all shadow-lg shadow-blue-900/20"
                      )}
                    >
                      Calculate Cost <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                    <Link 
                      href="https://wa.me/97150000000" 
                      target="_blank"
                      className={cn(
                        buttonVariants({ variant: "outline" }),
                        "h-14 px-8 rounded-xl border-gray-200 text-gray-700 font-bold text-base hover:bg-gray-50 transition-all"
                      )}
                    >
                      Speak to an Expert
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
