import React from 'react';

export default function LogoMarquee() {
  const logos = [
    { name: 'DMCC Dubai', icon: '💎' },
    { name: 'Meydan Free Zone', icon: '🐎' },
    { name: 'IFZA Authority', icon: '🏢' },
    { name: 'JAFZA Port', icon: '⚓' },
    { name: 'Wio Business', icon: '📱' },
    { name: 'Mashreq NeoBiz', icon: '⚡' },
    { name: 'Emirates NBD', icon: '🏦' },
    { name: 'HSBC Enterprise', icon: '📈' },
  ];

  // Double the list for infinite looping effect
  const doubledLogos = [...logos, ...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden bg-slate-50/60 py-10 border-y border-slate-100" id="partners-logos-section">
      {/* Soft gradient masks to hide edge cutoffs */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
        <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold font-display">
          Institutional Gateways & Banking Access Partners
        </span>
      </div>

      {/* Sliding track container */}
      <div className="flex overflow-hidden select-none">
        <div className="animate-marquee flex whitespace-nowrap gap-12 py-2">
          {doubledLogos.map((logo, idx) => (
            <div
              key={idx}
              className="inline-flex items-center space-x-2.5 px-6 py-3 bg-white border border-slate-100 rounded-xl shadow-sm cursor-pointer filter grayscale hover:grayscale-0 hover:border-blue-200 transition-all duration-300 hover:scale-105"
            >
              <span className="text-sm">{logo.icon}</span>
              <span className="font-display font-bold text-xs text-slate-600 hover:text-slate-900 transition-colors">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.3333%, 0, 0);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
