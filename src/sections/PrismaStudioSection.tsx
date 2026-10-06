import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Sparkles, Repeat } from 'lucide-react';
import { ScrollLinkedHeading } from '../components/ScrollLinkedHeading';
import { ProgressiveTextReveal } from '../components/AnimatedLetter';
import { KineticScrollText } from '../components/KineticScrollText';

interface OneLoopStudioProps {
  onJoinLab?: () => void;
  onInquiriesClick?: () => void;
}

export const PrismaStudioSection: React.FC<OneLoopStudioProps> = ({
  onJoinLab,
}) => {
  return (
    <div id="workflows" className="w-full bg-black text-[#E1E0CC] selection:bg-[#DEDBC8]/20 selection:text-white">
      {/* =========================================================================
          ONELOOP PHILOSOPHY SECTION (Scroll-Linked Illumination & Running Marquee)
         ========================================================================= */}
      <section id="director" className="bg-black py-24 px-4 sm:px-6 md:px-12 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#DEDBC8]/5 rounded-full blur-[150px] pointer-events-none" />

        {/* Running Marquee Text 1 (Left Scrolling) */}
        <KineticScrollText
          text="∞ CONTINUOUS 60 FPS MOTION • ZERO JANK TRANSITIONS • LIQUID GLASS REFRACTION • FRAME-LOCKED CANVAS"
          direction="left"
          className="text-4xl sm:text-6xl md:text-7xl font-heading italic text-white/10 uppercase tracking-tight"
        />

        {/* Central Dark Glass Card */}
        <div className="bg-[#0f0f0f] border border-white/10 rounded-3xl p-8 sm:p-14 md:p-20 max-w-6xl w-full text-center shadow-[0_20px_80px_rgba(0,0,0,0.95)] liquid-glass my-8 z-10">
          <div className="inline-flex items-center gap-2 text-primary text-xs uppercase tracking-[0.25em] font-semibold mb-6">
            <Sparkles size={14} />
            <span>// 04 OneLoop Philosophy &amp; Continuous Standard</span>
          </div>

          {/* Monumental Headline with Smooth Scroll-Linked Word Illumination */}
          <div className="mb-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading">
            <ScrollLinkedHeading
              line1="OneLoop was engineered"
              line2Italic="to eliminate fragmented, disposable video."
              line3="Continuous frame-locked motion for the living web."
            />
          </div>

          {/* Progressive Scroll-Linked Paragraph */}
          <ProgressiveTextReveal
            text="Traditional video players break digital interfaces with jarring stop points, buffer delays, and layout shifts. OneLoop unifies continuous frame velocity, liquid glass refraction, and sub-millisecond memory recycling into a single, unbreakable loop."
            className="text-[#DEDBC8] text-sm sm:text-base md:text-lg max-w-3xl mx-auto font-light leading-relaxed"
          />
        </div>

        {/* Running Marquee Text 2 (Right Scrolling) */}
        <KineticScrollText
          text="4.8X VISUAL ATTENTION RETENTION • 0.00ms SEAM TIME • SUB-MILLISECOND MEMORY CACHING • ZERO-CLS STABILITY"
          direction="right"
          className="text-4xl sm:text-6xl md:text-7xl font-heading italic text-[#DEDBC8]/10 uppercase tracking-tight"
        />
      </section>

      {/* =========================================================================
          ONELOOP WORKFLOWS & STUDIO TOOLKIT (4-Column Grid)
         ========================================================================= */}
      <section className="relative min-h-screen bg-black py-20 px-4 sm:px-6 md:px-12 overflow-hidden">
        {/* Subtle Noise Background */}
        <div className="bg-noise absolute inset-0 opacity-[0.12] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <div className="text-xs uppercase font-mono text-primary mb-3 tracking-[0.25em] flex items-center justify-center gap-2">
              <Repeat size={14} />
              <span>// 05 OneLoop Studio Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading italic text-[#E1E0CC] tracking-tight mb-3">
              The OneLoop production pipeline.
            </h2>
            <p className="text-sm sm:text-base text-[#DEDBC8]/60 font-body font-light">
              Frame-locked continuity from camera capture to browser edge.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:min-h-[500px]">
            {/* Card 1: Video Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl overflow-hidden min-h-[400px] lg:min-h-full flex flex-col justify-end p-6 border border-white/15 group shadow-2xl"
            >
              <video
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
              <div className="relative z-10">
                <span className="text-[11px] font-mono uppercase tracking-widest text-primary font-semibold mb-1 block">
                  Interactive Frame
                </span>
                <h3 className="text-2xl font-heading italic text-[#E1E0CC]">The OneLoop Canvas.</h3>
                <p className="text-xs text-[#DEDBC8]/70 font-light mt-1">
                  60 FPS frame-locked viewport with sub-millisecond memory recycling.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Loop Seam Matcher */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#121212] border border-white/10 rounded-2xl p-6 flex flex-col justify-between min-h-[400px] lg:min-h-full hover:border-primary/40 transition-all shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="liquid-glass w-12 h-12 rounded-xl flex items-center justify-center">
                    <img
                      src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85"
                      alt="Storyboard icon"
                      className="w-8 h-8 rounded-lg object-cover"
                    />
                  </div>
                  <span className="text-primary font-mono text-xs font-semibold">01</span>
                </div>
                <h3 className="text-xl font-heading italic text-[#E1E0CC] mb-4">Loop Seam Matcher.</h3>
                <ul className="space-y-3 text-xs text-[#DEDBC8]/70">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-primary flex-shrink-0" />
                    <span>Optical flow seam reconciliation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-primary flex-shrink-0" />
                    <span>End-point vector velocity sync</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-primary flex-shrink-0" />
                    <span>Automated keyframe loop stitching</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-primary flex-shrink-0" />
                    <span>Instant DaVinci & Premiere export</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#DEDBC8]/50">Seam Calibration</span>
                <button
                  onClick={onJoinLab}
                  className="flex items-center gap-1 text-xs text-primary hover:text-white transition-colors cursor-pointer"
                >
                  <span>Learn more</span>
                  <ArrowRight size={14} className="-rotate-45" />
                </button>
              </div>
            </motion.div>

            {/* Card 3: Shader Harmonizer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#121212] border border-white/10 rounded-2xl p-6 flex flex-col justify-between min-h-[400px] lg:min-h-full hover:border-primary/40 transition-all shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="liquid-glass w-12 h-12 rounded-xl flex items-center justify-center">
                    <img
                      src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85"
                      alt="Critique icon"
                      className="w-8 h-8 rounded-lg object-cover"
                    />
                  </div>
                  <span className="text-primary font-mono text-xs font-semibold">02</span>
                </div>
                <h3 className="text-xl font-heading italic text-[#E1E0CC] mb-4">Shader Harmonizer.</h3>
                <ul className="space-y-3 text-xs text-[#DEDBC8]/70">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-primary flex-shrink-0" />
                    <span>Real-time liquid glass refraction</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-primary flex-shrink-0" />
                    <span>ACES color gamut normalization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-primary flex-shrink-0" />
                    <span>Dynamic film grain post-processing</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#DEDBC8]/50">Optic Engine</span>
                <button
                  onClick={onJoinLab}
                  className="flex items-center gap-1 text-xs text-primary hover:text-white transition-colors cursor-pointer"
                >
                  <span>Learn more</span>
                  <ArrowRight size={14} className="-rotate-45" />
                </button>
              </div>
            </motion.div>

            {/* Card 4: Acoustic Resonance */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#121212] border border-white/10 rounded-2xl p-6 flex flex-col justify-between min-h-[400px] lg:min-h-full hover:border-primary/40 transition-all shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="liquid-glass w-12 h-12 rounded-xl flex items-center justify-center">
                    <img
                      src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85"
                      alt="Immersion icon"
                      className="w-8 h-8 rounded-lg object-cover"
                    />
                  </div>
                  <span className="text-primary font-mono text-xs font-semibold">03</span>
                </div>
                <h3 className="text-xl font-heading italic text-[#E1E0CC] mb-4">Acoustic Resonance.</h3>
                <ul className="space-y-3 text-xs text-[#DEDBC8]/70">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-primary flex-shrink-0" />
                    <span>Synchronized audio loop envelopes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-primary flex-shrink-0" />
                    <span>Generative binaural soundscapes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-primary flex-shrink-0" />
                    <span>Browser Web Audio API integration</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#DEDBC8]/50">Audio Matrix</span>
                <button
                  onClick={onJoinLab}
                  className="flex items-center gap-1 text-xs text-primary hover:text-white transition-colors cursor-pointer"
                >
                  <span>Learn more</span>
                  <ArrowRight size={14} className="-rotate-45" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
