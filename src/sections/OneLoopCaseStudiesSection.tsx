import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, TrendingUp, Sparkles } from 'lucide-react';
import { FadingVideo } from '../components/FadingVideo';

interface CaseStudiesProps {
  onStartProject?: () => void;
}

export const OneLoopCaseStudiesSection: React.FC<CaseStudiesProps> = ({
  onStartProject,
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const studies = [
    {
      id: 'aether',
      title: 'Aether Dynamics // Spatial Web Launch',
      client: 'Aether Aerospace',
      category: 'Spatial Computing',
      video: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260619_191346_9d19d66e-86a4-47f7-8dc6-712c1788c3b2.mp4',
      metrics: {
        primary: '+340%',
        label: 'Session Dwell Time',
        secondary: '99.4%',
        secondaryLabel: 'Loop View-Through Rate',
      },
      description:
        'Aether needed to introduce their spatial computing interface to enterprise buyers without the friction of standard video players. OneLoop deployed a continuous 60 FPS orbit that synchronized with user scrolling.',
      tags: ['Spatial Audio', 'Unreal Engine', 'WebGL 2.0', 'Zero CLS'],
      results: [
        'Zero layout shifts (CLS 0.000) across all devices',
        '3.4x higher conversion into developer beta signups',
        'Sub-50ms initial frame delivery via edge memory warming',
      ],
    },
    {
      id: 'chronos',
      title: 'Chronos Horology // Pure Escapement',
      client: 'Chronos Geneve',
      category: 'Luxury & E-Commerce',
      video: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4',
      metrics: {
        primary: '2.8x',
        label: 'Checkout Conversion',
        secondary: '< 42ms',
        secondaryLabel: 'TTFB Edge Render',
      },
      description:
        'A continuous macro loop showcasing the tourbillon movement of a $45,000 mechanical watch. Integrated liquid glass optical refraction that magnifies components dynamically as users hover.',
      tags: ['Macro 4K', 'Liquid Glass 50px', 'DaVinci ACES', 'Mobile 120Hz'],
      results: [
        'Featured in Awwwards Site of the Month 2026',
        '100% video completion rate over 2.4 million sessions',
        'Replaced 45MB of static high-res stills with one 3.8MB optimized loop',
      ],
    },
    {
      id: 'vortex',
      title: 'Vortex AI // Neural Interface HUD',
      client: 'Vortex Intelligence',
      category: 'AI & Data Infrastructure',
      video: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4',
      metrics: {
        primary: '4.2M',
        label: 'Global Impressions',
        secondary: '0.00ms',
        secondaryLabel: 'Frame Seam Time',
      },
      description:
        'Simulating real-time neural network tensor flows in a continuous GLSL shader canvas. Viewers manipulate generative particle velocity directly via cursor interaction.',
      tags: ['GLSL Compute', 'Fluid Physics', 'Binaural Audio', 'Edge Cached'],
      results: [
        'Average user dwell time jumped from 42s to 3m 18s',
        'Over 85,000 waitlist reservations secured in week one',
        'Seamless fallbacks for low-battery mobile devices',
      ],
    },
  ];

  const current = studies[activeTab];

  return (
    <section className="py-24 px-4 sm:px-6 md:px-12 bg-black text-[#E1E0CC] selection:bg-[#DEDBC8]/20 selection:text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-xs uppercase font-mono text-primary mb-3 tracking-[0.25em] flex items-center gap-2">
              <Sparkles size={13} />
              <span>// 06 Flagship OneLoop Case Studies</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading italic text-[#E1E0CC] tracking-tight">
              Proven in production.<br />Scaled across millions.
            </h2>
          </div>

          {/* Project Switcher Tabs */}
          <div className="flex items-center gap-2 liquid-glass-strong p-1.5 rounded-full w-fit">
            {studies.map((study, idx) => (
              <button
                key={study.id}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer ${
                  activeTab === idx
                    ? 'bg-[#DEDBC8] text-black font-semibold shadow-md'
                    : 'text-[#E1E0CC]/70 hover:text-white hover:bg-white/5'
                }`}
              >
                0{idx + 1} &bull; {study.client}
              </button>
            ))}
          </div>
        </div>

        {/* Active Case Study Spotlight Card */}
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="liquid-glass rounded-3xl p-6 sm:p-10 border border-white/15 shadow-[0_20px_80px_rgba(0,0,0,0.9)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Video Showcase */}
            <div className="lg:col-span-7 relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <FadingVideo
                src={current.video}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* Top Tag */}
              <div className="absolute top-4 left-4 liquid-glass rounded-full px-3 py-1 text-[11px] font-mono text-primary z-10">
                {current.category}
              </div>

              {/* Bottom Metrics Bar */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
                <div className="flex items-center gap-6">
                  <div>
                    <span className="text-2xl sm:text-3xl font-heading italic text-white block leading-none">
                      {current.metrics.primary}
                    </span>
                    <span className="text-[10px] uppercase font-mono text-[#DEDBC8]/70">
                      {current.metrics.label}
                    </span>
                  </div>
                  <div className="w-[1px] h-8 bg-white/20" />
                  <div>
                    <span className="text-2xl sm:text-3xl font-heading italic text-white block leading-none">
                      {current.metrics.secondary}
                    </span>
                    <span className="text-[10px] uppercase font-mono text-[#DEDBC8]/70">
                      {current.metrics.secondaryLabel}
                    </span>
                  </div>
                </div>

                <div className="liquid-glass rounded-full p-2.5 text-primary">
                  <TrendingUp size={16} />
                </div>
              </div>
            </div>

            {/* Right: Technical Specs & Impact */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-mono text-primary uppercase tracking-widest block mb-1">
                  Case Architecture
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading italic text-white mb-3">
                  {current.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#DEDBC8]/80 font-light leading-relaxed mb-6">
                  {current.description}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-2.5 mb-6">
                  {current.results.map((res, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-[#E1E0CC]/90">
                      <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                        <Check size={11} />
                      </div>
                      <span>{res}</span>
                    </div>
                  ))}
                </div>

                {/* Tag Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {current.tags.map((tag) => (
                    <span
                      key={tag}
                      className="liquid-glass-strong rounded-full px-3 py-1 text-[11px] font-mono text-[#DEDBC8]/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {onStartProject && (
                <button
                  onClick={onStartProject}
                  className="bg-[#DEDBC8] hover:bg-white text-black font-semibold text-xs py-3.5 px-6 rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg flex items-center justify-center gap-2 w-full cursor-pointer"
                >
                  <span>Commission a Similar OneLoop Build</span>
                  <ArrowUpRight size={15} />
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
