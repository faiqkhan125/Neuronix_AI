import React from 'react';
import { ArrowRight, Video, Sparkles, CheckCircle2, Laptop } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface CallToActionProps {
  onApplyClick: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onApplyClick }) => {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section 
      id="cta"
      ref={revealRef}
      className="py-20 sm:py-24 lg:py-28 relative bg-[#040814] overflow-hidden neural-grid reveal-fade-up"
    >
      {/* Centered glowing aura */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] max-w-[90vw] rounded-full radial-glow-blue pointer-events-none opacity-85 blur-3xl" 
      />
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] max-w-[80vw] rounded-full radial-glow-indigo pointer-events-none opacity-60 blur-3xl" 
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="rounded-3xl border border-blue-500/40 bg-gradient-to-b from-[#0a1a3d]/90 via-[#07132c]/95 to-[#040c1e]/98 backdrop-blur-2xl p-8 sm:p-12 lg:p-16 text-center space-y-7 sm:space-y-8 shadow-2xl shadow-blue-950/80 relative overflow-hidden">
          
          {/* Top Edge Laser Highlight */}
          <div 
            aria-hidden="true" 
            className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent" 
          />

          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-xs font-semibold tracking-wider text-sky-300 uppercase shadow-sm">
            <img
              src="/neuronix_logo.png"
              alt="Neuronix AI"
              width={16}
              height={16}
              className="w-4 h-4 rounded-sm object-contain"
            />
            <span>Neuronix AI · Generative AI Course</span>
          </div>

          {/* Headline Requested: "Your AI Journey Starts Here." */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Your AI Journey Starts Here.
          </h2>

          {/* Supporting Text Requested: "Learn the fundamentals of Generative AI, explore modern AI tools, and start building with AI." */}
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Learn the fundamentals of Generative AI, explore modern AI tools, and start building with AI.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-300 font-medium">
            <span className="flex items-center gap-1.5 text-sky-300">
              <Video className="w-4 h-4 text-sky-400" />
              Live Online (Google Meet & Zoom)
            </span>
            <span className="text-slate-600 hidden sm:inline" aria-hidden="true">·</span>
            <span className="flex items-center gap-1.5">
              <Laptop className="w-4 h-4 text-sky-400" />
              Practical AI Learning
            </span>
            <span className="text-slate-600 hidden sm:inline" aria-hidden="true">·</span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Beginner Friendly
            </span>
          </div>

          {/* Prominent CTA Button: "Apply Now →" */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3 sm:pt-4">
            <button
              type="button"
              onClick={onApplyClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 hover:from-blue-500 hover:via-sky-400 hover:to-indigo-500 shadow-xl shadow-blue-500/25 hover:shadow-blue-400/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer group focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050B17]"
            >
              <span>Apply Now →</span>
            </button>
          </div>

          {/* Bottom Notice */}
          <p className="text-xs text-slate-400 flex items-center justify-center gap-2 pt-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Interactive online cohort conducted live through Google Meet & Zoom.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
