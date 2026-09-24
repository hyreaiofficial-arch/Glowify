import React from 'react';
import { Layers, Watch, FlaskConical, Cpu, ShieldAlert, Binary } from 'lucide-react';

export const ProductsSection: React.FC = () => {
  const products = [
    {
      name: 'Glowify Health OS',
      description:
        'Unified operating system linking longitudinal biomarkers, daily vitals, and personal cognitive history.',
      phaseTag: 'Planned · Platform Core',
      icon: Layers,
      highlight: true,
    },
    {
      name: 'Glowify Sense',
      description:
        'Continuous multi-sensor wearable telemetry monitoring systemic strain, sleep architecture, and autonomic recovery.',
      phaseTag: 'Planned · Partner Hardware First',
      icon: Watch,
      highlight: false,
    },
    {
      name: 'Glowify Kits',
      description:
        'Periodic at-home biomarker and epigenetic sampling kits tracking biological rate of aging over time.',
      phaseTag: 'Planned · Biomarker Sampling',
      icon: FlaskConical,
      highlight: false,
    },
    {
      name: 'Glowify Aging Lab',
      description:
        'High-throughput computational and phenotypic analytics core benchmarking biological age against population cohort baselines.',
      phaseTag: 'Planned · Research Analytics',
      icon: Cpu,
      highlight: false,
    },
    {
      name: 'Glowify Mind Vault',
      description:
        'Secure, encrypted personal memory capture and consented digital cognitive modeling repository.',
      phaseTag: 'Planned · Phase A Exploration',
      icon: Binary,
      highlight: false,
    },
  ];

  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="max-w-3xl mb-16">
        <div className="flex items-center gap-2 text-xs font-mono text-teal-400 tracking-wider uppercase mb-3">
          <span>Integrated Suite</span>
          <span aria-hidden="true" className="text-slate-600">/</span>
          <span>Products</span>
        </div>
        <h2
          id="products-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight text-balance"
        >
          Product Architecture
        </h2>
        <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
          Five cohesive products combining continuous real-time telemetry, lab-grade biological age analytics, and encrypted memory preservation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={item.name}
              className={`glass-panel p-8 rounded-xl border flex flex-col justify-between hover:border-teal-400/40 transition-all duration-300 ${
                item.highlight
                  ? 'border-teal-500/30 bg-slate-900/80 lg:col-span-2'
                  : 'border-white/10'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  {/* Clean unboxed phase metadata */}
                  <span className="text-xs font-mono text-amber-300/90 tracking-wide uppercase">
                    {item.phaseTag}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-teal-300">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                </div>

                <h3 className="text-2xl font-serif text-white mb-3">
                  {item.name}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Product 0{idx + 1}</span>
                <span className="text-teal-400/90">Glowify Architecture</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
