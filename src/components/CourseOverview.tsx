import React from 'react';
import { COURSE_OVERVIEW_CARDS } from '../data/courseData';
import { 
  Globe, 
  Video, 
  Laptop, 
  Cpu, 
  Sparkles, 
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface CourseOverviewProps {
  onApplyClick: () => void;
}

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Video,
  Laptop,
  Cpu,
  Sparkles
};

export const CourseOverview: React.FC<CourseOverviewProps> = ({ onApplyClick }) => {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section 
      id="course-overview" 
      ref={revealRef}
      className="py-20 sm:py-24 lg:py-28 relative bg-[#040916] border-t border-b border-blue-900/30 overflow-hidden neural-grid-subtle reveal-fade-up"
    >
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-10 w-96 h-96 max-w-[80vw] rounded-full radial-glow-blue pointer-events-none opacity-30 blur-3xl" 
      />
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 right-10 w-96 h-96 max-w-[80vw] rounded-full radial-glow-indigo pointer-events-none opacity-25 blur-3xl" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-xs font-semibold tracking-wider text-sky-300 uppercase shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-sky-400" />
            <span>Course Overview</span>
            <span aria-hidden="true">·</span>
            <span>Neuronix AI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Generative AI Course
          </h2>
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">
            This online course is designed to introduce students to Generative AI, modern AI tools, prompt engineering, AI applications, automation, and AI-powered projects.
          </p>
        </div>

        {/* 5 Clean Visual Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {COURSE_OVERVIEW_CARDS.map((card) => {
            const IconComponent = iconMap[card.iconName] || Sparkles;
            return (
              <div
                key={card.id}
                className="group relative rounded-2xl border border-blue-900/40 bg-[#07132a]/80 hover:bg-[#0a1a3a] hover:border-sky-400/50 p-5 sm:p-6 transition-all duration-300 backdrop-blur-md shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-blue-950/50 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Subtle top card glow on hover */}
                <div 
                  aria-hidden="true" 
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                />

                <div className="space-y-3.5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600/20 to-sky-500/20 border border-blue-400/30 flex items-center justify-center text-sky-400 group-hover:scale-105 group-hover:bg-blue-600/35 group-hover:text-white transition-all shadow-sm">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-sky-200 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-blue-900/40 flex items-center gap-1.5 text-xs text-sky-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Core Feature</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Link */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={onApplyClick}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md shadow-blue-600/30 hover:shadow-sky-400/40 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050B17]"
          >
            <span>Apply for the Generative AI Course</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
