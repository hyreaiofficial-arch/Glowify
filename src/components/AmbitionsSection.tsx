import React from 'react';
import { HeartPulse, BrainCircuit, ActivitySquare } from 'lucide-react';

export const AmbitionsSection: React.FC = () => {
  const ambitions = [
    {
      index: 'A',
      title: 'Extend healthy lifespan by slowing and reversing aging drivers',
      subtitle: 'Targeting Biological Drivers of Decline',
      description:
        'Focus on systemic drivers of physiological deterioration—epigenetic drift, mitochondrial fatigue, and cellular senescence. We measure the biological rate of aging and validate targeted interventions to compress morbidity.',
      icon: HeartPulse,
      tag: 'Lifespan & Healthspan',
    },
    {
      index: 'B',
      title: 'Understand memory and consciousness and pursue a consented digital clone',
      subtitle: 'Cognitive Architecture & Identity Preservation',
      description:
        'Capture longitudinal personal history, episodic memory, and neural cognitive patterns through an ethical, consented framework. We investigate the frontiers of mind preservation guided by an independent ethics board.',
      icon: BrainCircuit,
      tag: 'Consciousness & Memory',
    },
    {
      index: 'C',
      title: 'Monitor health 24/7 with devices and kits',
      subtitle: 'Continuous Multi-Modal Biomarker Sensing',
      description:
        'Deploy continuous wearable telemetry paired with periodic at-home biological kits. By linking real-time autonomic signals with molecular assays, we transition health surveillance from reactive snapshots to perpetual baselines.',
      icon: ActivitySquare,
      tag: 'Perpetual Telemetry',
    },
  ];

  return (
    <section
      id="ambitions"
      aria-labelledby="ambitions-heading"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="max-w-3xl mb-16">
        <div className="flex items-center gap-2 text-xs font-mono text-teal-400 tracking-wider uppercase mb-3">
          <span>Vision & Thesis</span>
          <span aria-hidden="true" className="text-slate-600">/</span>
          <span>Core Mandate</span>
        </div>
        <h2
          id="ambitions-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight text-balance"
        >
          Our Three Ambitions
        </h2>
        <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
          Glowify couples biological longevity, cognitive preservation, and continuous diagnostic intelligence into one unified institutional roadmap.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {ambitions.map((ambition) => {
          const Icon = ambition.icon;
          return (
            <div
              key={ambition.index}
              className="glass-panel p-8 sm:p-10 rounded-2xl relative flex flex-col justify-between hover:border-teal-400/40 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="w-9 h-9 rounded-md bg-teal-500/10 border border-teal-500/20 text-teal-300 font-mono text-sm font-semibold flex items-center justify-center">
                    {ambition.index}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                </div>

                <div className="text-xs font-mono uppercase tracking-wider text-amber-300/80 mb-2">
                  {ambition.subtitle}
                </div>

                <h3 className="text-xl sm:text-2xl font-serif text-white tracking-tight leading-snug mb-5">
                  {ambition.title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {ambition.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>{ambition.tag}</span>
                <span className="text-teal-400">Pillar {ambition.index}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
