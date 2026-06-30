'use client';

import { Star } from 'lucide-react';

const reviews = [
  { name: "Sarah Jenkins", role: "Tech Founder", text: "Grow Infinity made our Dubai expansion completely seamless. We had our trade license and corporate bank account sorted in less than 3 weeks." },
  { name: "Ahmed Al Mansoori", role: "CEO", text: "Exceptional service and deep understanding of UAE corporate tax. They structured our holding company perfectly." },
  { name: "Elena Rostova", role: "E-commerce Owner", text: "The team guided me through the Free Zone options and found the exact right fit for my digital business. 10/10." },
  { name: "James Carter", role: "Investor", text: "Got my Golden Visa processed without a hitch. Their VIP service is truly end-to-end and hassle-free." },
  { name: "Wei Chen", role: "Managing Director", text: "Highly professional team. The mainland setup process was transparent and we maintained 100% ownership." },
  { name: "Oliver Smith", role: "Consultant", text: "They handle everything from A to Z. Highly recommend for any foreign national looking to do business in the UAE." },
];

export default function ReviewsSection() {
  // Duplicate reviews to create a smooth infinite scroll effect
  const marqueeReviews = [...reviews, ...reviews];

  return (
    <section className="w-full bg-[#0F172A] py-24 overflow-hidden relative" id="reviews">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-[1400px] mx-auto px-6 mb-16 relative z-10 text-center space-y-4">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
          Client Success
        </span>
        <h2 className="text-4xl md:text-5xl font-display font-medium text-white tracking-tight">
          Trusted by Global <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Leaders</span>
        </h2>
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="flex">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />)}
          </div>
          <span className="text-slate-300 font-medium">4.9/5 from 500+ Google Reviews</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden flex z-10 group">
        <div className="flex gap-6 px-6 w-max animate-marquee">
          {marqueeReviews.map((review, i) => (
            <div key={i} className="w-[350px] sm:w-[400px] shrink-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors cursor-pointer">
              <div className="flex mb-4">
                {[1,2,3,4,5].map(star => <Star key={`star-${i}-${star}`} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
              </div>
              <p className="text-slate-300 mb-8 leading-relaxed font-light line-clamp-4">"{review.text}"</p>
              <div>
                <h4 className="text-white font-bold">{review.name}</h4>
                <span className="text-sm text-slate-400">{review.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Edge Gradients for Smooth Fade */}
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#0F172A] to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#0F172A] to-transparent z-20 pointer-events-none" />
    </section>
  );
}
