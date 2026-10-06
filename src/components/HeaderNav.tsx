import React from 'react';
import { Globe, ArrowRight, Sparkles } from 'lucide-react';

interface HeaderNavProps {
  onStartProject: () => void;
  onShowManifesto: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  onStartProject,
  onShowManifesto,
}) => {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-8 pointer-events-none">
      <nav className="liquid-glass-strong rounded-full px-4 sm:px-6 py-3 flex items-center justify-between max-w-6xl mx-auto border border-white/20 shadow-[0_10px_35px_rgba(0,0,0,0.8)] pointer-events-auto">
        {/* Left: Brand Identity */}
        <a href="#hero" className="flex items-center gap-2.5 cursor-pointer group">
          <div className="liquid-glass w-9 h-9 rounded-full flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
            <Globe size={18} />
          </div>
          <div className="flex items-center gap-1.5 font-heading italic text-xl tracking-tight text-[#E1E0CC]">
            <span>Asme</span>
            <span className="text-white/40">&bull;</span>
            <span className="text-primary font-normal">Prisma</span>
          </div>
        </a>

        {/* Center: Smooth Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 text-xs font-mono">
          {[
            { label: '// 01 Vision', href: '#hero' },
            { label: '// 02 Capabilities', href: '#capabilities' },
            { label: '// 03 Director', href: '#about' },
            { label: '// 04 Workflows', href: '#workflows' },
            { label: '// 05 Showreel', href: '#showreel' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[#DEDBC8]/70 hover:text-white transition-colors tracking-wider"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onShowManifesto}
            className="text-xs font-mono text-[#DEDBC8]/70 hover:text-white transition-colors px-2 py-1 hidden sm:inline-block"
          >
            Manifesto
          </button>
          <button
            onClick={onStartProject}
            className="bg-[#DEDBC8] hover:bg-white text-black px-4 py-2 rounded-full text-xs font-semibold font-body flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-md"
          >
            <Sparkles size={13} className="text-black" />
            <span>Initiate Brief</span>
            <ArrowRight size={14} className="text-black" />
          </button>
        </div>
      </nav>
    </header>
  );
};
