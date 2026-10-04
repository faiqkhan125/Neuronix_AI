import React from 'react';
import { Brain, Cpu, Sparkles, Network, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface BrandIntroProps {
  onApplyClick: () => void;
}

export const BrandIntro: React.FC<BrandIntroProps> = ({ onApplyClick }) => {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section 
      id="brand-intro"
      ref={revealRef}
      className="py-18 sm:py-22 lg:py-26 relative bg-[#040816] border-t border-b border-blue-900/30 overflow-hidden neural-grid-subtle reveal-fade-up"
    >
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-10 w-[500px] h-[500px] max-w-[80vw] rounded-full radial-glow-blue pointer-events-none opacity-25 blur-3xl" 
      />
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 right-10 w-[450px] h-[450px] max-w-[80vw] rounded-full radial-glow-indigo pointer-events-none opacity-20 blur-3xl" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Brand Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-xs font-semibold tracking-wider text-sky-300 uppercase shadow-sm">
              <Brain className="w-3.5 h-3.5 text-sky-400" />
              <span>About The Platform</span>
              <span aria-hidden="true">·</span>
              <span>Neuronix AI</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Welcome to Neuronix AI
            </h2>

            <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
              Neuronix AI is focused on helping students and aspiring AI builders explore modern Artificial Intelligence through practical learning, experimentation and real-world applications.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onApplyClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 hover:from-blue-500 hover:via-sky-400 hover:to-indigo-500 shadow-xl shadow-blue-500/25 hover:shadow-blue-400/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer group focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050B17]"
              >
                <span>Apply Now →</span>
              </button>
            </div>
          </div>

          {/* Right Column: Futuristic Abstract AI Visual (No stock photography) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Glowing Aura Ring */}
              <div 
                aria-hidden="true" 
                className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-600/25 via-sky-500/20 to-indigo-600/25 blur-2xl animate-pulse-soft pointer-events-none" 
              />

              {/* Main Futuristic Abstract Card */}
              <div className="relative rounded-3xl border border-blue-500/35 bg-[#07132a]/90 backdrop-blur-xl p-6 sm:p-8 shadow-2xl shadow-blue-950/80 overflow-hidden space-y-6">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between border-b border-blue-900/40 pb-4">
                  <div className="flex items-center gap-2.5">
                    <img
                      src="/neuronix_logo.png"
                      alt="Neuronix AI"
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-lg object-contain shadow-md shadow-blue-600/30"
                    />
                    <div>
                      <p className="text-xs font-bold text-white font-mono">NEURONIX // CORE</p>
                      <p className="text-[10px] text-sky-400 font-mono">AI LEARNING SYSTEM</p>
                    </div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400" />
                </div>

                {/* Abstract Interactive Neural Geometry (SVG Graphic) */}
                <div className="relative h-44 sm:h-52 w-full rounded-2xl bg-[#040c1e] border border-blue-900/50 flex items-center justify-center overflow-hidden">
                  {/* Subtle Grid in Core */}
                  <div className="absolute inset-0 tech-dot-matrix opacity-40" />

                  {/* Concentric Orbital Rings */}
                  <div className="absolute w-36 h-36 rounded-full border border-blue-500/20 animate-pulse-soft" />
                  <div className="absolute w-24 h-24 rounded-full border border-sky-400/30" />
                  <div className="absolute w-12 h-12 rounded-full bg-blue-600/25 border border-sky-400/60 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-sky-300 animate-pulse" />
                  </div>

                  {/* SVG Nodes & Lines */}
                  <svg 
                    aria-hidden="true" 
                    className="absolute inset-0 w-full h-full text-blue-400/30 pointer-events-none" 
                    viewBox="0 0 300 200" 
                    fill="none"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <line x1="60" y1="50" x2="150" y2="100" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
                    <line x1="240" y1="60" x2="150" y2="100" stroke="currentColor" strokeWidth="1.2" />
                    <line x1="80" y1="160" x2="150" y2="100" stroke="currentColor" strokeWidth="1.2" />
                    <line x1="220" y1="150" x2="150" y2="100" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" />

                    <circle cx="60" cy="50" r="4.5" fill="#38bdf8" />
                    <circle cx="240" cy="60" r="4.5" fill="#60a5fa" />
                    <circle cx="80" cy="160" r="4" fill="#818cf8" />
                    <circle cx="220" cy="150" r="4" fill="#38bdf8" />
                  </svg>
                </div>

                {/* Abstract Metric Tags */}
                <div className="grid grid-cols-2 gap-3 text-left">
                  <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-900/40">
                    <p className="text-[10px] text-slate-400 font-mono uppercase">Focus</p>
                    <p className="text-xs font-semibold text-white mt-0.5">Practical Learning</p>
                  </div>
                  <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-900/40">
                    <p className="text-[10px] text-slate-400 font-mono uppercase">Methodology</p>
                    <p className="text-xs font-semibold text-sky-300 mt-0.5">Real-World Projects</p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
