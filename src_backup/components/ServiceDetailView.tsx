import { Service } from '../types';
import { motion } from 'motion/react';
import { X, Check, AlertCircle, Calendar, Coins, Users, HelpCircle, ShieldAlert, ArrowRight, ExternalLink } from 'lucide-react';

interface ServiceDetailViewProps {
  service: Service | null;
  onClose: () => void;
}

export default function ServiceDetailView({ service, onClose }: ServiceDetailViewProps) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" id="service-modal-overlay">
      {/* Dark backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/45 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />

      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 15 }}
          className="relative transform overflow-hidden rounded-3xl bg-white text-left shadow-2xl transition-all w-full max-w-4xl"
          id={`service-detail-${service.slug}`}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute right-5 top-5 rounded-full p-2 bg-slate-50 border border-slate-100 hover:bg-slate-100 text-slate-400 hover:text-slate-800 transition-colors z-10"
            id="close-modal-btn"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Modal Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[90vh] overflow-y-auto">
            
            {/* Left Main Information Pane (8 columns) */}
            <div className="lg:col-span-8 p-6 lg:p-10 space-y-8" id="modal-main-pane">
              <div>
                <span className="text-[10px] font-bold font-display uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                  {service.category} Core Dossier
                </span>
                <h3 className="font-display font-extrabold text-slate-900 text-2xl lg:text-3xl mt-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                  {service.summary}
                </p>
              </div>

              {/* RAG Core Definition block */}
              <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl space-y-2">
                <p className="text-[10px] font-bold font-display text-blue-600 uppercase tracking-widest">Regulatory Definition</p>
                <p className="text-xs text-slate-600 leading-relaxed italic">
                  "{service.definition}"
                </p>
              </div>

              {/* Who Is It For Section */}
              <div className="space-y-3">
                <h5 className="text-xs font-bold font-display text-slate-900 uppercase tracking-widest flex items-center space-x-1.5">
                  <Users className="w-4 h-4 text-slate-500" />
                  <span>Target Demographics</span>
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.whoIsItFor.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 bg-slate-50/50 p-3 rounded-xl border border-slate-100">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 shrink-0" />
                      <p className="text-xs text-slate-600 leading-snug">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements & Documents Checklist */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="space-y-3">
                  <h5 className="text-xs font-bold font-display text-slate-900 uppercase tracking-widest">Filing Requirements</h5>
                  <div className="space-y-2.5">
                    {service.requirements.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                        <span className="text-xs text-slate-600 leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h5 className="text-xs font-bold font-display text-slate-900 uppercase tracking-widest">Required Legal Documents</h5>
                  <div className="space-y-2.5">
                    {service.documents.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <Check className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                        <span className="text-xs text-slate-600 leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Common Mistakes to Avoid */}
              <div className="bg-amber-50/30 border border-amber-200/50 p-5 rounded-2xl space-y-3">
                <h5 className="text-xs font-bold font-display text-amber-800 uppercase tracking-wider flex items-center space-x-1.5">
                  <ShieldAlert className="w-4 h-4 text-amber-600" />
                  <span>Common Regulatory Mistakes</span>
                </h5>
                <ul className="space-y-2">
                  {service.commonMistakes.map((mis, idx) => (
                    <li key={idx} className="text-xs text-slate-600 leading-relaxed flex items-start space-x-2">
                      <span className="text-amber-600 font-bold font-mono shrink-0">•</span>
                      <span>{mis}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specific FAQs for Service */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <h5 className="text-xs font-bold font-display text-slate-900 uppercase tracking-widest flex items-center space-x-1.5">
                  <HelpCircle className="w-4 h-4 text-slate-400" />
                  <span>Service FAQs</span>
                </h5>
                <div className="space-y-4">
                  {service.faqs.map((faq, idx) => (
                    <div key={idx} className="space-y-1.5" id={`faq-${idx}`}>
                      <p className="text-xs font-bold text-slate-800 font-display">Q: {faq.question}</p>
                      <p className="text-xs text-slate-500 leading-relaxed pl-4 border-l border-slate-200">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Meta Checklist sidebar (4 columns) */}
            <div className="lg:col-span-4 bg-slate-50 p-6 lg:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-100" id="modal-side-pane">
              <div className="space-y-6">
                
                {/* 1. Cost Indicator */}
                <div className="space-y-1">
                  <p className="text-[10px] font-bold font-display text-slate-400 uppercase tracking-wider">Estimated Government Cost</p>
                  <div className="flex items-center space-x-2 text-slate-900">
                    <Coins className="w-5 h-5 text-blue-600" />
                    <span className="font-display font-bold text-lg">{service.baseCost}</span>
                  </div>
                </div>

                {/* 2. Timeline Indicator */}
                <div className="space-y-1">
                  <p className="text-[10px] font-bold font-display text-slate-400 uppercase tracking-wider">Average SLA Timeline</p>
                  <div className="flex items-center space-x-2 text-slate-900">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span className="font-display font-bold text-sm">{service.timeline}</span>
                  </div>
                </div>

                {/* 3. Why Us Indicators */}
                <div className="space-y-3 pt-4 border-t border-slate-200/60">
                  <p className="text-[10px] font-bold font-display text-slate-400 uppercase tracking-wider">The Grow Infinity Edge</p>
                  <div className="space-y-2">
                    {service.whyGrowInfinity.map((w, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <Check className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                        <span className="text-[11px] text-slate-600 leading-tight">{w}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Connected Locations & Zones */}
                <div className="space-y-3 pt-4 border-t border-slate-200/60">
                  <p className="text-[10px] font-bold font-display text-slate-400 uppercase tracking-wider">Active Locations</p>
                  <div className="flex flex-wrap gap-1.5">
                    {service.relatedLocations.map((loc) => (
                      <span key={loc} className="bg-white border border-slate-200 text-slate-700 text-[9px] font-medium px-2 py-0.5 rounded font-display shadow-sm">
                        {loc}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 5. External Authorities References */}
                {service.externalReferences && service.externalReferences.length > 0 && (
                  <div className="space-y-2 pt-4 border-t border-slate-200/60">
                    <p className="text-[10px] font-bold font-display text-slate-400 uppercase tracking-wider">External Authority Citations</p>
                    <div className="space-y-1.5">
                      {service.externalReferences.map((ref, idx) => (
                        <a 
                          key={idx} 
                          href={ref} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="flex items-center space-x-1.5 text-[10px] text-blue-600 hover:underline hover:text-blue-800 transition-all font-mono"
                          id={`ref-${idx}`}
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span>Official Portal Index</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

              </div>

              {/* Action route button */}
              <div className="mt-10 pt-4 border-t border-slate-200/60">
                <a
                  href="#consultation-desk"
                  onClick={onClose}
                  className="w-full flex items-center justify-center space-x-1.5 bg-slate-900 hover:bg-slate-800 text-white font-display text-xs font-semibold py-3 px-4 rounded-xl transition-all"
                  id="modal-request-consult-btn"
                >
                  <span>Request Full Dossier</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
