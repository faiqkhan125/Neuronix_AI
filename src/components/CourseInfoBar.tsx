import React from 'react';
import { Video, Laptop, Code2, Sparkles } from 'lucide-react';

export const CourseInfoBar: React.FC = () => {
  const highlights = [
    {
      title: 'LIVE ONLINE',
      subtitle: 'Real-time interactive classes',
      icon: Video,
      color: 'text-sky-400',
      badge: 'Interactive',
    },
    {
      title: 'GOOGLE MEET / ZOOM',
      subtitle: 'Screen sharing & live Q&A',
      icon: Laptop,
      color: 'text-blue-400',
      badge: 'Virtual',
    },
    {
      title: 'PRACTICAL LEARNING',
      subtitle: 'Hands-on projects & exercises',
      icon: Code2,
      color: 'text-emerald-400',
      badge: 'Hands-On',
    },
    {
      title: 'BEGINNER FRIENDLY',
      subtitle: 'No prior AI experience needed',
      icon: Sparkles,
      color: 'text-amber-400',
      badge: 'Accessible',
    },
  ];

  return (
    <section 
      aria-label="Course Format Highlights"
      className="relative z-20 -mt-4 sm:-mt-6 mb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {highlights.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="group relative rounded-2xl border border-blue-900/50 bg-[#061026]/90 hover:bg-[#091738] hover:border-sky-400/40 p-4 sm:p-5 transition-all duration-200 backdrop-blur-md shadow-lg shadow-black/30 hover:-translate-y-0.5 flex items-center gap-3.5 sm:gap-4"
            >
              {/* Subtle top edge glow */}
              <div 
                aria-hidden="true" 
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" 
              />

              {/* Icon Container */}
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-950/80 border border-blue-800/40 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-sky-400/40 transition-transform">
                <Icon className={`w-5 h-5 ${item.color}`} />
              </div>

              {/* Text Information */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-1">
                  <h3 className="font-mono text-xs sm:text-[13px] font-bold text-white tracking-wider uppercase truncate">
                    {item.title}
                  </h3>
                  <span className="hidden xl:inline-block text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-950/70 border border-blue-800/40 text-slate-400">
                    {item.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-0.5 line-clamp-1">
                  {item.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
