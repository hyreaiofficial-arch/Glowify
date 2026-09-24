import React, { useState } from 'react';
import { DollarSign, PieChart, Edit3, Check, RotateCcw, Building2, Sparkles } from 'lucide-react';

export const FundingSection: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [raiseAmount, setRaiseAmount] = useState('[Raise amount: $2,500,000]');
  const [cohortOpsPercent, setCohortOpsPercent] = useState(40);
  const [softwarePercent, setSoftwarePercent] = useState(30);
  const [labPercent, setLabPercent] = useState(20);
  const [regulatoryPercent, setRegulatoryPercent] = useState(10);
  const [customNotes, setCustomNotes] = useState(
    '[Use of funds: 40% Cohort Ops & Clinical Recruitment, 30% Software Platform & Health OS, 20% Lab Epigenetics & Biomarkers, 10% Regulatory & Independent Ethics Board]'
  );

  const resetDefaults = () => {
    setRaiseAmount('[Raise amount: $2,500,000]');
    setCohortOpsPercent(40);
    setSoftwarePercent(30);
    setLabPercent(20);
    setRegulatoryPercent(10);
    setCustomNotes(
      '[Use of funds: 40% Cohort Ops & Clinical Recruitment, 30% Software Platform & Health OS, 20% Lab Epigenetics & Biomarkers, 10% Regulatory & Independent Ethics Board]'
    );
    setIsEditing(false);
  };

  const stages = [
    {
      stage: 'Phase 0–1',
      title: 'Foundation & Protocol Setup',
      capitalSource: 'Founder cash flow + non-dilutive grants',
      objective: 'Ethics committee clearance, protocol finalization, and initial software architecture.',
      status: 'Current & Active',
    },
    {
      stage: 'Phase 2',
      title: 'Cohort Launch & Validation',
      capitalSource: 'Seed / Series A',
      objective: 'Enrollment toward Indian Longevity Cohort (Target: 10,000 participants), biomarker kit rollout, and Health OS deployment.',
      status: 'Target Capitalization',
    },
    {
      stage: 'Phase 3',
      title: 'Intervention Trials & Scaling',
      capitalSource: 'Institutional and strategic partners',
      objective: 'Expansion into regulated clinical trial partnerships, therapeutic monitoring, and proprietary hardware.',
      status: 'Planned',
    },
  ];

  return (
    <section
      id="capital"
      aria-labelledby="capital-heading"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="max-w-3xl mb-16">
        <div className="flex items-center gap-2 text-xs font-mono text-teal-400 tracking-wider uppercase mb-3">
          <span>Investment Thesis</span>
          <span aria-hidden="true" className="text-slate-600">/</span>
          <span>Capitalization</span>
        </div>
        <h2
          id="capital-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight text-balance"
        >
          Capital Strategy by Stage
        </h2>
        <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
          Glowify matches capital intensity directly with biological and regulatory milestones to minimize dilution while building an irreplaceable cohort moat.
        </p>
      </div>

      {/* 3 Capital Strategy Stages */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {stages.map((stageItem) => (
          <div
            key={stageItem.stage}
            className="glass-panel p-8 rounded-xl border border-white/10 flex flex-col justify-between hover:border-teal-500/30 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-teal-300 uppercase font-semibold">
                  {stageItem.stage}
                </span>
                <span className="text-[11px] font-mono text-amber-300/90">
                  {stageItem.status}
                </span>
              </div>

              <h3 className="text-xl font-serif text-white mb-2">
                {stageItem.title}
              </h3>

              <div className="my-4 p-3 rounded-lg bg-slate-950/70 border border-white/5">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Capital Source</div>
                <div className="text-sm font-medium text-slate-200 mt-1">
                  {stageItem.capitalSource}
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {stageItem.objective}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-slate-400">
              Stage Discipline
            </div>
          </div>
        ))}
      </div>

      {/* Interactive & Editable [Raise amount] / [Use of funds] Block */}
      <div className="glass-panel p-8 sm:p-12 rounded-2xl border border-teal-500/30 relative">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-300 uppercase tracking-wider mb-1">
              <span>Configurable Allocation Model</span>
              <span aria-hidden="true">·</span>
              <span>Target Round</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-white">
              Target Allocation & Use of Funds
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono border border-teal-500/40 bg-teal-500/10 text-teal-300 hover:bg-teal-500/20 transition-colors cursor-pointer"
            >
              {isEditing ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Done Editing</span>
                </>
              ) : (
                <>
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Customize Block</span>
                </>
              )}
            </button>

            {isEditing && (
              <button
                onClick={resetDefaults}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border border-white/10 text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Editable Raise Amount and Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 rounded-xl bg-slate-950/80 border border-white/10">
              <label
                htmlFor="raise-amount-input"
                className="block text-xs font-mono uppercase text-slate-400 mb-2"
              >
                Primary Raise Target
              </label>

              {isEditing ? (
                <div>
                  <input
                    id="raise-amount-input"
                    type="text"
                    value={raiseAmount}
                    onChange={(e) => setRaiseAmount(e.target.value)}
                    className="w-full bg-slate-900 border border-teal-500/50 rounded-lg px-4 py-2.5 text-white font-mono text-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                    placeholder="[Raise amount: $2,500,000]"
                  />
                  <p className="text-[11px] text-slate-400 font-mono mt-2">
                    Edit the round target for institutional scenario modeling.
                  </p>
                </div>
              ) : (
                <div>
                  <div className="text-3xl font-serif text-white tracking-tight">
                    {raiseAmount}
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-xs font-mono text-teal-400">
                    <span>Target Stage: Phase 2 Seed</span>
                    <span aria-hidden="true">·</span>
                    <span>18–24 Month Operational Runway</span>
                  </div>
                </div>
              )}
            </div>

            {/* Editable Use of Funds text note */}
            <div className="p-6 rounded-xl bg-slate-950/80 border border-white/10">
              <label
                htmlFor="use-of-funds-input"
                className="block text-xs font-mono uppercase text-slate-400 mb-2"
              >
                [Use of funds] Summary Specification
              </label>

              {isEditing ? (
                <textarea
                  id="use-of-funds-input"
                  rows={4}
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  className="w-full bg-slate-900 border border-teal-500/50 rounded-lg p-3 text-sm text-slate-200 font-mono focus:outline-none focus:ring-2 focus:ring-teal-400 leading-relaxed"
                />
              ) : (
                <p className="text-sm font-mono text-slate-300 leading-relaxed whitespace-pre-wrap">
                  {customNotes}
                </p>
              )}
            </div>
          </div>

          {/* Right Column: Visual Breakdown Bar and Percentages */}
          <div className="lg:col-span-6 p-6 rounded-xl bg-slate-950/80 border border-white/10">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-6 flex items-center justify-between">
              <span>Capital Distribution Architecture</span>
              <span className="text-amber-300">Total: 100%</span>
            </h4>

            {/* Visual allocation bar */}
            <div className="h-3 w-full rounded-full bg-slate-800 flex overflow-hidden mb-6">
              <div
                style={{ width: `${cohortOpsPercent}%` }}
                className="bg-teal-400 transition-all duration-300"
                title={`Cohort Ops: ${cohortOpsPercent}%`}
              />
              <div
                style={{ width: `${softwarePercent}%` }}
                className="bg-teal-600 transition-all duration-300"
                title={`Software: ${softwarePercent}%`}
              />
              <div
                style={{ width: `${labPercent}%` }}
                className="bg-amber-400 transition-all duration-300"
                title={`Lab & Assays: ${labPercent}%`}
              />
              <div
                style={{ width: `${regulatoryPercent}%` }}
                className="bg-slate-400 transition-all duration-300"
                title={`Regulatory & Ethics: ${regulatoryPercent}%`}
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-2 text-slate-300">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-400" />
                  Cohort Ops & 10,000 Participant Recruitment
                </span>
                <span className="font-mono text-white tabular-nums font-semibold">
                  {cohortOpsPercent}%
                </span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-2 text-slate-300">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-600" />
                  Glowify Health OS & Computational Modeling
                </span>
                <span className="font-mono text-white tabular-nums font-semibold">
                  {softwarePercent}%
                </span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-2 text-slate-300">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  Biomarker Kits, Epigenetic Sequencing & Lab Ops
                </span>
                <span className="font-mono text-white tabular-nums font-semibold">
                  {labPercent}%
                </span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-2 text-slate-300">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                  Independent Ethics Board, DPDP Audit & Governance
                </span>
                <span className="font-mono text-white tabular-nums font-semibold">
                  {regulatoryPercent}%
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-slate-400 flex items-center justify-between">
              <span>Dilution Discipline</span>
              <span className="text-teal-400">Milestone Driven</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
