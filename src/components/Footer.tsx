import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onApplyClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onApplyClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Course', href: '#course-overview' },
    { label: "What You'll Learn", href: '#what-youll-learn' },
    { label: "Who It's For", href: '#who-its-for' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-[#03060f] border-t border-blue-900/40 text-slate-400 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-blue-950">
          
          {/* Brand Info & Requested Tagline */}
          <div className="space-y-2">
            <a 
              href="#hero"
              onClick={(e) => handleLinkClick(e, '#hero')}
              className="inline-flex items-center gap-3 text-xl font-bold tracking-tight text-white hover:text-sky-300 transition-colors"
            >
              <img
                src="/neuronix_logo.png"
                alt="Neuronix AI"
                width={32}
                height={32}
                className="w-8 h-8 rounded-lg object-contain shadow-md shadow-blue-600/30"
              />
              <span>
                Neuronix <span className="text-sky-400 font-extrabold">AI</span>
              </span>
            </a>
            {/* Tagline Requested: "Learn. Build. Innovate with AI." */}
            <p className="text-sm text-slate-300 font-medium">
              Learn. Build. Innovate with AI.
            </p>
          </div>

          {/* Navigation Links Requested */}
          <nav className="flex flex-wrap items-center gap-6 sm:gap-8 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-sky-400 transition-colors focus-visible:ring-1 focus-visible:ring-sky-400 rounded px-1 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={onApplyClick}
              className="text-sky-400 hover:text-sky-300 font-semibold transition-colors cursor-pointer focus-visible:ring-1 focus-visible:ring-sky-400 rounded px-1"
            >
              Apply Now
            </button>
          </nav>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Neuronix AI. Generative AI Course.</p>
          <div className="flex items-center gap-6">
            <span>Online Live Sessions (Google Meet / Zoom)</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer focus-visible:ring-1 focus-visible:ring-sky-400 rounded px-1"
              aria-label="Scroll to top of page"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
