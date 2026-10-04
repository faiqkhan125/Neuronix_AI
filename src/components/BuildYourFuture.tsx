import React from 'react';
import { ArrowRight, Sparkles, Terminal, Code2, Layers, Cpu, Network } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface BuildYourFutureProps {
  onApplyClick: () => void;
}

export const BuildYourFuture: React.FC<BuildYourFutureProps> = ({ onApplyClick }) => {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section 
      id="build-future"
      ref={revealRef}
      className="py-20 sm:py-24 lg:py-28 relative bg-[#040814] border-t border-b border-blue-900/30 overflow-hidden neural-grid reveal-fade-up"
    >
      {/* Dynamic Glowing Ambient Aura */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] max-w-[90vw] rounded-full radial-glow-blue pointer-events-none opacity-80 blur-3xl" 
      />
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 right-10 w-[450px] h-[450px] max-w-[80vw] rounded-full radial-glow-indigo pointer-events-none opacity-60 blur-3xl" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading and Motivation */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-xs font-semibold tracking-wider text-sky-300 uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>Next Generation Learning</span>
              <span aria-hidden="true">·</span>
              <span>Neuronix AI</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Build Your Future With AI
            </h2>

            <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed font-normal max-w-xl mx-auto lg:mx-0">
              Generative AI is changing how people learn, create, automate and build. Start understanding the technology and discover what you can create with it.
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

          {/* Right Column: Prominent Animated Visual (Neural network, AI nodes, connected particles) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Animated Floating Particles */}
              <div aria-hidden="true" className="absolute -inset-4 pointer-events-none">
                <div className="absolute top-4 left-8 w-2 h-2 rounded-full bg-sky-400/60 animate-particle-1 blur-[0.5px]" />
                <div className="absolute bottom-8 right-12 w-2.5 h-2.5 rounded-full bg-blue-400/60 animate-particle-2 blur-[0.5px]" />
                <div className="absolute top-1/2 left-2 w-1.5 h-1.5 rounded-full bg-indigo-300/60 animate-particle-3 blur-[0.5px]" />
              </div>

              {/* Main Futuristic Glass Card */}
              <div className="relative rounded-3xl border border-blue-500/40 bg-[#07132a]/92 backdrop-blur-xl p-6 sm:p-8 shadow-2xl shadow-blue-950/80 overflow-hidden space-y-6">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between border-b border-blue-900/40 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-sky-400">
                      <Network className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white font-mono">NEURAL PIPELINE</p>
                      <p className="text-[10px] text-sky-400 font-mono">PROMPT & AGENT ARCHITECTURE</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 bg-blue-950/80 px-2.5 py-1 rounded-full border border-blue-800/40 text-[10px] font-mono text-sky-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>SYNCHRONIZED</span>
                  </div>
                </div>

                {/* Animated Interactive SVG Mesh */}
                <div className="relative h-52 sm:h-60 w-full rounded-2xl bg-[#030914] border border-blue-900/60 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 neural-grid opacity-30" />

                  {/* Connected Synaptic Constellation */}
                  <svg 
                    aria-hidden="true" 
                    className="absolute inset-0 w-full h-full text-blue-400/35 pointer-events-none" 
                    viewBox="0 0 400 240" 
                    fill="none"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    {/* Interconnecting pathways */}
                    <line x1="60" y1="60" x2="140" y2="120" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                    <line x1="140" y1="120" x2="200" y2="70" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="200" y1="70" x2="280" y2="130" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="280" y1="130" x2="340" y2="80" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
                    <line x1="140" y1="120" x2="200" y2="180" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="200" y1="180" x2="280" y2="130" stroke="currentColor" strokeWidth="1.5" />

                    {/* Nodes with glowing centers */}
                    <circle cx="60" cy="60" r="5" fill="#38bdf8" />
                    <circle cx="140" cy="120" r="6" fill="#60a5fa" />
                    <circle cx="200" cy="70" r="5" fill="#818cf8" />
                    <circle cx="280" cy="130" r="6" fill="#38bdf8" />
                    <circle cx="340" cy="80" r="5" fill="#60a5fa" />
                    <circle cx="200" cy="180" r="5" fill="#38bdf8" />
                  </svg>

                  {/* Central Node Badge */}
                  <div className="relative z-10 px-4 py-2 rounded-xl bg-blue-950/90 border border-sky-400/40 shadow-xl shadow-blue-950 text-center backdrop-blur-md">
                    <p className="text-[10px] uppercase font-bold tracking-wider text-sky-400 font-mono">Modern Stack</p>
                    <p className="text-xs font-bold text-white">LLMs · Prompts · Agents</p>
                  </div>
                </div>

                {/* 3 Step Micro Badges */}
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2.5 rounded-xl bg-blue-950/40 border border-blue-900/40">
                    <p className="font-semibold text-white">Learn</p>
                    <p className="text-[10px] text-sky-400">Foundations</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-blue-950/40 border border-blue-900/40">
                    <p className="font-semibold text-white">Build</p>
                    <p className="text-[10px] text-blue-400">AI Projects</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-blue-950/40 border border-blue-900/40">
                    <p className="font-semibold text-white">Grow</p>
                    <p className="text-[10px] text-emerald-400">Future Ready</p>
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
