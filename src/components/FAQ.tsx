import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/courseData';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const FAQ: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section 
      id="faq" 
      ref={revealRef}
      className="py-20 sm:py-24 lg:py-28 relative bg-[#040816] border-t border-b border-blue-900/30 overflow-hidden neural-grid-subtle reveal-fade-up"
    >
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] max-w-[85vw] rounded-full radial-glow-blue pointer-events-none opacity-20 blur-3xl" 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-xs font-semibold tracking-wider text-sky-300 uppercase shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-sky-400" />
            <span>Questions & Answers</span>
            <span aria-hidden="true">·</span>
            <span>Neuronix AI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about the Generative AI course, platforms, and learning format.
          </p>
        </div>

        {/* Clean Accessible Accordion List */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            const btnId = `faq-btn-${idx}`;
            const panelId = `faq-panel-${idx}`;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-blue-900/40 bg-[#07132a]/85 overflow-hidden transition-all duration-200 shadow-md shadow-black/20"
              >
                <button
                  id={btnId}
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-blue-950/40 transition-colors focus-visible:ring-2 focus-visible:ring-sky-400"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-blue-600/15 border border-blue-500/30 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-blue-600/30 text-white' : 'text-sky-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div 
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-blue-900/40 pt-4 bg-[#050e20]/60"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
