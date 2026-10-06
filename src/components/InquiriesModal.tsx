import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles, CheckCircle2 } from 'lucide-react';

interface InquiriesModalProps {
  isOpen: boolean;
  onClose: () => void;
  type?: 'inquiries' | 'manifesto';
}

export const InquiriesModal: React.FC<InquiriesModalProps> = ({
  isOpen,
  onClose,
  type = 'inquiries',
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Brand & Digital Experience',
    timeline: 'Q3 2026',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-xl"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 24 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 24 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            className="relative w-full max-w-2xl rounded-3xl overflow-hidden liquid-glass-strong border border-white/20 shadow-[0_20px_80px_rgba(0,0,0,0.8)] bg-[#0c0c0c] p-6 sm:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 liquid-glass rounded-full p-2.5 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {type === 'manifesto' ? (
              /* Manifesto View */
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary mb-3">
                  <Sparkles size={14} />
                  <span>The Studio Manifesto</span>
                </div>
                <h2 className="font-heading italic text-4xl sm:text-5xl text-white mb-6 tracking-tight">
                  Crafting what endures.
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-white/80 font-light leading-relaxed font-body">
                  <p>
                    We believe the internet has become overly homogenised &mdash; templates, trend-chasing algorithms, and disposable interactions that fade within months.
                  </p>
                  <p>
                    Our conviction is simple: Great digital craft merges cinema, brutalist typography, and low-latency engineering into an unforgettable sensory narrative.
                  </p>
                  <p>
                    We build for the curious, the ambitious founders, and the creative directors who know that visual resonance is a strategic differentiator.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="font-heading italic text-2xl text-white">Asme &bull; Prisma Studio</span>
                  <button
                    onClick={onClose}
                    className="liquid-glass rounded-full px-6 py-2 text-xs font-semibold uppercase tracking-wider text-primary hover:bg-white/10"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              /* Project Inquiries View */
              <div>
                {submitted ? (
                  <div className="py-12 text-center flex flex-col items-center justify-center">
                    <CheckCircle2 size={56} className="text-primary mb-4 animate-bounce" />
                    <h3 className="font-heading italic text-3xl sm:text-4xl text-white mb-2">
                      Inquiry Received
                    </h3>
                    <p className="text-white/70 text-sm max-w-md font-body">
                      Thank you for reaching out. A partner director will review your brief and respond within 24 hours.
                    </p>
                  </div>
                ) : (
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary mb-2">
                      <Sparkles size={14} />
                      <span>Engagement Q3/Q4 2026</span>
                    </div>
                    <h2 className="font-heading italic text-3xl sm:text-4xl text-white mb-2 tracking-tight">
                      Initiate a Collaboration
                    </h2>
                    <p className="text-xs sm:text-sm text-white/70 font-light mb-6">
                      Tell us about your project vision, timeline, and goals.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-[11px] uppercase tracking-wider text-white/60 block mb-1.5 font-medium">
                            Your Name
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Elena Rostova"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-primary outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label className="text-[11px] uppercase tracking-wider text-white/60 block mb-1.5 font-medium">
                            Work Email
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="elena@studio.com"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-primary outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-[11px] uppercase tracking-wider text-white/60 block mb-1.5 font-medium">
                            Scope of Work
                          </label>
                          <select
                            value={formData.projectType}
                            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                            className="w-full bg-[#161616] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-primary outline-none transition-colors"
                          >
                            <option>Brand & Digital Experience</option>
                            <option>Cinematic Web Application</option>
                            <option>Motion Design & Art Direction</option>
                            <option>Full-Stack Studio Build</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-[11px] uppercase tracking-wider text-white/60 block mb-1.5 font-medium">
                            Target Launch Window
                          </label>
                          <select
                            value={formData.timeline}
                            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                            className="w-full bg-[#161616] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-primary outline-none transition-colors"
                          >
                            <option>Q3 2026 (Aug - Sep)</option>
                            <option>Q4 2026 (Oct - Dec)</option>
                            <option>Q1 2027 (Jan - Mar)</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="text-[11px] uppercase tracking-wider text-white/60 block mb-1.5 font-medium">
                          Brief Overview
                        </label>
                        <textarea
                          rows={3}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Briefly describe your objectives, existing assets, and ideal aesthetic."
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-primary outline-none transition-colors"
                        />
                      </div>

                      <div className="pt-2 flex justify-end">
                        <button
                          type="submit"
                          className="bg-primary hover:bg-[#eae8d8] text-black font-semibold text-sm px-6 py-3 rounded-full flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
                        >
                          <span>Submit Brief</span>
                          <Send size={16} />
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
