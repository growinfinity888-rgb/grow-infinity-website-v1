'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CountUp from 'react-countup';
import { Calculator, ChevronLeft, CheckCircle2, Building2, Globe, Users, Briefcase, Plus, Minus, ArrowRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const nationalities = [
  "United Arab Emirates", "United Kingdom", "United States", "India", "Pakistan", 
  "Saudi Arabia", "Qatar", "Bahrain", "Oman", "Kuwait", "Egypt", "Lebanon", 
  "Jordan", "Canada", "Australia", "Germany", "France", "Italy", "Spain", 
  "Russia", "China", "Japan", "South Korea", "Other"
];

export default function CalculatorSection() {
  const [step, setStep] = useState(1);
  const totalSteps = 11;
  
  // Form State
  const [activity, setActivity] = useState('');
  const [otherActivity, setOtherActivity] = useState('');
  const [reason, setReason] = useState('');
  const [owners, setOwners] = useState(1);
  const [office, setOffice] = useState('');
  const [timeline, setTimeline] = useState('');
  const [jurisdiction, setJurisdiction] = useState('');
  const [uaeResident, setUaeResident] = useState('');
  const [dependents, setDependents] = useState('');
  const [nationality, setNationality] = useState('');
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '+971 ' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  // Pricing Logic (Step 11)
  const getPricing = () => {
    // Base cost: Free Zone starts at ~5750 (e.g. Shams/IFZA 0 visa). Mainland is higher.
    let base = jurisdiction === 'Mainland' ? 14500 : 5750;
    
    // Add office cost
    if (office === 'Physical Office') base += 20000;
    if (office === 'Shop Front') base += 35000;
    if (office === 'Business Center') base += 15000;
    if (office === 'Warehouse') base += 50000;

    // Visas
    let visaCount = owners;
    if (dependents === 'Yes') visaCount += 2;
    const visaCost = visaCount * 3500;
    
    return {
      base,
      visaCost,
      total: base + visaCost
    };
  };

  const handleSubmit = async () => {
    // Basic validation
    if (!formData.firstName || !formData.email || !formData.phone) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    
    const payload = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "c2b75ae7-15ea-4054-8be4-f0619dee9687",
      subject: "New Cost Calculator Lead - Grow Infinity",
      from_name: "Grow Infinity Calculator",
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      activity: activity === 'Other' ? otherActivity : activity,
      reason,
      owners,
      office,
      timeline,
      jurisdiction,
      uaeResident,
      dependents,
      nationality,
      calculatedBasePrice: getPricing().base,
      calculatedVisaCost: getPricing().visaCost,
      calculatedTotal: getPricing().total,
    };

    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(payload)
      });
    } catch (error) {
      console.error("Form submission error", error);
    } finally {
      setIsSubmitting(false);
      handleNext();
    }
  };

  const renderStepContent = () => {
    switch(step) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-display font-medium text-white">1. What business activity are you looking for?</h3>
            <p className="text-slate-400 mb-8 text-sm">Choose your business activity to start your business setup cost estimate. This helps identify the location and license that best suits your company.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {['Commercial / Trading', 'Professional / Services', 'Industrial', 'E-Commerce'].map((item) => (
                <button
                  key={item}
                  onClick={() => { setActivity(item); setTimeout(handleNext, 300); }}
                  className={`p-5 rounded-2xl text-left transition-all duration-300 border ${
                    activity === item 
                    ? 'bg-blue-500/20 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.2)]' 
                    : 'bg-white/5 border-white/10 hover:bg-white/10 text-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">{item}</span>
                    {activity === item && <CheckCircle2 className="w-5 h-5 text-blue-400" />}
                  </div>
                </button>
              ))}
              
              <div className="sm:col-span-2 mt-2">
                <label className="text-sm font-semibold text-slate-400 mb-2 block">Other (user can type here)</label>
                <div className="flex gap-3">
                  <Input 
                    value={otherActivity} 
                    onChange={(e) => { setOtherActivity(e.target.value); setActivity('Other'); }} 
                    placeholder="Type your activity..." 
                    className="h-14 bg-white/5 border-white/10 text-white placeholder:text-slate-500 rounded-xl focus-visible:ring-blue-500"
                  />
                  <Button onClick={handleNext} disabled={!otherActivity && activity === 'Other'} className="h-14 px-8 bg-[#0EA5E9] hover:bg-[#0284c7] text-white rounded-xl font-bold flex items-center gap-2">
                    Next <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-display font-medium text-white">2. What is your main reason for setting up a company in the UAE?</h3>
            <p className="text-slate-400 mb-8 text-sm">This will help us determine the potential type of company structure you will need.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {['New Business Launch', 'Expansion of Existing', 'Freelance Services', 'Investment/Holdings'].map((item) => (
                <button
                  key={item}
                  onClick={() => { setReason(item); setTimeout(handleNext, 300); }}
                  className={`p-5 rounded-2xl text-left transition-all duration-300 border ${
                    reason === item 
                    ? 'bg-blue-500/20 border-blue-500' 
                    : 'bg-white/5 border-white/10 hover:bg-white/10 text-slate-300'
                  }`}
                >
                  <span className="font-bold text-white">{item}</span>
                </button>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6 text-center max-w-lg mx-auto">
            <h3 className="text-2xl md:text-3xl font-display font-medium text-white">3. How many owners/shareholders will your company have?</h3>
            <p className="text-slate-400 mb-8 text-sm">Identifying the legal structure and visa requirements.</p>
            
            <div className="flex items-center justify-center gap-8 py-8 bg-white/5 rounded-3xl border border-white/10">
              <button onClick={() => setOwners(Math.max(1, owners - 1))} className="p-4 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors">
                <Minus className="w-6 h-6" />
              </button>
              <div className="text-center">
                <span className="block text-6xl font-display font-bold text-white">{owners}</span>
                <span className="text-sm font-bold text-blue-400 uppercase tracking-widest mt-2 block">Total</span>
              </div>
              <button onClick={() => setOwners(owners + 1)} className="p-4 bg-blue-500 rounded-full hover:bg-blue-600 text-white shadow-lg shadow-blue-500/20 transition-colors">
                <Plus className="w-6 h-6" />
              </button>
            </div>
            
            <Button onClick={handleNext} className="w-full h-14 bg-[#0EA5E9] hover:bg-[#0284c7] text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 mt-6">
              Continue <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-display font-medium text-white">4. What type of office space do you need?</h3>
            <p className="text-slate-400 mb-8 text-sm">Choose the scale of your physical operations in the Emirates.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {['Virtual Office', 'Physical Office', 'Shop Front', 'Business Center', 'Warehouse'].map((item) => (
                <button
                  key={item}
                  onClick={() => { setOffice(item); setTimeout(handleNext, 300); }}
                  className={`p-5 rounded-2xl text-left transition-all duration-300 border ${
                    office === item 
                    ? 'bg-blue-500/20 border-blue-500' 
                    : 'bg-white/5 border-white/10 hover:bg-white/10 text-slate-300'
                  }`}
                >
                  <span className="font-bold text-white">{item}</span>
                </button>
              ))}
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-display font-medium text-white">5. When do you plan to start your business?</h3>
            <p className="text-slate-400 mb-8 text-sm">Important factor for calculating availability and total setup speed.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {['This Month', 'Next Month', '3 Months', '6 Months+'].map((item) => (
                <button
                  key={item}
                  onClick={() => { setTimeline(item); setTimeout(handleNext, 300); }}
                  className={`p-5 rounded-2xl text-left transition-all duration-300 border ${
                    timeline === item 
                    ? 'bg-blue-500/20 border-blue-500' 
                    : 'bg-white/5 border-white/10 hover:bg-white/10 text-slate-300'
                  }`}
                >
                  <span className="font-bold text-white">{item}</span>
                </button>
              ))}
            </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-display font-medium text-white">6. Choose your preferred jurisdiction</h3>
            <p className="text-slate-400 mb-8 text-sm">This has a significant impact on ownership and market access.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { id: 'Free Zone', desc: '100% Ownership, 0% Tax', icon: Globe },
                { id: 'Mainland', desc: 'Trade locally across UAE', icon: Building2 }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => { setJurisdiction(item.id); setTimeout(handleNext, 300); }}
                  className={`p-6 rounded-2xl text-left transition-all duration-300 border ${
                    jurisdiction === item.id 
                    ? 'bg-blue-500/20 border-blue-500' 
                    : 'bg-white/5 border-white/10 hover:bg-white/10 text-slate-300'
                  }`}
                >
                  <item.icon className={`w-8 h-8 mb-4 ${jurisdiction === item.id ? 'text-blue-400' : 'text-slate-400'}`} />
                  <span className="block font-bold text-white text-lg mb-1">{item.id}</span>
                  <span className="text-sm text-slate-400">{item.desc}</span>
                </button>
              ))}
            </div>
          </div>
        );
      case 7:
        return (
          <div className="space-y-6 max-w-lg mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-display font-medium text-white mb-8">7. Are you currently living in the UAE?</h3>
            <div className="grid grid-cols-2 gap-4">
              {['Yes', 'No'].map((item) => (
                <button
                  key={item}
                  onClick={() => { setUaeResident(item); setTimeout(handleNext, 300); }}
                  className={`p-6 rounded-2xl text-center transition-all duration-300 border ${
                    uaeResident === item 
                    ? 'bg-blue-500/20 border-blue-500' 
                    : 'bg-white/5 border-white/10 hover:bg-white/10 text-slate-300'
                  }`}
                >
                  <span className="font-bold text-white text-xl">{item}</span>
                </button>
              ))}
            </div>
          </div>
        );
      case 8:
        return (
          <div className="space-y-6 max-w-lg mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-display font-medium text-white mb-8">8. Will you also require visas for your dependants?</h3>
            <div className="grid grid-cols-2 gap-4">
              {['Yes', 'No'].map((item) => (
                <button
                  key={item}
                  onClick={() => { setDependents(item); setTimeout(handleNext, 300); }}
                  className={`p-6 rounded-2xl text-center transition-all duration-300 border ${
                    dependents === item 
                    ? 'bg-blue-500/20 border-blue-500' 
                    : 'bg-white/5 border-white/10 hover:bg-white/10 text-slate-300'
                  }`}
                >
                  <span className="font-bold text-white text-xl">{item}</span>
                </button>
              ))}
            </div>
          </div>
        );
      case 9:
        return (
          <div className="space-y-6 max-w-lg mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-display font-medium text-white mb-8">9. What's your nationality?</h3>
            <select 
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
              className="w-full h-14 px-4 bg-white/5 border border-white/10 text-white rounded-xl focus:ring-2 focus:ring-blue-500 outline-none appearance-none"
            >
              <option value="" disabled className="text-slate-900">Select Nationality</option>
              {nationalities.map(nat => (
                <option key={nat} value={nat} className="text-slate-900">{nat}</option>
              ))}
            </select>
            <Button onClick={handleNext} disabled={!nationality} className="w-full h-14 bg-[#0EA5E9] hover:bg-[#0284c7] text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 mt-4">
              Continue <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        );
      case 10:
        return (
          <div className="space-y-8 max-w-xl mx-auto">
            <div className="text-center space-y-3">
              <h3 className="text-3xl font-display font-bold text-white">10. Your Proposal is Ready!</h3>
              <p className="text-slate-400 text-sm">To receive your detailed business setup estimate and jurisdictional analysis, please provide your contact details below.</p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-5 shadow-2xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">First Name</label>
                  <Input 
                    value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    placeholder="John" className="h-12 bg-white/5 border-white/10 text-white placeholder:text-slate-600 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Last Name</label>
                  <Input 
                    value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    placeholder="Doe" className="h-12 bg-white/5 border-white/10 text-white placeholder:text-slate-600 rounded-xl"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                <Input 
                  type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="john@example.com" className="h-12 bg-white/5 border-white/10 text-white placeholder:text-slate-600 rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phone Number</label>
                <Input 
                  value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="h-12 bg-white/5 border-white/10 text-white placeholder:text-slate-600 rounded-xl"
                />
              </div>
              
              <Button disabled={isSubmitting} onClick={handleSubmit} className="w-full h-14 bg-gradient-to-r from-[#0EA5E9] to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 mt-6 shadow-[0_0_30px_rgba(14,165,233,0.3)]">
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> Submitting...
                  </>
                ) : (
                  <>
                    GET ESTIMATE <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </Button>
            </div>
          </div>
        );
      case 11:
        const pricing = getPricing();
        return (
          <div className="max-w-2xl mx-auto relative z-10">
            <div className="relative bg-gradient-to-b from-[#0F172A] to-slate-900 border border-emerald-500/30 rounded-[2rem] p-8 lg:p-12 shadow-[0_0_50px_rgba(16,185,129,0.1)] overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-50" />
              
              <div className="text-center space-y-4 mb-10">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-3xl font-display font-medium text-white">Here is your estimate, {formData.firstName || 'Founder'}!</h3>
                <p className="text-slate-400">We've calculated the most cost-effective route based on your inputs.</p>
              </div>

              <div className="space-y-6 mb-10 bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="flex justify-between items-center text-slate-300">
                  <span className="font-medium">Base License ({jurisdiction || 'Free Zone'})</span>
                  <span className="font-mono text-white">AED {pricing.base.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span className="font-medium">Visa Allocation ({owners + (dependents === 'Yes' ? 2 : 0)} Visas)</span>
                  <span className="font-mono text-white">AED {pricing.visaCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span className="font-medium">Office ({office || 'Virtual'})</span>
                  <span className="font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">Included</span>
                </div>
                
                <div className="w-full border-t border-dashed border-white/20 my-4" />
                
                <div className="flex justify-between items-end">
                  <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Estimated Total</span>
                  <div className="text-right">
                    <span className="text-4xl font-display font-bold text-white flex items-baseline gap-2">
                      <span className="text-xl text-emerald-400 font-normal">AED</span>
                      <CountUp end={pricing.total} duration={1.5} separator="," preserveValue />
                    </span>
                    <span className="text-xs text-slate-500 mt-1 block">Pricing is indicative & subject to change.</span>
                  </div>
                </div>
              </div>

              <Button className="w-full h-14 bg-white text-[#0F172A] hover:bg-gray-100 rounded-xl font-bold text-lg flex items-center justify-center gap-2">
                Download Detailed PDF
              </Button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const progressPercentage = (step / totalSteps) * 100;

  return (
    <section className="w-full bg-[#0F172A] py-24 lg:py-32 relative overflow-hidden" id="calculator">
      {/* Dynamic Background */}
      <div className="absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-gradient-to-br from-blue-600/20 to-sky-400/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-gradient-to-tr from-indigo-600/20 to-blue-500/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />
      
      <div className="max-w-[1000px] mx-auto px-6 relative z-10">
        
        {/* Header (Only show if not on final step) */}
        {step < 11 && (
          <div className="text-center mb-12 space-y-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md"
            >
              <Calculator className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-blue-400">Cost Calculator</span>
            </motion.div>
            
            {/* Progress Bar */}
            <div className="max-w-md mx-auto mt-8">
              <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                <span>Step {step} of {totalSteps - 1}</span>
                <span>{Math.round((step / (totalSteps - 1)) * 100)}%</span>
              </div>
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  className="h-full bg-gradient-to-r from-blue-500 to-sky-400 rounded-full"
                />
              </div>
            </div>
          </div>
        )}

        {/* Wizard Container */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="w-full"
            >
              {renderStepContent()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer Navigation (Don't show on step 1 or step 10/11) */}
        {step > 1 && step < 10 && (
          <div className="mt-12 flex justify-center">
            <button 
              onClick={handlePrev}
              className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4" /> Previous Question
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
