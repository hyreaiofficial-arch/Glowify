import React from 'react';
import { Activity, Clock, Database, Brain } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      num: '01',
      title: 'Aging is the largest risk factor for chronic disease',
      description:
        'Cardiovascular decline, neurodegeneration, metabolic failure, and oncology are fundamentally downstream manifestations of biological aging processes rather than isolated pathologies.',
      icon: Activity,
    },
    {
      num: '02',
      title: 'People are measured only occasionally',
      description:
        'Standard healthcare relies on episodic snapshots—annual blood panels and emergency visits. Progressive physiological drift and critical metabolic inflexions are missed between infrequent visits.',
      icon: Clock,
    },
    {
      num: '03',
      title: 'Biological age is measurable but fragmented and unvalidated for Indian populations',
      description:
        'Epigenetic clocks and biomarker panels are scattered across siloed commercial tests and predominantly calibrated on Western cohorts, leaving South Asian physiological risk profiles poorly represented.',
      icon: Database,
    },
    {
      num: '04',
      title: 'There is no unified platform linking health, cognition and personal history',
      description:
        'No longitudinal infrastructure currently bridges real-time wearable telemetry, cellular biomarker trajectories, episodic memory preservation, and cognitive phenotypes into a single coherent system.',
      icon: Brain,
    },
  ];

  return (
    <section
      id="problem"
      aria-labelledby="problem-heading"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="max-w-3xl mb-16">
        <div className="flex items-center gap-2 text-xs font-mono text-teal-400 tracking-wider uppercase mb-3">
          <span>The Problem</span>
          <span aria-hidden="true" className="text-slate-600">/</span>
          <span>Systemic Gaps</span>
        </div>
        <h2
          id="problem-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight text-balance"
        >
          Healthcare treats symptoms late. Longevity demands continuous measurement.
        </h2>
        <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
          Four structural failures prevent modern medicine from preventing aging-related decline before irreversible damage occurs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {problems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.num}
              className="glass-panel p-8 sm:p-10 rounded-xl relative group hover:border-teal-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-amber-300/80 tracking-widest uppercase">
                    GAP {item.num}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-teal-300">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif text-white tracking-tight leading-snug mb-4">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center text-xs text-slate-400 font-mono">
                <span>Domain Focus</span>
                <span aria-hidden="true" className="mx-2">·</span>
                <span className="text-slate-300">Target for Intervention</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
