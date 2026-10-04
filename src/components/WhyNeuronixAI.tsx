import React from 'react';
import { Cpu, Wrench, Layers, Sparkles, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface WhyNeuronixAIProps {
  onApplyClick: () => void;
}

export const WhyNeuronixAI: React.FC<WhyNeuronixAIProps> = ({ onApplyClick }) => {
  const revealRef = useScrollReveal<HTMLDivElement>();

  const cards = [
    {
      number: '01',
      title: 'Practical AI Learning',
      description: 'Focus on understanding and applying Generative AI concepts.',
      icon: Cpu,
      tag: 'Hands-On'
    },
    {
      number: '02',
      title: 'Modern AI Skills',
      description: 'Explore modern Generative AI tools, techniques and workflows.',
      icon: Wrench,
      tag: 'Modern Tools'
    },
    {
      number: '03',
      title: 'Project-Oriented Learning',
      description: 'Understand how Generative AI can be used to create practical AI-powered solutions.',
      icon: Layers,
      tag: 'Real Projects'
    },
    {
      number: '04',
      title: 'Beginner Friendly',
      description: 'Learn Generative AI concepts in a clear and approachable way.',
      icon: Sparkles,
      tag: 'Zero Friction'
    }
  ];

  return (
    <section 
      id="why-neuronix"
      ref={revealRef}
      className="py-20 sm:py-24 lg:py-28 relative bg-[#050c1e] border-t border-b border-blue-900/30 overflow-hidden tech-dot-matrix reveal-fade-up"
    >
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 right-0 w-[500px] h-[500px] max-w-[80vw] rounded-full radial-glow-blue pointer-events-none opacity-25 blur-3xl" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-10 left-10 w-[450px] h-[450px] max-w-[80vw] rounded-full radial-glow-indigo pointer-events-none opacity-20 blur-3xl" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-xs font-semibold tracking-wider text-sky-300 uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Neuronix AI Difference</span>
            <span aria-hidden="true">·</span>
            <span>Generative AI Course</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Learn With Neuronix AI?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">
            Designed to bridge the gap between AI theory and real-world application through guided, interactive learning.
          </p>
        </div>

        {/* 4 Modern Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.number}
                className="group relative rounded-2xl border border-blue-900/40 bg-[#07132a]/85 hover:bg-[#0a1a3a] hover:border-sky-400/50 p-6 sm:p-7 transition-all duration-300 backdrop-blur-md shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-blue-950/60 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Subtle top border glow */}
                <div 
                  aria-hidden="true" 
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-sky-500/20 border border-blue-400/30 flex items-center justify-center text-sky-400 group-hover:scale-110 group-hover:bg-blue-600/35 group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-blue-950/90 border border-blue-700/50 text-sky-300 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-sky-500 group-hover:text-white transition-all">
                      {card.number}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-sky-200 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs font-semibold text-sky-400/90 font-mono mt-0.5">
                      {card.tag}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-3.5 border-t border-blue-900/40 flex items-center gap-1.5 text-xs text-sky-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Student Centered</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="mt-12 sm:mt-16 text-center">
          <button
            type="button"
            onClick={onApplyClick}
            className="inline-flex items-center gap-2 px-8 py-3.5 sm:py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 hover:from-blue-500 hover:via-sky-400 hover:to-indigo-500 shadow-xl shadow-blue-500/25 hover:shadow-blue-400/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer group focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050B17]"
          >
            <span>Apply Now →</span>
          </button>
        </div>
      </div>
    </section>
  );
};
