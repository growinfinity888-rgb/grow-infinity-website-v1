import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, CheckCircle, HelpCircle, ArrowRight, Sparkles, Building, Landmark, Laptop, Check } from 'lucide-react';

interface FeeReceipt {
  licenseFee: number;
  visaFee: number;
  officeFee: number;
  consultancyFee: number;
  addonsFee: number;
  total: number;
}

export default function CostCalculator() {
  const [region, setRegion] = useState<'dubai-main' | 'dubai-fz' | 'saudi' | 'qatar' | 'india'>('dubai-fz');
  const [licenseType, setLicenseType] = useState<'commercial' | 'service' | 'professional'>('commercial');
  const [visaCount, setVisaCount] = useState<number>(1);
  const [officeType, setOfficeType] = useState<'virtual' | 'coworking' | 'private'>('virtual');
  
  // Addons states
  const [addons, setAddons] = useState({
    bankAccount: true,
    taxVat: false,
    bookkeeping: false,
    goldenVisa: false
  });

  const currencySymbol = useMemo(() => {
    switch (region) {
      case 'saudi': return 'SAR';
      case 'qatar': return 'QAR';
      case 'india': return 'INR';
      default: return 'AED';
    }
  }, [region]);

  const calculation = useMemo<FeeReceipt>(() => {
    let licenseFee = 0;
    let visaFee = 0;
    let officeFee = 0;
    let consultancyFee = 3500; // Base Grow Infinity fee
    let addonsFee = 0;

    // Region base mappings
    if (region === 'dubai-fz') {
      licenseFee = licenseType === 'commercial' ? 8500 : licenseType === 'service' ? 9500 : 7500;
      visaFee = visaCount * 2200;
      officeFee = officeType === 'virtual' ? 0 : officeType === 'coworking' ? 4000 : 15000;
      if (addons.bankAccount) addonsFee += 1500;
      if (addons.taxVat) addonsFee += 950;
      if (addons.bookkeeping) addonsFee += 1200;
      if (addons.goldenVisa) addonsFee += 2500;
    } else if (region === 'dubai-main') {
      licenseFee = licenseType === 'commercial' ? 14500 : licenseType === 'service' ? 15500 : 12500;
      visaFee = visaCount * 2600;
      officeFee = officeType === 'virtual' ? 2500 : officeType === 'coworking' ? 6000 : 22000;
      consultancyFee = 4500;
      if (addons.bankAccount) addonsFee += 1500;
      if (addons.taxVat) addonsFee += 950;
      if (addons.bookkeeping) addonsFee += 1200;
      if (addons.goldenVisa) addonsFee += 2500;
    } else if (region === 'saudi') {
      licenseFee = licenseType === 'commercial' ? 18000 : licenseType === 'service' ? 20000 : 16000;
      visaFee = visaCount * 3000;
      officeFee = officeType === 'virtual' ? 4000 : officeType === 'coworking' ? 10000 : 35000;
      consultancyFee = 8000;
      if (addons.bankAccount) addonsFee += 2500;
      if (addons.taxVat) addonsFee += 1500;
      if (addons.bookkeeping) addonsFee += 2000;
      if (addons.goldenVisa) addonsFee += 0; // Not applicable
    } else if (region === 'qatar') {
      licenseFee = licenseType === 'commercial' ? 12000 : licenseType === 'service' ? 13500 : 11000;
      visaFee = visaCount * 2800;
      officeFee = officeType === 'virtual' ? 3000 : officeType === 'coworking' ? 8000 : 28000;
      consultancyFee = 6000;
      if (addons.bankAccount) addonsFee += 2000;
      if (addons.taxVat) addonsFee += 1200;
      if (addons.bookkeeping) addonsFee += 1800;
      if (addons.goldenVisa) addonsFee += 0;
    } else if (region === 'india') {
      // Rates in INR (much higher numbers)
      licenseFee = licenseType === 'commercial' ? 45000 : licenseType === 'service' ? 50000 : 40000;
      visaFee = visaCount * 12000; // Registration / Director DIN fees
      officeFee = officeType === 'virtual' ? 15000 : officeType === 'coworking' ? 35000 : 120000;
      consultancyFee = 25000;
      if (addons.bankAccount) addonsFee += 8000;
      if (addons.taxVat) addonsFee += 6000;
      if (addons.bookkeeping) addonsFee += 10000;
      if (addons.goldenVisa) addonsFee += 0;
    }

    const total = licenseFee + visaFee + officeFee + consultancyFee + addonsFee;
    return { licenseFee, visaFee, officeFee, consultancyFee, addonsFee, total };
  }, [region, licenseType, visaCount, officeType, addons]);

  const toggleAddon = (key: 'bankAccount' | 'taxVat' | 'bookkeeping' | 'goldenVisa') => {
    setAddons(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-[2rem] p-6 lg:p-8 shadow-premium grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative overflow-hidden" id="cost-calculator-component">
      {/* Decorative Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Parameters Panel (Left 7 Columns) */}
      <div className="lg:col-span-7 space-y-6 relative z-10" id="calculator-config">
        <div>
          <span className="inline-flex items-center space-x-1 bg-blue-50/80 text-blue-700 text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full font-display border border-blue-100/50 backdrop-blur-sm">
            <Calculator className="w-3 h-3" />
            <span>Interactive Fee Calculator</span>
          </span>
          <h3 className="font-display font-medium text-3xl text-neutral-900 mt-4 leading-tight tracking-tight">
            Design Your Corporate Entity
          </h3>
          <p className="text-sm text-neutral-500 mt-2 max-w-lg font-light">
            Configure jurisdiction and requirements for instant quotes.
          </p>
        </div>

        {/* 1. Select Jurisdiction */}
        <div className="space-y-3" id="calc-step-jurisdiction">
          <label className="text-xs font-bold text-neutral-800 uppercase tracking-wider font-display flex items-center justify-between">
            <span>1. Jurisdiction & Region</span>
            <span className="text-[10px] text-neutral-400 capitalize">Currently: {region.replace('-', ' ')}</span>
          </label>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2.5">
            {[
              { id: 'dubai-fz', label: 'Dubai FZ', desc: 'Free Zone' },
              { id: 'dubai-main', label: 'Dubai ML', desc: 'Mainland' },
              { id: 'saudi', label: 'Saudi Arabia', desc: 'MISA LLC' },
              { id: 'qatar', label: 'Qatar', desc: 'QFC LLC' },
              { id: 'india', label: 'India', desc: 'Pvt Ltd' }
            ].map((r) => (
              <button
                key={r.id}
                type="button"
                onClick={() => setRegion(r.id as any)}
                className={`p-3 rounded-xl border font-display transition-all duration-300 text-left flex flex-col justify-between h-[72px] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#0F4CFF]/20 ${region === r.id ? 'bg-neutral-900 text-white border-[#061A40] shadow-md -translate-y-0.5' : 'bg-white/60 text-neutral-700 border-neutral-200/60 hover:bg-white hover:border-neutral-300 hover:shadow-sm'}`}
                id={`calc-region-${r.id}`}
              >
                <span className="font-medium text-xs leading-tight">{r.label}</span>
                <span className={`text-[10px] ${region === r.id ? 'text-neutral-300' : 'text-neutral-400 font-medium'}`}>{r.desc}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 2. License Class & Activity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" id="calc-step-license">
          <div className="space-y-3">
            <label className="text-xs font-bold text-neutral-800 uppercase tracking-wider font-display">
              2. License Classification
            </label>
            <div className="space-y-2">
              {[
                { id: 'commercial', label: 'Commercial / Trading', note: 'Goods & Import-Export' },
                { id: 'service', label: 'Services / Consulting', note: 'Professional & Remote Services' },
                { id: 'professional', label: 'Professional / Freelance', note: 'Single Entrepreneur setups' }
              ].map((l) => (
                <button
                  key={l.id}
                  onClick={() => setLicenseType(l.id as any)}
                  className={`w-full text-left p-2.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#0F4CFF]/20 ${licenseType === l.id ? 'bg-blue-50/80 border-blue-200 text-[#0F4CFF] shadow-sm -translate-y-0.5' : 'bg-white/60 border-neutral-200/60 text-neutral-700 hover:bg-white hover:border-neutral-300 hover:shadow-sm'}`}
                  id={`calc-license-${l.id}`}
                  type="button"
                >
                  <div>
                    <p className="text-xs font-medium font-display">{l.label}</p>
                    <p className="text-[10px] text-neutral-500 mt-1 font-light">{l.note}</p>
                  </div>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${licenseType === l.id ? 'border-[#0F4CFF] bg-[#0F4CFF] text-white' : 'border-neutral-300'}`}>
                    {licenseType === l.id && <Check className="w-3 h-3" />}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 3. Office Facility */}
          <div className="space-y-3" id="calc-step-office">
            <label className="text-xs font-bold text-neutral-800 uppercase tracking-wider font-display">
              3. Corporate Office Infrastructure
            </label>
            <div className="space-y-2">
              {[
                { id: 'virtual', label: 'Virtual Desk / Address', note: 'For remote and digital-first operations' },
                { id: 'coworking', label: 'Co-Working Space Space', note: 'Shared desk, great for single visa allocations' },
                { id: 'private', label: 'Premium Dedicated Office', note: 'Physical lockable space for massive scaling' }
              ].map((o) => (
                <button
                  key={o.id}
                  onClick={() => setOfficeType(o.id as any)}
                  className={`w-full text-left p-2.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#0F4CFF]/20 ${officeType === o.id ? 'bg-blue-50/80 border-blue-200 text-[#0F4CFF] shadow-sm -translate-y-0.5' : 'bg-white/60 border-neutral-200/60 text-neutral-700 hover:bg-white hover:border-neutral-300 hover:shadow-sm'}`}
                  id={`calc-office-${o.id}`}
                  type="button"
                >
                  <div>
                    <p className="text-xs font-medium font-display">{o.label}</p>
                    <p className="text-[10px] text-neutral-500 mt-1 font-light">{o.note}</p>
                  </div>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${officeType === o.id ? 'border-[#0F4CFF] bg-[#0F4CFF] text-white' : 'border-neutral-300'}`}>
                    {officeType === o.id && <Check className="w-3 h-3" />}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Employee Visas Range Slider */}
        <div className="space-y-2 bg-neutral-50 border border-neutral-100 p-3 rounded-xl" id="calc-step-visas">
          <div className="flex justify-between items-center">
            <label className="text-xs font-bold text-neutral-800 uppercase tracking-wider font-display">
              4. Employee Visa Allocations
            </label>
            <span className="bg-blue-50 text-[#0F4CFF] text-xs font-bold font-display px-2.5 py-0.5 rounded-full border border-blue-100/50">
              {visaCount} {visaCount === 1 ? 'Visa slot' : 'Visa slots'}
            </span>
          </div>
          <p className="hidden text-[10px] text-neutral-400 font-medium">
            Each visa allocation unlocks standard residence entry passes, VIP medical check arrangements, and local ID clearance.
          </p>
          <div className="pt-2 flex items-center space-x-4">
            <input
              type="range"
              min="0"
              max="10"
              value={visaCount}
              onChange={(e) => setVisaCount(Number(e.target.value))}
              className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-[#0F4CFF]"
              id="visa-slider"
            />
            <div className="text-xs font-bold text-neutral-600 w-8 text-right">{visaCount}/10</div>
          </div>
        </div>

        {/* 5. Custom Corporate Add-ons */}
        <div className="space-y-3" id="calc-step-addons">
          <label className="text-xs font-bold text-neutral-800 uppercase tracking-wider font-display">
            5. Growth & Compliance Integration Add-ons
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { id: 'bankAccount', label: 'Corporate Banking Support', note: 'Direct fast-track with Wio, Emirates NBD' },
              { id: 'taxVat', label: 'Corporate Tax & VAT Reg', note: 'Mandatory FTA registration & compliance files' },
              { id: 'bookkeeping', label: 'Annual Digital Bookkeeping', note: 'Gold-Partner Xero ledger management' },
              { id: 'goldenVisa', label: 'Golden Visa Eligibility Scan', note: 'Direct VIP immigration routing' }
            ].map((addon) => (
              <button
                key={addon.id}
                onClick={() => toggleAddon(addon.id as any)}
                className={`w-full text-left p-2.5 rounded-xl border flex items-start space-x-3 cursor-pointer transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#0F4CFF]/20 ${addons[addon.id as keyof typeof addons] ? 'bg-blue-50/80 border-blue-200 text-[#0F4CFF] shadow-sm -translate-y-0.5' : 'bg-white/60 border-neutral-200/60 text-neutral-700 hover:bg-white hover:border-neutral-300 hover:shadow-sm'}`}
                id={`calc-addon-${addon.id}`}
                type="button"
              >
                <div className={`mt-0.5 w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-all ${addons[addon.id as keyof typeof addons] ? 'bg-[#0F4CFF] border-[#0F4CFF] text-white shadow-sm' : 'border-neutral-300 bg-white'}`}>
                  {addons[addon.id as keyof typeof addons] && <Check className="w-3.5 h-3.5" />}
                </div>
                <div>
                  <p className="text-xs font-medium font-display">{addon.label}</p>
                  <p className="text-[10px] text-neutral-500 mt-1 font-light">{addon.note}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Dynamic Receipt Statement (Right 5 Columns) */}
      <div className="lg:col-span-5 lg:sticky lg:top-24 h-fit bg-gradient-to-b from-neutral-900 to-neutral-900 text-white rounded-[1.5rem] p-6 lg:p-8 flex flex-col justify-between relative overflow-hidden shadow-premium-dark border border-neutral-800 z-10" id="calculator-receipt">
        {/* Subtle grid pattern for sleek modern design */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#0F4CFF]/10 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="relative z-10">
          <div className="flex justify-between items-center border-b border-white/10 pb-6">
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#0F4CFF] font-bold font-display mb-1">Indicative Costing Statement</p>
              <h4 className="font-display font-medium text-white text-2xl">Grow Infinity Ltd</h4>
            </div>
            <div className="p-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
              <Sparkles className="w-5 h-5 text-emerald-400" />
            </div>
          </div>

          {/* Receipt Items Breakdown */}
          <div className="mt-6 space-y-4 text-xs font-mono" id="receipt-items">
            
            <div className="flex justify-between items-center text-neutral-400">
              <span>Trade License Filing</span>
              <span className="text-white font-semibold">
                {currencySymbol} {calculation.licenseFee.toLocaleString()}
              </span>
            </div>

            <div className="flex justify-between items-center text-neutral-400">
              <span>Visa Slot Fees ({visaCount} total)</span>
              <span className="text-white font-semibold">
                {currencySymbol} {calculation.visaFee.toLocaleString()}
              </span>
            </div>

            <div className="flex justify-between items-center text-neutral-400">
              <span>Registered Office Space</span>
              <span className="text-white font-semibold">
                {currencySymbol} {calculation.officeFee.toLocaleString()}
              </span>
            </div>

            <div className="flex justify-between items-center text-neutral-400">
              <span>Corporate Advisory Support</span>
              <span className="text-white font-semibold">
                {currencySymbol} {calculation.consultancyFee.toLocaleString()}
              </span>
            </div>

            <div className="flex justify-between items-center text-neutral-400">
              <span>Integrated Compliance Add-ons</span>
              <span className="text-white font-semibold">
                {currencySymbol} {calculation.addonsFee.toLocaleString()}
              </span>
            </div>

            <div className="border-t border-white/10 my-4 pt-4" />

            <div className="flex justify-between items-baseline">
              <span className="font-display font-semibold text-neutral-300 text-sm">Estimated Total</span>
              <div className="text-right">
                <span className="text-xl font-bold font-display text-white">
                  {currencySymbol} {calculation.total.toLocaleString()}
                </span>
                <p className="text-[8px] text-neutral-400 font-sans mt-0.5">Exclusive of 5% UAE VAT</p>
              </div>
            </div>

          </div>

          {/* Bullet points on legal structures */}
          <div className="mt-8 bg-white/5 border border-white/10 rounded-xl p-4 space-y-3" id="receipt-assurances">
            <p className="text-[10px] font-bold text-[#0F4CFF] uppercase tracking-widest font-display">SLA & Corporate Assurances</p>
            <div className="space-y-2 text-[11px] text-neutral-300">
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0F4CFF] mt-1.5 shrink-0" />
                <p>Company registered inside 4 to 7 business days or 100% processing fee refund guarantee.</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0F4CFF] mt-1.5 shrink-0" />
                <p>Fully compliant with Ministerial Decision No. 73 of 2023 Corporate Tax relief guidelines.</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0F4CFF] mt-1.5 shrink-0" />
                <p>VIP fast-track digital corporate bank account routing with dedicated relationship officers.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Capture CTA */}
        <div className="mt-8 pt-4 border-t border-white/10">
          <a 
            href="#consultation-desk" 
            className="w-full flex items-center justify-center space-x-2 bg-[#0F4CFF] hover:bg-blue-700 text-white font-display text-xs font-bold py-3.5 px-4 rounded-xl transition-all shadow-soft"
            id="proceed-receipt-btn"
          >
            <span>Lock Package & Request Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-center text-[9px] text-neutral-500 mt-2">
            No upfront credit card verification needed. Dynamic legal proposal delivered via secure secure email link.
          </p>
        </div>

      </div>

    </div>
  );
}
