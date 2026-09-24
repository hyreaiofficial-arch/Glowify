import React, { useState } from 'react';
import { Mail, CheckCircle, Send, Building, User, MessageSquare, AlertCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    organisation: '',
    email: '',
    message: '',
    isAccredited: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.organisation.trim()) {
      newErrors.organisation = 'Organisation or institution name is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Work email is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide an inquiry message or request description';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    if (!formData.isAccredited) {
      newErrors.isAccredited = 'Please confirm your accredited or institutional status';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Front-end simulation delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 450);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      organisation: '',
      email: '',
      message: '',
      isAccredited: false,
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Context & Contact Details */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2 text-xs font-mono text-teal-400 tracking-wider uppercase mb-3">
            <span>Inquiries & Relations</span>
            <span aria-hidden="true" className="text-slate-600">/</span>
            <span>Contact</span>
          </div>

          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight text-balance"
          >
            Engage with Glowify
          </h2>

          <p className="mt-6 text-slate-300 text-base sm:text-lg leading-relaxed">
            We welcome conversations with seed and institutional investors, longevity scientists, prospective advisors, and clinical research partners.
          </p>

          <div className="mt-8 space-y-4">
            <div className="p-5 rounded-xl bg-slate-950/70 border border-white/10 flex items-start gap-4">
              <Mail className="w-5 h-5 text-teal-300 shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase">Primary Inquiries</div>
                {/* Visible placeholder email */}
                <div className="text-sm sm:text-base font-mono text-white mt-0.5 select-all">
                  [contact@glowify.life]
                </div>
                <div className="text-xs text-slate-400 mt-1 font-mono">
                  Alternative: [contact@...]
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-950/70 border border-white/10 text-xs text-slate-400 space-y-2">
              <div className="font-mono text-teal-300 uppercase">Institutional Verification</div>
              <p className="leading-relaxed">
                Investor decks, cohort statistical models, and protocol documents are released to verified institutional and qualified angel partners following initial review.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-white/10 relative">
            {isSubmitted ? (
              <div className="text-center py-10 animate-in fade-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-300 mx-auto mb-6">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif text-white mb-2">
                  Inquiry Received
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed mb-8">
                  Thank you for reaching out, <span className="text-white font-medium">{formData.name}</span>. Our team will review your inquiry from <span className="text-white font-medium">{formData.organisation}</span> and respond via <span className="text-teal-300 font-mono text-xs">{formData.email}</span> within 24 business hours.
                </p>
                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10 transition-colors cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <h3 className="text-xl font-serif text-white mb-1">
                    Request Investor Deck & Research Brief
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    All inquiries are held in strict institutional confidence.
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                    Full Name <span className="text-teal-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="Dr. Eleanor Vance"
                      className={`w-full bg-slate-900/90 border rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 ${
                        errors.name
                          ? 'border-rose-500/60 focus:ring-rose-400'
                          : 'border-white/10 focus:border-teal-400 focus:ring-teal-400/20'
                      }`}
                    />
                  </div>
                  {errors.name && (
                    <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Organisation */}
                <div>
                  <label htmlFor="organisation" className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                    Organisation / Institution / Fund <span className="text-teal-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="organisation"
                      type="text"
                      value={formData.organisation}
                      onChange={(e) => {
                        setFormData({ ...formData, organisation: e.target.value });
                        if (errors.organisation) setErrors({ ...errors, organisation: '' });
                      }}
                      placeholder="e.g. Apex Bio Ventures or Stanford Longevity Center"
                      className={`w-full bg-slate-900/90 border rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 ${
                        errors.organisation
                          ? 'border-rose-500/60 focus:ring-rose-400'
                          : 'border-white/10 focus:border-teal-400 focus:ring-teal-400/20'
                      }`}
                    />
                  </div>
                  {errors.organisation && (
                    <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.organisation}</span>
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                    Work Email <span className="text-teal-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="e.vance@apexbioventures.com"
                      className={`w-full bg-slate-900/90 border rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 ${
                        errors.email
                          ? 'border-rose-500/60 focus:ring-rose-400'
                          : 'border-white/10 focus:border-teal-400 focus:ring-teal-400/20'
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                    Inquiry Message & Investment Context <span className="text-teal-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="We would like to review the Phase 2 seed round documentation, the Indian Longevity Cohort design, and discuss potential scientific co-development."
                    className={`w-full bg-slate-900/90 border rounded-lg p-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 ${
                      errors.message
                        ? 'border-rose-500/60 focus:ring-rose-400'
                        : 'border-white/10 focus:border-teal-400 focus:ring-teal-400/20'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Mandatory Checkbox: "I am an accredited or institutional investor" */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={formData.isAccredited}
                      onChange={(e) => {
                        setFormData({ ...formData, isAccredited: e.target.checked });
                        if (errors.isAccredited) setErrors({ ...errors, isAccredited: '' });
                      }}
                      className="mt-1 h-4 w-4 rounded border-white/20 bg-slate-900 text-teal-400 focus:ring-teal-400 focus:ring-offset-0 cursor-pointer"
                    />
                    <span className="text-xs text-slate-300 leading-relaxed group-hover:text-white transition-colors">
                      I am an accredited or institutional investor, scientific researcher, or grant body representative.
                    </span>
                  </label>
                  {errors.isAccredited && (
                    <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.isAccredited}</span>
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg text-sm font-medium text-slate-950 bg-teal-400 hover:bg-teal-300 active:scale-[0.99] disabled:opacity-50 transition-all shadow-md shadow-teal-500/20 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Submitting Inquiry...</span>
                  ) : (
                    <>
                      <span>Transmit Institutional Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
