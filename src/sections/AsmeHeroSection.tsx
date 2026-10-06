import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, ArrowRight, Instagram, Twitter } from 'lucide-react';
import { FadingVideo } from '../components/FadingVideo';

interface AsmeHeroSectionProps {
  onExploreClick?: () => void;
  onShowManifesto?: () => void;
}

export const AsmeHeroSection: React.FC<AsmeHeroSectionProps> = ({
  onExploreClick,
  onShowManifesto
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
    <div className="relative min-h-screen bg-black overflow-hidden flex flex-col justify-between select-none">
      {/* Background Video with 17% downward shift and RAF fading */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <FadingVideo
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4"
          className="w-full h-full object-cover translate-y-[17%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80 pointer-events-none" />
      </div>

      {/* Navigation Bar */}
      <header className="relative z-20 pl-6 pr-6 py-6 w-full">
        <motion.nav
          initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="liquid-glass rounded-full px-6 py-3 flex items-center justify-between max-w-5xl mx-auto"
        >
          {/* Logo & Links */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 cursor-pointer" onClick={onExploreClick}>
              <Globe size={24} className="text-white" />
              <span className="text-white font-semibold text-lg tracking-tight">Asme</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#capabilities" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
                Features
              </a>
              <a href="#prisma" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
                Pricing
              </a>
              <a href="#about" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
                About
              </a>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={onShowManifesto}
              className="text-white hover:text-white/80 text-sm font-medium transition-colors px-2 py-1"
            >
              Sign Up
            </button>
            <button
              onClick={onShowManifesto}
              className="liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium hover:bg-white/5 transition-all"
            >
              Login
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Hero Content Area */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[20%]">
        {/* Main Heading in Instrument Serif */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: 'blur(12px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: "'Instrument Serif', serif" }}
          className="text-5xl md:text-6xl lg:text-7xl text-white mb-8 tracking-tight whitespace-nowrap"
        >
          Built for the curious
        </motion.h1>

        {/* Interactive Center Input & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl w-full space-y-4"
        >
          {/* Email input bar with liquid-glass morphism */}
          <form
            onSubmit={handleSubscribe}
            className="liquid-glass rounded-full pl-6 pr-2 py-2 flex items-center gap-3 transition-all focus-within:shadow-[0_0_25px_rgba(255,255,255,0.15)]"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={subscribed ? "✓ You're on the exclusive list!" : "Enter your email"}
              className="bg-transparent flex-1 text-white placeholder:text-white/40 text-base outline-none border-none"
              required
            />
            <button
              type="submit"
              aria-label="Submit email"
              className="bg-white hover:bg-white/90 rounded-full p-3 text-black transition-all hover:scale-105 active:scale-95 flex items-center justify-center cursor-pointer"
            >
              <ArrowRight size={20} />
            </button>
          </form>

          {/* Subtitle Description */}
          <p className="text-white text-sm leading-relaxed px-4 font-light">
            Stay updated with the latest news and insights. Subscribe to our newsletter today and never miss out on exciting updates.
          </p>

          {/* Manifesto Button */}
          <div className="pt-2">
            <button
              onClick={onShowManifesto}
              className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-all inline-flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Read the Manifesto</span>
              <ArrowRight size={16} className="text-white/70" />
            </button>
          </div>
        </motion.div>
      </main>

      {/* Social Icons Footer */}
      <footer className="relative z-10 flex justify-center gap-4 pb-12">
        <motion.a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow Asme on Instagram"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all hover:scale-110"
        >
          <Instagram size={20} />
        </motion.a>
        <motion.a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow Asme on Twitter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all hover:scale-110"
        >
          <Twitter size={20} />
        </motion.a>
        <motion.a
          href="#explore"
          onClick={(e) => {
            e.preventDefault();
            if (onExploreClick) onExploreClick();
          }}
          aria-label="Explore Global Ecosystem"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all hover:scale-110"
        >
          <Globe size={20} />
        </motion.a>
      </footer>
    </div>
  );
};
