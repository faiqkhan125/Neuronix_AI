import React from 'react';
import { COURSE_EXPERIENCE_STEPS } from '../data/courseData';
import { 
  BookOpen, 
  Compass, 
  Terminal, 
  Hammer, 
  TrendingUp, 
  Sparkles,
  ArrowRight,
  Workflow
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface CourseExperienceProps {
  onApplyClick: () => void;
}

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  Compass,
  Terminal,
  Hammer,
  TrendingUp
};

export const CourseExperience: React.FC<CourseExperienceProps> = ({ onApplyClick }) => {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section 
      id="course-experience" 
      ref={revealRef}
      className="py-20 sm:py-24 lg:py-28 relative bg-[#050c1e] border-t border-b border-blue-900/30 overflow-hidden neural-grid-subtle reveal-fade-up"
    >
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] max-w-[85vw] rounded-full radial-glow-blue pointer-events-none opacity-30 blur-3xl" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-xs font-semibold tracking-wider text-sky-300 uppercase shadow-sm">
            <Workflow className="w-3.5 h-3.5 text-sky-400" />
            <span>Process & Methodology</span>
            <span aria-hidden="true">·</span>
            <span>Neuronix AI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Course Experience
          </h2>
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">
            A structured, hands-on learning progression designed to take you from foundational intuition to building real AI applications.
          </p>
        </div>

        {/* Process Steps: Connected Horizontal on Desktop / Clean Vertical on Mobile */}
        <div className="relative">
          
          {/* Desktop Connecting Line */}
          <div 
            aria-hidden="true" 
            className="hidden lg:block absolute top-[2.75rem] left-12 right-12 h-0.5 bg-gradient-to-r from-blue-600/30 via-sky-400/50 to-indigo-600/30 pointer-events-none z-0" 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-6 relative z-10">
            {COURSE_EXPERIENCE_STEPS.map((step, idx) => {
              const IconComponent = iconMap[step.iconName] || Sparkles;
              return (
                <div
                  key={step.number}
                  className="group relative rounded-2xl border border-blue-900/40 bg-[#07132a]/85 hover:bg-[#0a1b3c] hover:border-sky-400/50 p-6 transition-all duration-300 backdrop-blur-md shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-blue-950/60 hover:-translate-y-1.5 flex flex-col justify-between"
                >
                  {/* Subtle Top Border Glow */}
                  <div 
                    aria-hidden="true" 
                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                  />

                  <div className="space-y-4">
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-sky-500/20 border border-blue-400/30 flex items-center justify-center text-sky-400 group-hover:scale-110 group-hover:bg-blue-600/35 group-hover:text-white transition-all shadow-sm">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-blue-950/90 border border-blue-700/50 text-sky-300 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-sky-500 group-hover:text-white transition-all">
                        {step.number}
                      </span>
                    </div>

                    {/* Step Title */}
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-sky-200 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs font-semibold text-sky-400/90 font-mono mt-0.5">
                        Stage {step.number}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom Milestone */}
                  <div className="mt-6 pt-3.5 border-t border-blue-900/40 flex items-center justify-between text-xs text-slate-400">
                    <span className="text-sky-300 font-medium">Progression</span>
                    <span className="font-mono text-slate-500 group-hover:text-slate-300">
                      Step {idx + 1}/5
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-12 sm:mt-16 text-center">
          <button
            type="button"
            onClick={onApplyClick}
            className="inline-flex items-center gap-2 px-8 py-3.5 sm:py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-blue-500/25 hover:shadow-blue-400/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer group focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050B17]"
          >
            <span>Experience the Course — Apply Now</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
