import React from 'react';
import { ShieldCheck, FileKey, Scale, CheckCheck, FileText, AlertCircle } from 'lucide-react';

export const EthicsSafetySection: React.FC = () => {
  const pillars = [
    {
      title: 'Consent-First Data Architecture',
      description:
        'All participant telemetry, biological samples, and memory inputs require explicit, granular, and freely revocable consent. Participants retain total ownership and deletion rights over their phenotypic records.',
      icon: FileKey,
    },
    {
      title: 'DPDP Act Compliance',
      description:
        'Engineered to meet the stringent standards of the Digital Personal Data Protection (DPDP) Act, including localized secure data residency, purpose limitation, and cryptographically verified audit trails.',
      icon: ShieldCheck,
    },
    {
      title: 'Independent Ethics Board',
      description:
        'Autonomous oversight board consisting of independent bioethicists, clinical researchers, and legal counsel with binding veto authority over all study designs and frontier memory research.',
      icon: Scale,
    },
    {
      title: 'Ethics-Committee Approval for All Studies',
      description:
        'Every research protocol, cohort observation, and biomarker collection protocol is formally submitted and approved by accredited Institutional Ethics Committees (IEC / IRB) prior to participant enrollment.',
      icon: CheckCheck,
    },
    {
      title: 'No Health Claims Beyond Evidence',
      description:
        'Zero tolerance for longevity hype or ungrounded reversal claims. All shared findings, biological age calculations, and physiological correlations are bound strictly to validated empirical data.',
      icon: FileText,
    },
    {
      title: 'Wellness-Only Positioning Until Approvals',
      description:
        'All commercial tools and user-facing dashboards operate under wellness, lifestyle, and exploratory research classifications until full regulatory clinical clearances are formally granted.',
      icon: AlertCircle,
    },
  ];

  return (
    <section
      id="ethics"
      aria-labelledby="ethics-heading"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="max-w-3xl mb-16">
        <div className="flex items-center gap-2 text-xs font-mono text-teal-400 tracking-wider uppercase mb-3">
          <span>Governance & Bioethics</span>
          <span aria-hidden="true" className="text-slate-600">/</span>
          <span>Core Protocols</span>
        </div>
        <h2
          id="ethics-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight text-balance"
        >
          Ethics, Data Sovereignty & Safety
        </h2>
        <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
          Longevity research touches the deepest boundaries of human biology and identity. Our scientific integrity is founded on an uncompromised bioethical architecture.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pillars.map((pillar, i) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.title}
              className="glass-panel p-8 rounded-xl border border-white/10 flex flex-col justify-between hover:border-amber-400/30 transition-all duration-300"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 flex items-center justify-center mb-6">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Principle 0{i + 1}
                </div>
                <h3 className="text-xl font-serif text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-teal-400/80">
                Institutional Guarantee
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
