import React from 'react';
import { LEARNING_JOURNEY } from '../data/courseData';
import { 
  Compass, 
  Sparkles, 
  MessageSquareCode, 
  Wrench, 
  Code2, 
  Rocket, 
  ArrowRight,
  TrendingUp,
  CheckCircle2
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface LearningJourneyProps {
  onApplyClick: () => void;
}

const iconMap: Record<string, React.ElementType> = {
  Compass,
  Sparkles,
  MessageSquareCode,
  Wrench,
  Code2,
  Rocket
};

export const LearningJourney: React.FC<LearningJourneyProps> = ({ onApplyClick }) => {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section 
      id="journey" 
      ref={revealRef}
      className="py-20 sm:py-24 lg:py-28 relative bg-[#040916] border-t border-b border-blue-900/30 overflow-hidden reveal-fade-up"
    >
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] max-w-[80vw] rounded-full radial-glow-blue pointer-events-none opacity-30 blur-3xl" 
      />
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 right-10 w-[450px] h-[450px] max-w-[80vw] rounded-full radial-glow-indigo pointer-events-none opacity-20 blur-3xl" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 sm:mb-18 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-xs font-semibold tracking-wider text-blue-300 uppercase shadow-sm">
            <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
            <span>Learning Roadmap</span>
            <span aria-hidden="true">·</span>
            <span>Neuronix AI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            From Beginner to AI Builder
          </h2>
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">
            A clear, structured learning journey designed so anyone can progress from basic curiosity to creating and deploying intelligent AI systems.
          </p>
        </div>

        {/* Connected Journey: Responsive timeline */}
        <div className="relative">
          
          {/* Desktop Connecting Line (Row 1 & Row 2 tracks) */}
          <div 
            aria-hidden="true"
            className="hidden lg:block absolute top-[28%] left-10 right-10 h-0.5 bg-gradient-to-r from-blue-600/30 via-sky-400/50 to-indigo-600/30 pointer-events-none z-0" 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 relative z-10">
            {LEARNING_JOURNEY.map((item, index) => {
              const IconComponent = iconMap[item.iconName] || Sparkles;
              return (
                <div
                  key={item.step}
                  className="group relative rounded-2xl border border-blue-900/40 bg-[#07132a]/80 hover:bg-[#0a1a3a] hover:border-sky-400/50 p-6 sm:p-7 transition-all duration-300 backdrop-blur-md shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-blue-950/60 hover:-translate-y-1.5 flex flex-col justify-between"
                >
                  {/* Subtle Top Border Glow */}
                  <div 
                    aria-hidden="true" 
                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                  />

                  <div className="space-y-4">
                    {/* Step Badge & Icon */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-blue-950/90 border border-blue-700/50 text-sky-300 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-sky-500 group-hover:text-white transition-all shadow-sm">
                        {item.step}
                      </span>
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600/20 to-sky-500/20 border border-blue-400/30 flex items-center justify-center text-sky-400 group-hover:scale-110 group-hover:bg-blue-600/35 group-hover:text-white transition-all shadow-sm">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Step Title & Subtitle */}
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-sky-200 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs font-semibold text-sky-400/90 font-mono mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Step Description */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Skill Tags */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {item.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[#040d1c] border border-blue-900/50 text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Step Completed Indicator */}
                  <div className="mt-6 pt-4 border-t border-blue-900/40 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 text-sky-300 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Phase 0{index + 1} Milestone</span>
                    </span>
                    <span className="font-mono text-slate-500 group-hover:text-slate-300">
                      Step 0{index + 1}/06
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Journey Bottom Action */}
        <div className="mt-12 sm:mt-16 text-center">
          <button
            type="button"
            onClick={onApplyClick}
            className="inline-flex items-center gap-2 px-8 py-3.5 sm:py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-blue-500/25 hover:shadow-blue-400/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer group focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050B17]"
          >
            <span>Start Your Learning Journey</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
