import React from 'react';
import { LEARNER_PROFILES } from '../data/courseData';
import { 
  GraduationCap, 
  Compass, 
  Code, 
  Palette, 
  Rocket, 
  Sparkles, 
  CheckCircle2, 
  UserCheck, 
  HelpCircle, 
  ArrowRight 
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface WhoIsThisForProps {
  onApplyClick: () => void;
}

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  Compass,
  Code,
  Palette,
  Rocket,
  Sparkles
};

export const WhoIsThisFor: React.FC<WhoIsThisForProps> = ({ onApplyClick }) => {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section 
      id="who-its-for" 
      ref={revealRef}
      className="py-20 sm:py-24 lg:py-28 relative bg-[#040816] overflow-hidden neural-grid-subtle reveal-fade-up border-t border-blue-900/30"
    >
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] max-w-[80vw] rounded-full radial-glow-blue pointer-events-none opacity-25 blur-3xl" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-xs font-semibold tracking-wider text-blue-300 uppercase shadow-sm">
            <UserCheck className="w-3.5 h-3.5 text-blue-400" />
            <span>Target Learners</span>
            <span aria-hidden="true">·</span>
            <span>Neuronix AI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Who Is This Course For?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">
            Anyone interested in learning Generative AI can start here. Whether you are curious or looking to build projects, you will feel right at home.
          </p>
        </div>

        {/* 6 Learner Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {LEARNER_PROFILES.map((profile) => {
            const IconComponent = iconMap[profile.iconName] || Sparkles;
            return (
              <article
                key={profile.id}
                className="group rounded-2xl border border-blue-900/40 bg-[#07132a]/80 hover:bg-[#0a1a3a] hover:border-sky-400/50 p-6 sm:p-7 transition-all duration-300 backdrop-blur-md shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-blue-950/60 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600/20 to-sky-500/20 border border-blue-400/30 flex items-center justify-center text-sky-400 group-hover:scale-105 group-hover:bg-blue-600/35 group-hover:text-white transition-all shadow-sm">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-sky-300 px-2.5 py-1 rounded-md bg-blue-950/90 border border-blue-800/60 font-mono">
                      {profile.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-sky-200 transition-colors">
                    {profile.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {profile.description}
                  </p>

                  {/* Bullet Benefits */}
                  <div className="pt-2 space-y-2 border-t border-blue-900/40">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-sky-400/90 font-mono">
                      Key Outcomes:
                    </p>
                    {profile.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="mt-6 pt-4 border-t border-blue-900/40 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Live Guided Cohort</span>
                  <span className="text-sky-300 font-medium flex items-center gap-1 font-mono text-[11px]">
                    <span>Cohort Profile</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Clear Notice: Prior Advanced Knowledge NOT Required */}
        <div className="mt-12 sm:mt-16 rounded-2xl border border-blue-500/40 bg-gradient-to-r from-blue-950/70 via-[#0a1838]/85 to-indigo-950/70 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-950/40">
          <div className="flex items-start gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-sky-500/20 border border-blue-400/40 flex items-center justify-center text-sky-400 shrink-0 mt-0.5 shadow-sm">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Beginner-Friendly Guarantee</span>
              </div>
              <h4 className="text-lg font-bold text-white">
                No Prior Advanced AI Knowledge Required
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                You do not need a machine learning degree, advanced math, or complex algorithms to get started. All concepts and tools are taught step-by-step from the very basics with clear examples.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onApplyClick}
            className="shrink-0 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050B17]"
          >
            <span>Apply for the Course</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
