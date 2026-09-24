import React from 'react';
import { ArrowDown, FileText } from 'lucide-react';

interface HeroSectionProps {
  onRequestDeck: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onRequestDeck }) => {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-teal-500/10 blur-[130px] rounded-full pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/3 right-1/4 w-[380px] h-[260px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Subtle kicker without pill enclosure */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-teal-300/90 tracking-wider uppercase mb-6">
          <span>Human Longevity Platform</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Cohort Science</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-amber-300/90">Institutional Brief</span>
        </div>

        {/* Large elegant serif headline */}
        <h1
          id="hero-heading"
          className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal text-white tracking-tight leading-[1.12] max-w-4xl text-balance"
        >
          Measure aging. <span className="italic text-teal-300">Slow it.</span>{' '}
          <br className="hidden sm:inline" />
          Preserve what makes you, you.
        </h1>

        {/* Subheadline */}
        <p className="mt-8 text-lg sm:text-xl lg:text-2xl text-slate-300 font-light leading-relaxed max-w-3xl text-balance">
          Glowify is building the platform to understand, monitor and extend healthy human life.
        </p>

        {/* Two primary action buttons */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onRequestDeck}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-medium text-slate-950 bg-teal-400 hover:bg-teal-300 active:scale-[0.98] rounded-md transition-all shadow-lg shadow-teal-500/20 cursor-pointer"
          >
            <FileText className="w-4 h-4" aria-hidden="true" />
            <span>Request the investor deck</span>
          </button>

          <a
            href="#roadmap"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-medium text-slate-200 bg-white/5 hover:bg-white/10 active:scale-[0.98] border border-white/15 hover:border-teal-400/40 rounded-md transition-all backdrop-blur-sm cursor-pointer"
          >
            <span>See the roadmap</span>
            <ArrowDown className="w-4 h-4 text-teal-300" aria-hidden="true" />
          </a>
        </div>

        {/* Subtle anchor metrics bar - strictly compliant facts & targets */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-white/10 w-full grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-3xl">
          <div>
            <div className="text-xs font-mono uppercase text-slate-400">Cohort Target</div>
            <div className="mt-1 text-2xl font-serif text-white tabular-nums">10,000</div>
            <div className="text-xs text-slate-400 mt-0.5">Indian Longevity Cohort participants</div>
          </div>
          <div>
            <div className="text-xs font-mono uppercase text-slate-400">Architecture</div>
            <div className="mt-1 text-2xl font-serif text-teal-300">Continuous</div>
            <div className="text-xs text-slate-400 mt-0.5">24/7 biometrics & longitudinal data</div>
          </div>
          <div>
            <div className="text-xs font-mono uppercase text-slate-400">Governance</div>
            <div className="mt-1 text-2xl font-serif text-amber-300/90">Stage-Gated</div>
            <div className="text-xs text-slate-400 mt-0.5">Independent ethics & DPDP compliance</div>
          </div>
        </div>
      </div>
    </section>
  );
};
