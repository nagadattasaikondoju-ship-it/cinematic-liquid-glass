import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FadingVideo } from '../components/FadingVideo';
import {
  ImageFilledIcon,
  MovieFilledIcon,
  LightbulbFilledIcon,
} from '../components/CustomIcons';

interface CapabilitiesProps {
  onStartProject?: () => void;
}

export const CapabilitiesSection: React.FC<CapabilitiesProps> = ({
  onStartProject,
}) => {
  const partners = [
    'Aeon',
    'Vela',
    'Apex',
    'Orbit',
    'Zeno',
    'Parallax',
    'Noir Studio',
    'Hyperreal',
  ];

  return (
    <section id="capabilities" className="relative w-full bg-black text-[#E1E0CC] selection:bg-[#DEDBC8]/20 selection:text-white pt-16 pb-24 overflow-hidden">
      {/* ----------------- CLIENT ROSTER MARQUEE ----------------- */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="liquid-glass rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10 shadow-2xl">
          <span className="text-xs uppercase font-mono tracking-widest text-primary/70 whitespace-nowrap">
            // Trusted Worldwide by
          </span>
          <div className="flex items-center justify-center flex-wrap gap-8 sm:gap-12 md:gap-14 opacity-85">
            {partners.map((brand) => (
              <span
                key={brand}
                className="font-heading italic text-2xl sm:text-3xl tracking-tight text-[#E1E0CC] hover:text-white transition-colors cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ----------------- CAPABILITIES MAIN ----------------- */}
      <div className="relative min-h-[720px] rounded-3xl overflow-hidden max-w-7xl mx-auto border border-white/10 mx-4 sm:mx-6 md:mx-12">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <FadingVideo
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_093722_ccfc7ebf-182f-419f-8a62-2dc02db7dd9d.mp4"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/80 pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 px-6 sm:px-10 md:px-16 py-16 sm:py-20 flex flex-col justify-between h-full">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="text-xs uppercase font-mono text-primary mb-3 tracking-[0.25em]">
                // 02 Capabilities
              </div>
              <h2 className="font-heading italic text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-[-3px] text-[#E1E0CC]">
                Studio craft,<br />end to end
              </h2>
            </div>

            {onStartProject && (
              <button
                onClick={onStartProject}
                className="liquid-glass-strong rounded-full px-6 py-3 text-xs sm:text-sm font-semibold text-[#E1E0CC] hover:bg-white/10 transition-all flex items-center gap-2 hover:scale-105 active:scale-95 w-fit"
              >
                <span>Initiate Discipline Brief</span>
                <ArrowRight size={14} className="text-primary" />
              </button>
            )}
          </div>

          {/* 3 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Design */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="liquid-glass-strong rounded-2xl p-7 min-h-[380px] flex flex-col justify-between shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/10"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="liquid-glass h-12 w-12 rounded-xl flex items-center justify-center text-primary">
                  <ImageFilledIcon size={24} />
                </div>
                <div className="flex flex-wrap gap-1.5 justify-end">
                  {['Brand Systems', 'Art Direction', 'Visual Identity', 'Motion'].map((tag) => (
                    <span
                      key={tag}
                      className="liquid-glass rounded-full px-3 py-1 text-[11px] text-[#E1E0CC]/90 font-body whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <span className="text-[11px] font-mono text-primary uppercase tracking-widest block mb-1">
                  01 / Discipline
                </span>
                <h3 className="font-heading italic text-3xl md:text-4xl tracking-[-1px] leading-none mb-3 text-white">
                  Design
                </h3>
                <p className="text-sm text-[#DEDBC8]/80 font-body font-light leading-relaxed">
                  We shape identities and interfaces that feel unmistakably yours &mdash; typographic systems, component libraries, and art-directed pages that scale without losing soul.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Engineering */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="liquid-glass-strong rounded-2xl p-7 min-h-[380px] flex flex-col justify-between shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/10"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="liquid-glass h-12 w-12 rounded-xl flex items-center justify-center text-primary">
                  <MovieFilledIcon size={24} />
                </div>
                <div className="flex flex-wrap gap-1.5 justify-end">
                  {['React', 'Next.js', 'Headless CMS', 'Edge-Ready'].map((tag) => (
                    <span
                      key={tag}
                      className="liquid-glass rounded-full px-3 py-1 text-[11px] text-[#E1E0CC]/90 font-body whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <span className="text-[11px] font-mono text-primary uppercase tracking-widest block mb-1">
                  02 / Discipline
                </span>
                <h3 className="font-heading italic text-3xl md:text-4xl tracking-[-1px] leading-none mb-3 text-white">
                  Engineering
                </h3>
                <p className="text-sm text-[#DEDBC8]/80 font-body font-light leading-relaxed">
                  Production-grade front-ends built on modern stacks. Performant, accessible, and instrumented &mdash; with code your team will enjoy extending long after launch.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Growth */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="liquid-glass-strong rounded-2xl p-7 min-h-[380px] flex flex-col justify-between shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/10"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="liquid-glass h-12 w-12 rounded-xl flex items-center justify-center text-primary">
                  <LightbulbFilledIcon size={24} />
                </div>
                <div className="flex flex-wrap gap-1.5 justify-end">
                  {['SEO', 'Analytics', 'A/B Testing', 'Retention'].map((tag) => (
                    <span
                      key={tag}
                      className="liquid-glass rounded-full px-3 py-1 text-[11px] text-[#E1E0CC]/90 font-body whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <span className="text-[11px] font-mono text-primary uppercase tracking-widest block mb-1">
                  03 / Discipline
                </span>
                <h3 className="font-heading italic text-3xl md:text-4xl tracking-[-1px] leading-none mb-3 text-white">
                  Growth
                </h3>
                <p className="text-sm text-[#DEDBC8]/80 font-body font-light leading-relaxed">
                  Launch is the starting line. We partner with your team on conversion, content, and iteration loops that turn a beautiful site into a compounding asset.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
