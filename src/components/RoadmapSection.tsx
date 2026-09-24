import React, { useState } from 'react';
import { Lock, Unlock, CheckCircle2, ChevronRight, ShieldCheck, Flag } from 'lucide-react';

interface PhaseDetail {
  id: string;
  name: string;
  period: string;
  focus: string;
  deliverables: string[];
  gateToPass: string;
  status: 'In Progress' | 'Planned';
}

export const RoadmapSection: React.FC = () => {
  const [selectedPhaseIndex, setSelectedPhaseIndex] = useState(0);

  const phases: PhaseDetail[] = [
    {
      id: 'p1',
      name: 'Foundation',
      period: '0–6 months',
      focus: 'Institutional governance, protocol architecture, and ethics board establishment.',
      deliverables: [
        'Establish Independent Ethics Board and formulate bio-governance protocols',
        'Architect Glowify Health OS multi-modal data ingestion engine',
        'Implement DPDP Act compliance architecture and cryptographic consent vault',
        'Finalize protocol design for the Indian Longevity Cohort (Target: 10,000 participants)',
      ],
      gateToPass:
        'Ethics committee sign-off on observational protocols and independent data protection audit clearance.',
      status: 'In Progress',
    },
    {
      id: 'p2',
      name: 'Measure',
      period: '6–18 months',
      focus: 'Launch cohort enrollment, partner hardware integration, and baseline biomarker kits.',
      deliverables: [
        'Initiate recruitment toward Indian Longevity Cohort target (10,000 participants)',
        'Deploy partner hardware telemetry streaming into Glowify Health OS',
        'Roll out initial Glowify Kits for quarterly epigenetic methylation sampling',
        'Launch Phase A consented digital persona exploration in Glowify Mind Vault',
      ],
      gateToPass:
        'First cohort milestone: 2,500 active participants with verified 90-day continuous telemetry and baseline epigenetic assays.',
      status: 'Planned',
    },
    {
      id: 'p3',
      name: 'Validate',
      period: '18–36 months',
      focus: 'Population-calibrated biological clock validation and phenotypic modeling.',
      deliverables: [
        'Scale Indian Longevity Cohort toward 10,000 target participants',
        'Publish peer-reviewed validation of biological aging algorithms calibrated for South Asian genetics',
        'Cross-validation with partner clinical laboratory assays',
        'Initiate Phase B cognitive and neural-signal longitudinal research',
      ],
      gateToPass:
        'Statistically significant validation of proprietary biological age deceleration index approved by Scientific Advisory Board.',
      status: 'Planned',
    },
    {
      id: 'p4',
      name: 'Intervene',
      period: 'Years 3–7',
      focus: 'Safe intervention monitoring, clinical trials partnership, and proprietary hardware.',
      deliverables: [
        'Conduct controlled, evidence-based metabolic and lifestyle longevity intervention protocols',
        'Partner with therapeutic sponsors on advanced longevity clinical trial monitoring',
        'Transition from partner devices to proprietary Glowify Sense hardware [Planned]',
        'Multi-year longitudinal cognitive stability and memory preservation benchmarks',
      ],
      gateToPass:
        'Demonstrable, reproducible deceleration of biological age markers in intervention cohorts without adverse safety signals.',
      status: 'Planned',
    },
    {
      id: 'p5',
      name: 'Frontier',
      period: 'Years 7+',
      focus: 'Reprogramming therapeutics tracking, systemic reversal, and mind preservation.',
      deliverables: [
        'Track and monitor next-generation cellular reprogramming therapies (building upon 2026 ER-100 precedents)',
        'Advance Phase C long-horizon mind-preservation and neural continuity research under ethics oversight',
        'Deploy comprehensive whole-organism biological age reversal analytics platform',
      ],
      gateToPass:
        'Multi-decade healthspan preservation outcomes certified under institutional medical and ethics committee oversight.',
      status: 'Planned',
    },
  ];

  const current = phases[selectedPhaseIndex];

  return (
    <section
      id="roadmap"
      aria-labelledby="roadmap-heading"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-teal-400 tracking-wider uppercase mb-3">
          <span>Stage-Gated Execution</span>
          <span aria-hidden="true" className="text-slate-600">/</span>
          <span>Timeline</span>
        </div>
        <h2
          id="roadmap-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight text-balance"
        >
          Institutional Roadmap
        </h2>
        <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
          Glowify adheres to rigorous stage-gating: no capital or biological scope advances to subsequent phases until explicit empirical, ethical, and regulatory gates are passed.
        </p>
      </div>

      {/* Interactive Horizontal Timeline Tabs */}
      <div className="overflow-x-auto pb-4 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0">
        <div
          role="tablist"
          aria-label="Roadmap Phases"
          className="flex items-center gap-3 min-w-[720px] lg:min-w-0 w-full"
        >
          {phases.map((phase, index) => {
            const isSelected = selectedPhaseIndex === index;
            return (
              <button
                key={phase.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedPhaseIndex(index)}
                className={`flex-1 p-4 rounded-xl text-left border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-teal-950/40 border-teal-500/60 shadow-lg shadow-teal-500/10'
                    : 'bg-slate-900/60 border-white/10 hover:border-white/20 hover:bg-slate-900'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-slate-400 uppercase">
                    Phase 0{index + 1}
                  </span>
                  <span
                    className={`text-[10px] font-mono uppercase tracking-wider ${
                      phase.status === 'In Progress' ? 'text-amber-300' : 'text-slate-400'
                    }`}
                  >
                    {phase.status}
                  </span>
                </div>
                <div className="font-serif text-lg text-white font-medium">
                  {phase.name}
                </div>
                <div className="text-xs text-slate-400 font-mono mt-1">
                  {phase.period}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Detailed Phase Inspection Stage */}
      <div className="glass-panel rounded-2xl p-6 sm:p-10 border border-white/10 relative">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-teal-400 mb-1">
              <span>Phase 0{selectedPhaseIndex + 1} Focus</span>
              <span aria-hidden="true">·</span>
              <span className="text-amber-300">{current.period}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-white">
              {current.name}: {current.focus}
            </h3>
          </div>
          <div className="text-xs font-mono bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-slate-300 self-start lg:self-auto">
            Status: <span className="text-teal-300">{current.status}</span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Deliverables List */}
          <div className="lg:col-span-7">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-400" />
              <span>Key Phase Deliverables</span>
            </h4>
            <ul className="space-y-3.5">
              {current.deliverables.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-950/60 border border-white/5 text-sm text-slate-200"
                >
                  <span className="w-5 h-5 rounded bg-teal-500/10 text-teal-300 font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Gate to Pass */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="p-6 rounded-xl bg-gradient-to-br from-amber-950/20 via-slate-950 to-slate-950 border border-amber-500/30">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-300 mb-3">
                <Lock className="w-4 h-4" aria-hidden="true" />
                <span>Stage Gate Requirement</span>
              </div>
              <h5 className="text-base font-serif text-white mb-3">
                Gate to Pass to Unlock Phase 0{selectedPhaseIndex + 2 <= 5 ? selectedPhaseIndex + 2 : 5}
              </h5>
              <p className="text-sm text-slate-300 leading-relaxed">
                {current.gateToPass}
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
                <span>Independent Stage Audit Required</span>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-lg bg-white/5 border border-white/5 text-xs text-slate-400">
              <span>Governance Principle:</span> Each phase is strictly gated. Advancing across phases requires quantifiable biomarker validation, ethical review, and board verification.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
