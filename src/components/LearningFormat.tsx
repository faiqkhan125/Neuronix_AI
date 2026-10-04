import React from 'react';
import { LEARN_ANYWHERE_FEATURES } from '../data/courseData';
import { 
  Globe, 
  Laptop, 
  Video, 
  BookOpen, 
  Users, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Tv 
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface LearningFormatProps {
  onApplyClick: () => void;
}

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Laptop,
  Video,
  BookOpen,
  Users
};

export const LearningFormat: React.FC<LearningFormatProps> = ({ onApplyClick }) => {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section 
      id="learn-from-anywhere" 
      ref={revealRef}
      className="py-20 sm:py-24 lg:py-28 relative bg-[#040813] border-t border-b border-blue-900/30 overflow-hidden reveal-fade-up"
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
            <Globe className="w-3.5 h-3.5 text-sky-400" />
            <span>Online Experience</span>
            <span aria-hidden="true">·</span>
            <span>Neuronix AI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Learn From Anywhere
          </h2>
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">
            Experience the accountability and real-time interaction of a premier classroom right from the comfort of your desk.
          </p>
        </div>

        {/* 5 Prominent Visual Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 mb-14 sm:mb-16">
          {LEARN_ANYWHERE_FEATURES.map((item) => {
            const IconComponent = iconMap[item.iconName] || Globe;
            return (
              <div
                key={item.id}
                className="group relative rounded-2xl border border-blue-900/40 bg-[#07132a]/80 hover:bg-[#0a1a3a] hover:border-sky-400/50 p-5 sm:p-6 transition-all duration-300 backdrop-blur-md shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-blue-950/50 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl" role="img" aria-label={item.title}>
                      {item.iconEmoji}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600/20 to-sky-500/20 border border-blue-400/30 flex items-center justify-center text-sky-400 group-hover:scale-105 group-hover:bg-blue-600/35 group-hover:text-white transition-all shadow-sm">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-sky-200 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-sky-400 font-mono mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-blue-900/40 flex items-center gap-1.5 text-[11px] text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Interactive Cohort</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visually Attractive Live Classroom Mockup */}
        <div className="rounded-2xl border border-blue-500/30 bg-[#07122a]/90 p-5 sm:p-8 backdrop-blur-xl shadow-2xl shadow-blue-950/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Mockup: Simulated Meeting Interface */}
            <div className="lg:col-span-7 rounded-xl border border-blue-900/60 bg-[#030814] overflow-hidden shadow-xl">
              {/* Meeting Header Bar */}
              <div className="px-4 py-3 bg-[#08152e] border-b border-blue-900/40 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400" />
                  <span className="font-semibold text-white">Neuronix AI · Live Class</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400 font-mono text-[11px]">
                  <span className="text-sky-400 font-semibold">Google Meet / Zoom</span>
                  <span>1080p HD</span>
                </div>
              </div>

              {/* Video Screen Area */}
              <div className="p-4 sm:p-6 bg-gradient-to-b from-[#040c1e] to-[#020611] space-y-4">
                {/* Simulated Instructor Screen Share */}
                <div className="rounded-lg border border-blue-500/20 bg-[#061226] p-4 font-mono text-xs text-slate-300 space-y-2">
                  <div className="flex items-center justify-between text-slate-400 text-[11px] pb-1 border-b border-blue-950">
                    <span className="flex items-center gap-1.5 text-sky-300">
                      <Tv className="w-3.5 h-3.5 text-blue-400" />
                      Live Screen Share: Building AI Chatbot with Memory
                    </span>
                    <span className="text-emerald-400 font-bold">● REC</span>
                  </div>
                  <pre className="text-xs text-sky-200 overflow-x-auto py-1">
                    <code>{`# Instructor typing live in Jupyter Notebook:
prompt = "Analyze customer query and generate response"
stream = client.models.generate_content_stream(prompt)
for chunk in stream:
    print(chunk.text, end="")`}</code>
                  </pre>
                </div>

                {/* Simulated Interactive Participant Strip */}
                <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
                  <div className="p-2.5 rounded-lg bg-blue-950/40 border border-blue-900/40 text-slate-300">
                    <p className="font-semibold text-white">Live Mentor</p>
                    <p className="text-[10px] text-sky-400">Explaining Concepts</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-blue-950/40 border border-blue-900/40 text-slate-300">
                    <p className="font-semibold text-white">Live Code-Along</p>
                    <p className="text-[10px] text-blue-400">Instant Q&A</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-blue-950/40 border border-blue-900/40 text-slate-300">
                    <p className="font-semibold text-white">Student Cohort</p>
                    <p className="text-[10px] text-emerald-400">Unmute to Ask</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Key Perks */}
            <div className="lg:col-span-5 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 font-mono uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Remote Classroom That Works</span>
              </div>
              <h3 className="text-2xl font-bold text-white leading-tight">
                No Stale Videos. Pure Live Interaction.
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Watch the instructor write code live, ask questions the moment you hit a roadblock, and get direct assistance. Every session is recorded in full HD and made available immediately after class.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Join from anywhere in the world on desktop, laptop, or tablet</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Full access to HD recordings, code repos, and slides</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Direct 1-on-1 feedback during and after class</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onApplyClick}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md shadow-blue-600/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050B17]"
                >
                  <span>Apply for Next Cohort</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
