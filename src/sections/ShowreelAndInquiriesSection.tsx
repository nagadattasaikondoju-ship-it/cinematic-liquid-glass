import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Send, CheckCircle2, Sparkles, ArrowUp, Repeat } from 'lucide-react';

interface ShowreelAndInquiriesProps {
  onOpenShowreelModal: () => void;
}

export const ShowreelAndInquiriesSection: React.FC<ShowreelAndInquiriesProps> = ({
  onOpenShowreelModal,
}) => {
  // Video player controls
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Form submission state
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'OneLoop Studio Brand Experience',
    timeline: 'Q3 2026',
    budget: '$25k - $50k',
    message: '',
  });

  const toggleVideoPlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleVideoMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        projectType: 'OneLoop Studio Brand Experience',
        timeline: 'Q3 2026',
        budget: '$25k - $50k',
        message: '',
      });
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-black text-[#E1E0CC] selection:bg-[#DEDBC8]/20 selection:text-white">
      {/* =========================================================================
          ONELOOP SHOWREEL SECTION
         ========================================================================= */}
      <section id="showreel" className="py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase font-mono text-primary mb-3 tracking-[0.25em]">
            <Repeat size={13} />
            <span>// 06 OneLoop Cinematic Vault</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading italic text-[#E1E0CC] tracking-tight">
            The 2026 OneLoop Showreel
          </h2>
          <p className="text-xs sm:text-sm text-[#DEDBC8]/70 font-light mt-2 max-w-lg mx-auto">
            A continuous montage of frame-locked visual architectures, liquid glass refraction, and real-time WebGL shaders.
          </p>
        </div>

        {/* Embedded Video Player Card */}
        <div className="relative rounded-3xl overflow-hidden liquid-glass border border-white/15 shadow-[0_0_80px_rgba(0,0,0,0.9)] aspect-video max-h-[640px] w-full group">
          <video
            ref={videoRef}
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260619_191346_9d19d66e-86a4-47f7-8dc6-712c1788c3b2.mp4"
            className="w-full h-full object-cover cursor-pointer"
            loop
            muted={isMuted}
            playsInline
            onClick={toggleVideoPlay}
          />

          {/* Big Center Play Icon (visible when paused) */}
          {!isPlaying && (
            <div
              onClick={toggleVideoPlay}
              className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer transition-opacity backdrop-blur-[2px]"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-primary text-black flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all">
                <Play size={32} className="fill-current translate-x-1" />
              </div>
            </div>
          )}

          {/* Bottom Floating Video Controls Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-between z-20">
            <div className="flex items-center gap-3">
              <button
                onClick={toggleVideoPlay}
                className="liquid-glass rounded-full p-3 text-white hover:scale-105 transition-all"
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} />}
              </button>
              <button
                onClick={toggleVideoMute}
                className="liquid-glass rounded-full p-3 text-white hover:scale-105 transition-all"
                title={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
              <span className="text-xs font-mono text-[#DEDBC8]/70 hidden sm:inline">
                OneLoop ACES HDR &bull; 60 FPS Mastered
              </span>
            </div>

            <button
              onClick={onOpenShowreelModal}
              className="liquid-glass rounded-full px-4 py-2 text-xs font-semibold text-primary hover:text-white flex items-center gap-2 hover:scale-105 transition-all"
            >
              <span>Launch Theater Mode</span>
              <Maximize2 size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          DEPLOY ONELOOP / INQUIRIES BRIEF SECTION
         ========================================================================= */}
      <section id="inquiries" className="py-20 px-4 sm:px-6 md:px-12 max-w-5xl mx-auto">
        <div className="bg-[#101010] border border-white/10 rounded-3xl p-8 sm:p-12 md:p-16 liquid-glass shadow-[0_20px_80px_rgba(0,0,0,0.9)]">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary mb-3">
              <Sparkles size={14} />
              <span>// 07 Deploy OneLoop Integration</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-heading italic text-[#E1E0CC] tracking-tight">
              Deploy OneLoop for Your Brand
            </h2>
            <p className="text-xs sm:text-sm text-[#DEDBC8]/70 font-light mt-2 max-w-md mx-auto">
              Partner with the OneLoop engineering &amp; cinematic direction studio for your flagship web presence.
            </p>
          </div>

          {submitted ? (
            <div className="py-12 text-center flex flex-col items-center justify-center">
              <CheckCircle2 size={56} className="text-primary mb-4 animate-bounce" />
              <h3 className="font-heading italic text-3xl sm:text-4xl text-white mb-2">
                OneLoop Brief Received
              </h3>
              <p className="text-[#DEDBC8]/80 text-sm max-w-md font-body">
                Thank you for reaching out. A partner director will review your specifications and schedule a private demonstration within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#DEDBC8]/70 block mb-1.5 font-medium font-mono">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Marcus Vance"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-[#E1E0CC] placeholder:text-[#E1E0CC]/30 focus:border-primary outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#DEDBC8]/70 block mb-1.5 font-medium font-mono">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="marcus@agency.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-[#E1E0CC] placeholder:text-[#E1E0CC]/30 focus:border-primary outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#DEDBC8]/70 block mb-1.5 font-medium font-mono">
                    OneLoop Deployment Scope
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#E1E0CC] focus:border-primary outline-none transition-colors"
                  >
                    <option>OneLoop Studio Brand Experience</option>
                    <option>Continuous Cinematic Web Application</option>
                    <option>Interactive 3D Motion Architecture</option>
                    <option>Custom OneLoop SDK Integration</option>
                  </select>
                </div>
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#DEDBC8]/70 block mb-1.5 font-medium font-mono">
                    Target Launch
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#E1E0CC] focus:border-primary outline-none transition-colors"
                  >
                    <option>Q3 2026 (Aug &ndash; Sep)</option>
                    <option>Q4 2026 (Oct &ndash; Dec)</option>
                    <option>Q1 2027 (Jan &ndash; Mar)</option>
                  </select>
                </div>
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#DEDBC8]/70 block mb-1.5 font-medium font-mono">
                    Budget Allocation
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#E1E0CC] focus:border-primary outline-none transition-colors"
                  >
                    <option>$25,000 &ndash; $50,000</option>
                    <option>$50,000 &ndash; $100,000</option>
                    <option>$100,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-wider text-[#DEDBC8]/70 block mb-1.5 font-medium font-mono">
                  Project Brief & Vision
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your brand vision, performance requirements, and reference inspirations."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-[#E1E0CC] placeholder:text-[#E1E0CC]/30 focus:border-primary outline-none transition-colors"
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="bg-[#DEDBC8] hover:bg-white text-black font-semibold text-sm px-8 py-3.5 rounded-full flex items-center gap-2.5 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-xl"
                >
                  <span>Submit OneLoop Brief</span>
                  <Send size={16} />
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* =========================================================================
          ONELOOP GLOBAL FOOTER
         ========================================================================= */}
      <footer className="border-t border-white/10 bg-[#070707] py-14 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Brand info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-heading italic text-3xl text-[#E1E0CC] tracking-tight flex items-center gap-2">
              <Repeat size={20} className="text-primary" />
              <span>OneLoop &bull; Studio</span>
            </span>
            <p className="text-xs text-[#DEDBC8]/60 mt-1 font-light">
              The continuous cinematic visual standard built to outlast trends.
            </p>
          </div>

          {/* Center Locations */}
          <div className="text-xs font-mono text-[#DEDBC8]/50 flex items-center gap-4 flex-wrap justify-center">
            <span>LONDON</span>
            <span>&bull;</span>
            <span>BERLIN</span>
            <span>&bull;</span>
            <span>TOKYO</span>
            <span>&bull;</span>
            <span>PARIS</span>
            <span>&bull;</span>
            <span>SAN FRANCISCO</span>
          </div>

          {/* Right Action */}
          <div className="flex items-center gap-4">
            <span className="text-xs text-[#DEDBC8]/50">&copy; 2026 OneLoop Studio. All Rights Reserved.</span>
            <button
              onClick={scrollToTop}
              className="liquid-glass rounded-full p-3 text-[#E1E0CC] hover:text-white hover:bg-white/10 transition-all hover:scale-110"
              title="Back to Top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};
