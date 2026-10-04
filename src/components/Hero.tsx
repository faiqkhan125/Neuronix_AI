import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ChevronDown, 
  Video, 
  Terminal, 
  Cpu, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  Code2, 
  Laptop,
  Activity,
  Zap,
  Network
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface HeroProps {
  onApplyClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onApplyClick, onExploreClick }) => {
  const [activeTab, setActiveTab] = useState<'prompt' | 'agent' | 'app'>('prompt');
  const [streamedText, setStreamedText] = useState('');
  const revealRef = useScrollReveal<HTMLDivElement>();

  const demos = {
    prompt: {
      title: 'Practical Prompt Engineering Lab',
      code: `# Live Classroom Demo: Google Meet & Zoom
from neuronix import PromptEngine, SystemTemplate

# Beginner-friendly structured prompting
prompt = PromptEngine.create(
    system="You are an expert AI Assistant specialized in helpful answers.",
    task="Analyze customer feedback & extract sentiment into clean JSON",
    guardrails=True
)

response = prompt.generate_structured_output(data=user_input)
# Result: Instant, validated response ready for real-world apps`,
      metric: 'Live Google Meet Session · 100% Practical'
    },
    agent: {
      title: 'Autonomous AI Agent Workflow',
      code: `# Live Code-Along: Autonomous AI Agents
from neuronix.agents import AutonomousAgent, SearchTool, Calculator

agent = AutonomousAgent(
    role="Research Assistant",
    goal="Search real-time data, synthesize answers & automate tasks",
    tools=[SearchTool(), Calculator()]
)

# The agent plans, calls tools, and solves multi-step goals
result = agent.execute("Analyze tech trends in Generative AI for 2026")`,
      metric: 'Autonomous Multi-Tool Agent · Zero Setup Friction'
    },
    app: {
      title: 'Real-World AI Application Build',
      code: `# Student Capstone: Full AI Application
import { NeuronixClient } from '@neuronix/ai';

const ai = new NeuronixClient();

export async function generateAIPoweredInsight(userInput) {
  // Direct API call to state-of-the-art LLMs
  const stream = await ai.models.stream({
    model: 'gemini-pro',
    prompt: userInput,
  });
  return stream; // Live interactive AI app!
}`,
      metric: 'Production-Ready App · Beginner to Builder'
    }
  };

  useEffect(() => {
    const target = demos[activeTab].code;
    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion || (typeof document !== 'undefined' && document.hidden)) {
      setStreamedText(target);
      return;
    }

    let index = 0;
    setStreamedText('');
    const timer = setInterval(() => {
      index += 4;
      if (index >= target.length) {
        setStreamedText(target);
        clearInterval(timer);
      } else {
        setStreamedText(target.slice(0, index));
      }
    }, 16); // 60fps cadence for smooth GPU-friendly rendering
    return () => clearInterval(timer);
  }, [activeTab]);

  return (
    <section 
      id="hero" 
      ref={revealRef}
      className="relative pt-8 pb-20 sm:pt-12 sm:pb-24 lg:pt-16 lg:pb-32 overflow-hidden neural-grid reveal-fade-up"
    >
      {/* Dynamic Ambient Glowing Gradient Orbs */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] max-w-[90vw] rounded-full radial-glow-blue pointer-events-none opacity-85 blur-2xl" 
      />
      <div 
        aria-hidden="true" 
        className="absolute top-12 right-6 sm:right-16 w-[480px] h-[480px] max-w-[80vw] rounded-full radial-glow-indigo pointer-events-none opacity-70 blur-3xl" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-6 left-10 w-[380px] h-[380px] rounded-full radial-glow-cyan pointer-events-none opacity-40 blur-3xl" 
      />

      {/* Floating Animated Particles */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-[15%] w-2 h-2 rounded-full bg-sky-400/40 animate-particle-1 blur-[0.5px]" />
        <div className="absolute top-44 right-[25%] w-2.5 h-2.5 rounded-full bg-blue-400/50 animate-particle-2 blur-[0.5px]" />
        <div className="absolute bottom-32 left-[30%] w-1.5 h-1.5 rounded-full bg-indigo-300/40 animate-particle-3 blur-[0.5px]" />
        <div className="absolute top-1/2 right-[10%] w-2 h-2 rounded-full bg-cyan-300/40 animate-particle-1 blur-[0.5px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-center lg:text-left">
            
            {/* Visual Badge Requested: "🚀 Generative AI Course" */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-950/90 via-[#0c1e42]/90 to-indigo-950/90 border border-blue-400/35 text-blue-200 text-xs sm:text-sm font-semibold shadow-lg shadow-blue-950/50 backdrop-blur-md hover:border-blue-400/60 transition-colors">
              <span className="text-base" role="img" aria-label="rocket">🚀</span>
              <span className="tracking-wide text-white">Generative AI Course</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400" />
            </div>

            {/* Main Headline Requested: "Learn Generative AI. Build the Future." */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              <span className="sr-only">Generative AI Course · </span>
              Learn Generative AI.{' '}
              <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                Build the Future.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Neuronix AI offers a practical online Generative AI course where students learn modern AI concepts and tools through live sessions. Master foundation models, prompt engineering, chatbots, and AI agents through a guided, step-by-step curriculum.
            </p>

            {/* Highlighted Mentions: Live online classes, Google Meet / Zoom, Practical learning, Beginner-friendly approach, Real-world AI applications */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-1 text-left">
              <div className="flex items-center gap-2 p-2.5 sm:p-3 rounded-xl bg-blue-950/50 border border-blue-900/40 hover:border-blue-600/40 transition-colors">
                <Video className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-xs font-medium text-slate-200">Live Online Classes</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 sm:p-3 rounded-xl bg-blue-950/50 border border-blue-900/40 hover:border-sky-500/40 transition-colors">
                <Laptop className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="text-xs font-medium text-slate-200">Google Meet / Zoom</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 sm:p-3 rounded-xl bg-blue-950/50 border border-blue-900/40 hover:border-emerald-500/40 transition-colors">
                <Code2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-medium text-slate-200">Practical Learning</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 sm:p-3 rounded-xl bg-blue-950/50 border border-blue-900/40 hover:border-amber-500/40 transition-colors">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs font-medium text-slate-200">Beginner-Friendly</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 sm:p-3 rounded-xl bg-blue-950/50 border border-blue-900/40 hover:border-indigo-500/40 transition-colors col-span-2 sm:col-span-2">
                <Layers className="w-4 h-4 text-indigo-400 shrink-0" />
                <span className="text-xs font-medium text-slate-200">Real-World AI Applications</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <button
                type="button"
                onClick={onApplyClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 hover:from-blue-500 hover:via-sky-400 hover:to-indigo-500 shadow-xl shadow-blue-500/25 hover:shadow-blue-400/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer group focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050B17]"
              >
                <span>Apply Now →</span>
              </button>

              <button
                type="button"
                onClick={onExploreClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:py-4 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-blue-900/60 hover:border-blue-500/50 shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050B17]"
              >
                <span>Explore Course</span>
                <ChevronDown className="w-4 h-4 text-blue-400" />
              </button>
            </div>

            {/* Proof Subtext */}
            <div className="pt-1 text-xs text-slate-400 flex items-center justify-center lg:justify-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>No prior advanced AI knowledge required. Designed for ambitious learners.</span>
            </div>
          </div>

          {/* Right Column: Premium Futuristic AI Visual */}
          <div className="lg:col-span-5 relative">
            
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Abstract Neural Network Connection Web (SVG Graphic) */}
              <svg 
                aria-hidden="true"
                className="absolute -top-14 -right-10 w-72 h-72 text-blue-500/25 pointer-events-none select-none" 
                viewBox="0 0 200 200" 
                fill="none"
              >
                {/* Connecting lines */}
                <line x1="30" y1="40" x2="100" y2="80" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="100" y1="80" x2="160" y2="50" stroke="currentColor" strokeWidth="1" />
                <line x1="100" y1="80" x2="110" y2="150" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="160" y1="50" x2="175" y2="130" stroke="currentColor" strokeWidth="1" />
                <line x1="110" y1="150" x2="175" y2="130" stroke="currentColor" strokeWidth="1" />
                {/* Interconnected Synaptic Nodes */}
                <circle cx="30" cy="40" r="4" fill="#38bdf8" className="animate-pulse-glow" />
                <circle cx="100" cy="80" r="5" fill="#60a5fa" />
                <circle cx="160" cy="50" r="4" fill="#818cf8" />
                <circle cx="110" cy="150" r="3.5" fill="#38bdf8" />
                <circle cx="175" cy="130" r="4" fill="#60a5fa" />
              </svg>

              {/* Glowing Aura Ring */}
              <div 
                aria-hidden="true" 
                className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-blue-600/20 via-sky-500/20 to-indigo-600/20 blur-xl animate-pulse-soft pointer-events-none" 
              />

              {/* Floating Glassmorphism Card 1: Live Class Format (Top-Left) */}
              <div className="absolute -top-5 left-1 sm:-left-6 z-20 flex items-center gap-2.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-[#09152e]/95 border border-blue-400/35 shadow-xl shadow-black/50 backdrop-blur-md animate-float-slow">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400" />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold tracking-wider text-blue-300">Live Format</p>
                  <p className="text-xs font-semibold text-white flex items-center gap-1">
                    Google Meet & Zoom
                  </p>
                </div>
              </div>

              {/* Floating Glassmorphism Card 2: Live Interactive Lab (Top-Right) */}
              <div className="absolute -top-6 -right-2 sm:-right-4 z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#07132a]/90 border border-sky-400/35 shadow-lg shadow-black/40 backdrop-blur-md animate-float-reverse">
                <Network className="w-3.5 h-3.5 text-sky-400" />
                <span className="text-[11px] font-mono text-sky-200">Live Code-Along</span>
              </div>

              {/* Floating Glassmorphism Card 3: Capstone Outcome (Bottom-Right) */}
              <div className="absolute -bottom-5 right-1 sm:-right-6 z-20 flex items-center gap-2.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-[#09152e]/95 border border-indigo-400/35 shadow-xl shadow-black/50 backdrop-blur-md animate-float-reverse">
                <div className="w-7 h-7 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold tracking-wider text-indigo-300">Curriculum Goal</p>
                  <p className="text-xs font-semibold text-white">Practical AI Projects</p>
                </div>
              </div>

              {/* Main Futuristic Console IDE Glass Card */}
              <div className="relative rounded-2xl border border-blue-500/40 bg-[#071124]/92 backdrop-blur-xl shadow-2xl shadow-blue-950/80 overflow-hidden">
                
                {/* Console Header Bar */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-blue-900/40 bg-[#0a1835]/80">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono text-slate-300 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-blue-400" />
                      neuronix-genai-lab.py
                    </span>
                  </div>

                  <div className="text-[11px] font-mono text-blue-400 flex items-center gap-1.5 bg-blue-950/90 px-2 py-0.5 rounded border border-blue-800/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>LIVE_COHORT</span>
                  </div>
                </div>

                {/* Interactive Concept Selector Tabs */}
                <div className="flex items-center gap-1.5 px-3 py-2 bg-[#050e1d]/90 border-b border-blue-900/30 overflow-x-auto no-scrollbar text-xs">
                  <button
                    type="button"
                    onClick={() => setActiveTab('prompt')}
                    className={`min-h-[38px] px-3.5 py-2 rounded-lg font-medium transition-all cursor-pointer whitespace-nowrap focus-visible:ring-1 focus-visible:ring-blue-400 ${
                      activeTab === 'prompt'
                        ? 'bg-blue-600/30 text-blue-300 border border-blue-500/40'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Prompting Lab
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('agent')}
                    className={`min-h-[38px] px-3.5 py-2 rounded-lg font-medium transition-all cursor-pointer whitespace-nowrap focus-visible:ring-1 focus-visible:ring-blue-400 ${
                      activeTab === 'agent'
                        ? 'bg-blue-600/30 text-blue-300 border border-blue-500/40'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Autonomous Agents
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('app')}
                    className={`min-h-[38px] px-3.5 py-2 rounded-lg font-medium transition-all cursor-pointer whitespace-nowrap focus-visible:ring-1 focus-visible:ring-blue-400 ${
                      activeTab === 'app'
                        ? 'bg-blue-600/30 text-blue-300 border border-blue-500/40'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    AI Web App
                  </button>
                </div>

                {/* Code Body with real-time stream simulation */}
                <div className="p-4 sm:p-5 font-mono text-xs text-slate-200 leading-relaxed overflow-x-auto min-h-[220px] bg-[#030914]/90 relative">
                  {/* Subtle code scan line effect */}
                  <div 
                    aria-hidden="true" 
                    className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-blue-400/25 to-transparent animate-beam-scan pointer-events-none" 
                  />

                  <pre className="text-slate-300">
                    <code>{streamedText}</code>
                    <span className="inline-block w-2 h-4 ml-1 bg-blue-400 animate-pulse align-middle" />
                  </pre>
                </div>

                {/* Telemetry Footer */}
                <div className="px-4 py-2.5 bg-[#09152b] border-t border-blue-900/30 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-1.5 text-blue-300">
                    <Cpu className="w-3.5 h-3.5 text-blue-400" />
                    <span>{demos[activeTab].metric}</span>
                  </div>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <Zap className="w-3 h-3 text-emerald-400" />
                    INTERACTIVE
                  </span>
                </div>
              </div>

              {/* Decorative Outer Rings */}
              <div 
                aria-hidden="true" 
                className="absolute -inset-4 -z-10 rounded-3xl border border-blue-500/15 pointer-events-none animate-pulse-soft" 
              />
              <div 
                aria-hidden="true" 
                className="absolute -inset-8 -z-10 rounded-3xl border border-indigo-500/10 pointer-events-none" 
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
