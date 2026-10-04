import React from 'react';
import { WHAT_YOULL_LEARN_TOPICS } from '../data/courseData';
import { 
  Sparkles, 
  Cpu, 
  Brain, 
  MessageSquareText, 
  Bot, 
  Image, 
  FileText, 
  Zap, 
  Layers, 
  Code, 
  Layout, 
  Globe,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface CurriculumProps {
  onApplyClick: () => void;
}

const iconMap: Record<string, React.ElementType> = {
  Sparkles,
  Cpu,
  Brain,
  MessageSquareText,
  Bot,
  Image,
  FileText,
  Zap,
  Layers,
  Code,
  Layout,
  Globe
};

export const Curriculum: React.FC<CurriculumProps> = ({ onApplyClick }) => {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section 
      id="what-youll-learn" 
      ref={revealRef}
      className="py-20 sm:py-24 lg:py-28 relative bg-[#050c1e] overflow-hidden tech-dot-matrix reveal-fade-up border-t border-blue-900/30"
    >
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="absolute top-10 right-0 w-[550px] h-[550px] max-w-[80vw] rounded-full radial-glow-indigo pointer-events-none opacity-40 blur-3xl" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-10 left-0 w-[450px] h-[450px] max-w-[80vw] rounded-full radial-glow-blue pointer-events-none opacity-30 blur-3xl" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-xs font-semibold tracking-wider text-blue-300 uppercase shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-blue-400" />
            <span>Course Curriculum</span>
            <span aria-hidden="true">·</span>
            <span>Neuronix AI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            What You'll Learn
          </h2>
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">
            A comprehensive, practical curriculum designed to take you from foundational concepts to building and deploying real-world Generative AI applications.
          </p>
        </div>

        {/* 12 Modern Cards Grid with Consistent Sizing & Spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {WHAT_YOULL_LEARN_TOPICS.map((topic, index) => {
            const IconComponent = iconMap[topic.iconName] || Sparkles;
            return (
              <article
                key={topic.id}
                className="group relative rounded-2xl border border-blue-500/20 bg-[#08152e]/70 hover:bg-[#0b1c3e]/90 hover:border-sky-400/50 p-5 sm:p-6 transition-all duration-300 backdrop-blur-md shadow-lg shadow-black/30 hover:shadow-2xl hover:shadow-blue-950/60 hover:-translate-y-1.5 flex flex-col justify-between min-h-[220px]"
              >
                {/* Subtle top card glow on hover */}
                <div 
                  aria-hidden="true" 
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                />

                <div className="space-y-3.5">
                  {/* Top Bar: Icon + Topic Index */}
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600/20 to-sky-500/20 border border-blue-400/30 flex items-center justify-center text-sky-400 group-hover:scale-105 group-hover:bg-blue-600/35 group-hover:text-white transition-all shadow-sm">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-semibold text-slate-500 group-hover:text-sky-300 transition-colors">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white group-hover:text-sky-200 transition-colors leading-snug">
                    {topic.title}
                  </h3>

                  {/* Short 1–2 Line Description */}
                  <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed">
                    {topic.description}
                  </p>
                </div>

                {/* Bottom Tag */}
                <div className="mt-5 pt-3.5 border-t border-blue-900/40 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-sky-400 font-mono">
                    {topic.tag}
                  </span>
                  <span className="text-xs text-slate-400 group-hover:text-white flex items-center gap-1 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Live Class</span>
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Small Bottom Hook */}
        <div className="mt-12 sm:mt-16 rounded-2xl border border-blue-500/30 bg-gradient-to-r from-blue-950/60 via-[#0c1e42]/70 to-indigo-950/60 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-950/40">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white">
              All topics taught live with hands-on practice
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Interactive demos, starter code templates, and direct Q&A during every class.
            </p>
          </div>
          <button
            type="button"
            onClick={onApplyClick}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer whitespace-nowrap focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050B17]"
          >
            <span>Apply Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
