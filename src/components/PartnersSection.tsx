import React from 'react';
import { Network, FlaskRound, Watch } from 'lucide-react';

export const PartnersSection: React.FC = () => {
  const partners = [
    {
      label: '[Research partner]',
      category: 'Academic & Cohort Research',
      description: 'Collaborative institution for human cohort recruitment and clinical trial protocol validation.',
      icon: Network,
    },
    {
      label: '[Lab partner]',
      category: 'Biomarkers & Epigenetics',
      description: 'NABL/CAP-accredited laboratory for high-throughput DNA methylation and multi-omic blood assay processing.',
      icon: FlaskRound,
    },
    {
      label: '[Hardware partner]',
      category: 'Continuous Telemetry',
      description: 'Medical and continuous wearable sensor OEM for validated physiological streaming into Glowify Health OS.',
      icon: Watch,
    },
  ];

  return (
    <section
      id="partners"
      aria-labelledby="partners-heading"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-teal-400 tracking-wider uppercase mb-3">
          <span>Ecosystem & Infrastructure</span>
          <span aria-hidden="true" className="text-slate-600">/</span>
          <span>Partners</span>
        </div>
        <h2
          id="partners-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight text-balance"
        >
          Research & Operational Partners
        </h2>
        <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
          Glowify collaborates with accredited laboratories, clinical research organizations, and sensor manufacturers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {partners.map((partner) => {
          const Icon = partner.icon;
          return (
            <div
              key={partner.label}
              className="glass-panel p-8 rounded-xl border border-white/10 flex flex-col justify-between hover:border-teal-500/30 transition-all duration-300"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-teal-300 mb-6">
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>

                <div className="text-xs font-mono text-amber-300 uppercase tracking-wider mb-2">
                  {partner.category}
                </div>

                {/* Visible required placeholder label */}
                <h3 className="text-xl sm:text-2xl font-mono text-white mb-3">
                  {partner.label}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {partner.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 text-xs font-mono text-slate-400 flex items-center justify-between">
                <span>Ecosystem Slot</span>
                <span className="text-teal-400">Institutional Partner</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
