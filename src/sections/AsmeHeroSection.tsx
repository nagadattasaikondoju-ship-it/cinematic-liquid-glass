import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Repeat, ArrowRight, Instagram, Twitter, ChevronDown, Sparkles } from 'lucide-react';
import { FadingVideo } from '../components/FadingVideo';
import { GlobeStrokeIcon } from '../components/CustomIcons';

interface OneLoopHeroProps {
  onStartProject?: () => void;
  onShowManifesto?: () => void;
  onWatchShowreel?: () => void;
}

export const OneLoopHeroSection: React.FC<OneLoopHeroProps> = ({
  onStartProject,
  onShowManifesto,
  onWatchShowreel,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <section id="hero" className="relative min-h-screen w-full bg-black overflow-hidden flex flex-col justify-between select-none">
      {/* Background Video with 17% downward shift and RAF fading */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <FadingVideo
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4"
          className="w-full h-full object-cover translate-y-[17%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black pointer-events-none" />
      </div>

      {/* Header Spacer */}
      <div className="h-24" />

      {/* Hero Content Area */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-8 text-center max-w-5xl mx-auto w-full">
        {/* Top Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="liquid-glass rounded-full px-4 py-1.5 inline-flex items-center gap-2.5 text-xs text-[#E1E0CC]/90 font-body mb-6"
        >
          <span className="bg-[#DEDBC8] text-black font-bold px-2 py-0.5 rounded-full text-[10px] tracking-wider uppercase flex items-center gap-1">
            <Repeat size={11} className="text-black animate-spin-slow" />
            OneLoop v2.6
          </span>
          <span className="tracking-wide">Continuous Cinematic Playback Standard &bull; Zero-Jank Architecture</span>
        </motion.div>

        {/* Main Heading in Instrument Serif */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: 'blur(12px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: "'Instrument Serif', serif" }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.75rem] text-[#E1E0CC] mb-6 tracking-tight leading-[0.95] max-w-4xl"
        >
          OneLoop: The Infinite Cinematic Video & Web Engine.
        </motion.h1>

        {/* Subtitle Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
          className="text-[#DEDBC8]/80 text-sm sm:text-base max-w-2xl font-light font-body leading-relaxed mb-8"
        >
          Transforming static landing interfaces into living, breathing digital canvases. Continuous frame-locked playback, liquid glass optics, and zero latency.
        </motion.p>

        {/* Interactive Email Bar & Quick CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl w-full space-y-4"
        >
          {/* Email input bar with liquid-glass morphism */}
          <form
            onSubmit={handleSubscribe}
            className="liquid-glass rounded-full pl-6 pr-2 py-2 flex items-center gap-3 transition-all focus-within:shadow-[0_0_30px_rgba(222,219,200,0.2)]"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={subscribed ? "✓ You're on the OneLoop Developer Beta list!" : "Enter your email for private OneLoop SDK access"}
              className="bg-transparent flex-1 text-[#E1E0CC] placeholder:text-[#E1E0CC]/40 text-sm sm:text-base outline-none border-none"
              required
            />
            <button
              type="submit"
              aria-label="Submit email"
              className="bg-[#DEDBC8] hover:bg-white rounded-full p-3 text-black transition-all hover:scale-105 active:scale-95 flex items-center justify-center cursor-pointer shadow-md"
            >
              <ArrowRight size={18} />
            </button>
          </form>

          {/* Action Buttons Row */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onStartProject}
              className="liquid-glass-strong rounded-full px-6 py-2.5 text-xs sm:text-sm font-semibold text-[#E1E0CC] hover:bg-white/10 transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              <span>Deploy OneLoop for Your Brand</span>
              <ArrowRight size={14} className="text-primary" />
            </button>
            <button
              onClick={onWatchShowreel}
              className="liquid-glass rounded-full px-5 py-2.5 text-xs sm:text-sm font-medium text-[#E1E0CC]/90 hover:text-white transition-all hover:bg-white/5"
            >
              Watch OneLoop Showreel
            </button>
            <button
              onClick={onShowManifesto}
              className="text-[#E1E0CC]/70 hover:text-[#E1E0CC] text-xs sm:text-sm font-medium transition-colors px-3 py-2"
            >
              The OneLoop Philosophy &rarr;
            </button>
          </div>
        </motion.div>

        {/* OneLoop Stats Cards Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 w-full max-w-2xl"
        >
          <div className="liquid-glass p-4 rounded-2xl text-left">
            <div className="text-primary flex items-center justify-between">
              <Repeat size={18} />
              <span className="text-[10px] uppercase font-mono text-white/40">Continuity</span>
            </div>
            <div className="text-2xl sm:text-3xl font-heading italic tracking-[-1px] text-[#E1E0CC] mt-2">
              0.00 ms
            </div>
            <p className="text-[11px] text-[#DEDBC8]/60 font-body font-light mt-1">
              Loop Interruption &amp; Seam Time
            </p>
          </div>

          <div className="liquid-glass p-4 rounded-2xl text-left">
            <div className="text-primary flex items-center justify-between">
              <GlobeStrokeIcon size={18} />
              <span className="text-[10px] uppercase font-mono text-white/40">Engagement</span>
            </div>
            <div className="text-2xl sm:text-3xl font-heading italic tracking-[-1px] text-[#E1E0CC] mt-2">
              4.8x Dwell
            </div>
            <p className="text-[11px] text-[#DEDBC8]/60 font-body font-light mt-1">
              Average User Attention Retention
            </p>
          </div>

          <div className="liquid-glass p-4 rounded-2xl text-left col-span-2 sm:col-span-1">
            <div className="text-primary flex items-center justify-between">
              <Sparkles size={18} />
              <span className="text-[10px] uppercase font-mono text-white/40">Bitrate</span>
            </div>
            <div className="text-2xl sm:text-3xl font-heading italic tracking-[-1px] text-[#E1E0CC] mt-2">
              60 FPS
            </div>
            <p className="text-[11px] text-[#DEDBC8]/60 font-body font-light mt-1">
              Hardware WebGL Shaders
            </p>
          </div>
        </motion.div>
      </div>

      {/* Hero Footer Bar */}
      <div className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6 max-w-7xl mx-auto w-full">
        {/* Social Links */}
        <div className="flex items-center gap-3">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="liquid-glass rounded-full p-2.5 text-[#E1E0CC]/80 hover:text-white hover:bg-white/10 transition-all"
          >
            <Instagram size={16} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="liquid-glass rounded-full p-2.5 text-[#E1E0CC]/80 hover:text-white hover:bg-white/10 transition-all"
          >
            <Twitter size={16} />
          </a>
          <a
            href="#engine"
            aria-label="OneLoop Engine"
            className="liquid-glass rounded-full p-2.5 text-[#E1E0CC]/80 hover:text-white hover:bg-white/10 transition-all"
          >
            <Repeat size={16} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#engine"
          className="flex items-center gap-2 text-xs font-mono text-[#DEDBC8]/60 hover:text-primary transition-colors group"
        >
          <span>EXPLORE ONELOOP ENGINE</span>
          <ChevronDown size={14} className="group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};
