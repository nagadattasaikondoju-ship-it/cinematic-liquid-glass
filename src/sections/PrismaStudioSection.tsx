import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { WordsPullUpMultiStyle } from '../components/WordsPullUpMultiStyle';
import { ProgressiveTextReveal } from '../components/AnimatedLetter';

interface PrismaStudioProps {
  onJoinLab?: () => void;
  onInquiriesClick?: () => void;
}

export const PrismaStudioSection: React.FC<PrismaStudioProps> = ({
  onJoinLab,
}) => {
  return (
    <div id="workflows" className="w-full bg-black text-[#E1E0CC] selection:bg-[#DEDBC8]/20 selection:text-white">
      {/* =========================================================================
          ABOUT SECTION (Marcus Chen + Progressive Reveal)
         ========================================================================= */}
      <section id="about" className="bg-black py-20 px-4 sm:px-6 md:px-12 flex justify-center">
        <div className="bg-[#101010] border border-white/10 rounded-3xl p-8 sm:p-12 md:p-20 max-w-6xl w-full text-center shadow-[0_20px_60px_rgba(0,0,0,0.9)] liquid-glass">
          <div className="inline-flex items-center gap-2 text-primary text-xs uppercase tracking-[0.25em] font-semibold mb-6">
            <Sparkles size={14} />
            <span>// 03 Director & Philosophy</span>
          </div>

          {/* Heading with multi-style words */}
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl mx-auto leading-[1.1] sm:leading-[1.0] mb-10 text-[#E1E0CC]">
            <WordsPullUpMultiStyle
              segments={[
                {
                  text: 'I am Marcus Chen,',
                  className: 'font-normal font-almarai text-[#E1E0CC] text-2xl sm:text-4xl md:text-5xl lg:text-6xl',
                },
                {
                  text: 'a self-taught director.',
                  className: 'font-serif italic text-primary text-3xl sm:text-5xl md:text-6xl lg:text-7xl',
                },
                {
                  text: 'I shape high-impact brand identities, cinematic 3D, and web engineering.',
                  className: 'font-normal font-almarai text-[#E1E0CC]/90 text-xl sm:text-3xl md:text-4xl lg:text-5xl',
                },
              ]}
            />
          </div>

          {/* Progressive scroll-linked text */}
          <ProgressiveTextReveal
            text="Over the last seven years, I have worked with Parallax, a Berlin-based production house that crafts cinema, series, and Noir Studio in Paris. Together, we have created work that has earned international acclaim at several major festivals."
            className="text-[#DEDBC8] text-sm sm:text-base md:text-lg max-w-3xl mx-auto font-light leading-relaxed"
          />
        </div>
      </section>

      {/* =========================================================================
          STUDIO WORKFLOWS & FEATURES SECTION (4-Column Studio Grid)
         ========================================================================= */}
      <section className="relative min-h-screen bg-black py-20 px-4 sm:px-6 md:px-12 overflow-hidden">
        {/* Subtle Noise Background */}
        <div className="bg-noise absolute inset-0 opacity-[0.12] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <div className="text-xs uppercase font-mono text-primary mb-3 tracking-[0.25em]">
              // 04 Studio Workflows & System
            </div>
            <WordsPullUpMultiStyle
              segments={[
                {
                  text: 'Studio-grade workflows for visionary creators.',
                  className: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#E1E0CC] font-heading italic tracking-tight',
                },
                {
                  text: 'Built for pure vision. Powered by art.',
                  className: 'text-base sm:text-lg md:text-xl text-[#DEDBC8]/60 font-body font-light mt-1',
                },
              ]}
            />
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
                  Interactive Canvas
                </span>
                <h3 className="text-2xl font-heading italic text-[#E1E0CC]">Your creative canvas.</h3>
                <p className="text-xs text-[#DEDBC8]/70 font-light mt-1">
                  Ultra-high bitrate viewport with real-time dynamic grain.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Project Storyboard */}
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
                <h3 className="text-xl font-heading italic text-[#E1E0CC] mb-4">Project Storyboard.</h3>
                <ul className="space-y-3 text-xs text-[#DEDBC8]/70">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-primary flex-shrink-0" />
                    <span>Non-linear sequence planning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-primary flex-shrink-0" />
                    <span>Real-time color temperature tags</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-primary flex-shrink-0" />
                    <span>Vector shot framing overlays</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-primary flex-shrink-0" />
                    <span>Export to EDL & XML formats</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#DEDBC8]/50">Sequence Flow</span>
                <button
                  onClick={onJoinLab}
                  className="flex items-center gap-1 text-xs text-primary hover:text-white transition-colors cursor-pointer"
                >
                  <span>Learn more</span>
                  <ArrowRight size={14} className="-rotate-45" />
                </button>
              </div>
            </motion.div>

            {/* Card 3: Smart Critiques */}
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
                <h3 className="text-xl font-heading italic text-[#E1E0CC] mb-4">Smart Critiques.</h3>
                <ul className="space-y-3 text-xs text-[#DEDBC8]/70">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-primary flex-shrink-0" />
                    <span>AI scene pacing analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-primary flex-shrink-0" />
                    <span>Synchronized director commentary</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-primary flex-shrink-0" />
                    <span>DaVinci Resolve plugin integration</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#DEDBC8]/50">Feedback Engine</span>
                <button
                  onClick={onJoinLab}
                  className="flex items-center gap-1 text-xs text-primary hover:text-white transition-colors cursor-pointer"
                >
                  <span>Learn more</span>
                  <ArrowRight size={14} className="-rotate-45" />
                </button>
              </div>
            </motion.div>

            {/* Card 4: Immersion Capsule */}
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
                <h3 className="text-xl font-heading italic text-[#E1E0CC] mb-4">Immersion Capsule.</h3>
                <ul className="space-y-3 text-xs text-[#DEDBC8]/70">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-primary flex-shrink-0" />
                    <span>Zero-distraction workspace mode</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-primary flex-shrink-0" />
                    <span>Generative binaural soundscapes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-primary flex-shrink-0" />
                    <span>Automated cut revision logging</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#DEDBC8]/50">Focus Matrix</span>
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
