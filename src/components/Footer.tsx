import React from 'react';
import { ShieldAlert, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#050811] text-slate-400 text-xs py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Mandatory Regulatory / Stage Disclaimer Box */}
        <div className="mb-12 p-6 rounded-xl bg-slate-900/60 border border-white/10 flex items-start gap-4">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
          <div className="space-y-1">
            <div className="text-[11px] font-mono uppercase text-amber-300 tracking-wider">
              Legal & Medical Disclaimer
            </div>
            {/* Required exact disclaimer text */}
            <p className="text-slate-200 text-sm leading-relaxed">
              Glowify is a research-stage company. Nothing on this site is medical advice or a claim of approved treatment.
            </p>
            <p className="text-slate-400 text-xs leading-relaxed pt-1">
              All cohort studies, biomarker assays, and platform tools operate under observational and lifestyle classifications pending formal clinical clearances and institutional ethics board approvals.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          <div className="md:col-span-5 space-y-4">
            <span className="text-2xl font-serif text-white tracking-tight">
              Glowify
            </span>
            <p className="text-slate-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              Building the platform to understand, monitor and extend healthy human life. Longitudinal cohorts, continuous telemetry, and ethical cognitive preservation.
            </p>
            <div className="font-mono text-[11px] text-teal-400">
              [contact@glowify.life]
            </div>
          </div>

          <div className="md:col-span-4 space-y-2">
            <div className="font-mono text-xs uppercase tracking-wider text-slate-300">
              Platform Sections
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#problem" className="hover:text-teal-300 transition-colors">The Problem</a>
              <a href="#why-now" className="hover:text-teal-300 transition-colors">Why Now (2026)</a>
              <a href="#ambitions" className="hover:text-teal-300 transition-colors">Three Ambitions</a>
              <a href="#research" className="hover:text-teal-300 transition-colors">Research Programs</a>
              <a href="#products" className="hover:text-teal-300 transition-colors">Products</a>
              <a href="#roadmap" className="hover:text-teal-300 transition-colors">Roadmap</a>
              <a href="#ethics" className="hover:text-teal-300 transition-colors">Ethics & Safety</a>
              <a href="#capital" className="hover:text-teal-300 transition-colors">Capital Strategy</a>
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-slate-300">
              Compliance & Ethics
            </div>
            <ul className="space-y-1.5 text-xs text-slate-400 font-mono">
              <li>· DPDP Act Compliant</li>
              <li>· Independent Ethics Board</li>
              <li>· Research-Stage Architecture</li>
              <li>· Institutional Investor Brief</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-xs">
          <div>
            © {new Date().getFullYear()} Glowify Longevity Platform. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
