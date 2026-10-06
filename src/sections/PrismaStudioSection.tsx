import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { WordsPullUp } from '../components/WordsPullUp';
import { WordsPullUpMultiStyle } from '../components/WordsPullUpMultiStyle';
import { ProgressiveTextReveal } from '../components/AnimatedLetter';

interface PrismaStudioProps {
  onJoinLab?: () => void;
  onInquiriesClick?: () => void;
}

export const PrismaStudioSection: React.FC<PrismaStudioProps> = ({
  onJoinLab,
  onInquiriesClick,
}) => {
  return (
    <div id="prisma" className="w-full bg-black text-[#E1E0CC] selection:bg-[#DEDBC8]/20 selection:text-white">
      {/* =========================================================================
          PRISMA HERO SECTION (Inset Container + Giant Typography)
         ========================================================================= */}
      <section className="h-screen w-full p-4 md:p-6 bg-black flex flex-col justify-between box-border">
        <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden bg-black flex flex-col justify-between border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.9)]">
          {/* Background Video */}
          <video
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
            className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Noise Overlay */}
          <div className="noise-overlay absolute inset-0 opacity-[0.7] mix-blend-overlay pointer-events-none z-1" />

          {/* Cinematic Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 z-2 pointer-events-none" />

          {/* Hanging Navbar Pill */}
          <div className="relative z-20 flex justify-center w-full">
            <nav className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8 border-b border-x border-white/15 shadow-2xl flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
              {[
                { name: 'Our story', href: '#about' },
                { name: 'Collective', href: '#collective' },
                { name: 'Workshops', href: '#workshops' },
                { name: 'Programs', href: '#programs' },
                { name: 'Inquiries', href: '#inquiries', action: onInquiriesClick },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    if (item.action) {
                      e.preventDefault();
                      item.action();
                    }
                  }}
                  style={{ color: 'rgba(225, 224, 204, 0.8)' }}
                  className="text-[10px] sm:text-xs md:text-sm font-medium tracking-wide hover:text-[#E1E0CC] transition-colors whitespace-nowrap"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Hero Bottom Content Grid */}
          <div className="relative z-10 w-full p-6 sm:p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end w-full">
              {/* Giant Left Heading */}
              <div className="lg:col-span-8 flex items-baseline">
                <WordsPullUp
                  text="Prisma"
                  showAsterisk={true}
                  className="text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw] font-medium leading-[0.85] tracking-[-0.07em] text-[#E1E0CC] select-none"
                />
              </div>

              {/* Right Column: Description & Action */}
              <div className="lg:col-span-4 flex flex-col gap-6 pb-2 sm:pb-4 lg:pb-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="text-primary/70 text-xs sm:text-sm md:text-base leading-[1.3] font-light max-w-md"
                >
                  Prisma is a worldwide network of visual artists, filmmakers and storytellers bound not by place, status or labels but by passion and hunger to unlock potential through our unique perspectives.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <button
                    onClick={onJoinLab}
                    className="group bg-primary hover:bg-[#eae8d8] text-black font-medium text-sm sm:text-base rounded-full pl-6 pr-2 py-2 inline-flex items-center gap-4 transition-all duration-300 hover:gap-6 shadow-xl cursor-pointer"
                  >
                    <span>Join the lab</span>
                    <div className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <ArrowRight size={18} />
                    </div>
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PRISMA ABOUT SECTION (Marcus Chen + Progressive Reveal)
         ========================================================================= */}
      <section id="about" className="bg-black py-28 px-4 sm:px-6 md:px-12 flex justify-center">
        <div className="bg-[#101010] border border-white/5 rounded-3xl p-8 sm:p-12 md:p-20 max-w-6xl w-full text-center shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          <span className="text-primary text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold block mb-4">
            Visual arts
          </span>

          {/* Heading with multi-style words */}
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-4xl mx-auto leading-[1.05] sm:leading-[0.95] mb-12 text-[#E1E0CC]">
            <WordsPullUpMultiStyle
              segments={[
                { text: 'I am Marcus Chen,', className: 'font-normal font-almarai' },
                { text: 'a self-taught director.', className: 'font-serif italic text-primary' },
                {
                  text: 'I have skills in color grading, visual effects, and narrative design.',
                  className: 'font-normal font-almarai',
                },
              ]}
            />
          </div>

          {/* Progressive scroll-linked text */}
          <ProgressiveTextReveal
            text="Over the last seven years, I have worked with Parallax, a Berlin-based production house that crafts cinema, series, and Noir Studio in Paris. Together, we have created work that has earned international acclaim at several major festivals."
            className="text-[#DEDBC8] text-xs sm:text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed"
          />
        </div>
      </section>

      {/* =========================================================================
          PRISMA FEATURES SECTION (4-Column Studio Grid)
         ========================================================================= */}
      <section className="relative min-h-screen bg-black py-24 px-4 sm:px-6 md:px-12 overflow-hidden">
        {/* Subtle Noise Background */}
        <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <WordsPullUpMultiStyle
              segments={[
                {
                  text: 'Studio-grade workflows for visionary creators.',
                  className: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#E1E0CC] font-normal block w-full',
                },
                {
                  text: 'Built for pure vision. Powered by art.',
                  className: 'text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-500 font-normal block w-full mt-2',
                },
              ]}
            />
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:h-[490px]">
            {/* Card 1: Video Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl overflow-hidden min-h-[380px] lg:min-h-full flex flex-col justify-end p-6 border border-white/10 group"
            >
              <video
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="relative z-10">
                <span className="text-xs uppercase tracking-widest text-primary/80 font-semibold mb-1 block">
                  Interactive Frame
                </span>
                <h3 className="text-2xl font-normal text-[#E1E0CC]">Your creative canvas.</h3>
              </div>
            </motion.div>

            {/* Card 2: Project Storyboard */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#212121] border border-white/5 rounded-2xl p-6 flex flex-col justify-between min-h-[380px] lg:min-h-full hover:border-white/20 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <img
                    src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85"
                    alt="Storyboard icon"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover"
                  />
                  <span className="text-gray-500 font-mono text-xs">01</span>
                </div>
                <h3 className="text-xl font-medium text-[#E1E0CC] mb-4">Project Storyboard.</h3>
                <ul className="space-y-2.5 text-xs text-gray-400">
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
              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-gray-400">Deep Inspection</span>
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
              className="bg-[#212121] border border-white/5 rounded-2xl p-6 flex flex-col justify-between min-h-[380px] lg:min-h-full hover:border-white/20 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <img
                    src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85"
                    alt="Critique icon"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover"
                  />
                  <span className="text-gray-500 font-mono text-xs">02</span>
                </div>
                <h3 className="text-xl font-medium text-[#E1E0CC] mb-4">Smart Critiques.</h3>
                <ul className="space-y-2.5 text-xs text-gray-400">
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
              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-gray-400">Feedback Loop</span>
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
              className="bg-[#212121] border border-white/5 rounded-2xl p-6 flex flex-col justify-between min-h-[380px] lg:min-h-full hover:border-white/20 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <img
                    src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85"
                    alt="Immersion icon"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover"
                  />
                  <span className="text-gray-500 font-mono text-xs">03</span>
                </div>
                <h3 className="text-xl font-medium text-[#E1E0CC] mb-4">Immersion Capsule.</h3>
                <ul className="space-y-2.5 text-xs text-gray-400">
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
              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-gray-400">Deep Work</span>
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
