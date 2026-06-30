'use client';

import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Building2, Globe } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const locations = [
  {
    city: 'Dubai',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop',
    zones: ['IFZA', 'Meydan', 'DMCC', 'Dubai South'],
    desc: 'The commercial hub of the Middle East, offering unrivaled infrastructure and connectivity.'
  },
  {
    city: 'Abu Dhabi',
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1000&auto=format&fit=crop',
    zones: ['ADGM', 'KIZAD', 'Masdar City'],
    desc: 'The capital city, ideal for heavy industries, finance, and large-scale government contracts.'
  },
  {
    city: 'Sharjah & RAK',
    image: 'https://images.unsplash.com/photo-1546412414-8035e1776c9a?q=80&w=1000&auto=format&fit=crop',
    zones: ['SHAMS', 'RAKEZ', 'SAIF Zone'],
    desc: 'Highly cost-effective jurisdictions perfect for SMEs, trading, and media companies.'
  }
];

export default function JurisdictionsSection() {
  return (
    <section className="w-full bg-[#0F172A] py-24 lg:py-32 relative overflow-hidden" id="jurisdictions">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
              Jurisdictions
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-medium text-white tracking-tight">
              40+ Free Zones & <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Mainland</span>
            </h2>
            <p className="text-slate-400 text-lg font-light leading-relaxed">
              Whether you need 100% foreign ownership in a Free Zone or direct access to the local UAE market through a Mainland license, we cover every jurisdiction.
            </p>
          </div>
          <Link 
            href="/jurisdictions"
            className={cn(
              buttonVariants({ variant: "default" }),
              "h-12 bg-white text-black hover:bg-gray-100 rounded-xl font-bold shadow-lg"
            )}
          >
            Compare All Jurisdictions
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {locations.map((loc, idx) => (
            <motion.div
              key={loc.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="group relative h-[450px] rounded-[2rem] overflow-hidden"
            >
              <img 
                src={loc.image} 
                alt={loc.city} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/30 to-transparent" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-3xl font-display font-bold text-white">{loc.city}</h3>
                </div>
                
                <p className="text-slate-300 text-sm mb-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {loc.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {loc.zones.map(zone => (
                    <span key={zone} className="text-xs font-bold text-white bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                      {zone}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid sm:grid-cols-2 gap-6">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl flex items-start gap-6 hover:bg-white/10 transition-colors">
            <div className="p-4 bg-emerald-500/20 rounded-2xl shrink-0">
              <Globe className="w-8 h-8 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Free Zone</h4>
              <p className="text-slate-400 text-sm mb-4">100% Foreign Ownership, 0% Corporate Tax, and seamless capital repatriation. Ideal for global trade and digital services.</p>
              <Link href="/jurisdictions" className="text-emerald-400 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all duration-300">Learn more <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl flex items-start gap-6 hover:bg-white/10 transition-colors">
            <div className="p-4 bg-blue-500/20 rounded-2xl shrink-0">
              <Building2 className="w-8 h-8 text-blue-400" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Mainland (DET)</h4>
              <p className="text-slate-400 text-sm mb-4">Trade freely anywhere in the UAE and internationally. Take on government contracts and open retail shop fronts.</p>
              <Link href="/jurisdictions" className="text-blue-400 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all duration-300">Learn more <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
