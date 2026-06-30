import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import {
  Building2, Globe, ShieldAlert, CreditCard, Award, Receipt,
  Calculator, UserCheck, AlertTriangle, Compass, CheckCircle2,
  ArrowRight, Sparkles, ChevronDown, Check, HelpCircle, PhoneCall,
  Lock, ArrowUpRight, BarChart3, Star, Mail, Send, ShieldCheck, Clock
} from 'lucide-react';

import { servicesData, testimonialsData, faqData } from './data';
import { Service } from './types';

// Importing Custom Modular Components
import CountUp from './components/CountUp';
import InteractiveMap from './components/InteractiveMap';
import CostCalculator from './components/CostCalculator';
import ConsultationForm from './components/ConsultationForm';
import BlogSection from './components/BlogSection';
import ServiceDetailView from './components/ServiceDetailView';
import CustomCursor from './components/CustomCursor';
import SocialDock from './components/SocialDock';
import LogoMarquee from './components/LogoMarquee';
import ScrollProgress from './components/ScrollProgress';
import FloatingParticles from './components/FloatingParticles';

// Helper Component to dynamically map service icon names to actual Lucide Icons
const DynamicIcon = ({ name, className }: { name: string; className?: string }) => {
  switch (name) {
    case 'Building2': return <Building2 className={className} />;
    case 'Globe': return <Globe className={className} />;
    case 'ShieldAlert': return <ShieldAlert className={className} />;
    case 'CreditCard': return <CreditCard className={className} />;
    case 'Award': return <Award className={className} />;
    case 'Receipt': return <Receipt className={className} />;
    case 'Calculator': return <Calculator className={className} />;
    case 'UserCheck': return <UserCheck className={className} />;
    case 'AlertTriangle': return <AlertTriangle className={className} />;
    case 'Compass': return <Compass className={className} />;
    default: return <Compass className={className} />;
  }
};

export default function App() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [newsLetterEmail, setNewsLetterEmail] = useState('');
  const [newsLetterSuccess, setNewsLetterSuccess] = useState(false);
  const [activeServiceTab, setActiveServiceTab] = useState<'All' | 'Formation' | 'Financial' | 'Corporate Services'>('All');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredServices = servicesData.filter(s => {
    if (activeServiceTab === 'All') return true;
    return s.category === activeServiceTab;
  });

  return (
    <div className="min-h-screen bg-white text-[#0F172A] selection:bg-[#0F4CFF] selection:text-white" id="main-app-container">
      <Helmet>
        <title>Grow Infinity | Corporate Setup & Structuring in UAE, KSA, Qatar & India</title>
        <meta name="description" content="Grow Infinity is an authorized premium corporate registry, licensing, and professional government services provider licensed in the UAE, Saudi Arabia, Qatar, and India." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Grow Infinity Corporate Services LLC",
            "image": "https://growinfinity.ae/assets/images/logo.png",
            "@id": "https://growinfinity.ae",
            "url": "https://growinfinity.ae",
            "telephone": "+971 4 500 0000",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Floor 38, Media One Tower, Dubai Media City",
              "addressLocality": "Dubai",
              "addressCountry": "AE"
            }
          })}
        </script>
      </Helmet>
      {/* 1. Announcement Bar */}
      <div className="bg-neutral-950 text-white py-2.5 overflow-hidden border-b border-white/5 relative z-50 flex items-center" id="announcement-bar">
        <div className="flex whitespace-nowrap animate-announcement-marquee hover:[animation-play-state:paused] text-[11px] font-medium tracking-wide font-display w-max">
          {/* Group 1 */}
          <div className="flex items-center gap-12 px-6">
            <span className="inline-flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-[#0F4CFF] rounded-full animate-pulse" />
              <span>LATEST: Dubai announces new Golden Visa regulations for tech entrepreneurs.</span>
              <a href="#consultation-desk" className="underline text-blue-400 hover:text-blue-300 ml-1 font-semibold">Learn More</a>
            </span>
            <span className="inline-flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-[#0F4CFF] rounded-full animate-pulse" />
              <span>UPDATE: UAE corporate tax deadline extended for small businesses.</span>
              <a href="#consultation-desk" className="underline text-blue-400 hover:text-blue-300 ml-1 font-semibold">Consult an Expert</a>
            </span>
            <span className="inline-flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-[#0F4CFF] rounded-full animate-pulse" />
              <span>NEWS: Dubai Chamber reports 20% increase in new company registrations in Q1.</span>
              <a href="#consultation-desk" className="underline text-blue-400 hover:text-blue-300 ml-1 font-semibold">Start Setup</a>
            </span>
          </div>
          {/* Group 2 (Duplicate for infinite scroll) */}
          <div className="flex items-center gap-12 px-6" aria-hidden="true">
            <span className="inline-flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-[#0F4CFF] rounded-full animate-pulse" />
              <span>LATEST: Dubai announces new Golden Visa regulations for tech entrepreneurs.</span>
              <a href="#consultation-desk" className="underline text-blue-400 hover:text-blue-300 ml-1 font-semibold">Learn More</a>
            </span>
            <span className="inline-flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-[#0F4CFF] rounded-full animate-pulse" />
              <span>UPDATE: UAE corporate tax deadline extended for small businesses.</span>
              <a href="#consultation-desk" className="underline text-blue-400 hover:text-blue-300 ml-1 font-semibold">Consult an Expert</a>
            </span>
            <span className="inline-flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-[#0F4CFF] rounded-full animate-pulse" />
              <span>NEWS: Dubai Chamber reports 20% increase in new company registrations in Q1.</span>
              <a href="#consultation-desk" className="underline text-blue-400 hover:text-blue-300 ml-1 font-semibold">Start Setup</a>
            </span>
          </div>
        </div>
        <style>{`
          @keyframes announcement-marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-announcement-marquee {
            animation: announcement-marquee 30s linear infinite;
          }
        `}</style>
      </div>

      {/* Custom Global Enhancements */}
      <CustomCursor />
      <ScrollProgress />
      <SocialDock />

      {/* 2. Sticky Glass Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-500 ${isScrolled
          ? 'py-3.5 bg-white/80 backdrop-blur-xl border-b border-[#0F4CFF]/10 shadow-[0_8px_30px_rgb(15,76,255,0.03)]'
          : 'py-6 bg-neutral-950 border-b border-transparent'
          }`}
        id="main-header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 group" id="brand-logo">
            <img src="/assets/images/logo.png" alt="Grow Infinity" className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105 py-2" />
          </a>

          {/* Nav Links */}
          <nav className={`hidden md:flex items-center backdrop-blur-md px-6 py-2 rounded-full border text-xs font-semibold font-display gap-6 shadow-sm transition-all duration-500 ${isScrolled ? 'bg-neutral-50/80 border-neutral-200 text-neutral-600' : 'bg-white/10 border-white/10 text-neutral-300'}`} id="header-navigation">
            <a href="#services-grid-anchor" className={`transition-colors relative group ${isScrolled ? 'hover:text-[#0F4CFF]' : 'hover:text-white'}`}>
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0F4CFF] transition-all group-hover:w-full" />
            </a>
            <a href="#map-section-anchor" className={`transition-colors relative group ${isScrolled ? 'hover:text-[#0F4CFF]' : 'hover:text-white'}`}>
              Jurisdictions
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0F4CFF] transition-all group-hover:w-full" />
            </a>
            <a href="#fee-calculator-anchor" className={`transition-colors relative group ${isScrolled ? 'hover:text-[#0F4CFF]' : 'hover:text-white'}`}>
              Fee Calculator
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0F4CFF] transition-all group-hover:w-full" />
            </a>
            <a href="#about-timeline-anchor" className={`transition-colors relative group ${isScrolled ? 'hover:text-[#0F4CFF]' : 'hover:text-white'}`}>
              Why Grow Infinity
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0F4CFF] transition-all group-hover:w-full" />
            </a>
            <a href="#faq-section-anchor" className={`transition-colors relative group ${isScrolled ? 'hover:text-[#0F4CFF]' : 'hover:text-white'}`}>
              FAQs
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0F4CFF] transition-all group-hover:w-full" />
            </a>
            <a href="#ai-knowledge-hub" className={`transition-colors relative group ${isScrolled ? 'hover:text-[#0F4CFF]' : 'hover:text-white'}`}>
              Knowledge Hub
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0F4CFF] transition-all group-hover:w-full" />
            </a>
          </nav>

          {/* CTA Group */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:+9714500000"
              className={`hidden lg:flex items-center space-x-2 text-xs font-bold ${isScrolled ? 'text-neutral-950 hover:text-[#0F4CFF]' : 'text-white hover:text-gray-200'}`}
              id="header-phone"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#0F4CFF]" />
              <span>+971 4 500 0000</span>
            </a>
            <a
              href="#consultation-desk"
              className="relative overflow-hidden group bg-[#0F4CFF] hover:bg-blue-700 text-white font-display text-xs font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(15,76,255,0.2)] hover:shadow-[0_0_20px_rgba(15,76,255,0.5)] active:scale-[0.98]"
              id="header-cta"
            >
              <span className="relative z-10">Book Consultation</span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
        </div>
      </header>

      {/* 3. Enterprise Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-neutral-950 pt-20" id="hero-section">

        {/* Animated Gradient & Particles */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none bg-neutral-950">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/50 to-neutral-950" />
          <FloatingParticles />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-grow flex flex-col justify-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center space-y-8 flex flex-col items-center"
            id="hero-content"
          >
            {/* Subtle Authorized Badge */}
            <div className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-md text-neutral-300 px-5 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase border border-white/10 shadow-premium-dark">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>Licensed Corporate Registrar</span>
            </div>

            {/* Title */}
            <h1 className="font-display font-medium text-white text-5xl sm:text-6xl lg:text-[80px] tracking-tight flex flex-col leading-[1.1]">
              <span className="overflow-hidden inline-block"><motion.span initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="inline-block pb-2">Scale your global</motion.span></span>
              <span className="overflow-hidden inline-block"><motion.span initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }} className="inline-block font-bold text-transparent text-gradient-gold pb-2">vision <span className="text-white font-medium">in the UAE.</span></motion.span></span>
            </h1>

            {/* Description */}
            <p className="text-lg text-neutral-400 leading-relaxed max-w-xl mx-auto font-light">
              Award-winning business setup, corporate tax alignments, and institutional banking solutions for elite founders expanding to the Middle East.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center justify-center gap-5 pt-4 w-full">
              <a
                href="#consultation-desk"
                className="bg-[#0F4CFF] text-white px-8 py-4 rounded-full text-xs font-bold tracking-wide flex items-center gap-2 transition-all duration-500 hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(15,76,255,0.5)] active:scale-[0.98] group"
                id="hero-primary-cta"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#services-grid-anchor"
                className="bg-transparent border border-white/20 backdrop-blur-sm px-8 py-4 rounded-full text-xs font-bold tracking-wide text-white transition-all duration-500 hover:bg-white/5 hover:border-white/40"
                id="hero-secondary-cta"
              >
                <span>Explore Services</span>
              </a>
            </div>
          </motion.div>

        </div>

        {/* Minimal Trust Strip Integrated in Hero Footer */}
        <div className="w-full border-t border-white/10 bg-white/5 backdrop-blur-xl relative z-10 mt-20" id="trust-strip">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-wrap items-center justify-between gap-6 md:gap-8">

              <div className="flex flex-col">
                <span className="text-2xl font-display font-medium text-white flex items-center">
                  <CountUp end={500} suffix="+" />
                </span>
                <span className="text-[10px] text-neutral-500 font-medium tracking-widest uppercase">Businesses</span>
              </div>

              <div className="w-px h-8 bg-white/10 hidden md:block"></div>

              <div className="flex flex-col">
                <span className="text-2xl font-display font-medium text-white flex items-center">
                  <CountUp end={40} suffix="+" />
                </span>
                <span className="text-[10px] text-neutral-500 font-medium tracking-widest uppercase">Jurisdictions</span>
              </div>

              <div className="w-px h-8 bg-white/10 hidden md:block"></div>

              <div className="flex flex-col">
                <span className="text-2xl font-display font-medium text-white flex items-center">
                  <CountUp end={25} suffix="+" />
                </span>
                <span className="text-[10px] text-neutral-500 font-medium tracking-widest uppercase">Banking Partners</span>
              </div>

              <div className="w-px h-8 bg-white/10 hidden md:block"></div>

              <div className="flex flex-col">
                <span className="text-2xl font-display font-medium text-gold-accent flex items-center">
                  <CountUp end={99} suffix="%" />
                </span>
                <span className="text-[10px] text-neutral-500 font-medium tracking-widest uppercase">Client Satisfaction</span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us / Enterprise Infrastructure Section */}
      <section className="py-24 lg:py-32 bg-neutral-50 dot-pattern relative overflow-hidden" id="about-infrastructure">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white to-transparent pointer-events-none" />
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-white to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
            <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-500 font-bold font-display bg-white border border-neutral-200 px-3 py-1.5 rounded-full shadow-sm">
              Engineered for Enterprise
            </span>
            <h2 className="font-display font-medium text-neutral-900 text-3xl tracking-tight">
              Why Elite Promoters Choose <br />
              <span className="font-bold text-transparent bg-clip-text text-gradient">Grow Infinity</span>
            </h2>
            <p className="text-base text-neutral-500 font-light leading-relaxed">
              A meticulously structured operational model designed to protect international investment and accelerate GCC market entry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="why-choose-us-grid">
            
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-white/70 backdrop-blur-xl border border-neutral-200/60 rounded-3xl p-8 premium-card-hover group shadow-soft"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <ShieldCheck className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h4 className="font-display font-bold text-neutral-900 text-xl mb-3">Sovereign Compliance</h4>
              <p className="text-sm text-neutral-500 font-light leading-relaxed">
                We manage structural alignments under local regulatory changes, coordinating directly with the FTA to safeguard clients from compliance penalties.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/70 backdrop-blur-xl border border-neutral-200/60 rounded-3xl p-8 premium-card-hover group shadow-soft"
            >
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Sparkles className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h4 className="font-display font-bold text-neutral-900 text-xl mb-3">Direct API Integration</h4>
              <p className="text-sm text-neutral-500 font-light leading-relaxed">
                Leveraging direct digital gateways with ICP, GDRFA, and DET, we bypass manual filing bottlenecks to deliver licenses in under 7 business days.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/70 backdrop-blur-xl border border-neutral-200/60 rounded-3xl p-8 premium-card-hover group shadow-soft"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Award className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h4 className="font-display font-bold text-neutral-900 text-xl mb-3">Big-4 Advisory Pedigree</h4>
              <p className="text-sm text-neutral-500 font-light leading-relaxed">
                Our in-house corporate attorneys, certified tax agents, and advisory leaders are veterans of top-tier global accounting practices.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 7. Services Bento Grid Section */}
      <section className="relative py-12 lg:py-16 bg-neutral-950 overflow-hidden" id="services-grid-anchor">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920" alt="Corporate" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/80 to-neutral-950" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-[10px] tracking-wider uppercase text-[#0F4CFF] font-bold font-display bg-blue-50/70 border border-blue-100/50 px-2.5 py-1 rounded-full">
                Professional Scope
              </span>
              <h2 className="font-display font-extrabold text-white text-2xl lg:text-3xl tracking-tight mt-2">
                Corporate Structuring & Advisory
              </h2>
            </div>

            {/* Services Tabs Filters */}
            <div className="flex flex-wrap gap-1.5 bg-neutral-900/50 backdrop-blur-md border border-neutral-800 p-1 rounded-xl" id="services-tabs">
              {(['All', 'Formation', 'Financial', 'Corporate Services'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveServiceTab(tab)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-display transition-all ${activeServiceTab === tab ? 'bg-[#0F4CFF] text-white shadow-soft' : 'text-neutral-400 hover:text-white'}`}
                  id={`tab-${tab.toLowerCase().replace(' ', '-')}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="services-bento-grid">
            {filteredServices.map((service, idx) => {
              // Create dynamic spans for the "All" tab to achieve a beautiful, asymmetric bento layout
              const isLargeCard = activeServiceTab === 'All' && (idx === 0 || idx === 4);
              const colSpanClass = isLargeCard ? 'lg:col-span-2 md:col-span-2' : 'col-span-1';

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setSelectedService(service)}
                  className={`${colSpanClass} relative rounded-[2rem] p-8 cursor-pointer shadow-soft hover:shadow-premium transition-all duration-700 flex flex-col justify-between overflow-hidden group border border-neutral-200/50 hover:-translate-y-2 bg-white`}
                  id={`service-card-${service.slug}`}
                >
                  {/* Premium Gradient Overlay */}
                  <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50/0 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  {/* Glowing background blob on hover */}
                  <div className="absolute -right-20 -top-20 w-48 h-48 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <div className="space-y-6 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 bg-blue-50/80 text-[#0F4CFF] border border-blue-100/50 rounded-2xl flex items-center justify-center group-hover:bg-neutral-900 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-xl group-hover:-rotate-3">
                        <DynamicIcon name={service.iconName} className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold font-mono text-neutral-500 uppercase tracking-[0.2em] bg-neutral-50 border border-neutral-100 px-3 py-1.5 rounded-full group-hover:bg-white/50 group-hover:border-neutral-200 transition-colors">
                        {service.category}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-display font-medium text-neutral-950 text-xl lg:text-2xl leading-snug group-hover:text-[#0F4CFF] transition-colors duration-500">
                        {service.title}
                      </h4>
                      <p className="text-sm text-neutral-500 mt-4 leading-relaxed font-light group-hover:text-neutral-600 transition-colors">
                        {service.shortDesc}
                      </p>
                    </div>

                    {/* Extra premium details for large bento cards */}
                    {isLargeCard && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="pt-6 mt-6 grid grid-cols-2 gap-6 border-t border-neutral-100"
                      >
                        <div>
                          <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest font-mono mb-2 flex items-center gap-2">
                            <Clock className="w-3 h-3" /> Timeline
                          </p>
                          <p className="font-semibold text-neutral-950 text-sm">Fast-track processing</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest font-mono mb-2 flex items-center gap-2">
                            <ShieldCheck className="w-3 h-3" /> Compliance
                          </p>
                          <p className="font-semibold text-neutral-950 text-sm">100% sovereign alignment</p>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  <div className="mt-10 pt-6 border-t border-neutral-100 flex items-center justify-between text-sm text-neutral-500 relative z-10 group-hover:border-neutral-200 transition-colors">
                    <span className="font-medium text-neutral-600 font-display group-hover:text-neutral-950 transition-colors">
                      Learn requirements & setup
                    </span>
                    <div className="w-10 h-10 rounded-full bg-neutral-50 border border-neutral-100 flex items-center justify-center group-hover:bg-[#0F4CFF] group-hover:border-[#0F4CFF] group-hover:text-white transition-all duration-500 shadow-sm">
                      <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 8. Regional Jurisdictions Section (Interactive Map) */}
      <section className="relative py-10 lg:py-16 bg-neutral-950 border-y border-neutral-800 overflow-hidden" id="map-section-anchor">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1920" alt="Global" className="w-full h-full object-cover opacity-10 mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-xl mx-auto space-y-2 mb-8 relative z-10">
            <span className="text-[10px] tracking-wider uppercase text-[#0F4CFF] font-bold font-display bg-blue-50/70 border border-blue-100/50 px-2.5 py-1 rounded-full">
              Global Footprint
            </span>
            <h2 className="font-display font-extrabold text-white text-2xl lg:text-3xl tracking-tight">
              Strategic GCC & India Jurisdictions
            </h2>
            <p className="text-sm text-neutral-500 font-medium">
              Explore global jurisdictions and tax frameworks.
            </p>
          </div>

          {/* Interactive Map Component */}
          <InteractiveMap />

        </div>
      </section>

      {/* 9. Specialized Focus Block: Corporate Tax & Banking */}
      <section className="py-20 lg:py-32 bg-neutral-950 relative overflow-hidden" id="focus-blocks-section">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0F4CFF]/5 to-transparent pointer-events-none" />
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-emerald-500/5 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 relative z-10">

          {/* Block 1: Corporate Banking focus */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" id="focus-banking">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#0F4CFF] font-bold font-display bg-[#0F4CFF]/10 border border-[#0F4CFF]/20 px-3 py-1.5 rounded-full shadow-sm">
                Financial Architecture
              </span>
              <h3 className="font-display font-medium text-white text-3xl lg:text-4xl leading-tight tracking-tight">
                Accelerated Corporate <br />
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Bank Accounts</span>
              </h3>
              <p className="text-base text-neutral-400 leading-relaxed font-light max-w-md">
                Pre-approved routing with premium banks for swift KYC. We bypass traditional banking bottlenecks.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4" id="banking-checks">
                {[
                  { icon: <CreditCard className="w-5 h-5 text-blue-400" />, text: 'Zero-balance neo-banks' },
                  { icon: <Building2 className="w-5 h-5 text-indigo-400" />, text: 'High-street partners' },
                  { icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />, text: 'AML Dossier Prep' },
                  { icon: <Globe className="w-5 h-5 text-purple-400" />, text: 'Multi-currency (USD, EUR)' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-neutral-900 border border-neutral-800 p-4 rounded-2xl flex flex-col items-start gap-3 hover:border-neutral-700 transition-colors">
                    <div className="p-2 bg-neutral-950 rounded-xl border border-neutral-800">
                      {item.icon}
                    </div>
                    <span className="text-xs text-neutral-300 font-medium leading-tight">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
              id="banking-card-visual"
            >
              {/* Premium Dashboard Visual without Images */}
              <div className="bg-neutral-900 border border-neutral-800 p-1 rounded-[2rem] shadow-premium-dark relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0F4CFF]/10 to-transparent opacity-50 pointer-events-none" />
                <div className="bg-neutral-950 backdrop-blur-xl p-8 rounded-[1.75rem] relative z-10 border border-neutral-800/50">
                  <div className="flex justify-between items-start mb-10">
                    <div>
                      <p className="text-[10px] font-bold text-neutral-500 uppercase font-mono tracking-wider">WIO_BUSINESS_INTEGRATION</p>
                      <p className="font-display font-medium text-white text-xl mt-1">Pre-Vetting Pipeline</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-[#0F4CFF]/10 flex items-center justify-center border border-[#0F4CFF]/20">
                      <CreditCard className="w-5 h-5 text-[#0F4CFF]" />
                    </div>
                  </div>

                  {/* Vertical timeline in visual */}
                  <div className="space-y-6 mb-8 relative">
                    <div className="absolute left-6 top-6 bottom-6 w-px bg-neutral-800" />
                    {[
                      { title: 'AML Pre-Eval', status: 'Cleared', color: 'text-emerald-400', icon: <CheckCircle2 className="w-4 h-4 text-emerald-400" /> },
                      { title: 'Bank Submit', status: 'Processing', color: 'text-blue-400', icon: <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" /> },
                      { title: 'Account Active', status: 'Pending', color: 'text-neutral-500', icon: <Clock className="w-4 h-4 text-neutral-600" /> }
                    ].map((step, idx) => (
                      <div key={idx} className="flex items-center gap-6 relative z-10">
                        <div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0">
                          {step.icon}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-white">{step.title}</p>
                          <p className={`text-[10px] font-mono mt-0.5 ${step.color}`}>{step.status}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 text-xs font-bold px-4 py-2 rounded-full border border-emerald-500/20">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>92% Pre-Vetting Approval Success</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Block 2: Corporate Tax & Compliance focus */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" id="focus-tax">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:order-1 order-2 relative"
              id="tax-card-visual"
            >
              <div className="bg-neutral-900 border border-neutral-800 p-8 lg:p-12 rounded-[2rem] relative overflow-hidden shadow-premium-dark group">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 to-transparent pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full justify-between space-y-12">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[10px] font-mono tracking-[0.2em] text-emerald-400 font-bold">FTA REGISTERED</p>
                      <p className="font-display font-medium text-white text-2xl mt-1">Tax Mitigation Model</p>
                    </div>
                    <div className="p-3 bg-neutral-950 rounded-2xl shadow-sm border border-neutral-800">
                      <Receipt className="w-6 h-6 text-emerald-400" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-neutral-950 rounded-2xl p-5 border border-neutral-800 flex justify-between items-center group-hover:border-emerald-500/30 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                          <BarChart3 className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                          <span className="text-xs text-neutral-500 font-mono">THRESHOLD</span>
                          <p className="text-sm font-semibold text-neutral-200">Small Business Relief</p>
                        </div>
                      </div>
                      <span className="text-lg font-display font-bold text-white">AED 3M</span>
                    </div>

                    <div className="bg-neutral-950 rounded-2xl p-5 border border-neutral-800 flex justify-between items-center group-hover:border-emerald-500/30 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                          <ShieldCheck className="w-5 h-5 text-emerald-400" />
                        </div>
                        <div>
                          <span className="text-xs text-neutral-500 font-mono">STATUS</span>
                          <p className="text-sm font-semibold text-neutral-200">Qualifying Free Zone</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">100% EXEMPT</span>
                    </div>
                  </div>

                  <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-5 text-xs text-neutral-400 leading-relaxed">
                    <p className="font-bold text-red-400 font-display uppercase tracking-wider mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" /> Mandatory Compliance
                    </p>
                    Late filing of Corporate Tax registration triggers an automatic FTA penalty of AED 10,000. Our tax agents handle end-to-end filings immediately.
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 lg:order-2 order-1"
            >
              <span className="text-[10px] tracking-[0.2em] uppercase text-emerald-400 font-bold font-display bg-emerald-400/10 border border-emerald-400/20 px-3 py-1.5 rounded-full shadow-sm">
                Fiscal Security
              </span>
              <h3 className="font-display font-medium text-white text-3xl lg:text-4xl leading-tight tracking-tight">
                Seamless UAE <br />
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Corporate Tax</span> Alignment
              </h3>
              <p className="text-base text-neutral-400 leading-relaxed font-light max-w-md">
                Navigating the newly established UAE Corporate Tax regime requires precision. We construct legal corporate setups that align with the 9% tax laws while maximizing exemptions.
              </p>

              <div className="space-y-4 pt-4" id="tax-checks">
                {[
                  'Mandatory Federal Tax Authority (FTA) registration',
                  'Filing annual audited tax balance sheets with zero errors',
                  'Formulating compliant Transfer Pricing policies (Arm\'s Length)',
                  'Direct representation in front of the FTA for dispute resolutions'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-4 bg-neutral-900 border border-neutral-800 p-4 rounded-xl hover:border-emerald-500/30 transition-colors">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    </div>
                    <span className="text-sm text-neutral-300 font-medium leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </section>


      {/* 10. Interactive Cost Fee Calculator Section */}
      <section className="relative py-12 lg:py-16 bg-neutral-50 border-y border-neutral-100 overflow-hidden" id="fee-calculator-anchor">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-white to-neutral-100 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-xl mx-auto space-y-3 mb-8">
            <span className="text-[10px] tracking-wider uppercase text-[#0F4CFF] font-bold font-display bg-blue-50/70 border border-blue-100/50 px-2.5 py-1 rounded-full">
              Indicative Costs
            </span>
            <h2 className="font-display font-extrabold text-neutral-950 text-2xl lg:text-3.5xl tracking-tight">
              Design Your Setup Package
            </h2>
            <p className="text-sm text-neutral-500">
              Calculate exact indicative government registry, agency, office lease, and employee visa fees instantly using our digital pricing ledger.
            </p>
          </div>

          {/* Calculator Component */}
          <CostCalculator />

        </div>
      </section>

      {/* 11. Luxury Testimonials Section */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden" id="testimonials-section">
        {/* Subtle premium background pattern */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-neutral-50/50 to-white pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(neutral-900 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl space-y-4">
              <span className="text-[10px] tracking-wider uppercase text-neutral-500 font-bold font-display bg-neutral-100 px-3 py-1.5 rounded-full border border-neutral-200">
                Client Appraisals
              </span>
              <h2 className="font-display font-medium text-neutral-900 text-3xl lg:text-4xl tracking-tight">
                Appraised by <span className="font-bold">Elite Global Founders</span>
              </h2>
              <p className="text-sm text-neutral-500 font-light leading-relaxed">
                Authentic reviews from global enterprises who established their sovereign Middle Eastern footprint with Grow Infinity.
              </p>
            </div>
            
            <div className="hidden md:flex gap-3">
              <button className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition-colors" aria-label="Previous Testimonial">
                <ArrowRight className="w-5 h-5 text-neutral-400 rotate-180" />
              </button>
              <button className="w-12 h-12 rounded-full border border-neutral-200 bg-neutral-900 flex items-center justify-center hover:bg-neutral-800 transition-colors shadow-soft" aria-label="Next Testimonial">
                <ArrowRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide" id="testimonials-slider">
            {testimonialsData.map((test, idx) => {
              // Extract initials from name
              const initials = test.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

              return (
                <motion.div
                  key={test.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="min-w-[85vw] md:min-w-[400px] lg:min-w-[450px] bg-white border border-neutral-200 p-8 lg:p-10 rounded-[2rem] flex flex-col justify-between hover:border-neutral-300 hover:shadow-premium transition-all duration-500 snap-center group"
                  id={`testimonial-${test.id}`}
                >
                  <div className="space-y-6">
                    {/* Stars and Category badge */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-3 h-3 fill-neutral-900 text-neutral-900" />
                        ))}
                      </div>
                      <span className="text-[9px] font-mono font-bold tracking-wider uppercase text-neutral-500 bg-neutral-50 border border-neutral-100 px-2.5 py-1 rounded-md">
                        {test.setupType}
                      </span>
                    </div>

                    <p className="text-base lg:text-lg text-neutral-700 leading-relaxed font-medium">
                      "{test.content}"
                    </p>
                  </div>

                  <div className="mt-10 pt-6 border-t border-neutral-100 flex items-center justify-between" id="testimonial-user">
                    <div className="flex items-center space-x-4">
                      {/* Typographic Initials Avatar */}
                      <div className="w-12 h-12 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center shrink-0">
                        <span className="font-display font-bold text-neutral-900 text-sm tracking-widest">{initials}</span>
                      </div>
                      <div>
                        <h5 className="font-display font-bold text-neutral-900 text-sm">
                          {test.name}
                        </h5>
                        <p className="text-[10px] text-neutral-500 mt-1 font-medium">
                          {test.role} at <span className="text-neutral-900 font-bold">{test.company}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 12. Interactive Consultation Form / Desk Section */}
      <section className="py-20 lg:py-28 bg-neutral-50 border-y border-neutral-100" id="consultation-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-6 space-y-6" id="consult-text-block">
              <span className="text-[10px] tracking-wider uppercase text-[#0F4CFF] font-bold font-display bg-[#0F4CFF]/10 px-3 py-1 rounded-full border border-[#0F4CFF]/20">
                Interactive Portal
              </span>
              <h2 className="font-display font-extrabold text-neutral-950 text-3xl lg:text-4xl tracking-tight leading-tight">
                Launch Your Mid-East Venture Today.
              </h2>
              <p className="text-xs text-neutral-500 leading-relaxed font-medium">
                Connect with our certified legal strategists. Provide details of your corporate licensing, banking, or residency objectives to receive a tailored administrative brief within 24 hours.
              </p>

              {/* Dynamic Guarantee Boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="consult-badges">
                <div className="bg-white border border-neutral-100 p-4 rounded-xl space-y-1 shadow-sm">
                  <p className="font-display font-bold text-neutral-950 text-xs">24-Hour SLA Response</p>
                  <p className="text-[10px] text-neutral-400 font-medium">Guaranteed proposal delivery from a certified corporate strategist.</p>
                </div>
                <div className="bg-white border border-neutral-100 p-4 rounded-xl space-y-1 shadow-sm">
                  <p className="font-display font-bold text-neutral-950 text-xs">Zero Sales Solicitations</p>
                  <p className="text-[10px] text-neutral-400 font-medium">Pure regulatory and structural scoping. Complete UBO confidentiality.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              {/* Form Component */}
              <ConsultationForm />
            </div>

          </div>
        </div>
      </section>

      {/* 13. Knowledge Hub (RAG Ready Articles) */}
      <section className="py-20 lg:py-28 bg-white" id="blog-section-anchor">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-xl mx-auto space-y-3 mb-16">
            <span className="text-[10px] tracking-wider uppercase text-[#0F4CFF] font-bold font-display bg-[#0F4CFF]/10 px-3 py-1 rounded-full border border-[#0F4CFF]/20">
              AI-Friendly Registry
            </span>
            <h2 className="font-display font-extrabold text-neutral-950 text-2xl lg:text-3.5xl tracking-tight">
              Enterprise Knowledge Hub
            </h2>
            <p className="text-sm text-neutral-500 font-medium">
              Authority research dossiers optimized for LLM retrievals, sovereign compliance audits, and legal structural breakdowns.
            </p>
          </div>

          {/* Blog Component */}
          <BlogSection />

        </div>
      </section>

      {/* 14. FAQs Section (Accordion) */}
      <section className="py-20 lg:py-28 bg-neutral-50 border-y border-neutral-100" id="faq-section-anchor">
        <div className="max-w-4xl mx-auto px-4 sm:px-6" id="faq-accordions">

          <div className="text-center space-y-3 mb-12">
            <span className="text-[10px] tracking-wider uppercase text-[#0F4CFF] font-bold font-display bg-[#0F4CFF]/10 px-3 py-1 rounded-full border border-[#0F4CFF]/20">
              Common Queries
            </span>
            <h2 className="font-display font-extrabold text-neutral-950 text-2xl lg:text-3xl tracking-tight">
              Frequently Asked Compliance Questions
            </h2>
          </div>

          <div className="space-y-4" id="faq-accordion-list">
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqData.map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              })}
            </script>
            {faqData.map((faq, idx) => (
              <div
                key={idx}
                className={`bg-white border ${activeFaq === idx ? 'border-neutral-300 shadow-soft' : 'border-neutral-100'} rounded-xl overflow-hidden transition-all duration-300`}
                id={`faq-item-${idx}`}
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className={`w-full flex items-center justify-between p-5 text-left font-display font-medium text-sm transition-colors ${activeFaq === idx ? 'text-neutral-900' : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50/50'}`}
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform ${activeFaq === idx ? 'transform rotate-180 text-neutral-800' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 text-sm text-neutral-500 leading-relaxed font-light">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 15. CTA Conversion Section */}
      <section className="py-20 lg:py-24 bg-neutral-950 text-white relative overflow-hidden" id="cta-conversion-section">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(white 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">

          <Sparkles className="w-10 h-10 text-[#0F4CFF] mx-auto animate-pulse" />

          <h2 className="font-display font-extrabold text-3xl sm:text-4.5xl leading-tight text-white max-w-3xl mx-auto">
            Design Your International Corporate Structure Today.
          </h2>
          <p className="text-neutral-400 text-sm max-w-xl mx-auto font-medium">
            Get instant parameters, pre-approvals on trade name eligibility, and real-time fee breakdowns calculated for your unique corporate setup.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#fee-calculator-anchor"
              className="bg-[#0F4CFF] hover:bg-blue-700 text-white font-display text-xs font-bold py-4 px-8 rounded-xl transition-all shadow-lg flex items-center space-x-2"
              id="cta-bottom-primary"
            >
              <span>Launch Fee Calculator</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#consultation-desk"
              className="bg-white/10 hover:bg-white/15 border border-white/20 text-white font-display text-xs font-semibold py-4 px-8 rounded-xl transition-all"
              id="cta-bottom-secondary"
            >
              Request Executive Callback
            </a>
          </div>

          <p className="text-[10px] text-neutral-500 font-mono">
            ESTABLISHED IN GCC REGIONS ● DUBAI ● RIYADH ● DOHA ● MUMBAI
          </p>

        </div>
      </section>

      {/* 16. Corporate Enterprise Footer */}
      <footer className="bg-neutral-950 text-neutral-400 pt-16 pb-8 border-t border-white/5 font-display" id="main-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12" id="footer-links-grid">

            {/* Column 1: Branding & Contact */}
            <div className="space-y-6">
              <a href="#" className="flex items-center space-x-2.5">
                <div className="w-8 h-8 bg-white text-neutral-950 rounded-lg flex items-center justify-center font-extrabold text-sm">
                  GI
                </div>
                <span className="font-extrabold tracking-tight text-white text-base">GROW INFINITY</span>
              </a>
              <p className="text-xs text-neutral-400 leading-relaxed pr-4">
                Grow Infinity is an authorized premium corporate registry, licensing, and professional government services provider.
              </p>
              <div className="space-y-2 text-xs">
                <p>Email: <a href="mailto:info@growinfinity.ae" className="text-white hover:underline transition-colors">info@growinfinity.ae</a></p>
                <p>Phone: <span className="text-white">+971 4 500 0000</span></p>
              </div>
            </div>

            {/* Column 2: Core Services */}
            <div className="space-y-4">
              <h5 className="text-xs font-extrabold text-white uppercase tracking-wider">Services</h5>
              <ul className="space-y-3 text-xs">
                <li><a href="#services-grid-anchor" className="hover:text-white transition-colors">Mainland Setup</a></li>
                <li><a href="#services-grid-anchor" className="hover:text-white transition-colors">Free Zone Setup</a></li>
                <li><a href="#services-grid-anchor" className="hover:text-white transition-colors">Corporate Banking</a></li>
                <li><a href="#services-grid-anchor" className="hover:text-white transition-colors">Golden Visa</a></li>
                <li><a href="#services-grid-anchor" className="hover:text-white transition-colors">Tax & Compliance</a></li>
              </ul>
            </div>

            {/* Column 3: Jurisdictions & Knowledge */}
            <div className="space-y-4">
              <h5 className="text-xs font-extrabold text-white uppercase tracking-wider">Platform</h5>
              <ul className="space-y-3 text-xs">
                <li><a href="#map-section-anchor" className="hover:text-white transition-colors">United Arab Emirates</a></li>
                <li><a href="#map-section-anchor" className="hover:text-white transition-colors">Saudi Arabia</a></li>
                <li><a href="#ai-knowledge-hub" className="hover:text-white transition-colors">Knowledge Hub</a></li>
                <li><a href="#fee-calculator-anchor" className="hover:text-white transition-colors">Cost Calculator</a></li>
                <li><a href="#faq-section-anchor" className="hover:text-white transition-colors">Support & FAQs</a></li>
              </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div className="space-y-4">
              <h5 className="text-xs font-extrabold text-white uppercase tracking-wider">Newsletter</h5>
              <p className="text-xs text-neutral-400">Receive regulatory alerts directly to your inbox.</p>

              {!newsLetterSuccess ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (newsLetterEmail.trim()) {
                      setNewsLetterSuccess(true);
                    }
                  }}
                  className="space-y-2 mt-2"
                  id="footer-newsletter-form"
                >
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={newsLetterEmail}
                    onChange={(e) => setNewsLetterEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/15 px-3 py-2.5 rounded-lg text-xs focus:outline-none focus:border-[#0F4CFF] text-white transition-colors"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#0F4CFF] hover:bg-blue-700 text-white text-xs font-bold py-2.5 px-3 rounded-lg transition-colors flex items-center justify-center space-x-1"
                    id="newsletter-submit"
                  >
                    <span>Subscribe</span>
                    <Send className="w-3 h-3" />
                  </button>
                </form>
              ) : (
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-3 text-emerald-400 text-xs text-center" id="newsletter-success">
                  Successfully subscribed!
                </div>
              )}
            </div>

          </div>

          {/* Legal Bar */}
          <div className="pt-8 mt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-[10px] text-neutral-500 font-mono gap-4" id="footer-legal">
            <p>© 2026 Grow Infinity Corporate Services LLC. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#privacy-policy" className="hover:text-neutral-300">Privacy Policy</a>
              <a href="#terms-of-service" className="hover:text-neutral-300">Terms of Service</a>
              <a href="#regulatory-licenses" className="hover:text-neutral-300">Regulatory Licenses</a>
            </div>
          </div>

        </div>
      </footer>

      {/* Service Detail Modal/Drawer Portal */}
      <AnimatePresence>
        {selectedService && (
          <ServiceDetailView
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </AnimatePresence>

    </div>
  );
}
