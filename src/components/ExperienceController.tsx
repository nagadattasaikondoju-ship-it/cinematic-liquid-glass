import React from 'react';
import { Sparkles, Layers, Compass, Play } from 'lucide-react';

interface ExperienceControllerProps {
  activeView: 'all' | 'asme' | 'agency' | 'prisma';
  onSelectView: (view: 'all' | 'asme' | 'agency' | 'prisma') => void;
  onOpenShowreel: () => void;
}

export const ExperienceController: React.FC<ExperienceControllerProps> = ({
  activeView,
  onSelectView,
  onOpenShowreel,
}) => {
  return (
    <aside className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto" aria-label="Experience switcher">
      <div className="liquid-glass-strong rounded-full px-2 py-1.5 flex items-center gap-1 shadow-[0_10px_35px_rgba(0,0,0,0.8)] border border-white/20">
        <button
          onClick={() => onSelectView('all')}
          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
            activeView === 'all'
              ? 'bg-white text-black font-semibold shadow-md'
              : 'text-white/80 hover:text-white hover:bg-white/5'
          }`}
        >
          <Layers size={13} />
          <span>Full Journey</span>
        </button>

        <div className="w-[1px] h-4 bg-white/15" />

        <button
          onClick={() => onSelectView('asme')}
          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
            activeView === 'asme'
              ? 'bg-white text-black font-semibold shadow-md'
              : 'text-white/80 hover:text-white hover:bg-white/5'
          }`}
        >
          <Compass size={13} />
          <span>Asme Hero</span>
        </button>

        <button
          onClick={() => onSelectView('agency')}
          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
            activeView === 'agency'
              ? 'bg-white text-black font-semibold shadow-md'
              : 'text-white/80 hover:text-white hover:bg-white/5'
          }`}
        >
          <Sparkles size={13} />
          <span>Capabilities</span>
        </button>

        <button
          onClick={() => onSelectView('prisma')}
          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
            activeView === 'prisma'
              ? 'bg-white text-black font-semibold shadow-md'
              : 'text-white/80 hover:text-white hover:bg-white/5'
          }`}
        >
          <span className="font-serif italic font-bold">P*</span>
          <span>Prisma Lab</span>
        </button>

        <div className="w-[1px] h-4 bg-white/15" />

        <button
          onClick={onOpenShowreel}
          className="liquid-glass rounded-full px-3 py-1.5 text-xs text-primary hover:text-white flex items-center gap-1.5 hover:scale-105 transition-all"
          title="Watch 4K Showreel"
        >
          <Play size={12} className="fill-current" />
          <span className="hidden sm:inline">Showreel</span>
        </button>
      </div>
    </aside>
  );
};
