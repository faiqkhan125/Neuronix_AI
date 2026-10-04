import React from 'react';
import { WHAT_YOULL_GET_ITEMS } from '../data/courseData';
import { 
  Video, 
  Code, 
  Wrench, 
  Layers, 
  Users, 
  Sparkles,
  ArrowRight,
  Gift
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface WhatYoullGetProps {
  onApplyClick: () => void;
}

const iconMap: Record<string, React.ElementType> = {
  Video,
  Code,
  Wrench,
  Layers,
  Users
};

export const WhatYoullGet: React.FC<WhatYoullGetProps> = ({ onApplyClick }) => {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section 
      id="what-youll-get" 
      ref={revealRef}
      className="py-20 sm:py-24 lg:py-28 relative bg-[#040813] border-t border-b border-blue-900/30 overflow-hidden reveal-fade-up"
    >
      {/* Background radial accent */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 right-10 w-[500px] h-[500px] max-w-[80vw] rounded-full radial-glow-blue pointer-events-none opacity-20 blur-3xl" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-xs font-semibold tracking-wider text-sky-300 uppercase shadow-sm">
            <Gift className="w-3.5 h-3.5 text-sky-400" />
            <span>Course Benefits</span>
            <span aria-hidden="true">·</span>
            <span>Neuronix AI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            What You'll Get
          </h2>
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">
            A comprehensive, student-first learning experience designed to make Generative AI accessible, practical, and directly applicable.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {WHAT_YOULL_GET_ITEMS.map((item) => {
            const IconComponent = iconMap[item.iconName] || Sparkles;
            return (
              <div
                key={item.id}
                className="group relative rounded-2xl border border-blue-900/40 bg-[#07132a]/80 hover:bg-[#0a1b3c] hover:border-sky-400/50 p-6 sm:p-7 transition-all duration-300 backdrop-blur-md shadow-xl shadow-black/25 hover:shadow-2xl hover:shadow-blue-950/60 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Subtle top border glow */}
                <div 
                  aria-hidden="true" 
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-sky-500/20 border border-blue-400/30 flex items-center justify-center text-sky-400 group-hover:scale-105 group-hover:bg-blue-600/35 group-hover:text-white transition-all shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-medium text-sky-300 font-mono px-2.5 py-0.5 rounded-full bg-blue-950/80 border border-blue-800/40">
                      Included
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-sky-200 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-blue-900/40 flex items-center gap-1.5 text-xs text-sky-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Student Experience</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Cohort Assurance Banner */}
        <div className="mt-12 sm:mt-16 rounded-2xl border border-blue-500/30 bg-gradient-to-r from-blue-950/70 via-[#08183c]/85 to-indigo-950/70 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-950/40">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">Live Online Cohort via Google Meet & Zoom</h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Interactive sessions where you can ask questions, participate, and build practical AI projects.
            </p>
          </div>
          <button
            type="button"
            onClick={onApplyClick}
            className="shrink-0 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050B17]"
          >
            <span>Apply Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
