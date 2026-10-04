import React from 'react';
import { Sparkles, Terminal, Wrench, Zap, Layers, FolderKanban } from 'lucide-react';

export const CourseHighlightsStrip: React.FC = () => {
  const items = [
    { title: 'GENERATIVE AI', icon: Sparkles },
    { title: 'PROMPT ENGINEERING', icon: Terminal },
    { title: 'AI TOOLS', icon: Wrench },
    { title: 'AI AUTOMATION', icon: Zap },
    { title: 'AI AGENTS', icon: Layers },
    { title: 'AI PROJECTS', icon: FolderKanban },
  ];

  return (
    <div className="relative w-full border-y border-blue-900/40 bg-[#040816]/90 backdrop-blur-md py-4 overflow-hidden z-20">
      {/* Subtle edge fade overlays */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-[#050b17] to-transparent z-10" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-[#050b17] to-transparent z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start lg:justify-between gap-6 sm:gap-8 overflow-x-auto no-scrollbar scroll-smooth py-1">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group shrink-0 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-950/40 hover:bg-blue-900/40 border border-blue-800/30 hover:border-sky-400/50 transition-all duration-200 cursor-default"
              >
                <div className="w-5 h-5 rounded-full bg-blue-600/20 flex items-center justify-center text-sky-400 group-hover:text-white group-hover:bg-blue-600/40 transition-colors">
                  <Icon className="w-3 h-3" />
                </div>
                <span className="font-mono text-xs font-bold tracking-widest text-slate-300 group-hover:text-white transition-colors uppercase whitespace-nowrap">
                  {item.title}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400/60 group-hover:bg-sky-400 transition-colors" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
