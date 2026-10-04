import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onApplyClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onApplyClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { label: 'Course', href: '#course-overview' },
    { label: "What You'll Learn", href: '#what-youll-learn' },
    { label: 'Journey', href: '#journey' },
    { label: "Who It's For", href: '#who-its-for' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* 5. Subtle Minimal Scroll Progress Indicator */}
      <div 
        aria-hidden="true" 
        className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none bg-blue-950/20"
      >
        <div 
          className="h-full bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-500 transition-all duration-75 ease-out shadow-sm shadow-sky-400/40"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#050b18]/92 backdrop-blur-xl border-b border-blue-900/40 shadow-xl shadow-black/30'
            : 'bg-[#050b18]/60 backdrop-blur-md border-b border-blue-900/20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Zone 1: Official Brand Logo & Wordmark */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#hero');
              }}
              className="flex items-center gap-3 text-xl font-bold tracking-tight text-white group focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050B17] rounded-xl p-1"
            >
              <img
                src="/neuronix_logo.png"
                alt="Neuronix AI"
                width={36}
                height={36}
                className="w-9 h-9 rounded-xl object-contain shadow-md shadow-blue-500/30 group-hover:scale-105 transition-transform"
              />
              <span className="tracking-tight text-white">
                Neuronix <span className="text-sky-400 font-extrabold">AI</span>
              </span>
            </a>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-slate-300">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="hover:text-sky-300 transition-colors py-1 cursor-pointer focus-visible:ring-1 focus-visible:ring-sky-400 rounded px-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Action */}
            <div className="hidden md:flex items-center gap-4">
              <button
                type="button"
                onClick={onApplyClick}
                className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[44px] rounded-xl font-bold text-xs text-white bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 hover:from-blue-500 hover:via-sky-400 hover:to-indigo-500 shadow-lg shadow-blue-500/25 hover:shadow-sky-400/40 hover:-translate-y-0.5 active:translate-y-0 transition-all whitespace-nowrap cursor-pointer focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050B17]"
              >
                <span>Apply Now →</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 focus-visible:ring-2 focus-visible:ring-sky-400 focus:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
                aria-label="Toggle Navigation Menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-blue-900/40 bg-[#070f24]/98 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-4 shadow-2xl">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="block px-3.5 py-3 rounded-lg text-base font-medium text-slate-200 hover:text-white hover:bg-blue-950/60 transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-blue-900/40">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onApplyClick();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 shadow-lg shadow-blue-500/30 active:scale-98 transition-all min-h-[44px] cursor-pointer"
              >
                <span>Apply Now →</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
