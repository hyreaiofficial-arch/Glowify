import React, { useState } from 'react';
import { Dna, Brain, Activity, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ResearchProgramsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'aging' | 'memory' | 'monitoring'>('aging');

  return (
    <section
      id="research"
      aria-labelledby="research-heading"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-teal-400 tracking-wider uppercase mb-3">
          <span>Scientific Core</span>
          <span aria-hidden="true" className="text-slate-600">/</span>
          <span>Programs</span>
        </div>
        <h2
          id="research-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight text-balance"
        >
          Research Programs
        </h2>
        <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
          Rigorous cohort science and biological telemetry, structured in three disciplined, peer-reviewed research tracks.
        </p>
      </div>

      {/* Accessible Tab Bar */}
      <div
        role="tablist"
        aria-label="Research Programs"
        className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-slate-900/90 border border-white/10 mb-8 max-w-2xl"
      >
        <button
          role="tab"
          id="tab-aging"
          aria-selected={activeTab === 'aging'}
          aria-controls="panel-aging"
          tabIndex={activeTab === 'aging' ? 0 : -1}
          onClick={() => setActiveTab('aging')}
          className={`flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
            activeTab === 'aging'
              ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40 shadow-sm'
              : 'text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent'
          }`}
        >
          <Dna className="w-4 h-4" aria-hidden="true" />
          <span>A. Slowing Aging</span>
        </button>

        <button
          role="tab"
          id="tab-memory"
          aria-selected={activeTab === 'memory'}
          aria-controls="panel-memory"
          tabIndex={activeTab === 'memory' ? 0 : -1}
          onClick={() => setActiveTab('memory')}
          className={`flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
            activeTab === 'memory'
              ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40 shadow-sm'
              : 'text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent'
          }`}
        >
          <Brain className="w-4 h-4" aria-hidden="true" />
          <span>B. Memory & Digital Clone</span>
        </button>

        <button
          role="tab"
          id="tab-monitoring"
          aria-selected={activeTab === 'monitoring'}
          aria-controls="panel-monitoring"
          tabIndex={activeTab === 'monitoring' ? 0 : -1}
          onClick={() => setActiveTab('monitoring')}
          className={`flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
            activeTab === 'monitoring'
              ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40 shadow-sm'
              : 'text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent'
          }`}
        >
          <Activity className="w-4 h-4" aria-hidden="true" />
          <span>C. 24/7 Monitoring</span>
        </button>
      </div>

      {/* Tab Panels */}
      <div className="glass-panel rounded-2xl p-6 sm:p-10 border border-white/10 relative overflow-hidden">
        {/* Panel A: Slowing Aging */}
        {activeTab === 'aging' && (
          <div
            id="panel-aging"
            role="tabpanel"
            aria-labelledby="tab-aging"
            tabIndex={0}
            className="focus:outline-none"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-amber-300">
                  Program A · Longitudinal Epigenetics
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-white mt-1">
                  Slowing Aging: Cohort Pipeline
                </h3>
              </div>
              <div className="text-xs font-mono text-slate-400 bg-white/5 px-3 py-1.5 rounded border border-white/10 self-start lg:self-auto">
                Cohort Target: <span className="text-teal-300 font-semibold">10,000 Participants</span>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {/* Step 1 */}
              <div className="p-6 rounded-xl bg-slate-950/70 border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-teal-400 font-semibold">STAGE 01</span>
                    <span className="text-xs font-mono text-slate-400">Step 1</span>
                  </div>
                  <h4 className="text-lg font-serif text-white mb-2">Measure</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Establish baseline biological age via multi-omic epigenetic clocks, blood chemistry, and digital phenotyping.
                  </p>
                </div>
                <div className="mt-6 text-[11px] font-mono text-slate-400">
                  Focus: High-resolution baseline assays
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-6 rounded-xl bg-slate-950/70 border border-teal-500/30 flex flex-col justify-between relative">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-amber-300 font-semibold">STAGE 02</span>
                    <span className="text-xs font-mono text-teal-400">Anchor Study</span>
                  </div>
                  <h4 className="text-lg font-serif text-white mb-2">Learn</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Indian Longevity Cohort (Target: 10,000 participants) to build population-specific reference models and identify divergence markers.
                  </p>
                </div>
                <div className="mt-6 text-[11px] font-mono text-teal-300/90 font-medium">
                  Indian Longevity Cohort (Target: 10,000)
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-6 rounded-xl bg-slate-950/70 border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-teal-400 font-semibold">STAGE 03</span>
                    <span className="text-xs font-mono text-slate-400">Step 3</span>
                  </div>
                  <h4 className="text-lg font-serif text-white mb-2">Intervene Safely</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Test and monitor evidence-backed lifestyle, nutraceutical, and metabolic interventions with strict clinical safety bounds.
                  </p>
                </div>
                <div className="mt-6 text-[11px] font-mono text-slate-400">
                  Protocol: Wellness-first, evidence-bound
                </div>
              </div>

              {/* Step 4 */}
              <div className="p-6 rounded-xl bg-slate-950/70 border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-teal-400 font-semibold">STAGE 04</span>
                    <span className="text-xs font-mono text-slate-400">Step 4</span>
                  </div>
                  <h4 className="text-lg font-serif text-white mb-2">Partner on Therapies</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Collaborate with clinical trial sponsors on advanced therapeutic modalities (including cellular reprogramming and senolytics).
                  </p>
                </div>
                <div className="mt-6 text-[11px] font-mono text-slate-400">
                  Planned: Strategic biotech partnerships
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-lg bg-teal-950/20 border border-teal-500/20 flex items-center justify-between flex-wrap gap-4 text-xs">
              <span className="text-slate-300">
                Data Architecture: Longitudinal time-series combining epigenetic methylation rates with phenotypic markers.
              </span>
              <span className="font-mono text-teal-300">Measure → Learn → Intervene → Partner</span>
            </div>
          </div>
        )}

        {/* Panel B: Memory & Digital Clone */}
        {activeTab === 'memory' && (
          <div
            id="panel-memory"
            role="tabpanel"
            aria-labelledby="tab-memory"
            tabIndex={0}
            className="focus:outline-none"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-amber-300">
                  Program B · Cognitive Architecture & Ethics
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-white mt-1">
                  Memory & Digital Clone
                </h3>
              </div>
              <div className="text-xs font-mono text-teal-300 bg-white/5 px-3 py-1.5 rounded border border-white/10 self-start lg:self-auto flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                <span>Governed by Independent Ethics Board</span>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Phase A */}
              <div className="p-6 rounded-xl bg-slate-950/70 border border-teal-500/30">
                <div className="text-xs font-mono text-teal-400 mb-2 font-semibold">PHASE A</div>
                <h4 className="text-xl font-serif text-white mb-2">Consented Digital Persona</h4>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  Structured multi-modal personal history capture, narrative archiving, and verifiable episodic memory curation under explicit, revocable individual consent.
                </p>
                <div className="text-xs font-mono text-slate-400 pt-3 border-t border-white/10">
                  Status: Planned · Consent-First Framework
                </div>
              </div>

              {/* Phase B */}
              <div className="p-6 rounded-xl bg-slate-950/70 border border-white/10">
                <div className="text-xs font-mono text-teal-400 mb-2 font-semibold">PHASE B</div>
                <h4 className="text-xl font-serif text-white mb-2">Cognitive & Neural Signals</h4>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  Research into neural-signal correlations, reaction latencies, speech patterns, and micro-cognitive benchmarks to track cognitive longevity and stability over decades.
                </p>
                <div className="text-xs font-mono text-slate-400 pt-3 border-t border-white/10">
                  Status: Planned Research
                </div>
              </div>

              {/* Phase C */}
              <div className="p-6 rounded-xl bg-slate-950/70 border border-white/10">
                <div className="text-xs font-mono text-amber-300 mb-2 font-semibold">PHASE C</div>
                <h4 className="text-xl font-serif text-white mb-2">Mind-Preservation Research</h4>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  Long-horizon exploratory research into digital identity continuity, consciousness models, and neural fidelity, subject to ongoing oversight by an independent ethics board.
                </p>
                <div className="text-xs font-mono text-amber-300/80 pt-3 border-t border-white/10">
                  Status: Long-Horizon · Ethics-Board Supervised
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-lg bg-slate-900/60 border border-white/10 text-xs text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
              <span>
                All memory and cognitive modeling protocols operate under strict zero-knowledge encryption, revocable data sovereignty, and DPDP Act compliance.
              </span>
            </div>
          </div>
        )}

        {/* Panel C: 24/7 Monitoring */}
        {activeTab === 'monitoring' && (
          <div
            id="panel-monitoring"
            role="tabpanel"
            aria-labelledby="tab-monitoring"
            tabIndex={0}
            className="focus:outline-none"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-amber-300">
                  Program C · Continuous Telemetry Architecture
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-white mt-1">
                  24/7 Monitoring Strategy
                </h3>
              </div>
              <div className="text-xs font-mono text-slate-400 bg-white/5 px-3 py-1.5 rounded border border-white/10 self-start lg:self-auto">
                Hardware Staging: <span className="text-teal-300 font-semibold">Partner Hardware First</span>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-7 rounded-xl bg-slate-950/70 border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-teal-400 mb-2 font-semibold">LAYER 1 · CONTINUOUS SENSING</div>
                  <h4 className="text-xl font-serif text-white mb-3">Wearable Signals</h4>
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    Continuous streaming of heart rate variability (HRV), nocturnal pulse ox, autonomic stress metrics, core temperature variation, and sleep stages.
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Strategy: Partner hardware first to integrate established consumer and medical sensors quickly into Glowify Health OS.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Frequency: Real-time telemetry</span>
                  <span className="text-teal-300">Partner Hardware First</span>
                </div>
              </div>

              <div className="p-7 rounded-xl bg-slate-950/70 border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-amber-300 mb-2 font-semibold">LAYER 2 · PERIODIC BIOMARKERS</div>
                  <h4 className="text-xl font-serif text-white mb-3">Biomarker Sampling Kits</h4>
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    Periodic mail-in biomarker kits capturing epigenetic DNA methylation, metabolic panels, inflammatory cytokines, and hormonal baselines.
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Cadence: Quarterly sampling to re-calibrate physiological clock velocity against daily wearable streams.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Frequency: Quarterly/Bi-annual</span>
                  <span className="text-slate-300">Own Hardware Later [Planned]</span>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-lg bg-teal-950/20 border border-teal-500/20 text-xs text-slate-300 flex items-center justify-between flex-wrap gap-3">
              <span>Hardware Evolution: <strong>Partner hardware first</strong> → Validate sensor algorithms → <strong>Own hardware later [Planned]</strong></span>
              <span className="font-mono text-teal-300 text-[11px]">Glowify Telemetry Engine</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
