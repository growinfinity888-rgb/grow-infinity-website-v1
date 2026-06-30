'use client';

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const faqs = [
  {
    question: "What is the easiest way to start a company in the UAE?",
    answer: "The easiest and most cost-effective way is typically setting up in a Free Zone. Free Zones offer 100% foreign ownership, zero corporate tax on qualifying income, and a fully digital setup process that can be completed in under 48 hours."
  },
  {
    question: "Can foreign nationals own 100% of a Mainland company?",
    answer: "Yes! Recent legislative changes in the UAE allow foreign nationals to retain 100% ownership of Mainland (DET) companies for most commercial and industrial activities without needing a local Emirati sponsor."
  },
  {
    question: "What are the requirements for the UAE Golden Visa?",
    answer: "The 10-Year Golden Visa is available for investors (property investment of AED 2M+), entrepreneurs, and exceptional talents. We manage the entire application process, including medical fitness and Emirates ID issuance."
  },
  {
    question: "How does UAE Corporate Tax affect my business?",
    answer: "The UAE introduced a standard Corporate Tax rate of 9% on taxable income exceeding AED 375,000. However, Free Zone companies can benefit from a 0% tax rate on 'Qualifying Income'. We provide full tax structuring to optimize your liabilities."
  },
  {
    question: "How long does it take to open a corporate bank account?",
    answer: "While corporate banking in the UAE requires thorough compliance checks, our VIP banking network allows fast-tracked pre-approvals. Typically, an account can be operational within 2 to 4 weeks depending on the jurisdiction and business activity."
  }
];

export default function FaqSection() {
  return (
    <section className="w-full bg-white py-24 lg:py-32" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0D3B66] bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
            FAQ
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-medium text-[#0F172A] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-500">Everything you need to know about setting up and scaling your business in the UAE.</p>
        </div>

        <Accordion className="w-full space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} className="border border-gray-200 rounded-2xl px-6 bg-gray-50/50">
              <AccordionTrigger className="text-lg font-bold text-gray-900 py-6 hover:no-underline hover:text-[#0D3B66]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6 pt-0">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
