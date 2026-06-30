'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Briefcase, ArrowRight, Star, Landmark, Shield } from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';


export default function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const [searchQuery, setSearchQuery] = useState('');
  const [activeCard, setActiveCard] = useState(0);

  // Cycle the floating cards
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 3);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden bg-slate-900 pt-20">
      
      {/* Background Video */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          disablePictureInPicture
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/videos/herovideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column - Copy & Search */}
        <div className="lg:col-span-7 xl:col-span-6 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-4">
              {/* UAE Government Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
                <Landmark className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">Government Approved</span>
              </div>

              {/* Google Reviews Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 transition-colors cursor-pointer group">
                <svg viewBox="0 0 24 24" width="14" height="14" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((star, i) => (
                    <Star key={i} className={`w-3.5 h-3.5 ${i === 4 ? 'text-amber-400 fill-amber-400/50' : 'text-amber-400 fill-amber-400'}`} />
                  ))}
                </div>
                <span className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors">4.5/5 Google Reviews</span>
              </div>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-display font-medium text-white leading-[1.05] tracking-tight">
              Scale Your Global <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300 font-bold">
                Vision in the UAE.
              </span>
            </h1>
            
            <p className="text-lg text-slate-300 font-light leading-relaxed max-w-lg">
              Award-winning business setup, corporate tax alignments, and institutional banking solutions for elite founders expanding to the Middle East.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <Link 
              href="#services"
              className={cn(
                buttonVariants({ variant: "default" }),
                "h-14 px-8 rounded-full bg-[#0D3B66] hover:bg-[#1565C0] text-white font-bold text-base transition-all shadow-lg shadow-blue-900/30 hover:scale-[1.02]"
              )}
            >
              Start Your Business
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              href="#calculator"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-14 px-8 rounded-full bg-white/10 border-white/20 text-white hover:text-white font-bold text-base hover:bg-white/20 transition-all backdrop-blur-md"
              )}
            >
              Calculate Setup Cost
            </Link>
          </motion.div>
        </div>

        {/* Right Column - Cycling Floating Cards & Badges */}
        <div className="lg:col-span-5 xl:col-span-6 relative hidden md:flex items-end justify-end h-[500px] pb-12 pr-4">
          
          {/* Static Floating Badge 1: 0% Tax */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{ 
              opacity: { duration: 0.8, delay: 0.5 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute top-10 right-28 bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-3xl shadow-2xl z-10"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-600 p-[2px]">
                <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                  <span className="text-amber-400 font-bold text-lg">0%</span>
                </div>
              </div>
              <div>
                <h4 className="text-white font-bold tracking-wide">Corporate Tax</h4>
                <p className="text-xs text-slate-300">Maximize your profits</p>
              </div>
            </div>
          </motion.div>

          {/* Static Floating Badge 2: 100% Ownership */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0, y: [0, 10, 0] }}
            transition={{ 
              opacity: { duration: 0.8, delay: 0.7 },
              x: { duration: 0.8, delay: 0.7 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }
            }}
            className="absolute top-40 right-0 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl z-10"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">100% Ownership</h4>
                <p className="text-[10px] text-slate-300 uppercase tracking-wider">Foreign Nationals</p>
              </div>
            </div>
          </motion.div>
          <AnimatePresence mode="wait">
            {activeCard === 0 && (
              <motion.div
                key="card-1"
                initial={{ opacity: 0, x: 80, scale: 0.9, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)", y: [0, -15, 0] }}
                exit={{ opacity: 0, x: -80, scale: 0.9, filter: "blur(10px)" }}
                transition={{ 
                  duration: 0.8,
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="w-80 bg-slate-900/60 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl relative z-20 cursor-pointer hover:scale-105 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold font-display text-lg">Jurisdictions</h4>
                    <p className="text-sm text-slate-400 mt-1">40+ Free Zones & Mainland</p>
                  </div>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden mt-6">
                  <div className="h-full bg-blue-500 w-3/4 rounded-full" />
                </div>
              </motion.div>
            )}

            {activeCard === 1 && (
              <motion.div
                key="card-2"
                initial={{ opacity: 0, x: 80, scale: 0.9, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)", y: [0, 15, 0] }}
                exit={{ opacity: 0, x: -80, scale: 0.9, filter: "blur(10px)" }}
                transition={{ 
                  duration: 0.8,
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="w-80 bg-slate-900/60 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl relative z-20 cursor-pointer hover:scale-105 hover:border-emerald-500/50 transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-emerald-500/20 rounded-xl text-emerald-400">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold font-display">License Issued</h4>
                      <p className="text-xs text-emerald-400 mt-0.5">Under 48 hours</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-white/5 px-2 py-1 rounded">100% Digital</span>
                </div>
                <Button variant="outline" className="w-full bg-white/5 border-white/10 text-white hover:bg-white/15 hover:text-white rounded-xl h-10 text-xs transition-colors pointer-events-none">
                  View Process <ArrowRight className="w-3 h-3 ml-2" />
                </Button>
              </motion.div>
            )}
            
            {activeCard === 2 && (
              <motion.div
                key="card-3"
                initial={{ opacity: 0, x: 80, scale: 0.9, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)", y: [0, -10, 0] }}
                exit={{ opacity: 0, x: -80, scale: 0.9, filter: "blur(10px)" }}
                transition={{ 
                  duration: 0.8,
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="w-80 bg-slate-900/60 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl flex items-center gap-5 relative z-20 cursor-pointer hover:scale-105 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="p-4 bg-indigo-500/20 rounded-2xl text-indigo-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold font-display text-lg">Corporate Bank</h4>
                  <p className="text-sm text-slate-400 mt-0.5">Fast-tracked setup</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Animated Glow Behind Cards */}
          <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none animate-pulse" />
        </div>
      </div>
    </section>
  );
}

