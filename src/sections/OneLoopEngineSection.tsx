import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Repeat, Sliders, Cpu, Eye, Gauge, Layers } from 'lucide-react';
import { FadingVideo } from '../components/FadingVideo';

interface OneLoopEngineProps {
  onExploreBrief?: () => void;
}

export const OneLoopEngineSection: React.FC<OneLoopEngineProps> = ({
  onExploreBrief,
}) => {
  const [activeFilter, setActiveFilter] = useState<'clean' | 'glare' | 'grain'>('clean');
  const [fpsMode, setFpsMode] = useState<'24' | '60'>('60');

  return (
    <section id="oneloop" className="relative w-full bg-black text-[#E1E0CC] selection:bg-[#DEDBC8]/20 selection:text-white py-24 px-4 sm:px-6 md:px-12 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#DEDBC8]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header with Staggered Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-primary mb-3">
            <Repeat size={14} className="animate-spin-slow" />
            <span>// 03 The OneLoop Engine</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading italic text-[#E1E0CC] tracking-tight leading-[0.95]">
            OneLoop: Continuous visual storytelling with zero friction.
          </h2>
          <p className="text-sm sm:text-base text-[#DEDBC8]/80 font-light font-body mt-4 max-w-2xl mx-auto leading-relaxed">
            OneLoop is our proprietary continuous-loop framework that transforms linear video into an infinite cinematic canvas. By eliminating playback pauses, buffering delays, and jarring cuts, OneLoop maintains a hypnotic, perpetual flow.
          </p>
        </motion.div>

        {/* OneLoop Interactive Showcase Lab */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="liquid-glass rounded-3xl p-6 sm:p-10 border border-white/15 shadow-[0_20px_80px_rgba(0,0,0,0.9)] mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Interactive Video Canvas with Filter Shaders */}
            <div className="lg:col-span-7 relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
              <FadingVideo
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
                className={`w-full h-full object-cover transition-all duration-500 ${
                  activeFilter === 'glare'
                    ? 'contrast-125 brightness-110'
                    : activeFilter === 'grain'
                    ? 'contrast-110 saturate-125'
                    : 'contrast-100 brightness-100'
                }`}
              />

              {/* Dynamic Noise Filter Overlay */}
              {activeFilter === 'grain' && (
                <div className="noise-overlay absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none" />
              )}

              {/* Anamorphic Glare Streak */}
              {activeFilter === 'glare' && (
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#DEDBC8]/10 to-transparent pointer-events-none" />
              )}

              {/* Floating Live Telemetry Badge */}
              <div className="absolute top-4 left-4 z-20 liquid-glass rounded-full px-3 py-1 flex items-center gap-2 text-[10px] font-mono text-primary">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>ONELOOP ACTIVE &bull; {fpsMode} FPS &bull; 0.00ms JANK</span>
              </div>
            </div>

            {/* Right: Technical Loop Controls & Philosophy */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-primary block mb-2">
                  Interactive Lab Controller
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading italic text-[#E1E0CC] mb-3">
                  Perpetual Fluidity
                </h3>
                <p className="text-xs sm:text-sm text-[#DEDBC8]/70 font-light leading-relaxed">
                  Traditional web videos suffer from noticeable loop restarts. OneLoop utilizes pre-buffered requestAnimationFrame memory cycling to ensure the final frame seamlessly overlaps the origin.
                </p>
              </div>

              {/* Interactive Toggles */}
              <div className="space-y-3 pt-2">
                <label className="text-[11px] font-mono text-[#DEDBC8]/60 uppercase tracking-wider flex items-center gap-1.5">
                  <Sliders size={12} className="text-primary" />
                  <span>Optical Post-Processing:</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'clean', label: 'Clean Glass' },
                    { id: 'glare', label: 'Anamorphic' },
                    { id: 'grain', label: 'Film Grain' },
                  ].map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => setActiveFilter(filter.id as 'clean' | 'glare' | 'grain')}
                      className={`py-2 px-3 rounded-xl text-xs font-medium font-mono transition-all ${
                        activeFilter === filter.id
                          ? 'bg-[#DEDBC8] text-black font-semibold shadow-md scale-[1.02]'
                          : 'liquid-glass text-[#E1E0CC]/80 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Frame Velocity Mode */}
              <div className="space-y-3">
                <label className="text-[11px] font-mono text-[#DEDBC8]/60 uppercase tracking-wider flex items-center gap-1.5">
                  <Gauge size={12} className="text-primary" />
                  <span>Target Motion Refresh Rate:</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setFpsMode('24')}
                    className={`py-2 px-3 rounded-xl text-xs font-medium font-mono transition-all ${
                      fpsMode === '24'
                        ? 'bg-[#DEDBC8] text-black font-semibold shadow-md'
                        : 'liquid-glass text-[#E1E0CC]/80 hover:text-white'
                    }`}
                  >
                    24 FPS (Cinematic)
                  </button>
                  <button
                    onClick={() => setFpsMode('60')}
                    className={`py-2 px-3 rounded-xl text-xs font-medium font-mono transition-all ${
                      fpsMode === '60'
                        ? 'bg-[#DEDBC8] text-black font-semibold shadow-md'
                        : 'liquid-glass text-[#E1E0CC]/80 hover:text-white'
                    }`}
                  >
                    60 FPS (Ultra Fluid)
                  </button>
                </div>
              </div>

              {onExploreBrief && (
                <div className="pt-2">
                  <button
                    onClick={onExploreBrief}
                    className="w-full bg-[#DEDBC8] hover:bg-white text-black font-semibold text-xs py-3 rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>Deploy OneLoop for Your Brand</span>
                    <Repeat size={14} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* 3 Core Pillars of OneLoop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="liquid-glass-strong rounded-2xl p-7 flex flex-col justify-between border border-white/10 hover:border-primary/40 transition-all shadow-xl"
          >
            <div>
              <div className="w-12 h-12 rounded-xl liquid-glass flex items-center justify-center text-primary mb-6">
                <Cpu size={24} />
              </div>
              <span className="text-[11px] font-mono text-primary uppercase tracking-widest block mb-1">
                Pillar 01
              </span>
              <h3 className="font-heading italic text-2xl sm:text-3xl text-white mb-3">
                Zero-Jank Micro Fades
              </h3>
              <p className="text-xs sm:text-sm text-[#DEDBC8]/75 font-light leading-relaxed">
                Our custom requestAnimationFrame state machine intercepts the stream at 0.55 seconds before completion, initiating an asynchronous opacity gradient that masks hardware redraws.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#DEDBC8]/50">
              <span>LATENCY: &lt; 1.2ms</span>
              <span>BUFFER: 100% CACHED</span>
            </div>
          </motion.div>

          {/* Pillar 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="liquid-glass-strong rounded-2xl p-7 flex flex-col justify-between border border-white/10 hover:border-primary/40 transition-all shadow-xl"
          >
            <div>
              <div className="w-12 h-12 rounded-xl liquid-glass flex items-center justify-center text-primary mb-6">
                <Layers size={24} />
              </div>
              <span className="text-[11px] font-mono text-primary uppercase tracking-widest block mb-1">
                Pillar 02
              </span>
              <h3 className="font-heading italic text-2xl sm:text-3xl text-white mb-3">
                Liquid Glass Refraction
              </h3>
              <p className="text-xs sm:text-sm text-[#DEDBC8]/75 font-light leading-relaxed">
                Elements layered above the OneLoop stream utilize backdrop blur filters with -webkit-mask composite exclusion, creating authentic chromatic aberrations that mirror physical studio glass.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#DEDBC8]/50">
              <span>MASK: XOR EXCLUDE</span>
              <span>BLUR: 4px - 50px</span>
            </div>
          </motion.div>

          {/* Pillar 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="liquid-glass-strong rounded-2xl p-7 flex flex-col justify-between border border-white/10 hover:border-primary/40 transition-all shadow-xl"
          >
            <div>
              <div className="w-12 h-12 rounded-xl liquid-glass flex items-center justify-center text-primary mb-6">
                <Eye size={24} />
              </div>
              <span className="text-[11px] font-mono text-primary uppercase tracking-widest block mb-1">
                Pillar 03
              </span>
              <h3 className="font-heading italic text-2xl sm:text-3xl text-white mb-3">
                4.8x Visual Retention
              </h3>
              <p className="text-xs sm:text-sm text-[#DEDBC8]/75 font-light leading-relaxed">
                By removing the cognitive friction of play/pause interruptions, OneLoop generates an ambient hypnotic state, driving an average dwell time of 3.4 minutes on primary landing pages.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#DEDBC8]/50">
              <span>ENGAGEMENT: +380%</span>
              <span>CONVERSION: 2.4x</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
