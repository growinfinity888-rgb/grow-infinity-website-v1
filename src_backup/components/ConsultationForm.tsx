import React, { useState, useTransition } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Mail, Phone, Building2, Calendar, Check, Sparkles, Send, AlertCircle, ShieldCheck } from 'lucide-react';

export default function ConsultationForm() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isPending, startTransition] = useTransition();
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookedSlot, setBookedSlot] = useState<string | null>(null);
  
  // Form states
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    companyName: '',
    targetJurisdiction: 'dubai-fz',
    servicesNeeded: 'formation',
    timeline: 'immediate',
    investmentCapital: '100k-500k',
    spamAnswer: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep1 = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full legal name is required.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Valid corporate email is required.';
    if (!formData.whatsapp.trim()) errs.whatsapp = 'Direct WhatsApp number is required.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep2 = () => {
    // Basic compliance check for step 2 inputs
    return true;
  };

  const validateStep3 = () => {
    const errs: Record<string, string> = {};
    if (formData.spamAnswer.trim().toLowerCase() !== 'grow') {
      errs.spamAnswer = 'Please enter the security keyword "GROW" exactly to verify humanity.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep((prev) => (prev - 1) as any);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep3()) return;

    // Direct transition block simulating complex server calculations & CRM logging
    startTransition(async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSuccess(true);
    });
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-[2rem] shadow-premium overflow-hidden max-w-xl mx-auto relative group" id="consultation-desk">
      {/* Subtle glow behind the form container */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-purple-100 blur-xl opacity-50 -z-10 group-hover:opacity-70 transition-opacity duration-700" />
      
      {/* Visual Header */}
      <div className="bg-[#061A40] text-white p-8 lg:p-10 relative overflow-hidden rounded-t-[2rem]" id="form-header">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#0F4CFF]/20 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative z-10 flex justify-between items-start">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold font-display text-[#0F4CFF] bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-500/20 backdrop-blur-md shadow-sm">
              Enterprise Advisory Desk
            </span>
            <h4 className="font-display font-medium text-3xl text-white mt-5 tracking-tight">
              Request Advisory Briefing
            </h4>
            <p className="text-sm text-slate-300 mt-2 font-light max-w-sm">
              Connect with our licensed legal strategists in Dubai, Riyadh, Doha, or Mumbai.
            </p>
          </div>
          <div className="p-3 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
            <ShieldCheck className="w-8 h-8 text-[#0F4CFF]" />
          </div>
        </div>
 
        {/* Step Indicator Bullets */}
        {!isSuccess && (
          <div className="flex items-center space-x-3 mt-6 relative z-10">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center space-x-2">
                <div 
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold transition-all ${step === s ? 'bg-[#0F4CFF] text-white font-display' : step > s ? 'bg-emerald-500 text-white' : 'bg-slate-800 text-slate-500'}`}
                >
                  {step > s ? <Check className="w-3 h-3" /> : s}
                </div>
                <span className={`text-[10px] font-semibold tracking-wider uppercase ${step === s ? 'text-white' : 'text-slate-500'}`}>
                  {s === 1 ? 'Contact' : s === 2 ? 'Structure' : 'Authorize'}
                </span>
                {s < 3 && <div className="w-4 h-[1px] bg-slate-800" />}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Main Body Layout */}
      <div className="p-6 lg:p-8" id="form-body">
        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.form 
              key="active-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
              id="consultation-form-element"
            >
              
              {/* STEP 1: Contact Information */}
              {step === 1 && (
                <div className="space-y-5 relative z-10" id="form-step-1">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-widest font-mono mb-2">
                      Full Legal Name
                    </label>
                    <div className="relative group/input">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within/input:text-[#0F4CFF] transition-colors" />
                      <input
                        type="text"
                        placeholder="Johnathan Doe"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full pl-11 pr-4 py-3.5 bg-white/70 backdrop-blur-md rounded-2xl border text-sm transition-all focus:outline-none focus:ring-4 focus:bg-white ${errors.fullName ? 'border-red-400 focus:ring-red-500/20' : 'border-slate-200 focus:border-[#0F4CFF] focus:ring-[#0F4CFF]/15 hover:border-slate-300'}`}
                        id="form-full-name"
                      />
                    </div>
                    {errors.fullName && <p className="text-xs text-red-500 mt-1 flex items-center space-x-1"><AlertCircle className="w-3.5 h-3.5" /> <span>{errors.fullName}</span></p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-widest font-mono mb-2">
                      Corporate Email Address
                    </label>
                    <div className="relative group/input">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within/input:text-[#0F4CFF] transition-colors" />
                      <input
                        type="email"
                        placeholder="john@corporation.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full pl-11 pr-4 py-3.5 bg-white/70 backdrop-blur-md rounded-2xl border text-sm transition-all focus:outline-none focus:ring-4 focus:bg-white ${errors.email ? 'border-red-400 focus:ring-red-500/20' : 'border-slate-200 focus:border-[#0F4CFF] focus:ring-[#0F4CFF]/15 hover:border-slate-300'}`}
                        id="form-email"
                      />
                    </div>
                    {errors.email && <p className="text-xs text-red-500 mt-1 flex items-center space-x-1"><AlertCircle className="w-3.5 h-3.5" /> <span>{errors.email}</span></p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-widest font-mono mb-2">
                        WhatsApp (with Code)
                      </label>
                      <div className="relative group/input">
                        <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within/input:text-[#0F4CFF] transition-colors" />
                        <input
                          type="tel"
                          placeholder="+971 50 123 4567"
                          value={formData.whatsapp}
                          onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                          className={`w-full pl-11 pr-4 py-3.5 bg-white/70 backdrop-blur-md rounded-2xl border text-sm transition-all focus:outline-none focus:ring-4 focus:bg-white ${errors.whatsapp ? 'border-red-400 focus:ring-red-500/20' : 'border-slate-200 focus:border-[#0F4CFF] focus:ring-[#0F4CFF]/15 hover:border-slate-300'}`}
                          id="form-whatsapp"
                        />
                      </div>
                      {errors.whatsapp && <p className="text-xs text-red-500 mt-1 flex items-center space-x-1"><AlertCircle className="w-3.5 h-3.5" /> <span>{errors.whatsapp}</span></p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-widest font-mono mb-2">
                        Company Name
                      </label>
                      <div className="relative group/input">
                        <Building2 className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within/input:text-[#0F4CFF] transition-colors" />
                        <input
                          type="text"
                          placeholder="Acme International"
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          className="w-full pl-11 pr-4 py-3.5 bg-white/70 backdrop-blur-md rounded-2xl border border-slate-200 text-sm transition-all focus:outline-none focus:border-[#0F4CFF] focus:ring-4 focus:ring-[#0F4CFF]/15 hover:border-slate-300 focus:bg-white"
                          id="form-company"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Jurisdiction & Structural Targets */}
              {step === 2 && (
                <div className="space-y-4" id="form-step-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider font-display mb-1.5">
                        Target Incorporation Zone
                      </label>
                      <select
                        value={formData.targetJurisdiction}
                        onChange={(e) => setFormData({ ...formData, targetJurisdiction: e.target.value })}
                        className="w-full bg-white border border-slate-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-[#0F4CFF] focus:ring-2 focus:ring-[#0F4CFF]/10"
                        id="form-jurisdiction-select"
                      >
                        <option value="dubai-fz">Dubai Free Zone</option>
                        <option value="dubai-main">Dubai Mainland</option>
                        <option value="saudi">Saudi Arabia (MISA)</option>
                        <option value="qatar">Qatar (QFC)</option>
                        <option value="india">India (Pvt Ltd)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider font-display mb-1.5">
                        Primary Advisory Requirement
                      </label>
                      <select
                        value={formData.servicesNeeded}
                        onChange={(e) => setFormData({ ...formData, servicesNeeded: e.target.value })}
                        className="w-full bg-white border border-slate-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-[#0F4CFF] focus:ring-2 focus:ring-[#0F4CFF]/10"
                        id="form-requirement-select"
                      >
                        <option value="formation">Company Formation & Licenses</option>
                        <option value="tax-compliance">Corporate Tax & Compliance</option>
                        <option value="golden-visa">10-Year Golden Visa</option>
                        <option value="bookkeeping">Bookkeeping & Audit Retainers</option>
                        <option value="advisory">Enterprise Market Entry Advisory</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider font-display mb-1.5">
                        Anticipated Capital Allocation
                      </label>
                      <select
                        value={formData.investmentCapital}
                        onChange={(e) => setFormData({ ...formData, investmentCapital: e.target.value })}
                        className="w-full bg-white border border-slate-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-[#0F4CFF] focus:ring-2 focus:ring-[#0F4CFF]/10"
                        id="form-capital-select"
                      >
                        <option value="under-100k">Under AED 100,000</option>
                        <option value="100k-500k">AED 100,000 – AED 500,000</option>
                        <option value="500k-2m">AED 500,000 – AED 2,000,000</option>
                        <option value="above-2m">Above AED 2,000,000</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider font-display mb-1.5">
                        Expected Deployment Horizon
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full bg-white border border-slate-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-[#0F4CFF] focus:ring-2 focus:ring-[#0F4CFF]/10"
                        id="form-timeline-select"
                      >
                        <option value="immediate">Immediate Launch (Next 30 Days)</option>
                        <option value="planning">Active Strategy Phase (1–3 Months)</option>
                        <option value="research">Information Scoping & RAG Search</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Verification & Legal Authorization */}
              {step === 3 && (
                <div className="space-y-4" id="form-step-3">
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs text-slate-600 space-y-2">
                    <p className="font-bold text-slate-800 uppercase font-display">GDPR & UAE Data Protection Assurance</p>
                    <p>
                      Grow Infinity Corporate Advisors strictly safeguard your corporate intelligence. By submitting, you authorize our licensed strategists to contact you on the supplied Whatsapp and corporate email with details of the proposal dossier.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider font-display mb-1.5">
                      Security Verification Challenge
                    </label>
                    <p className="text-[11px] text-slate-400 mb-2 font-medium">
                      To safeguard our systems against automated spam queries, please type the word <strong className="text-[#0F4CFF] font-bold">GROW</strong> in the box below:
                    </p>
                    <input
                      type="text"
                      placeholder="Type GROW here"
                      value={formData.spamAnswer}
                      onChange={(e) => setFormData({ ...formData, spamAnswer: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${errors.spamAnswer ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-[#0F4CFF] focus:ring-[#0F4CFF]/10'}`}
                      id="form-spam-check"
                    />
                    {errors.spamAnswer && <p className="text-xs text-red-500 mt-1 flex items-center space-x-1"><AlertCircle className="w-3.5 h-3.5" /> <span>{errors.spamAnswer}</span></p>}
                  </div>
                </div>
              )}

              {/* Controls buttons area */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100" id="form-controls">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    disabled={isPending}
                    className="px-4 py-2 text-xs font-semibold text-slate-500 hover:text-slate-950 font-display transition-all"
                    id="form-prev-btn"
                  >
                    Back
                  </button>
                ) : (
                  <div />
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex items-center space-x-1.5 bg-[#061A40] hover:bg-slate-800 text-white font-display text-xs font-bold py-3 px-6 rounded-xl transition-all shadow-soft"
                    id="form-next-btn"
                  >
                    <span>Continue</span>
                    <Sparkles className="w-3.5 h-3.5 text-blue-300" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isPending}
                    className="flex items-center space-x-2 bg-[#0F4CFF] hover:bg-blue-700 text-white font-display text-xs font-bold py-3 px-6 rounded-xl transition-all shadow-soft disabled:opacity-55"
                    id="form-submit-btn"
                  >
                    {isPending ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Analysing Dossier...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Request Legal Briefing</span>
                      </>
                    )}
                  </button>
                )}
              </div>

            </motion.form>
          ) : (
            // Animated Success State Panel
            <motion.div 
              key="success-panel"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10 space-y-6"
              id="consultation-success-panel"
            >
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto ring-8 ring-emerald-500/10">
                <Check className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h4 className="font-display font-extrabold text-2xl text-[#061A40]">
                  Dossier Submitted Successfully
                </h4>
                <p className="text-sm text-slate-500 max-w-sm mx-auto leading-relaxed font-medium">
                  Thank you, <strong className="text-slate-800">{formData.fullName}</strong>. Your structural briefing request has been registered under reference <span className="font-mono text-xs font-bold text-[#0F4CFF]">GINF-2026-{(Math.random() * 9000 + 1000).toFixed(0)}</span>.
                </p>
              </div>

              {bookedSlot ? (
                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 text-left max-w-md mx-auto space-y-2 animate-pulse" id="slot-booking-success">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-600 font-extrabold" />
                    <p className="text-xs font-bold font-display uppercase tracking-wider text-emerald-800">
                      Advisory Slot Confirmed
                    </p>
                  </div>
                  <p className="text-xs text-slate-600 font-medium">
                    You have selected the <strong className="text-slate-950">{bookedSlot}</strong> session. A calendar invite, meeting briefing, and customized corporate roadmap have been sent to <strong className="text-slate-800">{formData.email}</strong>.
                  </p>
                </div>
              ) : (
                /* Booking Scheduler Simulation */
                <div className="bg-[#F8FAFC] border border-slate-100 rounded-2xl p-6 text-left max-w-md mx-auto space-y-4" id="success-scheduler">
                  <div className="flex items-center space-x-2.5">
                    <Calendar className="w-4 h-4 text-[#0F4CFF]" />
                    <p className="text-xs font-bold font-display uppercase tracking-wider text-[#061A40]">
                      Instant Calendar Mapping
                    </p>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">
                    Select a preferred consultation slot below. A secure calendar invite and virtual meet link will be dispatched automatically.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2" id="time-slots">
                    {[
                      { date: 'Today, 2:00 PM (GMT+4)', slot: 'VIP Desk' },
                      { date: 'Today, 4:30 PM (GMT+4)', slot: 'Dubai Team' },
                      { date: 'Tomorrow, 10:00 AM', slot: 'Riyadh Team' },
                      { date: 'Tomorrow, 1:00 PM', slot: 'Tax Specialist' }
                    ].map((item, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setBookedSlot(`${item.date} with ${item.slot}`)}
                        className="p-2.5 rounded-lg border border-slate-200 bg-white hover:border-[#0F4CFF] hover:bg-blue-50/50 text-left transition-all group"
                        id={`slot-btn-${idx}`}
                      >
                        <p className="text-[10px] font-bold text-slate-800 font-display group-hover:text-blue-900">{item.date}</p>
                        <p className="text-[9px] text-slate-400 font-mono group-hover:text-[#0F4CFF]">{item.slot}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsSuccess(false);
                    setBookedSlot(null);
                    setStep(1);
                    setFormData({
                      fullName: '',
                      email: '',
                      whatsapp: '',
                      companyName: '',
                      targetJurisdiction: 'dubai-fz',
                      servicesNeeded: 'formation',
                      timeline: 'immediate',
                      investmentCapital: '100k-500k',
                      spamAnswer: ''
                    });
                  }}
                  className="text-xs font-bold text-[#0F4CFF] hover:text-blue-800 font-display"
                  id="reset-form-btn"
                >
                  Submit Another Advisory Request
                </button>
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}
