import React from 'react';
import { motion } from 'framer-motion';
import { FadingVideo } from '../components/FadingVideo';
import { BlurText } from '../components/BlurText';
import {
  ArrowUpRightIcon,
  PlayFilledIcon,
  ClockStrokeIcon,
  GlobeStrokeIcon,
  ImageFilledIcon,
  MovieFilledIcon,
  LightbulbFilledIcon,
} from '../components/CustomIcons';

interface AgencyHeroProps {
  onStartProject?: () => void;
  onWatchShowreel?: () => void;
}

export const AgencyHeroAndCapabilities: React.FC<AgencyHeroProps> = ({
  onStartProject,
  onWatchShowreel,
}) => {
  const motionPreset = {
    initial: { filter: 'blur(10px)', opacity: 0, y: 20 },
    animate: { filter: 'blur(0px)', opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' },
  };

  return (
    <div className="w-full bg-black text-white selection:bg-white/20">
      {/* =========================================================================
          SECTION 1: HERO (Crafted Digital Experiences)
         ========================================================================= */}
      <section className="relative h-screen overflow-hidden bg-black flex flex-col justify-between">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <FadingVideo
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260619_191346_9d19d66e-86a4-47f7-8dc6-712c1788c3b2.mp4"
            className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0"
            style={{ width: '120%', height: '120%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90 pointer-events-none" />
        </div>

        {/* Floating Navbar */}
        <header className="fixed top-4 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16 pointer-events-auto">
          {/* Left Brand Circle */}
          <div className="liquid-glass h-12 w-12 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-all">
            <span className="font-heading italic text-2xl text-white">a</span>
          </div>

          {/* Center Links Pill */}
          <nav className="hidden md:flex items-center gap-1 liquid-glass rounded-full px-1.5 py-1.5 shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
            {['Work', 'Studio', 'Services', 'Journal', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-3 py-2 text-sm font-medium text-white/90 hover:text-white font-body transition-colors rounded-full hover:bg-white/5"
              >
                {item}
              </a>
            ))}
            <button
              onClick={onStartProject}
              className="bg-white hover:bg-white/90 text-black px-4 py-2 rounded-full text-xs font-semibold font-body flex items-center gap-1.5 ml-2 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowUpRightIcon size={16} />
            </button>
          </nav>

          {/* Right Spacer */}
          <div className="h-12 w-12" />
        </header>

        {/* Hero Main Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center pt-24 px-4 text-center">
          {/* Badge */}
          <motion.div
            initial={motionPreset.initial}
            animate={motionPreset.animate}
            transition={{ ...motionPreset.transition, delay: 0.4 }}
            className="liquid-glass rounded-full px-4 py-1.5 inline-flex items-center gap-2.5 text-xs text-white/90 font-body mb-2"
          >
            <span className="bg-white text-black font-semibold px-2 py-0.5 rounded-full text-[10px] tracking-wider uppercase">
              New
            </span>
            <span>Booking Q3 2026 engagements &mdash; limited capacity</span>
          </motion.div>

          {/* Headline with BlurText */}
          <div className="mt-6 max-w-4xl mx-auto">
            <BlurText
              text="Crafted Digital Experiences Built to Outlast Trends"
              className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.85] tracking-[-4px]"
            />
          </div>

          {/* Subtext */}
          <motion.p
            initial={motionPreset.initial}
            animate={motionPreset.animate}
            transition={{ ...motionPreset.transition, delay: 0.8 }}
            className="mt-4 text-sm md:text-base text-white max-w-2xl font-body font-light leading-snug text-white/90"
          >
            We are a small studio of designers and engineers shaping brand-defining websites for ambitious companies. Precise typography, cinematic motion, and code you can be proud of.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={motionPreset.initial}
            animate={motionPreset.animate}
            transition={{ ...motionPreset.transition, delay: 1.1 }}
            className="mt-6 flex items-center gap-6"
          >
            <button
              onClick={onStartProject}
              className="liquid-glass-strong rounded-full px-5 py-2.5 flex items-center gap-2 text-sm font-medium font-body text-white hover:bg-white/10 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowUpRightIcon size={16} />
            </button>
            <button
              onClick={onWatchShowreel}
              className="text-white hover:text-white/80 font-body text-sm font-medium flex items-center gap-2 transition-colors cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                <PlayFilledIcon size={12} />
              </div>
              <span>Watch Showreel</span>
            </button>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={motionPreset.initial}
            animate={motionPreset.animate}
            transition={{ ...motionPreset.transition, delay: 1.3 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            {/* Card 1 */}
            <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] text-left">
              <div className="text-white/80">
                <ClockStrokeIcon size={22} />
              </div>
              <div className="text-4xl font-heading italic tracking-[-1px] leading-none mt-4 text-white">
                6 Weeks
              </div>
              <p className="text-xs text-white/70 font-body font-light mt-2 leading-tight">
                Average End-to-End Launch Time
              </p>
            </div>

            {/* Card 2 */}
            <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] text-left">
              <div className="text-white/80">
                <GlobeStrokeIcon size={22} />
              </div>
              <div className="text-4xl font-heading italic tracking-[-1px] leading-none mt-4 text-white">
                140+
              </div>
              <p className="text-xs text-white/70 font-body font-light mt-2 leading-tight">
                Brands Shipped Across Four Continents
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Trust Bar */}
        <motion.div
          initial={motionPreset.initial}
          animate={motionPreset.animate}
          transition={{ ...motionPreset.transition, delay: 1.4 }}
          className="relative z-10 flex flex-col items-center gap-4 pb-8"
        >
          <div className="liquid-glass rounded-full px-4 py-1 text-xs text-white/70 font-body">
            Trusted by founders, operators, and creative directors worldwide
          </div>
          <div className="flex items-center justify-center flex-wrap gap-12 md:gap-16 opacity-85">
            {['Aeon', 'Vela', 'Apex', 'Orbit', 'Zeno'].map((brand) => (
              <span
                key={brand}
                className="font-heading italic text-2xl md:text-3xl tracking-tight text-white/90 hover:text-white transition-colors cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* =========================================================================
          SECTION 2: CAPABILITIES
         ========================================================================= */}
      <section
        id="capabilities"
        className="relative min-h-screen overflow-hidden bg-black flex flex-col justify-between"
      >
        {/* Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <FadingVideo
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_093722_ccfc7ebf-182f-419f-8a62-2dc02db7dd9d.mp4"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80 pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 px-8 md:px-16 lg:px-20 pt-24 pb-16 flex flex-col min-h-screen justify-between max-w-7xl mx-auto w-full">
          {/* Header */}
          <div>
            <div className="text-sm font-body text-white/80 mb-4 tracking-wider">// Capabilities</div>
            <h2 className="font-heading italic text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px] text-white">
              Studio craft,<br />end to end
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Design */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col justify-between shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="liquid-glass h-11 w-11 rounded-[0.75rem] flex items-center justify-center text-white">
                  <ImageFilledIcon size={22} />
                </div>
                <div className="flex flex-wrap gap-1.5 justify-end">
                  {['Brand Systems', 'Art Direction', 'Visual Identity', 'Motion'].map((tag) => (
                    <span
                      key={tag}
                      className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-heading italic text-3xl md:text-4xl tracking-[-1px] leading-none mb-3 text-white">
                  Design
                </h3>
                <p className="text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]">
                  We shape identities and interfaces that feel unmistakably yours &mdash; typographic systems, component libraries, and art-directed pages that scale without losing soul.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Engineering */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col justify-between shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="liquid-glass h-11 w-11 rounded-[0.75rem] flex items-center justify-center text-white">
                  <MovieFilledIcon size={22} />
                </div>
                <div className="flex flex-wrap gap-1.5 justify-end">
                  {['React', 'Next.js', 'Headless CMS', 'Edge-Ready'].map((tag) => (
                    <span
                      key={tag}
                      className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-heading italic text-3xl md:text-4xl tracking-[-1px] leading-none mb-3 text-white">
                  Engineering
                </h3>
                <p className="text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]">
                  Production-grade front-ends built on modern stacks. Performant, accessible, and instrumented &mdash; with code your team will enjoy extending long after launch.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Growth */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col justify-between shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="liquid-glass h-11 w-11 rounded-[0.75rem] flex items-center justify-center text-white">
                  <LightbulbFilledIcon size={22} />
                </div>
                <div className="flex flex-wrap gap-1.5 justify-end">
                  {['SEO', 'Analytics', 'A/B Testing', 'Retention'].map((tag) => (
                    <span
                      key={tag}
                      className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-heading italic text-3xl md:text-4xl tracking-[-1px] leading-none mb-3 text-white">
                  Growth
                </h3>
                <p className="text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]">
                  Launch is the starting line. We partner with your team on conversion, content, and iteration loops that turn a beautiful site into a compounding asset.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
