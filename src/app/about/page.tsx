import { Trophy, Users, Globe2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'About Us | Grow Infinity',
  description: 'Learn about Grow Infinity, the leading corporate structuring and business setup advisory in the UAE.'
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#F8FAFC]">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto space-y-6 mb-20">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#0D3B66] bg-blue-100 px-4 py-2 rounded-full border border-blue-200">
            Our Story
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-medium text-[#0F172A] tracking-tight leading-tight">
            Pioneering Corporate <br />
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0D3B66] to-[#1565C0]">Growth in the UAE</span>
          </h1>
          <p className="text-xl text-gray-500 font-light leading-relaxed max-w-2xl mx-auto">
            Founded with a vision to eliminate red tape, Grow Infinity has evolved into the UAE's premier corporate structuring and institutional advisory firm.
          </p>
        </div>

        {/* Feature Image */}
        <div className="w-full h-[500px] rounded-[3rem] overflow-hidden mb-24 relative shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
            alt="Dubai Skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 to-transparent flex items-end p-12">
            <div className="grid grid-cols-3 gap-12 w-full">
              <div className="space-y-2 border-l-2 border-emerald-400 pl-6">
                <div className="text-5xl font-display font-bold text-white">10k+</div>
                <div className="text-emerald-400 font-medium">Companies Setup</div>
              </div>
              <div className="space-y-2 border-l-2 border-emerald-400 pl-6">
                <div className="text-5xl font-display font-bold text-white">40+</div>
                <div className="text-emerald-400 font-medium">Global Jurisdictions</div>
              </div>
              <div className="space-y-2 border-l-2 border-emerald-400 pl-6">
                <div className="text-5xl font-display font-bold text-white">15+</div>
                <div className="text-emerald-400 font-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-6">
            <h2 className="text-4xl font-display font-bold text-[#0F172A]">Our Mission</h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              We believe that global expansion should be seamless. Our mission is to empower entrepreneurs, SMEs, and multinational corporations to establish a formidable presence in the Middle East without the administrative burden.
            </p>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              From licensing and tax compliance to golden visas and corporate banking, we provide a 360-degree ecosystem that supports your business from day one.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <Trophy className="w-10 h-10 text-amber-500 mb-6" />
              <h3 className="text-xl font-bold text-[#0F172A] mb-2">Excellence</h3>
              <p className="text-gray-500 text-sm">We deliver unparalleled service quality and precise regulatory compliance.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 mt-8">
              <Globe2 className="w-10 h-10 text-blue-500 mb-6" />
              <h3 className="text-xl font-bold text-[#0F172A] mb-2">Global Vision</h3>
              <p className="text-gray-500 text-sm">Connecting international capital with the booming UAE market.</p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
