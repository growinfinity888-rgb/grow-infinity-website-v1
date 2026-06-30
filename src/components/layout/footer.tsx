import Link from 'next/link';
import { Mail, PhoneCall, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white pt-24 pb-12 border-t border-gray-800">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand & Newsletter Column */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <h3 className="text-2xl font-bold font-display text-white mb-4">Grow Infinity</h3>
              <p className="text-gray-400 font-light leading-relaxed max-w-sm">
                Award-winning corporate registry and professional government services provider for elite founders expanding to the UAE.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">Subscribe to Insights</h4>
              <div className="flex items-center gap-2 max-w-sm">
                <Input 
                  type="email" 
                  placeholder="Business email" 
                  className="bg-white/5 border-gray-700 text-white placeholder:text-gray-500 focus-visible:ring-[#0EA5E9]" 
                />
                <Button className="bg-[#0EA5E9] hover:bg-[#0284c7] text-white px-6">
                  Join
                </Button>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/jurisdictions" className="text-gray-400 hover:text-white transition-colors text-sm">Mainland Setup</Link></li>
              <li><Link href="/jurisdictions" className="text-gray-400 hover:text-white transition-colors text-sm">Free Zone Setup</Link></li>
              <li><Link href="/#services" className="text-gray-400 hover:text-white transition-colors text-sm">Offshore Company</Link></li>
              <li><Link href="/#services" className="text-gray-400 hover:text-white transition-colors text-sm">Corporate Tax</Link></li>
              <li><Link href="/#services" className="text-gray-400 hover:text-white transition-colors text-sm">Golden Visa</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link href="/jurisdictions" className="text-gray-400 hover:text-white transition-colors text-sm">Jurisdictions</Link></li>
              <li><Link href="/#services" className="text-gray-400 hover:text-white transition-colors text-sm">Services</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">Blog & News</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 text-gray-400">
                <MapPin className="w-5 h-5 text-[#0EA5E9] shrink-0 mt-0.5" />
                <span className="text-sm">Floor 38, Media One Tower,<br />Dubai Media City, Dubai, UAE</span>
              </li>
              <li className="flex items-center gap-4 text-gray-400">
                <PhoneCall className="w-5 h-5 text-[#0EA5E9] shrink-0" />
                <a href="tel:+9714500000" className="text-sm hover:text-white transition-colors">+971 4 500 0000</a>
              </li>
              <li className="flex items-center gap-4 text-gray-400">
                <Mail className="w-5 h-5 text-[#0EA5E9] shrink-0" />
                <a href="mailto:info@growinfinity.ae" className="text-sm hover:text-white transition-colors">info@growinfinity.ae</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Grow Infinity Corporate Services. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Legal Framework</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
