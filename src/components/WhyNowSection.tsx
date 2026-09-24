import React from 'react';
import { Scale, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export const WhyNowSection: React.FC = () => {
  return (
    <section
      id="why-now"
      aria-labelledby="why-now-heading"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="relative rounded-2xl overflow-hidden glass-panel border border-white/10 p-8 sm:p-12 lg:p-16">
        {/* Subtle background glow */}
        <div
          aria-hidden="true"
          className="absolute -top-32 -right-32 w-96 h-96 bg-teal-500/10 blur-[100px] pointer-events-none rounded-full"
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-mono text-teal-400 tracking-wider uppercase mb-4">
              <span>Regulatory Inflection</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span>2026 Milestone</span>
            </div>

            <h2
              id="why-now-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight text-balance"
            >
              Why now: Regulators are now willing to evaluate therapies aimed at aging mechanisms.
            </h2>

            <p className="mt-6 text-slate-300 text-base sm:text-lg leading-relaxed">
              For decades, longevity research was constrained by regulatory frameworks that required clinical trials to target narrow, late-stage disease codes. That boundary has officially shifted.
            </p>

            <div className="mt-8 p-6 rounded-xl bg-slate-900/80 border border-teal-500/20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-300 shrink-0 mt-0.5">
                  <Scale className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs font-mono text-amber-300 tracking-wide uppercase">
                    Verified Regulatory Precedent · 2026
                  </div>
                  <p className="mt-2 text-base text-slate-100 font-medium leading-relaxed">
                    In 2026 the FDA cleared the first human trial of partial epigenetic reprogramming (Life Biosciences, ER-100, for glaucoma and NAION), and the first participant was dosed in June 2026.
                  </p>
                  <div className="mt-3 text-xs text-slate-400 font-mono flex flex-wrap items-center gap-2">
                    <span>Target: ER-100</span>
                    <span aria-hidden="true">·</span>
                    <span>Modality: Partial Epigenetic Reprogramming</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-teal-400">First Human Dosing: June 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="rounded-xl bg-slate-950/60 border border-white/10 p-6">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                The Historical Barrier
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Aging was viewed as an inevitable chronological progression without clear regulatory endpoints, limiting therapeutic capital to reactive, symptom-level pharmaceuticals.
              </p>
            </div>

            <div className="rounded-xl bg-gradient-to-br from-teal-950/40 to-slate-950/80 border border-teal-500/30 p-6">
              <div className="flex items-center gap-2 text-teal-300 text-xs font-mono uppercase tracking-wider mb-2">
                <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                <span>The 2026 Reality</span>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed">
                With the FDA clearing cellular reprogramming trials, biological age reversal has crossed the threshold from academic hypothesis into human clinical reality. Platforms with validated cohort data and continuous monitoring hold unprecedented strategic value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
