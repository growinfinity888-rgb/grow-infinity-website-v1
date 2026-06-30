import { MapPin, ArrowRight, Building2, Globe } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Jurisdictions | Grow Infinity',
  description: 'Explore the 40+ UAE Free Zones and Mainland jurisdictions available for your business setup.'
};

const locations = [
  {
    city: 'IFZA Dubai',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop',
    type: 'Free Zone',
    desc: 'The most dynamic and highly sought-after Free Zone in Dubai. Known for cheap, fast setups and flexible desk solutions.'
  },
  {
    city: 'Meydan Free Zone',
    image: 'https://images.unsplash.com/photo-1572688484432-68fb760b86a0?q=80&w=1000&auto=format&fit=crop',
    type: 'Free Zone',
    desc: 'Located in the heart of Dubai next to the racecourse. Perfect for e-commerce, digital marketing, and lifestyle brands.'
  },
  {
    city: 'Dubai Mainland (DET)',
    image: 'https://images.unsplash.com/photo-1582672060624-ac92591fa11f?q=80&w=1000&auto=format&fit=crop',
    type: 'Mainland',
    desc: 'Unrestricted trading across the UAE market. Take on massive government contracts and open retail stores anywhere.'
  },
  {
    city: 'SHAMS Sharjah',
    image: 'https://images.unsplash.com/photo-1534008897995-27a23e859048?q=80&w=1000&auto=format&fit=crop',
    type: 'Free Zone',
    desc: 'Sharjah Media City is incredibly cost-effective, catering heavily to freelancers, media, and creative industries.'
  },
  {
    city: 'RAKEZ',
    image: 'https://images.unsplash.com/photo-1541818224537-8ed5660b64be?q=80&w=1000&auto=format&fit=crop',
    type: 'Free Zone & Non-Free Zone',
    desc: 'Ras Al Khaimah Economic Zone offers massive warehouses and industrial land at a fraction of Dubai prices.'
  },
  {
    city: 'ADGM Abu Dhabi',
    image: 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?q=80&w=1000&auto=format&fit=crop',
    type: 'Financial Center',
    desc: 'The premier financial center applying English Common Law. Ideal for crypto, holding companies, and wealth management.'
  }
];

export default function JurisdictionsPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#0F172A]">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto space-y-6 mb-24">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">
            Jurisdictions
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-medium text-white tracking-tight leading-tight">
            Find Your Perfect <br />
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Launchpad</span>
          </h1>
          <p className="text-xl text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
            The UAE offers over 40 distinct Free Zones and 7 Emirates for Mainland setup. Compare the top jurisdictions below.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((loc) => (
            <div key={loc.city} className="bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 transition-all duration-300 group">
              <div className="h-[250px] overflow-hidden relative">
                <img 
                  src={loc.image} 
                  alt={loc.city} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  <span className="text-xs font-bold text-white uppercase tracking-widest">{loc.type}</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold text-white mb-3">{loc.city}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {loc.desc}
                </p>
                <Link href="/#calculator" className="text-emerald-400 text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all duration-300">
                  Calculate Cost <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
