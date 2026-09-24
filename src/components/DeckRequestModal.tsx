import React, { useState } from 'react';
import { X, Send, CheckCircle, FileText, AlertCircle } from 'lucide-react';

interface DeckRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeckRequestModal: React.FC<DeckRequestModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [organisation, setOrganisation] = useState('');
  const [email, setEmail] = useState('');
  const [isAccredited, setIsAccredited] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !organisation.trim() || !email.trim()) {
      setError('Please complete all required fields.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid work email address.');
      return;
    }
    if (!isAccredited) {
      setError('Please confirm accredited/institutional investor status.');
      return;
    }

    setError('');
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setName('');
    setOrganisation('');
    setEmail('');
    setIsAccredited(false);
    setIsSubmitted(false);
    setError('');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-lg glass-panel p-8 sm:p-10 rounded-2xl border border-teal-500/30 shadow-2xl bg-[#0A0F1D]/95">
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-lg cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-300 mx-auto mb-5">
              <CheckCircle className="w-7 h-7" />
            </div>
            <h3 id="modal-title" className="text-2xl font-serif text-white mb-2">
              Deck Request Logged
            </h3>
            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              Thank you, <span className="text-white font-medium">{name}</span>. The Glowify Institutional Investor Deck & Cohort Architecture Brief will be dispatched to <span className="text-teal-300 font-mono text-xs">{email}</span>.
            </p>
            <button
              onClick={handleClose}
              className="w-full py-2.5 px-4 rounded-lg bg-teal-400 hover:bg-teal-300 text-slate-950 font-medium text-sm transition-colors cursor-pointer"
            >
              Return to Platform Overview
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-300">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 id="modal-title" className="text-xl font-serif text-white">
                  Request Investor Deck
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  Glowify Institutional Brief & Phase 2 Roadmap
                </p>
              </div>
            </div>

            {error && (
              <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-500/30 text-xs text-rose-300 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div>
              <label htmlFor="modal-name" className="block text-xs font-mono uppercase text-slate-300 mb-1">
                Full Name *
              </label>
              <input
                id="modal-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Dr. Eleanor Vance"
                className="w-full bg-slate-900 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-400/30"
              />
            </div>

            <div>
              <label htmlFor="modal-org" className="block text-xs font-mono uppercase text-slate-300 mb-1">
                Organisation / Fund *
              </label>
              <input
                id="modal-org"
                type="text"
                value={organisation}
                onChange={(e) => setOrganisation(e.target.value)}
                placeholder="Apex Bio Ventures"
                className="w-full bg-slate-900 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-400/30"
              />
            </div>

            <div>
              <label htmlFor="modal-email" className="block text-xs font-mono uppercase text-slate-300 mb-1">
                Work Email *
              </label>
              <input
                id="modal-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.vance@apexbioventures.com"
                className="w-full bg-slate-900 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-400/30"
              />
            </div>

            <div>
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isAccredited}
                  onChange={(e) => setIsAccredited(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-white/20 bg-slate-900 text-teal-400 focus:ring-teal-400 cursor-pointer"
                />
                <span className="text-xs text-slate-300 leading-relaxed">
                  I confirm that I am an accredited/institutional investor or research partner.
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-medium text-slate-950 bg-teal-400 hover:bg-teal-300 active:scale-[0.99] transition-all cursor-pointer shadow-md shadow-teal-500/20"
            >
              <span>Transmit Request</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
