import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onRequestDeck: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestDeck }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 20);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (currentScroll / totalHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Problem', href: '#problem' },
    { label: 'Why Now', href: '#why-now' },
    { label: 'Ambitions', href: '#ambitions' },
    { label: 'Research', href: '#research' },
    { label: 'Products', href: '#products' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Ethics', href: '#ethics' },
    { label: 'Capital', href: '#capital' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled
            ? 'bg-[#070B14]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        {/* Scroll progress bar */}
        <div
          role="progressbar"
          aria-label="Page scroll progress"
          aria-valuenow={Math.round(scrollProgress)}
          aria-valuemin={0}
          aria-valuemax={100}
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-teal-500 via-teal-300 to-amber-300 transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark in display face */}
          <a
            href="#"
            className="text-2xl sm:text-3xl font-serif tracking-tight text-white hover:text-teal-300 transition-colors focus-visible:ring-2 focus-visible:ring-teal-400"
          >
            Glowify
          </a>

          {/* Zone 2: Nav links, clean unboxed typography with hover states */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300"
          >
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-teal-300 transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary action */}
          <div className="flex items-center gap-3">
            <button
              onClick={onRequestDeck}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-medium text-slate-950 bg-teal-400 hover:bg-teal-300 active:scale-[0.98] rounded-md transition-all shadow-sm shadow-teal-500/20 whitespace-nowrap cursor-pointer"
            >
              <span>Request Deck</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </button>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white rounded-md focus-visible:ring-2 focus-visible:ring-teal-400 cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0A0F1D]/98 border-b border-white/10 px-6 py-6 backdrop-blur-xl shadow-2xl animate-in fade-in duration-150">
            <nav className="flex flex-col gap-4 text-base font-medium text-slate-200">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 hover:text-teal-300 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 border-t border-white/10 mt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onRequestDeck();
                  }}
                  className="w-full py-2.5 px-4 text-center font-medium text-sm text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-md transition-colors"
                >
                  Request Investor Deck
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
