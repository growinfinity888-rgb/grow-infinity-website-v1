import { useState } from 'react';
import { countriesData } from '../data';
import { CountryData } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Landmark, Coins, TrendingUp, CheckCircle2, Building2, ArrowRight } from 'lucide-react';

export default function InteractiveMap() {
  const [selectedCountry, setSelectedCountry] = useState<CountryData>(countriesData[0]);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  // High-fidelity jurisdiction details for tooltips
  const jurisdictionOverviews: { [key: string]: { hub: string; highlight: string; tax: string; timeline: string } } = {
    uae: {
      hub: 'Primary Hub: Dubai, UAE',
      highlight: '100% foreign ownership allowed',
      tax: '9% Corporate Tax',
      timeline: '3 - 7 Days Setup'
    },
    saudi: {
      hub: 'Primary Hub: Riyadh, KSA',
      highlight: 'Vision 2030 Capital Access',
      tax: '20% Corporate Tax',
      timeline: '10 - 15 Days Setup'
    },
    qatar: {
      hub: 'Primary Hub: Doha, Qatar',
      highlight: 'Double Taxation Treaties',
      tax: '10% Corporate Tax',
      timeline: '8 - 14 Days Setup'
    },
    india: {
      hub: 'Primary Hub: Mumbai, India',
      highlight: 'Seamless Capital Repatriation',
      tax: 'Standard Corporate Rates',
      timeline: '15 - 25 Days Setup'
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="interactive-map-container">
      {/* Visual Vector Nodes (Left 7 Columns) */}
      <div className="lg:col-span-7 bg-gradient-to-br from-neutral-900 to-neutral-900 border border-neutral-800 rounded-[1.5rem] p-6 flex flex-col justify-between relative overflow-hidden min-h-[400px] shadow-premium-dark" id="map-visual-card">
        {/* Subtle grid of dots to match the reference image */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="absolute -right-40 -top-40 w-96 h-96 bg-[#0F4CFF]/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -left-40 -bottom-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#0F4CFF] font-bold font-display bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-500/20 backdrop-blur-md shadow-sm">
                Global Footprint
              </span>
              <h3 className="font-display font-medium text-white text-3xl mt-5 tracking-tight">
                Strategic <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Jurisdictions</span>
              </h3>
            </div>
            <div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] font-mono text-neutral-300 uppercase tracking-widest">Live Network</span>
            </div>
          </div>
          <p className="text-sm text-neutral-400 mt-2 max-w-md font-light">
            Explore regional tax and licensing frameworks.
          </p>
        </div>

        {/* Global World Map & Interactive Board */}
        <div className="relative w-full h-[280px] flex items-center justify-center my-4 bg-[#0F172A]/60 rounded-[1.5rem] border border-white/5 shadow-[inset_0_4px_24px_rgba(0,0,0,0.2)] overflow-hidden backdrop-blur-xl z-10" id="vector-map-board">
          
          {/* Detailed SVG World Map Projection matching reference image */}
          <svg className="w-full h-full absolute inset-0 pointer-events-none select-none" viewBox="0 0 800 400" fill="none">
            <defs>
              <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
                <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000000" floodOpacity="0.4" />
                <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#0F4CFF" floodOpacity="0.2" />
              </filter>
              <linearGradient id="routeGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#334155" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#334155" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            {/* Subtle high-tech grid coordinate lines */}
            <g stroke="#334155" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="2 4">
              <line x1="0" y1="100" x2="800" y2="100" />
              <line x1="0" y1="200" x2="800" y2="200" />
              <line x1="0" y1="300" x2="800" y2="300" />
              <line x1="200" y1="0" x2="200" y2="400" />
              <line x1="400" y1="0" x2="400" y2="400" />
              <line x1="600" y1="0" x2="600" y2="400" />
            </g>

            {/* Continents styled in high-contrast dark with premium drop shadows */}
            <g filter="url(#shadow)" fill="#1E293B" stroke="#334155" strokeWidth="0.8" strokeLinejoin="round">
              
              {/* 1. Greenland */}
              <path d="M 235,50 C 240,43 255,42 270,38 C 285,34 300,32 295,45 C 292,53 282,65 272,75 C 265,81 258,85 252,86 C 248,82 240,75 238,68 C 235,62 232,54 235,50 Z" />

              {/* 2. Iceland */}
              <path d="M 292,68 C 294,66 298,66 297,70 C 295,72 291,71 292,68 Z" />

              {/* 3. North America */}
              <path d="M 40,82 C 45,75 52,70 65,72 C 78,74 85,68 95,65 C 105,62 118,60 128,68 C 138,76 150,72 165,65 C 180,58 195,60 205,66 C 215,72 212,85 198,92 C 185,100 202,110 215,118 C 228,126 215,142 195,138 C 175,134 165,145 152,158 C 139,171 132,185 118,190 C 104,195 112,175 115,158 C 118,141 102,138 90,142 C 78,146 65,138 58,125 C 51,112 40,105 38,95 C 36,85 35,90 40,82 Z" />

              {/* 4. South America */}
              <path d="M 124,192 C 138,188 152,192 162,202 C 172,212 185,225 188,242 C 191,259 182,280 172,300 C 162,320 152,342 142,358 C 138,364 133,365 131,358 C 129,351 130,335 132,320 C 129,305 124,285 118,265 C 112,245 110,225 115,210 C 120,195 118,196 124,192 Z" />

              {/* 5. Great Britain & Ireland */}
              <path d="M 288,96 C 290,92 296,91 298,95 C 296,101 292,103 288,100 Z M 281,99 C 283,97 286,97 285,101 C 282,103 280,101 281,99 Z" />

              {/* 6. Africa */}
              <path d="M 315,162 C 322,152 334,148 344,146 C 354,144 365,148 375,145 C 382,148 385,152 380,158 C 375,164 368,168 372,174 C 378,178 392,175 398,184 C 404,192 412,205 408,218 C 404,230 395,248 388,265 C 382,282 375,305 365,322 C 358,335 348,344 340,342 C 335,338 338,322 338,308 C 338,295 342,280 334,265 C 326,250 318,235 312,218 C 306,200 304,182 308,172 C 312,162 310,165 315,162 Z" />

              {/* 7. Madagascar */}
              <path d="M 390,285 C 395,280 400,290 398,300 C 395,310 390,305 390,285 Z" />

              {/* 8. Eurasia (Europe & Asia) */}
              {/* Crafted with highly realistic Arabian Peninsula (around 360-440, 160-205) and Indian Peninsula (465-540, 195-242) */}
              <path d="M 302,112 
                       C 305,102 312,98 325,95 
                       C 330,90 335,82 342,75 
                       C 348,68 358,65 365,70 
                       C 372,75 378,82 385,80 
                       C 392,78 405,68 418,65 
                       C 430,62 450,58 470,62 
                       C 490,66 515,62 535,65 
                       C 555,68 580,62 605,68 
                       C 630,74 655,82 670,95 
                       C 685,108 690,122 682,135 
                       C 674,148 662,158 650,170 
                       C 638,182 642,198 630,208 
                       C 618,218 602,212 588,222 
                       C 574,232 562,242 550,232 
                       C 538,222 528,215 522,228 
                       C 516,241 512,248 506,238 
                       C 500,228 495,212 485,218 
                       C 475,224 465,218 455,208 
                       C 445,198 438,202 432,192 
                       C 426,182 432,175 422,168 
                       C 412,161 398,165 390,158 
                       C 382,151 385,142 375,135 
                       C 365,128 355,132 345,125 
                       C 335,118 315,122 302,112 Z" />

              {/* Detailed Arabian Peninsula overlay to ensure rich realistic coastlines around UAE, Qatar, and KSA */}
              <path d="M 360,165 
                       L 366,192 
                       C 368,202 374,210 384,212 
                       C 394,214 414,212 426,206 
                       C 434,202 438,194 438,184 
                       C 434,178 424,174 416,168 
                       C 408,162 402,164 396,160 
                       Z" />

              {/* Detailed Indian Subcontinent overlay to ensure realistic coastline under the India pin */}
              <path d="M 465,195 
                       C 472,210 488,230 512,242 
                       C 524,232 534,218 540,195 
                       Z" />

              {/* 9. Sri Lanka */}
              <path d="M 522,248 C 525,246 527,249 525,252 C 523,254 521,252 522,248 Z" />

              {/* 10. Japan */}
              <path d="M 645,115 C 648,110 652,120 650,130 C 648,135 644,125 645,115 Z" />

              {/* 11. Australia */}
              <path d="M 605,260 C 615,252 630,250 645,252 C 655,255 665,265 670,278 C 675,290 668,302 658,308 C 645,312 630,310 618,302 C 608,292 600,275 605,260 Z" />

              {/* 12. New Zealand */}
              <path d="M 678,315 C 682,312 685,318 683,325 C 680,328 676,322 678,315 Z" />

            </g>

            {/* Premium, clean Ocean Typographical Reference Labels in sophisticated styling */}
            <text x="180" y="260" fill="#475569" fillOpacity="0.5" className="font-mono text-[7px] tracking-[0.25em] font-extrabold uppercase">Atlantic Ocean</text>
            <text x="490" y="280" fill="#475569" fillOpacity="0.5" className="font-mono text-[7px] tracking-[0.25em] font-extrabold uppercase">Indian Ocean</text>
            <text x="450" y="172" fill="#475569" fillOpacity="0.4" className="font-mono text-[6px] tracking-[0.15em] font-bold uppercase">Arabian Sea</text>

            {/* High-Tech Animated Connecting Trade Arcs between the HQ and corridors */}
            {/* UAE to India Arc */}
            <path d="M432,184 Q472,160 512,212" fill="none" stroke="url(#routeGradient)" strokeWidth="2.2" />
            <motion.path 
              d="M432,184 Q472,160 512,212" 
              fill="none" 
              stroke="#60A5FA" 
              strokeWidth="1.8" 
              strokeDasharray="6 6"
              animate={{ strokeDashoffset: [0, -30] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'linear' }}
            />

            {/* UAE to KSA Arc */}
            <path d="M432,184 Q400,190 368,176" fill="none" stroke="url(#routeGradient)" strokeWidth="1.8" />
            <motion.path 
              d="M432,184 Q400,190 368,176" 
              fill="none" 
              stroke="#34D399" 
              strokeWidth="1.5" 
              strokeDasharray="4 4"
              animate={{ strokeDashoffset: [0, 20] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'linear' }}
            />

            {/* UAE to Qatar Arc */}
            <path d="M432,184 Q418,168 404,152" fill="none" stroke="url(#routeGradient)" strokeWidth="1.5" />
            <motion.path 
              d="M432,184 Q418,168 404,152" 
              fill="none" 
              stroke="#A78BFA" 
              strokeWidth="1.2" 
              strokeDasharray="4 4"
              animate={{ strokeDashoffset: [0, -16] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
            />
          </svg>

          {/* Interactive Territory Pins with Premium Blinking Glow rings */}
          <div className="absolute inset-0 flex items-center justify-center" id="hotspots">
            
            {/* 1. Saudi Arabia (KSA) Pin */}
            <div 
              style={{ left: '46%', top: '44%' }} 
              className="absolute cursor-pointer group z-10"
              onClick={() => setSelectedCountry(countriesData[1])}
              onMouseEnter={() => setHoveredCountry('saudi')}
              onMouseLeave={() => setHoveredCountry(null)}
              id="pin-saudi"
            >
              <div className="relative flex items-center justify-center">
                {/* CSS Blinking Pulse Rings */}
                <span className="absolute w-12 h-12 rounded-full bg-emerald-500/25 animate-ping opacity-75" />
                <span className="absolute w-8 h-8 rounded-full bg-emerald-500/10 animate-pulse" />
                
                {/* Custom Premium High-contrast Pin */}
                <motion.div 
                  className={`w-11 h-11 rounded-full flex flex-col items-center justify-center transition-all duration-300 shadow-xl border ${selectedCountry.id === 'saudi' ? 'bg-neutral-900 text-white border-[#061A40] ring-4 ring-emerald-500/25' : 'bg-white text-neutral-800 border-neutral-200/90 hover:border-emerald-500/50'}`}
                  whileHover={{ scale: 1.15 }}
                >
                  <span className="font-display font-extrabold text-[9px] leading-none">KSA</span>
                  <span className="text-[6px] opacity-75 mt-0.5 uppercase font-black tracking-wider">Riyadh</span>
                </motion.div>
              </div>
            </div>

            {/* 2. Qatar (QAT) Pin */}
            <div 
              style={{ left: '50.5%', top: '38%' }} 
              className="absolute cursor-pointer group z-10"
              onClick={() => setSelectedCountry(countriesData[2])}
              onMouseEnter={() => setHoveredCountry('qatar')}
              onMouseLeave={() => setHoveredCountry(null)}
              id="pin-qatar"
            >
              <div className="relative flex items-center justify-center">
                {/* CSS Blinking Pulse Rings */}
                <span className="absolute w-10 h-10 rounded-full bg-blue-500/20 animate-ping opacity-70" />
                <span className="absolute w-7 h-7 rounded-full bg-blue-500/10 animate-pulse" />
                
                {/* Custom Premium High-contrast Pin */}
                <motion.div 
                  className={`w-10 h-10 rounded-full flex flex-col items-center justify-center transition-all duration-300 shadow-xl border ${selectedCountry.id === 'qatar' ? 'bg-neutral-900 text-white border-[#061A40] ring-4 ring-blue-500/25' : 'bg-white text-neutral-800 border-neutral-200/90 hover:border-blue-500/50'}`}
                  whileHover={{ scale: 1.15 }}
                >
                  <span className="font-display font-extrabold text-[8.5px] leading-none">QAT</span>
                  <span className="text-[5.5px] opacity-75 mt-0.5 uppercase font-black tracking-wider">Doha</span>
                </motion.div>
              </div>
            </div>

            {/* 3. UAE Pin (Core Headquarters - Main Epicentre) */}
            <div 
              style={{ left: '54%', top: '46%' }} 
              className="absolute cursor-pointer group z-20"
              onClick={() => setSelectedCountry(countriesData[0])}
              onMouseEnter={() => setHoveredCountry('uae')}
              onMouseLeave={() => setHoveredCountry(null)}
              id="pin-uae"
            >
              <div className="relative flex items-center justify-center">
                {/* Double Core Blinking Pulse Rings */}
                <span className="absolute w-16 h-16 rounded-full bg-[#0F4CFF]/20 animate-ping" />
                <span className="absolute w-10 h-10 rounded-full bg-[#0F4CFF]/15 animate-pulse" />
                
                {/* Custom Premium HQ Pin */}
                <motion.div 
                  className={`w-13 h-13 rounded-full flex flex-col items-center justify-center transition-all duration-300 shadow-2xl border-2 ${selectedCountry.id === 'uae' ? 'bg-[#0F4CFF] text-white border-[#0F4CFF] ring-4 ring-blue-600/30' : 'bg-white text-[#0F4CFF] border-[#0F4CFF]/30 hover:border-[#0F4CFF]'}`}
                  whileHover={{ scale: 1.15 }}
                >
                  <span className="font-display font-black text-[11px] leading-none">UAE</span>
                  <span className="text-[6px] opacity-90 mt-0.5 uppercase font-extrabold tracking-wider">Dubai HQ</span>
                </motion.div>
              </div>
            </div>

            {/* 4. India (IND) Pin */}
            <div 
              style={{ left: '64%', top: '53%' }} 
              className="absolute cursor-pointer group z-10"
              onClick={() => setSelectedCountry(countriesData[3])}
              onMouseEnter={() => setHoveredCountry('india')}
              onMouseLeave={() => setHoveredCountry(null)}
              id="pin-india"
            >
              <div className="relative flex items-center justify-center">
                {/* CSS Blinking Pulse Rings */}
                <span className="absolute w-12 h-12 rounded-full bg-indigo-500/20 animate-ping opacity-75" />
                <span className="absolute w-8 h-8 rounded-full bg-indigo-500/10 animate-pulse" />
                
                {/* Custom Premium High-contrast Pin */}
                <motion.div 
                  className={`w-11 h-11 rounded-full flex flex-col items-center justify-center transition-all duration-300 shadow-xl border ${selectedCountry.id === 'india' ? 'bg-neutral-900 text-white border-[#061A40] ring-4 ring-indigo-500/25' : 'bg-white text-neutral-800 border-neutral-200/90 hover:border-indigo-500/50'}`}
                  whileHover={{ scale: 1.15 }}
                >
                  <span className="font-display font-extrabold text-[9px] leading-none">IND</span>
                  <span className="text-[6px] opacity-75 mt-0.5 uppercase font-black tracking-wider">Mumbai</span>
                </motion.div>
              </div>
            </div>

            {/* Luxurious Custom Tooltip Portal */}
            <AnimatePresence>
              {hoveredCountry && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  style={{
                    position: 'absolute',
                    left: hoveredCountry === 'saudi' ? '46%' : hoveredCountry === 'qatar' ? '50.5%' : hoveredCountry === 'uae' ? '54%' : '64%',
                    top: hoveredCountry === 'qatar' ? '14%' : '20%',
                    transform: 'translateX(-50%)'
                  }}
                  className="z-30 bg-neutral-900/95 backdrop-blur-md border border-white/15 rounded-xl px-4 py-3 shadow-2xl text-white min-w-[210px] pointer-events-none"
                  id="luxury-map-tooltip"
                >
                  {/* Small pointer arrow */}
                  <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-neutral-900/95 border-r border-b border-white/15 rotate-45" />

                  <div className="space-y-1.5 relative z-10">
                    <div className="flex justify-between items-center border-b border-white/10 pb-1.5">
                      <span className="font-display font-black text-xs text-[#0F4CFF] tracking-wider uppercase">
                        {hoveredCountry === 'uae' ? 'United Arab Emirates' : hoveredCountry === 'saudi' ? 'Saudi Arabia' : hoveredCountry === 'qatar' ? 'Qatar' : 'India'}
                      </span>
                      <span className="text-[8px] font-bold font-mono bg-white/10 px-1.5 py-0.5 rounded uppercase">
                        Active
                      </span>
                    </div>
                    
                    <p className="text-[10px] font-sans font-bold text-neutral-200">
                      {jurisdictionOverviews[hoveredCountry]?.hub}
                    </p>
                    <p className="text-[9px] font-mono text-emerald-400">
                      ◆ {jurisdictionOverviews[hoveredCountry]?.highlight}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-2 pt-1.5 border-t border-white/5 text-[8px] text-neutral-400 font-mono">
                      <div>
                        <p className="uppercase">TAX</p>
                        <p className="text-white font-bold">{jurisdictionOverviews[hoveredCountry]?.tax}</p>
                      </div>
                      <div>
                        <p className="uppercase">TIMELINE</p>
                        <p className="text-white font-bold">{jurisdictionOverviews[hoveredCountry]?.timeline}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

        {/* Quick inline buttons for responsive fallback */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 z-10 relative" id="country-quick-pills">
          {countriesData.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCountry(c)}
              className={`px-3.5 py-2 rounded-xl font-display text-xs font-bold transition-all ${selectedCountry.id === c.id ? 'bg-white text-neutral-950 shadow-[0_0_15px_rgba(255,255,255,0.3)]' : 'bg-white/5 text-neutral-300 border border-white/10 hover:border-white/30 hover:bg-white/10'}`}
              id={`pill-${c.id}`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      {/* Country Executive Dossier (Right 5 Columns) */}
      <div className="lg:col-span-5 flex flex-col justify-between" id="country-dossier-card">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCountry.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="bg-white border border-neutral-200 rounded-[2rem] p-8 lg:p-10 flex flex-col justify-between h-full shadow-soft hover:shadow-premium transition-shadow duration-500 relative overflow-hidden group"
            id={`dossier-${selectedCountry.id}`}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-neutral-50 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110 duration-700" />
            
            {/* Header Area */}
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-display font-medium text-neutral-950 text-3xl">
                    {selectedCountry.name}
                  </h4>
                  <p className="text-[11px] font-mono tracking-widest text-[#0F4CFF] mt-2 font-bold uppercase">
                    Premium Regional HQ
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-600 text-[10px] font-bold font-mono px-3 py-1.5 rounded-full border border-emerald-100">
                    <TrendingUp className="w-3 h-3" />
                    {selectedCountry.rating}
                  </span>
                </div>
              </div>

              <p className="text-sm text-neutral-500 mt-6 leading-relaxed font-light">
                {selectedCountry.description}
              </p>

              {/* Grid of Key Indicators */}
              <div className="grid grid-cols-2 gap-5 my-8 pt-8 border-t border-neutral-100" id="dossier-indicators">
                <div className="bg-neutral-50 rounded-2xl p-4 border border-neutral-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-[#0F4CFF]" />
                    <p className="text-[10px] text-neutral-500 uppercase font-bold tracking-wider">Timeline</p>
                  </div>
                  <p className="text-sm font-semibold text-neutral-950">{selectedCountry.timeline}</p>
                </div>

                <div className="bg-neutral-50 rounded-2xl p-4 border border-neutral-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Landmark className="w-4 h-4 text-[#0F4CFF]" />
                    <p className="text-[10px] text-neutral-500 uppercase font-bold tracking-wider">Tax Framework</p>
                  </div>
                  <p className="text-sm font-semibold text-neutral-950">{selectedCountry.taxRate}</p>
                </div>

                <div className="bg-neutral-50 rounded-2xl p-4 border border-neutral-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Coins className="w-4 h-4 text-[#0F4CFF]" />
                    <p className="text-[10px] text-neutral-500 uppercase font-bold tracking-wider">Min. Capital</p>
                  </div>
                  <p className="text-sm font-semibold text-neutral-950 truncate max-w-[125px]">{selectedCountry.minCapital}</p>
                </div>

                <div className="bg-neutral-50 rounded-2xl p-4 border border-neutral-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="w-4 h-4 text-[#0F4CFF]" />
                    <p className="text-[10px] text-neutral-500 uppercase font-bold tracking-wider">Top Vehicle</p>
                  </div>
                  <p className="text-sm font-semibold text-neutral-950 truncate max-w-[125px]">{selectedCountry.popularStructure}</p>
                </div>
              </div>

              {/* Benefits Checklist */}
              <div className="space-y-4" id="dossier-benefits">
                <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.15em] font-mono mb-2">Strategic Benefits</p>
                {selectedCountry.benefits.map((b, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3 h-3 text-[#0F4CFF]" />
                    </div>
                    <span className="text-sm text-neutral-600 leading-snug font-medium">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Consultation Portal Route */}
            <div className="mt-10 pt-6 border-t border-neutral-100">
              <a 
                href="#consultation-desk" 
                className="w-full flex items-center justify-center gap-2 bg-neutral-900 hover:bg-[#0F4CFF] text-white font-display text-sm font-bold py-4 px-6 rounded-2xl transition-all shadow-md hover:shadow-xl hover:-translate-y-1 duration-300 group/btn"
                id={`book-btn-${selectedCountry.id}`}
              >
                Launch Company in {selectedCountry.name}
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
