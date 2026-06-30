import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import TrustSection from '@/components/sections/trust';
import JurisdictionsSection from '@/components/sections/jurisdictions';
import ServicesSection from '@/components/sections/services';
import WhyUsSection from '@/components/sections/why-us';
import ReviewsSection from '@/components/sections/reviews';
import JourneySection from '@/components/sections/journey';
import CalculatorSection from '@/components/sections/calculator';
import FaqSection from '@/components/sections/faq';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <AboutSection />
      <JurisdictionsSection />
      <ServicesSection />
      <WhyUsSection />
      <ReviewsSection />
      <JourneySection />
      <CalculatorSection />
      <FaqSection />
      
      {/* Simple CTA Banner to end the page */}
      <section className="bg-white py-24 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-display font-medium text-[#1E293B]">
            Ready to Start Your Business?
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Book a free consultation with our corporate advisors to discuss your expansion strategy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="#calculator" className="w-full sm:w-auto px-8 py-4 bg-[#0D3B66] text-white rounded-full font-bold shadow-lg shadow-blue-900/20 hover:bg-[#1565C0] transition-colors inline-block text-center">
              Book Free Consultation
            </Link>
            <Link href="https://wa.me/97150000000" target="_blank" className="w-full sm:w-auto px-8 py-4 bg-[#10B981] text-white rounded-full font-bold shadow-lg shadow-emerald-900/20 hover:bg-[#059669] transition-colors flex items-center justify-center gap-2">
              WhatsApp Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
