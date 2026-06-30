'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, PhoneCall, Menu, X } from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  
  const pathname = usePathname();
  const isLightPage = pathname?.startsWith('/about') || pathname?.startsWith('/blog');
  const textDark = isScrolled || isLightPage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Jurisdictions', href: '/jurisdictions' },
    { name: 'Services', href: '/#services' },
    { name: 'Calculator', href: '/#calculator' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'py-3 bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-sm'
          : 'py-6 bg-transparent border-b border-transparent'
      )}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <div className="relative h-14 w-60 overflow-hidden">
            <div 
              className={cn(
                "w-full h-full transition-all duration-300 group-hover:scale-105",
                textDark ? "bg-gradient-to-r from-amber-500 to-yellow-600" : "bg-white"
              )}
              style={{
                WebkitMaskImage: "url('/assets/images/logo.png')",
                WebkitMaskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "left center",
                maskImage: "url('/assets/images/logo.png')",
                maskSize: "contain",
                maskRepeat: "no-repeat",
                maskPosition: "left center",
              }}
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className={cn(
            'hidden lg:flex items-center px-6 py-2 rounded-full border text-sm font-semibold transition-all duration-500 gap-8',
            isScrolled
              ? 'bg-gray-50/80 border-gray-200 text-gray-700'
              : (isLightPage ? 'bg-black/5 border-black/10 text-gray-800 backdrop-blur-md' : 'bg-white/10 border-white/20 text-white backdrop-blur-md')
          )}
        >
          {/* Services Mega Menu Trigger */}
          <div
            className="relative group cursor-pointer h-full py-2 flex items-center gap-1"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <span className={cn('transition-colors', textDark ? 'hover:text-[#0D3B66]' : 'hover:text-blue-200')}>
              Services
            </span>
            <ChevronDown className="w-4 h-4" />
            
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] bg-white rounded-2xl shadow-premium border border-gray-100 p-6 grid grid-cols-2 gap-6 text-gray-800"
                >
                  {/* Mega Menu Content */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Business Setup</h4>
                    <ul className="space-y-3">
                      <li><Link href="#mainland" className="text-sm font-medium hover:text-[#0D3B66] transition-colors">Mainland Company Formation</Link></li>
                      <li><Link href="#freezone" className="text-sm font-medium hover:text-[#0D3B66] transition-colors">Free Zone Business Setup</Link></li>
                      <li><Link href="#offshore" className="text-sm font-medium hover:text-[#0D3B66] transition-colors">Offshore Company</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Corporate Services</h4>
                    <ul className="space-y-3">
                      <li><Link href="#tax" className="text-sm font-medium hover:text-[#0D3B66] transition-colors">Corporate Tax & VAT</Link></li>
                      <li><Link href="#golden-visa" className="text-sm font-medium hover:text-[#0D3B66] transition-colors">Golden Visa & PRO</Link></li>
                      <li><Link href="#banking" className="text-sm font-medium hover:text-[#0D3B66] transition-colors">Corporate Bank Account</Link></li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                'relative group transition-colors py-2',
                textDark ? 'hover:text-[#0D3B66]' : 'hover:text-blue-200'
              )}
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0D3B66] transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* CTA Group */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="tel:+9714500000"
            className={cn(
              'flex items-center gap-2 text-sm font-bold transition-colors',
              textDark ? 'text-gray-900 hover:text-[#0D3B66]' : 'text-white hover:text-blue-200'
            )}
          >
            <PhoneCall className={cn("w-4 h-4", textDark ? "text-[#0D3B66]" : "text-white")} />
            <span>+971 4 500 0000</span>
          </a>
          <Link 
            href="#calculator"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-[#0D3B66] hover:bg-[#1565C0] text-white rounded-full font-bold shadow-lg shadow-blue-900/20 px-8 transition-transform active:scale-95"
            )}
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={cn("w-6 h-6", textDark ? "text-gray-900" : "text-white")} />
          ) : (
            <Menu className={cn("w-6 h-6", textDark ? "text-gray-900" : "text-white")} />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <Link href="#services" onClick={() => setMobileMenuOpen(false)} className="text-lg font-semibold text-gray-900">Services</Link>
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-lg font-semibold text-gray-900">
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-gray-100 w-full my-2" />
              <Button size="lg" className="bg-[#0D3B66] text-white w-full rounded-full">
                Book Consultation
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
