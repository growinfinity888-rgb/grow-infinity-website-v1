'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Trophy, Users, Globe2 } from 'lucide-react';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-24 lg:py-32" id="about">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0D3B66] bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
                Who We Are
              </span>
              <h2 className="text-4xl lg:text-5xl font-display font-medium text-[#0F172A] tracking-tight leading-tight">
                Your Trusted Partner for <br />
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0D3B66] to-[#1565C0]">Corporate Growth</span> in the UAE.
              </h2>
            </div>
            
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              At Grow Infinity, we simplify the complexities of entering the UAE market. With decades of combined experience, our expert advisors provide end-to-end corporate structuring, tax compliance, and institutional banking solutions.
            </p>

            <div className="grid grid-cols-2 gap-8 py-6 border-y border-gray-100">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Trophy className="w-6 h-6 text-[#10B981]" />
                  <span className="text-3xl font-display font-bold text-[#0F172A]">15+</span>
                </div>
                <p className="text-sm text-gray-500 font-medium">Years Experience</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Globe2 className="w-6 h-6 text-[#0EA5E9]" />
                  <span className="text-3xl font-display font-bold text-[#0F172A]">40+</span>
                </div>
                <p className="text-sm text-gray-500 font-medium">Jurisdictions Covered</p>
              </div>
            </div>

            <Link href="/about" className="inline-flex items-center gap-2 text-[#0D3B66] font-bold hover:gap-4 transition-all">
              Discover Our Story <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Right Image Grid */}
          <div className="relative">
            {/* Decorative blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full blur-3xl -z-10" />
            
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4 pt-12"
              >
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" 
                  alt="Business Meeting" 
                  className="rounded-3xl shadow-xl object-cover h-[300px] w-full"
                />
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" 
                  alt="Team Collaboration" 
                  className="rounded-3xl shadow-xl object-cover h-[200px] w-full"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" 
                  alt="Modern Office" 
                  className="rounded-3xl shadow-xl object-cover h-[250px] w-full"
                />
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop" 
                  alt="Handshake" 
                  className="rounded-3xl shadow-xl object-cover h-[350px] w-full"
                />
              </motion.div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.4 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">10,000+</div>
                  <div className="text-sm font-medium text-gray-500">Clients Trust Us</div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
