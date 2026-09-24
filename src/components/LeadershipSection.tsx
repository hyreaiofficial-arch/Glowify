import React from 'react';
import { User, Award, Stethoscope, Microscope } from 'lucide-react';

export const LeadershipSection: React.FC = () => {
  const leadership = [
    {
      role: 'Founder',
      status: 'Current',
      statusTag: null,
      namePlaceholder: 'Founder [Add name and bio]',
      description:
        '[Add founder background, longevity thesis, previous track record, and operational commitment].',
      icon: User,
    },
    {
      role: 'Chief Scientific Officer',
      status: 'Planned',
      statusTag: '[Planned hire]',
      namePlaceholder: 'Chief Scientific Officer [Planned hire]',
      description:
        'Target candidate profile: PhD in Epigenetics, Molecular Biology, or Computational Genomics with experience leading human longitudinal cohort studies and multi-omic clock calibration.',
      icon: Microscope,
    },
    {
      role: 'Chief Medical Officer',
      status: 'Planned',
      statusTag: '[Planned hire]',
      namePlaceholder: 'Chief Medical Officer [Planned hire]',
      description:
        'Target candidate profile: MD with clinical trials leadership, preventive cardiology or neuro-metabolic specialization, and experience interfacing with Institutional Ethics Committees (IEC / IRB).',
      icon: Stethoscope,
    },
    {
      role: 'Scientific Advisory Board',
      status: 'Advisory',
      statusTag: '[Add advisors]',
      namePlaceholder: 'Scientific Advisory Board [Add advisors]',
      description:
        '[Add: advisory board name] · Computational Biology & Aging Clocks\n[Add: advisory board name] · Cognitive Neuroscience & Memory Research\n[Add: advisory board name] · Bioethics & Clinical Regulatory Compliance',
      icon: Award,
    },
  ];

  return (
    <section
      id="leadership"
      aria-labelledby="leadership-heading"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="max-w-3xl mb-16">
        <div className="flex items-center gap-2 text-xs font-mono text-teal-400 tracking-wider uppercase mb-3">
          <span>Governance & Team</span>
          <span aria-hidden="true" className="text-slate-600">/</span>
          <span>Leadership</span>
        </div>
        <h2
          id="leadership-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight text-balance"
        >
          Leadership & Advisors
        </h2>
        <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
          Disciplined executive and scientific stewardship. Open roles are actively curated for world-class longevity scientists and clinical trialists.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {leadership.map((member) => {
          const Icon = member.icon;
          return (
            <div
              key={member.role}
              className="glass-panel p-8 sm:p-10 rounded-xl border border-white/10 flex flex-col justify-between hover:border-teal-500/30 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-teal-300">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  {member.statusTag ? (
                    <span className="text-xs font-mono text-amber-300 tracking-wider">
                      {member.statusTag}
                    </span>
                  ) : (
                    <span className="text-xs font-mono text-teal-300 tracking-wider">
                      Executive Lead
                    </span>
                  )}
                </div>

                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                  {member.role}
                </div>

                <h3 className="text-xl sm:text-2xl font-serif text-white mb-4">
                  {member.namePlaceholder}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                  {member.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Role Allocation</span>
                <span className="text-slate-400">Glowify Leadership</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
