import React from 'react';
import { WHY_LEARN_REASONS } from '../data/courseData';
import { 
  ShieldCheck, 
  Wrench, 
  Layers, 
  TrendingUp, 
  Briefcase, 
  Cpu, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface WhyLearnGenAIProps {
  onApplyClick: () => void;
}

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  Wrench,
  Layers,
  TrendingUp,
  Briefcase,
  Cpu
};

export const WhyLearnGenAI: React.FC<WhyLearnGenAIProps> = ({ onApplyClick }) => {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section 
      id="why-genai" 
      ref={revealRef}
      className="py-20 sm:py-24 lg:py-28 relative bg-[#040817] border-t border-b border-blue-900/30 overflow-hidden neural-grid-subtle reveal-fade-up"
    >
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-0 w-96 h-96 max-w-[80vw] rounded-full radial-glow-blue pointer-events-none opacity-40 blur-3xl" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-10 right-10 w-96 h-96 max-w-[80vw] rounded-full radial-glow-indigo pointer-events-none opacity-30 blur-3xl" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-xs font-semibold tracking-wider text-blue-300 uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Essential Tech Skill</span>
            <span aria-hidden="true">·</span>
            <span>Neuronix AI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Learn Generative AI?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">
            Generative AI is not just a passing trend—it is a superpower that multiplies what you can build, create, and achieve.
          </p>
        </div>

        {/* 6 Modern Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {WHY_LEARN_REASONS.map((reason, idx) => {
            const IconComponent = iconMap[reason.iconName] || Sparkles;
            return (
              <div
                key={reason.id}
                className="group relative rounded-2xl border border-blue-900/40 bg-[#07132a]/70 hover:bg-[#0a1b3c]/90 hover:border-sky-400/50 p-6 sm:p-8 transition-all duration-300 backdrop-blur-md shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-blue-950/60 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Top Subtle Border Highlight */}
                <div 
                  aria-hidden="true" 
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                />

                <div className="space-y-4">
                  {/* Icon & Index Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-sky-500/20 border border-blue-400/30 flex items-center justify-center text-sky-400 group-hover:scale-105 group-hover:bg-blue-600/35 group-hover:text-white transition-all shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-sky-400/80 group-hover:text-sky-300">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-sky-200 transition-colors">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                {/* Card Highlight Badge */}
                <div className="mt-6 pt-4 border-t border-blue-900/40 flex items-center justify-between text-xs">
                  <span className="font-semibold text-sky-300 font-mono">
                    {reason.highlight}
                  </span>
                  <span className="text-slate-400 group-hover:text-white transition-colors">
                    Generative AI Skill
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Small Bottom Hook */}
        <div className="mt-12 sm:mt-16 text-center">
          <button
            type="button"
            onClick={onApplyClick}
            className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors cursor-pointer group focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050B17] rounded-lg px-3 py-1.5"
          >
            <span>Anyone interested in learning Generative AI can start here — apply now</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
